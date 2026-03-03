import { useCallback } from 'react';
import { Quaternion, Vector3 } from 'three'; // 仅导入需要的类
import { reframeCoordinates as _reframeCoordinates, tryMove, tryRotate } from '../data/magnet-type';
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
