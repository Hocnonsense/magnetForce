import React from 'react';
import { chipBtn, presetBtnStyle, smallBtnStyle } from '../styles';

/**
 * 预设结构面板
 * - 显示内置预设，点击应用
 * - 显示自定义预设（从分组保存），可拖放到 3D 视图中添加
 *
 * @param {Object} props
 * @param {Record<string, { magnets: Object[] }>} props.customPresets
 * @param {string[]} props.presets
 * @param {(name: string) => void} props.applyPreset
 * @param {React.Dispatch<React.SetStateAction<{}>>} props.setCustomPresets
 */
export function PresetPanel({
  presets,
  customPresets,
  setCustomPresets,
  applyPreset,
}) {
  const onDragStart = (e, name) => {
    e.dataTransfer.setData('text/x-preset-name', name.toString().trim());
    e.dataTransfer.effectAllowed = 'copy';
  }
  const style1 = { fontSize: '10px', color: '#666', marginTop: '8px', marginBottom: '4px' };
  const style2 = { display: 'flex', gap: '4px' };
  return (
    <div>
      {/* 自定义预设（从分组保存，可拖放到 3D 视图） */}
      {Object.keys(customPresets).length > 0 && (
        <>
          <div style={style1}>自定义预设</div>
          <div style={{ ...style2, flexWrap: 'wrap' }}>
            {Object.entries(customPresets).map(([name, p]) => (
              <button
                key={name}
                draggable
                onDragStart={(e) => onDragStart(e, name)}
                style={presetBtnStyle}
              >
                {name}
                <span style={{ opacity: 0.5 }}>({p.magnets.length})</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCustomPresets(prev => { const next = { ...prev }; delete next[name]; return next; });
                  }}
                  style={{ ...chipBtn, color: '#ff6b6b', cursor: 'pointer' }}
                  title="删除预设"
                >✕</button>
              </button>
            ))}
          </div>
        </>
      )}
      <>
        {Object.keys(customPresets).length > 0 && (<div style={style1}>默认预设</div>)}
        <div style={{ ...style2, flexWrap: 'wrap' }}>
          {presets.map(name => (
            <button
              key={name}
              draggable
              onDragStart={(e) => onDragStart(e, name)}
              onClick={() => applyPreset(name)}
              style={presetBtnStyle}
            >
              {name}
            </button>
          ))}
        </div>
      </>
    </div>

  )
}

export function LoadUserPreset({ importMagnets }) {
  return (
    <button
      onDragOver={e => { e.preventDefault(); e.dataTransfer.dropEffect = 'copy'; }}
      onDrop={e => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) { file.text().then(importMagnets); }
        else { importMagnets(e.dataTransfer.getData('text')); }
      }}
      onPaste={e => {
        const text = e.clipboardData.getData('text');
        if (text) importMagnets(text);
      }}
      tabIndex={0}
      style={{
        ...smallBtnStyle, flex: 1, background: '#1a3a1a', borderColor: '#2a5a2a',
        textAlign: 'center', cursor: 'pointer', outline: 'none',
      }}
    >
      📥 导入 (粘贴/拖放)
    </button>
  )
}
