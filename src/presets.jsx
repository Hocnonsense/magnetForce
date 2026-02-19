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

// Presets
export const PRESETS = {
  pair: () => [
    { pos: [-1, 0, 0], m: [1, 0, 0], color: 0xff4444 },
    { pos: [1, 0, 0], m: [1, 0, 0], color: 0x4444ff }
  ],
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
