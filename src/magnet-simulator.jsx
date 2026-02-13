import { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import BuckyBall, { ThreeAdd, ThreeLength, ThreeNormalize } from './magnet-ball';

// Physical constants for NdFeB N35
const MAGNET_RADIUS = 0.0025; // 5mm diameter
const BR = 1.2; // Tesla
const BUCKYBALL = new BuckyBall(MAGNET_RADIUS, BR, 50);

// Simulation constants
const VISUAL_SCALE = 100; // Scale factor for rendering positions
const COLLISION_DIST = MAGNET_RADIUS * 2 * 1.00; // Minimum distance between centers
const VISUAL_RADIUS = MAGNET_RADIUS * VISUAL_SCALE;
const MASS = 0.5e-6; // ~0.5g per magnet ball
const DAMPING = 0.3; // Velocity damping per frame

// Calculate net forces and torques on all magnets
function calcAllForcesAndTorques(magnets) {
  const n = magnets.length;
  const forces = magnets.map(() => [0, 0, 0]);
  const torques = magnets.map(() => [0, 0, 0]);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {  // j > i，每对只算一次
      const ft = BUCKYBALL.calcForceAndTorque(
        magnets[i].pos, magnets[i].m,
        magnets[j].pos, magnets[j].m
      );

      forces[i] = ThreeAdd(forces[i], ft.force1);
      forces[j] = ThreeAdd(forces[j], ft.force2);
      torques[i] = ThreeAdd(torques[i], ft.torque1);
      torques[j] = ThreeAdd(torques[j], ft.torque2);
    }
  }
  return { forces, torques };
}

// Handle collisions - prevent overlap and apply repulsion
function resolveCollisions(magnets) {
  const n = magnets.length;
  const newMagnets = magnets.map(m => ({
    ...m,
    pos: [...m.pos],
    vel: [...m.vel]
  }));


  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dx = newMagnets[j].pos[0] - newMagnets[i].pos[0];
      const dy = newMagnets[j].pos[1] - newMagnets[i].pos[1];
      const dz = newMagnets[j].pos[2] - newMagnets[i].pos[2];
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist < COLLISION_DIST) {
        console.warn(`Collision detected between magnet ${newMagnets[i].id} and ${newMagnets[j].id}`);
        // Normalize direction
        const nx = dx / dist;
        const ny = dy / dist;
        const nz = dz / dist;

        // Separation needed
        const overlap = COLLISION_DIST - dist;
        const separation = overlap / 2 + 0.00;

        // Push apart
        newMagnets[i].pos[0] -= nx * separation;
        newMagnets[i].pos[1] -= ny * separation;
        newMagnets[i].pos[2] -= nz * separation;
        newMagnets[j].pos[0] += nx * separation;
        newMagnets[j].pos[1] += ny * separation;
        newMagnets[j].pos[2] += nz * separation;

        // Elastic collision response
        const relVelX = newMagnets[i].vel[0] - newMagnets[j].vel[0];
        const relVelY = newMagnets[i].vel[1] - newMagnets[j].vel[1];
        const relVelZ = newMagnets[i].vel[2] - newMagnets[j].vel[2];
        const relVelNormal = relVelX * nx + relVelY * ny + relVelZ * nz;

        if (relVelNormal > 0) {
          const restitution = 0.3; // Inelastic collision
          const impulse = relVelNormal * (1 + restitution) / 2;

          newMagnets[i].vel[0] -= impulse * nx;
          newMagnets[i].vel[1] -= impulse * ny;
          newMagnets[i].vel[2] -= impulse * nz;
          newMagnets[j].vel[0] += impulse * nx;
          newMagnets[j].vel[1] += impulse * ny;
          newMagnets[j].vel[2] += impulse * nz;
        }
      }
    }
  }
  return newMagnets;
}

// Rotate moment vector by torque
function applyTorque(m, torque, speed, angularDamping) {
  const torqueMag = ThreeLength(torque);
  if (torqueMag < 1e-20) return m;

  // Simplified rotation: rotate m towards the torque direction
  const angle = torqueMag * speed * angularDamping; // Scale factor for visible rotation
  // Cross product gives rotation axis
  const axis = [torque[0] / torqueMag, torque[1] / torqueMag, torque[2] / torqueMag];

  // Rodrigues rotation formula
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);
  const dot = m[0] * axis[0] + m[1] * axis[1] + m[2] * axis[2];
  const cross = [
    axis[1] * m[2] - axis[2] * m[1],
    axis[2] * m[0] - axis[0] * m[2],
    axis[0] * m[1] - axis[1] * m[0]
  ];

  const newM = [
    m[0] * cosA + cross[0] * sinA + axis[0] * dot * (1 - cosA),
    m[1] * cosA + cross[1] * sinA + axis[1] * dot * (1 - cosA),
    m[2] * cosA + cross[2] * sinA + axis[2] * dot * (1 - cosA)
  ];

  // Normalize
  const len = Math.sqrt(newM[0] ** 2 + newM[1] ** 2 + newM[2] ** 2);
  return [newM[0] / len, newM[1] / len, newM[2] / len];
}

