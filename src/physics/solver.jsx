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
 * 使用 PGS 迭代
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
    solveForceConstraints(cForces, contacts, _fixedFlags, iterations, SOFT_TOLERANCE);
    solveVelocityConstraints(cVels, contacts, _fixedFlags, mu, iterations, SOFT_TOLERANCE);
  }
  return { constrainedForces: cForces, constrainedVel: cVels };
}

/**
 * 求解接触约束中的力平衡（支持力）
 * @param {Vec3[]} cForces - 输入/输出：每个球的合力，函数将修改以满足约束, 需预先清零固定球的力
 * @param {{ i: number, j: number, normal: Vec3 }[]} contacts
 * @param {boolean[]} _fixedFlags
 */

export function solveForceConstraints(cForces, contacts, _fixedFlags, iterations = 8, SOFT_TOLERANCE = 1e-7) {
  for (let iter = 0; iter < iterations; iter++) {
    let maxError = 0;
    for (const { i, j, normal } of contacts) {
      const iFixed = _fixedFlags[i], jFixed = _fixedFlags[j];
      if (iFixed && jFixed) continue;
      const f1 = cForces[i], f2 = cForces[j];
      const fIn = Three.Dot(f1, normal); // i 在 normal 方向的力，>0 表示靠近 j
      const fJn = Three.Dot(f2, normal); // j 在 normal 方向的力，<0 表示靠近 i
      if (iFixed) {
        // 只处理自由球 j：fJn < 0 才靠近
        if (0 <= fJn) continue;
        maxError = Math.max(maxError, -fJn);
        f2[0] -= normal[0] * fJn; f2[1] -= normal[1] * fJn; f2[2] -= normal[2] * fJn;
      } else if (jFixed) {
        // 只处理自由球 i：fIn > 0 才靠近
        if (fIn <= 0) continue;
        maxError = Math.max(maxError, fIn);
        f1[0] -= normal[0] * fIn; f1[1] -= normal[1] * fIn; f1[2] -= normal[2] * fIn;
      } else {
        // 两球都自由：均分支持力
        const lambda = (fIn - fJn) * 0.5;
        if (lambda <= 0) continue;
        maxError = Math.max(maxError, lambda);
        f1[0] -= normal[0] * lambda; f1[1] -= normal[1] * lambda; f1[2] -= normal[2] * lambda;
        f2[0] += normal[0] * lambda; f2[1] += normal[1] * lambda; f2[2] += normal[2] * lambda;
      }
    }
    if (maxError < SOFT_TOLERANCE) break;
  }
}

/**
 * PGS 同时求解法向无穿透约束与库仑摩擦切向约束
 *
 * 使用 accumulated impulse + clamp-and-diff 方法：
 * - 法向冲量只允许压缩（≥ 0），分离时自动 clamp 回 0
 * - 切向冲量受库仑锥限制（|Jt| ≤ μ * Jn）
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
  // 累计法向冲量（速度量纲，≥ 0）
  const accJn = new Float64Array(nc);
  // 累计切向冲量向量（速度量纲）
  /** @type {Vec3[]} */
  const accJt = Array.from({ length: nc }, () => [0, 0, 0]);
  for (let iter = 0; iter < iterations; iter++) {
    let maxError = 0;
    for (let ci = 0; ci < nc; ci++) {
      const { i, j, normal, penetration } = contacts[ci];
      // 重量的倒数, 若固定则为 0, 否则相同 (所有球质量相同)
      const invMassI = _fixedFlags[i] ? 0 : 1, invMassJ = _fixedFlags[j] ? 0 : 1;
      const invMassSum = invMassI + invMassJ;
      if (invMassSum < 1) continue;
      // 法向约束
      const vIn = Three.Dot(cVels[i], normal), vJn = Three.Dot(cVels[j], normal);
      const relVn = vJn - vIn;  // 相对法向速度（正=分离，负=靠近）
      // 目标：法向相对速度 = 0, 即 vIn = vJn = 平均值
      // 消除 relVn 所需冲量（可正可负）
      const dJn_candidate = -relVn / invMassSum;
      const prevJn = accJn[ci];
      // clamp：只允许压缩，分离时释放约束
      const newJn = Math.max(0, prevJn + dJn_candidate);
      const dJn = newJn - prevJn;
      accJn[ci] = newJn;
      if (Math.abs(dJn) > 1e-12) {
        maxError = Math.max(maxError, Math.abs(dJn));
        const cvi = cVels[i], cvj = cVels[j];
        if (invMassI) { cvi[0] -= normal[0] * dJn; cvi[1] -= normal[1] * dJn; cvi[2] -= normal[2] * dJn; }
        if (invMassJ) { cvj[0] += normal[0] * dJn; cvj[1] += normal[1] * dJn; cvj[2] += normal[2] * dJn; }
      }
      // 切向摩擦（库仑锥）
      if (penetration < 0) continue; // 未真正接触，无摩擦
      const maxFriction = mu * accJn[ci]; // 跟随当前实际压缩量
      if (maxFriction < 1e-12) continue;
      for (const [k, invMassK] of [[i, invMassI], [j, invMassJ]]) {
        if (invMassK < 1) continue;
        const v = cVels[k];
        // 切向速度
        const vt = Three.add(Three.multiplyScalar([...normal], -Three.Dot(v, normal)), v)
        const tanSpeed = Three.Length(vt);
        if (tanSpeed < 1e-12) continue;
        /** @type {Vec3} */
        const tHat = Three.multiplyScalar(vt, 1 / tanSpeed); // 切向单位向量
        // 当前累计切向冲量在 tHat 方向上的投影
        const prevJtMag = Three.Dot(accJt[ci], tHat);
        // 候选：完全消除当前切向速度
        const dJt_candidate = tanSpeed * invMassK;
        // clamp 到库仑锥 [-maxFriction, +maxFriction]
        const newJtMag = Math.min(Math.max(prevJtMag + dJt_candidate, -maxFriction), maxFriction);
        const dJt = newJtMag - prevJtMag;
        if (Math.abs(dJt) < 1e-12) continue;
        accJt[ci][0] += tHat[0] * dJt;
        accJt[ci][1] += tHat[1] * dJt;
        accJt[ci][2] += tHat[2] * dJt;
        maxError = Math.max(maxError, Math.abs(dJt));
        v[0] -= tHat[0] * dJt * invMassK;
        v[1] -= tHat[1] * dJt * invMassK;
        v[2] -= tHat[2] * dJt * invMassK;
      }
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
