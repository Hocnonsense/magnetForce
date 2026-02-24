import * as Three from '../utils/three';
import { solveQuartic } from '../utils/quartic-solver';

/**
 * @typedef {Three.Vec3} Vec3
 */

/**
 * 列出相互接触的球对
 * @param {Vec3[]} positions
 * @param {number} Threshold = radius * 2
 * @param {number} shellThickness
 */
export function getContacts(positions, Threshold, shellThickness) {
  const contacts = [];
  const n = positions.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const p1 = positions[i];
      const p2 = positions[j];
      const d = Three.DistanceTo(p1, p2);
      const dist = Three.Length(d);

      const penetration = Threshold - dist;
      // 记录在外壳范围内的接触 (球1-shell-球2)，以供吸能处理
      if (penetration >= - shellThickness) {
        contacts.push({
          i, j,
          normal: Three.multiplyScalar(d, 1 / dist),
          dist,
          penetration
        });
      }
    }
  }
  return contacts;
}

/**
 * 修正重叠，使所有球对满足：
 * - 硬约束：dist >= 2R - tolerance
 * - 软目标：接触中的球对趋近于 dist = 2R
 *
 * @param {Vec3[]} positions 球位置数组
 * @param {number} TARGET 目标距离（2R）
 * @param {number} tolerance 硬约束容差（shellThickness）
 * @param {boolean[]} fixedFlags 可选的固定标记数组，true 表示对应索引的球被固定，不参与位置修正
 * @param {number} maxIter 最大迭代次数
 * @returns {Vec3[]} 修正后的位置
 */
export function fixOverlaps(
  positions, TARGET, tolerance, fixedFlags = null, maxIter = 20, SOFT_TOLERANCE = 1e-7
) {
  /** @type {Vec3[]} */
  const pos = positions.map(p => [...p]);
  const contacts = getContacts(pos, TARGET, tolerance);
  const HARD_MIN = TARGET - tolerance;  // 硬约束下限
  const HALF_TARGET = TARGET - tolerance / 2; // 软约束中点
  const _fixedFlags = fixedFlags || positions.map(() => false);
  for (let iter = 0; iter < maxIter; iter++) {
    let maxError = 0;
    for (const { i, j } of contacts) {
      // 每轮过程重新计算
      const d = Three.DistanceTo(pos[i], pos[j]);
      const dist = Three.Length(d);
      const normal = Three.multiplyScalar(d, 1 / dist);
      let correction = 0;
      if (dist < HARD_MIN) {
        // 硬约束违反：逐步修正
        correction = HALF_TARGET - dist;
        maxError = Math.max(maxError, TARGET - dist);
      } else if (dist < TARGET) {
        // 在容差内但未达目标：轻柔地推向 TARGET
        correction = (TARGET - dist) * 0.5;  // 只修正50%，避免震荡
        maxError = Math.max(maxError, TARGET - dist);
      } // else if (dist >= TARGET) {不处理，让磁力自然吸引}
      if (correction > SOFT_TOLERANCE) {
        const pi = pos[i], pj = pos[j];
        // 如果其中有且仅有一个是固定球, 则将全部修正量转移给另一侧, 否则均分
        const iFixed = +_fixedFlags[i] - +_fixedFlags[j];
        const ci = correction * ((1 - iFixed) * 0.5);
        const cj = correction * ((1 + iFixed) * 0.5);
        pi[0] -= normal[0] * ci; pi[1] -= normal[1] * ci; pi[2] -= normal[2] * ci;
        pj[0] += normal[0] * cj; pj[1] += normal[1] * cj; pj[2] += normal[2] * cj;
      }
    }
    if (maxError < SOFT_TOLERANCE) break; // 收敛检查
  }
  return pos;
}

