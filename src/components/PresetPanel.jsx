import React from 'react';
import { chipBtn, presetBtnStyle, smallBtnStyle } from '../styles';

/**
 * 预设结构面板
 * - 显示内置预设，点击应用
 * - 显示自定义预设（从分组保存），可拖放到 3D 视图中添加
 *
 * @param {Object} props
 * @param {Object<string, Set<number>>} props.groups
 * @param {string|null} props.activeGroup
 * @param {Record<string, { magnets: Object[] }>} props.customPresets
 * @param {string[]} props.presets
 * @param {(name: string) => void} props.applyPreset
 * @param {() => void} props.saveGroupAsPreset
 * @param {React.Dispatch<React.SetStateAction<{}>>} props.setCustomPresets
 */
export function PresetPanel({
  groups,
  activeGroup,
  presets,
  customPresets,
  setCustomPresets,
  applyPreset,
  saveGroupAsPreset,
}) {
  return (
    <div>
      <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>预设结构</div>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {presets.map(name => (
          <button
            key={name}
            onClick={() => applyPreset(name)}
            style={presetBtnStyle}
          >
            {name}
          </button>
        ))}
      </div>
      {/* 自定义预设（从分组保存，可拖放到 3D 视图） */}
      {Object.keys(customPresets).length > 0 && (
        <>
          <div style={{ fontSize: '10px', color: '#666', marginTop: '8px', marginBottom: '4px' }}>自定义预设（拖放到视图中添加）</div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {Object.entries(customPresets).map(([name, p]) => (
              <span
                key={name}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData('text/x-preset-name', name);
                  e.dataTransfer.effectAllowed = 'copy';
                }}
                style={{
                  ...presetBtnStyle,
                  cursor: 'grab',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                {name} <span style={{ opacity: 0.5 }}>({p.magnets.length})</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCustomPresets(prev => { const next = { ...prev }; delete next[name]; return next; });
                  }}
                  style={{ ...chipBtn, color: '#ff6b6b', cursor: 'pointer' }}
                  title="删除预设"
                >✕</button>
              </span>
            ))}
          </div>
        </>
      )}
      {/* 保存当前分组为预设 */}
      {activeGroup && groups[activeGroup] && groups[activeGroup].size > 0 && (
        <button
          onClick={saveGroupAsPreset}
          style={{ ...smallBtnStyle, marginTop: '6px', width: '100%', background: '#1a2a3a', borderColor: '#2a4a6a' }}
        >
          💾 保存「{activeGroup}」为预设
        </button>
      )}
    </div>

  )
}
