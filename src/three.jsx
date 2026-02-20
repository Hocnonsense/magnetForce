/**
 * @typedef {[number, number, number]} Vec3
 */

export function isVec3(v) {
    return Array.isArray(v) && v.length === 3 && v.every(x => typeof x === 'number' && isFinite(x));
}

/**
 * 检查对象是否为合法 Magnet；失败时抛出含字段路径的错误。
 *
 * @param {unknown} v
 * @returns {Vec3}                  - 原样返回，方便链式调用
 * @throws {TypeError}
 */
export function assertVec3(v) {
    if (!isVec3(v)) {
        throw new TypeError(`Vec3: expected number[3], got ${JSON.stringify(v)}`);
    }
    // @ts-ignore
    return v;
}


/** (x1 + x2, y1 + y2, z1 + z2)
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @return {Vec3}
 */
export function Add(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]];
}

/** (x1 + x2, y1 + y2, z1 + z2), inplace modify v1
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @return {Vec3} === v1
 */
export function add(v1, v2) {
    v1[0] += v2[0];
    v1[1] += v2[1];
    v1[2] += v2[2];
    return v1;
}

/** (x2 - x1, y2 - y1, z2 - z1)
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @return {Vec3}
 */
export function DistanceTo(v1, v2) {
    return [v2[0] - v1[0], v2[1] - v1[1], v2[2] - v1[2]];
}

/** (x2 - x1, y2 - y1, z2 - z1), inplace modify v1
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @return {Vec3} === v1
 */
export function distanceTo(v1, v2) {
    v1[0] = v2[0] - v1[0];
    v1[1] = v2[1] - v1[1];
    v1[2] = v2[2] - v1[2];
    return v1;
}

/** (x^2 + y^2 + z^2)^(1/2)
 * @param {Vec3} v
 * @return {number}
 */
export function Length(v) {
    return Math.sqrt(Dot(v, v));
}

/** (x * scalar, y * scalar, z * scalar)
 * @param {Vec3} v
 * @param {number} scalar
 * @return {Vec3}
 */
export function MultiplyScalar(v, scalar) {
    // @ts-ignore
    return v.map(a => a * scalar);
}

/** (x2 * s, y2 * s, z2 * s), inplace modify v1
 * @param {Vec3} v1
 * @param {number} scalar
 * @return {Vec3} === v1
 */
export function multiplyScalar(v1, scalar) {
    v1[0] *= scalar;
    v1[1] *= scalar;
    v1[2] *= scalar;
    return v1;
}

/** (x / length, y / length, z / length)
 * @param {Vec3} v
 * @return {Vec3}
 */
export function Normalize(v) {
    const len = Length(v);
    return MultiplyScalar(v, 1 / len);
}

/** (x / length, y / length, z / length), inplace modify v
 * @param {Vec3} v
 * @return {Vec3} === v
 */
export function normalize(v) {
    const len = Length(v);
    return multiplyScalar(v, 1 / len);
}

/** (x1 * x2, y1 * y2, z1 * z2)
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @return {number}
 */
export function Dot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
}

/** 叉乘
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @return {Vec3}
*/
export function Cross(v1, v2) {
    return [
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0]
    ];
}

/** 叉乘并相加
 * @param {Vec3} v1
 * @param {Vec3} v2
 * @param {Vec3} out
 * @return {Vec3} === out
*/
export function crossAddTo(v1, v2, out) {
    out[0] += v1[1] * v2[2] - v1[2] * v2[1];
    out[1] += v1[2] * v2[0] - v1[0] * v2[2];
    out[2] += v1[0] * v2[1] - v1[1] * v2[0];
    return out;
}

/**
 * 绕任意轴旋转向量 v，angle 单位为弧度。
 * @param {Vec3} v    待旋转的向量
 * @param {Vec3} axis 旋转轴（必须为单位向量）
 * @param {number} angle 旋转角度（弧度）
 * @returns {Vec3} === v，旋转后的向量（原地修改）
 */
export function rotateAroundAxis(v, axis, angle) {
    const cosTheta = Math.cos(angle);
    const sinTheta = Math.sin(angle);
    const axisDotV = Dot(axis, v);
    const cross = Cross(axis, v);
    v[0] = v[0] * cosTheta + cross[0] * sinTheta + axis[0] * axisDotV * (1 - cosTheta);
    v[1] = v[1] * cosTheta + cross[1] * sinTheta + axis[1] * axisDotV * (1 - cosTheta);
    v[2] = v[2] * cosTheta + cross[2] * sinTheta + axis[2] * axisDotV * (1 - cosTheta);
    return v;
}
