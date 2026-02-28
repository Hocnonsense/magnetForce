/**
 * 磁力模拟器 UI 子组件
 * - EditRow：单行三轴数值输入
 * - SimSection：模拟控制面板
 * - SelectedMagnetPanel：选中磁球的编辑/显示面板
 */

import React from 'react';
import { smallBtnStyle } from '../styles';

/** @type {React.CSSProperties} */
const EDIT_ROW_STYLE = {
  width: '100%', boxSizing: 'border-box',
  background: '#0c0c1a', border: '1px solid #333',
  borderRadius: '3px', color: '#e0e0e0',
  fontSize: '10px', padding: '3px 5px', outline: 'none',
  fontFamily: 'monospace'
};
const EDIT_ROW_GRID = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px', marginBottom: '5px' };
const AXIS_LABELS = ['X', 'Y', 'Z'];

export function EditRow({ field, label, color, editable, draft, setDraft, onCommit }) {
  return (
    <div>
      <div style={{ fontSize: '10px', color, marginBottom: '3px' }}>{label}</div>
      <div style={EDIT_ROW_GRID}>
        {AXIS_LABELS.map((axis, i) => (
          <input
            key={axis}
            placeholder={axis}
            disabled={!editable}
            style={{ ...EDIT_ROW_STYLE, opacity: editable ? 1 : 0.4, cursor: editable ? 'text' : 'not-allowed' }}
            value={draft[field]?.[i] ?? ''}
            onChange={e => {
              if (!editable) return;
              const val = e.target.value;
              setDraft(d => { const next = { ...d, [field]: [...d[field]] }; next[field][i] = val; return next; });
            }}
            onKeyDown={e => {
              if (!editable || e.key !== 'Enter') return;
              onCommit(field, i, draft[field][i]);
              // @ts-ignore
              e.target.blur();
            }}
            onFocus={e => { if (editable) e.target.style.borderColor = '#4488ff'; }}
            onBlur={e => { e.target.style.borderColor = '#333'; }}
          />
        ))}
      </div>
    </div>
  );
}

