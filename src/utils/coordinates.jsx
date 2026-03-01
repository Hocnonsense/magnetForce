import { Vector3 } from "three";

/**
 * 新基底构造（Gram-Schmidt）
 * 以 xHat 为新坐标系的 x 轴, rel 定义 x 轴与 y 轴的相对位置（不必归一化）
 * @param {Vector3} xHat
 * @param {Vector3} rel
 * @returns {((v: Vector3) => Vector3) | undefined}  两轴平行时返回 undefined
 */
export function getRot(xHat, rel) {
  // 去除 x 分量
  const yHat = rel.clone().sub(xHat.clone().multiplyScalar(rel.dot(xHat)));
  if (Math.hypot(...yHat) < 0.5) { alert('无法确定 y 方向'); return; }
  const zHat = xHat.clone().cross(yHat);
  // 旋转矩阵 R（行向量 = 新轴在旧坐标下的表示）→ R * v 将旧坐标向量变换到新坐标
  const rot = v => new Vector3(v.dot(xHat), v.dot(yHat), v.dot(zHat));
  return rot;
}

export function getCenter(vecs) {
  const center = new Vector3();
  for (const v of vecs) center.add(v);
  return center.multiplyScalar(1 / vecs.length);
}
