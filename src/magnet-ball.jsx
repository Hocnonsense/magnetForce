import * as Three from "./three";
/**
 * @typedef {Three.Vec3} Vec3
 */

// ============================================
// 物理常数
// ============================================
const MU_0 = 4 * Math.PI * 1e-7;      // 真空磁导率 (H/m)
const PREFACTOR = MU_0 / (4 * Math.PI);
const DAMPING = 0.3; // Velocity damping per frame

// ============================================
// Fibonacci 球面均匀采样
// ============================================
function fibonacciSphere(n) {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // 黄金角
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;       // y 从 1 到 -1
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    points.push([r * Math.cos(theta), y, r * Math.sin(theta)]);
  }
  return points;
}
function fibonacciSphere4(n) {
  const sampleN = (n + 1) >> 2; // 向上取整：n→n/4
  const basePoints = fibonacciSphere(sampleN);
  const points = [];
  for (const p of basePoints) {
    points.push(p);
    points.push([-p[0], p[1], -p[2]]);
    points.push([-p[0], -p[1], -p[2]]); // 严格对跖点（中心对称）
    points.push([p[0], -p[1], p[2]]);
  }
  return points;
}

export default class BuckyBall {
  constructor(radius_m = 2.5e-3, br = 1.2, mass_kg = 0.5e-3, n_samples = 50) {
    this.radius = radius_m;
    this.br = br;
    this.mMag = br / MU_0;
    this.mass = mass_kg;

    this.sphere_samples = fibonacciSphere4(n_samples);
    this.n_samples = this.sphere_samples.length;
    this.area_per_sample = 4 * Math.PI * radius_m * radius_m / this.n_samples;
    const q_factor = this.mMag * this.area_per_sample;
    this.sample_q = this.sphere_samples.map(p => p[1] * q_factor)
    this.inertia = 0.4 * this.mass * (this.radius ** 2); // 球体转动惯量 (kg·m²)

    /** @type {Vec3[]} */
    this._rotBuf1 = Array.from({ length: this.n_samples }, () => [0, 0, 0]);
    /** @type {Vec3[]} */
    this._rotBuf2 = Array.from({ length: this.n_samples }, () => [0, 0, 0]);
    /** @type {Vec3[]} */
    this._r2dBuf = Array.from({ length: this.n_samples }, () => [0, 0, 0]);
  }

  // 接受 out buffer，in-place 写入
  /**
   * @param {Vec3} dir 旋转后方向（单位向量）
   * @param {Vec3[]} out 预分配的输出数组，长度至少为 this.n_samples，每项为 Vec3
   */
  _rotateSphereSamplesTo = (dir, out) => {
    const cosTheta = dir[1]; // up=[0,1,0]，Dot(up,dir) = dir[1]
    const sinTheta2 = 1 - cosTheta * cosTheta;
    if (sinTheta2 < 1e-9) {
      // 对齐或反向：直接拷贝/取反，不做旋转
      if (cosTheta > 0) {
        for (let k = 0; k < this.n_samples; k++) {
          const s = this.sphere_samples[k], o = out[k];
          o[0] = s[0]; o[1] = s[1]; o[2] = s[2];
        }
      } else {
        for (let k = 0; k < this.n_samples; k++) {
          const s = this.sphere_samples[k], o = out[k];
          o[0] = -s[0]; o[1] = -s[1]; o[2] = -s[2];
        }
      }
      return;
    }
    const sinTheta = Math.sqrt(sinTheta2);
    // axis = [dir[2], 0, -dir[0]]，normalize 后除以 sinTheta
    const ax = dir[2] / sinTheta;
    const az = -dir[0] / sinTheta;
    const oneMinusCos = 1 - cosTheta;
    for (let k = 0; k < this.n_samples; k++) {
      const p = this.sphere_samples[k], o = out[k];
      const px = p[0], py = p[1], pz = p[2];
      const axisDotP = ax * px + az * pz; // ay=0
      // cross = axis × p
      const cx = - az * py; // ay * pz = 0
      const cy = az * px - ax * pz;
      const cz = ax * py; // - ay * px = 0
      o[0] = px * cosTheta + cx * sinTheta + ax * axisDotP * oneMinusCos;
      o[1] = py * cosTheta + cy * sinTheta; // + ay * axisDotP * oneMinusCos = 0
      o[2] = pz * cosTheta + cz * sinTheta + az * axisDotP * oneMinusCos;
    }
  };

  // ============================================
  // 力和力矩计算（近场磁荷积分）
  // ============================================
  /**
   * @param {Vec3} d 两个球心的相对位置 (r2 - r1)
   * @param {Vec3} m1 球1的磁矩方向（需要保证为单位长度）
   * @param {Vec3} m2 球2的磁矩方向（需要保证为单位长度）
   */
  calcForceAndTorque(d, m1, m2) {
    const R = this.radius;
    const minDist = R / this.n_samples;
    // 表面点位置
    // 写入预分配 buffer，并原地 *R，零额外分配
    this._rotateSphereSamplesTo(m1, this._rotBuf1);
    this._rotateSphereSamplesTo(m2, this._rotBuf2);
    const r1_arr = this._rotBuf1;
    const r2_arr = this._rotBuf2;
    for (let k = 0; k < this.n_samples; k++) {
      r1_arr[k][0] *= R; r1_arr[k][1] *= R; r1_arr[k][2] *= R;
      r2_arr[k][0] *= R; r2_arr[k][1] *= R; r2_arr[k][2] *= R;
      // r2d = r2 + d，写入第三个 buffer
      this._r2dBuf[k][0] = r2_arr[k][0] + d[0];
      this._r2dBuf[k][1] = r2_arr[k][1] + d[1];
      this._r2dBuf[k][2] = r2_arr[k][2] + d[2];
    }
    const r2d_arr = this._r2dBuf;

    /** @type {Vec3} */
    const F2 = [0, 0, 0];
    /** @type {Vec3} */
    const tau1 = [0, 0, 0];
    /** @type {Vec3} */
    const tau2 = [0, 0, 0];
    for (let i = 0; i < this.n_samples; i++) {
      const r1 = r1_arr[i];
      const q1 = this.sample_q[i];
      for (let j = 0; j < this.n_samples; j++) {
        const r2 = r2d_arr[j];
        const rd = Three.DistanceTo(r1, r2);
        const dist = Math.max(Three.Length(rd), minDist);
        const q2 = this.sample_q[j];
        const forceMag = PREFACTOR * q1 * q2 / (dist ** 2);
        const f = Three.multiplyScalar(rd, forceMag / dist);
        Three.add(F2, f);
        Three.crossAddTo(r2_arr[j], f, tau2);
        Three.crossAddTo(r1, Three.multiplyScalar(f, -1), tau1);
      }
    }
    return {
      force1: Three.multiplyScalar([...F2], -1),
      force2: F2,
      torque1: tau1,
      torque2: tau2
    };
  }

  /**
   * @param {Vec3} moment 当前磁矩方向（单位向量）
   * @param {Vec3} omega 当前角速度
   * @param {Vec3} torque 作用在磁矩上的力矩
   * @param {number} dt  时间步长
   * @return {{ moment: Vec3, omega: Vec3 }} 更新后的磁矩方向和角速度
   */
  applyTorque(moment, omega, torque, dt) {
    const alpha = Three.multiplyScalar([...torque], 1 / this.inertia); // 角加速度
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
}
