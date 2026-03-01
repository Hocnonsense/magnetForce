import { useCallback } from 'react';
import { Vector3, Quaternion } from 'three';  // 仅导入需要的类
import { reframeCoordinates as _reframeCoordinates } from '../data/magnet-type';
import { getCenter } from '../utils/coordinates.jsx';

/**
 * @typedef {import('../data/magnet-type').Magnet} Magnet
 * @typedef {import('three').PerspectiveCamera} PerspectiveCamera
 * @typedef {import('three').WebGLRenderer} WebGLRenderer
 */

/**
 * 根据当前相机距离算白圈在物理坐标下的宽度
 * @param {Vector3} refPoint 参考点（默认原点）
 * @param {PerspectiveCamera} camera
 * @param {WebGLRenderer} renderer
 */
function getRingWorldWidth(refPoint, camera, renderer) {
  if (!camera || !renderer) return 0;
  const target = refPoint ?? new Vector3(0, 0, 0);
  const dist = camera.position.distanceTo(target);
  const fov = camera.fov * Math.PI / 180;
  const screenH = renderer.domElement.height;
  const pixelPerUnit = screenH / (2 * dist * Math.tan(fov / 2));
  // 视觉坐标宽度 → 物理坐标宽度
  return pixelPerUnit
};

/**
 * 检查 movedIds 平移 delta 后是否与其他球碰撞
 * @param {Magnet[]} mags
 * @param {Vector3} delta
 * @returns {Map<string, number[]> | null} id → 新位置（物理坐标），碰撞则返回 null
 */
function tryMove(mags, movedIds, delta, MAGNET_RADIUS) {
  const minD = MAGNET_RADIUS * 2 * 0.999;
  const newPos = new Map();
  const n = mags.length;
  for (let i = 0; i < n; i++) {
    if (!movedIds.has(mags[i].id)) continue;
    const p = new Vector3(...mags[i].pos).add(delta);
    newPos.set(mags[i].id, p);
    for (const { id, pos } of mags) {
      if (movedIds.has(id)) continue;
      const d = p.distanceTo(pos);
      if (d < minD) return;
    }
  }
  return newPos;
}

/**
 * 检查 ids 绕 center 旋转 angle（弧度）后是否碰撞
 * @param {Magnet[]} mags
 * @param {Vector3} center
 * @param {Quaternion} q
 * @returns {Map<string, { pos: Vector3, moment: Vector3 }> | null} id → 新位置（物理坐标），碰撞则返回 null
 */
function tryRotate(mags, movedIds, center, q, MAGNET_RADIUS) {
  const minD = MAGNET_RADIUS * 2 * 0.999;
  const newPosMoment = new Map();
  const n = mags.length;
  for (let i = 0; i < n; i++) {
    if (!movedIds.has(mags[i].id)) continue;
    const p = center.clone().add(mags[i].pos.clone().sub(center).applyQuaternion(q));
    newPosMoment.set(mags[i].id, { pos: p });
    for (const { id, pos } of mags) {
      if (movedIds.has(id)) continue;
      const d = p.distanceTo(pos);
      if (d < minD) return;
    }
  }
  newPosMoment.forEach((pos, id) => {
    const m = mags.find(m => m.id === id);
    newPosMoment.get(id).moment = m.moment.clone().applyQuaternion(q);
  });
  return newPosMoment;
}

function getCamera3D(camera) {
  const forward = new Vector3(); camera.getWorldDirection(forward);
  const right = new Vector3(); right.crossVectors(forward, camera.up).normalize();
  const up = new Vector3(); up.crossVectors(right, forward).normalize();
  return { forward, right, up };
}

export function useKeyboardNav(
  { stateRef, cameraRef, rendererRef, setMagnets, needsSyncRef, getIdsInAffectedGroup },
  RING_PX, VISUAL_SCALE, MAGNET_RADIUS
) {
  // ── 键盘输入捕获 ──────────────────────────────────────────────────────────
  // 点击 3D 区域时不再自动聚焦 keyTrap，仅选择分组时聚焦
  const handleKeyDown = useCallback((e) => {
    // 模拟时不允许操作
    if (stateRef.current.isSimulating) return;
    const effIds = getIdsInAffectedGroup(); if (effIds.size === 0) return;
    /** @type {PerspectiveCamera} */
    const camera = cameraRef.current; if (!camera) return;
    // 相机空间方向
    const { forward, right, up } = getCamera3D(camera);
    /** 选中球的质心（物理坐标） */
    const center = getCenter(stateRef.current.magnets.filter(m => effIds.has(m.id)).map(m => m.pos));
    /** 白圈世界宽度（物理坐标） */
    const ringW = RING_PX / VISUAL_SCALE / getRingWorldWidth(center, camera, rendererRef.current);
    let delta = null, rotAxis = null;
    switch (e.key) {
      // ── 方向键：平移 ── 无需克隆, 用完即丢
      case 'ArrowRight': delta = right.multiplyScalar(ringW); break;
      case 'ArrowLeft': delta = right.multiplyScalar(-ringW); break;
      case 'ArrowUp': delta = up.multiplyScalar(ringW); break;
      case 'ArrowDown': delta = up.multiplyScalar(-ringW); break;
      case 'PageUp': rotAxis = right.negate(); break;
      case 'PageDown': rotAxis = right; break;
      case 'Home': rotAxis = up.negate(); break;
      case 'End': rotAxis = up; break;
      case 'Tab': rotAxis = e.shiftKey ? forward.negate() : forward; break;
    }
    if (delta) {
      e.preventDefault();
      setMagnets(prev => {
        const newPos = tryMove(prev, effIds, delta, MAGNET_RADIUS);
        if (!newPos) return prev;
        needsSyncRef.current = true;
        return prev.map(m => {
          if (!effIds.has(m.id)) return m;
          return { ...m, pos: newPos.get(m.id) };
        });
      });
    } else if (rotAxis) {
      e.preventDefault();
      const angle = Math.atan2(ringW, MAGNET_RADIUS);
      const axis = rotAxis;
      const q = new Quaternion().setFromAxisAngle(axis, angle);
      setMagnets(prev => {
        const newPos = tryRotate(prev, effIds, center, q, MAGNET_RADIUS);
        if (!newPos) return prev;
        needsSyncRef.current = true;
        return prev.map(m => {
          if (!effIds.has(m.id)) return m;
          const newM = newPos.get(m.id);
          return { ...m, pos: newM.pos, moment: newM.moment };
        });
      });
    }
  }, [getIdsInAffectedGroup, MAGNET_RADIUS]);

  return { handleKeyDown };
}
