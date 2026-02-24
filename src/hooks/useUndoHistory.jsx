import { useCallback, useEffect, useRef } from 'react';

/**
 * @typedef {import('../data/magnet-type').Magnet} Magnet
 */

/**
 * 磁球状态撤销历史栈
 *
 * 设计：
 * - undoStackRef 存储快照数组，oldest → newest
 * - histIdxRef = -1 表示处于 live 状态（未在导航历史）
 * - ArrowUp/ArrowDown 在历史中导航；第一次 Up 时将当前 live 状态作为草稿压入栈顶
 * - ArrowDown 回到最新时弹出草稿，恢复 live 状态
 *
 * @param {{
 *   getMagnets: () => Magnet[],
 *   setMagnets: (m: Magnet[]) => void,
 *   selectedId: number | null,
 *   onApplySnap: (snap: Magnet[]) => void,
 * }} options
 */
export function useUndoHistory({ getMagnets, setMagnets, selectedId, onApplySnap }) {
  const undoStackRef = useRef([]);   // Magnet[][] 快照栈
  const histIdxRef = useRef(-1);    // -1 = live

  /** 深拷贝一组磁球 */
  const cloneMagnets = (mags) =>
    mags.map(m => ({ ...m, pos: [...m.pos], vel: [...m.vel], moment: [...m.moment] }));

  /**
   * 将一个快照推入撤销栈（自动去重、限制 100 条）
   * @param {Magnet[]} snapshot
   */
  const push = useCallback((snapshot) => {
    const stack = undoStackRef.current;
    // 去重：与栈顶完全相同则跳过
    if (stack.length > 0) {
      const top = stack[stack.length - 1];
      if (isSameSnapshot(top, snapshot)) return;
    }
    stack.push(cloneMagnets(snapshot));
    if (stack.length > 100) stack.shift();
    histIdxRef.current = -1; // push 后回到 live
  }, []);

  /** 重置历史（切换 preset 时调用） */
  const reset = useCallback(() => {
    undoStackRef.current = [];
    histIdxRef.current = -1;
  }, []);

  // ArrowUp / ArrowDown 键盘导航
  useEffect(() => {
    const handler = (e) => {
      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
      e.preventDefault();
      const stack = undoStackRef.current;
      if (stack.length === 0) return;

      if (e.key === 'ArrowUp') {
        if (histIdxRef.current === -1) {
          // 保存当前 live 状态作为草稿压入栈顶
          stack.push(cloneMagnets(getMagnets()));
          histIdxRef.current = stack.length - 2;
        } else if (histIdxRef.current > 0) {
          histIdxRef.current--;
        } else {
          return; // 已到最旧
        }
        onApplySnap(stack[histIdxRef.current]);

      } else { // ArrowDown
        if (histIdxRef.current === -1) return;
        histIdxRef.current++;
        if (histIdxRef.current >= stack.length - 1) {
          // 弹出草稿，回到 live
          const draft = stack.pop();
          histIdxRef.current = -1;
          onApplySnap(draft);
        } else {
          onApplySnap(stack[histIdxRef.current]);
        }
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [getMagnets, onApplySnap, selectedId]);

  return { push, reset, histIdxRef };
}

// ── 工具函数 ──────────────────────────────────────────────────────────────────

function isSameSnapshot(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    const ma = a[i], mb = b[i];
    const keys = new Set([...Object.keys(ma), ...Object.keys(mb)]);
    for (const key of keys) {
      const va = ma[key], vb = mb[key];
      if (Array.isArray(va) && Array.isArray(vb)) {
        if (va.length !== vb.length) return false;
        if (va.some((v, j) => Math.abs(v - vb[j]) > 1e-6)) return false;
      } else if (va !== vb) {
        return false;
      }
    }
  }
  return true;
}
