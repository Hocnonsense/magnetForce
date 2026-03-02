import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { reframeCoordinates as _reframeCoordinates } from '../data/magnet-type';


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
 * @param {string|null} State.activeGroup,
 * @param {Object} State.groups,
 * @param {boolean} State.showVectors,
 * @param {boolean} State.ready,
 * @param {Function} State.getIdsInAffectedGroup,
 * @param {React.RefObject<HTMLElement>} State.keyTrapRef,
 */
export function useThreeScene(
  { containerRef, sceneRef, cameraRef, rendererRef, controlsRef },
  { magnets, selectedIds, activeGroup, groups, showVectors, ready, getIdsInAffectedGroup, keyTrapRef },
  VISUAL_RADIUS, VISUAL_SCALE, RING_PX
) {
  const meshesRef = useRef([]);
  const arrowsRef = useRef([]);
  const forceArrowsRef = useRef([]);
  const torqueArrowsRef = useRef([]);
  const ringsRef = useRef([]);

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
      const origin = mag.pos.clone().multiplyScalar(VISUAL_SCALE);
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
        const dir = mag.moment.clone().normalize();
        arrow.position.copy(origin);
        arrow.setDirection(dir);
        arrow.setLength(VISUAL_RADIUS * 3.6, VISUAL_RADIUS * 0.5, VISUAL_RADIUS * 0.3);
      }
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
    });
  }, [magnets, selectedIds, activeGroup, groups, showVectors, ready]);

  return { meshesRef };
}
