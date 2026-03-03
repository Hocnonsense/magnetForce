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

import * as THREE from 'three';

/**
 * 对齐旋转算法：根据选中的参考磁球子集，计算使之对齐到坐标轴的四元数。
 *
 * 目标（按优先级）：
 *   1. 最小化参考子集在 Z 方向的展布（使之平行于 XY 平面）
 *   2. 在此基础上最小化 Y 方向的展布（使之平行于 X 轴）
 *
 * 算法：对参考子集位置做 PCA，将主成分方向对齐到 X/Y/Z 轴。
 *
 * @param {Array<{id:number, pos:THREE.Vector3}>} allGroupMagnets - 整个分组的所有磁球
 * @param {Set<number>} referenceIds - 用于计算对齐方向的参考子集 ID
 * @param {THREE.Vector3} center - 旋转中心（分组质心）
 * @returns {THREE.Quaternion|null} 对齐旋转四元数，可直接传给 tryRotate
 */
export function alignGroupByPCA(allGroupMagnets, referenceIds, center) {
  const refMagnets = allGroupMagnets.filter(m => referenceIds.has(m.id));
  if (refMagnets.length < 2) return null;

  // 参考子集去中心化（相对于旋转中心）
  const centered = refMagnets.map(m => m.pos.clone().sub(center));

  // 计算 3x3 协方差矩阵
  const n = centered.length;
  const C = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (const p of centered) {
    const v = [p.x, p.y, p.z];
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        C[i][j] += v[i] * v[j];
  }
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      C[i][j] /= n;

  // 特征分解
  const { eigenvalues, eigenvectors } = symmetricEigen3d3(C);

  // 按特征值从大到小排序 → 对应 X, Y, Z
  const indices = [0, 1, 2];
  indices.sort((a, b) => eigenvalues[b] - eigenvalues[a]);

  let pcX = new THREE.Vector3(...eigenvectors[indices[0]]);
  let pcY = new THREE.Vector3(...eigenvectors[indices[1]]);
  let pcZ; // 由叉积确定，保证右手系

  // 消歧：尽量使主成分方向与对应坐标轴同向
  if (pcX.x < 0) { pcX.negate(); pcY.negate(); }
  if (pcY.y < 0) { pcY.negate(); }
  // 叉积强制右手系
  pcZ = pcX.clone().cross(pcY).normalize();
  // pcY 也需要从叉积重建，确保三者严格正交
  pcY.copy(pcZ).cross(pcX).normalize();

  // 构建旋转矩阵：PCA 基 → 标准基
  // makeBasis(pcX, pcY, pcZ) 构建的矩阵将标准基映射到 PCA 基
  // 其逆（= 转置）将 PCA 基映射回标准基，正是我们要的旋转
  const rotBasis = new THREE.Matrix4().makeBasis(pcX, pcY, pcZ);
  const rotMatrix = rotBasis.clone().invert();

  return new THREE.Quaternion().setFromRotationMatrix(rotMatrix);
}

/**
 * 3x3 对称矩阵特征分解（Jacobi 迭代）
 */
function symmetricEigen3d3(A) {
  const a = A.map(row => [...row]);
  const V = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

  for (let iter = 0; iter < 100; iter++) {
    let maxVal = 0, p = 0, q = 1;
    for (let i = 0; i < 3; i++)
      for (let j = i + 1; j < 3; j++)
        if (Math.abs(a[i][j]) > maxVal) { maxVal = Math.abs(a[i][j]); p = i; q = j; }
    if (maxVal < 1e-12) break;

    const theta = 0.5 * Math.atan2(2 * a[p][q], a[p][p] - a[q][q]);
    const c = Math.cos(theta), s = Math.sin(theta);

    const newA = a.map(row => [...row]);
    for (let i = 0; i < 3; i++) {
      if (i === p || i === q) continue;
      newA[i][p] = newA[p][i] = c * a[i][p] + s * a[i][q];
      newA[i][q] = newA[q][i] = -s * a[i][p] + c * a[i][q];
    }
    newA[p][p] = c * c * a[p][p] + 2 * s * c * a[p][q] + s * s * a[q][q];
    newA[q][q] = s * s * a[p][p] - 2 * s * c * a[p][q] + c * c * a[q][q];
    newA[p][q] = newA[q][p] = 0;

    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        a[i][j] = newA[i][j];

    for (let i = 0; i < 3; i++) {
      const vip = V[i][p], viq = V[i][q];
      V[i][p] = c * vip + s * viq;
      V[i][q] = -s * vip + c * viq;
    }
  }

  return {
    eigenvalues: [a[0][0], a[1][1], a[2][2]],
    eigenvectors: [
      [V[0][0], V[1][0], V[2][0]],
      [V[0][1], V[1][1], V[2][1]],
      [V[0][2], V[1][2], V[2][2]],
    ],
  };
}
