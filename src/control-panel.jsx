import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GroupPanel } from './components/GroupPanel';
import { SelectedMagnetsPanel, SelectedMagnetPanel, SimControls, CoordinateTransformPanel, CheckboxRow } from './components/MagnetPanelComponents';
import { PresetPanel, LoadUserPreset } from './components/PresetPanel';
import { reframeCoordinates as _reframeCoordinates, createMagnet, magnet2Draft, perturbMagnet, resetMagnetIdCounter, tryMove, tryRotate } from './data/magnet-type';
import { exportJson, listPresets, loadPreset, parsePreset } from './data/presets';
import { useGrouping } from './hooks/useGrouping';
import { useKeyboardNav } from './hooks/useKeyboardNav';
import { usePhysicsStep, useRenderLoop } from './hooks/usePhysicsLoop';
import { screenToPhysics, useThreeScene } from './hooks/useThreeScene';
import { useUndoHistory } from './hooks/useUndoHistory';
import initMagnetWorld from './physics/world';
import { labelStyle, sectionStyle, smallBtnStyle, Collapse } from './styles';
import { alignGroupByPCA, getCenter } from './utils/coordinates';

// Simulation constants
const VISUAL_SCALE = 100;
/** 白圈屏幕像素宽度（固定） */
const RING_PX = 3;

