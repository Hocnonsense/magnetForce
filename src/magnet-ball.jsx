import * as THREE from 'three';

// ============================================
// 物理常数
// ============================================
const MU_0 = 4 * Math.PI * 1e-7;      // 真空磁导率 (H/m)

// 预计算采样点（避免重复计算）
const N_SAMPLES = 50;  // 每个球面采样点数，可调节精度/性能

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
        points.push([
            r * Math.cos(theta),
            y,
            r * Math.sin(theta)
        ]);
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
        this.sphere_samples = fibonacciSphere(n_samples);
        this.area_per_sample = 4 * Math.PI * radius_m * radius_m / n_samples;
    }

    // ============================================
    // 核心能量计算函数
    // ============================================
    calcEnergy(pos1, m1, pos2, m2) {
        const c1 = pos1;
        const c2 = pos2;

        // 中心距离
        const centerDist = ThreeLength(ThreeDistanceTo(c1, c2));
        // 重叠检测
        if (centerDist < 2 * this.radius * 0.99) {
            // 返回大正值模拟硬核排斥（值需根据系统能量尺度调整）
            return 1e6 * (1 - centerDist / (2 * this.radius)); // 线性排斥势
        }

        // 归一化磁矩方向 (单位矢量)
        const dir1 = ThreeNormalize(m1);
        const dir2 = ThreeNormalize(m2);
        // 远场优化：距离 > 8R 时用偶极子公式（误差 < 1%）
        if (centerDist > 8 * this.radius) {
            return this.calcEnergyDipole(c1, dir1, c2, dir2);
        }
        // 近场：表面磁荷积分
        const R = this.radius;

        const q2_arr = new Float64Array(this.n_samples);
        const r2x = new Float64Array(this.n_samples);
        const r2y = new Float64Array(this.n_samples);
        const r2z = new Float64Array(this.n_samples);
        for (let j = 0; j < this.n_samples; j++) {
            const n = this.sphere_samples[j];
            r2x[j] = c2[0] + R * n[0];
            r2y[j] = c2[1] + R * n[1];
            r2z[j] = c2[2] + R * n[2];
            const dot = ThreeDot(dir2, n);
            q2_arr[j] = this.mMag * dot * this.area_per_sample;
        }

        let energy = 0;
        for (let i = 0; i < this.n_samples; i++) {
            const n1 = this.sphere_samples[i];  // 球1表面法向量
            const r1 = [c1[0] + R * n1[0], c1[1] + R * n1[1], c1[2] + R * n1[2]];

            // 球1该点的磁荷密度 σ1 = M · n̂1
            const sigma1 = this.mMag * ThreeDot(dir1, n1);
            // 该采样点的磁荷 q1 = σ1 × ΔS
            const q1 = sigma1 * this.area_per_sample;
            for (let j = 0; j < this.n_samples; j++) {
                // 两表面点之间的距离
                const rd = ThreeDistanceTo(r1, [r2x[j], r2y[j], r2z[j]]);
                const dist = ThreeLength(rd);

                const q2 = q2_arr[j];  // 已预计算的磁荷
                if (dist > 1e-12) {
                    // 磁荷相互作用能 U = q1 × q2 / (4πμ₀ × r)
                    energy += q1 * q2 / Math.max(dist, 1e-12);
                }
            }
        }
        return (MU_0 / (4 * Math.PI)) * energy;  // = μ₀/(4π) × Σ(q₁q₂/r)
    }

    // ============================================
    // 远场偶极子公式（作为对比和优化）
    // ============================================
    calcEnergyDipole(c1, dir1, c2, dir2) {
        const d = ThreeDistanceTo(c1, c2);
        const r = ThreeLength(d);

        if (r < 1e-10) return 0;

        // 单位矢量
        const rHat = ThreeMultiplyScalar(d, 1 / r);  // 归一化距离向量
        // 点积
        const m1DotR = ThreeDot(dir1, rHat);
        const m2DotR = ThreeDot(dir2, rHat);
        const m1DotM2 = ThreeDot(dir1, dir2);

        // 磁矩大小
        const V = (4 / 3) * Math.PI * Math.pow(this.radius, 3);
        const mMag = this.mMag * V;  // A·m²

        // 偶极子能量公式
        const prefactor = MU_0 / (4 * Math.PI * Math.pow(r, 3));
        return prefactor * mMag * mMag * (m1DotM2 - 3 * m1DotR * m2DotR);
    }

    // ============================================
    // 力和力矩计算（近场磁荷积分）
    // ============================================
    calcForceAndTorque(c1, m1, c2, m2) {
        const R = this.radius;

        // 中心距离
        const d = ThreeDistanceTo(c1, c2);
        const centerDist = ThreeLength(d);
        // 重叠检测：返回排斥力
        // if (centerDist < 2 * R * 0.99) {
        //     const overlap = 1 - centerDist / (2 * R);
        //     const repulsion = 0 * overlap;
        //     const F2 = ThreeMultiplyScalar(
        //         ThreeMultiplyScalar(d, 1 / centerDist),
        //         repulsion
        //     ); // 作用在球2上的排斥力
        //     return { force1: ThreeMultiplyScalar(F2, -1), force2: F2, torque1: [0, 0, 0], torque2: [0, 0, 0] };
        // }
        // 归一化磁矩方向
        const dir1 = ThreeNormalize(m1);
        const dir2 = ThreeNormalize(m2);
        // 预计算球2的表面磁荷和位置
        const r2x = new Float64Array(this.n_samples);
        const r2y = new Float64Array(this.n_samples);
        const r2z = new Float64Array(this.n_samples);
        const q2_arr = new Float64Array(this.n_samples);
        for (let j = 0; j < this.n_samples; j++) {
            const n = this.sphere_samples[j];
            r2x[j] = d[0] + R * n[0];
            r2y[j] = d[1] + R * n[1];
            r2z[j] = d[2] + R * n[2];
            const dot = ThreeDot(dir2, n);
            q2_arr[j] = this.mMag * dot * this.area_per_sample;
        }
        // 累积力和力矩
        let F2 = [0, 0, 0];   // 作用在球2上的总力
        let tau1 = [0, 0, 0]; // 作用在球1上的力矩
        let tau2 = [0, 0, 0]; // 作用在球2上的力矩
        const prefactor = MU_0 / (4 * Math.PI);
        for (let i = 0; i < this.n_samples; i++) {
            const n1 = this.sphere_samples[i];
            const r1 = ThreeMultiplyScalar(n1, R); // 球1表面点位置
            const sigma1 = this.mMag * ThreeDot(dir1, n1); // 球1该点的磁荷
            const q1 = sigma1 * this.area_per_sample;
            const lever1 = ThreeMultiplyScalar(n1, R);
            for (let j = 0; j < this.n_samples; j++) {
                const rd = ThreeDistanceTo(r1, [r2x[j], r2y[j], r2z[j]]); // 从r1指向r2j的矢量
                const dist = Math.max(ThreeLength(rd), 1e-12); //if (dist < 1e-12) continue;
                const q2 = q2_arr[j];
                const forceMag = prefactor * q1 * q2 / (dist * dist); // F = (μ₀/4π) × (q1×q2/r²) × r̂ // q1 q2 同号则产生排斥力
                const f = ThreeMultiplyScalar(rd, forceMag / dist); // 归一化 rd 乘以力的大小

                F2 = ThreeAdd(F2, f); // 累加到球2受的总力
                // 球2上点j相对于球2中心的位移
                const lever2 = ThreeMultiplyScalar(this.sphere_samples[j], R);
                // 力矩 τ = r × F（叉乘）
                tau2 = ThreeAdd(tau2, ThreeCross(lever2, f)); // 球2上点j受到的力f产生的力矩
                tau1 = ThreeAdd(tau1, ThreeCross(lever1, ThreeMultiplyScalar(f, -1))); // 球1上点i受到的反作用力 -F，产生的力矩
            }
        }
        return { force1: ThreeMultiplyScalar(F2, -1), force2: F2, torque1: tau1, torque2: tau2 };
    }
}
