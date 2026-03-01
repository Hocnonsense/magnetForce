import { Vector3 } from "three";
import { solveCollisionTime } from './solver';

/**
 * 这一步用于约束磁铁没有发生碰撞,
 * 首先安全的时间步长应当满足所有球对在该时间步内不会发生碰撞（即距离不小于 2R - shellThickness）,
 * 其次在该时间步内，所有非固定球的位移都不会超过半径的一半.
 * @param {Vector3[]} positions
 * @param {Vector3[]} forces
 * @param {Vector3[]} velocities
 * @param {number} mass
 * @param {number} dist = 2R - shellThickness
 * @param {number} dt
 * @returns {{newPos: Vector3[], newVel: Vector3[], safedt: number, reason: string}}
 */
export function safeMove(positions, forces, velocities, mass, dist, dt, fixedFlags = null) {
  if (dt < 1e-12) {
    return { newPos: positions.map(p => p.clone()), newVel: velocities.map(v => v.clone()), safedt: 0, reason: 'zero delta time' };
  }
  const _fixedFlags = fixedFlags || positions.map(() => false);
  const n = positions.length;
  const accels = forces.map((f, i) => f.clone().multiplyScalar((+!_fixedFlags[i]) / mass));
  let safedt = dt, reason = 'max delta time';
  const d0 = new Vector3(), dv = new Vector3(); // 复用的临时变量
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (_fixedFlags[i] && _fixedFlags[j]) continue;
      d0.copy(positions[j]).sub(positions[i]);
      dv.copy(velocities[j]).sub(velocities[i]);
      const tc = solveCollisionTime(d0, dv, accels[i], accels[j], dist, safedt); // 需要保证 accels[i] 和 accels[j] 不会被修改
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
      const speed = v.length();
      const accel = a.length();
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
  /** @type {Vector3[]} */
  const newPos = positions.map((p, i) => {
    if (_fixedFlags[i]) return p.clone();
    const dt = safedt, dt2 = 0.5 * safedt * safedt, v = velocities[i], a = accels[i];
    return new Vector3(
      p.x + v.x * dt + a.x * dt2,
      p.y + v.y * dt + a.y * dt2,
      p.z + v.z * dt + a.z * dt2,
    );
  });
  /** @type {Vector3[]} */
  const newVel = velocities.map((v, i) => {
    if (_fixedFlags[i]) return new Vector3(0, 0, 0);
    const dt = safedt, a = accels[i];
    return new Vector3(
      v.x + a.x * dt,
      v.y + a.y * dt,
      v.z + a.z * dt,
    );
  });
  return { newPos, newVel, safedt, reason };
}

/**
 * @param {Vector3[]} torques
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
 * @param {Vector3} moment 当前磁矩方向（单位向量）
 * @param {Vector3} omega 当前角速度
 * @param {Vector3} torque 作用在磁矩上的力矩
 * @param {number} dt  时间步长
 * @return {{ moment: Vector3, omega: Vector3 }} 更新后的磁矩方向和角速度
 */
function applyTorque(moment, omega, torque, dt, inertia, DAMPING = 0.3) {
  const alpha = torque.clone().multiplyScalar(1 / inertia); // 角加速度
  // 检测是否在减速（力矩与角速度反向）
  const torqueDotOmega = torque.dot(omega);
  // 减速时用更强阻尼，加速时用弱阻尼
  const ANGULAR_DAMPING = torqueDotOmega < 0 ? DAMPING : 1;
  /** @type {Vector3} */
  const newOmega = new Vector3( // 更新角速度: ω_new = (ω + α*dt)
    omega.x * ANGULAR_DAMPING + alpha.x * dt,
    omega.y * ANGULAR_DAMPING + alpha.y * dt,
    omega.z * ANGULAR_DAMPING + alpha.z * dt
  );
  const omegaMag = newOmega.length();  // 旋转角度 = ω * dt
  if (omegaMag < 1e-20) return { moment, omega: newOmega };

  const angle = Math.min(omegaMag * dt, 0.5);
  const axis = newOmega.clone().multiplyScalar(1 / omegaMag);
  const newM = moment.clone().applyAxisAngle(axis, angle).normalize(); // 更新磁矩方向: m_new = R(ω*dt) * m
  // console.log(`dt=${dt}, angle=${angle}, torque=${torque}, m=${m}, newM=${newM}, omega=${omega}, newOmega=${newOmega}`);
  return { moment: newM, omega: newOmega };
}
