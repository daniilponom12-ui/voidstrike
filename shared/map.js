// Карта «Хелиос» — орбитальная палуба. Общий код: коллизии, лучи, спавны.
export const BOUNDS = { x: 48, z: 60 };
export const PLAYER = { r: 0.38, h: 1.8, hCrouch: 1.25, eye: 1.62, eyeCrouch: 1.1, step: 0.62 };

// ---------- карты ----------
import { MAPDEFS, SIZE } from './maps.js';
export const MAPS = MAPDEFS;
export const MAP_IDS = Object.keys(MAPS);

export const BOXES = [];
export const SITES = [];
export const SPAWNS = { team: [[], []], all: [] };
export let currentMap = '';

function full(b) {
  const w = b.x1 - b.x0, d = b.z1 - b.z0;
  return { x0: b.x0, x1: b.x1, z0: b.z0, z1: b.z1, y0: b.y0 || 0, y1: b.y1, kind: b.kind, cx: (b.x0 + b.x1) / 2, cz: (b.z0 + b.z1) / 2, w, d, h: b.y1 - (b.y0 || 0) };
}
function free(x, z) {
  for (const b of BOXES) if (b.y0 < 0.5 && x + 0.7 > b.x0 && x - 0.7 < b.x1 && z + 0.7 > b.z0 && z - 0.7 < b.z1) return false;
  return true;
}
/** Переключает активную карту (меняет общие массивы на месте — все импорты видят новую карту) */
export function setMap(id) {
  if (!MAPS[id]) id = 'helios';
  if (id === currentMap) return id;
  const M = MAPS[id];
  currentMap = id;
  BOXES.length = 0; SITES.length = 0; SPAWNS.team[0].length = 0; SPAWNS.team[1].length = 0; SPAWNS.all.length = 0;
  const raw = []; M.build(makeApi(raw));
  for (const b of raw) BOXES.push(full(b));
  for (const s of M.sites) SITES.push({ ...s });
  for (const x of M.spawnX) {
    for (const dz of [0, 3]) {
      if (free(x, M.spawnZ - dz)) SPAWNS.team[0].push({ x, z: M.spawnZ - dz, yaw: 0 });
      if (free(x, -(M.spawnZ - dz))) SPAWNS.team[1].push({ x, z: -(M.spawnZ - dz), yaw: Math.PI });
    }
  }
  SPAWNS.all.push(...SPAWNS.team[0], ...SPAWNS.team[1]);
  for (const [x, z] of M.extraSpawns) if (free(x, z)) SPAWNS.all.push({ x, z, yaw: z > 0 ? 0 : Math.PI });
  return id;
}
import { makeApi } from './maps.js';
setMap('helios');

// ---------- лучи ----------
export const hitNormal = [0, 1, 0];

/** Расстояние до ближайшей поверхности (стены/пол) вдоль луча, либо maxT */
export function rayWorld(ox, oy, oz, dx, dy, dz, maxT = 1e9) {
  let best = maxT;
  hitNormal[0] = 0; hitNormal[1] = 1; hitNormal[2] = 0;
  if (dy < -1e-9) {
    const t = -oy / dy;
    if (t > 0 && t < best) { best = t; hitNormal[0] = 0; hitNormal[1] = 1; hitNormal[2] = 0; }
  }
  for (let i = 0; i < BOXES.length; i++) {
    const b = BOXES[i];
    let tmin = 0, tmax = best, nx = 0, ny = 0, nz = 0, ok = true;
    // X
    if (Math.abs(dx) < 1e-9) { if (ox < b.x0 || ox > b.x1) continue; }
    else {
      let t1 = (b.x0 - ox) / dx, t2 = (b.x1 - ox) / dx, s = -1;
      if (t1 > t2) { const t = t1; t1 = t2; t2 = t; s = 1; }
      if (t1 > tmin) { tmin = t1; nx = s; ny = 0; nz = 0; }
      if (t2 < tmax) tmax = t2;
      if (tmin > tmax) continue;
    }
    // Y
    if (Math.abs(dy) < 1e-9) { if (oy < b.y0 || oy > b.y1) continue; }
    else {
      let t1 = (b.y0 - oy) / dy, t2 = (b.y1 - oy) / dy, s = -1;
      if (t1 > t2) { const t = t1; t1 = t2; t2 = t; s = 1; }
      if (t1 > tmin) { tmin = t1; nx = 0; ny = s; nz = 0; }
      if (t2 < tmax) tmax = t2;
      if (tmin > tmax) continue;
    }
    // Z
    if (Math.abs(dz) < 1e-9) { if (oz < b.z0 || oz > b.z1) continue; }
    else {
      let t1 = (b.z0 - oz) / dz, t2 = (b.z1 - oz) / dz, s = -1;
      if (t1 > t2) { const t = t1; t1 = t2; t2 = t; s = 1; }
      if (t1 > tmin) { tmin = t1; nx = 0; ny = 0; nz = s; }
      if (t2 < tmax) tmax = t2;
      if (tmin > tmax) continue;
    }
    if (ok && tmin < best && tmax >= 0) { best = tmin; hitNormal[0] = nx; hitNormal[1] = ny; hitNormal[2] = nz; }
  }
  return best;
}

