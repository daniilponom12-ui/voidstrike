// Гранаты: общие параметры и физика (одинаковая на сервере и у клиентов).
import { rayWorld, hitNormal, BOUNDS } from './map.js';

export const NADES = {
  frag:  { id: 'frag',  price: 300, max: 1, fuse: 1.9, radius: 7.5, dmg: 125 },
  flash: { id: 'flash', price: 200, max: 2, fuse: 1.5, radius: 38 },
  smoke: { id: 'smoke', price: 300, max: 1, fuse: 1.6, radius: 4.4, dur: 17 },
};
export const NADE_IDS = Object.keys(NADES);
export const NADE_SPEED = 20;
const G = 18, STEP = 1 / 60, R = 0.1;

/** n = {x,y,z,vx,vy,vz,t}; продвигает на dt (фиксированными шагами через n.acc) */
export function stepNade(n, dt) {
  n.acc = (n.acc || 0) + dt;
  let guard = 0;
  while (n.acc >= STEP && guard++ < 12) { n.acc -= STEP; sub(n, STEP); }
}
function sub(n, dt) {
  n.t += dt;
  n.vy -= G * dt;
  const mx = n.vx * dt, my = n.vy * dt, mz = n.vz * dt, dist = Math.hypot(mx, my, mz);
  if (dist < 1e-6) return;
  const dx = mx / dist, dy = my / dist, dz = mz / dist;
  const t = rayWorld(n.x, n.y, n.z, dx, dy, dz, dist + R);
  if (t < dist + R) {
    const nx = hitNormal[0], ny = hitNormal[1], nz = hitNormal[2];
    const safe = Math.max(0, t - R);
    n.x += dx * safe; n.y += dy * safe; n.z += dz * safe;
    const vn = n.vx * nx + n.vy * ny + n.vz * nz;
    const e = ny > 0.5 ? 0.38 : 0.5, fr = ny > 0.5 ? 0.72 : 0.85;
    // нормальная и касательная составляющие
    let tx = n.vx - vn * nx, ty = n.vy - vn * ny, tz = n.vz - vn * nz;
    n.vx = tx * fr - vn * e * nx; n.vy = ty * fr - vn * e * ny; n.vz = tz * fr - vn * e * nz;
    if (ny > 0.5 && Math.abs(n.vy) < 1.2) n.vy = 0;
    if (n.y < R) n.y = R;
  } else { n.x += mx; n.y += my; n.z += mz; }
  // силовое поле по краям палубы
  const bx = BOUNDS.x - R, bz = BOUNDS.z - R;
  if (n.x > bx) { n.x = bx; n.vx = -Math.abs(n.vx) * 0.5; } else if (n.x < -bx) { n.x = -bx; n.vx = Math.abs(n.vx) * 0.5; }
  if (n.z > bz) { n.z = bz; n.vz = -Math.abs(n.vz) * 0.5; } else if (n.z < -bz) { n.z = -bz; n.vz = Math.abs(n.vz) * 0.5; }
  if (n.y <= R + 0.001) { // качение по полу
    n.y = Math.max(n.y, R);
    const f = Math.exp(-2.6 * dt); n.vx *= f; n.vz *= f;
    if (n.vy < 0) n.vy = 0;
  }
}
