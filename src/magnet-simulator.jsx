import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

// Physical constants for NdFeB N35
const MU_0 = 4 * Math.PI * 1e-7;
const MAGNET_RADIUS = 2.5e-3; // 5mm diameter
const MAGNET_VOLUME = (4 / 3) * Math.PI * Math.pow(MAGNET_RADIUS, 3);
const BR = 1.2; // Tesla
const MAGNETIC_MOMENT = (BR / MU_0) * MAGNET_VOLUME;

// Dipole interaction energy
function calcEnergy(pos1, m1, pos2, m2) {
  const r = [pos2[0] - pos1[0], pos2[1] - pos1[1], pos2[2] - pos1[2]];
  const rMag = Math.sqrt(r[0] ** 2 + r[1] ** 2 + r[2] ** 2);
  if (rMag < 0.01) return 0;

  const rHat = r.map(x => x / rMag);
  const rMeters = rMag * 0.005; // Convert to meters

  const m1DotR = m1[0] * rHat[0] + m1[1] * rHat[1] + m1[2] * rHat[2];
  const m2DotR = m2[0] * rHat[0] + m2[1] * rHat[1] + m2[2] * rHat[2];
  const m1DotM2 = m1[0] * m2[0] + m1[1] * m2[1] + m1[2] * m2[2];

  const prefactor = MU_0 / (4 * Math.PI * Math.pow(rMeters, 3));
  return prefactor * MAGNETIC_MOMENT ** 2 * (m1DotM2 - 3 * m1DotR * m2DotR);
}

function getTotalEnergy(magnets) {
  let total = 0;
  for (let i = 0; i < magnets.length; i++) {
    for (let j = i + 1; j < magnets.length; j++) {
      const e = calcEnergy(magnets[i].pos, magnets[i].m, magnets[j].pos, magnets[j].m);
      if (isFinite(e)) total += e;
    }
  }
  return total;
}

// Presets
const PRESETS = {
  chain: () => Array.from({ length: 5 }, (_, i) => ({
    id: i, pos: [(i - 2) * 1.2, 0, 0], m: [0, 0, 1], color: i % 2 ? 0x4444ff : 0xff4444
  })),
  ring: () => Array.from({ length: 6 }, (_, i) => {
    const a = (2 * Math.PI * i) / 6;
    return {
      id: i, pos: [2 * Math.cos(a), 2 * Math.sin(a), 0],
      m: [Math.cos(a + Math.PI / 2), Math.sin(a + Math.PI / 2), 0],
      color: i % 2 ? 0x4444ff : 0xff4444
    };
  }),
  pair: () => [
    { id: 0, pos: [-0.7, 0, 0], m: [1, 0, 0], color: 0xff4444 },
    { id: 1, pos: [0.7, 0, 0], m: [-1, 0, 0], color: 0x4444ff }
  ]
};

