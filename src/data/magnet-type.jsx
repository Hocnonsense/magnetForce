import * as Three from '../utils/three.jsx';
import { getRot } from '../utils/coordinates.jsx';
/**
 * @typedef {Three.Vec3} Vec3
 */

let _nextId = 0;
export function resetMagnetIdCounter() {
  _nextId = 0;
}

/**
 * 单个磁球的完整状态对象。
 *
 * **输入字段**（每步开始时必须完整）:
 * @typedef {Object} Magnet
 * @property {number}  id     - 唯一整数标识符（由 presets 分配，仿真期间不变）
 * @property {Vec3}    pos    - 位置，单位 m
 * @property {Vec3}    vel    - 线速度，单位 m/s
 * @property {Vec3}    moment - 磁矩方向向量（模 = |m|，A·m²；仿真中通常已归一化后由 BuckyBall 缩放）
 * @property {Vec3}    omega  - 角速度，单位 rad/s（用于磁矩旋转积分）
 * @property {string}  color  - 用于渲染的颜色字符串（如 '#ff0000' 或 0xff0000）
 * @property {string}  group  - 可选的分组标签, 可能用于整体移动或旋转
 *
 * **输出字段**（由 MagnetPGSWorld.step() 写入，首帧前可能为 undefined）:
 * @property {Vec3}   [f]    - 合力（含约束修正后），单位 N
 * @property {Vec3}   [tau]  - 合力矩，单位 N·m
 * @property {boolean} [fixed]  - 是否被固定
 */

const REQUIRED_VEC3 = /** @type {(keyof Magnet)[]} */ (['pos', 'vel', 'm', 'omega']);
const OPTIONAL_VEC3 = /** @type {(keyof Magnet)[]} */ (['f', 'tau', 'fixed']);

/** @returns {Magnet} */
export function createMagnet(init = {}) {
  return {
    id: init.id ?? _nextId++, // @ts-ignore
    pos: init.pos ? [...init.pos] : [0, 0, 0], // @ts-ignore
    vel: init.vel ? [...init.vel] : [0, 0, 0], // @ts-ignore
    moment: init.moment ? [...init.moment] : [1, 0, 0], // @ts-ignore
    omega: init.omega ? [...init.omega] : [0, 0, 0],
    color: init.color ?? '#93b5c9',
    group: init.group ?? '',
    f: [0, 0, 0],
    tau: [0, 0, 0],
    fixed: init.fixed ?? false,
  };
}

/**
 * @param {Magnet} mag
 * @param {Partial<Magnet>} updates
 * @returns {Magnet}
 */
export function modifyMagnet(mag, updates) {
  return { ...mag, ...updates };
}

/**
 * 检查对象是否为合法 Magnet；失败时抛出含字段路径的错误。
 *
 * @param {unknown} mag
 * @param {string}  [label='magnet']  - 用于错误信息的前缀（如 `magnets[2]`）
 * @returns {Magnet}                  - 原样返回，方便链式调用
 * @throws {TypeError}
 *
 * @example
 * const validated = assertMagnet(rawObj, 'magnets[0]');
 */
export function assertMagnet(mag, label = 'magnet') {
  if (mag === null || typeof mag !== 'object') {
    throw new TypeError(`${label}: expected object, got ${mag === null ? 'null' : typeof mag}`);
  }
  for (const key of REQUIRED_VEC3) {
    if (!Three.isVec3(mag[key])) {
      throw new TypeError(
        `${label}.${key}: expected number[3], got ${JSON.stringify(mag[key])}`
      );
    }
  }
  for (const key of OPTIONAL_VEC3) {
    if (mag[key] !== undefined && !Three.isVec3(mag[key])) {
      throw new TypeError(
        `${label}.${key}: expected number[3] or undefined, got ${JSON.stringify(mag[key])}`
      );
    }
  }
  // @ts-ignore
  if (typeof mag.id !== 'number' || !Number.isFinite(mag.id)) {
    // @ts-ignore
    throw new TypeError(`${label}.id: expected finite number, got ${JSON.stringify(mag.id)}`);
  }

  return /** @type {Magnet} */ (mag);
}

