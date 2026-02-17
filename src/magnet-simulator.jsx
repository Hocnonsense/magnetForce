import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import * as Three from './three';
import BuckyBall from './magnet-ball';
import RAPIER from '@dimforge/rapier3d-compat';

// Physical constants for NdFeB N35
const MAGNET_RADIUS = 0.0025; // 5mm diameter
const BR = 1.2; // Tesla
const MASS = 0.5e-3; // 0.5g
const BUCKYBALL = new BuckyBall(MAGNET_RADIUS, BR, MASS, 200);

// 外壳厚度（镀层 + 弹性形变）
const SHELL_THICKNESS = MAGNET_RADIUS * 0.01;  // 1% ≈ 25μm

// Simulation constants
const VISUAL_SCALE = 100;
const VISUAL_RADIUS = MAGNET_RADIUS * VISUAL_SCALE;
const BOUND = 0.02;

// 接触状态
const CONTACT_STATE = {
  NONE: 'none',
  SHELL: 'shell',
  HARD: 'hard'
};

// Presets
const PRESETS = {
  pair: () => [
    { id: 0, pos: [-0.0025, 0, 0], vel: [0, 0, 0], omega: [0, 0, 0], m: [1, 0, 0], color: 0xff4444 },
    { id: 1, pos: [0.0025, 0, 0], vel: [0, 0, 0], omega: [0, 0, 0], m: [0, 1, 0], color: 0x4444ff }
  ],
  chain: () => Array.from({ length: 5 }, (_, i) => ({
    id: i,
    pos: [(i - 2) * MAGNET_RADIUS * 2 * 1.1, 0, 0],
    vel: [0, 0, 0],
    omega: [0, 0, 0],
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
      omega: [0, 0, 0],
      m: [Math.cos(a + Math.PI / 2), Math.sin(a + Math.PI / 2), 0],
      color: i % 2 ? 0x4444ff : 0xff4444
    };
  }),
  random: () => Array.from({ length: 8 }, (_, i) => ({
    id: i,
    pos: [
      (Math.random() - 0.5) * MAGNET_RADIUS * 2 * 10,
      (Math.random() - 0.5) * MAGNET_RADIUS * 2 * 10,
      (Math.random() - 0.5) * MAGNET_RADIUS * 2 * 4
    ],
    vel: [0, 0, 0],
    omega: [0, 0, 0],
    m: Three.Normalize([Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]),
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
      omega: [0, 0, 0],
      m: [0, 0, i < 4 ? 1 : -1],
      color: i < 4 ? 0xff4444 : 0x4444ff
    }));
  }
};

/**
 * Rapier 物理世界管理器
 */
class RapierWorld {
  constructor(rapier) {
    this.RAPIER = rapier;
    this.world = new rapier.World({ x: 0, y: 0, z: 0 });
    this.bodies = new Map();
    this.moments = new Map();
    this.contactStates = new Map();
    this.world.integrationParameters.numSolverIterations = 16;
  }

  syncToRapier(magnets) {
    // [TODO] 优化：增量更新而不是完全重建
    for (const [id, body] of this.bodies) {
      this.world.removeRigidBody(body);
      this.bodies.delete(id);
      this.moments.delete(id);
    }
    for (const mag of magnets) {
      let body = this.bodies.get(mag.id);
      const rigidBodyDesc = this.RAPIER.RigidBodyDesc.dynamic()
        .setTranslation(mag.pos[0], mag.pos[1], mag.pos[2])
        .setLinearDamping(0.3)
        .setAngularDamping(0.3);

      body = this.world.createRigidBody(rigidBodyDesc);
      body.setLinvel({ x: mag.vel[0], y: mag.vel[1], z: mag.vel[2] }, true);
      body.setAngvel({ x: mag.omega[0], y: mag.omega[1], z: mag.omega[2] }, true);

      const colliderDesc = this.RAPIER.ColliderDesc.ball(MAGNET_RADIUS)
        .setMass(MASS)
        .setRestitution(0.0)
        .setFriction(0.0);

      this.world.createCollider(colliderDesc, body);
      this.bodies.set(mag.id, body);

      this.moments.set(mag.id, [...mag.m]);
    }
  }

