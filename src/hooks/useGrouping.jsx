import { useCallback, useEffect, useState } from 'react';

/**
 * @typedef {Object} GroupingState
 * @property {Object.<string, Set<number>>} groups
 * @property {string|null} activeGroup
 * @property {string} newGroupName
 * @property {(string) => void} setNewGroupName
 * @property {() => void} createGroup
 * @property {(string) => void} selectGroup
 * @property {(string) => void} deleteGroup
 * @property {() => void} confirmRename
 * @property {() => Set<number>} getIdsInAffectedGroup
 * @property {(deletedIds: Set<number>) => void} cleanupIds
 * @property {() => void} resetGroups
 */

/**
 * 生成唯一分组名
 * 无 base → "#1", "#2", ...
 * 有 base 且冲突 → "name-1", "name-2", ...
 */
export function getNewGroupName(groups, base = "") {
  let name = base.trim();
  let prefix = `${base.trim()}-`;
  let idx = 1;
  if (base === "") {
    prefix = "#";
    name = `#${idx}`
  }
  for (; ; idx++) {
    if (!groups[name]) break;
    name = `${prefix}${idx}`;
  }
  return name;
}

/**
 * 分组管理 hook：状态、CRUD、快捷键
 *
 * @param {Object} opts
 * @param {Set<number>} opts.selectedIds
 * @param {React.Dispatch<React.SetStateAction<Set<any>>>} opts.setSelectedIds
 * @param {React.RefObject} opts.keyTrapRef  - 隐藏 textarea ref，选择分组后聚焦
 * @param {React.RefObject} opts.stateRef    - { magnets } 用于 Ctrl+A 全选
 */
export function useGrouping({ selectedIds, setSelectedIds, keyTrapRef, stateRef }) {
  const [groups, setGroups] = useState({});
  const [activeGroup, setActiveGroup] = useState(null);
  const [newGroupName, setNewGroupName] = useState('');

  // ── derived ───────────────────────────────────────────────────────────
  const getIdsInAffectedGroup = useCallback(() => {
    const ids = new Set();
    if (activeGroup && groups[activeGroup]) {
      for (const id of groups[activeGroup]) ids.add(id);
    }
    return ids;
  }, [activeGroup, groups]);

  // ── CRUD ──────────────────────────────────────────────────────────────
  const createGroup = useCallback(() => {
    if (selectedIds.size === 0) return;
    const name = getNewGroupName(groups, newGroupName.trim() || "");
    setGroups(prev => ({ ...prev, [name]: new Set(selectedIds) }));
    setNewGroupName(name);
    setActiveGroup(name);
    setTimeout(() => { if (keyTrapRef.current) keyTrapRef.current.focus(); }, 0);
  }, [selectedIds, groups, newGroupName]);

  const deleteGroup = useCallback((gName) => {
    setGroups(prev => { const next = { ...prev }; delete next[gName]; return next; });
    if (activeGroup === gName) setActiveGroup(null);
  }, [activeGroup]);

  const selectGroup = useCallback((gName) => {
    if (activeGroup === gName) { setActiveGroup(null); setNewGroupName(''); return; }
    setSelectedIds(new Set(groups[gName] || []));
    setActiveGroup(gName);
    setNewGroupName('');
    setTimeout(() => { if (keyTrapRef.current) keyTrapRef.current.focus(); }, 0);
  }, [activeGroup, groups, setSelectedIds]);

  const confirmRename = useCallback(() => {
    if (!activeGroup || !newGroupName.trim()) return;
    const newName = newGroupName.trim();
    if (newName === activeGroup) { setNewGroupName(''); return; }
    if (groups[newName]) return;
    setGroups(prev => {
      const next = {};
      for (const [k, v] of Object.entries(prev)) {
        next[k === activeGroup ? newName : k] = v;
      }
      return next;
    });
    setActiveGroup(newName);
    setNewGroupName('');
  }, [activeGroup, newGroupName, groups]);

  /** 从所有分组中清理已删除的 id（removeMagnet 用） */
  const cleanupIds = useCallback((deletedIds) => {
    setGroups(prev => {
      const next = {};
      for (const [name, ids] of Object.entries(prev)) {
        const kept = new Set([...ids].filter(id => !deletedIds.has(id)));
        if (kept.size > 0) next[name] = kept;
      }
      return next;
    });
  }, []);

  /** 重置全部分组状态（applyPreset 用） */
  const resetGroups = useCallback(() => {
    setGroups({});
    setActiveGroup(null);
    setNewGroupName('');
  }, []);

  // ── Ctrl+G / Ctrl+Shift+G / Ctrl+A 快捷键 ───────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'INPUT' && e.target !== keyTrapRef.current) return;
      if ((e.key === 'g' || e.key === 'G') && (e.ctrlKey || e.metaKey)) {
        e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
        if (e.shiftKey) {
          activeGroup && deleteGroup(activeGroup);
        } else {
          createGroup();
        }
      } else if ((e.key === 'a' || e.key === 'A') && (e.ctrlKey || e.metaKey)) {
        e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation();
        setSelectedIds(prev => {
          const scopeIds = activeGroup
            ? [...(groups[activeGroup] || [])]
            : stateRef.current.magnets.map(m => m.id);
          const nextIds = e.shiftKey
            ? scopeIds.filter(id => !prev.has(id))
            : scopeIds;
          return new Set(nextIds);
        });
      }
    };
    window.addEventListener('keydown', handler, true);
    return () => window.removeEventListener('keydown', handler, true);
  }, [createGroup, deleteGroup, activeGroup, groups, setSelectedIds]);

  return {
    groups, setGroups,
    activeGroup, setActiveGroup,
    newGroupName, setNewGroupName,
    getIdsInAffectedGroup,
    createGroup, deleteGroup, selectGroup, confirmRename,
    cleanupIds, resetGroups,
  };
}
