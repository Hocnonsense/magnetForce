import React from 'react';
import { secStyle, lbl, chipBtn } from '../styles';

/**
 * @typedef {import('../hooks/useGrouping').GroupingState} GroupingState
 */

/**
 * 分组管理 + 选择信息面板
 *
 * @param {Object} props
 * @param {GroupingState} props.grouping
 * @param {Set<number>} props.selectedIds
 * @param {() => void} props.onDeselect       - 取消选择（清空 activeGroup + newGroupName）
 * @param {() => void} props.onRemoveMagnet
 */
export function GroupPanel({
  grouping,
  selectedIds,
  onDeselect,
  onRemoveMagnet,
}) {
  const { groups, activeGroup, newGroupName, setNewGroupName,
    createGroup, selectGroup, deleteGroup, confirmRename } = grouping;
  const hasRename = newGroupName.trim() && newGroupName.trim() !== activeGroup;

  return (
    <div style={secStyle}>
      {/* ── 分组标题行 ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', ...lbl }}>
        <span>分组</span>
        {selectedIds.size > 0 && (
          <span
            onClick={createGroup}
            style={{ fontSize: '10px', color: '#6bd5ff', cursor: 'pointer', marginLeft: 'auto' }}
          >
            创建分组 (Ctrl+G)
          </span>
        )}
        {activeGroup && (
          <span
            onClick={() => hasRename ? confirmRename() : onDeselect()}
            style={{ fontSize: '10px', color: hasRename ? '#8ab4f8' : '#aaa', cursor: 'pointer', marginLeft: 'auto' }}
          >
            {hasRename ? '重命名' : '取消选择'}
          </span>
        )}
        {activeGroup && (
          <span
            onClick={() => deleteGroup(activeGroup)}
            style={{ fontSize: '10px', color: '#ff6b6b', cursor: 'pointer', marginLeft: 'auto' }}
          >
            取消分组 (Ctrl+Shift+G)
          </span>
        )}
      </div>

      {/* ── 分组标签列表 ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px', flexWrap: 'wrap' }}>
        {Object.entries(groups).map(([name, ids]) => (
          activeGroup === name ? (
            <input
              key={name}
              autoFocus
              value={newGroupName}
              placeholder={name}
              onChange={e => setNewGroupName(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  if (newGroupName.trim() && newGroupName.trim() !== name) confirmRename();
                  else onDeselect();
                }
                if (e.key === 'Escape') onDeselect();
              }}
              style={{ padding: '2px 6px', borderRadius: '10px', fontSize: '11px', background: 'rgba(68,136,255,0.15)', border: '1px solid #4488ff', color: '#e0e0e0', outline: 'none', width: '80px' }}
            />
          ) : (
            <span
              key={name}
              onClick={() => selectGroup(name)}
              style={{
                padding: '2px 8px', borderRadius: '10px', fontSize: '11px', cursor: 'pointer',
                background: 'rgba(255,255,255,0.06)',
                border: `1px solid rgba(255,255,255,0.12)`,
                color: '#aaa',
              }}
            >
              {name} <span style={{ opacity: 0.5 }}>({ids.size})</span>
              <button onClick={(e) => { e.stopPropagation(); deleteGroup(name); }} style={{ ...chipBtn, color: '#ff6b6b' }} title="删除组">✕</button>
            </span>
          )
        ))}
      </div>

      {/* ── 键盘提示 ── */}
      {activeGroup && (
        <div style={{ fontSize: '10px', color: '#555', marginTop: '6px' }}>
          ↑↓←→ 移动 · PgUp/Home PgDn/End Tab/Shift+Tab 旋转
        </div>
      )}

      {/* ── 选择信息行 ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', ...lbl, marginTop: '8px' }}>
        <span>
          {selectedIds.size > 0 ? `Shift+单击多选` : '单击选择'}
          ({selectedIds.size}){activeGroup && ` · 「${activeGroup}」`}
        </span>
        {selectedIds.size > 0 && (
          <span
            onClick={onRemoveMagnet}
            style={{ fontSize: '10px', color: '#ff6b6b', cursor: 'pointer', marginLeft: 'auto' }}
          >
            删除
          </span>
        )}
      </div>

      {/* ── 选中 ID 标签 ── */}
      {selectedIds.size > 0 && (
        <div style={{ display: 'flex', gap: '3px', flexWrap: 'wrap', marginBottom: '6px' }}>
          {[...selectedIds].map(id => (
            <span key={id} style={{ padding: '0 5px', borderRadius: '3px', fontSize: '10px', background: 'rgba(68,136,255,0.15)', border: '1px solid rgba(68,136,255,0.3)', color: '#8ab4f8' }}>#{id}</span>
          ))}
        </div>
      )}
    </div>
  );
}