/**
 * 求解接触约束：只约束法向分量，保留切向自由度, 同时应用切向摩擦力
 * @param {Vec3[]} positions
 * @param {Vec3[]} forces
 * @param {Vec3[]} velocities
 * @param {{ i: number, j: number, normal: Three.Vec3, dist: number, penetration: number }[]} contacts getContacts 的输出, 函数将修改其累计冲量
 * @returns {{ constrainedForces: Vec3[], constrainedVel: Vec3[] }}
 */
export function solveClusterConstraints(
  positions, forces, velocities, contacts, fixedFlags = null,
  mu = 0.3, iterations = 14, SOFT_TOLERANCE = 1e-7
) {
  const _fixedFlags = fixedFlags || positions.map(() => false);
  /** @type {Vec3[]} */
  const cForces = forces.map((f, i) => _fixedFlags[i] ? [0, 0, 0] : [...f]);
  /** @type {Vec3[]} */
  const cVels = velocities.map((v, i) => _fixedFlags[i] ? [0, 0, 0] : [...v]);
  if (contacts.length > 0) {
    solveForceConstraints(cForces, contacts, _fixedFlags, SOFT_TOLERANCE);
    solveVelocityConstraints(cVels, contacts, _fixedFlags, mu, iterations, SOFT_TOLERANCE);
  }
  return { constrainedForces: cForces, constrainedVel: cVels };
}

/**
 * 求解接触约束中的力平衡（支持力）—— 直接求解线性方程组
 *
 * Bilateral 约束：所有 contact 的法向相对加速度为零。
 *
 * 约束条件：对每个接触 c(i,j)，沿法向的相对加速度为零：
 *   (f_j' * invMj - f_i' * invMi) · n_c = 0
 *
 * 其中约束力通过 lambda 施加：
 *   f_i' = f_i + lambda_c * n_c    （i 受到沿 n 的推力）
 *   f_j' = f_j - lambda_c * n_c    （j 受到反向力）
 *
 * 展开后得到线性方程组 A * λ = b：
 *   b[c] = invMj * (fj · nc) - invMi * (fi · nc)     （当前法向相对加速度）
 *   A[c1][c2] = Σ_k invMass_k * sign_k_c1 * sign_k_c2 * (n_c1 · n_c2)
 *     其中 sign_k = -1 若 k 是球 i，+1 若 k 是球 j
 *
 * @param {Vec3[]} cForces - 输入/输出：每个球的合力，需预先清零固定球的力
 * @param {{ i: number, j: number, normal: Vec3 }[]} contacts
 * @param {boolean[]} _fixedFlags
 */
