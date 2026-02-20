import * as Three from './three';
import { createMagnet } from './magnet-type';

/**
 * @typedef {import('./magnet-type').Magnet} Magnet
 */

/**
 * @returns {Magnet[]}
 */
export function applyRadius(magnets, radius) {
  return magnets.map(m => ({ ...m, pos: Three.multiplyScalar(m.pos, radius) })).map(createMagnet);
}

const GROUP_COLORS = [
  '#4488ff', '#ff4444', '#44ff88', '#ffaa00',
  '#ff44ff', '#44ffff', '#ff8844', '#aaffaa',
];


/**
 * @param {Magnet[]} magnets
 * @param {string} name  preset 名（不含扩展名）
 * @param {string} unit  单位（m, mm, cm, radius, diameter）
 * @returns {string} 预设的 JSON 字符串
 */
export function exportJson(magnets, name = "preset", unit = "m") {
  const data = {
    name: name,
    unit: unit,
    magnets: magnets.map(m => {
      const m1 = {
        pos: m.pos.join(', '),
        moment: m.m.join(', '),
        ...(m.group ? { group: m.group } : {})
      }
      if (m.color === undefined) return m1;
      return {
        ...m1,
        color: typeof m.color === 'number'
          /** @ts-ignore */
          ? `#${m.color.toString(16).padStart(6, '0')}`
          : m.color
      };
    })
  };
  const json = JSON.stringify(data, null, 2);
  return json;
}

/**
 * @param {string} text  TSV 文件内容
 */
export function parsePresetTSV(text) {
  const lines = text.split('\n').map(l => l.trimEnd()).filter(Boolean);
  if (lines.length < 2) return [];

  const headers = lines[0].split('\t').map(h => h.trim());
  const idx = Object.fromEntries(headers.map((h, i) => [h, i]));
  // 必填列检查
  const REQUIRED = ['x', 'y', 'z', 'mx', 'my', 'mz'];
  const missing = REQUIRED.filter(k => !(k in idx));
  if (missing.length > 0) throw new Error(`TSV 缺少必填列: ${missing.join(', ')}`);

  const groupIndex = new Map();
  const magnets = [];

  for (let i = 1; i < lines.length; i++) {
    // 跳过注释行
    if (lines[i].startsWith('#')) continue;
    const cols = lines[i].split('\t');
    const get = key => cols[idx[key]]?.trim() ?? '';
    const x = parseFloat(get('x'));
    const y = parseFloat(get('y'));
    const z = parseFloat(get('z'));
    const mx = parseFloat(get('mx'));
    const my = parseFloat(get('my'));
    const mz = parseFloat(get('mz'));
    if ([x, y, z, mx, my, mz].some(isNaN)) continue;
    // 磁矩归一化
    // group 和 color
    const group = get('group') || null;
    const colorRaw = get('color');
    const color = /^#[0-9a-fA-F]{6}$/.test(colorRaw)
      ? colorRaw
      : (() => {
        const key = group ?? '';
        if (!groupIndex.has(key)) groupIndex.set(key, groupIndex.size % GROUP_COLORS.length);
        return GROUP_COLORS[groupIndex.get(key)];
      })();

    magnets.push({
      pos: [x, y, z],
      m: Three.normalize([mx, my, mz]),
      color,
      ...(group ? { group } : {}),
    });
  }
  return magnets;
}

/**
 * @returns {{ name: string, unit: string, magnets }}
 * @example
 *
 * text = '{"name": "pair","unit": "radius","magnets": [{"pos": "0, 0, 0","moment": "0, 1, 0"},{"pos": "0, 1, 0","moment": "0, 1, 0"}]';
 * parsePresetJson(text);
 */
