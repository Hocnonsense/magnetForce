// ============================================
// 物理常数
// ============================================
const MU_0 = 4 * Math.PI * 1e-7;      // 真空磁导率 (H/m)

// ============================================
// Fibonacci 球面均匀采样
// ============================================
function fibonacciSphere(n) {
    const points = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // 黄金角
    for (let i = 0; i < n; i++) {
        const y = 1 - (i / (n - 1)) * 2;       // y 从 1 到 -1
        const r = Math.sqrt(1 - y * y);
        const theta = phi * i;
        points.push([r * Math.cos(theta), y, r * Math.sin(theta)]);
    }
    return points;
}

function fibonacciSphere4(n) {
    const sampleN = (n + 1) >> 2; // 向上取整：n→n/4
    const basePoints = fibonacciSphere(sampleN);
    const points = [];
    for (let i = 0; i < sampleN; i++) {
        const p = basePoints[i];
        points.push(p);
        points.push([-p[0], p[1], -p[2]]);
        points.push([-p[0], -p[1], -p[2]]); // 严格对跖点（中心对称）
        points.push([p[0], -p[1], p[2]]);
    }
    return points;
}

export function ThreeAdd(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]];
}

function ThreeDistanceTo(v1, v2) {
    return [v2[0] - v1[0], v2[1] - v1[1], v2[2] - v1[2]];
}

export function ThreeLength(v) {
    return Math.sqrt(v[0] ** 2 + v[1] ** 2 + v[2] ** 2);
}

function ThreeMultiplyScalar(v, scalar) {
    return [v[0] * scalar, v[1] * scalar, v[2] * scalar];
}

export function ThreeNormalize(v) {
    const len = ThreeLength(v);
    return ThreeMultiplyScalar(v, 1 / len);
}

function ThreeDot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
}

function ThreeCross(v1, v2) {
    return [
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0]
    ];
}

export default class BuckyBall {
    constructor(radius_m = 2.5e-3, br = 1.2, n_samples = 50) {
        this.radius = radius_m;
        this.br = br;
        this.mMag = br / MU_0;

        this.n_samples = n_samples;
        this.sphere_samples = fibonacciSphere4(n_samples);
        this.area_per_sample = 4 * Math.PI * radius_m * radius_m / n_samples;
        const q_factor = this.mMag * this.area_per_sample;
        this.sample_q = this.sphere_samples.map(p => p[1] * q_factor
        )
    }

    rotateSphereSamples = (dir) => {
        const up = [0, 1, 0];
        const cosTheta = ThreeDot(up, dir); // 防浮点溢出
        const sinTheta2 = 1 - cosTheta * cosTheta;
        // ✅ 情况1: 完全对齐 (无需旋转)
        if (sinTheta2 < 1e-9) return cosTheta > 0 ? this.sphere_samples : this.sphere_samples.map(p => [-p[0], -p[1], -p[2]]);
        // 计算旋转轴: up × dir = [dir[2], 0, -dir[0]] (因up=[0,1,0])
        const sinTheta = Math.sqrt(sinTheta2);
        const axis = ThreeNormalize([dir[2], 0, -dir[0]]);
        // 对每个采样点独立应用旋转 (关键修复: 循环内计算每个点的叉积/点积)
        return this.sphere_samples.map(p => {
            const axisDotP = ThreeDot(axis, p);
            const cross = ThreeCross(axis, p);
            return [
                p[0] * cosTheta + cross[0] * sinTheta + axis[0] * axisDotP * (1 - cosTheta),
                p[1] * cosTheta + cross[1] * sinTheta + axis[1] * axisDotP * (1 - cosTheta),
                p[2] * cosTheta + cross[2] * sinTheta + axis[2] * axisDotP * (1 - cosTheta)
            ];
        });
    };

    // ============================================
    // 力和力矩计算（近场磁荷积分）
    // ============================================
    calcForceAndTorque(c1, m1, c2, m2) {
        const R = this.radius;
        const minDist = R / this.n_samples;

        const d = ThreeDistanceTo(c1, c2);
        const dir1 = ThreeNormalize(m1);
        const dir2 = ThreeNormalize(m2);

        // 表面点位置
        const r1_arr = this.rotateSphereSamples(dir1).map(n => ThreeMultiplyScalar(n, R));
        const r2_arr = this.rotateSphereSamples(dir2).map(n => ThreeMultiplyScalar(n, R));
        const r2d_arr = r2_arr.map(n => ThreeAdd(n, d)); // 球2表面点相对于球1中心的向量

        let F2 = [0, 0, 0];
        let tau1 = [0, 0, 0];
        let tau2 = [0, 0, 0];
        const prefactor = MU_0 / (4 * Math.PI);

        for (let i = 0; i < this.n_samples; i++) {
            const r1 = r1_arr[i];
            const q1 = this.sample_q[i];
            for (let j = 0; j < this.n_samples; j++) {
                const r2 = r2d_arr[j];
                const rd = ThreeDistanceTo(r1, r2);
                const dist = Math.max(ThreeLength(rd), minDist);
                const q2 = this.sample_q[j];
                const forceMag = prefactor * q1 * q2 / (dist ** 2);
                const f = ThreeMultiplyScalar(rd, forceMag / dist);
                F2 = ThreeAdd(F2, f);
                tau2 = ThreeAdd(tau2, ThreeCross(r2_arr[j], f));
                tau1 = ThreeAdd(tau1, ThreeCross(r1, ThreeMultiplyScalar(f, -1)));
            }
        }

        return {
            force1: ThreeMultiplyScalar(F2, -1),
            force2: F2,
            torque1: tau1,
            torque2: tau2
        };
    }
}
