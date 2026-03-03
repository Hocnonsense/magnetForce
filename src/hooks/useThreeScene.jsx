import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { reframeCoordinates as _reframeCoordinates } from '../data/magnet-type';


/**
 * 屏幕坐标 → 物理坐标（投射到过场景中心且垂直于视线的平面）
 * @param {HTMLElement} container
 * @param {THREE.PerspectiveCamera} camera
 */
export function screenToPhysics(container, camera, clientX, clientY, VISUAL_SCALE) {
  if (!container || !camera) return new THREE.Vector3();
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
  return hit.multiplyScalar(1 / VISUAL_SCALE); // 转换到物理坐标
}

/**
 * @typedef {import('../data/magnet-type').Magnet} Magnet
 */

/**
 * 坐标变换：将磁铁坐标从物理世界转换到 Three.js 场景
 * @param {Object} Canvas
 * @param {React.RefObject<HTMLElement>} Canvas.containerRef,
 * @param {React.RefObject} Canvas.sceneRef,
 * @param {React.RefObject} Canvas.cameraRef,
 * @param {React.RefObject} Canvas.rendererRef,
 * @param {React.RefObject} Canvas.controlsRef,
 * @param {Object} State
 * @param {Magnet[]} State.magnets,
 * @param {Set<number>} State.selectedIds,
 * @param {boolean} State.ready,
 * @param {Function} State.getIdsInActiveGroup,
 * @param {React.RefObject<HTMLElement>} State.keyTrapRef,
 */
