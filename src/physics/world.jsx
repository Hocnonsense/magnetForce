import * as Three from '../utils/three';
import { modifyMagnet } from '../data/magnet-type';
import { WorldParams } from '../data/world-type';
import { rotateMoments, safeMove } from './integrator';
import { calculateMagnet } from './magnet-force';
import { fixOverlaps, getContacts, solveClusterConstraints } from './solver';


/**
 * @typedef {import('../data/magnet-type').Magnet} Magnet
 */

/**
 * @param {React.RefObject<MagnetPGSWorld|null>} rapierWorldRef
 * @param {number} MAGNET_RADIUS
 */
export default function initMagnetWorld(rapierWorldRef, setReady, MAGNET_RADIUS) {
  return () => {
    let mounted = true;
    rapierWorldRef.current = new MagnetPGSWorld(MAGNET_RADIUS);
    setReady(true);
    return () => { mounted = false; };
  }
}

/**
 * 物理世界管理器
 */
export class MagnetPGSWorld {
  constructor(radius_m = 0.0025) {
    this.params = new WorldParams({ radius: radius_m });
  }

  reset() {
  }

  /** 计算磁力（用内部存储的位置和磁矩） */
  calcMagneticForces(magnets, radius, mMag) {
    const n = magnets.length;
    const coforces = magnets.map(() => [0, 0, 0]);
    const torques = magnets.map(() => [0, 0, 0]);
    const forces = magnets.map(() => new Map());

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const ft = calculateMagnet(
          radius, mMag,
          magnets[i].moment, magnets[j].moment,
          Three.DistanceTo(magnets[i].pos, magnets[j].pos)
        )
        Three.add(coforces[i], ft.force1);
        Three.add(coforces[j], ft.force2);
        Three.add(torques[i], ft.torque1);
        Three.add(torques[j], ft.torque2);
        forces[i].set(`M#${j}`, ft.force1);
        forces[j].set(`M#${i}`, ft.force2);
      }
    }
    return { coforces, torques, forces };
  }

  /**
   * @param {Magnet[]} magnets
   */
  step(magnets, dt, gravity = false) {
    const DIST = this.params.radius * 2;
    const fixedFlags = magnets.map(m => !!m.fixed);
    const magnetPos = magnets.map(m => m.pos);
    // 1. 检测接触
    const fixedPos = fixOverlaps(magnetPos, DIST, this.params.shellThickness, fixedFlags);
    // 2. 计算磁力
    const { coforces, torques, forces } = this.calcMagneticForces(
      magnets.map((m, i) => ({ pos: fixedPos[i], moment: m.moment })),
      this.params.radius, this.params.mMag
    );
    // 3. 叠加重力（固定球不受重力影响积分，但支持力会通过约束传递）
    if (gravity) {
      const GRAVITY = this.params.gravity;
      coforces.forEach((f, i) => {
        if (!fixedFlags[i]) {
          const g = GRAVITY * this.params.mass;
          f[1] += g;
          forces[i].set('Gravity', [0, g, 0]);
        }
      });
    }
    // 4. 约束求解（固定球提供支持力）
    const { constrainedForces, constrainedVel } = solveClusterConstraints(
      fixedPos, coforces, magnets.map(m => m.vel), getContacts(fixedPos, DIST, this.params.shellThickness), fixedFlags
    );
    // 5. 自适应时间步（固定球跳过积分）
    const { newPos, newVel, safedt, reason } = safeMove(
      fixedPos, constrainedForces, constrainedVel,
      this.params.mass, DIST - this.params.shellThickness,
      dt, fixedFlags
    );

    // 6. 后处理接触约束（修正重叠）
    const fixedNewPos = fixOverlaps(newPos, DIST, this.params.shellThickness, fixedFlags);
    getContacts(fixedNewPos, DIST, this.params.shellThickness).map(c => {
      if (c.dist < this.params.radius) throw new Error(`球${c.i}-球${c.j}重叠过深: dist=${(c.dist * 1000).toFixed(4)}mm`)
    });
    // 7. 更新旋转
    const newMoments = rotateMoments(
      torques, magnets.map(m => ({ moment: m.moment, omega: m.omega })), safedt,
      this.params.inertia, 0.3
    );
    return {
      newMagnets: magnets.map(
        (m, i) => modifyMagnet(m, {
          pos: fixedNewPos[i],
          vel: newVel[i],
          f: constrainedForces[i],
          tau: torques[i],
          moment: newMoments[i].moment,
          omega: newMoments[i].omega
        })
      ), safedt, forces, reason
    };
  }
}