// Presets
const PRESETS = {
  chain: () => Array.from({ length: 5 }, (_, i) => ({
    id: i,
    pos: [(i - 2) * MAGNET_RADIUS * 2 * 1.1, 0, 0],
    vel: [0, 0, 0],
    m: [1, 0, 0],
    color: i % 2 ? 0x4444ff : 0xff4444
  })),
  ring: () => Array.from({ length: 6 }, (_, i) => {
    const a = (2 * Math.PI * i) / 6;
    const ringRadius = MAGNET_RADIUS * 2 * 2;  // 10mm
    return {
      id: i,
      pos: [ringRadius * Math.cos(a), ringRadius * Math.sin(a), 0],
      vel: [0, 0, 0],
      m: [Math.cos(a + Math.PI / 2), Math.sin(a + Math.PI / 2), 0],
      color: i % 2 ? 0x4444ff : 0xff4444
    };
  }),
  pair: () => [
    { id: 0, pos: [-MAGNET_RADIUS * 2 * 0.6, 0, 0], vel: [0, 0, 0], m: [1, 0, 0], color: 0xff4444 },
    { id: 1, pos: [MAGNET_RADIUS * 2 * 0.6, 0, 0], vel: [0, 0, 0], m: [1, 0, 0], color: 0x4444ff }
  ],
  random: () => Array.from({ length: 8 }, (_, i) => ({
    id: i,
    pos: [
      (Math.random() - 0.5) * MAGNET_RADIUS * 2 * 10,
      (Math.random() - 0.5) * MAGNET_RADIUS * 2 * 10,
      (Math.random() - 0.5) * MAGNET_RADIUS * 2 * 4
    ],
    vel: [0, 0, 0],
    m: ThreeNormalize([Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]),
    color: i % 2 ? 0x4444ff : 0xff4444
  })),
  cube: () => {
    const halfSize = MAGNET_RADIUS * 2 * 1.2;
    const positions = [
      [-1, -1, -1], [1, -1, -1], [-1, 1, -1], [1, 1, -1],
      [-1, -1, 1], [1, -1, 1], [-1, 1, 1], [1, 1, 1]
    ];
    return positions.map((p, i) => ({
      id: i,
      pos: p.map(x => x * halfSize),
      vel: [0, 0, 0],
      m: [0, 0, i < 4 ? 1 : -1],
      color: i < 4 ? 0xff4444 : 0x4444ff
    }));
  }
};

