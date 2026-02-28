import { useCallback, useEffect, useRef } from 'react';
import { modifyMagnet } from '../data/magnet-type';
import { assertVec3 } from '../utils/three';

/**
 * @typedef {import('../data/magnet-type').Magnet} Magnet
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
  fmt,
) {
  const animIdRef = useRef(null);
  const stepDeltaTimeRef = useRef('');

  /** 单步物理积分，由 rAF 循环调用 */
  const physicsStep = useCallback(() => {
    const {
      magnets: currentMagnets,
      isSimulating: running,
      simSpeed: dt,
      useGravity: useG,
    } = stateRef.current;
    const magnetWorld = magnetWorldRef.current;

    if (!running || !magnetWorld || currentMagnets.length < 2) return;

    const { newMagnets, safedt, reason } = magnetWorld.step(currentMagnets, dt, useG);
    stepDeltaTimeRef.current = `${safedt * 1000}ms (${reason})`;
    setTotalSimTime(prev => prev + safedt);

    const idToIdx = new Map(currentMagnets.map((m, i) => [m.id, i]));
    const bounded = newMagnets.map((mag, i) =>
      modifyMagnet(currentMagnets[idToIdx.get(mag.id)], {
        ...mag,
        pos: assertVec3(mag.pos.map(p => {
          if (Math.abs(p) > BOUND)
            throw new Error(`球${i}超出边界: ${mag.pos.map(v => (v * 1000).toFixed(1)).join(',')}mm`);
          return Math.max(Math.min(p, BOUND), -BOUND);
        }))
      })
    );

    setMagnets(bounded);
    needsSyncRef.current = true;

    // 同批次更新 editDraft，避免 magnets useEffect 连锁触发, 仅当选择一个时更新编辑面板
    const selIds = selectedIdsRef.current;
    if (selIds.size === 1) {
      const mag = bounded.find(m => selIds.has(m.id));
      if (mag) {
        setEditDraft(d => d ? {
          ...d,
          m_pos: mag.pos.map(p => p * 1000).map(fmt),
          m_vel: (mag.vel ?? [0, 0, 0]).map(v => v * 1000).map(fmt),
          moment: mag.moment.map(fmt),
          f: (mag.f ?? [0, 0, 0]).map(fmt),
          tau: (mag.tau ?? [0, 0, 0]).map(fmt),
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
    };

    animIdRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animIdRef.current);
    };
  }, [ready, physicsStep, containerRef, sceneRef, cameraRef, rendererRef, controlsRef]);

  return { stepDeltaTimeRef };
}
