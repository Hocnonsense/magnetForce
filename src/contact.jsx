import * as Three from './three';
import BuckyBall from './magnet-ball';
import { solveQuartic } from './quartic-solver';

// 一个 N35 的磁球, 充分充磁后表面磁感应强度约为 1.2T. 这里考虑小磁球充能不完全
const BR = 1.0; // Tesla
const MASS = 0.5e-3; // 0.5g

// 接触状态
const CONTACT_STATE = {
  NONE: 'none',
  SHELL: 'shell',
  HARD: 'hard'
};

/**
 * @param {React.RefObject<MagnetPGSWorld|null>} rapierWorldRef
 * @param {number} MAGNET_RADIUS
 */
export default function initMagnetWorld(rapierWorldRef, setReady, MAGNET_RADIUS) {
  return () => {
    let mounted = true;
    rapierWorldRef.current = new MagnetPGSWorld(MAGNET_RADIUS);
    setReady(true);
    return () => { mounted = false; };
  }
}

/**
 * 物理世界管理器
 */
export class MagnetPGSWorld {
  constructor(radius_m = 0.0025) {
    this.contactStates = new Map();

    this.radius = radius_m;
    /** 允许 1% 长度形变 */
    this.shellThickness = this.radius * 0.01;
    this.ball = new BuckyBall(this.radius - this.shellThickness, BR, MASS, 200);
  }

  reset() {
    this.contactStates.clear();
  }

  _contactKey(i, j) {
    return i < j ? `${i},${j}` : `${j},${i}`;
  }

  _getContactState(dist) {
    const CONTACT_DIST = this.radius * 2;
    if (dist <= CONTACT_DIST - this.shellThickness) {
      return CONTACT_STATE.HARD;
    }
    if (dist <= CONTACT_DIST + this.shellThickness) {
      return CONTACT_STATE.SHELL;
    }
    return CONTACT_STATE.NONE;
  }

  _reportStateChange(i, j, dist) {
    const key = this._contactKey(i, j);
    const newState = this._getContactState(dist);
    const oldState = this.contactStates.get(key) || CONTACT_STATE.NONE;

    if (newState !== oldState) {
      const penetration = this.radius * 2 - dist;
      const distStr = (dist * 1000).toFixed(4);
      const penStr = (penetration * 1e6).toFixed(2);

      const stateEmoji = {
        [CONTACT_STATE.NONE]: '⚪',
        [CONTACT_STATE.SHELL]: '🟡',
        [CONTACT_STATE.HARD]: '🔴'
      };

      console.log(
        `%c${stateEmoji[oldState]} → ${stateEmoji[newState]} ` +
        `球${i}-球${j}: ${oldState} → ${newState} ` +
        `(dist=${distStr}mm, penetration=${penStr}μm)`,
        newState === CONTACT_STATE.HARD ? 'color: red; font-weight: bold' :
          newState === CONTACT_STATE.SHELL ? 'color: orange' : 'color: green'
      );
      this.contactStates.set(key, newState);
    }
  }