export function solveForceConstraints(cForces, contacts, _fixedFlags, SOFT_TOLERANCE = 1e-7) {
  const nc = contacts.length;
  if (nc === 0) return;

  // 过滤掉双固定的约束
  const activeIdx = [];
  for (let c = 0; c < nc; c++) {
    const { i, j } = contacts[c];
    if (_fixedFlags[i] && _fixedFlags[j]) continue;
    activeIdx.push(c);
  }
  const na = activeIdx.length;
  if (na === 0) return;

  // 构建 A 矩阵和 b 向量
  const A = Array.from({ length: na }, () => new Float64Array(na));
  const b = new Float64Array(na);

  for (let r = 0; r < na; r++) {
    const cr = contacts[activeIdx[r]];
    const ir = cr.i, jr = cr.j, nr = cr.normal;
    const invMi_r = _fixedFlags[ir] ? 0 : 1;
    const invMj_r = _fixedFlags[jr] ? 0 : 1;

    // b[r]: 需要消除的法向相对加速度（取负，因为 A*λ = -relAcc）
    b[r] = invMi_r * Three.Dot(cForces[ir], nr) - invMj_r * Three.Dot(cForces[jr], nr);

    for (let c = 0; c < na; c++) {
      const cc = contacts[activeIdx[c]];
      const ic = cc.i, jc = cc.j, ncv = cc.normal;
      const invMi_c = _fixedFlags[ic] ? 0 : 1;
      const invMj_c = _fixedFlags[jc] ? 0 : 1;
      const dot_rc = Three.Dot(nr, ncv);

      // A[r][c] = Σ_k invMass_k * sign_k_r * sign_k_c * (nr · nc)
      // sign_k_r: k==ir → -1, k==jr → +1
      // sign_k_c: k==ic → -1, k==jc → +1
      // 约束 r 的力对球 k: delta_fk = sign_k_r * lambda_r * nr
      // 对 b[r] 的贡献: invMass_k * sign_k_r * (delta_fk · nr)
      //   但 delta_fk 来自约束 c: delta_fk = sign_k_c * lambda_c * nc
      //   所以贡献 = invMass_k * sign_k_r * sign_k_c * (nc · nr) * lambda_c
      let val = 0;
      if (ir === ic) val += invMi_r * (+1) * (+1) * dot_rc; // sign_r=-1 对b的贡献是-invM*(...), 展开: -invM*(-1)*lambda*nc·nr = +invM * dot
      if (ir === jc) val += invMi_r * (+1) * (-1) * dot_rc;
      if (jr === ic) val += invMj_r * (-1) * (+1) * dot_rc;
      if (jr === jc) val += invMj_r * (-1) * (-1) * dot_rc;
      // 注意符号推导：
      // 相对加速度 = invMj*(fj·n) - invMi*(fi·n)
      // 约束c对fi的影响: fi += lambda_c * nc  (若 i==ic), fi -= lambda_c * nc (若 i==jc)
      // 对相对加速度的影响:
      //   若 ir==ic: -invMi * (+1) * (nc·nr) * lambda_c  → 贡献 -invMi*(nc·nr)
      //   若 ir==jc: -invMi * (-1) * (nc·nr) * lambda_c  → 贡献 +invMi*(nc·nr)
      //   若 jr==ic: +invMj * (+1) * (nc·nr) * lambda_c  → 贡献 +invMj*(nc·nr)
      //   若 jr==jc: +invMj * (-1) * (nc·nr) * lambda_c  → 贡献 -invMj*(nc·nr)
      // 重新计算：
      val = 0;
      if (ir === ic) val -= invMi_r * dot_rc;   // fi += lambda*nc, 对 -invMi*(fi·nr): -invMi*(nc·nr)
      if (ir === jc) val += invMi_r * dot_rc;   // fi -= lambda*nc, 对 -invMi*(fi·nr): +invMi*(nc·nr)
      if (jr === ic) val += invMj_r * dot_rc;   // fj += lambda*nc, 对 +invMj*(fj·nr): +invMj*(nc·nr)
      if (jr === jc) val -= invMj_r * dot_rc;   // fj -= lambda*nc, 对 +invMj*(fj·nr): -invMj*(nc·nr)
      A[r][c] = val;
    }
  }

  // 高斯消元求解 A * λ = b
  const lambda = solveLinearSystem(A, b, na);
  if (!lambda) return; // 奇异矩阵，不修正

  // 施加约束力
  for (let r = 0; r < na; r++) {
    const lam = lambda[r];
    if (Math.abs(lam) < SOFT_TOLERANCE) continue;
    const { i, j, normal } = contacts[activeIdx[r]];
    if (!_fixedFlags[i]) {
      cForces[i][0] += normal[0] * lam;
      cForces[i][1] += normal[1] * lam;
      cForces[i][2] += normal[2] * lam;
    }
    if (!_fixedFlags[j]) {
      cForces[j][0] -= normal[0] * lam;
      cForces[j][1] -= normal[1] * lam;
      cForces[j][2] -= normal[2] * lam;
    }
  }
}

/**
 * 高斯消元求解 Ax = b（带部分选主元，原地修改 A 和 b）
 * @param {Float64Array[]} A - na x na 矩阵
 * @param {Float64Array} b - na 长度向量
 * @param {number} na - 维度
 * @returns {Float64Array|null} 解向量，或 null（奇异）
 */