/**
 * 批量校验数组，返回通过校验的 Magnet[]；遇到任何问题立即抛出。
 *
 * @param {unknown[]} arr
 * @returns {Magnet[]}
 */
export function assertMagnets(arr) {
  if (!Array.isArray(arr)) throw new TypeError('magnets: expected Array');
  return arr.map((m, i) => assertMagnet(m, `magnets[${i}]`));
}

/**
 * 将 Vec3 格式化为固定宽度字符串，方便列对齐。
 * @param {Vec3|undefined} v
 */
function fmtVec3(v, digits = 6) {
  if (!v) return '(undefined)';
  return `[${v.map(x => x.toFixed(digits).padStart(10)).join(', ')} ]`;
}

/**
 * 在控制台输出单个 Magnet 的所有字段及单位。
 *
 * @param {Magnet} mag
 * @param {{ digits?: number }} [opts]
 *
 * @example
 * inspectMagnet(magnets[0]);
 * // ┌─ Magnet #0 ──────────────────────────────────────
 * // │  pos   (mm)    [  0.0000,   0.0050,   0.0000 ]
 * // │  vel   (mm/s)  [  0.0000,   0.0000,   0.0000 ] |vel| =
 * // │  m     (A·m²)  [  1.0000,   0.0000,   0.0000 ]
 * // │  omega (rad/s) [  0.0000,   0.0000,   0.0000 ]
 * // │  f     (N)     [  0.0000,   0.0000,   0.0000 ] |f| =
 * // │  tau   (N·mm)  [  0.0000,   0.0000,   0.0000 ] |tau| =
 * // └───────────────────────────────────────────────────
 */
export function inspectMagnet(mag, { digits = 4 } = {}) {
  const f = v => fmtVec3(v, digits);
  console.log(
    `┌─ Magnet #${mag.id} ─────────────────────────────────────┐\n` +
    `│  pos   (m)      ${f(mag.pos)}\n` +
    `│  vel   (m/s)    ${f(mag.vel)}\n` +
    `│  m     (A·m²)   ${f(mag.moment)}\n` +
    `│  omega (rad/s)  ${f(mag.omega)}\n` +
    `│  f     (N)      ${f(mag.f)}\n` +
    `│  tau   (N·m)    ${f(mag.tau)}\n` +
    `└──────────────────────────────────────────────────────────┘`
  );
}

/**
 * 批量打印，附带帧号（可选）。
 *
 * @param {Magnet[]} magnets
 * @param {{ frame?: number, digits?: number }} [opts]
 *
 * @example
 * inspectMagnets(magnets, { frame: stepCount });
 */
export function inspectMagnets(magnets, { frame, digits = 4 } = {}) {
  const header = frame !== undefined ? `── Frame ${frame} ` : '── Snapshot ';
  console.groupCollapsed(header + `(${magnets.length} magnets) ──`);
  magnets.forEach(m => inspectMagnet(m, { digits }));
  console.groupEnd();
}

/**
 * @param {Magnet[]} magnets
 * @returns {Magnet[]|undefined}  - 返回新数组，原数组不变；输入不合法时返回 undefined
 */
export function reframeCoordinates(magnets, selectedId, refYId) {
  if (selectedId === null || refYId === null || selectedId === refYId) return;
  const mag1 = magnets.find(m => m.id === selectedId);
  const mag2 = magnets.find(m => m.id === refYId);
  if (!mag1 || !mag2) return;
  const rot = getRot(Three.normalize([...mag1.moment]), Three.DistanceTo(mag1.pos, mag2.pos));
  if (!rot) return;
  const origin = mag1.pos;
  return (magnets.map(m => modifyMagnet(m, {
    pos: rot(Three.DistanceTo(origin, m.pos)),
    vel: rot(m.vel ?? [0, 0, 0]),
    moment: rot(m.moment),
    f: rot(m.f ?? [0, 0, 0]),
    tau: rot(m.tau ?? [0, 0, 0]),
  })));
};