export default function MagnetSimulator() {
  const MAGNET_RADIUS = 0.0025; // 5mm diameter
  const VISUAL_RADIUS = MAGNET_RADIUS * VISUAL_SCALE;

  const [magnets, _setMagnets] = useState([]);
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [refYId, setRefYId] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simSpeed, setSimSpeed] = useState(0.00004);
  const [useGravity, setUseGravity] = useState(false);
  const [totalSimTime, setTotalSimTime] = useState(0);
  const [editDraft, setEditDraft] = useState(null);
  const [presets, setPresets] = useState([]);
  const [ready, setReady] = useState(false);

  // ── 自定义预设（从分组保存）─────────────────────────────────────────────
  // { [name]: { magnets: Array<{pos,vel,moment,color,...}> } }
  // 球坐标以质心为原点存储（相对坐标）
  const [customPresets, setCustomPresets] = useState({});
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const selectedIdsRef = useRef(new Set());
  selectedIdsRef.current = selectedIds;
  const keyTrapRef = useRef(null);
  const needsSyncRef = useRef(true);

  // 最新参数 ref，避免闭包捕获旧值
  const stateRef = useRef({ magnets, isSimulating, simSpeed, useGravity });
  stateRef.current = { magnets, isSimulating, simSpeed, useGravity };
  const setMagnets = useCallback((update) => {
    _setMagnets(prev => {
      const next = typeof update === 'function' ? update(prev) : update;
      stateRef.current.magnets = next;
      needsSyncRef.current = true;
      return next;
    });
  }, []);

  // ── 分组 ──────────────────────────────────────────────────────────────────
  const grouping = useGrouping({ selectedIds, setSelectedIds, keyTrapRef, stateRef });
  const { activeGroup, groups, setNewGroupName, createGroup, getIdsInActiveGroup, cleanupIds, setGroups, setActiveGroup, } = grouping;

  /** @type {React.RefObject<import('./physics/world').MagnetPGSWorld|null>} */
  const magnetWorldRef = useRef(null);
  useEffect(initMagnetWorld(magnetWorldRef, setReady, MAGNET_RADIUS), []);

  useEffect(() => {
    listPresets()
      .then(names => { setPresets(names); return loadPreset(names[0], MAGNET_RADIUS); })
      .then(res => setMagnets(res.magnets))
      .catch(console.error);
  }, []);

  // 兼容：单选时提供 selectedId
  const selectedId = selectedIds.size === 1 ? [...selectedIds][0] : null;

  // ── 撤销历史 ──────────────────────────────────────────────────────────────
  const { push: pushUndo, reset: resetUndo, histIdxRef } = useUndoHistory({
    getMagnets: () => stateRef.current.magnets,
    selectedId,
    onApplySnap: (snap) => {
      setMagnets(snap);
      const mag = snap.find(m => m.id === selectedId);
      if (mag) setEditDraft(magnet2Draft(mag));
    },
  });

  const {
    meshesRef, showMoments, showForceTorques,
    updateRings, setShowMoments, setShowForceTorques,
    resetCamera, setCameraView, toggleProjection
  } = useThreeScene(
    { containerRef, sceneRef, cameraRef, rendererRef, controlsRef },
    { magnets, selectedIds, ready, getIdsInActiveGroup, keyTrapRef },
    VISUAL_RADIUS, VISUAL_SCALE, RING_PX);

  // ── 物理循环 ──────────────────────────────────────────────────────────────
  const { tick, stepDeltaTimeRef } = usePhysicsStep(
    { magnetWorldRef, stateRef, needsSyncRef, selectedIdsRef },
    { setMagnets, setEditDraft, setTotalSimTime, setIsSimulating },
  );
  useRenderLoop(
    { containerRef, sceneRef, cameraRef, rendererRef, controlsRef },
    { ready, tick, onBeforeRender: updateRings },
  );

  // editDraft 随选中同步（模拟中由 physicsStep 直接更新）
  useEffect(() => {
    if (selectedId === null) { setEditDraft(null); return; }
    const mag = magnets.find(m => m.id === selectedId);
    setEditDraft(mag ? magnet2Draft(mag) : null);
  }, [selectedId, magnets]);

  // ── 键盘输入捕获 ──────────────────────────────────────────────────────────
  // 点击 3D 区域时不再自动聚焦 keyTrap，仅选择分组时聚焦
  const { handleKeyDown } = useKeyboardNav(
    { stateRef, cameraRef, rendererRef, setMagnets, needsSyncRef, getIdsInActiveGroup },
    RING_PX, VISUAL_SCALE, MAGNET_RADIUS
  )

  // ── 点击选择 ──────────────────────────────────────────────────────────────
  const mouseDownPosRef = useRef(null);
  const handleMouseDown = (e) => {
    mouseDownPosRef.current = { x: e.clientX, y: e.clientY };
  };
  const handleClick = (e) => {
    const container = containerRef.current;
    const camera = cameraRef.current;
    if (!container || !camera) return;
    // 拖动过则不触发选择
    const downPos = mouseDownPosRef.current;
    if (downPos) {
      const dx = e.clientX - downPos.x, dy = e.clientY - downPos.y;
      // 5px 是经过数十年验证的工程经验值——足够大以过滤生理抖动，足够小以避免漏判短拖动
      if (dx * dx + dy * dy > 25) return;
    }
    const rect = container.getBoundingClientRect();
    const mouse = new THREE.Vector2(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(meshesRef.current);
    const hitId = hits.length > 0 ? hits[0].object.userData.id : null;
    if (hitId === null) {
      if (!e.shiftKey) setSelectedIds(new Set());
    } else if (e.shiftKey) {
      setSelectedIds(prev => {
        const next = new Set(prev);
        next.has(hitId) ? next.delete(hitId) : next.add(hitId);
        return next;
      });
    } else {
      setSelectedIds(new Set([hitId]));
    }
  };

  // ── 磁球操作 ──────────────────────────────────────────────────────────────
  const removeMagnet = () => {
    if (selectedIds.size === 0) return;
    setMagnets(prev => prev.filter(m => !selectedIds.has(m.id)));
    cleanupIds(selectedIds);
    setSelectedIds(new Set());
    setTotalSimTime(0);
  };

  const adsorbToAxis = () => {
    if (!activeGroup || !groups[activeGroup]) return;
    const ids = groups[activeGroup];
    const groupMags = magnets.filter(m => ids.has(m.id));
    if (groupMags.length === 0) return;
    const activeIds = getIdsInActiveGroup();
    const activeMags = magnets.filter(m => activeIds.has(m.id));
    const center = getCenter(activeMags.map(m => m.pos));
    const q = alignGroupByPCA(activeMags, selectedIds, center);
    if (!q) return;
    setMagnets(prev => {
      const newPos = tryRotate(prev, ids, center, q, MAGNET_RADIUS);
      if (!newPos) return prev;
      return prev.map(m => {
        if (!ids.has(m.id)) return m;
        const newM = newPos.get(m.id);
        return { ...m, pos: newM.pos, moment: newM.moment };
      });
    });
  }

  const applyPreset = (name) => {
    loadPreset(name, MAGNET_RADIUS).then(res => resetMagnets(res.magnets));
  };

  const resetMagnets = useCallback((magnets) => {
    magnetWorldRef.current?.reset();
    resetUndo();
    resetMagnetIdCounter();
    setMagnets(magnets);
    setSelectedIds(new Set());
    const groups = {};
    for (const m of magnets) {
      if (m.group) {
        if (!groups[m.group]) groups[m.group] = new Set();
        groups[m.group].add(m.id);
      }
    }
    setGroups(Object.keys(groups).length > 0 ? groups : {});
    setActiveGroup(null);
    setNewGroupName('');
    setIsSimulating(false);
    setTotalSimTime(0);
  }, [resetUndo]);

  const commitEdit = (field, index, value) => {
    const num = parseFloat(value);
    if (isNaN(num)) return;
    const fieldMap = { m_pos: ['pos', 0.001], m_vel: ['vel', 0.001], moment: ['moment', 1] };
    const mapping = fieldMap[field];
    if (!mapping) return;
    const [magField, scale] = mapping;
    pushUndo(magnets);
    const newMagnets = magnets.map(mag => {
      if (mag.id !== selectedId) return mag;
      const updated = (mag[magField].toArray ? mag[magField].toArray() : [0, 0, 0]);
      updated[index] = num * scale;
      return { ...mag, [magField]: new THREE.Vector3(...updated) };
    });
    pushUndo(newMagnets);
    histIdxRef.current = -1;
    setMagnets(newMagnets);
    setEditDraft(d => {
      if (!d) return d;
      const next = { ...d, [field]: [...d[field]] };
      next[field][index] = num?.toFixed(6) ?? 'N/A';
      return next;
    });
  };

  const exportMagnets = useCallback((mode) => {
    const json = exportJson(magnets.map(m => ({ ...m, pos: m.pos.clone().multiplyScalar(1 / MAGNET_RADIUS) })), 'exported', 'radius');
    if (mode === 'copy') {
      navigator.clipboard.writeText(json).then(() => alert('已复制到剪贴板')).catch(() => alert('复制失败'));
    } else {
      const a = Object.assign(document.createElement('a'), {
        href: URL.createObjectURL(new Blob([json], { type: 'application/json' })),
        download: `magnets_${Date.now()}.json`
      });
      a.click(); URL.revokeObjectURL(a.href);
    }
  }, [magnets]);

  const importMagnets = useCallback((json) => {
    try {
      JSON.parse(json); // 先验证 JSON 格式，避免 parsePreset 报错时丢失原有数据
      const { magnets } = parsePreset(json, MAGNET_RADIUS);
      if (magnets.length === 0) return;
      resetMagnets(magnets);
    } catch (e) {
      alert('导入失败: ' + e.message);
    }
  }, [resetMagnets]);

  const reframeCoordinates = () => {
    const newMagnets = _reframeCoordinates(magnets, selectedId, refYId);
    if (!newMagnets) return;
    pushUndo(magnets); pushUndo(newMagnets);
    setMagnets(newMagnets);
  };

  const toggleSimulation = () => {
    if (!isSimulating) needsSyncRef.current = true;
    setIsSimulating(v => !v);
  };

  // ── 保存分组为预设 & 拖放添加 ──────────────────────────────────────────
  /** 将激活分组保存为自定义预设（球坐标相对质心） */
  const saveGroupAsPreset = useCallback((activeGroup) => {
    const ids = groups[activeGroup];
    const groupMags = magnets.filter(m => ids.has(m.id));
    if (groupMags.length === 0) return;
    const center = getCenter(groupMags.map(m => m.pos));
    const relativeMags = groupMags.map(m => ({
      pos: m.pos.clone().sub(center),
      moment: m.moment.clone(),
      color: m.color
    }));
    setCustomPresets(prev => ({ ...prev, [activeGroup]: { magnets: relativeMags } }));
  }, [groups, magnets]);

  /** 在指定物理坐标处添加预设球组，返回新球的 id 集合 */
  const addPresetAtPosition = useCallback(async (presetName, physPos) => {
    const newIds = new Set();
    const newMags = [];

    const preset = customPresets[presetName];
    if (preset) {
      for (const tmpl of preset.magnets) {
        const mag = createMagnet({
          pos: tmpl.pos.clone().add(physPos),
          moment: tmpl.moment.clone(),
          color: tmpl.color,
          fixed: tmpl.fixed,
        });
        newIds.add(mag.id);
        newMags.push(mag);
      }
    } else if (presets.includes(presetName)) {
      const res = await loadPreset(presetName, MAGNET_RADIUS);
      for (const mag of res.magnets) {
        mag.pos.add(physPos);
        newIds.add(mag.id);
        newMags.push(mag);
      }
    }
    if (newIds.size === 0) return;
    // 先读当前 magnets 做碰撞检测
    const prev = stateRef.current.magnets;
    const next = [...prev, ...newMags];
    if (tryMove(next, newIds, new THREE.Vector3(), MAGNET_RADIUS) === null) return;
    // 副作用全部在外面，顺序明确
    pushUndo(prev);
    setMagnets(next);
    pushUndo(next);
    histIdxRef.current = -1;
    setSelectedIds(newIds);
    setNewGroupName(presetName);
    createGroup();
    setTotalSimTime(0);
  }, [customPresets, presets, pushUndo, createGroup]);

  /** 处理拖放到 3D 区域 */
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const presetName = e.dataTransfer.getData('text/x-preset-name');
    const physPos = screenToPhysics(containerRef.current, cameraRef.current, e.clientX, e.clientY, VISUAL_SCALE);
    if (!presetName) return;
    addPresetAtPosition(presetName, physPos);
  }, [addPresetAtPosition]);

  // ── 批量修改 ──────────────────────────────────────────────────────────────
  const batchSet = (field, value) => {
    const ids = getIdsInActiveGroup();
    if (ids.size === 0) return;
    pushUndo(magnets);
    const next = magnets.map(m => ids.has(m.id) ? { ...m, [field]: value } : m);
    pushUndo(next); histIdxRef.current = -1;
    setMagnets(next);
  };

  // ── 渲染 ──────────────────────────────────────────────────────────────────
  if (!ready) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#08080f', color: '#e0e0e0', fontFamily: 'system-ui' }}>
      <div><div style={{ fontSize: '24px', marginBottom: '10px' }}>🧲</div><div>Loading physics engine...</div></div>
    </div>
  );

  const activeIds = getIdsInActiveGroup();

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', background: '#08080f', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#e0e0e0' }}>

      {/* 控制面板 */}
      <div style={{ width: '300px', padding: '16px', background: 'linear-gradient(180deg, #12121f 0%, #0a0a15 100%)', borderRight: '1px solid #2a2a3a', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>

        <h1 style={{ fontSize: '18px', margin: 0, color: '#fff', borderBottom: '1px solid #333', paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '24px' }}>🧲</span> NdFeB 磁力球模拟
        </h1>

        <Collapse
          label={<div style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>动力学模拟参数</div>}
        >
          <SimControls
            isSimulating={isSimulating} simSpeed={simSpeed}
            stepDeltaTimeRef={stepDeltaTimeRef} totalSimTime={totalSimTime}
            onToggle={toggleSimulation}
            onResetVel={() => { needsSyncRef.current = true; setMagnets(prev => prev.map(m => ({ ...m, vel: new THREE.Vector3(), omega: new THREE.Vector3() }))); }}
            onPerturb={() => { needsSyncRef.current = true; setMagnets(prev => prev.map(m => perturbMagnet(m, 0.1 * MAGNET_RADIUS))); }}
            onSimSpeedChange={setSimSpeed}
          />
          <CoordinateTransformPanel
            magnets={magnets} selectedId={selectedId}
            refYId={refYId} setRefYId={setRefYId}
            onReframe={reframeCoordinates}
          />
          {/* 显示选项面板：重力、磁矩、力矩的开关 */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '10px', flexWrap: 'wrap' }}>
            <CheckboxRow label="重力 (y 方向)" checked={useGravity} onChange={setUseGravity} />
            <CheckboxRow label="显示磁矩" checked={showMoments} onChange={setShowMoments} />
            <CheckboxRow label="显示力矩" checked={showForceTorques} onChange={setShowForceTorques} />
          </div>
          <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
            <button onClick={() => exportMagnets('download')} style={{ ...smallBtnStyle, flex: 1 }}>⬇ 导出</button>
            <button onClick={() => exportMagnets('copy')} style={{ ...smallBtnStyle, flex: 1 }}>📋 复制</button>
            <LoadUserPreset importMagnets={importMagnets} />
          </div>
        </Collapse>

        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
          <button onClick={() => setCameraView('x')} style={smallBtnStyle}>YZ面</button>
          <button onClick={() => setCameraView('y')} style={smallBtnStyle}>XZ面</button>
          <button onClick={() => setCameraView('z')} style={smallBtnStyle}>XY面</button>
          <button onClick={toggleProjection} style={smallBtnStyle}>
            {cameraRef.current?.isPerspectiveCamera ? '正交' : '透视'}
          </button>
          <button onClick={resetCamera} style={smallBtnStyle}>重置相机</button>
        </div>

        {/* Selected & Grouping Magnet Controls */}
        <GroupPanel
          grouping={grouping}
          selectedIds={selectedIds}
          onDeselect={() => { grouping.setActiveGroup(null); grouping.setNewGroupName(''); }}
          adsorbToAxis={adsorbToAxis}
          saveGroupAsPreset={saveGroupAsPreset}
          presetPanel={<PresetPanel
            presets={presets}
            customPresets={customPresets}
            setCustomPresets={setCustomPresets}
            applyPreset={applyPreset}
          />}
        />
        {/* Presets */}

        {/* 选择面板 */}
        <SelectedMagnetsPanel
          selectedIds={selectedIds}
          selectedMag={magnets.find(m => m.id === selectedId)}
          isSimulating={isSimulating}
          onToggle={toggleSimulation}
          onToggleFixed={() => {
            setMagnets(prev => prev.map(m => m.id === selectedId ? { ...m, fixed: !m.fixed } : m));
          }}
          onRemove={removeMagnet}
        >
          {/* ── 单个修改 ── */}
          {selectedId !== null && (
            <SelectedMagnetPanel
              isSimulating={isSimulating}
              editDraft={editDraft}
              setEditDraft={setEditDraft}
              onCommit={commitEdit}
              currentColor={magnets.find(m => m.id === selectedId)?.color}
              onColorChange={(color) => {
                pushUndo(magnets);
                const next = magnets.map(m => m.id === selectedId ? { ...m, color } : m);
                pushUndo(next); histIdxRef.current = -1;
                needsSyncRef.current = true;
                setMagnets(next);
              }}
            />
          )}
          {/* ── 批量修改 ── */}
          {selectedIds.size > 1 && (
            <>
              <div style={labelStyle}>批量修改 ({activeIds.size})</div>
              <div style={{ fontSize: '10px', color: '#666', marginBottom: '4px' }}>颜色</div>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '8px' }}>
                {["#ff4444", "#4444ff", "#44ff44", "#ffdd00", "#ff44ff", "#44ffff", "#ff8800", "#8844ff"].map(c => (
                  <button key={c} onClick={() => batchSet('color', c)} style={{
                    width: '22px', height: '22px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer',
                    background: c,
                  }} />
                ))}
                <input type="color" onChange={e => batchSet('color', parseInt(e.target.value.slice(1), 16))}
                  style={{ width: '22px', height: '22px', padding: 0, border: 'none', borderRadius: '4px', cursor: 'pointer' }} />
              </div>
              <div style={{ fontSize: '10px', color: '#666', marginTop: '6px', marginBottom: '4px' }}>磁矩方向</div>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                {[['+X', [1, 0, 0]], ['−X', [-1, 0, 0]], ['+Y', [0, 1, 0]], ['−Y', [0, -1, 0]], ['+Z', [0, 0, 1]], ['−Z', [0, 0, -1]]].map(([label, val]) => (
                  /** @ts-ignore */
                  <button key={label} onClick={() => {
                    const ids = getIdsInActiveGroup();
                    pushUndo(magnets);
                    const next = magnets.map(m => {
                      if (!ids.has(m.id)) return m;
                      /** @ts-ignore */
                      return { ...m, moment: new THREE.Vector3(...val).normalize() };
                    });
                    pushUndo(next); histIdxRef.current = -1; setMagnets(next);
                  }} style={smallBtnStyle}>{label}</button>
                ))}
              </div>
            </>
          )}
        </SelectedMagnetsPanel>


      </div>

      {/* 3D View */}
      <div
        ref={containerRef}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{ flex: 1, minWidth: '400px', minHeight: '400px', cursor: 'pointer', position: 'relative' }}
      >
        {/* 隐藏的 textarea 捕获键盘事件，避免浏览器滚动条拦截方向键 */}
        <textarea
          ref={keyTrapRef}
          onKeyDown={handleKeyDown}
          style={{
            position: 'absolute', left: 0, top: 0,
            width: '1px', height: '1px', opacity: 0,
            padding: 0, border: 'none', outline: 'none',
            resize: 'none', overflow: 'hidden',
            pointerEvents: 'none',
          }}
          tabIndex={-1}
        />
      </div>
    </div>
  );
}
