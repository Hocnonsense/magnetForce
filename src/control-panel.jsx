import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { assertVec3 } from './three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createMagnet, modifyMagnet } from './magnet-type';
import initMagnetWorld from './contact';
import { PRESETS, applyRadius } from './presets';

// Simulation constants
const VISUAL_SCALE = 100;
// Physical constants for NdFeB N35

/** @type {React.CSSProperties} */
const EDIT_ROW_STYLE = {
  width: '100%', boxSizing: 'border-box',
  background: '#0c0c1a', border: '1px solid #333',
  borderRadius: '3px', color: '#e0e0e0',
  fontSize: '10px', padding: '3px 5px', outline: 'none',
  fontFamily: 'monospace'
};
const EDIT_ROW_GRID = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px', marginBottom: '5px' };
const AXIS_LABELS = ['X', 'Y', 'Z'];

function EditRow({ field, label, color, editable, draft, setDraft, onCommit }) {
  return (
    <div>
      <div style={{ fontSize: '10px', color, marginBottom: '3px' }}>{label}</div>
      <div style={EDIT_ROW_GRID}>
        {AXIS_LABELS.map((axis, i) => (
          <input
            key={axis}
            placeholder={axis}
            disabled={!editable}
            style={{
              ...EDIT_ROW_STYLE,
              opacity: editable ? 1 : 0.4,
              cursor: editable ? 'text' : 'not-allowed',
            }}
            value={draft[field]?.[i] ?? ''}
            onChange={e => {
              if (!editable) return;
              const val = e.target.value;
              setDraft(d => { const next = { ...d, [field]: [...d[field]] }; next[field][i] = val; return next; });
            }}
            onKeyDown={e => {
              if (!editable) return;
              if (e.key === 'Enter') {
                onCommit(field, i, draft[field][i]);
                // @ts-ignore
                e.target.blur();
              }
            }}
            onFocus={e => { if (editable) e.target.style.borderColor = '#4488ff'; }}
            onBlur={e => e.target.style.borderColor = '#333'}
          />
        ))}
      </div>
    </div>
  );
}

