import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { reframeCoordinates as _reframeCoordinates, createMagnet, modifyMagnet, resetMagnetIdCounter } from './data/magnet-type';
import { exportJson, listPresets, loadPreset } from './data/presets';
import initMagnetWorld from './physics/world';
import { assertVec3 } from './utils/three';
import { useUndoHistory } from './hooks/useUndoHistory';
import { usePhysicsLoop } from './hooks/usePhysicsLoop';
import { SimSection, SelectedMagnetPanel } from './components/magnet-panel-components';
import { smallBtnStyle, presetBtnStyle } from './styles';

// Simulation constants
const VISUAL_SCALE = 100;

export default function MagnetSimulator() {
  const MAGNET_RADIUS = 0.0025; // 5mm diameter
  const VISUAL_RADIUS = MAGNET_RADIUS * VISUAL_SCALE;

  const [magnets, setMagnets] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [refYId, setRefYId] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simSpeed, setSimSpeed] = useState(0.0002);
  const [rotateMoments, setRotateMoments] = useState(true);
  const [useGravity, setUseGravity] = useState(true);
  const [showVectors, setShowVectors] = useState(true);
  const [totalSimTime, setTotalSimTime] = useState(0);
  const [editDraft, setEditDraft] = useState(null);
  const [presets, setPresets] = useState([]);
  const [ready, setReady] = useState(false);

  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const meshesRef = useRef([]);
  const arrowsRef = useRef([]);
  const forceArrowsRef = useRef([]);
  const torqueArrowsRef = useRef([]);
  const needsSyncRef = useRef(true);
  const selectedIdRef = useRef(null);
  selectedIdRef.current = selectedId;

  // 最新参数 ref，避免闭包捕获旧值
  const stateRef = useRef({ magnets, isSimulating, simSpeed, rotateMoments, useGravity });
  stateRef.current = { magnets, isSimulating, simSpeed, rotateMoments, useGravity };

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
    needsSyncRef, selectedIdRef,
    setMagnets, setEditDraft, setTotalSimTime, fmt,
  );

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
      controls.dispose();
      renderer.dispose();
      sceneRef.current = null;
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [ready]);

  // Update meshes when magnets change
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    [...meshesRef.current, ...arrowsRef.current, ...forceArrowsRef.current, ...torqueArrowsRef.current]
      .forEach(o => scene.remove(o));
    meshesRef.current = [];
    arrowsRef.current = [];
    forceArrowsRef.current = [];
    torqueArrowsRef.current = [];

    magnets.forEach(mag => {
      // Sphere
      const geo = new THREE.SphereGeometry(VISUAL_RADIUS, 32, 32);
      const mat = new THREE.MeshStandardMaterial({
        color: mag.color,
        metalness: 0.8,
        roughness: 0.2,
        emissive: mag.color,
        emissiveIntensity: selectedId === mag.id ? 0.4 : 0.15
      });
      const mesh = new THREE.Mesh(geo, mat);
      const scaled = mag.pos.map(p => p * VISUAL_SCALE);
      mesh.position.set(scaled[0], scaled[1], scaled[2]);
      mesh.userData.id = mag.id;
      scene.add(mesh);
      meshesRef.current.push(mesh);

      if (!showVectors) return;
      // Moment arrow - 长度约为直径的1.2倍
      const arrowLength = VISUAL_RADIUS * 3.6;
      const arrowHeadLength = VISUAL_RADIUS * 0.5;
      const arrowHeadWidth = VISUAL_RADIUS * 0.3;

      const dir = new THREE.Vector3(...mag.moment).normalize();
      const origin = new THREE.Vector3(...scaled);
      const arrow = new THREE.ArrowHelper(
        dir, origin,
        arrowLength,
        0xffdd00,
        arrowHeadLength,
        arrowHeadWidth
      );
      scene.add(arrow);
      arrowsRef.current.push(arrow);

      const fMag = mag.f ? new THREE.Vector3(...mag.f).length() : 0;
      if (fMag > 1e-25) {
        const f = mag.f
        const fDir = new THREE.Vector3(...f).normalize();
        // 基于力的大小，范围 0.5R ~ 6R
        const fLen = VISUAL_RADIUS * Math.min(6, Math.max(0.5, Math.log10(fMag + 1e-10) + 10));
        const fArrow = new THREE.ArrowHelper(
          fDir, origin,
          fLen,
          0x00ffff,
          VISUAL_RADIUS * 0.4,
          VISUAL_RADIUS * 0.24
        );
        scene.add(fArrow);
        forceArrowsRef.current.push(fArrow);
      }

      // Torque arrow
      const tMag = mag.tau ? new THREE.Vector3(...mag.tau).length() : 0;
      if (tMag > 1e-25) {
        const t = mag.tau;
        const tDir = new THREE.Vector3(...t).normalize();
        const tLen = VISUAL_RADIUS * Math.min(5, Math.max(0.4, Math.log10(tMag + 1e-10) + 8));
        const tArrow = new THREE.ArrowHelper(
          tDir, origin,
          tLen,
          0xff00ff,
          VISUAL_RADIUS * 0.32,
          VISUAL_RADIUS * 0.2
        );
        scene.add(tArrow);
        torqueArrowsRef.current.push(tArrow);
      }
    });
  }, [magnets, selectedId, showVectors, ready]);

  // editDraft 随选中同步（模拟中由 physicsStep 直接更新）
  useEffect(() => {
    if (selectedId === null) { setEditDraft(null); return; }
    const mag = magnets.find(m => m.id === selectedId);
    setEditDraft(mag ? magnetToDraft(mag) : null);
  }, [selectedId]);

  // ── 操作函数 ──────────────────────────────────────────────────────────────
  const handleClick = (e) => {
    const container = containerRef.current;
    const camera = cameraRef.current;
    if (!container || !camera) return;

    const rect = container.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(meshesRef.current);
    setSelectedId(hits.length > 0 ? hits[0].object.userData.id : null);
  };

  const addMagnet = () => {
    needsSyncRef.current = true;
    setMagnets(prev => [...prev, createMagnet({
      pos: [(Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, 0],
      color: Math.random() > 0.5 ? 0x4444ff : 0xff4444
    })]);
    setTotalSimTime(0);
  };

  const removeMagnet = () => {
    if (selectedId === null) return;
    needsSyncRef.current = true;
    setMagnets(prev => prev.filter(m => m.id !== selectedId));
    setSelectedId(null);
    setTotalSimTime(0);
  };

  const applyPreset = (name) => {
    magnetWorldRef.current?.reset();
    resetUndo();
    needsSyncRef.current = true;
    resetMagnetIdCounter(); // 确保预设加载的磁球 ID 从 0 开始连续
    loadPreset(name, MAGNET_RADIUS).then(res => setMagnets(res.magnets));
    setSelectedId(null);
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

  // ── 渲染 ──────────────────────────────────────────────────────────────────
  if (!ready) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#08080f', color: '#e0e0e0', fontFamily: 'system-ui' }}>
      <div><div style={{ fontSize: '24px', marginBottom: '10px' }}>🧲</div><div>Loading physics engine...</div></div>
    </div>
  );

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
          rotateMoments={rotateMoments} useGravity={useGravity}
          magnets={magnets} selectedId={selectedId} refYId={refYId} setRefYId={setRefYId}
          onToggle={toggleSimulation}
          onResetVel={() => { needsSyncRef.current = true; setMagnets(prev => prev.map(m => ({ ...m, vel: [0, 0, 0], omega: [0, 0, 0] }))); }}
          onPerturb={() => { needsSyncRef.current = true; setMagnets(prev => prev.map(m => modifyMagnet(m, { pos: assertVec3(m.pos.map(p => p + (Math.random() - 0.5) * 0.3 * MAGNET_RADIUS)) }))); }}
          onReframe={reframeCoordinates}
          onSimSpeedChange={setSimSpeed}
          onRotateMomentsChange={setRotateMoments}
          onGravityChange={setUseGravity}
        />

        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={addMagnet} style={{ ...smallBtnStyle, flex: 1, background: '#1a3a1a', borderColor: '#2a5a2a' }}>+ 添加磁球</button>
          <button onClick={() => exportMagnets('download')} style={{ ...smallBtnStyle, flex: 1 }}>⬇ 导出</button>
          <button onClick={() => exportMagnets('copy')} style={{ ...smallBtnStyle, flex: 1 }}>📋 复制</button>
        </div>

        {/* Presets */}
        <div>
          <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>预设结构</div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {presets.map(name => (
              <button
                key={name}
                onClick={() => applyPreset(name)}
                style={presetBtnStyle}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Magnet Controls */}
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
        style={{
          flex: 1,
          minWidth: '400px',
          minHeight: '400px',
          cursor: 'pointer'
        }}
      />
    </div>
  );
}