  /** 计算磁力（用内部存储的位置和磁矩） */
  calcForces(magnets) {
    const n = magnets.length;
    const forces = magnets.map(() => [0, 0, 0]);
    const torques = magnets.map(() => [0, 0, 0]);

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const body1 = this.bodies.get(magnets[i].id);
        const body2 = this.bodies.get(magnets[j].id);
        if (!body1 || !body2) continue;

        const p1 = body1.translation();
        const p2 = body2.translation();
        const m1 = this.moments.get(magnets[i].id);
        const m2 = this.moments.get(magnets[j].id);

        const ft = BUCKYBALL.calcForceAndTorque(
          [p2.x - p1.x, p2.y - p1.y, p2.z - p1.z], m1, m2
        )
        ft.force1[0] + 1

        forces[i] = Three.Add(forces[i], ft.force1);
        forces[j] = Three.Add(forces[j], ft.force2);
        torques[i] = Three.Add(torques[i], ft.torque1);
        torques[j] = Three.Add(torques[j], ft.torque2);
      }
    }
    return { forces, torques };
  }

  _contactKey(i, j) {
    return i < j ? `${i},${j}` : `${j},${i}`;
  }

  _getContactState(dist) {
    const CONTACT_DIST = MAGNET_RADIUS * 2;
    if (dist <= CONTACT_DIST) {
      return CONTACT_STATE.HARD;
    } else if (dist <= CONTACT_DIST + SHELL_THICKNESS) {
      return CONTACT_STATE.SHELL;
    } else {
      return CONTACT_STATE.NONE;
    }
  }

  _reportStateChange(idI, idJ, oldState, newState, dist) {
    const penetration = MAGNET_RADIUS * 2 - dist;
    const distStr = (dist * 1000).toFixed(4);
    const penStr = (penetration * 1e6).toFixed(2);

    const stateEmoji = {
      [CONTACT_STATE.NONE]: '⚪',
      [CONTACT_STATE.SHELL]: '🟡',
      [CONTACT_STATE.HARD]: '🔴'
    };

    console.log(
      `%c${stateEmoji[oldState]} → ${stateEmoji[newState]} ` +
      `球${idI}-球${idJ}: ${oldState} → ${newState} ` +
      `(dist=${distStr}mm, penetration=${penStr}μm)`,
      newState === CONTACT_STATE.HARD ? 'color: red; font-weight: bold' :
        newState === CONTACT_STATE.SHELL ? 'color: orange' : 'color: green'
    );
  }

  getContacts(magnets) {
    const CONTACT_DIST = MAGNET_RADIUS * 2;
    const contacts = [];
    const n = magnets.length;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const body1 = this.bodies.get(magnets[i].id);
        const body2 = this.bodies.get(magnets[j].id);
        if (!body1 || !body2) continue;

        const p1 = body1.translation();
        const p2 = body2.translation();
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dz = p2.z - p1.z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        const key = this._contactKey(magnets[i].id, magnets[j].id);
        const newState = this._getContactState(dist);
        const oldState = this.contactStates.get(key) || CONTACT_STATE.NONE;

        if (newState !== oldState) {
          this._reportStateChange(magnets[i].id, magnets[j].id, oldState, newState, dist);
          this.contactStates.set(key, newState);
        }

        if (dist <= CONTACT_DIST + SHELL_THICKNESS && dist > 1e-10) {
          contacts.push({
            i, j,
            normal: [dx / dist, dy / dist, dz / dist],
            dist,
            penetration: CONTACT_DIST - dist
          });
        }
      }
    }

    return contacts;
  }

  computeConstrainedForces(magnets, forces, contacts) {
    const constrained = forces.map(f => [...f]);

    for (const { i, j, normal } of contacts) {
      const f1n = Three.Dot(forces[i], normal);
      const f2n = Three.Dot(forces[j], normal);
      const lambda = (f1n - f2n) / 2;

      if (lambda > 0) {
        constrained[i] = Three.Add(constrained[i], Three.MultiplyScalar(normal, lambda));
        constrained[j] = Three.Add(constrained[j], Three.MultiplyScalar(normal, -lambda));
      }
    }

    return constrained;
  }

  applyForces(magnets, forces) {
    for (let i = 0; i < magnets.length; i++) {
      const body = this.bodies.get(magnets[i].id);
      if (body) {
        body.resetForces(true);
        body.addForce({ x: forces[i][0], y: forces[i][1], z: forces[i][2] }, true);
      }
    }
  }

  applyShellAbsorption(magnets, contacts) {
    for (const { i, j, normal, penetration } of contacts) {
      const body1 = this.bodies.get(magnets[i].id);
      const body2 = this.bodies.get(magnets[j].id);
      if (!body1 || !body2) continue;

      const v1 = body1.linvel();
      const v2 = body2.linvel();

      const v1n = v1.x * normal[0] + v1.y * normal[1] + v1.z * normal[2];
      const v2n = v2.x * normal[0] + v2.y * normal[1] + v2.z * normal[2];
      const relVn = v2n - v1n;

      // 在外壳范围内清零法向相对速度
      if (Math.abs(relVn) > 1e-12) {
        const avgVn = (v1n + v2n) / 2;

        body1.setLinvel({
          x: v1.x + (avgVn - v1n) * normal[0],
          y: v1.y + (avgVn - v1n) * normal[1],
          z: v1.z + (avgVn - v1n) * normal[2]
        }, true);

        body2.setLinvel({
          x: v2.x + (avgVn - v2n) * normal[0],
          y: v2.y + (avgVn - v2n) * normal[1],
          z: v2.z + (avgVn - v2n) * normal[2]
        }, true);
      }

      // 位置修正
      if (penetration > 0) {
        const corr = penetration / 2 + 1e-9;
        const p1 = body1.translation();
        const p2 = body2.translation();

        body1.setTranslation({
          x: p1.x - corr * normal[0],
          y: p1.y - corr * normal[1],
          z: p1.z - corr * normal[2]
        }, true);

        body2.setTranslation({
          x: p2.x + corr * normal[0],
          y: p2.y + corr * normal[1],
          z: p2.z + corr * normal[2]
        }, true);
      }
    }
  }

  step(magnets, dt, rotateMoments) {
    // 1. 计算磁力
    const { forces, torques } = this.calcForces(magnets);
    // 2. 接触检测
    const contacts = this.getContacts(magnets);
    // 3. 约束力
    const constrainedForces = this.computeConstrainedForces(magnets, forces, contacts);
    // 4. 施加力
    this.applyForces(magnets, constrainedForces);
    // 5. 吸能（在积分前）
    this.applyShellAbsorption(magnets, contacts);
    // 6. Rapier 积分
    this.world.integrationParameters.dt = dt;
    this.world.step();
    // 7. 再次吸能和修正（积分后可能产生新穿透）
    const contactsAfter = this.getContacts(magnets);
    this.applyShellAbsorption(magnets, contactsAfter);
    // 8. 更新磁矩
    if (rotateMoments) {
      for (const mag of magnets) {
        const m = this.moments.get(mag.id);
        const body = this.bodies.get(mag.id);
        if (!body || !m) continue;

        const omega = body.angvel();
        const omegaArr = [omega.x, omega.y, omega.z];
        const idx = magnets.findIndex(x => x.id === mag.id);

        const result = BUCKYBALL.applyTorque(m, omegaArr, torques[idx], dt);
        this.moments.set(mag.id, result.m);
      }
    }
    // 9. 返回状态
    return this.readFromRapier(magnets, forces, torques);
  }

  readFromRapier(magnets, forces, torques) {
    return magnets.map((mag, i) => {
      const body = this.bodies.get(mag.id);
      if (!body) return mag;

      const pos = body.translation();
      const vel = body.linvel();
      const omega = body.angvel();
      const m = this.moments.get(mag.id);

      return {
        ...mag,
        pos: [pos.x, pos.y, pos.z],
        vel: [vel.x, vel.y, vel.z],
        omega: [omega.x, omega.y, omega.z],
        m: m || mag.m,
        f: forces?.[i] || [0, 0, 0],
        tau: torques?.[i] || [0, 0, 0]
      };
    });
  }

  reset() {
    for (const body of this.bodies.values()) {
      this.world.removeRigidBody(body);
    }
    this.bodies.clear();
    this.moments.clear();
    this.contactStates.clear();
  }
}