export function useThreeScene(
  { containerRef, sceneRef, cameraRef, rendererRef, controlsRef },
  { magnets, selectedIds, ready, getIdsInActiveGroup, keyTrapRef },
  VISUAL_RADIUS, VISUAL_SCALE, RING_PX
) {
  const meshesRef = useRef([]);
  const arrowsRef = useRef([]);
  const forceArrowsRef = useRef([]);
  const torqueArrowsRef = useRef([]);
  const ringsRef = useRef([]);
  const transRingsRef = useRef([]);
  const [showMoments, setShowMoments] = useState(true);
  const [showForceTorques, setShowForceTorques] = useState(true);

  const resetCamera = useCallback(() => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;
    camera.position.set(0, 0, 12);
    camera.up.set(0, 1, 0);
    camera.fov = 50;
    camera.updateProjectionMatrix();
    controls.target.set(0, 0, 0);
    controls.update();
  }, []);

  const setCameraView = useCallback((axis) => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;
    const dist = camera.position.distanceTo(controls.target);
    const pos = controls.target.clone();
    if (axis === 'x') { pos.x += dist; camera.up.set(0, 1, 0); }
    if (axis === 'y') { pos.y += dist; camera.up.set(0, 0, -1); }
    if (axis === 'z') { pos.z += dist; camera.up.set(0, 1, 0); }
    camera.position.copy(pos);
    controls.update();
  }, []);

  const toggleProjection = useCallback(() => {
    const camera = cameraRef.current;
    const renderer = rendererRef.current;
    if (!camera || !renderer) return;
    if (camera.isPerspectiveCamera) {
      const dist = camera.position.distanceTo(controlsRef.current.target);
      const halfH = dist * Math.tan((camera.fov * Math.PI / 180) / 2);
      const aspect = camera.aspect;
      const ortho = new THREE.OrthographicCamera(
        -halfH * aspect, halfH * aspect, halfH, -halfH, 0.01, 1000
      );
      ortho.position.copy(camera.position);
      ortho.quaternion.copy(camera.quaternion);
      cameraRef.current = ortho;
      controlsRef.current.object = ortho;
    } else {
      const halfH = (camera.top - camera.bottom) / 2;
      const dist = camera.position.distanceTo(controlsRef.current.target);
      const fov = 2 * Math.atan(halfH / dist) * 180 / Math.PI;
      const persp = new THREE.PerspectiveCamera(
        fov, camera.right / camera.top, 0.01, 1000
      );
      persp.position.copy(camera.position);
      persp.quaternion.copy(camera.quaternion);
      cameraRef.current = persp;
      controlsRef.current.object = persp;
    }
    controlsRef.current.update();
  }, []);

  // ── Three.js 初始化 ────────────────────────────────────────────────────────
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !ready) return;

    let width = container.clientWidth || 800;
    let height = container.clientHeight || 600;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0a0a15");
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
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

    resetCamera();

    // 视角操作结束后，重新聚焦键盘捕获区（避免旋转视角后丢焦点）
    const onControlsEnd = () => {
      if (keyTrapRef.current && document.activeElement !== keyTrapRef.current) {
        keyTrapRef.current.focus();
      }
    };
    controls.addEventListener('end', onControlsEnd);

    // Lights
    scene.add(new THREE.AmbientLight("#ffffff", 0.5));
    const dirLight = new THREE.DirectionalLight("#ffffff", 0.8);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);
    const backLight = new THREE.DirectionalLight("#4466ff", 0.3);
    backLight.position.set(-5, -5, -5);
    scene.add(backLight);

    // Grid
    const grid = new THREE.GridHelper(16, 16, "#333355", "#222233");
    grid.rotation.x = Math.PI / 2;
    scene.add(grid);

    const onResize = () => {
      const w = container.clientWidth || 800;
      const h = container.clientHeight || 600;
      const cam = cameraRef.current;
      if (!cam) return;
      if (cam.isPerspectiveCamera) {
        cam.aspect = w / h;
      } else {
        // 正交相机：保持垂直范围不变，调整水平范围
        const aspect = w / h;
        const halfH = (cam.top - cam.bottom) / 2;
        cam.left = -halfH * aspect;
        cam.right = halfH * aspect;
      }
      cam.updateProjectionMatrix();
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
    [...meshesRef.current, ...arrowsRef.current, ...forceArrowsRef.current, ...torqueArrowsRef.current, ...ringsRef.current, ...transRingsRef.current]
      .forEach(disposeObj);

    const dummyDir = new THREE.Vector3(0, 1, 0);
    const meshes = [];
    const arrows = [];
    const forceArrows = [];
    const torqueArrows = [];
    const rings = [];
    const transRings = [];

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
        color: "#ffffff",
        depthTest: true,   // ← 必须 true（默认值）
        depthWrite: true,   // ← 必须 true
        transparent: false,
        opacity: 0.85,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.visible = false;
      ring.renderOrder = 999;
      scene.add(ring);
      rings.push(ring);
      // 显示在最上层, 半透明
      const transsRingMat = new THREE.MeshBasicMaterial({
        color: "#ffffff", transparent: true, opacity: 0.35,
        depthTest: false,
      });
      const transRing = new THREE.Mesh(ringGeo, transsRingMat);
      transRing.visible = false;
      transRing.renderOrder = 1000;
      scene.add(transRing);
      transRings.push(transRing);

      if (showMoments) {
        const arrow = new THREE.ArrowHelper(
          dummyDir, new THREE.Vector3(), VISUAL_RADIUS * 3.6,
          "#ffdd00", VISUAL_RADIUS * 0.5, VISUAL_RADIUS * 0.3
        );
        scene.add(arrow);
        arrows.push(arrow);
      } else {
        arrows.push(null);
      }
      if (showForceTorques) {
        const fArrow = new THREE.ArrowHelper(
          dummyDir, new THREE.Vector3(), VISUAL_RADIUS,
          "#00ffff", VISUAL_RADIUS * 0.4, VISUAL_RADIUS * 0.24
        );
        fArrow.visible = false;
        scene.add(fArrow);
        forceArrows.push(fArrow);
        const tArrow = new THREE.ArrowHelper(
          dummyDir, new THREE.Vector3(), VISUAL_RADIUS,
          "#ff00ff", VISUAL_RADIUS * 0.32, VISUAL_RADIUS * 0.2
        );
        tArrow.visible = false;
        scene.add(tArrow);
        torqueArrows.push(tArrow);
      } else {
        forceArrows.push(null);
        torqueArrows.push(null);
      }
    });
    meshesRef.current = meshes;
    arrowsRef.current = arrows;
    forceArrowsRef.current = forceArrows;
    torqueArrowsRef.current = torqueArrows;
    ringsRef.current = rings;
    transRingsRef.current = transRings;
  }, [magnets.length, showMoments, showForceTorques, ready]);
  // 提供与磁铁格式相同数量的 meshes/arrow 对象，避免频繁创建销毁

  // ── 更新位置/外观 ────────────────────────────────────────────────────
  useEffect(() => {
    const camera = cameraRef.current;
    const renderer = rendererRef.current;
    if (!sceneRef.current || !camera || !renderer) return;

    const meshes = meshesRef.current;
    const arrows = arrowsRef.current;
    const forceArrows = forceArrowsRef.current;
    const torqueArrows = torqueArrowsRef.current;

    magnets.forEach((mag, idx) => {
      const origin = mag.pos.clone().multiplyScalar(VISUAL_SCALE);
      // Sphere position & highlight
      const mesh = meshes[idx];
      if (mesh) {
        mesh.position.copy(origin);
        mesh.material.emissiveIntensity = selectedIds.has(mag.id) ? 0.4 : 0.15;
        mesh.material.emissive.set(mag.color);
      }
      if (showMoments) {
        /** @type {THREE.ArrowHelper} Moment arrow */
        const arrow = arrows[idx];
        if (arrow) {
          const dir = mag.moment.clone().normalize();
          arrow.position.copy(origin);
          arrow.setDirection(dir);
          arrow.setLength(VISUAL_RADIUS * 3.6, VISUAL_RADIUS * 0.5, VISUAL_RADIUS * 0.3);
        }
      };
      if (showForceTorques) {
        /** @type {THREE.ArrowHelper} Force arrow */
        const fArrow = forceArrows[idx];
        if (fArrow) {
          const fMag = mag.f ? mag.f.length() : 0;
          if (fMag > 1e-25) {
            fArrow.visible = true;
            const fDir = mag.f.clone().normalize();
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
          const tMag = mag.tau ? mag.tau.length() : 0;
          if (tMag > 1e-25) {
            tArrow.visible = true;
            const tDir = mag.tau.clone().normalize();
            const tLen = VISUAL_RADIUS * Math.min(5, Math.max(0.4, Math.log10(tMag + 1e-10) + 8));
            tArrow.position.copy(origin);
            tArrow.setDirection(tDir);
            tArrow.setLength(tLen, VISUAL_RADIUS * 0.32, VISUAL_RADIUS * 0.2);
          } else {
            tArrow.visible = false;
          }
        }
      }
    });
  }, [magnets, selectedIds, showMoments, showForceTorques, ready]);

  // 在 useThreeScene 中暴露更新函数，或直接在渲染循环里调用
  const magnetsRef = useRef(magnets); magnetsRef.current = magnets;
  const getIdsRef = useRef(getIdsInActiveGroup); getIdsRef.current = getIdsInActiveGroup;
  const updateRings = () => {
    const rings = ringsRef.current;
    const transRings = transRingsRef.current;
    const camera = cameraRef.current;
    const renderer = rendererRef.current;
    if (!camera || !renderer) return;

    const groupIds = getIdsRef.current();  // 始终读最新
    // console.log(`白圈: ${magnets.filter((mag, i) => { return groupIds.has(mag.id); })}`);
    magnetsRef.current.forEach((mag, idx) => {
      const ring = rings[idx], transRing = transRings[idx];
      if (!ring) return;
      const sel = groupIds.has(mag.id);
      ring.visible = sel; transRing.visible = sel;
      const origin = mag.pos.clone().multiplyScalar(VISUAL_SCALE);
      if (!sel) return;
      ring.position.copy(origin); transRing.position.copy(origin);
      ring.lookAt(camera.position); transRing.lookAt(camera.position);
      // 固定像素宽度 → 动态世界宽度
      const dist = camera.position.distanceTo(origin);
      const fov = camera.fov * Math.PI / 180;
      const pxPerUnit = renderer.domElement.height / (2 * dist * Math.tan(fov / 2));
      const thickness = RING_PX / pxPerUnit;
      const majorR = VISUAL_RADIUS + thickness * 1.5;
      const minorR = thickness * 0.5;
      const prev = ring.userData;
      if (Math.abs(majorR - (prev.majorR ?? 0)) > majorR * 0.005 ||
        Math.abs(minorR - (prev.minorR ?? 0)) > minorR * 0.005) {
        ring.geometry.dispose();
        ring.geometry = new THREE.TorusGeometry(majorR, minorR, 8, 64);
        ring.userData.majorR = majorR;
        ring.userData.minorR = minorR;
        transRing.geometry.dispose();
        transRing.geometry = new THREE.TorusGeometry(VISUAL_RADIUS + thickness * 1.2, thickness * 0.2, 8, 64);
      }
    })
  }

  return { meshesRef, showMoments, showForceTorques, updateRings, setShowMoments, setShowForceTorques, resetCamera, setCameraView, toggleProjection };
}