function solveLinearSystem(A, b, na) {
  for (let col = 0; col < na; col++) {
    // 部分选主元
    let maxVal = Math.abs(A[col][col]);
    let maxRow = col;
    for (let row = col + 1; row < na; row++) {
      const v = Math.abs(A[row][col]);
      if (v > maxVal) { maxVal = v; maxRow = row; }
    }
    if (maxVal < 1e-12) return null;
    if (maxRow !== col) {
      const tmpA = A[col]; A[col] = A[maxRow]; A[maxRow] = tmpA;
      const tmpB = b[col]; b[col] = b[maxRow]; b[maxRow] = tmpB;
    }
    const pivot = A[col][col];
    for (let row = col + 1; row < na; row++) {
      const factor = A[row][col] / pivot;
      A[row][col] = 0;
      for (let k = col + 1; k < na; k++) {
        A[row][k] -= factor * A[col][k];
      }
      b[row] -= factor * b[col];
    }
  }
  const x = new Float64Array(na);
  for (let row = na - 1; row >= 0; row--) {
    let sum = b[row];
    for (let k = row + 1; k < na; k++) {
      sum -= A[row][k] * x[k];
    }
    x[row] = sum / A[row][row];
  }
  return x;
}

/**
 * PGS 同时求解法向无穿透约束与库仑摩擦切向约束
 *
 * 使用 accumulated impulse + clamp-and-diff 方法：
 * - 法向冲量无符号限制（bilateral，可推可拉），因为磁力提供粘合
 * - 切向冲量受库仑锥限制（|Jt| ≤ μ * |Jn|）
 * - 两者在同一 PGS 循环内交替收敛，正确处理多接触点
 *
 * 所有冲量使用速度量纲（已除以质量），避免来回换算
 *
 * @param {Vec3[]} cVels - 输入/输出：每个球的速度，函数将修改以满足约束, 需预先清零固定球的速度
 * @param {{ i: number, j: number, normal: Vec3, penetration: number }[]} contacts
 * @param {boolean[]} _fixedFlags
 * @param {number} mu 摩擦系数
 */