export default function MagnetSimulator() {
  // const res = new BuckyBall(MAGNET_RADIUS, BR, 200).calcForceAndTorque(
  //   [-0.0025, 0, 0], [1, 0, 0], [0.0025, 0, 0], [1, 0, 0]
  // )
  // console.log('Force and Torque between two magnets:', res);

  const containerRef = useRef(null);
  const [magnets, setMagnets] = useState(PRESETS.pair());
  const [selectedId, setSelectedId] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simSpeed, setSimSpeed] = useState(0.00002);
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

  // Rapier refs
  const [ready, setReady] = useState(false);
  const rapierWorldRef = useRef(null);
  const needsSyncRef = useRef(true);

  // 状态 ref（每次渲染立即更新）
  const stateRef = useRef({ magnets, isSimulating, simSpeed, rotateMoments });
  stateRef.current = { magnets, isSimulating, simSpeed, rotateMoments };

  // 初始化 Rapier
  useEffect(() => {
    let mounted = true;
    RAPIER.init().then(() => {
      if (!mounted) return;
      console.log('✅ Rapier3D initialized');
      rapierWorldRef.current = new RapierWorld(RAPIER);
      setReady(true);
    });
    return () => { mounted = false; };
  }, []);

  // 物理步进
  const physicsStep = useCallback(() => {
    const { magnets: currentMagnets, isSimulating: running, simSpeed: dt, rotateMoments: rotate } = stateRef.current;
    const rapierWorld = rapierWorldRef.current;

    if (!running || !rapierWorld || currentMagnets.length < 2) return;

    // 同步到 Rapier（仅在需要时）
    if (needsSyncRef.current) {
      rapierWorld.syncToRapier(currentMagnets);
      console.log('🔄 syncing to Rapier');
      needsSyncRef.current = false;
    }

    if (rapierWorld.bodies.size < 2) return;
    const newMagnets = rapierWorld.step(currentMagnets, dt, rotate); // 物理步进
    const bounded = newMagnets.map(mag => ({ // 边界约束
      ...mag,
      pos: mag.pos.map(p => Math.max(-BOUND, Math.min(BOUND, p)))
    }));
    setMagnets(bounded);
  }, []);

  // Initialize Three.js
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
          const fMag = Three.Length(f);

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
            const tMag = Three.Length(t);
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
    if (rapierWorldRef.current) {
      rapierWorldRef.current.reset();
    }
    needsSyncRef.current = true;
    setMagnets(fn());
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
