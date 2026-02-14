
/** (x1 + x2, y1 + y2, z1 + z2) */
export function Add(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]];
}

/** (x2 - x1, y2 - y1, z2 - z1) */
export function DistanceTo(v1, v2) {
    return [v2[0] - v1[0], v2[1] - v1[1], v2[2] - v1[2]];
}

/** (x^2 + y^2 + z^2)^(1/2) */
export function Length(v) {
    return Math.sqrt(v[0] ** 2 + v[1] ** 2 + v[2] ** 2);
}

/** (x * scalar, y * scalar, z * scalar) */
export function MultiplyScalar(v, scalar) {
    return v.map(a => a * scalar);
}

/** (x / length, y / length, z / length) */
export function Normalize(v) {
    const len = Length(v);
    return MultiplyScalar(v, 1 / len);
}

/** (x1 * x2, y1 * y2, z1 * z2) */
export function Dot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
}

/** 叉乘 */
export function Cross(v1, v2) {
    return [
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0]
    ];
}

export function RotateAroundAxis(v, axis, angle) {
    const cosTheta = Math.cos(angle);
    const sinTheta = Math.sin(angle);
    const axisDotV = Dot(axis, v);
    const cross = Cross(axis, v);
    return [
        v[0] * cosTheta + cross[0] * sinTheta + axis[0] * axisDotV * (1 - cosTheta),
        v[1] * cosTheta + cross[1] * sinTheta + axis[1] * axisDotV * (1 - cosTheta),
        v[2] * cosTheta + cross[2] * sinTheta + axis[2] * axisDotV * (1 - cosTheta)
    ];
}
