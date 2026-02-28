import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { reframeCoordinates as _reframeCoordinates, createMagnet, modifyMagnet, resetMagnetIdCounter } from './data/magnet-type';
import { exportJson, listPresets, loadPreset } from './data/presets';
import initMagnetWorld from './physics/world';
import { assertVec3 } from './utils/three';
import { useUndoHistory } from './hooks/useUndoHistory';
import { usePhysicsLoop } from './hooks/usePhysicsLoop';
import { useGrouping, getNewGroupName } from './hooks/useGrouping';
import { SimSection, SelectedMagnetPanel } from './components/MagnetPanelComponents';
import { PresetPanel } from './components/PresetPanel';
import { GroupPanel } from './components/GroupPanel';
import { smallBtnStyle, secStyle, lbl } from './styles';

// Simulation constants
const VISUAL_SCALE = 100;
/** 白圈屏幕像素宽度（固定） */
const RING_PX = 3;

/**
 * 根据当前相机距离算白圈在物理坐标下的宽度
 * @param {THREE.Vector3} refPoint 参考点（默认原点）
 * @param {THREE.PerspectiveCamera} camera
 * @param {THREE.WebGLRenderer} renderer
 */
function getRingWorldWidth(refPoint, camera, renderer) {
  if (!camera || !renderer) return 0;
  const target = refPoint ?? new THREE.Vector3(0, 0, 0);
  const dist = camera.position.distanceTo(target);
  const fov = camera.fov * Math.PI / 180;
  const screenH = renderer.domElement.height;
  const pixelPerUnit = screenH / (2 * dist * Math.tan(fov / 2));
  // 视觉坐标宽度 → 物理坐标宽度
  return pixelPerUnit
};

function getMagnetsCenter(magnets) {
  const c = new THREE.Vector3(0, 0, 0);
  const cnt = magnets.length;
  if (cnt === 0) return c;
  magnets.forEach(m => {
    c.add(new THREE.Vector3(m.pos[0], m.pos[1], m.pos[2]));
  });
  c.divideScalar(cnt);
  return c;
}

