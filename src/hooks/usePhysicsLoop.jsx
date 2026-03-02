import { useCallback, useEffect, useRef } from 'react';
import { modifyMagnet, magnet2Draft } from '../data/magnet-type';
import * as THREE from 'three';

/**
 * @typedef {import('../data/magnet-type').Magnet} Magnet
 * @typedef {import('../physics/world').MagnetPGSWorld} MagnetPGSWorld
 */

const ANIMATE_DT = 32; // ~30fps 渲染帧间隔 (ms)
const BOUND = 0.1;     // 位置边界 (m)

/**
 * 物理循环 hook
 *
 * 职责：
 * 1. 持有 requestAnimationFrame 循环（渲染 + 物理步进）
 * 2. 每帧调用 magnetWorld.step()，将结果写回 setMagnets
 * 3. 通过 stateRef 读取最新参数，避免闭包捕获旧值
 * 4. 暴露 stepDeltaTimeRef（当前帧步长信息）和 totalSimTime
 *
 * @param {React.RefObject} magnetWorldRef,
 * @param {React.RefObject<{
 *     magnets: Magnet[],
 *     isSimulating: boolean,
 *     simSpeed: number,
 *     rotateMoments: boolean,
 *     useGravity: boolean,
 *   }>} stateRef,
 * @param {boolean} ready,
 * @param {React.RefObject<HTMLElement>} containerRef,
 * @param {React.RefObject} sceneRef,
 * @param {React.RefObject} cameraRef,
 * @param {React.RefObject} rendererRef,
 * @param {React.RefObject} controlsRef,
 * @param {React.RefObject} needsSyncRef,
 * @param {React.RefObject<Set<number>>} selectedIdsRef,
 * @param {Function} setMagnets,
 * @param {Function} setEditDraft,
 * @param {Function} setTotalSimTime,
 * @param {(v: number) => string} fmt,
 */
export function usePhysicsLoop(magnetWorldRef,
  stateRef,
  ready,
  containerRef,
  sceneRef,
  cameraRef,
  rendererRef,
  controlsRef,
  needsSyncRef,
  selectedIdsRef,
  setMagnets,
  setEditDraft,
  setTotalSimTime,
  setIsSimulating,
  fmt,
) {
  const animIdRef = useRef(null);
  const stepDeltaTimeRef = useRef('');

  const draftcache = {
    pos: new Map(),
    vel: new Map(),
    moment: new Map(),
    f: new Map(),
    tau: new Map(),
  }

  /** 单步物理积分，由 rAF 循环调用 */
  const physicsStep = useCallback(() => {
    const {
      magnets: currentMagnets,
      isSimulating: running,
      simSpeed: dt,
      useGravity: useG,
    } = stateRef.current;
    /** @type {MagnetPGSWorld} */
    const magnetWorld = magnetWorldRef.current;

    if (!running || !magnetWorld || currentMagnets.length < 2) return;

    const { newMagnets, safedt, reason } = magnetWorld.step(currentMagnets, dt, useG);
    stepDeltaTimeRef.current = `${safedt * 1000}ms (${reason})`;
    setTotalSimTime(prev => prev + safedt);

    const idToIdx = new Map(currentMagnets.map((m, i) => [m.id, i]));
    const bounded = newMagnets.map((mag, i) => {
      /** @type {import('three').Vector3} */
      const newPos = new THREE.Vector3(
        Math.max(Math.min(mag.pos.x, BOUND), -BOUND),
        Math.max(Math.min(mag.pos.y, BOUND), -BOUND),
        Math.max(Math.min(mag.pos.z, BOUND), -BOUND),
      );
      if (newPos.x !== mag.pos.x || newPos.y !== mag.pos.y || newPos.z !== mag.pos.z) {
        throw (`磁铁${mag.id}位置超出边界: ${mag.pos.toArray().map(v => (v * 1000).toFixed(1)).join(',')}mm`);
      }
      return modifyMagnet(currentMagnets[idToIdx.get(mag.id)], { ...mag, pos: newPos })
    });

    setMagnets(bounded);
    needsSyncRef.current = true;

    // 同批次更新 editDraft，避免 magnets useEffect 连锁触发, 仅当选择一个时更新编辑面板
    const selIds = selectedIdsRef.current;
    if (selIds.size === 1) {
      const mag = bounded.find(m => selIds.has(m.id));
      if (mag) {
        setEditDraft(d => d ? {
          ...d,
          ...magnet2Draft(mag),
        } : d);
      }
    }
  }, [
    stateRef, magnetWorldRef, needsSyncRef,
    selectedIdsRef, setMagnets, setEditDraft, setTotalSimTime, fmt,
  ]);

  // rAF 循环：渲染 + 定时触发物理步
  useEffect(() => {
    const container = containerRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const renderer = rendererRef.current;
    const controls = controlsRef.current;
    if (!container || !scene || !camera || !renderer || !ready) return;

    let lastTime = performance.now();

    const animate = (time) => {
      animIdRef.current = requestAnimationFrame(animate);
      if (time - lastTime > ANIMATE_DT) {
        physicsStep();
        lastTime = time;
      }
      controls?.update();
      renderer.render(scene, camera);
      //setIsSimulating(false); // 物理步完成后重置 simulating 状态，等待下一次触发
    };

    animIdRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animIdRef.current);
    };
  }, [ready, physicsStep, containerRef, sceneRef, cameraRef, rendererRef, controlsRef]);

  return { stepDeltaTimeRef };
}
