import { Vector3 } from "three";
import { solveQuartic } from '../utils/quartic-solver';

/**
 * 列出相互接触的球对
 * @param {Vector3[]} positions
 * @param {number} Threshold = radius * 2 + shellThickness
 */
export function getContacts(positions, Threshold) {
  const contacts = [];
  const n = positions.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const p1 = positions[i];
      const p2 = positions[j];
      const d = p2.clone().sub(p1);
      const dist = d.length();
      // 记录在外壳范围内的接触 (球1-shell-球2)，以供吸能处理
      if (dist <= Threshold) {
        contacts.push({
          i, j,
          normal: d.multiplyScalar(1 / dist),
          dist
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
 * @param {Vector3[]} positions 球位置数组
 * @param {number} TARGET 目标距离（2R）
 * @param {number} tolerance 硬约束容差（shellThickness）
 * @param {boolean[]} fixedFlags 可选的固定标记数组，true 表示对应索引的球被固定，不参与位置修正
 * @param {number} maxIter 最大迭代次数
 * @returns {Vector3[]} 修正后的位置
 */
export function fixOverlaps(
  positions, TARGET, tolerance, fixedFlags = null, maxIter = 20, SOFT_TOLERANCE = 1e-7
) {
  /** @type {Vector3[]} */
  const pos = positions.map(p => p.clone());
  const contacts = getContacts(pos, TARGET + tolerance);
  const HARD_MIN = TARGET - tolerance;  // 硬约束下限
  const HALF_TARGET = TARGET - tolerance / 2; // 软约束中点
  const _fixedFlags = fixedFlags || positions.map(() => false);
  // 中间变量, 避免反复创建
  const _d = new Vector3();
  for (let iter = 0; iter < maxIter; iter++) {
    let maxError = 0;
    for (const { i, j } of contacts) {
      // 每轮过程重新计算
      _d.copy(pos[j]).sub(pos[i]);
      const dist = _d.length();
      const normal = _d.multiplyScalar(1 / dist);
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
        pi.x -= normal.x * ci; pi.y -= normal.y * ci; pi.z -= normal.z * ci;
        pj.x += normal.x * cj; pj.y += normal.y * cj; pj.z += normal.z * cj;
      }
    }
    if (maxError < SOFT_TOLERANCE) break; // 收敛检查
  }
  return pos;
}

/**
 * 求解接触约束：只约束法向分量，保留切向自由度
 *
 * 球-球接触的物理模型：
 * - 法向：不穿透约束（bilateral，精确消除法向相对运动）
 * - 切向：不施加滑动摩擦。球体之间的切向力驱动滚动，而非滑动。
 *   滚动摩擦由 rollingFrictionTorques() 单独计算为力矩。
 *
 * 当前的模型中, 球的滚动 (磁轴旋转) 与球中心的移动是解耦的, 但这个影响目前来说是不大的:
 * 1. 镀镍磁球表面光滑，而且大部分运动很快就变成滚动
 * 2. 磁力矩远大于摩擦力矩，磁矩方向主要由磁力矩决定，摩擦对旋转的贡献是次要修正
 * 3. 决定磁铁组合结构的大部分运动由磁力切向分量驱动的，只要切向力不被锁死就行
 *
 * @param {Vector3[]} positions
 * @param {Vector3[]} forces
 * @param {Vector3[]} velocities
 * @param {{ i: number, j: number, normal: Vector3, dist: number }[]} contacts getContacts 的输出
 * @param {boolean[]|null} fixedFlags
 * @param {number} [mu=0.3] 未使用，保留接口兼容
 * @returns {{ constrainedForces: Vector3[], constrainedVel: Vector3[], forceLambda: Float64Array }}
 */
export function solveClusterConstraints(
  positions, forces, velocities, contacts, fixedFlags = null,
  mu = 0.3, SOFT_TOLERANCE = 1e-7
) {
  const _fixedFlags = fixedFlags || positions.map(() => false);
  /** @type {Vector3[]} */
  const cForces = forces.map((f, i) => _fixedFlags[i] ? new Vector3(0, 0, 0) : f.clone());
  /** @type {Vector3[]} */
  const cVels = velocities.map((v, i) => _fixedFlags[i] ? new Vector3(0, 0, 0) : v.clone());
  const activeIdx = getActiveContacts(contacts, _fixedFlags);
  const forceLambda = new Float64Array(contacts.length);
  if (activeIdx.length > 0) {
    const activeContacts = activeIdx.map(ci => contacts[ci]);
    solveVelocityConstraints(cVels, activeContacts, _fixedFlags, SOFT_TOLERANCE);
    // 只做法向约束（速度和力），不施加切向摩擦, 则调用 solveNormalForceConstraints
    const _forceLambda = solveForceConstraints(cForces, cVels, activeContacts, _fixedFlags, mu, 5, SOFT_TOLERANCE);
    activeIdx.forEach((ci, idx) => { forceLambda[ci] = _forceLambda[idx]; });
  }
  return { constrainedForces: cForces, constrainedVel: cVels, forceLambda };
}

/**
 * 纯法向力约束（无摩擦）
 *
 * 对每个接触，消除法向方向的相对加速度分量（即法向力差），
 * 确保接触球对不会在法向方向加速穿透。
 * 切向力完全保留，让球自由滚动。
 *
 * @param {Vector3[]} cForces - 输入/输出：每个球的合力
 * @param {{ i: number, j: number, normal: Vector3 }[]} contacts
 * @param {boolean[]} _fixedFlags
 * @returns {Float64Array} 每个 contact 的法向约束力 lambda
 */
function solveNormalForceConstraints(cForces, contacts, _fixedFlags, SOFT_TOLERANCE = 1e-7) {
  const nc = contacts.length;
  const _lambda = new Float64Array(nc);
  if (nc === 0) return _lambda;
  const activeIdx = getActiveContacts(contacts, _fixedFlags);
  if (activeIdx.length === 0) return _lambda;
  const { A, b } = buildConstraintSystem(contacts, activeIdx, _fixedFlags, cForces);
  const lambda = solveLinearSystem(A, b);
  if (!lambda) return _lambda;
  applyLambda(cForces, contacts, activeIdx, _fixedFlags, lambda, _lambda, SOFT_TOLERANCE);
  return _lambda;
}

/**
 * 计算滚动摩擦力矩
 *
 * 对每个接触对，如果有相对切向运动（角速度或力驱动），
 * 施加一个阻碍滚动的力矩 τ_roll = μ_r × |F_n| × R × (-ω̂_roll)
 *
 * @param {{ i: number, j: number, normal: Vector3, dist: number }[]} contacts
 * @param {Vector3[]} velocities - 球的线速度
 * @param {Float64Array} forceLambda - 法向约束力
 * @param {number} radius - 球半径
 * @param {number} muRoll - 滚动摩擦系数（典型值 0.001-0.01）
 * @param {boolean[]|null} fixedFlags
 * @returns {Vector3[]} 每个球的滚动摩擦力矩
 */
export function rollingFrictionTorques(contacts, velocities, forceLambda, radius, muRoll, fixedFlags = null) {
  const n = velocities.length;
  const _fixedFlags = fixedFlags || new Array(n).fill(false);
  const rollTorques = velocities.map(() => new Vector3());
  const vRel = new Vector3(), vt = new Vector3(); // 临时变量，避免重复创建
  for (let ci = 0; ci < contacts.length; ci++) {
    const { i, j, normal } = contacts[ci];
    const fn = Math.abs(forceLambda[ci]);
    if (fn < 1e-15) continue;
    vRel.copy(velocities[j]).sub(velocities[i]);
    const vRelN = vRel.dot(normal);
    /** 切向相对速度 */
    vt.copy(normal).multiplyScalar(vRelN).sub(vRel).negate();
    const vtLen = vt.length();
    if (vtLen < 1e-15) continue;
    // 滚动摩擦力矩大小
    const tauMag = muRoll * fn * radius;
    // 滚动方向：切向速度对应的滚动轴 = normal × v_tangent_hat
    // 对球i：滚动方向使其表面速度与vt同向 → 力矩阻碍这个滚动
    const vtHat = vt.multiplyScalar(1 / vtLen);
    // 滚动轴 = normal × vtHat（右手定则）
    const rollAxis = vRel.crossVectors(normal, vtHat);

    if (!_fixedFlags[i]) {
      // 球i的滚动力矩：阻碍其朝vt方向的表面运动
      rollTorques[i].x -= rollAxis.x * tauMag;
      rollTorques[i].y -= rollAxis.y * tauMag;
      rollTorques[i].z -= rollAxis.z * tauMag;
    }
    if (!_fixedFlags[j]) {
      // 球j的滚动力矩：阻碍其远离vt方向的表面运动
      rollTorques[j].x += rollAxis.x * tauMag;
      rollTorques[j].y += rollAxis.y * tauMag;
      rollTorques[j].z += rollAxis.z * tauMag;
    }
  }
  return rollTorques;
}

/**
 * 过滤双固定约束，返回活跃约束索引
 * @param {{ i: number, j: number }[]} contacts
 * @param {boolean[]} _fixedFlags
 * @returns {number[]}
 */
function getActiveContacts(contacts, _fixedFlags) {
  const activeIdx = [];
  for (let c = 0; c < contacts.length; c++) {
    const { i, j } = contacts[c];
    if (_fixedFlags[i] && _fixedFlags[j]) continue;
    activeIdx.push(c);
  }
  return activeIdx;
}

/**
 * 求解接触约束中的力平衡（支持力 + 摩擦力）
 *
 * 利用已约束的速度判断摩擦状态：
 * - 有切向相对速度 → 动摩擦，方向 = 反向相对速度（已知）
 * - 无切向相对速度 → 静摩擦，方向由方程组求解
 *
 * Active Set 方法：
 * 1. 用相对速度预分类静/动摩擦
 * 2. 构建方程组：静摩擦 3 方程，动摩擦 1 方程 + 已知切向力
 * 3. 求解后检查库仑锥，违反者降级为动摩擦
 * 4. 重解直到收敛或达到迭代上限
 *
 * @param {Vector3[]} cForces - 输入/输出：每个球的合力
 * @param {Vector3[]} cVels - 已约束的速度（用于判断摩擦方向）
 * @param {{ i: number, j: number, normal: Vector3 }[]} contacts
 * @param {boolean[]} _fixedFlags
 * @param {number} mu - 摩擦系数
 * @param {number} maxIter - 活动集迭代上限
 * @returns {Float64Array} 每个 contact 的法向约束力 lambda（力量纲）
 */
export function solveForceConstraints(
  cForces, cVels, contacts, _fixedFlags,
  mu = 0.3, maxIter = 5, SOFT_TOLERANCE = 1e-7
) {
  const nc = contacts.length;
  const _lambda = new Float64Array(nc);
  if (nc === 0) return _lambda;
  /** @type {Vector3[][]} 为每个接触构造基 [n, t1, t2] */
  const bases = contacts.map(c => tangentBasis(c.normal));
  /** @type {boolean[]} 活动集状态：true = 静摩擦（3方程），false = 动摩擦（1方程+已知切向力） */
  const isStatic = new Array(nc).fill(true);
  const vRel = new Vector3(); // 临时变量，避免重复创建
  /** 动摩擦力方向（单位向量），有切向相对速度 → 动摩擦 */
  const dynamicFricDir = contacts.map((c, ci) => {
    const { i, j, normal } = c;
    vRel.copy(cVels[j]).sub(cVels[i]); // vj - vi
    const vRelN = vRel.dot(normal);
    const vt = normal.clone().multiplyScalar(vRelN).sub(vRel).negate();
    const vtLen = vt.length();
    if (vtLen > SOFT_TOLERANCE) {
      // 有切向滑动 → 动摩擦，方向反向相对速度
      isStatic[ci] = false;
      return vt.multiplyScalar(-1 / vtLen);
    }
    return new Vector3();
  });
  /** @type {Vector3[]} 工作副本：cForces 的备份，动摩擦力叠加在此 */
  const workForces = cForces.map(f => f.clone());
  /** @type {Vector3[]} 记录每个接触的动摩擦力向量 */
  const dynamicFrictionForce = contacts.map(() => new Vector3());
  for (let iter = 0; iter < maxIter; iter++) {
    // 构建并求解方程组
    const { A, b, neq, eqMap } = buildFrictionSystem(
      contacts, _fixedFlags, workForces, bases, isStatic
    );
    const lambda = solveLinearSystem(A, b);
    if (!lambda) break;
    // 提取每个接触的法向和切向 lambda
    const lambdaPerContact = mapLambdaToContacts(lambda, eqMap, isStatic);
    // 检查库仑锥
    if (checkCoulombCone(lambdaPerContact, isStatic, mu, SOFT_TOLERANCE)) {
      // 全部满足库仑锥 → 施加结果到 cForces
      for (let ci = 0; ci < nc; ci++) {
        _lambda[ci] = lambdaPerContact[ci].fn;
        const F = applyForcesToCForces(bases[ci], lambdaPerContact[ci], isStatic[ci], dynamicFrictionForce[ci]);
        updataByFixedFlags(cForces, contacts[ci], F, _fixedFlags);
      }
      return _lambda;
    }
    // 有变化：重建 workForces，施加动摩擦力
    // 先恢复 workForces 为原始 cForces
    cForces.forEach((f, i) => workForces[i].copy(f))
    // 对动摩擦接触：计算切向力
    for (let ci = 0; ci < nc; ci++) {
      if (isStatic[ci]) continue;
      updateFrictionForce(bases[ci], lambdaPerContact[ci], dynamicFrictionForce[ci], dynamicFricDir[ci], mu, SOFT_TOLERANCE);
      updataByFixedFlags(workForces, contacts[ci], dynamicFrictionForce[ci], _fixedFlags);
    }
  }
  // 达到迭代上限：用最后一次的结果（可能不完全满足库仑锥，但足够近似）
  // 需要重新求解一次以获取最终 lambda
  const { A, b, neq, eqMap } = buildFrictionSystem(
    contacts, _fixedFlags, workForces, bases, isStatic
  );
  const lambda = solveLinearSystem(A, b);
  if (lambda) {
    const lambdaPerContact = mapLambdaToContacts(lambda, eqMap, isStatic)
    for (let ci = 0; ci < nc; ci++) {
      _lambda[ci] = lambdaPerContact[ci].fn;
      const F = applyForcesToCForces(bases[ci], lambdaPerContact[ci], isStatic[ci], dynamicFrictionForce[ci]);
      updataByFixedFlags(cForces, contacts[ci], F, _fixedFlags);
    }
  }
  return _lambda;
}

/**
 * @param {Vector3[]} forces 原地修改并输出
 * @param {{i: number, j: number}} contact
 * @param {Vector3} contactForces
 * @param {boolean[]} _fixedFlags
 */
function updataByFixedFlags(forces, contact, contactForces, _fixedFlags) {
  const { i, j } = contact;
  if (!_fixedFlags[i]) { forces[i].add(contactForces); }
  if (!_fixedFlags[j]) { forces[j].sub(contactForces); }
}

/**
 * 从求解的 lambda（方程序列）映射到每个活跃接触的 {fn, ft1, ft2}
 * @returns {{ fn: number, ft1: number, ft2: number }[]}
 */
function mapLambdaToContacts(lambda, eqMap, isStatic) {
  return Array.from(eqMap, (baseIdx, a) => {
    const fn = lambda[baseIdx];
    const ft1 = isStatic[a] ? lambda[baseIdx + 1] : 0;
    const ft2 = isStatic[a] ? lambda[baseIdx + 2] : 0;
    return { fn, ft1, ft2 };
  });
}

/**
 * 检查库仑锥约束，更新 isStatic 状态
 * @param {boolean[]} isStatic - 输入/输出：每个活跃接触的静摩擦状态, 会被原地修改
 */
function checkCoulombCone(lambdaPerContact, isStatic, mu, tolerance) {
  let noChang = true;
  for (let a = 0; a < lambdaPerContact.length; a++) {
    const { fn, ft1, ft2 } = lambdaPerContact[a];
    const ftMag = Math.sqrt(ft1 * ft1 + ft2 * ft2);
    const limit = mu * Math.abs(fn);

    if (isStatic[a] && ftMag > limit + tolerance) {
      isStatic[a] = false; // 降级为动摩擦
      noChang = false;
    } else if (!isStatic[a] && ftMag <= limit - tolerance) {
      // 可选：静摩擦恢复（根据物理需求启用）
      // isStatic[a] = true; changed = true;
    }
  }
  return noChang;
}

/**
 * 将约束力（含动摩擦力）施加到最终力场 cForces
 * 修复原逻辑：动摩擦接触需叠加 dynamicFrictionForce
 * @param {Vector3[]} base = bases[ci]
 * @param {{fn : number, ft1: number, ft2: number}} lambda = lambdaPerContact[ci]
 * @param {Vector3} Ff = dynamicFrictionForce[ci]
 * @param {boolean} isStatic
 */
function applyForcesToCForces(base, lambda, isStatic, Ff) {
  const { fn, ft1, ft2 } = lambda;
  const [n, t1, t2] = base;
  // 基础约束力（法向 + 静摩擦切向）
  const F = new Vector3(
    fn * n.x + ft1 * t1.x + ft2 * t2.x,
    fn * n.y + ft1 * t1.y + ft2 * t2.y,
    fn * n.z + ft1 * t1.z + ft2 * t2.z
  );
  // 动摩擦接触：叠加预计算的动摩擦力向量
  if (!isStatic) {
    F.add(Ff);
  }
  return F
}

/**
 * @param {Vector3[]} base = bases[ci]
 * @param {{fn : number, ft1: number, ft2: number}} lambda = lambdaPerContact[ci]
 * @param {Vector3} Ff = dynamicFrictionForce[ci]
 * @param {Vector3} dir = dynamicFricDir[ci]
 */
function updateFrictionForce(base, lambda, Ff, dir, mu, SOFT_TOLERANCE) {
  const [n, t1, t2] = base;
  const { fn, ft1, ft2 } = lambda;
  const fricMag = mu * Math.abs(fn);
  if (dir.x !== 0 || dir.y !== 0 || dir.z !== 0) {
    // 方向由相对速度确定（预分类的或之前确定的）
    Ff.copy(dir).multiplyScalar(fricMag);
  } else {
    // 从静摩擦降级：用切向 lambda 方向
    const ftMag = Math.sqrt(ft1 * ft1 + ft2 * ft2);
    if (ftMag > SOFT_TOLERANCE) {
      const scale = fricMag / ftMag;
      Ff.x = (ft1 * t1.x + ft2 * t2.x) * scale;
      Ff.y = (ft1 * t1.y + ft2 * t2.y) * scale;
      Ff.z = (ft1 * t1.z + ft2 * t2.z) * scale;
    } else {
      Ff.set(0, 0, 0);
    }
  }
}

/**
 * 为法向量构造正交切向基
 * @param {Vector3} n - 单位法向量
 * @returns {[Vector3, Vector3, Vector3]} [t1, t2]
 */
function tangentBasis(n) {
  const aux = Math.abs(n.x) < 0.9 ? new Vector3(1, 0, 0) : new Vector3(0, 1, 0);
  const t1 = aux.cross(n).normalize().negate();
  const t2 = n.clone().cross(t1);
  return [n, t1, t2];
}

/**
 * 构建 3D 约束方程组（法向 + 切向）
 *
 * 每个接触最多 3 个方程：法向 1 个（始终），切向 2 个（仅静摩擦）。
 * 动摩擦的接触只保留法向方程，切向力作为已知外力叠加到 b 中。
 *
 * 方程索引布局由 eqMap 决定：eqMap[a] 是活跃接触 a 的方程起始索引，
 * 静摩擦接触占 3 个方程，动摩擦接触占 1 个。
 *
 * @param {{ i: number, j: number, normal: Vector3 }[]} contacts
 * @param {boolean[]} _fixedFlags
 * @param {Vector3[]} cForces - 当前力（含已叠加的动摩擦力）
 * @param {Vector3[][]} bases - 每个活跃接触的基 [n, t1, t2]
 * @param {boolean[]} isStatic - 每个活跃接触是否为静摩擦
 * @returns {{ A: SparseCSR, b: Float64Array, neq: number, eqMap: Int32Array }}
 */
function buildFrictionSystem(contacts, _fixedFlags, cForces, bases, isStatic) {
  const na = contacts.length;
  // 计算方程总数和起始索引映射
  const eqMap = new Int32Array(na);
  let neq = 0;
  for (let a = 0; a < na; a++) {
    eqMap[a] = neq;
    neq += isStatic[a] ? 3 : 1;
  }

  const cooRows = [], cooCols = [], cooVals = [];
  const b = new Float64Array(neq);

  for (let ra = 0; ra < na; ra++) {
    const cr = contacts[ra];
    const ir = cr.i, jr = cr.j;
    const invMi_r = _fixedFlags[ir] ? 0 : 1;
    const invMj_r = _fixedFlags[jr] ? 0 : 1;
    const ndirs_r = isStatic[ra] ? 3 : 1;

    for (let dr = 0; dr < ndirs_r; dr++) {
      const er = bases[ra][dr];
      const row = eqMap[ra] + dr;

      // b: 当前相对加速度在 er 方向的分量
      b[row] = invMi_r * cForces[ir].dot(er) - invMj_r * cForces[jr].dot(er);

      for (let ca = 0; ca < na; ca++) {
        const cc = contacts[ca];
        const ic = cc.i, jc = cc.j;
        const ndirs_c = isStatic[ca] ? 3 : 1;

        for (let dc = 0; dc < ndirs_c; dc++) {
          const ec = bases[ca][dc];
          const col = eqMap[ca] + dc;
          const dot_val = er.dot(ec);

          let val = 0;
          if (ir === ic) val -= invMi_r * dot_val;
          if (ir === jc) val += invMi_r * dot_val;
          if (jr === ic) val += invMj_r * dot_val;
          if (jr === jc) val -= invMj_r * dot_val;

          if (Math.abs(val) > 1e-15) {
            cooRows.push(row);
            cooCols.push(col);
            cooVals.push(val);
          }
        }
      }
    }
  }
  const A = cooToCSR(neq, cooRows, cooCols, cooVals);
  return { A, b, neq, eqMap };
}

/**
 * 稀疏矩阵 CSR 格式
 * @typedef {{ n: number, rowPtr: Int32Array, colIdx: Int32Array, values: Float64Array }} SparseCSR
 */

/**
 * COO → CSR 转换
 * @param {number} n - 矩阵维度
 * @param {number[]} rows - 行索引
 * @param {number[]} cols - 列索引
 * @param {number[]} vals - 值（同 row,col 的会累加）
 * @returns {SparseCSR}
 */
function cooToCSR(n, rows, cols, vals) {
  // 统计每行非零数
  const rowCount = new Int32Array(n);
  for (let k = 0; k < rows.length; k++) rowCount[rows[k]]++;

  const rowPtr = new Int32Array(n + 1);
  for (let i = 0; i < n; i++) rowPtr[i + 1] = rowPtr[i] + rowCount[i];

  const nnz = rowPtr[n];
  const colIdx = new Int32Array(nnz);
  const values = new Float64Array(nnz);
  const cursor = new Int32Array(n); // 每行当前写入位置

  for (let k = 0; k < rows.length; k++) {
    const r = rows[k];
    const pos = rowPtr[r] + cursor[r];
    // 检查是否已有同 col 的条目（累加）
    let found = false;
    for (let p = rowPtr[r]; p < pos; p++) {
      if (colIdx[p] === cols[k]) {
        values[p] += vals[k];
        found = true;
        break;
      }
    }
    if (!found) {
      colIdx[pos] = cols[k];
      values[pos] = vals[k];
      cursor[r]++;
    }
  }
  return { n, rowPtr, colIdx, values };
}

/**
 * 构建约束线性方程组（稀疏 COO → CSR）
 *
 * 通用于力约束和速度约束，区别仅在 b 向量的输入（力 or 速度）。
 *
 * @param {{ i: number, j: number, normal: Vector3 }[]} contacts
 * @param {number[]} activeIdx - 活跃约束在 contacts 中的索引
 * @param {boolean[]} _fixedFlags
 * @param {Vector3[]} vectors - 用于构建 b 向量的数据（cForces 或 cVels）
 * @returns {{ A: SparseCSR, b: Float64Array }}
 */
function buildConstraintSystem(contacts, activeIdx, _fixedFlags, vectors) {
  const na = activeIdx.length;
  const b = new Float64Array(na);
  const cooRows = [], cooCols = [], cooVals = [];

  for (let r = 0; r < na; r++) {
    const cr = contacts[activeIdx[r]];
    const ir = cr.i, jr = cr.j, nr = cr.normal;
    const invMi_r = _fixedFlags[ir] ? 0 : 1;
    const invMj_r = _fixedFlags[jr] ? 0 : 1;

    b[r] = invMi_r * vectors[ir].dot(nr) - invMj_r * vectors[jr].dot(nr);

    for (let c = 0; c < na; c++) {
      const cc = contacts[activeIdx[c]];
      const ic = cc.i, jc = cc.j, ncv = cc.normal;
      const dot_rc = nr.dot(ncv);

      let val = 0;
      if (ir === ic) val -= invMi_r * dot_rc;
      if (ir === jc) val += invMi_r * dot_rc;
      if (jr === ic) val += invMj_r * dot_rc;
      if (jr === jc) val -= invMj_r * dot_rc;

      if (Math.abs(val) > 1e-15) {
        cooRows.push(r);
        cooCols.push(c);
        cooVals.push(val);
      }
    }
  }

  const A = cooToCSR(na, cooRows, cooCols, cooVals);
  return { A, b };
}

/**
 * 高斯消元法求解线性方程组 Ax = b（列主元 + 自适应阈值）
 * 适用于 n < 300 的物理约束系统，退化变量处理符合力学原理
 *
 * - pivotOk[col]=0 表示该约束自由度退化（如2D中t2方向无相对运动）
 * - 退化变量设 x[col]=0 是物理自洽的最小范数解（无约束力）
 *
 * @param {Object} A - CSR稀疏矩阵 {n, rowPtr, colIdx, values}
 * @param {Float64Array} b - 右端项（原始值，函数内不修改）
 * @returns {Float64Array} 解向量 x
 */
function solveLinearSystem(A, b) {
  const na = A.n;
  if (na === 0) return new Float64Array(0);
  // CSR → dense（暂时，将来替换）
  const D = Array.from({ length: na }, () => new Float64Array(na));
  let maxAbsA = 0;
  for (let r = 0; r < na; r++) {
    for (let p = A.rowPtr[r]; p < A.rowPtr[r + 1]; p++) {
      D[r][A.colIdx[p]] = A.values[p];
      const absVal = Math.abs(A.values[p]);
      if (absVal > maxAbsA) maxAbsA = absVal;
    }
  }
  const bb = new Float64Array(b);
  const pivotTol = Math.max(maxAbsA * na * 2.2e-16, 1e-20);
  const pivotOk = new Uint8Array(na);

  for (let col = 0; col < na; col++) {
    let maxVal = Math.abs(D[col][col]);
    let maxRow = col;
    for (let row = col + 1; row < na; row++) {
      const v = Math.abs(D[row][col]);
      if (v > maxVal) { maxVal = v; maxRow = row; }
    }
    if (maxVal < pivotTol) { pivotOk[col] = 0; continue; }
    pivotOk[col] = 1;
    if (maxRow !== col) {
      const tmpA = D[col]; D[col] = D[maxRow]; D[maxRow] = tmpA;
      const tmpB = bb[col]; bb[col] = bb[maxRow]; bb[maxRow] = tmpB;
    }
    const pivot = D[col][col];
    for (let row = col + 1; row < na; row++) {
      const factor = D[row][col] / pivot;
      D[row][col] = 0;
      for (let k = col + 1; k < na; k++) {
        D[row][k] -= factor * D[col][k];
      }
      bb[row] -= factor * bb[col];
    }
  }
  const x = new Float64Array(na);
  for (let row = na - 1; row >= 0; row--) {
    if (!pivotOk[row]) continue; // x[row] 已是 0
    let sum = bb[row];
    for (let k = row + 1; k < na; k++) {
      sum -= D[row][k] * x[k];
    }
    x[row] = sum / D[row][row];
  }
  return x;
}

/**
 * 将求解出的 lambda 施加到向量（力或速度）上
 * @param {Vector3[]} vectors - cForces 或 cVels
 * @param {{ i: number, j: number, normal: Vector3 }[]} contacts
 * @param {number[]} activeIdx
 * @param {boolean[]} _fixedFlags
 * @param {Float64Array} lambda
 * @param {Float64Array|null} lambdaOut - 可选，按 contact 索引存储 lambda
 * @param {number} SOFT_TOLERANCE
 */
function applyLambda(vectors, contacts, activeIdx, _fixedFlags, lambda, lambdaOut, SOFT_TOLERANCE) {
  for (let r = 0; r < activeIdx.length; r++) {
    const lam = lambda[r];
    const ci = activeIdx[r];
    if (lambdaOut) lambdaOut[ci] = lam;
    if (Math.abs(lam) < SOFT_TOLERANCE) continue;
    updataByFixedFlags(vectors, contacts[ci], contacts[ci].normal.clone().multiplyScalar(lam), _fixedFlags);
  }
}

/**
 * 求解速度的法向约束 —— 直接求解线性方程组
 *
 * 与 solveForceConstraints 同构（bilateral），精确消除所有法向相对速度。
 * 切向摩擦衰减由外部在已知 dt 后单独处理。
 *
 * @param {Vector3[]} cVels - 输入/输出：每个球的速度，需预先清零固定球的速度
 * @param {{ i: number, j: number, normal: Vector3 }[]} contacts
 * @param {boolean[]} _fixedFlags
 */
export function solveVelocityConstraints(cVels, contacts, _fixedFlags, SOFT_TOLERANCE = 1e-7) {
  if (contacts.length === 0) return cVels;

  const activeIdx = getActiveContacts(contacts, _fixedFlags);
  if (activeIdx.length === 0) return cVels;

  const { A, b } = buildConstraintSystem(contacts, activeIdx, _fixedFlags, cVels);
  const lambda = solveLinearSystem(A, b);
  if (!lambda) return cVels;

  applyLambda(cVels, contacts, activeIdx, _fixedFlags, lambda, null, SOFT_TOLERANCE);
  return cVels;
}


/**
 * 求解两球碰撞时间（考虑加速度）
 *
 * @param {Vector3} d0 初始相对位置 (p_j - p_i)
 * @param {Vector3} dv 相对速度 (v_j - v_i)
 * @param {Vector3} a1 球 i 的加速度
 * @param {Vector3} a2 球 j 的加速度
 * @param {number} R 目标距离
 * @param {number} maxT 最大时间
 * @returns {number|null}
 */
export function solveCollisionTime(
  d0, dv, a1, a2, R, maxT, SOFT_TOLERANCE = 1e-7
) {
  const C = a2.clone().sub(a1).multiplyScalar(0.5);
  const c0 = d0.dot(d0) - R * R;
  if (c0 <= 0) return 0;  // 已接触
  const c1 = 2 * d0.dot(dv);
  const c2 = 2 * d0.dot(C) + dv.dot(dv);
  const c3 = 2 * dv.dot(C);
  const c4 = C.dot(C);
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