export function solveVelocityConstraints(
  cVels, contacts, _fixedFlags,
  mu = 0.3, iterations = 20, SOFT_TOLERANCE = 1e-7
) {
  const nc = contacts.length;
  // 累计法向冲量（速度量纲）
  const accJn = new Float64Array(nc);
  // 累计切向冲量向量（速度量纲）
  /** @type {Vec3[]} */
  const accJt = Array.from({ length: nc }, () => [0, 0, 0]);
  for (let iter = 0; iter < iterations; iter++) {
    let maxError = 0;
    for (let ci = 0; ci < nc; ci++) {
      const { i, j, normal } = contacts[ci];
      // 重量的倒数, 若固定则为 0, 否则相同 (所有球质量相同)
      const invMassI = _fixedFlags[i] ? 0 : 1, invMassJ = _fixedFlags[j] ? 0 : 1;
      const invMassSum = invMassI + invMassJ;
      if (invMassSum < 1) continue;
      // 法向约束（bilateral，无 clamp）
      const vIn = Three.Dot(cVels[i], normal), vJn = Three.Dot(cVels[j], normal);
      const relVn = vJn - vIn;  // 正=分离，负=靠近

      const dJn_candidate = -relVn / invMassSum;
      const prevJn = accJn[ci];
      const newJn = prevJn + dJn_candidate;
      const dJn = newJn - prevJn;
      accJn[ci] = newJn;
      if (Math.abs(dJn) > 1e-12) {
        maxError = Math.max(maxError, Math.abs(dJn));
        const cvi = cVels[i], cvj = cVels[j];
        if (invMassI) { cvi[0] -= normal[0] * dJn; cvi[1] -= normal[1] * dJn; cvi[2] -= normal[2] * dJn; }
        if (invMassJ) { cvj[0] += normal[0] * dJn; cvj[1] += normal[1] * dJn; cvj[2] += normal[2] * dJn; }
      }
      // 切向摩擦（库仑锥，向量 clamp）
      const absJn = Math.abs(accJn[ci]);
      const maxFriction = mu * absJn;
      if (maxFriction < 1e-12) continue;
      const vi = cVels[i], vj = cVels[j];
      const vRel = Three.DistanceTo(vj, vi);
      const vRelN = Three.Dot(vRel, normal);
      const vt = Three.add(vRel, Three.multiplyScalar(normal, -vRelN));
      const tanSpeed = Three.Length(vt);
      if (tanSpeed < 1e-12) continue;
      const tHat = Three.multiplyScalar(vt, 1 / tanSpeed);
      // 候选：完全消除当前切向速度
      const dJt_candidate = tanSpeed / invMassSum;
      // 将候选冲量加到累计向量上，然后对总向量做模长 clamp
      const aJi = accJt[ci];
      /** @type {Vec3} */
      const newJt = [
        aJi[0] + tHat[0] * dJt_candidate,
        aJi[1] + tHat[1] * dJt_candidate,
        aJi[2] + tHat[2] * dJt_candidate
      ];
      const newJtLen = Three.Length(newJt);
      if (newJtLen > maxFriction) {
        // 缩放到库仑锥边界
        const scale = maxFriction / newJtLen;
        newJt[0] *= scale; newJt[1] *= scale; newJt[2] *= scale;
      }
      // 实际增量
      const dJtVec = Three.DistanceTo(aJi, newJt); // newJt - aJi
      const dJtLen = Three.Length(dJtVec);
      if (dJtLen < 1e-12) continue;
      aJi[0] = newJt[0]; aJi[1] = newJt[1]; aJi[2] = newJt[2];
      maxError = Math.max(maxError, dJtLen);
      // 等量反向，动量守恒
      if (invMassI) { vi[0] -= dJtVec[0] * invMassI; vi[1] -= dJtVec[1] * invMassI; vi[2] -= dJtVec[2] * invMassI; }
      if (invMassJ) { vj[0] += dJtVec[0] * invMassJ; vj[1] += dJtVec[1] * invMassJ; vj[2] += dJtVec[2] * invMassJ; }
    }
    if (maxError < SOFT_TOLERANCE) break;
  }
  return cVels;
}

/**
 * 求解两球碰撞时间（考虑加速度）
 *
 * @param {Vec3} d0 初始相对位置 (p_j - p_i)
 * @param {Vec3} dv 相对速度 (v_j - v_i)
 * @param {Vec3} a1 球 i 的加速度
 * @param {Vec3} a2 球 j 的加速度
 * @param {number} R 目标距离
 * @param {number} maxT 最大时间
 * @returns {number|null}
 */
export function solveCollisionTime(
  d0, dv, a1, a2, R, maxT, SOFT_TOLERANCE = 1e-7
) {
  const da = Three.DistanceTo(a1, a2);
  const C = Three.multiplyScalar(da, 0.5);
  const c0 = Three.Dot(d0, d0) - R * R;
  if (c0 <= 0) return 0;  // 已接触
  const c1 = 2 * Three.Dot(d0, dv);
  const c2 = 2 * Three.Dot(d0, C) + Three.Dot(dv, dv);
  const c3 = 2 * Three.Dot(dv, C);
  const c4 = Three.Dot(C, C);
  const roots = solveQuartic(c4, c3, c2, c1, c0);

  const DIST2_TOL = (R * (1 + SOFT_TOLERANCE)) ** 2; // (R*(1+ε))²
  let minT = null;
  for (const t of roots) {
    if (t > 1e-12 && t <= maxT + 1e-12) {
      // 回代验证：t 时刻两球实际距离是否 ≤ R
      const dist2_t = c4 * t * t * t * t + c3 * t * t * t + c2 * t * t + c1 * t + c0 + R * R;
      // (dist_t / R - 1) > REL_TOL
      if (dist2_t > DIST2_TOL) continue; // 伪根，丢弃
      if (minT === null || t < minT) minT = t;
    }
  }
  return minT;
}
