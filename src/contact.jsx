import * as Three from './three';
import BuckyBall from './magnet-ball';
import { solveQuartic } from './quartic-solver';
import { modifyMagnet } from './magnet-type';
import { int } from 'three/tsl';
/**
 * @typedef {Three.Vec3} Vec3
 * @typedef {import('./magnet-type').Magnet} Magnet
 */

// 一个 N35 的磁球, 充分充磁后表面磁感应强度约为 1.2T. 这里考虑小磁球充能不完全
const BR = 1.0; // Tesla
const MASS = 0.5e-3; // 0.5g
const GRAVITY = -9.81; // m/s²
const SOFT_TOLERANCE = 1e-7;  // 软目标收敛精度

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

      // console.log(
      //   `%c${stateEmoji[oldState]} → ${stateEmoji[newState]} ` +
      //   `球${i}-球${j}: ${oldState} → ${newState} ` +
      //   `(dist=${distStr}mm, penetration=${penStr}μm)`,
      //   newState === CONTACT_STATE.HARD ? 'color: red; font-weight: bold' :
      //     newState === CONTACT_STATE.SHELL ? 'color: orange' : 'color: green'
      // );
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
            normal: Three.multiplyScalar(d, 1 / dist),
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
    const coforces = magnets.map(() => [0, 0, 0]);
    const torques = magnets.map(() => [0, 0, 0]);
    const forces = magnets.map(() => new Map());

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const ft = this.ball.calculateMagnet(
          Three.DistanceTo(magnets[i].pos, magnets[j].pos),
          magnets[i].moment, magnets[j].moment
        )
        Three.add(coforces[i], ft.force1);
        Three.add(coforces[j], ft.force2);
        Three.add(torques[i], ft.torque1);
        Three.add(torques[j], ft.torque2);
        forces[i].set(`M#${j}`, ft.force1);
        forces[j].set(`M#${i}`, ft.force2);
      }
    }
    return { coforces, torques, forces };
  }

  /**
   * @param {Magnet[]} magnets
   */
  step(magnets, dt, gravity = false) {
    const DIST = this.radius * 2;
    const fixedFlags = magnets.map(m => !!m.fixed);
    const magnetPos = magnets.map(m => m.pos);
    // 1. 检测接触
    const fixedPos = fixOverlaps(magnetPos, this.getContacts(magnetPos), DIST, this.shellThickness, fixedFlags);
    // 2. 计算磁力
    const { coforces, torques, forces } = this.calcMagneticForces(
      magnets.map((m, i) => ({ pos: fixedPos[i], moment: m.m }))
    );
    // 3. 叠加重力（固定球不受重力影响积分，但支持力会通过约束传递）
    if (gravity) {
      coforces.forEach((f, i) => {
        if (!fixedFlags[i]) {
          const g = GRAVITY * this.ball.mass;
          f[1] += g;
          forces[i].set('Gravity', [0, g, 0]);
        }
      });
    }
    // 4. 约束求解（固定球提供支持力）
    const { constrainedForces, constrainedVel } = solveClusterConstraints(
      fixedPos, magnets.map(m => m.vel), coforces, this.getContacts(fixedPos), fixedFlags
    );
    // 5. 自适应时间步（固定球跳过积分）
    const { newPos, newVel, safedt, reason } = this.safeStep(
      fixedPos, constrainedForces, constrainedVel, DIST, dt, fixedFlags
    );
    // 6. 后处理接触约束（修正重叠）
    const fixedNewPos = fixOverlaps(newPos, this.getContacts(newPos), DIST, this.shellThickness, fixedFlags);
    this.getContacts(fixedNewPos).map(c => {
      if (c.dist < this.radius) throw new Error(`球${c.i}-球${c.j}重叠过深: dist=${(c.dist * 1000).toFixed(4)}mm`)
    });
    // 7. 更新旋转
    const newMoments = this.rotateMoments(torques, magnets.map(m => ({ moment: m.m, omega: m.omega })), safedt);
    return {
      newMagnets: magnets.map(
        (m, i) => modifyMagnet(m, {
          pos: fixedNewPos[i],
          vel: newVel[i],
          f: constrainedForces[i],
          tau: torques[i],
          m: newMoments[i].moment,
          omega: newMoments[i].omega
        })
      ), safedt, forces, reason
    };
  }

  /**
   * 这一步用于约束磁铁没有发生碰撞,
   * 首先安全的时间步长应当满足所有球对在该时间步内不会发生碰撞（即距离不小于 2R - shellThickness）,
   * 其次在该时间步内，所有非固定球的位移都不会超过半径的一半.
   */
  safeStep(poses, forces, vels, DIST, dt, fixedFlags = null) {
    if (dt < 1e-12) {
      return { newPos: poses.map(p => [...p]), newVel: vels.map(v => [...v]), safedt: 0 };
    }
    const _fixedFlags = fixedFlags || poses.map(() => false);
    const mass = this.ball.mass;
    const n = poses.length;
    const accels = forces.map((f, i) => Three.multiplyScalar(Three.assertVec3([...f]), (+!_fixedFlags[i]) / mass));
    const MIN_DIST = DIST - this.shellThickness;
    let safedt = dt, reason = 'max delta time';
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (_fixedFlags[i] && _fixedFlags[j]) continue;
        const d0 = Three.DistanceTo(poses[i], poses[j]);
        const dv = Three.DistanceTo(vels[i], vels[j]);
        const tc = solveCollisionTime(d0, dv, accels[i], accels[j], MIN_DIST, safedt);
        if (tc !== null && tc < safedt) {
          safedt = Math.max(tc - 1e-12, 0);
          reason = `collision between ${i} and ${j}`;
        }
      }
    }
    for (let i = 0; i < n; i++) {
      if (!_fixedFlags[i]) {
        // 求移动 MIN_DIST / 2 所需时间，考虑加速度的影响
        const MAX_DISP = MIN_DIST / 2;
        const v = vels[i], a = accels[i];
        const speed = Math.hypot(v[0], v[1], v[2]);
        const accel = Math.hypot(a[0], a[1], a[2]);
        let tDisp;
        if (accel > 1e-12) {
          // |v|t + 0.5|a|t² = MAX_DISP 的正根
          tDisp = (-speed + Math.sqrt(speed * speed + 2 * accel * MAX_DISP)) / accel;
        } else if (speed > 1e-12) {
          tDisp = MAX_DISP / speed;
        } else {
          continue;
        }
        if (tDisp < safedt) {
          safedt = tDisp;
          reason = `max movement of ${i}`;
        }
      }
    }
    const newPos = poses.map((p, i) => {
      if (_fixedFlags[i]) return [...p];
      const dt = safedt, dt2 = 0.5 * safedt * safedt, v = vels[i], a = accels[i];
      return [
        p[0] + v[0] * dt + a[0] * dt2,
        p[1] + v[1] * dt + a[1] * dt2,
        p[2] + v[2] * dt + a[2] * dt2,
      ];
    });
    const newVel = vels.map((v, i) => {
      if (_fixedFlags[i]) return [0, 0, 0];
      const dt = safedt, a = accels[i];
      return [
        v[0] + a[0] * dt,
        v[1] + a[1] * dt,
        v[2] + a[2] * dt,
      ];
    });
    return { newPos, newVel, safedt, reason };
  }

  rotateMoments(torques, moments, dt) {
    const newMoments = moments.map((m, i) => {
      const torque = torques[i];
      const moment = m.moment;
      const omega = m.omega;
      const result = this.ball.applyTorque(moment, omega, torque, dt);
      return { moment: result.moment, omega: result.omega };
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
 * @param {boolean[]} fixedFlags 可选的固定标记数组，true 表示对应索引的球被固定，不参与位置修正
 * @returns {Vec3[]} 修正后的位置
 */
function fixOverlaps(positions, contacts, target, tolerance, fixedFlags = null, maxIter = 20) {
  const pos = positions.map(p => [...p]);
  const HARD_MIN = target - tolerance;  // 硬约束下限
  const _fixedFlags = fixedFlags || positions.map(() => false);
  for (let iter = 0; iter < maxIter; iter++) {
    let maxError = 0;
    for (const { i, j } of contacts) {
      const d = Three.DistanceTo(pos[i], pos[j]);
      const dist = Three.Length(d);
      const normal = Three.multiplyScalar(d, 1 / dist);
      let correction = 0;
      if (dist < HARD_MIN) {
        // 硬约束违反：必须修正到 TARGET
        correction = (target - dist);
        maxError = Math.max(maxError, target - dist);
      } else if (dist < target) {
        // 在容差内但未达目标：轻柔地推向 TARGET
        correction = (target - dist) * 0.5;  // 只修正50%，避免震荡
        maxError = Math.max(maxError, target - dist);
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
 * 求解接触约束：只约束法向分量，保留切向自由度
 * 使用 PGS 迭代
 * @param {Vec3[]} velocities
 */
function solveClusterConstraints(positions, velocities, forces, contacts, fixedFlags = null, iterations = 8) {
  const cForces = forces.map(f => [...f]);
  const _fixedFlags = fixedFlags || positions.map(() => false);
  /** @type {Vec3[]} */
  const cVels = velocities.map((v, i) => _fixedFlags[i] ? [0, 0, 0] : [...v]);
  if (contacts.length === 0) {
    return { constrainedForces: cForces, constrainedVel: cVels };
  }
  // 预计算法向量（从 i 指向 j）
  for (const contact of contacts) {
    const d = Three.DistanceTo(positions[contact.i], positions[contact.j]);
    const dist = Three.Length(d);
    contact.normal = Three.multiplyScalar(d, 1 / dist);
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
      const lambda = (fIn - fJn);
      if (lambda > 0) {
        maxError = Math.max(maxError, lambda);
        const cfi = cForces[i], cfj = cForces[j];
        // 如果其中有且仅有一个是固定球, 则将全部修正量转移给另一侧, 否则均分
        const iFixed = +_fixedFlags[i] - +_fixedFlags[j];
        const li = lambda * (1 - iFixed) * 0.5;
        const lj = lambda * (1 + iFixed) * 0.5;
        cfi[0] -= normal[0] * li; cfi[1] -= normal[1] * li; cfi[2] -= normal[2] * li;
        cfj[0] += normal[0] * lj; cfj[1] += normal[1] * lj; cfj[2] += normal[2] * lj;
      }
    }
    if (maxError < SOFT_TOLERANCE) break;
  }
  // PGS 迭代求解速度约束
  for (let iter = 0; iter < iterations; iter++) {
    let maxError = 0;
    for (const { i, j, normal } of contacts) {
      const vIn = Three.Dot(cVels[i], normal);
      const vJn = Three.Dot(cVels[j], normal);
      const relVn = vJn - vIn;  // 相对法向速度（正=分离，负=靠近）
      // 目标：法向相对速度 = 0
      // 即 vIn = vJn = 平均值
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
      }
    }
    if (maxError < SOFT_TOLERANCE) break; // 收敛检查
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
function solveCollisionTime(d0, dv, a1, a2, R, maxT, REL_TOL = 1e-6) {
  const da = Three.DistanceTo(a1, a2);
  const C = Three.multiplyScalar(da, 0.5);
  const c0 = Three.Dot(d0, d0) - R * R;
  if (c0 <= 0) return 0;  // 已接触
  const c1 = 2 * Three.Dot(d0, dv);
  const c2 = 2 * Three.Dot(d0, C) + Three.Dot(dv, dv);
  const c3 = 2 * Three.Dot(dv, C);
  const c4 = Three.Dot(C, C);
  const roots = solveQuartic(c4, c3, c2, c1, c0);

  const DIST2_TOL = (R * (1 + REL_TOL)) ** 2; // (R*(1+ε))²
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
