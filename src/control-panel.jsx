import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import initRapierWorld from './rapier-world';
import initMagnetWorld from './contact';
import { PRESETS, applyRadius } from './presets';

// Simulation constants
const VISUAL_SCALE = 100;
// Physical constants for NdFeB N35

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
  const [isSimulating, setIsSimulating] = useState(false);
  const [simSpeed, setSimSpeed] = useState(0.00002);
  const [rotateMoments, setRotateMoments] = useState(true);
  const [showVectors, setShowVectors] = useState(true);

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

  // 物理步进
  const physicsStep = useCallback(() => {
    const { magnets: currentMagnets, isSimulating: running, simSpeed: dt, rotateMoments: rotate } = stateRef.current;
    const magnetWorld = magnetWorldRef.current;

    if (!running || !magnetWorld || currentMagnets.length < 2) return;
    const { newMagnets, safedt } = magnetWorld.step(currentMagnets, dt); // 物理步进
    const idToMag = new Map(currentMagnets.map((m, i) => [m.id, i]));
    const bounded = newMagnets.map(mag => ({ // 边界约束
      ...currentMagnets[idToMag.get(mag.id)],
      ...mag,
      pos: mag.pos.map(p => Math.max(-BOUND, Math.min(BOUND, p)))
    }));
    setMagnets(bounded);
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

  const rotateMoment = (axis) => {
    if (selectedId === null) return;
    needsSyncRef.current = true;
    const angle = Math.PI / 6;
    setMagnets(prev => prev.map(mag => {
      if (mag.id !== selectedId) return mag;
      const [x, y, z] = mag.m;
      let newM;
      if (axis === 'x') newM = [x, y * Math.cos(angle) - z * Math.sin(angle), y * Math.sin(angle) + z * Math.cos(angle)];
      else if (axis === 'y') newM = [x * Math.cos(angle) + z * Math.sin(angle), y, -x * Math.sin(angle) + z * Math.cos(angle)];
      else newM = [x * Math.cos(angle) - y * Math.sin(angle), x * Math.sin(angle) + y * Math.cos(angle), z];
      const len = Math.sqrt(newM[0] ** 2 + newM[1] ** 2 + newM[2] ** 2);
      return { ...mag, m: newM.map(v => v / len) };
    }));
  };

  const moveMagnet = (dx, dy, dz = 0) => {
    if (selectedId === null) return;
    needsSyncRef.current = true;
    setMagnets(prev => prev.map(mag =>
      mag.id === selectedId
        ? { ...mag, pos: [mag.pos[0] + dx, mag.pos[1] + dy, mag.pos[2] + dz], vel: [0, 0, 0] }
        : mag
    ));
  };

  const addMagnet = () => {
    needsSyncRef.current = true;
    const newId = Math.max(...magnets.map(m => m.id), -1) + 1;
    setMagnets(prev => [...prev, {
      id: newId,
      pos: [(Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, 0],
      vel: [0, 0, 0],
      m: [0, 0, 1],
      omega: [0, 0, 0],
      color: newId % 2 ? 0x4444ff : 0xff4444
    }]);
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
    setMagnets(prev => prev.map(m => ({
      ...m,
      pos: m.pos.map(p => p + (Math.random() - 0.5) * 0.3 * MAGNET_RADIUS),
      vel: [0, 0, 0]
    })));
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
              模拟速度: {simSpeed}×
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

        {/* Add/Remove */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={addMagnet} style={{ ...smallBtnStyle, flex: 1, background: '#1a3a1a', borderColor: '#2a5a2a' }}>
            + 添加磁球
          </button>
          <button
            onClick={removeMagnet}
            disabled={selectedId === null}
            style={{
              ...smallBtnStyle,
              flex: 1,
              background: selectedId !== null ? '#3a1a1a' : '#1a1a1a',
              borderColor: selectedId !== null ? '#5a2a2a' : '#333',
              opacity: selectedId !== null ? 1 : 0.5
            }}
          >
            − 移除选中
          </button>
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
              选中磁球 #{selectedId}
            </div>

            <div style={{ fontSize: '11px', color: '#666', marginBottom: '6px' }}>移动位置:</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', marginBottom: '10px' }}>
              <div />
              <button onClick={() => moveMagnet(0, 0.4 * MAGNET_RADIUS)} style={arrowBtnStyle}>↑</button>
              <div />
              <button onClick={() => moveMagnet(-0.4 * MAGNET_RADIUS, 0)} style={arrowBtnStyle}>←</button>
              <button onClick={() => moveMagnet(0, 0, 0.4 * MAGNET_RADIUS)} style={{ ...arrowBtnStyle, fontSize: '10px' }}>Z+</button>
              <button onClick={() => moveMagnet(0.4 * MAGNET_RADIUS, 0)} style={arrowBtnStyle}>→</button>
              <div />
              <button onClick={() => moveMagnet(0, -0.4 * MAGNET_RADIUS)} style={arrowBtnStyle}>↓</button>
              <button onClick={() => moveMagnet(0, 0, -0.4 * MAGNET_RADIUS)} style={{ ...arrowBtnStyle, fontSize: '10px' }}>Z−</button>
            </div>

            <div style={{ fontSize: '11px', color: '#666', marginBottom: '6px' }}>旋转磁矩:</div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button onClick={() => rotateMoment('x')} style={smallBtnStyle}>绕X</button>
              <button onClick={() => rotateMoment('y')} style={smallBtnStyle}>绕Y</button>
              <button onClick={() => rotateMoment('z')} style={smallBtnStyle}>绕Z</button>
            </div>

            <div style={{ fontSize: '11px', color: '#666', marginTop: '10px', marginBottom: '6px' }}>当前状态:</div>
            {(() => {
              const mag = magnets.find(m => m.id === selectedId);
              if (!mag) return null;
              const fmt = (arr) => arr?.map(x => x?.toExponential?.(2) ?? 'N/A').join(', ') || 'N/A';
              return (
                <>
                  <div style={{ fontSize: '10px', color: '#aaa' }}>位置: {fmt(mag.pos)}</div>
                  <div style={{ fontSize: '10px', color: '#aaa' }}>速度: {fmt(mag.vel)}</div>
                  <div style={{ fontSize: '10px', color: '#aaa' }}>磁矩: {fmt(mag.m)}</div>
                  <div style={{ fontSize: '10px', color: '#aaa' }}>受力: {fmt(mag.f)}</div>
                  <div style={{ fontSize: '10px', color: '#aaa' }}>力矩: {fmt(mag.tau)}</div>
                </>
              );
            })()}
          </div>
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

        {/* Legend */}
        <div style={{
          marginTop: 'auto',
          padding: '10px',
          background: '#0a0a12',
          borderRadius: '6px',
          fontSize: '11px',
          color: '#666'
        }}>
          <div style={{ marginBottom: '4px', color: '#888' }}>图例:</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
            <div style={{ width: '16px', height: '3px', background: '#ffdd00' }} />
            <span>磁矩方向</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
            <div style={{ width: '16px', height: '3px', background: '#00ffff' }} />
            <span>受力方向</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '16px', height: '3px', background: '#ff00ff' }} />
            <span>磁轴力矩方向</span>
          </div>
        </div>
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