export default function MagnetSimulator() {
  const MAGNET_RADIUS = 0.0025; // 5mm diameter
  const VISUAL_RADIUS = MAGNET_RADIUS * VISUAL_SCALE;

  const [magnets, setMagnets] = useState([]);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [refYId, setRefYId] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simSpeed, setSimSpeed] = useState(0.00004);
  const [rotateMoments, setRotateMoments] = useState(true);
  const [useGravity, setUseGravity] = useState(false);
  const [showVectors, setShowVectors] = useState(true);
  const [totalSimTime, setTotalSimTime] = useState(0);
  const [editDraft, setEditDraft] = useState(null);
  const [presets, setPresets] = useState([]);
  const [ready, setReady] = useState(false);

  // ── 自定义预设（从分组保存）─────────────────────────────────────────────
  // { [name]: { magnets: Array<{pos,vel,moment,color,...}> } }
  // 球坐标以质心为原点存储（相对坐标）
  const [customPresets, setCustomPresets] = useState({});

  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const meshesRef = useRef([]);
  const arrowsRef = useRef([]);
  const forceArrowsRef = useRef([]);
  const torqueArrowsRef = useRef([]);
  const ringsRef = useRef([]);
  const needsSyncRef = useRef(true);
  const selectedIdsRef = useRef(new Set());
  selectedIdsRef.current = selectedIds;
  const keyTrapRef = useRef(null);

  // 最新参数 ref，避免闭包捕获旧值
  const stateRef = useRef({ magnets, isSimulating, simSpeed, rotateMoments, useGravity });
  stateRef.current = { magnets, isSimulating, simSpeed, rotateMoments, useGravity };

  // ── 分组 ──────────────────────────────────────────────────────────────────
  const grouping = useGrouping({ selectedIds, setSelectedIds, keyTrapRef, stateRef });
  const { activeGroup, groups, setGroups, setActiveGroup, getIdsInAffectedGroup, cleanupIds, resetGroups } = grouping;

  /** @type {React.RefObject<import('./physics/world').MagnetPGSWorld|null>} */
  const magnetWorldRef = useRef(null);
  useEffect(initMagnetWorld(magnetWorldRef, setReady, MAGNET_RADIUS), []);

  const fmt = v => v?.toFixed(6) ?? 'N/A';
  const magnetToDraft = (mag) => ({
    m_pos: mag.pos.map(p => p * 1000).map(fmt),
    m_vel: mag.vel.map(v => v * 1000).map(fmt),
    moment: mag.moment.map(fmt),
    f: (mag.f ?? [0, 0, 0]).map(fmt),
    tau: (mag.tau ?? [0, 0, 0]).map(fmt),
  });

  useEffect(() => {
    listPresets()
      .then(names => { setPresets(names); return loadPreset(names[0], MAGNET_RADIUS); })
      .then(res => setMagnets(res.magnets))
      .catch(console.error);
  }, []);

  // 兼容：单选时提供 selectedId
  const selectedId = selectedIds.size === 1 ? [...selectedIds][0] : null;

  // ── 撤销历史 ──────────────────────────────────────────────────────────────
  const { push: pushUndo, reset: resetUndo, histIdxRef } = useUndoHistory({
    getMagnets: () => stateRef.current.magnets,
    setMagnets,
    selectedId,
    onApplySnap: (snap) => {
      needsSyncRef.current = true;
      setMagnets(snap);
      const mag = snap.find(m => m.id === selectedId);
      if (mag) setEditDraft(magnetToDraft(mag));
    },
  });

  // ── 物理循环 ──────────────────────────────────────────────────────────────
  const { stepDeltaTimeRef } = usePhysicsLoop(
    magnetWorldRef, stateRef, ready,
    containerRef, sceneRef, cameraRef, rendererRef, controlsRef,
    needsSyncRef, selectedIdsRef,
    setMagnets, setEditDraft, setTotalSimTime, fmt,
  );

  // ── 工具：白圈世界宽度 & 碰撞检测 ────────────────────────────────────────
  /**
   * 根据当前相机距离算白圈在物理坐标下的宽度
   * @param {THREE.Vector3} [refPoint] 参考点（默认原点）
   * @returns {number} 物理坐标步长
   */

  /** 检查 movedIds 平移 delta 后是否与其他球碰撞 */
  const canMove = useCallback((mags, movedIds, delta) => {
    const minD = MAGNET_RADIUS * 2 * 0.999;
    for (const m of mags) {
      if (!movedIds.has(m.id)) continue;
      const np = m.pos.map((p, i) => p + delta[i]);
      for (const o of mags) {
        if (o.id === m.id || movedIds.has(o.id)) continue;
        const dx = np[0] - o.pos[0], dy = np[1] - o.pos[1], dz = np[2] - o.pos[2];
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < minD) return false;
      }
    }
    return true;
  }, [MAGNET_RADIUS]);

  /** 检查 ids 绕 center 旋转 angle（弧度）后是否碰撞 */
  const canRotate = useCallback((mags, ids, center, axis, angle) => {
    const minD = MAGNET_RADIUS * 2 * 0.999;
    const q = new THREE.Quaternion().setFromAxisAngle(axis, angle);
    const newPos = new Map();
    for (const m of mags) {
      if (ids.has(m.id)) {
        const v = new THREE.Vector3(...m.pos).sub(center);
        v.applyQuaternion(q).add(center);
        newPos.set(m.id, [v.x, v.y, v.z]);
      }
    }
    for (const [id, np] of newPos) {
      for (const o of mags) {
        if (o.id === id || ids.has(o.id)) continue;
        const dx = np[0] - o.pos[0], dy = np[1] - o.pos[1], dz = np[2] - o.pos[2];
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < minD) return false;
      }
    }
    return true;
  }, [MAGNET_RADIUS]);

  // ── Three.js 初始化 ────────────────────────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !ready) return;

    let width = container.clientWidth || 800;
    let height = container.clientHeight || 600;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a15);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 12);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // OrbitControls - 鼠标控制视图
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.zoomSpeed = 0.8;
    controls.panSpeed = 0.5;
    controls.minDistance = 2;
    controls.maxDistance = 50;
    controlsRef.current = controls;

    // 视角操作结束后，重新聚焦键盘捕获区（避免旋转视角后丢焦点）
    const onControlsEnd = () => {
      if (keyTrapRef.current && document.activeElement !== keyTrapRef.current) {
        keyTrapRef.current.focus();
      }
    };
    controls.addEventListener('end', onControlsEnd);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);
    const backLight = new THREE.DirectionalLight(0x4466ff, 0.3);
    backLight.position.set(-5, -5, -5);
    scene.add(backLight);

    // Grid
    const grid = new THREE.GridHelper(16, 16, 0x333355, 0x222233);
    grid.rotation.x = Math.PI / 2;
    scene.add(grid);

    const onResize = () => {
      const w = container.clientWidth || 800;
      const h = container.clientHeight || 600;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      controls.removeEventListener('end', onControlsEnd);
      controls.dispose();
      renderer.dispose();
      sceneRef.current = null;
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [ready]);

  // ── 创建/销毁 mesh + arrow + 白圈 ────────────────────────────────────────
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // 销毁旧对象（释放 GPU 资源）
    const disposeObj = (o) => {
      if (!o) return;
      scene.remove(o);
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        if (Array.isArray(o.material)) o.material.forEach(m => m.dispose());
        else o.material.dispose();
      }
      // ArrowHelper 是 Group，递归子对象
      if (o.children) o.children.forEach(disposeObj);
    };
    [...meshesRef.current, ...arrowsRef.current, ...forceArrowsRef.current, ...torqueArrowsRef.current, ...ringsRef.current]
      .forEach(disposeObj);

    const dummyDir = new THREE.Vector3(0, 1, 0);
    const meshes = [];
    const arrows = [];
    const forceArrows = [];
    const torqueArrows = [];
    const rings = [];

    magnets.forEach(mag => {
      // Sphere
      const geo = new THREE.SphereGeometry(VISUAL_RADIUS, 32, 32);
      const mat = new THREE.MeshStandardMaterial({
        color: mag.color,
        metalness: 0.8,
        roughness: 0.2,
        emissive: mag.color,
        emissiveIntensity: 0.15
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.userData.id = mag.id;
      scene.add(mesh);
      meshes.push(mesh);

      // 白圈（Torus，初始不可见）
      const ringGeo = new THREE.TorusGeometry(VISUAL_RADIUS * 1.12, 0.02, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffffff, transparent: true, opacity: 0.85,
        depthTest: false,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.visible = false;
      ring.renderOrder = 999;
      scene.add(ring);
      rings.push(ring);

      if (!showVectors) {
        arrows.push(null);
        forceArrows.push(null);
        torqueArrows.push(null);
        return;
      }
      const arrow = new THREE.ArrowHelper(
        dummyDir, new THREE.Vector3(), VISUAL_RADIUS * 3.6,
        0xffdd00, VISUAL_RADIUS * 0.5, VISUAL_RADIUS * 0.3
      );
      scene.add(arrow);
      arrows.push(arrow);
      const fArrow = new THREE.ArrowHelper(
        dummyDir, new THREE.Vector3(), VISUAL_RADIUS,
        0x00ffff, VISUAL_RADIUS * 0.4, VISUAL_RADIUS * 0.24
      );
      fArrow.visible = false;
      scene.add(fArrow);
      forceArrows.push(fArrow);
      const tArrow = new THREE.ArrowHelper(
        dummyDir, new THREE.Vector3(), VISUAL_RADIUS,
        0xff00ff, VISUAL_RADIUS * 0.32, VISUAL_RADIUS * 0.2
      );
      tArrow.visible = false;
      scene.add(tArrow);
      torqueArrows.push(tArrow);
    });
    meshesRef.current = meshes;
    arrowsRef.current = arrows;
    forceArrowsRef.current = forceArrows;
    torqueArrowsRef.current = torqueArrows;
    ringsRef.current = rings;
  }, [magnets.length, showVectors, ready]);

  // ── 更新位置/外观/白圈 ────────────────────────────────────────────────────
  useEffect(() => {
    const camera = cameraRef.current;
    const renderer = rendererRef.current;
    if (!sceneRef.current || !camera || !renderer) return;

    const meshes = meshesRef.current;
    const arrows = arrowsRef.current;
    const forceArrows = forceArrowsRef.current;
    const torqueArrows = torqueArrowsRef.current;
    const ringMeshes = ringsRef.current;
    const groupIds = getIdsInAffectedGroup();

    magnets.forEach((mag, idx) => {
      const scaled = mag.pos.map(p => p * VISUAL_SCALE);
      const origin = new THREE.Vector3(scaled[0], scaled[1], scaled[2]);
      // Sphere position & highlight
      const mesh = meshes[idx];
      if (mesh) {
        mesh.position.copy(origin);
        mesh.material.emissiveIntensity = selectedIds.has(mag.id) ? 0.4 : 0.15;
      }
      // 白圈
      const ring = ringMeshes[idx];
      if (ring) {
        const sel = groupIds.has(mag.id);
        ring.visible = sel;
        if (ring.visible) {
          ring.position.copy(origin);
          ring.lookAt(camera.position);
          // 固定像素宽度 → 动态世界宽度
          const dist = camera.position.distanceTo(origin);
          const fov = camera.fov * Math.PI / 180;
          const pxPerUnit = renderer.domElement.height / (2 * dist * Math.tan(fov / 2));
          const thickness = RING_PX / pxPerUnit;
          const majorR = VISUAL_RADIUS + thickness * 1.5;
          const minorR = thickness * 0.5;
          ring.geometry.dispose();
          ring.geometry = new THREE.TorusGeometry(majorR, minorR, 8, 64);
        }
      }
      if (!showVectors) return;
      /** @type {THREE.ArrowHelper} Moment arrow */
      const arrow = arrows[idx];
      if (arrow) {
        const dir = new THREE.Vector3(...mag.moment).normalize();
        arrow.position.copy(origin);
        arrow.setDirection(dir);
        arrow.setLength(VISUAL_RADIUS * 3.6, VISUAL_RADIUS * 0.5, VISUAL_RADIUS * 0.3);
      }
      /** @type {THREE.ArrowHelper} Force arrow */
      const fArrow = forceArrows[idx];
      if (fArrow) {
        const fMag = mag.f ? new THREE.Vector3(...mag.f).length() : 0;
        if (fMag > 1e-25) {
          fArrow.visible = true;
          const fDir = new THREE.Vector3(...mag.f).normalize();
          // 基于力的大小，范围 0.5R ~ 6R
          const fLen = VISUAL_RADIUS * Math.min(6, Math.max(0.5, Math.log10(fMag + 1e-10) + 10));
          fArrow.position.copy(origin);
          fArrow.setDirection(fDir);
          fArrow.setLength(fLen, VISUAL_RADIUS * 0.4, VISUAL_RADIUS * 0.24);
        } else {
          fArrow.visible = false;
        }
      }
      /** @type {THREE.ArrowHelper} Torque arrow */
      const tArrow = torqueArrows[idx];
      if (tArrow) {
        const tMag = mag.tau ? new THREE.Vector3(...mag.tau).length() : 0;
        if (tMag > 1e-25) {
          tArrow.visible = true;
          const tDir = new THREE.Vector3(...mag.tau).normalize();
          const tLen = VISUAL_RADIUS * Math.min(5, Math.max(0.4, Math.log10(tMag + 1e-10) + 8));
          tArrow.position.copy(origin);
          tArrow.setDirection(tDir);
          tArrow.setLength(tLen, VISUAL_RADIUS * 0.32, VISUAL_RADIUS * 0.2);
        } else {
          tArrow.visible = false;
        }
      }
    });
  }, [magnets, selectedIds, activeGroup, groups, showVectors, ready]);

  // editDraft 随选中同步（模拟中由 physicsStep 直接更新）
  useEffect(() => {
    if (selectedId === null) { setEditDraft(null); return; }
    const mag = magnets.find(m => m.id === selectedId);
    setEditDraft(mag ? magnetToDraft(mag) : null);
  }, [selectedId]);

  // ── 键盘输入捕获 ──────────────────────────────────────────────────────────
  // 点击 3D 区域时不再自动聚焦 keyTrap，仅选择分组时聚焦
  const handleKeyDown = useCallback((e) => {
    // 模拟时不允许操作
    if (stateRef.current.isSimulating) return;
    const effIds = getIdsInAffectedGroup(); if (effIds.size === 0) return;
    /** @type {THREE.PerspectiveCamera} */
    const camera = cameraRef.current; if (!camera) return;
    // 相机空间方向
    const forward = new THREE.Vector3(); camera.getWorldDirection(forward);
    const right = new THREE.Vector3(); right.crossVectors(forward, camera.up).normalize();
    const up = new THREE.Vector3(); up.crossVectors(right, forward).normalize();
    /** 选中球的质心（物理坐标） */
    const center = getMagnetsCenter(
      stateRef.current.magnets.filter(m => effIds.has(m.id))
    );
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
      case 'Tab':
        e.preventDefault();
        rotAxis = e.shiftKey ? forward.clone().negate() : forward.clone();
        break;
    }
    if (delta) {
      e.preventDefault();
      setMagnets(prev => {
        if (!canMove(prev, effIds, delta)) return prev;
        needsSyncRef.current = true;
        return prev.map(m => {
          if (!effIds.has(m.id)) return m;
          return { ...m, pos: m.pos.map((p, i) => p + delta[i]) };
        });
      });
      return;
    } else if (rotAxis) {
      e.preventDefault();
      const angle = Math.atan2(ringW, MAGNET_RADIUS);
      const axis = rotAxis;
      const q = new THREE.Quaternion().setFromAxisAngle(axis, angle);
      setMagnets(prev => {
        if (!canRotate(prev, effIds, center, axis, angle)) return prev;
        needsSyncRef.current = true;
        return prev.map(m => {
          if (!effIds.has(m.id)) return m;
          const v = new THREE.Vector3(...m.pos).sub(center).applyQuaternion(q).add(center);
          const mom = new THREE.Vector3(...m.moment).applyQuaternion(q);
          return { ...m, pos: [v.x, v.y, v.z], moment: [mom.x, mom.y, mom.z] };
        });
      });
    }
  }, [getIdsInAffectedGroup, canMove, canRotate, MAGNET_RADIUS]);

  // ── 点击选择 ──────────────────────────────────────────────────────────────
  const mouseDownPosRef = useRef(null);
  const handleMouseDown = (e) => {
    mouseDownPosRef.current = { x: e.clientX, y: e.clientY };
  };
  const handleClick = (e) => {
    const container = containerRef.current;
    const camera = cameraRef.current;
    if (!container || !camera) return;
    // 拖动过则不触发选择
    const downPos = mouseDownPosRef.current;
    if (downPos) {
      const dx = e.clientX - downPos.x, dy = e.clientY - downPos.y;
      // 5px 是经过数十年验证的工程经验值——足够大以过滤生理抖动，足够小以避免漏判短拖动
      if (dx * dx + dy * dy > 25) return;
    }
    const rect = container.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(meshesRef.current);
    const hitId = hits.length > 0 ? hits[0].object.userData.id : null;
    if (hitId === null) {
      if (!e.shiftKey) setSelectedIds(new Set());
    } else if (e.shiftKey) {
      setSelectedIds(prev => {
        const next = new Set(prev);
        next.has(hitId) ? next.delete(hitId) : next.add(hitId);
        return next;
      });
    } else {
      setSelectedIds(new Set([hitId]));
    }
  };

  // ── 磁球操作 ──────────────────────────────────────────────────────────────
  const addMagnet = () => {
    needsSyncRef.current = true;
    setMagnets(prev => [...prev, createMagnet({
      pos: [(Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, 0],
      color: Math.random() > 0.5 ? 0x4444ff : 0xff4444
    })]);
    setTotalSimTime(0);
  };
  const removeMagnet = () => {
    const effIds = getIdsInAffectedGroup();
    if (effIds.size === 0) return;
    needsSyncRef.current = true;
    setMagnets(prev => prev.filter(m => !effIds.has(m.id)));
    cleanupIds(effIds);
    setSelectedIds(new Set());
    setTotalSimTime(0);
  };

  const applyPreset = (name) => {
    magnetWorldRef.current?.reset();
    resetUndo();
    needsSyncRef.current = true;
    resetMagnetIdCounter(); // 确保预设加载的磁球 ID 从 0 开始连续
    loadPreset(name, MAGNET_RADIUS).then(res => setMagnets(res.magnets));
    setSelectedIds(new Set());
    resetGroups();
    setIsSimulating(false);
    setTotalSimTime(0);
  };

  const commitEdit = (field, index, value) => {
    const num = parseFloat(value);
    if (isNaN(num)) return;
    const fieldMap = { m_pos: ['pos', 0.001], m_vel: ['vel', 0.001], moment: ['moment', 1] };
    const mapping = fieldMap[field];
    if (!mapping) return;
    const [magField, scale] = mapping;
    pushUndo(magnets);
    const newMagnets = magnets.map(mag => {
      if (mag.id !== selectedId) return mag;
      const updated = [...(mag[magField] ?? [0, 0, 0])]; updated[index] = num * scale;
      return { ...mag, [magField]: updated };
    });
    pushUndo(newMagnets); histIdxRef.current = -1;
    needsSyncRef.current = true; setMagnets(newMagnets);
    setEditDraft(d => { if (!d) return d; const next = { ...d, [field]: [...d[field]] }; next[field][index] = fmt(num); return next; });
  };

  const exportMagnets = useCallback((mode) => {
    const json = exportJson(magnets.map(m => ({ ...m, pos: m.pos.map(p => p / MAGNET_RADIUS) })), 'exported', 'radius');
    if (mode === 'copy') {
      navigator.clipboard.writeText(json).then(() => alert('已复制到剪贴板')).catch(() => alert('复制失败'));
    } else {
      const a = Object.assign(document.createElement('a'), {
        href: URL.createObjectURL(new Blob([json], { type: 'application/json' })),
        download: `magnets_${Date.now()}.json`
      });
      a.click(); URL.revokeObjectURL(a.href);
    }
  }, [magnets]);

  const reframeCoordinates = () => {
    const newMagnets = _reframeCoordinates(magnets, selectedId, refYId);
    if (!newMagnets) return;
    pushUndo(magnets); pushUndo(newMagnets);
    needsSyncRef.current = true; setMagnets(newMagnets);
  };

  const toggleSimulation = () => {
    if (!isSimulating) needsSyncRef.current = true;
    setIsSimulating(v => !v);
  };

  // ── 保存分组为预设 & 拖放添加 ──────────────────────────────────────────
  /** 将激活分组保存为自定义预设（球坐标相对质心） */
  const saveGroupAsPreset = useCallback(() => {
    if (!activeGroup || !groups[activeGroup]) return;
    const ids = groups[activeGroup];
    const groupMags = magnets.filter(m => ids.has(m.id));
    if (groupMags.length === 0) return;
    const center = getMagnetsCenter(groupMags);
    const relativeMags = groupMags.map(m => ({
      pos: [m.pos[0] - center.x, m.pos[1] - center.y, m.pos[2] - center.z],
      moment: [...m.moment],
      color: m.color
    }));
    setCustomPresets(prev => ({ ...prev, [activeGroup]: { magnets: relativeMags } }));
  }, [activeGroup, groups, magnets]);

  /** 屏幕坐标 → 物理坐标（投射到过场景中心且垂直于视线的平面） */
  const screenToPhysics = useCallback((clientX, clientY) => {
    const container = containerRef.current;
    const camera = cameraRef.current;
    if (!container || !camera) return [0, 0, 0];
    const rect = container.getBoundingClientRect();
    const ndc = new THREE.Vector2(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(ndc, camera);
    // 投射到 z=0 平面（视觉坐标），若平行则用固定距离
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const hit = new THREE.Vector3();
    if (!raycaster.ray.intersectPlane(plane, hit)) {
      // 平行时用相机前方固定距离
      raycaster.ray.at(10, hit);
    }
    return [hit.x / VISUAL_SCALE, hit.y / VISUAL_SCALE, hit.z / VISUAL_SCALE];
  }, []);

  /** 在指定物理坐标处添加预设球组，返回新球的 id 集合 */
  const addPresetAtPosition = useCallback((presetName, physPos) => {
    const preset = customPresets[presetName];
    if (!preset) return;
    needsSyncRef.current = true;
    const newIds = new Set();
    setMagnets(prev => {
      const newMags = [...prev];
      for (const tmpl of preset.magnets) {
        const mag = createMagnet({
          pos: [tmpl.pos[0] + physPos[0], tmpl.pos[1] + physPos[1], tmpl.pos[2] + physPos[2]],
          vel: tmpl.vel,
          moment: tmpl.moment,
          color: tmpl.color,
          fixed: tmpl.fixed,
        });
        newIds.add(mag.id);
        newMags.push(mag);
      }
      return newMags;
    });
    // 创建分组
    const groupName = getNewGroupName(groups, presetName);
    setGroups(prev => ({ ...prev, [groupName]: newIds }));
    setSelectedIds(newIds);
    setActiveGroup(groupName);
    setTotalSimTime(0);
  }, [customPresets, groups]);

  /** 处理拖放到 3D 区域 */
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const presetName = e.dataTransfer.getData('text/x-preset-name');
    if (!presetName || !customPresets[presetName]) return;
    const physPos = screenToPhysics(e.clientX, e.clientY);
    addPresetAtPosition(presetName, physPos);
  }, [customPresets, screenToPhysics, addPresetAtPosition]);

  // ── 批量修改 ──────────────────────────────────────────────────────────────
  const batchSet = (field, value) => {
    const ids = getIdsInAffectedGroup();
    if (ids.size === 0) return;
    pushUndo(magnets);
    needsSyncRef.current = true;
    const next = magnets.map(m => ids.has(m.id) ? { ...m, [field]: value } : m);
    pushUndo(next); histIdxRef.current = -1;
    setMagnets(next);
  };

  // ── 渲染 ──────────────────────────────────────────────────────────────────
  if (!ready) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#08080f', color: '#e0e0e0', fontFamily: 'system-ui' }}>
      <div><div style={{ fontSize: '24px', marginBottom: '10px' }}>🧲</div><div>Loading physics engine...</div></div>
    </div>
  );

  const effIds = getIdsInAffectedGroup();

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', background: '#08080f', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#e0e0e0' }}>

      {/* 控制面板 */}
      <div style={{ width: '300px', padding: '16px', background: 'linear-gradient(180deg, #12121f 0%, #0a0a15 100%)', borderRight: '1px solid #2a2a3a', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>

        <h1 style={{ fontSize: '18px', margin: 0, color: '#fff', borderBottom: '1px solid #333', paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '24px' }}>🧲</span> NdFeB 磁力球模拟
          <span style={{ fontSize: '10px', color: '#666', marginLeft: 'auto' }}>PGS</span>
        </h1>

        <SimSection
          isSimulating={isSimulating} simSpeed={simSpeed}
          stepDeltaTimeRef={stepDeltaTimeRef} totalSimTime={totalSimTime}
          useGravity={useGravity}
          magnets={magnets} selectedId={selectedId} refYId={refYId} setRefYId={setRefYId}
          onToggle={toggleSimulation}
          onResetVel={() => { needsSyncRef.current = true; setMagnets(prev => prev.map(m => ({ ...m, vel: [0, 0, 0], omega: [0, 0, 0] }))); }}
          onPerturb={() => { needsSyncRef.current = true; setMagnets(prev => prev.map(m => modifyMagnet(m, { pos: assertVec3(m.pos.map(p => p + (Math.random() - 0.5) * 0.3 * MAGNET_RADIUS)) }))); }}
          onReframe={reframeCoordinates}
          onSimSpeedChange={setSimSpeed}
          onGravityChange={setUseGravity}
        />

        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={addMagnet} style={{ ...smallBtnStyle, flex: 1, background: '#1a3a1a', borderColor: '#2a5a2a' }}>+ 添加磁球</button>
          <button onClick={() => exportMagnets('download')} style={{ ...smallBtnStyle, flex: 1 }}>⬇ 导出</button>
          <button onClick={() => exportMagnets('copy')} style={{ ...smallBtnStyle, flex: 1 }}>📋 复制</button>
        </div>

        {/* Presets */}
        <PresetPanel
          groups={groups}
          activeGroup={activeGroup}
          presets={presets}
          customPresets={customPresets}
          setCustomPresets={setCustomPresets}
          applyPreset={applyPreset}
          saveGroupAsPreset={saveGroupAsPreset}
        />

        {/* Selected & Grouping Magnet Controls */}
        <GroupPanel
          grouping={grouping}
          selectedIds={selectedIds}
          onDeselect={() => { grouping.setActiveGroup(null); grouping.setNewGroupName(''); }}
          onRemoveMagnet={removeMagnet}
        />

        {/* ── 批量修改 ── */}
        {effIds.size > 1 && (
          <div style={secStyle}>
            <div style={lbl}>批量修改 ({effIds.size})</div>
            <div style={{ fontSize: '10px', color: '#666', marginBottom: '4px' }}>颜色</div>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '8px' }}>
              {[0xff4444, 0x4444ff, 0x44ff44, 0xffdd00, 0xff44ff, 0x44ffff, 0xff8800, 0x8844ff].map(c => (
                <button key={c} onClick={() => batchSet('color', c)} style={{
                  width: '22px', height: '22px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer',
                  background: `#${c.toString(16).padStart(6, '0')}`,
                }} />
              ))}
              <input type="color" onChange={e => batchSet('color', parseInt(e.target.value.slice(1), 16))}
                style={{ width: '22px', height: '22px', padding: 0, border: 'none', borderRadius: '4px', cursor: 'pointer' }} />
            </div>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              <button onClick={() => batchSet('vel', [0, 0, 0])} style={smallBtnStyle}>清零速度</button>
              <button onClick={() => batchSet('omega', [0, 0, 0])} style={smallBtnStyle}>清零角速度</button>
              <button onClick={() => {
                const ids = getIdsInAffectedGroup();
                needsSyncRef.current = true;
                setMagnets(prev => prev.map(m => ids.has(m.id) ? { ...m, fixed: !m.fixed } : m));
              }} style={smallBtnStyle}>切换固定</button>
            </div>
            <div style={{ fontSize: '10px', color: '#666', marginTop: '6px', marginBottom: '4px' }}>磁矩方向</div>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              {[['+X', [1, 0, 0]], ['−X', [-1, 0, 0]], ['+Y', [0, 1, 0]], ['−Y', [0, -1, 0]], ['+Z', [0, 0, 1]], ['−Z', [0, 0, -1]]].map(([label, val]) => (
                /** @ts-ignore */
                <button key={label} onClick={() => {
                  const ids = getIdsInAffectedGroup();
                  pushUndo(magnets); needsSyncRef.current = true;
                  const next = magnets.map(m => {
                    if (!ids.has(m.id)) return m;
                    const mag = Math.sqrt(m.moment[0] ** 2 + m.moment[1] ** 2 + m.moment[2] ** 2);
                    /** @ts-ignore */
                    return { ...m, moment: val.map(v => v * mag) };
                  });
                  pushUndo(next); histIdxRef.current = -1; setMagnets(next);
                }} style={smallBtnStyle}>{label}</button>
              ))}
            </div>
          </div>
        )}

        {/* 单选详细面板 */}
        {selectedId !== null && (
          <SelectedMagnetPanel
            selectedId={selectedId}
            selectedMag={magnets.find(m => m.id === selectedId)}
            isSimulating={isSimulating}
            editDraft={editDraft} setEditDraft={setEditDraft}
            onToggle={toggleSimulation}
            onToggleFixed={() => { needsSyncRef.current = true; setMagnets(prev => prev.map(m => m.id === selectedId ? { ...m, fixed: !m.fixed } : m)); }}
            onRemove={removeMagnet}
            onCommit={commitEdit}
          />
        )}

        {/* Display Options */}
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={showVectors}
            onChange={e => setShowVectors(e.target.checked)}
            style={{ accentColor: '#4488ff' }}
          />
          <span style={{ fontSize: '12px', color: '#aaa' }}>显示矢量箭头</span>
        </label>
      </div>

      {/* 3D View */}
      <div
        ref={containerRef}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{ flex: 1, minWidth: '400px', minHeight: '400px', cursor: 'pointer', position: 'relative' }}
      >
        {/* 隐藏的 textarea 捕获键盘事件，避免浏览器滚动条拦截方向键 */}
        <textarea
          ref={keyTrapRef}
          onKeyDown={handleKeyDown}
          style={{
            position: 'absolute', left: 0, top: 0,
            width: '1px', height: '1px', opacity: 0,
            padding: 0, border: 'none', outline: 'none',
            resize: 'none', overflow: 'hidden',
            pointerEvents: 'none',
          }}
          tabIndex={-1}
        />
      </div>
    </div>
  );
}
