import RAPIER from '@dimforge/rapier3d-compat';
import * as Three from './three';
import BuckyBall from './magnet-ball';

// 一个 N35 的磁球, 其充磁完成后, 表面磁感应强度约为 1.2T. 考虑小磁球可能充能不完全
const BR = 1.0; // Tesla
const MASS = 0.5e-3; // 0.5g

// 接触状态
const CONTACT_STATE = {
  NONE: 'none',
  SHELL: 'shell',
  HARD: 'hard'
};

/**
 * Rapier 物理世界管理器
 */
export default class RapierWorld {
  /**
   * @param {typeof RAPIER} rapier Rapier 库
   */
  constructor(rapier, radius_m = 0.0025) {
    this.RAPIER = rapier;
    this.world = new rapier.World({ x: 0, y: 0, z: 0 });
    /** @type {Map<any, RAPIER.RigidBody>} */
    this.bodies = new Map();
    this.moments = new Map();
    this.contactStates = new Map();
    this.world.integrationParameters.numSolverIterations = 16;

    this.radius = radius_m;
    this.shell_thickness = this.radius * 0.01;
    this.ball = new BuckyBall(this.radius - this.shell_thickness, BR, MASS, 200);
    // 外壳厚度（镀层 + 弹性形变）
  }

  syncToRapier(magnets) {
    // [TODO] 优化：增量更新而不是完全重建
    for (const [id, body] of this.bodies) {
      this.world.removeRigidBody(body);
      this.bodies.delete(id);
      this.moments.delete(id);
    }
    for (const mag of magnets) {
      const rigidBodyDesc = this.RAPIER.RigidBodyDesc.dynamic()
        .setTranslation(mag.pos[0], mag.pos[1], mag.pos[2])
        .setLinearDamping(0.5);
      let body = this.world.createRigidBody(rigidBodyDesc);
      body.setLinvel({ x: mag.vel[0], y: mag.vel[1], z: mag.vel[2] }, true);
      body.setAngvel({ x: mag.omega[0], y: mag.omega[1], z: mag.omega[2] }, true);

      const colliderDesc = this.RAPIER.ColliderDesc.ball(this.ball.radius)
        .setMass(MASS)
        .setRestitution(0.01) // 恢复系数, 越小越不弹
        .setFriction(0.0);
      this.world.createCollider(colliderDesc, body);
      this.bodies.set(mag.id, body);
      this.moments.set(mag.id, [...mag.m]);
    }
  }

