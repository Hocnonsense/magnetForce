/**
 * 求解二次方程 ax² + bx + c = 0
 * @returns {number[]} 实根数组
 */
export function solveQuadratic(a, b, c) {
  if (Math.abs(a) < 1e-20) {
    return Math.abs(b) < 1e-20 ? [] : [-c / b];
  }
  const disc = b * b - 4 * a * c;
  if (disc < 0) return [];
  if (disc < 1e-20) return [-b / (2 * a)];
  const sqrtD = Math.sqrt(disc);
  return [(-b - sqrtD) / (2 * a), (-b + sqrtD) / (2 * a)];
}

/**
 * 求解三次方程 ax³ + bx² + cx + d = 0 (Cardano)
 * @returns {number[]} 实根数组
 */
export function solveCubic(a, b, c, d) {
  if (Math.abs(a) < 1e-20) return solveQuadratic(b, c, d);

  const p = b / a, q = c / a, r = d / a;
  const p3 = p / 3;
  const A = q - p * p / 3;
  const B = r - p * q / 3 + 2 * p * p * p / 27;
  const disc = B * B / 4 + A * A * A / 27;

  if (disc > 1e-12) {
    const sqrtD = Math.sqrt(disc);
    const u = Math.cbrt(-B / 2 + sqrtD);
    const v = Math.cbrt(-B / 2 - sqrtD);
    return [u + v - p3];
  } else if (disc < -1e-12) {
    const r_mag = Math.sqrt(-A * A * A / 27);
    const theta = Math.acos(Math.max(-1, Math.min(1, -B / (2 * r_mag)))) / 3;
    const m = 2 * Math.cbrt(r_mag);
    return [
      m * Math.cos(theta) - p3,
      m * Math.cos(theta + 2 * Math.PI / 3) - p3,
      m * Math.cos(theta + 4 * Math.PI / 3) - p3
    ];
  } else {
    const u = Math.cbrt(-B / 2);
    return [2 * u - p3, -u - p3];
  }
}

/**
 * 求解四次方程 ax⁴ + bx³ + cx² + dx + e = 0 (Ferrari)
 * @returns {number[]} 实根数组
 */
export function solveQuartic(a, b, c, d, e) {
  if (Math.abs(a) < 1e-20) return solveCubic(b, c, d, e);

  const p = b / a, q = c / a, r = d / a, s = e / a;
  const p4 = p / 4;
  const P = q - 3 * p * p / 8;
  const Q = r - p * q / 2 + p * p * p / 8;
  const R = s - p * r / 4 + p * p * q / 16 - 3 * p * p * p * p / 256;

  if (Math.abs(Q) < 1e-20) {
    // 双二次
    const roots = [];
    for (const y2 of solveQuadratic(1, P, R)) {
      if (y2 >= -1e-12) {
        const y = Math.sqrt(Math.max(0, y2));
        roots.push(y - p4, -y - p4);
      }
    }
    return roots;
  }

  const cubicRoots = solveCubic(1, P / 2, (P * P - 4 * R) / 16, -Q * Q / 64);
  const z = Math.max(...cubicRoots, 1e-12);
  const sqrtZ = Math.sqrt(Math.max(z, 0));

  if (sqrtZ < 1e-12) return [];

  const term = Q / (4 * sqrtZ);
  const roots = [];

  for (const [sign, t] of [[1, -term], [-1, term]]) {
    for (const y of solveQuadratic(1, sign * sqrtZ, P / 2 + z + t)) {
      roots.push(y - p4);
    }
  }
  return roots;
}