/** Есть ли препятствие между двумя точками */
export function blocked(ax, ay, az, bx, by, bz) {
  const dx = bx - ax, dy = by - ay, dz = bz - az;
  const len = Math.hypot(dx, dy, dz);
  if (len < 1e-6) return false;
  return rayWorld(ax, ay, az, dx / len, dy / len, dz / len, len) < len - 0.05;
}

// ---------- физика ----------
const EPS = 1e-4;
/** p,v — {x,y,z}; возвращает true, если стоит на земле. Двигает p, правит v. */
export function moveEntity(p, v, dt, h = PLAYER.h) {
  const r = PLAYER.r, STEP = PLAYER.step;
  // X
  p.x += v.x * dt;
  for (const b of BOXES) {
    if (p.x + r > b.x0 && p.x - r < b.x1 && p.z + r > b.z0 && p.z - r < b.z1 && p.y + h > b.y0 && p.y < b.y1 - EPS) {
      if (b.y1 - p.y <= STEP) p.y = b.y1;
      else if (v.x > 0) { p.x = b.x0 - r - EPS; v.x = 0; } else { p.x = b.x1 + r + EPS; v.x = 0; }
    }
  }
  // Z
  p.z += v.z * dt;
  for (const b of BOXES) {
    if (p.x + r > b.x0 && p.x - r < b.x1 && p.z + r > b.z0 && p.z - r < b.z1 && p.y + h > b.y0 && p.y < b.y1 - EPS) {
      if (b.y1 - p.y <= STEP) p.y = b.y1;
      else if (v.z > 0) { p.z = b.z0 - r - EPS; v.z = 0; } else { p.z = b.z1 + r + EPS; v.z = 0; }
    }
  }
  // границы (силовое поле)
  const bx = BOUNDS.x - r, bz = BOUNDS.z - r;
  if (p.x > bx) { p.x = bx; v.x = 0; } else if (p.x < -bx) { p.x = -bx; v.x = 0; }
  if (p.z > bz) { p.z = bz; v.z = 0; } else if (p.z < -bz) { p.z = -bz; v.z = 0; }
  // Y
  const prevY = p.y;
  p.y += v.y * dt;
  let ground = false;
  if (p.y <= 0) { p.y = 0; if (v.y < 0) v.y = 0; ground = true; }
  for (const b of BOXES) {
    if (p.x + r > b.x0 && p.x - r < b.x1 && p.z + r > b.z0 && p.z - r < b.z1) {
      if (v.y <= 0 && prevY >= b.y1 - 0.02 && p.y <= b.y1 + 0.001) { p.y = b.y1; v.y = 0; ground = true; }
      else if (v.y > 0 && p.y + h > b.y0 && prevY + h <= b.y0 + 0.02) { p.y = b.y0 - h; v.y = 0; }
    }
  }
  return ground;
}

/** Навигационная сетка 1×1 м для ботов */
export const NAV = { cell: 1, w: 96, h: 120, ox: -48, oz: -60 };
const navCache = {};
/** Кэшированная сетка проходимости для активной карты */
export function getNav() { return navCache[currentMap] || (navCache[currentMap] = buildNav()); }
export function buildNav() {
  const { w, h, ox, oz } = NAV;
  const blockedCells = new Uint8Array(w * h);
  for (let gz = 0; gz < h; gz++) for (let gx = 0; gx < w; gx++) {
    const cx = ox + gx + 0.5, cz = oz + gz + 0.5, m = 0.5;
    let bl = 0;
    if (Math.abs(cx) > BOUNDS.x - 0.5 || Math.abs(cz) > BOUNDS.z - 0.5) bl = 1;
    for (const b of BOXES) {
      if (b.y0 > 0.5 || b.kind === 'step' || (b.kind === 'platform' && b.h <= 0.62)) continue;
      if (cx + m > b.x0 && cx - m < b.x1 && cz + m > b.z0 && cz - m < b.z1) { bl = 1; break; }
    }
    blockedCells[gz * w + gx] = bl;
  }
  return blockedCells;
}
