import { useCallback } from 'react';
import * as THREE from 'three';
import { reframeCoordinates as _reframeCoordinates } from '../data/magnet-type';
import * as Three from '../utils/three';

/**
 * @typedef {import('../data/magnet-type').Magnet} Magnet
 * @typedef {Three.Vec3} Vec3
 */


/**
 * 根据当前相机距离算白圈在物理坐标下的宽度
 * @param {Three.Vec3} refPoint 参考点（默认原点）
 * @param {THREE.PerspectiveCamera} camera
 * @param {THREE.WebGLRenderer} renderer
 */
function getRingWorldWidth(refPoint, camera, renderer) {
  if (!camera || !renderer) return 0;
  /** @type {Vec3} */
  const target = refPoint ?? [0, 0, 0];
  const dist = Three.Length(Three.DistanceTo(camera.position.toArray(), target));
  const fov = camera.fov * Math.PI / 180;
  const screenH = renderer.domElement.height;
  const pixelPerUnit = screenH / (2 * dist * Math.tan(fov / 2));
  // 视觉坐标宽度 → 物理坐标宽度
  return pixelPerUnit
};

function getMagnetsCenter(magnets) {
  /** @type {Vec3} */
  const c = [0, 0, 0];
  const cnt = magnets.length;
  if (cnt === 0) return c;
  magnets.forEach(m => {
    Three.add(c, m.pos);
  });
  Three.multiplyScalar(c, 1 / cnt);
  return c;
}

/**
 * 检查 movedIds 平移 delta 后是否与其他球碰撞
 * @param {Magnet[]} mags
 * @returns {Map<string, number[]> | null} id → 新位置（物理坐标），碰撞则返回 null
 */
function tryMove(mags, movedIds, delta, MAGNET_RADIUS) {
  const minD = MAGNET_RADIUS * 2 * 0.999;
  const newPos = new Map();
  const n = mags.length;
  for (let i = 0; i < n; i++) {
    if (!movedIds.has(mags[i].id)) continue;
    const p = Three.add([...mags[i].pos], delta);
    newPos.set(mags[i].id, p);
    for (const { id, pos } of mags) {
      if (movedIds.has(id)) continue;
      const d = Three.Length(Three.DistanceTo(p, pos));
      if (d < minD) return;
    }
  }
  return newPos;
}

/**
 * 检查 ids 绕 center 旋转 angle（弧度）后是否碰撞
 * @param {Magnet[]} mags
 * @param {Vec3} center
 * @param {THREE.Quaternion} q
 * @returns {Map<string, { pos: number[], moment: number[] }> | null} id → 新位置（物理坐标），碰撞则返回 null
 */
function tryRotate(mags, movedIds, center, q, MAGNET_RADIUS) {
  const minD = MAGNET_RADIUS * 2 * 0.999;
  const newPosMoment = new Map();
  const n = mags.length;
  const _q = [q.x, q.y, q.z, q.w];
  for (let i = 0; i < n; i++) {
    if (!movedIds.has(mags[i].id)) continue;
    const p = Three.add(Three.applyQuaternion(Three.DistanceTo(center, mags[i].pos), _q), center);
    newPosMoment.set(mags[i].id, { pos: p });
    for (const { id, pos } of mags) {
      if (movedIds.has(id)) continue;
      const d = Three.Length(Three.DistanceTo(p, pos));
      if (d < minD) return;
    }
  }
  newPosMoment.forEach((pos, id) => {
    const m = mags.find(m => m.id === id);
    newPosMoment.get(id).moment = Three.applyQuaternion(m.moment, _q);
  });
  return newPosMoment;
}

function getCamera3D(camera) {
  const forward = new THREE.Vector3(); camera.getWorldDirection(forward);
  const right = new THREE.Vector3(); right.crossVectors(forward, camera.up).normalize();
  const up = new THREE.Vector3(); up.crossVectors(right, forward).normalize();
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
    /** @type {THREE.PerspectiveCamera} */
    const camera = cameraRef.current; if (!camera) return;
    // 相机空间方向
    const { forward, right, up } = getCamera3D(camera);
    /** 选中球的质心（物理坐标） */
    const center = getMagnetsCenter(stateRef.current.magnets.filter(m => effIds.has(m.id)));
    /** 白圈世界宽度（物理坐标） */
    const ringW = RING_PX / VISUAL_SCALE / getRingWorldWidth(center, camera, rendererRef.current);
    let delta = null, rotAxis = null;
    switch (e.key) {
      // ── 方向键：平移 ──
      case 'ArrowRight': delta = [right.x * ringW, right.y * ringW, right.z * ringW]; break;
      case 'ArrowLeft': delta = [-right.x * ringW, -right.y * ringW, -right.z * ringW]; break;
      case 'ArrowUp': delta = [up.x * ringW, up.y * ringW, up.z * ringW]; break;
      case 'ArrowDown': delta = [-up.x * ringW, -up.y * ringW, -up.z * ringW]; break;
      case 'PageUp': rotAxis = right.clone().negate(); break;
      case 'PageDown': rotAxis = right.clone(); break;
      case 'Home': rotAxis = up.clone().negate(); break;
      case 'End': rotAxis = up.clone(); break;
      case 'Tab': rotAxis = e.shiftKey ? forward.clone().negate() : forward.clone(); break;
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
      const q = new THREE.Quaternion().setFromAxisAngle(axis, angle);
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
