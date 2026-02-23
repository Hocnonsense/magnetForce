import { MU_0 } from '../physics/magnet-force';

export const DEFAULT_WORLD_PARAMS = {
  radius: 2.5e-3, // 2R = 5mm
  // 一个 N35 的磁球, 充分充磁后表面磁感应强度约为 1.2T. 这里考虑小磁球充能不完全
  br: 1.2,        // Tesla
  mass: 0.5e-3,   // kg
  shellThickness: 0.01, // % of radius
  gravity: -9.81,
  damping: 0.3,
  friction: 0.3,
};

export class WorldParams {
  constructor(init = {}) {
    const p = { ...DEFAULT_WORLD_PARAMS, ...init };
    this.radius = p.radius;
    this.br = p.br;
    this.mass = p.mass;
    this.shellThickness = p.shellThickness * p.radius;
    this.gravity = p.gravity;
    this.damping = p.damping;
    this.friction = p.friction;
    this.mMag = p.br / MU_0;
    this.inertia = 0.4 * p.mass * p.radius ** 2;
    this.DIST = p.radius * 2;
  }
}
