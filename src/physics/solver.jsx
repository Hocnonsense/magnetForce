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
 */
export function solveClusterConstraints(
  positions, forces, velocities, contacts, fixedFlags = null, mass = 0.5,
  iterations = 8, SOFT_TOLERANCE = 1e-7
) {
  /** @type {Vec3[]} */
  const cForces = forces.map(f => [...f]);
  const _fixedFlags = fixedFlags || positions.map(() => false);
  /** @type {Vec3[]} */
  const cVels = velocities.map((v, i) => _fixedFlags[i] ? [0, 0, 0] : [...v]);
  if (contacts.length === 0) {
    return { constrainedForces: cForces, constrainedVel: cVels };
  }
  // PGS 迭代求解力约束
  for (let iter = 0; iter < iterations; iter++) {
    let maxError = 0;
    for (const { i, j, normal } of contacts) {
      // 当前法向力分量
      const fIn = Three.Dot(cForces[i], normal);
      const fJn = Three.Dot(cForces[j], normal);
      // 如果 i 被吸向 j (fIn > 0) 且 j 被吸向 i (fJn < 0), 则需要支持力抵消，使法向力平衡
      const lambda = (fIn - fJn);
      // 只在需要时施加（fIn > 0 表示 i 被推向 j）
      if (lambda > 0) {
        maxError = Math.max(maxError, lambda);
        const cfi = cForces[i], cfj = cForces[j];
        // 如果其中有且仅有一个是固定球, 则将全部修正量转移给另一侧, 否则均分
        const iFixed = +_fixedFlags[i] - +_fixedFlags[j];
        const li = lambda * (1 - iFixed) * 0.5;
        const lj = lambda * (1 + iFixed) * 0.5;
        // f'In = -f'Jn（牛顿第三定律）
        cfi[0] -= normal[0] * li; cfi[1] -= normal[1] * li; cfi[2] -= normal[2] * li;
        cfj[0] += normal[0] * lj; cfj[1] += normal[1] * lj; cfj[2] += normal[2] * lj;
      }
    }
    if (maxError < SOFT_TOLERANCE) break;
  }
  // PGS 迭代求解接触面法向速度约束与切向衰减
  for (let iter = 0; iter < iterations; iter++) {
    let maxError = 0;
    for (const { i, j, normal } of contacts) {
      const vIn = Three.Dot(cVels[i], normal);
      const vJn = Three.Dot(cVels[j], normal);
      const relVn = vJn - vIn;  // 相对法向速度（正=分离，负=靠近）
      // 目标：法向相对速度 = 0, 即 vIn = vJn = 平均值
      if (Math.abs(relVn) > 1e-12) {
        let deltaI = 0, deltaJ = 0;
        if (_fixedFlags[i] || _fixedFlags[j]) {
          // 固定球速度为 0，自由球需完全消除法向分量
          deltaI = -vIn;
          deltaJ = -vJn;
        } else {
          const avgVn = (vIn + vJn) / 2;
          deltaI = avgVn - vIn;
          deltaJ = avgVn - vJn;
        }
        maxError = Math.max(maxError, Math.abs(deltaI) + Math.abs(deltaJ));
        // 只修正法向分量，保留切向
        const cvi = cVels[i], cvj = cVels[j];
        cvi[0] += normal[0] * deltaI; cvi[1] += normal[1] * deltaI; cvi[2] += normal[2] * deltaI;
        cvj[0] += normal[0] * deltaJ; cvj[1] += normal[1] * deltaJ; cvj[2] += normal[2] * deltaJ;
        // 后续需要在这里计算法向冲量和摩擦导致的动量变化
      }
    }
    if (maxError < SOFT_TOLERANCE) break; // 收敛检查
  }
  // 切向摩擦：简单模型，切向速度减半
  for (const { i, j, normal, penetration } of contacts) {
    if (penetration < 0) continue; // 未接触，无摩擦
    const iFixed = _fixedFlags[i], jFixed = _fixedFlags[j];
    // 分别处理每个球自身的切向速度
    for (const [k, isFixed] of [[i, iFixed], [j, jFixed]]) {
      if (isFixed) continue;
      const v = cVels[k];
      // 切向速度 = 总速度 - 法向分量
      const vn = Three.Dot(v, normal);
      const vTan = [
        v[0] - normal[0] * vn,
        v[1] - normal[1] * vn,
        v[2] - normal[2] * vn,
      ];
      const tanSpeed = Math.hypot(...vTan);
      if (tanSpeed < 1e-12) continue;
      // 摩擦力方向与切向速度相反 → 切向速度减半
      v[0] -= vTan[0] * 0.5;
      v[1] -= vTan[1] * 0.5;
      v[2] -= vTan[2] * 0.5;
    }
  }
  return { constrainedForces: cForces, constrainedVel: cVels };
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
