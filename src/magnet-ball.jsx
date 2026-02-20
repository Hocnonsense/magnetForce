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

  /**
   * @param {Vec3} d 两个球心的相对位置 (r2 - r1)
   * @param {Vec3} m1 球1的磁矩方向（需要保证为单位长度）
   * @param {Vec3} m2 球2的磁矩方向（需要保证为单位长度）
   */
  calculateMagnet(d, m1, m2) {
    return calculateMagnet(this.radius, this.mMag, m1, m2, d);
  }

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
    const tor1 = [0, 0, 0];
    /** @type {Vec3} */
    const tor2 = [0, 0, 0];
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
        Three.crossAddTo(r2_arr[j], f, tor2);
        Three.crossAddTo(r1, Three.multiplyScalar(f, -1), tor1);
      }
    }
    return {
      force1: Three.multiplyScalar([...F2], -1),
      force2: F2,
      torque1: tor1,
      torque2: tor2
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

/**
 * Analytical magnetic interaction between two uniformly magnetized spheres
 *
 * Physical model:
 *   - Two spheres, radius R, magnetization magnitude M (A/m)
 *   - Magnetic moments: m1_hat, m2_hat (unit vectors)
 *   - Separation vector: d_vec (from center1 to center2)
 *   - Valid for |d_vec| > R (no overlap)
 *
 * Derived from surface magnetic charge double integral, reduced analytically
 * using I_3^(k) = ∫_{-1}^{1} u^k / ρ^3 du,  ρ² = dt²+1−2dtu,  dt = d/R
 *
 * Results:
 *   U = (4π μ₀ M^2 R^6) / (9 d^3) [r - 3pq]
 *   F = −∇_d U   (force on sphere 2)
 *   τ₁ = −(∂U/∂m̂₁) × m̂₁   (torque on sphere 1)
 *   τ₂ = −(∂U/∂m̂₂) × m̂₂   (torque on sphere 2)
 *
 * Units: SI throughout (μ₀ = 4π×10⁻⁷ H/m)
 */

/**
 * Compute the common prefactor and scalar dot products.
 * @typedef {{ d_len: number, d_hat: Vec3, p: number, q: number, r: number, K: number, m1: Vec3, m2: Vec3, d: Vec3 }} InteractionGeometry
 *
 * @param R     - sphere radius (m)
 * @param M     - magnetization magnitude (A/m)
 * @param m1    - unit vector, magnetic moment direction of sphere 1
 * @param m2    - unit vector, magnetic moment direction of sphere 2
 * @param d - vector from center1 to center2 (m)

 * @returns {InteractionGeometry}  all precomputed scalars needed for U, F, τ
 * all scalars needed for U, F, τ
 */
function _geometry(R, M, m1, m2, d) {
  const d_len = Three.Length(d);
  const d_hat = Three.Normalize(d);
  const p = Three.Dot(m1, d_hat);
  const q = Three.Dot(m2, d_hat);
  const r = Three.Dot(m1, m2);
  // K = 4π μ₀ M² R⁶ / 9
  const K = (4 * Math.PI * MU_0 * M * M * Math.pow(R, 6)) / 9;
  return { d_len, d_hat, p, q, r, K, m1, m2, d };
}

/** Interaction energy U between two magnetized spheres.
 * @param {InteractionGeometry} igeo - precomputed geometry and scalar coefficients
 * @returns {number} // U = K/d³ · [r - 3pq]
 */
function magneticEnergy(igeo) {
  const { d_len, p, q, r, K } = igeo;
  return K / (d_len ** 3) * (r - 3 * p * q);
}

/**
 * F = -∇U
 *   = -∂U/∂d_vec
 *   = K/d⁴ · [3(r-3pq)·d_hat - 3·d^{-1}·d·(q(m1-p·d_hat) + p(m2-q·d_hat))/1]
 *   = (3K/d⁴) · [(5pq - r)·d_hat - q·m̂₁ - p·m̂₂]  ← 这是作用在球2上的力（d方向为正）
 * 完整推导：
 * ∂U/∂d_vec = K · [(-3/d⁵)·d_vec·(r-3pq) + d^{-3}·(-3)·(q·∂p/∂d_vec + p·∂q/∂d_vec)]
 * ∂p/∂d_vec = (m1 - p·d_hat)/d
 * ∂q/∂d_vec = (m2 - q·d_hat)/d
 *
 * @param {InteractionGeometry} igeo - precomputed geometry and scalar coefficients
 * @returns {Vec3} force vector [Fx, Fy, Fz] in Newtons
 */
function magneticForce(igeo) {
  const { d_len, d_hat, p, q, r, K, m1, m2 } = igeo;
  const d4 = d_len ** 4;
  const coeff = 3 * K / d4;
  const d_s = 5 * p * q - r;
  return Three.multiplyScalar([
    d_hat[0] * d_s - m1[0] * q - m2[0] * p,
    d_hat[1] * d_s - m1[1] * q - m2[1] * p,
    d_hat[2] * d_s - m1[2] * q - m2[2] * p
  ], coeff);
}

/**
 * τ₁ = -∂U/∂m̂₁ × m̂₁ = -m̂₁ × ∂U/∂m̂₁
 * ∂U/∂m̂₁ = K/d³ · (m̂₂ - 3q·d̂)
 * τ₁ = -m̂₁ × (m̂₂ - 3q·d̂) · K/d³
 *    = K/d³ · (3q·(m̂₁×d̂) - m̂₁×m̂₂)
 * τ₂ = K/d³ · (3p·(m̂₂×d̂) - m̂₂×m̂₁)
 *
 * @param {InteractionGeometry} igeo - precomputed geometry and scalar coefficients
 * @returns {{tor1: Vec3, tor2: Vec3}}
 */
function magneticTorque(igeo) {
  const { d_len, d_hat, p, q, K, m1, m2 } = igeo;
  const coeff = K / (d_len ** 3);
  const tor1 = Three.multiplyScalar(
    Three.Add(
      Three.multiplyScalar(Three.Cross(m1, d_hat), -3 * q),
      Three.Cross(m1, m2)  // - m̂₁×m̂₂, 符号：τ = -m̂₁×∂U/∂m̂₁
    ),
    -coeff
  );
  const tor2 = Three.multiplyScalar(
    Three.Add(
      Three.multiplyScalar(Three.Cross(m2, d_hat), -3 * p),
      Three.Cross(m2, m1)
    ),
    -coeff
  );
  return { tor1, tor2 };
}

/**
 * Compute all interactions at once.
 *
 * @param {number}   R     - sphere radius (m)
 * @param {number}   M     - magnetization magnitude (A/m)
 * @param {Vec3} m1    - unit vector for sphere 1
 * @param {Vec3} m2    - unit vector for sphere 2
 * @param {Vec3} d - vector from center1 to center2 (m), |d_vec| > R
 * @returns {{ U: number, force1: Vec3, force2: Vec3, torque1: Vec3, torque2: Vec3 }}
 */
function calculateMagnet(R, M, m1, m2, d) {
  const igeo = _geometry(R, M, m1, m2, d);
  const U = magneticEnergy(igeo);
  const force1 = magneticForce(igeo);
  const force2 = Three.multiplyScalar([...force1], -1); // F on sphere 1 is opposite to F on sphere 2
  const { tor1, tor2 } = magneticTorque(igeo);
  return { U, force1, force2, torque1: tor1, torque2: tor2 };
}
