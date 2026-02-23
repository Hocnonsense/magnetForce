import * as Three from './three.jsx';

/**
 * @typedef {Three.Vec3} Vec3
 */

/**
 * 新基底构造（Gram-Schmidt）
 * 以 xHat 为新坐标系的 x 轴, rel 定义 x 轴与 y 轴的相对位置（不必归一化）
 * @param {Vec3} xHat
 * @param {Vec3} rel
 * @returns {((v: Vec3) => Vec3) | undefined}  两轴平行时返回 undefined
 */
export function getRot(xHat, rel) {
  // 去除 x 分量
  const yHat = Three.normalize(Three.add([...rel], Three.multiplyScalar([...xHat], -Three.Dot(rel, xHat))));
  if (Math.hypot(...yHat) < 0.5) { alert('无法确定 y 方向'); return; }
  const zHat = Three.Cross(xHat, yHat);
  // 旋转矩阵 R（行向量 = 新轴在旧坐标下的表示）→ R * v 将旧坐标向量变换到新坐标
  const R = [xHat, yHat, zHat];
  const rot = (/** @type {Vec3} */ v) => Three.assertVec3(R.map(row => Three.Dot(row, v)));
  return rot;
}