export default function MagnetSimulator() {
  const containerRef = useRef(null);
  const [magnets, setMagnets] = useState(PRESETS.chain());
  const [selectedId, setSelectedId] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simSpeed, setSimSpeed] = useState(0.0001);
  const [rotateMoments, setRotateMoments] = useState(true);
  const [showVectors, setShowVectors] = useState(true);

  // Three.js refs
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const meshesRef = useRef([]);
  const arrowsRef = useRef([]);
  const forceArrowsRef = useRef([]);
  const torqueArrowsRef = useRef([]);
  const animIdRef = useRef(null);

  // Simulation ref to access current state in animation loop
  const simRef = useRef({ magnets, isSimulating, simSpeed, rotateMoments });

  useEffect(() => {
    simRef.current = { magnets, isSimulating, simSpeed, rotateMoments };
  }, [magnets, isSimulating, simSpeed, rotateMoments]);

  // Physics simulation step
  const physicsStep = useCallback(() => {
    const { magnets: currentMagnets, isSimulating: running, simSpeed: speed, rotateMoments: rotate } = simRef.current;
    if (!running || currentMagnets.length < 2) return;

    const { forces, torques } = calcAllForcesAndTorques(currentMagnets);

    // Update velocities and positions
    let newMagnets = currentMagnets.map((mag, i) => {
      const f = forces[i];
      const t = torques[i];

      // F = ma, a = F/m
      const ax = (f[0]) / MASS;
      const ay = (f[1]) / MASS;
      const az = (f[2]) / MASS;

      // Update velocity with damping
      const newVel = [
        (mag.vel[0] + ax * speed) * DAMPING,
        (mag.vel[1] + ay * speed) * DAMPING,
        (mag.vel[2] + az * speed) * DAMPING
      ];

      console.log(`Magnet ${mag.id}  vel: [${newVel[0]}, ${newVel[1]}, ${newVel[2]}] m/s,  delta: [${newVel[0] * speed}, ${newVel[1] * speed}, ${newVel[2] * speed}] m/s`);
      // Update position
      const newPos = [
        mag.pos[0] + newVel[0] * speed,
        mag.pos[1] + newVel[1] * speed,
        mag.pos[2] + newVel[2] * speed
      ];

      // Update moment direction if enabled
      const newM = rotate ? applyTorque(mag.m, t, speed, 1e10 * 0.5) : mag.m;

      return { ...mag, pos: newPos, vel: newVel, m: newM };
    });

    // Resolve collisions
    newMagnets = resolveCollisions(newMagnets);
    // Boundary constraints
    newMagnets = newMagnets.map(mag => ({
      ...mag,
      pos: [
        Math.max(-8, Math.min(8, mag.pos[0])),
        Math.max(-6, Math.min(6, mag.pos[1])),
        Math.max(-4, Math.min(4, mag.pos[2]))
      ]
    }));
    setMagnets(newMagnets);
  }, []);

  // Initialize Three.js
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

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
        physicsStep();
        lastTime = time;
      }

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
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [physicsStep]);

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

    // Calculate forces and torques for visualization
    const { forces, torques } = magnets.length > 1
      ? calcAllForcesAndTorques(magnets)
      : { forces: [], torques: [] };

    magnets.forEach((mag, idx) => {
      // Sphere
      const geo = new THREE.SphereGeometry(MAGNET_RADIUS * VISUAL_SCALE, 32, 32);
      const mat = new THREE.MeshStandardMaterial({
        color: mag.color,
        metalness: 0.8,
        roughness: 0.2,
        emissive: mag.color,
        emissiveIntensity: selectedId === mag.id ? 0.4 : 0.15
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(...mag.pos.map(p => p * VISUAL_SCALE));
      mesh.userData.id = mag.id;
      scene.add(mesh);
      meshesRef.current.push(mesh);

      if (showVectors) {
        // Moment arrow - 长度约为直径的1.2倍
        const arrowLength = VISUAL_RADIUS * 2.4;  // = 0.6
        const arrowHeadLength = VISUAL_RADIUS * 0.5;
        const arrowHeadWidth = VISUAL_RADIUS * 0.3;

        const dir = new THREE.Vector3(...mag.m).normalize();
        const origin = new THREE.Vector3(...mag.pos.map(p => p * VISUAL_SCALE));
        const arrow = new THREE.ArrowHelper(
          dir, origin,
          arrowLength,
          0xffdd00,
          arrowHeadLength,
          arrowHeadWidth
        );
        scene.add(arrow);
        arrowsRef.current.push(arrow);

        if (isSimulating) {
          // Force arrow
          if (forces[idx]) {
            const f = forces[idx];
            const fMag = ThreeLength(f);

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
          }

          // Torque arrow
          if (torques[idx]) {
            const t = torques[idx];
            const tMag = ThreeLength(t);

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

  }, [magnets, selectedId, showVectors, isSimulating]);

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
    setMagnets(prev => prev.map(mag =>
      mag.id === selectedId
        ? { ...mag, pos: [mag.pos[0] + dx, mag.pos[1] + dy, mag.pos[2] + dz], vel: [0, 0, 0] }
        : mag
    ));
  };

  const addMagnet = () => {
    const newId = Math.max(...magnets.map(m => m.id), -1) + 1;
    setMagnets(prev => [...prev, {
      id: newId,
      pos: [(Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4, 0],
      vel: [0, 0, 0],
      m: [0, 0, 1],
      color: newId % 2 ? 0x4444ff : 0xff4444
    }]);
  };

  const removeMagnet = () => {
    if (selectedId === null) return;
    setMagnets(prev => prev.filter(m => m.id !== selectedId));
    setSelectedId(null);
  };

  const resetVelocities = () => {
    setMagnets(prev => prev.map(m => ({ ...m, vel: [0, 0, 0] })));
  };

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
            onClick={() => setIsSimulating(!isSimulating)}
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
            <button onClick={() => setMagnets(prev => prev.map(m => ({
              ...m,
              pos: m.pos.map(p => p + (Math.random() - 0.5) * 0.3 * MAGNET_RADIUS),
              vel: [0, 0, 0]
            })))} style={smallBtnStyle}>
              扰动位置
            </button>
          </div>

          <div style={{ marginTop: '10px' }}>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>
              模拟速度: {simSpeed}×
            </div>
            <input
              type="range"
              min="0.0000001"
              max="0.00001"
              step="0.0000001"
              value={simSpeed}
              onChange={e => setSimSpeed(parseFloat(e.target.value))}
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
                onClick={() => { setMagnets(fn()); setSelectedId(null); setIsSimulating(false); }}
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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