export default function MagnetSimulator() {
  const containerRef = useRef(null);
  const [magnets, setMagnets] = useState(PRESETS.chain());
  const [selectedId, setSelectedId] = useState(null);
  const [energy, setEnergy] = useState(0);
  const [debugInfo, setDebugInfo] = useState('初始化中...');

  // Three.js refs
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const meshesRef = useRef([]);
  const arrowsRef = useRef([]);
  const animIdRef = useRef(null);

  // Initialize Three.js
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      setDebugInfo('错误: 容器不存在');
      return;
    }

    // Get dimensions - use fixed size if flex fails
    let width = container.clientWidth;
    let height = container.clientHeight;
    if (width === 0 || height === 0) {
      width = 800;
      height = 600;
      setDebugInfo(`警告: 容器尺寸为0, 使用默认 ${width}x${height}`);
    } else {
      setDebugInfo(`容器尺寸: ${width}x${height}`);
    }

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer - use basic settings for compatibility
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;
      setDebugInfo(prev => prev + '\nWebGL 渲染器创建成功');
    } catch (e) {
      setDebugInfo('错误: WebGL 创建失败 - ' + e.message);
      return;
    }

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // Grid
    const grid = new THREE.GridHelper(10, 10, 0x444466, 0x333355);
    grid.rotation.x = Math.PI / 2;
    scene.add(grid);

    // Animation
    const animate = () => {
      animIdRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
    setDebugInfo(prev => prev + '\n动画循环启动');

    // Resize handler
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
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update meshes when magnets change
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Remove old
    meshesRef.current.forEach(m => scene.remove(m));
    arrowsRef.current.forEach(a => scene.remove(a));
    meshesRef.current = [];
    arrowsRef.current = [];

    // Create new
    magnets.forEach((mag) => {
      // Use MeshStandardMaterial for better compatibility
      const geo = new THREE.SphereGeometry(0.4, 24, 24);
      const mat = new THREE.MeshStandardMaterial({
        color: mag.color,
        metalness: 0.7,
        roughness: 0.3,
        emissive: mag.color,
        emissiveIntensity: 0.2
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...mag.pos);
      mesh.userData.id = mag.id;
      scene.add(mesh);
      meshesRef.current.push(mesh);

      // Arrow for moment direction
      const dir = new THREE.Vector3(...mag.m).normalize();
      const origin = new THREE.Vector3(...mag.pos);
      const arrow = new THREE.ArrowHelper(dir, origin, 0.7, 0xffff00, 0.15, 0.1);
      scene.add(arrow);
      arrowsRef.current.push(arrow);
    });

    // Calculate energy
    const e = getTotalEnergy(magnets);
    setEnergy(e);
    setDebugInfo(`磁球数量: ${magnets.length}, 能量: ${e.toExponential(2)} J`);
  }, [magnets]);

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

  // Rotate moment of selected magnet
  const rotateMoment = (axis) => {
    if (selectedId === null) return;
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

  // Move selected magnet
  const moveMagnet = (dx, dy) => {
    if (selectedId === null) return;
    setMagnets(prev => prev.map(mag =>
      mag.id === selectedId
        ? { ...mag, pos: [mag.pos[0] + dx, mag.pos[1] + dy, mag.pos[2]] }
        : mag
    ));
  };

  const formatEnergy = (e) => {
    const abs = Math.abs(e);
    if (abs < 1e-9) return `${(e * 1e12).toFixed(1)} pJ`;
    if (abs < 1e-6) return `${(e * 1e9).toFixed(1)} nJ`;
    if (abs < 1e-3) return `${(e * 1e6).toFixed(1)} μJ`;
    return `${(e * 1e3).toFixed(1)} mJ`;
  };

  const isStable = energy < 0;

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100vh',
      background: '#0f0f1a',
      fontFamily: 'system-ui, sans-serif',
      color: '#e0e0e0'
    }}>
      {/* Control Panel */}
      <div style={{
        width: '280px',
        padding: '16px',
        background: '#16162a',
        borderRight: '1px solid #333',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <h1 style={{
          fontSize: '16px',
          margin: 0,
          color: '#fff',
          borderBottom: '1px solid #444',
          paddingBottom: '8px'
        }}>
          🧲 NdFeB 磁力球模拟
        </h1>

        {/* Debug Info */}
        <div style={{
          padding: '8px',
          background: '#1a1a30',
          borderRadius: '4px',
          fontSize: '10px',
          color: '#888',
          whiteSpace: 'pre-wrap',
          fontFamily: 'monospace'
        }}>
          {debugInfo}
        </div>

        {/* Presets */}
        <div>
          <div style={{ fontSize: '11px', color: '#888', marginBottom: '6px' }}>预设结构</div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {Object.entries(PRESETS).map(([name, fn]) => (
              <button
                key={name}
                onClick={() => { setMagnets(fn()); setSelectedId(null); }}
                style={{
                  padding: '6px 12px',
                  background: '#2a2a4a',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  color: '#ccc',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Energy Display */}
        <div style={{
          padding: '12px',
          background: isStable ? '#1a3020' : '#301a20',
          borderRadius: '6px',
          border: `1px solid ${isStable ? '#2a5030' : '#502a30'}`
        }}>
          <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '4px' }}>系统能量</div>
          <div style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: isStable ? '#6f6' : '#f66'
          }}>
            {formatEnergy(energy)}
          </div>
          <div style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
            {isStable ? '✓ 吸引态（稳定）' : '⚠ 排斥态（不稳定）'}
          </div>
        </div>

        {/* Selected Magnet Controls */}
        {selectedId !== null && (
          <div style={{
            padding: '10px',
            background: '#1a1a3a',
            borderRadius: '6px',
            border: '1px solid #444'
          }}>
            <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '8px' }}>
              选中磁球 #{selectedId}
            </div>

            <div style={{ fontSize: '11px', color: '#888', marginBottom: '6px' }}>移动位置:</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', marginBottom: '8px' }}>
              <div />
              <button onClick={() => moveMagnet(0, 0.3)} style={btnStyle}>↑</button>
              <div />
              <button onClick={() => moveMagnet(-0.3, 0)} style={btnStyle}>←</button>
              <div />
              <button onClick={() => moveMagnet(0.3, 0)} style={btnStyle}>→</button>
              <div />
              <button onClick={() => moveMagnet(0, -0.3)} style={btnStyle}>↓</button>
              <div />
            </div>

            <div style={{ fontSize: '11px', color: '#888', marginBottom: '6px' }}>旋转磁矩:</div>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button onClick={() => rotateMoment('x')} style={btnStyle}>绕X</button>
              <button onClick={() => rotateMoment('y')} style={btnStyle}>绕Y</button>
              <button onClick={() => rotateMoment('z')} style={btnStyle}>绕Z</button>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div style={{
          marginTop: 'auto',
          fontSize: '11px',
          color: '#666',
          padding: '8px',
          background: '#111',
          borderRadius: '4px'
        }}>
          <div>• 点击磁球选中</div>
          <div>• 使用方向键移动</div>
          <div>• 黄色箭头 = 磁矩方向</div>
          <div>• 负能量 = 稳定吸引</div>
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

const btnStyle = {
  padding: '6px',
  background: '#2a2a4a',
  border: '1px solid #444',
  borderRadius: '3px',
  color: '#ccc',
  fontSize: '12px',
  cursor: 'pointer'
};
