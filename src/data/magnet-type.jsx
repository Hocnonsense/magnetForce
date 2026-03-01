import { Vector3 } from 'three';
import { getRot } from '../utils/coordinates.jsx';

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
 * @property {Vector3} pos    - 位置，单位 m
 * @property {Vector3} vel    - 线速度，单位 m/s
 * @property {Vector3} moment - 磁矩方向向量（模 = |m|，A·m²；仿真中通常已归一化后由 BuckyBall 缩放）
 * @property {Vector3} omega  - 角速度，单位 rad/s（用于磁矩旋转积分）
 * @property {string}  color  - 用于渲染的颜色字符串（如 '#ff0000' 或 0xff0000）
 * @property {string}  group  - 可选的分组标签, 可能用于整体移动或旋转
 *
 * **输出字段**（由 MagnetPGSWorld.step() 写入，首帧前可能为 undefined）:
 * @property {Vector3}   [f]    - 合力（含约束修正后），单位 N
 * @property {Vector3}   [tau]  - 合力矩，单位 N·m
 * @property {boolean} [fixed]  - 是否被固定
 */

const REQUIRED_VEC3 = /** @type {(keyof Magnet)[]} */ (['pos', 'vel', 'moment', 'omega']);
const OPTIONAL_VEC3 = /** @type {(keyof Magnet)[]} */ (['f', 'tau', 'fixed']);

/** @returns {Magnet} */
export function createMagnet(init = {}) {
  return {
    id: init.id ?? _nextId++,
    pos: init.pos ? init.pos.clone() : new Vector3(),
    vel: init.vel ? init.vel.clone() : new Vector3(),
    moment: init.moment ? init.moment.clone() : new Vector3(1, 0, 0),
    omega: init.omega ? init.omega.clone() : new Vector3(),
    color: init.color ?? '#93b5c9',
    group: init.group ?? '',
    f: new Vector3(),
    tau: new Vector3(),
    fixed: init.fixed ?? false,
  };
}

export function perturbMagnet(mag, magnitude = 0.3) {
  const randVec = new Vector3(
    (Math.random() - 0.5) * magnitude,
    (Math.random() - 0.5) * magnitude,
    (Math.random() - 0.5) * magnitude
  );
  return modifyMagnet(mag, {
    pos: mag.pos.clone().add(randVec),
  });
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
    if (!(mag[key] instanceof Vector3)) {
      throw new TypeError(
        `${label}.${key}: expected Vector3, got ${JSON.stringify(mag[key])}`
      );
    }
  }
  for (const key of OPTIONAL_VEC3) {
    if (mag[key] !== undefined && !(mag[key] instanceof Vector3)) {
      throw new TypeError(
        `${label}.${key}: expected Vector3 or undefined, got ${JSON.stringify(mag[key])}`
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
 * 将 Vector3 格式化为固定宽度字符串，方便列对齐。
 * @param {Vector3|undefined} v
 */
function fmtVec3(v, digits = 6, scale = 1) {
  if (!v) return '(undefined)';
  return v.toArray().map(x => (x * scale).toFixed(digits));
}

/**
 * @param {Magnet} mag
 */
export function magnet2Draft(mag) {
  const _default = new Vector3();
  return {
    m_pos: fmtVec3(mag.pos, 6, 1000),
    m_vel: fmtVec3(mag.vel ?? _default, 6, 1000),
    moment: fmtVec3(mag.moment),
    f: fmtVec3(mag.f ?? _default),
    tau: fmtVec3(mag.tau ?? _default),
  }
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
  const rot = getRot(
    mag1.moment,
    mag2.pos.clone().sub(mag1.pos)
  );
  if (!rot) return;
  const origin = mag1.pos;
  return (magnets.map(m => modifyMagnet(m, {
    pos: rot(m.pos.clone().sub(origin)),
    vel: rot(m.vel ?? new Vector3()),
    moment: rot(m.moment),
    f: rot(m.f ?? new Vector3()),
    tau: rot(m.tau ?? new Vector3()),
  })));
};