export default function MagnetSimulator() {
  // const res = new BuckyBall(MAGNET_RADIUS, BR, 200).calcForceAndTorque(
  //   [-0.0025, 0, 0], [1, 0, 0], [0.0025, 0, 0], [1, 0, 0]
  // )
  // console.log('Force and Torque between two magnets:', res);

  const MAGNET_RADIUS = 0.0025; // 5mm diameter
  const VISUAL_RADIUS = MAGNET_RADIUS * VISUAL_SCALE;
  const BOUND = 0.02;

  const containerRef = useRef(null);
  const [magnets, setMagnets] = useState(applyRadius(PRESETS.pair(), MAGNET_RADIUS));
  const [selectedId, setSelectedId] = useState(null);
  const selectedIdRef = useRef(null);
  selectedIdRef.current = selectedId;
  const [isSimulating, setIsSimulating] = useState(false);
  const [simSpeed, setSimSpeed] = useState(0.00002);
  const [rotateMoments, setRotateMoments] = useState(true);
  const [showVectors, setShowVectors] = useState(true);
  const stepDeltaTimeRef = useRef(0);

  // Editable panel state
  const [editDraft, setEditDraft] = useState(null); // { pos: ['','',''], vel: ['','',''], m: ['','',''] }
  const undoStackRef = useRef([]); // [magnets snapshot, ...], oldest→newest
  const histIdxRef = useRef(-1);  // -1 = live (not navigating)

  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const meshesRef = useRef([]);
  const arrowsRef = useRef([]);
  const forceArrowsRef = useRef([]);
  const torqueArrowsRef = useRef([]);
  const animIdRef = useRef(null);
  const controlsRef = useRef(null);

  // Rapier refs
  const [ready, setReady] = useState(false);
  const needsSyncRef = useRef(true);

  // 状态 ref（每次渲染立即更新）
  const stateRef = useRef({ magnets, isSimulating, simSpeed, rotateMoments });
  stateRef.current = { magnets, isSimulating, simSpeed, rotateMoments };

  /** @type {React.RefObject<import('./contact').MagnetPGSWorld|null>} */
  const magnetWorldRef = useRef(null);
  useEffect(initMagnetWorld(magnetWorldRef, setReady, MAGNET_RADIUS), []);

  const fmt = v => v?.toFixed(6) ?? 'N/A';
  // Sync editDraft when selection changes
  useEffect(() => {
    if (selectedId === null) { setEditDraft(null); return; }
    const mag = magnets.find(m => m.id === selectedId);
    if (!mag) { setEditDraft(null); return; }
    setEditDraft({
      m_pos: mag.pos.map(p => p * 1000).map(fmt),
      m_vel: (mag.vel ?? [0, 0, 0]).map(v => v * 1000).map(fmt),
      m: mag.m.map(fmt),
    });
  }, [selectedId]); // intentionally only on selection change

  // Arrow key history navigation
  useEffect(() => {
    const applySnap = (snap) => {
      needsSyncRef.current = true;
      setMagnets(snap);
      if (selectedId !== null) {
        const mag = snap.find(m => m.id === selectedId);
        if (mag) {
          setEditDraft({
            m_pos: mag.pos.map(p => p * 1000).map(fmt),
            m_vel: (mag.vel ?? [0, 0, 0]).map(v => v * 1000).map(fmt),
            m: mag.m.map(fmt),
            f: (mag.f ?? [0, 0, 0]).map(fmt),
            tau: (mag.tau ?? [0, 0, 0]).map(fmt),
          });
        }
      }
    };

    const handler = (e) => {
      const hist = undoStackRef.current;

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (hist.length === 0) return;
        if (histIdxRef.current === -1) {
          // 保存当前未提交状态作为最新一条
          const cur = stateRef.current.magnets;
          hist.push(cur.map(m => ({ ...m, pos: [...m.pos], vel: [...m.vel], m: [...m.m] })));
          histIdxRef.current = hist.length - 2; // 跳到上一条
        } else if (histIdxRef.current > 0) {
          histIdxRef.current--;
        } else {
          return; // 已到最旧
        }
        applySnap(hist[histIdxRef.current]);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (histIdxRef.current === -1) return;
        histIdxRef.current++;
        if (histIdxRef.current >= hist.length - 1) {
          // 最新一条是保存的草稿，弹出并回到 live
          const draft = hist.pop();
          histIdxRef.current = -1;
          applySnap(draft);
        } else {
          applySnap(hist[histIdxRef.current]);
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedId]);

  // 物理步进
  const physicsStep = useCallback(() => {
    const { magnets: currentMagnets, isSimulating: running, simSpeed: dt, rotateMoments: rotate } = stateRef.current;
    const magnetWorld = magnetWorldRef.current;

    if (!running || !magnetWorld || currentMagnets.length < 2) return;
    const { newMagnets, safedt } = magnetWorld.step(currentMagnets, dt); // 物理步进
    stepDeltaTimeRef.current = safedt;
    const idToMag = new Map(currentMagnets.map((m, i) => [m.id, i]));
    const bounded = newMagnets.map(mag => modifyMagnet(currentMagnets[idToMag.get(mag.id)], { // 边界约束
      ...mag,
      pos: assertVec3(mag.pos.map(p => Math.max(-BOUND, Math.min(BOUND, p))))
    }));
    setMagnets(bounded);
    // 同批次更新 editDraft，避免 useEffect(magnets) 连锁触发
    const selId = selectedIdRef.current;
    if (selId !== null) {
      const mag = bounded.find(m => m.id === selId);
      if (mag) {
        setEditDraft(d => d ? {
          ...d,
          m_pos: mag.pos.map(p => p * 1000).map(fmt),
          m_vel: (mag.vel ?? [0, 0, 0]).map(v => v * 1000).map(fmt),
          m: mag.m.map(fmt),
          f: (mag.f ?? [0, 0, 0]).map(fmt),
          tau: (mag.tau ?? [0, 0, 0]).map(fmt),
        } : d);
      }
    }
  }, []);

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
    camera.lookAt(0, 0, 0);
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

    // Animation loop with physics
    let lastTime = performance.now();
    const animate = (time) => {
      animIdRef.current = requestAnimationFrame(animate);

      // Run physics at fixed timestep
      if (time - lastTime > 16) {
        needsSyncRef.current = true; // 标记需要同步
        physicsStep();
        lastTime = time;
      }

      controls.update();  // 更新控制器（damping需要）
      renderer.render(scene, camera);
    };
    animate(performance.now());

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
      cancelAnimationFrame(animIdRef.current);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [physicsStep, ready]);

  // Update meshes when magnets change
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Remove old
    meshesRef.current.forEach(m => scene.remove(m));
    arrowsRef.current.forEach(a => scene.remove(a));
    forceArrowsRef.current.forEach(a => scene.remove(a));
    torqueArrowsRef.current.forEach(a => scene.remove(a));
    meshesRef.current = [];
    arrowsRef.current = [];
    forceArrowsRef.current = [];
    torqueArrowsRef.current = [];

    magnets.forEach((mag) => {
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

      if (showVectors) {
        // Moment arrow - 长度约为直径的1.2倍
        const arrowLength = VISUAL_RADIUS * 3.6;
        const arrowHeadLength = VISUAL_RADIUS * 0.5;
        const arrowHeadWidth = VISUAL_RADIUS * 0.3;

        const dir = new THREE.Vector3(...mag.m).normalize();
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

        if (mag.f) {
          const f = mag.f;
          const fMag = new THREE.Vector3(...f).length();

          if (fMag > 1e-25) {
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
          if (mag.tau) {
            const t = mag.tau;
            const tMag = new THREE.Vector3(...t).length();
            if (tMag > 1e-25) {
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
          }
        }
      }
    });

  }, [magnets, selectedId, showVectors]);

  // Mouse interaction
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

    if (hits.length > 0) {
      setSelectedId(hits[0].object.userData.id);
    } else {
      setSelectedId(null);
    }
  };

  const addMagnet = () => {
    needsSyncRef.current = true;
    setMagnets(prev => [...prev, createMagnet({
      pos: [(Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, 0],
      color: Math.random() > 0.5 ? 0x4444ff : 0xff4444
    })]);
  };

  const removeMagnet = () => {
    if (selectedId === null) return;
    needsSyncRef.current = true;
    setMagnets(prev => prev.filter(m => m.id !== selectedId));
    setSelectedId(null);
  };

  const resetVelocities = () => {
    needsSyncRef.current = true;
    setMagnets(prev => prev.map(m => ({ ...m, vel: [0, 0, 0], omega: [0, 0, 0] })));
  };

  const loadPreset = (fn) => {
    if (magnetWorldRef.current) {
      magnetWorldRef.current.reset();
    }
    needsSyncRef.current = true;
    setMagnets(applyRadius(fn(), MAGNET_RADIUS));
    setSelectedId(null);
    setIsSimulating(false);
  };

  const perturbPositions = () => {
    needsSyncRef.current = true;
    setMagnets(prev => prev.map(m => (modifyMagnet(m, {
      pos: assertVec3(m.pos.map(p => p + (Math.random() - 0.5) * 0.3 * MAGNET_RADIUS)),
    }))));
  };

  const updateUndoStackRef = (newMagnets) => {
    for (const historyMagnets of undoStackRef.current) {
      if (historyMagnets.length !== newMagnets.length) continue;
      let same = true;
      for (let i = 0; i < historyMagnets.length; i++) {
        const a = historyMagnets[i], b = newMagnets[i];
        const allKeys = new Set([...Object.keys(a), ...Object.keys(b)]);
        for (const key of allKeys) {
          const av = a[key], bv = b[key];
          if (Array.isArray(av) && Array.isArray(bv)) {
            if (av.length !== bv.length || av.some((v, j) => Math.abs(v - bv[j]) > 1e-6)) { same = false; break; }
          } else if (av !== bv) { same = false; break; }
        }
        if (!same) break;
      }
      if (same) return; // 不添加重复历史
    }
    undoStackRef.current.push(
      newMagnets.map(m => ({ ...m, pos: [...m.pos], vel: [...m.vel], m: [...m.m] }))
    );
    if (undoStackRef.current.length > 100) undoStackRef.current.shift();
  };

  const commitEdit = (field, index, value) => {
    const num = parseFloat(value);
    if (isNaN(num)) return;
    const fieldMap = { m_pos: ['pos', 0.001], m_vel: ['vel', 0.001], m: ['m', 1] };
    const mapping = fieldMap[field] ?? null;
    if (!mapping) return; // readonly field
    const [magField, scale] = mapping;
    updateUndoStackRef(magnets);
    const newMagnets = magnets.map(mag => {
      if (mag.id !== selectedId) return mag;
      const updated = [...(mag[magField] || [0, 0, 0])];
      updated[index] = num * scale;
      return { ...mag, [magField]: updated };
    });
    updateUndoStackRef(newMagnets);
    histIdxRef.current = -1;
    needsSyncRef.current = true;
    setMagnets(newMagnets);
    setEditDraft(d => {
      if (!d) return d;
      const next = { ...d, [field]: [...d[field]] };
      next[field][index] = fmt(num);
      return next;
    });
  };

  const toggleSimulation = () => {
    if (!isSimulating) {
      needsSyncRef.current = true;
    }
    setIsSimulating(!isSimulating);
  };

  if (!ready) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#08080f',
        color: '#e0e0e0',
        fontFamily: 'system-ui'
      }}>
        <div>
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>🧲</div>
          <div>Loading physics engine...</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100vh',
      background: '#08080f',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#e0e0e0'
    }}>
      {/* Control Panel */}
      <div style={{
        width: '300px',
        padding: '16px',
        background: 'linear-gradient(180deg, #12121f 0%, #0a0a15 100%)',
        borderRight: '1px solid #2a2a3a',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px'
      }}>
        <h1 style={{
          fontSize: '18px',
          margin: 0,
          color: '#fff',
          borderBottom: '1px solid #333',
          paddingBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{ fontSize: '24px' }}>🧲</span>
          NdFeB 磁力球模拟
          <span style={{ fontSize: '10px', color: '#666', marginLeft: 'auto' }}>Rapier3D</span>
        </h1>

        {/* Simulation Controls */}
        <div style={{
          padding: '12px',
          background: isSimulating ? 'linear-gradient(135deg, #1a2a1a, #0a150a)' : '#1a1a2a',
          borderRadius: '8px',
          border: `1px solid ${isSimulating ? '#2a4a2a' : '#2a2a4a'}`
        }}>
          <div style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>动力学模拟</div>

          <button
            onClick={toggleSimulation}
            style={{
              width: '100%',
              padding: '12px',
              background: isSimulating
                ? 'linear-gradient(135deg, #aa3333, #882222)'
                : 'linear-gradient(135deg, #33aa33, #228822)',
              border: 'none',
              borderRadius: '6px',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: '10px'
            }}
          >
            {isSimulating ? '⏸ 暂停模拟' : '▶ 开始模拟'}
          </button>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={resetVelocities} style={smallBtnStyle}>
              重置速度
            </button>
            <button onClick={perturbPositions} style={smallBtnStyle}>
              扰动位置
            </button>
          </div>

          <div style={{ marginTop: '10px' }}>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>
              最大模拟速度: {simSpeed}×
            </div>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>
              当前每帧时间步长: {stepDeltaTimeRef.current * 1000}ms
            </div>
            <input
              type="range"
              min="-6"      // 10⁻⁶ = 0.000001
              max="0"       // 10⁰ = 1.0（修正：允许全速模拟）
              step="0.1"
              value={Math.log10(simSpeed)} // ✅ 滑块位置 = 当前速度的对数值
              onChange={e => {
                const logVal = parseFloat(e.target.value);
                const clampedLog = Math.max(-6, Math.min(0, logVal));
                setSimSpeed(Math.pow(10, clampedLog)); // ✅ 对数 → 线性转换
              }}
              style={{ width: '100%', accentColor: '#4488ff' }}
            />
          </div>

          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={rotateMoments}
              onChange={e => setRotateMoments(e.target.checked)}
              style={{ accentColor: '#4488ff' }}
            />
            <span style={{ fontSize: '12px', color: '#aaa' }}>允许磁矩旋转</span>
          </label>
        </div>

        {/* Presets */}
        <div>
          <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>预设结构</div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {Object.entries(PRESETS).map(([name, fn]) => (
              <button
                key={name}
                onClick={() => loadPreset(fn)}
                style={presetBtnStyle}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Magnet Controls */}
        {selectedId !== null && (
          <div style={{
            padding: '12px',
            background: '#15152a',
            borderRadius: '8px',
            border: '1px solid #2a2a4a'
          }}>
            <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '10px' }}>
              <button
                disabled={true}
                style={{
                  ...smallBtnStyle,
                  flex: 1,
                  opacity: 1
                }}
              >
                选中磁球 #{selectedId}
              </button>
              {/* 需要美化: 按钮缩小并位置靠右 */}
              <button
                onClick={toggleSimulation}
                disabled={selectedId === null}
                style={{
                  ...smallBtnStyle,
                  flex: 1,
                  background: isSimulating
                    ? 'linear-gradient(135deg, #aa3333, #882222)'
                    : 'linear-gradient(135deg, #33aa33, #228822)',
                  opacity: 1
                }}
              >
                {isSimulating ? '⏸ 暂停模拟' : '▶ 开始模拟'}
              </button>
              {/* 需要美化: 按钮缩小并位置靠右 */}
              <button
                onClick={removeMagnet}
                disabled={selectedId === null}
                style={{
                  ...smallBtnStyle,
                  flex: 1,
                  background: '#3a1a1a',
                  borderColor: '#5a2a2a',
                  opacity: 1
                }}
              >
                − 移除
              </button>
            </div>
            <div style={{ fontSize: '11px', color: '#666', marginTop: '10px', marginBottom: '6px' }}>
              {isSimulating ? '数据' : '编辑数据'}
              <span style={{ color: '#444', fontStyle: 'italic' }}>{isSimulating ? '' : '(回车确认 · Ctrl+Z 撤销)'}</span>
            </div>
            {editDraft && (() => {
              const rowProps = { draft: editDraft, setDraft: setEditDraft, onCommit: commitEdit };
              return (
                <>
                  <EditRow field="m_pos" label="位置 (mm)" color="#88ccff" editable={!isSimulating} {...rowProps} />
                  <EditRow field="m_vel" label="速度 (mm/s)" color="#88ffcc" editable={!isSimulating} {...rowProps} />
                  <EditRow field="m" label="磁矩 (方向)" color="#ffdd00" editable={!isSimulating} {...rowProps} />
                  <EditRow field="f" label="受力 (N)" color="#00ffff" editable={false} {...rowProps} />
                  <EditRow field="tau" label="力矩 (N·m)" color="#ff00ff" editable={false} {...rowProps} />
                </>
              );
            })()}
          </div>
        )}

        {/* Add */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={addMagnet} style={{ ...smallBtnStyle, flex: 1, background: '#1a3a1a', borderColor: '#2a5a2a' }}>
            + 添加磁球
          </button>
        </div>

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

const smallBtnStyle = {
  padding: '8px 12px',
  background: '#1a1a2a',
  border: '1px solid #333',
  borderRadius: '4px',
  color: '#aaa',
  fontSize: '11px',
  cursor: 'pointer'
};

const presetBtnStyle = {
  padding: '6px 14px',
  background: '#1a1a2a',
  border: '1px solid #333',
  borderRadius: '4px',
  color: '#ccc',
  fontSize: '12px',
  cursor: 'pointer'
};

const arrowBtnStyle = {
  padding: '8px',
  background: '#1a1a3a',
  border: '1px solid #333',
  borderRadius: '4px',
  color: '#ccc',
  fontSize: '14px',
  cursor: 'pointer'
};