  /** 计算磁力（用内部存储的位置和磁矩） */
  calcForces(magnets) {
    const n = magnets.length;
    const forces = magnets.map(() => [0, 0, 0]);
    const torques = magnets.map(() => [0, 0, 0]);

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const body1 = this.bodies.get(magnets[i].id);
        const body2 = this.bodies.get(magnets[j].id);
        if (!body1 || !body2) continue;

        const p1 = body1.translation();
        const p2 = body2.translation();
        const m1 = this.moments.get(magnets[i].id);
        const m2 = this.moments.get(magnets[j].id);

        const ft = this.ball.calcForceAndTorque(
          [p2.x - p1.x, p2.y - p1.y, p2.z - p1.z], m1, m2
        )

        forces[i] = Three.Add(forces[i], ft.force1);
        forces[j] = Three.Add(forces[j], ft.force2);
        torques[i] = Three.Add(torques[i], ft.torque1);
        torques[j] = Three.Add(torques[j], ft.torque2);
      }
    }
    return { forces, torques };
  }

  _contactKey(i, j) {
    return i < j ? `${i},${j}` : `${j},${i}`;
  }

  _getContactState(dist) {
    const CONTACT_DIST = this.radius * 2;
    if (dist <= CONTACT_DIST) {
      return CONTACT_STATE.HARD;
    }
    if (dist <= CONTACT_DIST + this.shell_thickness) {
      return CONTACT_STATE.SHELL;
    }
    return CONTACT_STATE.NONE;
  }

  _reportStateChange(idI, idJ, oldState, newState, dist) {
    const penetration = this.radius * 2 - dist;
    const distStr = (dist * 1000).toFixed(4);
    const penStr = (penetration * 1e6).toFixed(2);

    const stateEmoji = {
      [CONTACT_STATE.NONE]: '⚪',
      [CONTACT_STATE.SHELL]: '🟡',
      [CONTACT_STATE.HARD]: '🔴'
    };

    console.log(
      `%c${stateEmoji[oldState]} → ${stateEmoji[newState]} ` +
      `球${idI}-球${idJ}: ${oldState} → ${newState} ` +
      `(dist=${distStr}mm, penetration=${penStr}μm)`,
      newState === CONTACT_STATE.HARD ? 'color: red; font-weight: bold' :
        newState === CONTACT_STATE.SHELL ? 'color: orange' : 'color: green'
    );
  }

  getContacts(magnets) {
    const contacts = [];
    const n = magnets.length;

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const body1 = this.bodies.get(magnets[i].id);
        const body2 = this.bodies.get(magnets[j].id);
        if (!body1 || !body2) continue;

        const p1 = body1.translation();
        const p2 = body2.translation();
        const d = [p2.x - p1.x, p2.y - p1.y, p2.z - p1.z];
        const dist = Three.Length(d);

        const key = this._contactKey(magnets[i].id, magnets[j].id);
        const newState = this._getContactState(dist);
        const oldState = this.contactStates.get(key) || CONTACT_STATE.NONE;

        if (newState !== oldState) {
          this._reportStateChange(magnets[i].id, magnets[j].id, oldState, newState, dist);
          this.contactStates.set(key, newState);
        }

        const penetration = this.radius * 2 - dist;
        // 记录在外壳范围内的接触 (球1-shell-球2)，以供吸能处理
        if (penetration >= - this.shell_thickness) {
          contacts.push({
            i, j,
            normal: Three.MultiplyScalar(d, 1 / dist),
            dist,
            penetration
          });
        }
      }
    }

    return contacts;
  }

  /**
   * 根据相互接触的磁球对施加的力进行约束，防止穿透。
   * 根据牛顿第三定律，接触的两球在法向方向上获得支持力。
   */
  computeConstrainedForces(forces, contacts) {
    const constrained = forces.map(f => [...f]);
    for (const { i, j, normal } of contacts) {
      const f1n = Three.Dot(forces[i], normal);
      const f2n = Three.Dot(forces[j], normal);
      const lambda = (f1n - f2n) / 2;
      if (lambda > 0) {
        constrained[i] = Three.Add(constrained[i], Three.MultiplyScalar(normal, lambda));
        constrained[j] = Three.Add(constrained[j], Three.MultiplyScalar(normal, -lambda));
      }
    }
    return constrained;
  }
  applyForces(magnets, forces) {
    for (let i = 0; i < magnets.length; i++) {
      const body = this.bodies.get(magnets[i].id);
      if (body) {
        body.resetForces(true);
        body.addForce({ x: forces[i][0], y: forces[i][1], z: forces[i][2] }, true);
      }
    }
  }

  applyShellAbsorption(magnets, contacts) {
    console.log(`🔨 Applying shell absorption for ${contacts.length} contacts...`);
    console.log(`magnets: ${magnets.length}`);
    for (const mag of magnets) {
      console.log(`magnet ${mag.id}: pos=${mag.pos}, vel=${mag.vel}, omega=${mag.omega}`);
    }
    console.log(`contacts: ${contacts}`)
    for (const { i, j, normal } of contacts) {
      const body1 = this.bodies.get(magnets[i].id);
      const body2 = this.bodies.get(magnets[j].id);
      if (!body1 || !body2) continue;

      const v1 = body1.linvel();
      const v2 = body2.linvel();

      const v1n = v1.x * normal[0] + v1.y * normal[1] + v1.z * normal[2];
      const v2n = v2.x * normal[0] + v2.y * normal[1] + v2.z * normal[2];
      const relVn = v2n - v1n;

      // 在外壳范围内清零法向相对速度
      if (Math.abs(relVn) > 1e-12) {
        const avgVn = (v1n + v2n) / 2;

        body1.setLinvel({
          x: v1.x + (avgVn - v1n) * normal[0],
          y: v1.y + (avgVn - v1n) * normal[1],
          z: v1.z + (avgVn - v1n) * normal[2]
        }, true);

        body2.setLinvel({
          x: v2.x + (avgVn - v2n) * normal[0],
          y: v2.y + (avgVn - v2n) * normal[1],
          z: v2.z + (avgVn - v2n) * normal[2]
        }, true);
      }
    }
  }

  step(magnets, dt, rotateMoments) {
    const { forces, torques } = this.calcForces(magnets); // 1. 计算磁力
    const contacts = this.getContacts(magnets); // 2. 接触检测
    const constrainedForces = this.computeConstrainedForces(forces, contacts); // 3. 约束力
    this.applyForces(magnets, constrainedForces); // 4. 施加力
    this.applyShellAbsorption(magnets, contacts); // 5. 吸能（在积分前）
    this.world.integrationParameters.dt = dt; // 6. Rapier 积分
    this.world.step();
    // 7. 再次吸能和修正（积分后可能产生新穿透）
    const contactsAfter = this.getContacts(magnets);
    this.applyShellAbsorption(magnets, contactsAfter);
    // 8. 更新磁矩
    if (rotateMoments) {
      for (const mag of magnets) {
        const m = this.moments.get(mag.id);
        const body = this.bodies.get(mag.id);
        if (!body || !m) continue;

        const omega = body.angvel();
        const omegaArr = [omega.x, omega.y, omega.z];
        const idx = magnets.findIndex(x => x.id === mag.id);

        const result = this.ball.applyTorque(m, omegaArr, torques[idx], dt);
        this.moments.set(mag.id, result.m);
      }
    }
    // 9. 返回状态
    return this.readFromRapier(magnets, forces, torques);
  }

  readFromRapier(magnets, forces, torques) {
    return magnets.map((mag, i) => {
      const body = this.bodies.get(mag.id);
      if (!body) return mag;

      const pos = body.translation();
      const vel = body.linvel();
      const omega = body.angvel();
      const m = this.moments.get(mag.id);

      return {
        ...mag,
        pos: [pos.x, pos.y, pos.z],
        vel: [vel.x, vel.y, vel.z],
        omega: [omega.x, omega.y, omega.z],
        m: m || mag.m,
        f: forces?.[i] || [0, 0, 0],
        tau: torques?.[i] || [0, 0, 0]
      };
    });
  }

  reset() {
    for (const body of this.bodies.values()) {
      this.world.removeRigidBody(body);
    }
    this.bodies.clear();
    this.moments.clear();
    this.contactStates.clear();
  }
}