export function SimSection({
  isSimulating, simSpeed, stepDeltaTimeRef, totalSimTime,
  useGravity, magnets, selectedId, refYId, setRefYId,
  onToggle, onResetVel, onPerturb, onReframe,
  onSimSpeedChange, onGravityChange,
}) {
  return (
    <div style={{
      padding: '12px',
      background: isSimulating ? 'linear-gradient(135deg, #1a2a1a, #0a150a)' : '#1a1a2a',
      borderRadius: '8px',
      border: `1px solid ${isSimulating ? '#2a4a2a' : '#2a2a4a'}`
    }}>
      <div style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>动力学模拟</div>

      <button onClick={onToggle} style={{
        width: '100%', padding: '12px', border: 'none', borderRadius: '6px',
        color: '#fff', fontSize: '14px', fontWeight: 600, cursor: 'pointer', marginBottom: '10px',
        background: isSimulating ? 'linear-gradient(135deg, #aa3333, #882222)' : 'linear-gradient(135deg, #33aa33, #228822)',
      }}>
        {isSimulating ? '⏸ 暂停模拟' : '▶ 开始模拟'}
      </button>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
        <button onClick={onResetVel} style={smallBtnStyle}>重置速度</button>
        <button onClick={onPerturb} style={smallBtnStyle}>扰动位置</button>
      </div>

      {/* 坐标变换 */}
      <div style={{ padding: '10px', background: '#111122', borderRadius: '6px', border: '1px solid #2a2a44' }}>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <select
            value={refYId ?? ''}
            onChange={e => setRefYId(e.target.value === '' ? null : parseInt(e.target.value))}
            style={{ flex: 1, background: '#0c0c1a', border: '1px solid #333', borderRadius: '3px', color: '#e0e0e0', fontSize: '11px', padding: '4px', outline: 'none' }}
          >
            <option value="">— y 方向参考球 —</option>
            {magnets.map(m => <option key={m.id} value={m.id}>球 #{m.id}</option>)}
          </select>
          <button
            onClick={onReframe}
            disabled={selectedId === null || refYId === null || selectedId === refYId}
            style={{ ...smallBtnStyle, opacity: (selectedId !== null && refYId !== null && selectedId !== refYId) ? 1 : 0.4, whiteSpace: 'nowrap' }}
          >
            坐标变换
          </button>
        </div>
      </div>

      {/* 速度滑块 */}
      <div style={{ marginTop: '10px' }}>
        <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>最大模拟速度: {simSpeed}×</div>
        <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>当前每帧时间步长: {stepDeltaTimeRef.current}</div>
        <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>模拟总时间: {totalSimTime}s</div>
        <input
          type="range" min="-6" max="0" step="0.1"
          value={Math.log10(simSpeed)}
          onChange={e => onSimSpeedChange(Math.pow(10, Math.max(-6, Math.min(0, parseFloat(e.target.value)))))}
          style={{ width: '100%', accentColor: '#4488ff' }}
        />
      </div>

      <CheckboxRow label="重力 (y 方向)" checked={useGravity} onChange={onGravityChange} />
    </div>
  );
}

// ── SelectedMagnetPanel ───────────────────────────────────────────────────────

export function SelectedMagnetPanel({
  selectedId, selectedMag, isSimulating,
  editDraft, setEditDraft,
  onToggle, onToggleFixed, onRemove, onCommit,
}) {
  const rowProps = { draft: editDraft, setDraft: setEditDraft, onCommit };
  return (
    <div style={{ padding: '12px', background: '#15152a', borderRadius: '8px', border: '1px solid #2a2a4a' }}>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
        <button disabled style={{ ...smallBtnStyle, flex: 1, opacity: 1 }}>选中磁球 #{selectedId}</button>
        <button onClick={onToggle} style={{ ...smallBtnStyle, flex: 1, opacity: 1, background: isSimulating ? 'linear-gradient(135deg, #aa3333, #882222)' : 'linear-gradient(135deg, #33aa33, #228822)' }}>
          {isSimulating ? '⏸ 暂停模拟' : '▶ 开始模拟'}
        </button>
        <button onClick={onToggleFixed} style={{ ...smallBtnStyle, flex: 1, background: selectedMag?.fixed ? '#2a1a4a' : '#1a1a2a', borderColor: selectedMag?.fixed ? '#6a3aaa' : '#333' }}>
          {selectedMag?.fixed ? '📌 已固定' : '📌 固定'}
        </button>
        <button onClick={onRemove} style={{ ...smallBtnStyle, flex: 1, background: '#3a1a1a', borderColor: '#5a2a2a' }}>− 移除</button>
      </div>

      <div style={{ fontSize: '11px', color: '#666', marginBottom: '6px' }}>
        {isSimulating ? '数据' : '编辑数据'}
        <span style={{ color: '#444', fontStyle: 'italic' }}>{isSimulating ? '' : '(回车确认 · ↑↓ 撤销)'}</span>
      </div>

      {editDraft && (
        <>
          <EditRow field="m_pos" label="位置 (mm)" color="#88ccff" editable={!isSimulating} {...rowProps} />
          <EditRow field="m_vel" label="速度 (mm/s)" color="#88ffcc" editable={!isSimulating} {...rowProps} />
          <EditRow field="moment" label="磁矩 (方向)" color="#ffdd00" editable={!isSimulating} {...rowProps} />
          <EditRow field="f" label="受力 (N)" color="#00ffff" editable={false}          {...rowProps} />
          <EditRow field="tau" label="力矩 (N·m)" color="#ff00ff" editable={false}          {...rowProps} />
        </>
      )}
    </div>
  );
}

// ── 内部工具 ──────────────────────────────────────────────────────────────────

function CheckboxRow({ label, checked, onChange }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px', cursor: 'pointer' }}>
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} style={{ accentColor: '#4488ff' }} />
      <span style={{ fontSize: '12px', color: '#aaa' }}>{label}</span>
    </label>
  );
}
