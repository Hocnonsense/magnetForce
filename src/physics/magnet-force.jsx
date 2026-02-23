import * as Three from "../utils/three";
/**
 * @typedef {Three.Vec3} Vec3
 */

export const MU_0 = 4 * Math.PI * 1e-7;      // 真空磁导率 (H/m)

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
 * @param {number} R - = br / MU_0 sphere radius (m)
 * @param {number} M - = br / MU_0 magnetization magnitude (A/m)
 * @param {Vec3}  m1 - unit vector for sphere 1
 * @param {Vec3}  m2 - unit vector for sphere 2
 * @param {Vec3}   d - vector from center1 to center2 (m), |d_vec| > R
 * @returns {{ U: number, force1: Vec3, force2: Vec3, torque1: Vec3, torque2: Vec3 }}
 */
export function calculateMagnet(R, M, m1, m2, d) {
  const igeo = _geometry(R, M, m1, m2, d);
  const U = magneticEnergy(igeo);
  const force1 = magneticForce(igeo);
  const force2 = Three.multiplyScalar([...force1], -1); // F on sphere 1 is opposite to F on sphere 2
  const { tor1, tor2 } = magneticTorque(igeo);
  return { U, force1, force2, torque1: tor1, torque2: tor2 };
}