export function parsePresetJson(text) {
  const data = JSON.parse(text);
  const name = data.name || "";
  const unit = data.unit || 'm';
  const magnets = [];
  const tryUnpackVec3 = x => {
    if (typeof x === 'string') {
      const parts = x.split(',').map(s => parseFloat(s.trim()));
      if (parts.length === 3 && parts.every(n => !isNaN(n))) {
        return parts;
      }
    }
    return x;
  };
  for (const m of data.magnets) {
    const processed = {};
    for (const [key, val] of Object.entries(m)) {
      processed[key === 'moment' ? 'm' : key] = tryUnpackVec3(val);
    }
    Three.assertVec3(processed.pos);
    Three.assertVec3(Three.normalize(processed.m));
    magnets.push(processed);
  }
  return { name, unit, magnets };
}

/**
 * @param {string} name  preset 名（不含扩展名）
 * @param {number} radius_m
 * @returns {Promise<{name: string, magnets: Magnet[]}>}
 */
export async function loadPreset(name, radius_m = 0.0025) {
  const res = await fetch(`${import.meta.env.BASE_URL}presets/${name}.json`);
  try {
    const text = await res.text();
    const { name: presetName, unit, magnets } = parsePresetJson(text);
    const UNIT_SCALE = { m: 1, mm: 1e-3, cm: 1e-2, radius: radius_m, diameter: radius_m * 2 };
    if (!(unit in UNIT_SCALE)) throw new Error(`Unknown unit in preset: ${unit}`);
    const scale = UNIT_SCALE[unit];
    return {
      name: presetName || name,
      magnets: applyRadius(magnets, scale)
    };
  } catch (e) {
    if (name in PRESETS) {
      console.warn(`Preset "${name}" not found as file, falling back to built-in.`);
      const magnets = PRESETS[name]()
      magnets.map(m => Three.multiplyScalar(m.pos, radius_m));
      return { name, magnets: magnets.map(createMagnet) };
    }
    throw new Error(`Preset "${name}" is not valid JSON`);
  }
}

export async function listPresets() {
  const res = await fetch(`${import.meta.env.BASE_URL}presets.json`);
  if (!res.ok) throw new Error('presets.json missing');
  const fileNames = await res.json();
  // 内置 preset 作为补充，去重
  const builtinNames = Object.keys(PRESETS).filter(n => !fileNames.includes(n));
  const allNames = [...fileNames, ...builtinNames];
  if ("pair" in allNames) {
    // 确保最经典的 pair preset 始终可见
    return ["pair", ...allNames.filter(n => n !== "pair")];
  }
  return allNames;
}

// Presets
export const PRESETS = {
  chain: () => Array.from({ length: 5 }, (_, i) => ({
    pos: [(i - 2) * 2 * 1.1, 0, 0],
    m: [1, 0, 0],
    color: i % 2 ? 0x4444ff : 0xff4444
  })),
  ring: () => Array.from({ length: 6 }, (_, i) => {
    const a = (2 * Math.PI * i) / 6;
    const ringRadius = 2 * 2;  // 10mm
    return {
      pos: [ringRadius * Math.cos(a), ringRadius * Math.sin(a), 0],
      m: [Math.cos(a + Math.PI / 2), Math.sin(a + Math.PI / 2), 0],
      color: i % 2 ? 0x4444ff : 0xff4444
    };
  }),
  random: () => Array.from({ length: 8 }, (_, i) => ({
    pos: [
      (Math.random() - 0.5) * 2 * 10,
      (Math.random() - 0.5) * 2 * 10,
      (Math.random() - 0.5) * 2 * 4
    ],
    //m: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize().toArray(),
    m: Three.normalize([Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]),
    color: i % 2 ? 0x4444ff : 0xff4444
  })),
  cube: () => {
    const halfSize = 2 * 1.2;
    const positions = [
      [-1, -1, -1], [1, -1, -1], [-1, 1, -1], [1, 1, -1],
      [-1, -1, 1], [1, -1, 1], [-1, 1, 1], [1, 1, 1]
    ];
    return positions.map((p, i) => ({
      pos: p.map(x => x * halfSize),
      m: [0, 0, i < 4 ? 1 : -1],
      color: i < 4 ? 0xff4444 : 0x4444ff
    }));
  }
};