  getContacts(magnetPos) {
    const contacts = [];
    const n = magnetPos.length;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const p1 = magnetPos[i];
        const p2 = magnetPos[j];
        const d = Three.DistanceTo(p1, p2);
        const dist = Three.Length(d);

        this._reportStateChange(i, j, dist);
        const penetration = this.radius * 2 - dist;
        // 记录在外壳范围内的接触 (球1-shell-球2)，以供吸能处理
        if (penetration >= - this.shellThickness) {
          contacts.push({
            i, j,
            normal: Three.MultiplyScalar(d, 1 / dist),
            dist,
            penetration
          });
        }
      }
    }
    return contacts;
  }

  /** 计算磁力（用内部存储的位置和磁矩） */
  calcMagneticForces(magnets) {
    const n = magnets.length;
    const forces = magnets.map(() => [0, 0, 0]);
    const torques = magnets.map(() => [0, 0, 0]);

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const ft = this.ball.calcForceAndTorque(
          Three.DistanceTo(magnets[i].pos, magnets[j].pos),
          magnets[i].moment, magnets[j].moment
        )
        forces[i] = Three.Add(forces[i], ft.force1);
        forces[j] = Three.Add(forces[j], ft.force2);
        torques[i] = Three.Add(torques[i], ft.torque1);
        torques[j] = Three.Add(torques[j], ft.torque2);
      }
    }
    return { forces, torques };
  }

  step(magnets, dt) {
    const DIST = this.radius * 2;
    const magnetPos = magnets.map(m => m.pos);
    // 1. 检测接触
    const fixedPos = fixOverlaps(magnetPos, this.getContacts(magnetPos), DIST, this.shellThickness);
    // 2. 计算磁力
    const { forces, torques } = this.calcMagneticForces(
      magnets.map((m, i) => ({ pos: fixedPos[i], moment: m.m, omega: m.omega }))
    );
    // 3. 约束求解
    const { constrainedForces, constrainedVel } = solveClusterConstraints(
      fixedPos, magnets.map(m => m.vel), forces, this.getContacts(fixedPos)
    );
    // 4. 自适应时间步
    const { newPos, newVel, safedt } = this.safeStep(
      fixedPos, constrainedForces, constrainedVel, DIST, dt
    );
    // 5. 后处理接触约束（修正重叠）
    const fixedNewPos = fixOverlaps(newPos, this.getContacts(newPos), DIST, this.shellThickness);
    // 6. 更新旋转
    const newMoments = this.rotateMoments(torques, magnets.map(m => ({ moment: m.m, omega: m.omega })), safedt);
    return {
      newMagnets: magnets.map(
        (m, i) => ({
          ...m,
          pos: fixedNewPos[i],
          vel: newVel[i],
          f: constrainedForces[i],
          m: newMoments[i].moment,
          omega: newMoments[i].omega
        })
      ), safedt
    };
  }

  safeStep(poses, forces, vels, DIST, dt) {
    if (dt < 1e-12) {
      return { newPos: poses.map(p => [...p]), newVel: vels.map(v => [...v]), safedt: 0 };
    }
    const mass = this.ball.mass;
    const n = poses.length;
    const accels = forces.map(f => Three.MultiplyScalar(f, 1 / mass));
    const MIN_DIST = DIST - this.shellThickness;
    let safedt = dt;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const d0 = Three.DistanceTo(poses[i], poses[j]);
        const dv = Three.DistanceTo(vels[i], vels[j]);
        const da = Three.DistanceTo(accels[i], accels[j]);
        const tc = solveCollisionTime(d0, dv, da, MIN_DIST, safedt);
        if (tc !== null && tc < safedt) {
          safedt = Math.max(tc - 1e-12, 0);
        }
      }
    }
    // 计算终态
    const newPos = poses.map((p, i) =>
      Three.Add(
        Three.Add(p, Three.MultiplyScalar(vels[i], safedt)),
        Three.MultiplyScalar(accels[i], 0.5 * safedt * safedt)
      )
    );
    const newVel = vels.map((v, i) =>
      Three.Add(v, Three.MultiplyScalar(accels[i], safedt))
    );
    return { newPos, newVel, safedt };
  }

  rotateMoments(torques, moments, dt) {
    const newMoments = moments.map((m, i) => {
      const torque = torques[i];
      const moment = m.moment;
      const omega = m.omega;
      const result = this.ball.applyTorque(moment, omega, torque, dt);
      return { moment: result.m, omega: result.omega };
    });
    return newMoments;
  }
}

/**
 * 修正重叠，使所有球对满足：
 * - 硬约束：dist >= 2R - tolerance
 * - 软目标：接触中的球对趋近于 dist = 2R
 *
 * @param {Object[]} contacts 接触列表 [{i, j, dist}, ...]
 * @param {number} maxIter 最大迭代次数
 * @returns {number[][]} 修正后的位置
 */
function fixOverlaps(positions, contacts, target, tolerance, maxIter = 20) {
  const pos = positions.map(p => [...p]);
  const HARD_MIN = target - tolerance;  // 硬约束下限
  const SOFT_TOLERANCE = 1e-7;  // 软目标收敛精度

  for (let iter = 0; iter < maxIter; iter++) {
    let maxError = 0;
    for (const { i, j } of contacts) {
      const d = Three.DistanceTo(pos[i], pos[j]);
      const dist = Three.Length(d);
      const normal = Three.MultiplyScalar(d, 1 / dist);
      let correction = 0;
      if (dist < HARD_MIN) {
        // 硬约束违反：必须修正到 TARGET
        correction = (target - dist) / 2;
        maxError = Math.max(maxError, target - dist);
      } else if (dist < target) {
        // 在容差内但未达目标：轻柔地推向 TARGET
        correction = (target - dist) / 2 * 0.5;  // 只修正50%，避免震荡
        maxError = Math.max(maxError, target - dist);
      } // else if (dist >= TARGET) {不处理，让磁力自然吸引}
      if (correction > SOFT_TOLERANCE) {
        pos[i] = Three.Add(pos[i], Three.MultiplyScalar(normal, -correction));
        pos[j] = Three.Add(pos[j], Three.MultiplyScalar(normal, correction));
      }
    }
    if (maxError < SOFT_TOLERANCE) break; // 收敛检查
  }

  return pos;
}

