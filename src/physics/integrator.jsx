import * as Three from '../utils/three';
import { solveCollisionTime } from './solver';

/**
 * @typedef {Three.Vec3} Vec3
 */

/**
 * 这一步用于约束磁铁没有发生碰撞,
 * 首先安全的时间步长应当满足所有球对在该时间步内不会发生碰撞（即距离不小于 2R - shellThickness）,
 * 其次在该时间步内，所有非固定球的位移都不会超过半径的一半.
 * @param {Vec3[]} positions
 * @param {Vec3[]} forces
 * @param {Vec3[]} velocities
 * @param {number} mass
 * @param {number} dist = 2R - shellThickness
 * @param {number} dt
 * @returns {{newPos: Vec3[], newVel: Vec3[], safedt: number, reason: string}}
 */
export function safeMove(positions, forces, velocities, mass, dist, dt, fixedFlags = null) {
  if (dt < 1e-12) {
    return { newPos: positions.map(p => [...p]), newVel: velocities.map(v => [...v]), safedt: 0, reason: 'zero delta time' };
  }
  const _fixedFlags = fixedFlags || positions.map(() => false);
  const n = positions.length;
  const accels = forces.map((f, i) => Three.multiplyScalar(Three.assertVec3([...f]), (+!_fixedFlags[i]) / mass));
  let safedt = dt, reason = 'max delta time';
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (_fixedFlags[i] && _fixedFlags[j]) continue;
      const d0 = Three.DistanceTo(positions[i], positions[j]);
      const dv = Three.DistanceTo(velocities[i], velocities[j]);
      const tc = solveCollisionTime(d0, dv, accels[i], accels[j], dist, safedt);
      if (tc !== null && tc < safedt) {
        safedt = Math.max(tc - 1e-12, 0);
        reason = `collision between ${i} and ${j}`;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!_fixedFlags[i]) {
      // 求移动 MIN_DIST / 2 所需时间，考虑加速度的影响
      const MAX_DISP = dist / 2;
      const v = velocities[i], a = accels[i];
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
  /** @type {Vec3[]} */
  const newPos = positions.map((p, i) => {
    if (_fixedFlags[i]) return [...p];
    const dt = safedt, dt2 = 0.5 * safedt * safedt, v = velocities[i], a = accels[i];
    return [
      p[0] + v[0] * dt + a[0] * dt2,
      p[1] + v[1] * dt + a[1] * dt2,
      p[2] + v[2] * dt + a[2] * dt2,
    ];
  });
  /** @type {Vec3[]} */
  const newVel = velocities.map((v, i) => {
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

/**
 * @param {Vec3[]} torques
 */
export function rotateMoments(torques, moments, dt, inertia, DAMPING) {
  const newMoments = moments.map((m, i) => {
    const torque = torques[i];
    const moment = m.moment;
    const omega = m.omega;
    const result = applyTorque(moment, omega, torque, dt, inertia, DAMPING);
    return { moment: result.moment, omega: result.omega };
  });
  return newMoments;
}

/**
 * @param {Vec3} moment 当前磁矩方向（单位向量）
 * @param {Vec3} omega 当前角速度
 * @param {Vec3} torque 作用在磁矩上的力矩
 * @param {number} dt  时间步长
 * @return {{ moment: Vec3, omega: Vec3 }} 更新后的磁矩方向和角速度
 */
function applyTorque(moment, omega, torque, dt, inertia, DAMPING = 0.3) {
  const alpha = Three.multiplyScalar([...torque], 1 / inertia); // 角加速度
  // 检测是否在减速（力矩与角速度反向）
  const torqueDotOmega = Three.Dot(torque, omega);
  // 减速时用更强阻尼，加速时用弱阻尼
  const ANGULAR_DAMPING = torqueDotOmega < 0 ? DAMPING : 1;
  /** @type {Vec3} */
  const newOmega = [ // 更新角速度: ω_new = (ω + α*dt)
    omega[0] * ANGULAR_DAMPING + alpha[0] * dt,
    omega[1] * ANGULAR_DAMPING + alpha[1] * dt,
    omega[2] * ANGULAR_DAMPING + alpha[2] * dt
  ]
  const omegaMag = Three.Length(newOmega);  // 旋转角度 = ω * dt
  if (omegaMag < 1e-20) return { moment, omega: newOmega };

  const angle = Math.min(omegaMag * dt, 0.5);
  const axis = Three.multiplyScalar([...newOmega], 1 / omegaMag);
  const newM = Three.rotateAroundAxis([...moment], axis, angle);
  // console.log(`dt=${dt}, angle=${angle}, torque=${torque}, m=${m}, newM=${newM}, omega=${omega}, newOmega=${newOmega}`);
  return { moment: Three.normalize(newM), omega: newOmega };
}
