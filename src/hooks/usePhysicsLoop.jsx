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
 * 物理步进 hook
 *
 * 职责：
 * 1. 每帧调用 magnetWorld.step()，将结果写回 setMagnets
 * 2. 通过 stateRef 读取最新参数，避免闭包捕获旧值
 * 3. 暴露 stepDeltaTimeRef（当前帧步长信息）和 tick() 供渲染循环调用
 *
 * @param {{
 *   magnetWorldRef: React.RefObject<MagnetPGSWorld|null>,
 *   stateRef: React.RefObject<{
 *     magnets: Magnet[],
 *     isSimulating: boolean,
 *     simSpeed: number,
 *     useGravity: boolean,
 *   }>,
 *   needsSyncRef: React.RefObject<boolean>,
 *   selectedIdsRef: React.RefObject<Set<number>>,
 * }} refs
 * @param {{
 *   setMagnets: Function,
 *   setEditDraft: Function,
 *   setTotalSimTime: Function,
 *   setIsSimulating: Function,
 * }} setters
 */
export function usePhysicsStep(
  { magnetWorldRef, stateRef, needsSyncRef, selectedIdsRef },
  { setMagnets, setEditDraft, setTotalSimTime, setIsSimulating },
) {
  const stepDeltaTimeRef = useRef('');

  /** 单步物理积分，由渲染循环定时调用 */
  const tick = useCallback(() => {
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
    // 后续添加: 步进模拟, 每次运行结束后 setIsSimulating(false)，等待下一次触发

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
    selectedIdsRef, setMagnets, setEditDraft, setTotalSimTime,
  ]);

  return { tick, stepDeltaTimeRef };
}

/**
 * 渲染循环 hook
 *
 * 职责：
 * 1. 持有 requestAnimationFrame 循环
 * 2. 每帧更新 OrbitControls、调用 onBeforeRender 回调
 * 3. 按 ANIMATE_DT 间隔触发物理步进（tick）
 * 4. 渲染 Three.js 场景
 *
 * @param {{
 *   containerRef: React.RefObject<HTMLElement>,
 *   sceneRef: React.RefObject,
 *   cameraRef: React.RefObject,
 *   rendererRef: React.RefObject,
 *   controlsRef: React.RefObject,
 * }} canvas
 * @param {{
 *   ready: boolean,
 *   tick: () => void,
 *   onBeforeRender: (() => void) | null,
 * }} options
 */
export function useRenderLoop(
  { containerRef, sceneRef, cameraRef, rendererRef, controlsRef },
  { ready, tick, onBeforeRender },
) {
  const animIdRef = useRef(null);

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
        tick();
        lastTime = time;
      }
      controls?.update();
      onBeforeRender?.();
      renderer.render(scene, cameraRef.current);
    };

    animIdRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animIdRef.current);
    };
  }, [ready, tick, containerRef, sceneRef, cameraRef, rendererRef, controlsRef, onBeforeRender]);
}