/**
 * 求解接触约束：只约束法向分量，保留切向自由度
 * 使用 PGS 迭代
 */
function solveClusterConstraints(positions, velocities, forces, contacts, iterations = 8) {
  const cForces = forces.map(f => [...f]);
  const cVels = velocities.map(v => [...v]);
  if (contacts.length === 0) {
    return { constrainedForces: cForces, constrainedVel: cVels };
  }
  // 预计算法向量（从 i 指向 j）
  for (const contact of contacts) {
    const d = Three.DistanceTo(positions[contact.i], positions[contact.j]);
    const dist = Three.Length(d);
    contact.normal = Three.MultiplyScalar(d, 1 / dist);
  }
  // PGS 迭代求解力约束
  for (let iter = 0; iter < iterations; iter++) {
    let maxError = 0;
    for (const { i, j, normal } of contacts) {
      // 当前法向力分量
      const fIn = Three.Dot(cForces[i], normal);  // i 在法向的力
      const fJn = Three.Dot(cForces[j], normal);  // j 在法向的力
      // 如果 i 被吸向 j (fIn > 0) 且 j 被吸向 i (fJn < 0)
      // 需要支持力抵消，使法向力平衡
      // 目标：f'In = -f'Jn（牛顿第三定律）
      // 增量：lambda = (fIn + fJn) / 2
      // 但只在需要时施加（fIn > 0 表示 i 被推向 j）
      const lambda = (fIn - fJn) / 2;
      if (lambda > 0) {
        maxError = Math.max(maxError, lambda);
        // 只施加"推开"的支持力，不施加"拉住"的力
        cForces[i] = Three.Add(cForces[i], Three.MultiplyScalar(normal, -lambda));
        cForces[j] = Three.Add(cForces[j], Three.MultiplyScalar(normal, lambda));
      }
    }
    if (maxError < 1e-7) break; // 收敛检查
  }
  // PGS 迭代求解速度约束
  for (let iter = 0; iter < iterations; iter++) {
    let maxError = 0;
    for (const { i, j, normal } of contacts) {
      // 法向速度分量
      const vIn = Three.Dot(cVels[i], normal);
      const vJn = Three.Dot(cVels[j], normal);
      const relVn = vJn - vIn;  // 相对法向速度（正=分离，负=靠近）
      // 目标：法向相对速度 = 0
      // 即 vIn = vJn = 平均值
      if (Math.abs(relVn) > 1e-12) {
        const avgVn = (vIn + vJn) / 2;
        const deltaI = avgVn - vIn;
        const deltaJ = avgVn - vJn;
        maxError = Math.max(maxError, Math.abs(deltaI) + Math.abs(deltaJ));
        // 只修正法向分量，保留切向
        cVels[i] = Three.Add(cVels[i], Three.MultiplyScalar(normal, deltaI));
        cVels[j] = Three.Add(cVels[j], Three.MultiplyScalar(normal, deltaJ));
      }
    }
    if (maxError < 1e-7) break; // 收敛检查
  }
  return { constrainedForces: cForces, constrainedVel: cVels };
}

/**
 * 求解两球碰撞时间（考虑加速度）
 *
 * @param {number[]} d0 初始相对位置 (p_j - p_i)
 * @param {number[]} dv 相对速度 (v_j - v_i)
 * @param {number[]} da 相对加速度 (a_j - a_i)
 * @param {number} R 目标距离
 * @param {number} maxT 最大时间
 * @returns {number|null}
 */
function solveCollisionTime(d0, dv, da, R, maxT) {
  const C = Three.MultiplyScalar(da, 0.5);
  const c0 = Three.Dot(d0, d0) - R * R;
  if (c0 <= 0) return 0;  // 已接触
  const c1 = 2 * Three.Dot(d0, dv);
  const c2 = 2 * Three.Dot(d0, C) + Three.Dot(dv, dv);
  const c3 = 2 * Three.Dot(dv, C);
  const c4 = Three.Dot(C, C);
  const roots = solveQuartic(c4, c3, c2, c1, c0);

  let minT = null;
  for (const t of roots) {
    if (t > 1e-12 && t <= maxT + 1e-12) {
      if (minT === null || t < minT) minT = t;
    }
  }
  return minT;
}
