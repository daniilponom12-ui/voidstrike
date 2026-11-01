// ИИ ботов: навигация по сетке (A*), восприятие, прицеливание, стрельба, задачи режима.
import { NAV, getNav, moveEntity, blocked, SITES, SPAWNS, BOUNDS, PLAYER } from '../shared/map.js';
import { WEAPONS } from '../shared/weapons.js';

let blockedCells = null;
const DIFF = {
  easy: { err: 6.5, react: 0.55, turn: 4.0, burst: 0.5, speed: 0.85 },
  normal: { err: 3.4, react: 0.32, turn: 7.0, burst: 0.8, speed: 0.95 },
  hard: { err: 1.5, react: 0.15, turn: 12.0, burst: 1.2, speed: 1.0 },
};

const idx = (gx, gz) => gz * NAV.w + gx;
const toG = (x, z) => [Math.max(0, Math.min(NAV.w - 1, Math.floor(x - NAV.ox))), Math.max(0, Math.min(NAV.h - 1, Math.floor(z - NAV.oz)))];

function nearestFree(gx, gz) {
  if (!blockedCells[idx(gx, gz)]) return [gx, gz];
  for (let r = 1; r < 6; r++) for (let dx = -r; dx <= r; dx++) for (let dz = -r; dz <= r; dz++) {
    const x = gx + dx, z = gz + dz;
    if (x >= 0 && z >= 0 && x < NAV.w && z < NAV.h && !blockedCells[idx(x, z)]) return [x, z];
  }
  return [gx, gz];
}

// A* на сетке 8 направлений
function findPath(sx, sz, ex, ez) {
  blockedCells = getNav();
  let [a, b] = nearestFree(...toG(sx, sz)), [c, d] = nearestFree(...toG(ex, ez));
  const W = NAV.w, N = W * NAV.h, start = idx(a, b), goal = idx(c, d);
  if (start === goal) return [[ex, ez]];
  const g = new Float32Array(N).fill(1e9), from = new Int32Array(N).fill(-1), closed = new Uint8Array(N);
  const open = [[0, start]]; g[start] = 0;
  const h = (i) => { const x = i % W, z = (i / W) | 0, dx = Math.abs(x - c), dz = Math.abs(z - d); return Math.max(dx, dz) + 0.414 * Math.min(dx, dz); };
  let iter = 0;
  while (open.length && iter++ < 16000) {
    let bi = 0; for (let i = 1; i < open.length; i++) if (open[i][0] < open[bi][0]) bi = i;
    const [, cur] = open[bi]; open[bi] = open[open.length - 1]; open.pop();
    if (cur === goal) break;
    if (closed[cur]) continue; closed[cur] = 1;
    const cx = cur % W, cz = (cur / W) | 0;
    for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
      if (!dx && !dz) continue;
      const nx = cx + dx, nz = cz + dz;
      if (nx < 0 || nz < 0 || nx >= W || nz >= NAV.h) continue;
      const ni = idx(nx, nz);
      if (blockedCells[ni] || closed[ni]) continue;
      if (dx && dz && (blockedCells[idx(cx + dx, cz)] || blockedCells[idx(cx, cz + dz)])) continue;
      const ng = g[cur] + (dx && dz ? 1.414 : 1);
      if (ng < g[ni]) { g[ni] = ng; from[ni] = cur; open.push([ng + h(ni), ni]); }
    }
  }
  if (from[goal] < 0) return null;
  const path = []; let cur = goal;
  while (cur !== start && cur >= 0) { path.push([NAV.ox + (cur % W) + 0.5, NAV.oz + ((cur / W) | 0) + 0.5]); cur = from[cur]; }
  path.reverse();
  return path;
}

const rnd = (a, b) => a + Math.random() * (b - a);
const norm = (a) => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };

export class BotAI {
  /** ent — запись игры; game — интерфейс: ents, localEnt, matchInfo, hitscanFrom(), fireBot(), sendAct() */
  constructor(ent, game, diff) {
    this.e = ent; this.game = game; this.cfg = DIFF[diff] || DIFF.normal;
    this.p = { x: ent.pos.x, y: ent.pos.y, z: ent.pos.z }; this.v = { x: 0, y: 0, z: 0 };
    this.yaw = ent.yaw; this.pitch = 0; this.path = null; this.pi = 0; this.goal = null; this.replanT = 0;
    this.target = null; this.seenT = 0; this.reactT = 0; this.lastSeen = null; this.strafe = Math.random() < 0.5 ? 1 : -1; this.strafeT = rnd(0.5, 1.2);
    this.fireT = 0; this.mag = 0; this.reloadT = 0; this.burst = 0; this.pause = 0; this.stuckT = 0; this.lastPos = { x: this.p.x, z: this.p.z };
    this.perceiveT = Math.random() * 0.2; this.acting = false; this.wanderT = 0; this.ground = true; this.wid = 'nova'; this.crouch = false;
    this.moveSpeed = 0; this.flashed = false; this.nadeT = 2 + Math.random() * 4; this.blindUntil = 0;
  }
  resetAt(pos, yaw, wid) {
    this.p = { x: pos[0], y: pos[1], z: pos[2] }; this.v = { x: 0, y: 0, z: 0 }; this.yaw = yaw; this.pitch = 0; this.path = null; this.goal = null;
    this.target = null; this.lastSeen = null; this.setWeapon(wid); this.acting = false; this.reactT = 0; this.flashed = false;
  }
  setWeapon(wid) { this.wid = wid; const w = WEAPONS[wid]; this.mag = w.mag; this.reloadT = 0; }
  eye() { return this.p.y + 1.55; }

  think(dt) {
    const e = this.e, g = this.game;
    if (!e.alive) return;
    const w = WEAPONS[this.wid], info = g.matchInfo();
    if (info.frozen) { this.v.x = this.v.z = 0; this.p.y = 0; return; }
    // восприятие
    this.nadeT -= dt;
    this.perceiveT -= dt;
    if (this.perceiveT <= 0) { this.perceiveT = 0.12; this.perceive(); }
    // цель
    let moveDirX = 0, moveDirZ = 0, wantMove = true;
    if (this.target && this.target.alive) {
      const t = this.target, tp = t.pos;
      const dx = tp.x - this.p.x, dz = tp.z - this.p.z, dist = Math.hypot(dx, dz);
      const aimY = tp.y + (Math.random() < 0.0 ? 1.6 : 1.45);
      const wantYaw = Math.atan2(-dx, -dz), wantPitch = Math.atan2(aimY - this.eye(), dist);
      const dy = norm(wantYaw - this.yaw), dp = wantPitch - this.pitch;
      const maxT = this.cfg.turn * dt;
      this.yaw += Math.max(-maxT, Math.min(maxT, dy)); this.pitch += Math.max(-maxT, Math.min(maxT, dp));
      this.reactT -= dt;
      const aimErr = Math.hypot(dy, dp);
      const ideal = w.id === 'scatter' ? 8 : w.id === 'zenith' ? 40 : w.melee ? 1.6 : 18;
      this.maybeThrow(dist, tp);
      // стрельба
      if (this.reactT <= 0 && this.pause <= 0 && aimErr < 0.12 && !w.melee || (w.melee && dist < 2.0 && this.reactT <= 0)) this.tryFire(dt, dist);
      // движение
      this.strafeT -= dt; if (this.strafeT <= 0) { this.strafe = -this.strafe; this.strafeT = rnd(0.5, 1.3); }
      const fwd = dist > ideal + 4 ? 1 : dist < ideal - 5 && !w.melee ? -0.6 : 0;
      const fx = -Math.sin(this.yaw), fz = -Math.cos(this.yaw), rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw);
      moveDirX = fx * fwd + rx * this.strafe * (w.melee ? 0.3 : 0.9); moveDirZ = fz * fwd + rz * this.strafe * (w.melee ? 0.3 : 0.9);
      if (w.melee) { moveDirX = fx; moveDirZ = fz; }
      this.pause -= dt;
    } else {
      // нет цели: идём по задаче
      if (this.reloadT <= 0 && this.mag < w.mag * 0.5 && !w.melee) this.startReload();
      this.followGoal(dt);
      if (this.pathDir) { moveDirX = this.pathDir[0]; moveDirZ = this.pathDir[1]; }
      else wantMove = false;
      if (this.lastSeen && this.seenT > 0) { // осматриваемся в сторону последней позиции
        const dx = this.lastSeen.x - this.p.x, dz = this.lastSeen.z - this.p.z;
        const wy = Math.atan2(-dx, -dz); this.yaw += Math.max(-4 * dt, Math.min(4 * dt, norm(wy - this.yaw)));
      } else if (this.pathDir) {
        const wy = Math.atan2(-moveDirX, -moveDirZ); this.yaw += Math.max(-6 * dt, Math.min(6 * dt, norm(wy - this.yaw)));
        this.pitch += (0 - this.pitch) * Math.min(1, dt * 4);
      }
    }
    this.seenT -= dt;
    // перезарядка
    if (this.reloadT > 0) { this.reloadT -= dt; if (this.reloadT <= 0) this.mag = w.mag; }
    this.fireT -= dt;
    // физика
    const len = Math.hypot(moveDirX, moveDirZ);
    const sp = 5.2 * w.speed * this.cfg.speed * (this.acting ? 0 : 1);
    const tx = len > 0.01 && wantMove ? (moveDirX / len) * sp : 0, tz = len > 0.01 && wantMove ? (moveDirZ / len) * sp : 0;
    const a = Math.min(1, dt * 10);
    this.v.x += (tx - this.v.x) * a; this.v.z += (tz - this.v.z) * a;
    this.v.y -= 24 * dt;
    this.ground = moveEntity(this.p, this.v, dt);
    this.moveSpeed = Math.hypot(this.v.x, this.v.z);
    // застревание
    this.stuckT += dt;
    if (this.stuckT > 0.6) {
      const moved = Math.hypot(this.p.x - this.lastPos.x, this.p.z - this.lastPos.z);
      if (moved < 0.25 && len > 0.01 && !this.acting) { this.path = null; this.strafe = -this.strafe; if (this.ground && Math.random() < 0.5) this.v.y = 7.6; }
      this.lastPos = { x: this.p.x, z: this.p.z }; this.stuckT = 0;
    }
  }

  perceive() {
    const g = this.game, me = this.e;
    const info = g.matchInfo();
    let best = null, bd = 1e9;
    if (g.now() < this.blindUntil) { if (this.target) { this.lastSeen = { x: this.target.pos.x, z: this.target.pos.z }; this.target = null; this.path = null; } return; }
    for (const o of g.ents.values()) {
      if (o === me || !o.alive || (info.teams && o.team === me.team)) continue;
      if (info.protectedUntil && o.protect > g.now()) continue;
      const dx = o.pos.x - this.p.x, dz = o.pos.z - this.p.z, d = Math.hypot(dx, dz);
      if (d > 70) continue;
      const wy = Math.atan2(-dx, -dz), fov = Math.abs(norm(wy - this.yaw));
      const inView = fov < 1.15 || d < 7 || (this.target === o);
      if (!inView) continue;
      if (blocked(this.p.x, this.eye(), this.p.z, o.pos.x, o.pos.y + 1.4, o.pos.z) && blocked(this.p.x, this.eye(), this.p.z, o.pos.x, o.pos.y + 0.6, o.pos.z)) continue;
      if (g.smokeBlocked(this.p.x, this.eye(), this.p.z, o.pos.x, o.pos.y + 1.2, o.pos.z)) continue;
      if (d < bd) { bd = d; best = o; }
    }
    if (best) {
      if (this.target !== best) { this.reactT = this.cfg.react * rnd(0.8, 1.3); this.pause = 0; }
      this.target = best; this.seenT = 2.5; this.lastSeen = { x: best.pos.x, z: best.pos.z };
    } else if (this.target) {
      this.lastSeen = { x: this.target.pos.x, z: this.target.pos.z }; this.target = null; this.path = null;
      this.throwAtSpot(this.lastSeen.x, this.lastSeen.z);
    }
  }

  /** бросок осколочной в место, где враг скрылся за укрытием */
  throwAtSpot(x, z) {
    const inv = this.e.nades || {}, info = this.game.matchInfo();
    if (this.nadeT > 0 || info.frozen || !(inv.frag > 0)) return;
    const dist = Math.hypot(x - this.p.x, z - this.p.z);
    if (dist < 8 || dist > 22 || Math.random() > 0.4) return;
    this.nadeT = rnd(4, 8);
    const yaw = Math.atan2(-(x - this.p.x), -(z - this.p.z)), pitch = 0.5 * Math.asin(Math.min(0.95, 18 * dist / 400)) + 0.05;
    this.game.botThrow(this.e, this, 'frag', yaw, pitch);
  }
  /** светошумовая перед установкой заряда */
  flashSite(site) {
    const inv = this.e.nades || {};
    if (this.nadeT > 0 || !(inv.flash > 0) || this.flashed) return;
    const dist = Math.hypot(site.x - this.p.x, site.z - this.p.z);
    if (dist < 9 || dist > 21) return;
    this.flashed = true; this.nadeT = 3;
    const yaw = Math.atan2(-(site.x - this.p.x), -(site.z - this.p.z)), pitch = 0.5 * Math.asin(Math.min(0.95, 18 * dist / 400)) + 0.1;
    this.yaw = yaw; this.game.botThrow(this.e, this, 'flash', yaw, pitch);
  }

  /** бросок гранаты в видимую цель */
  maybeThrow(dist, tp) {
    if (this.nadeT > 0) return;
    const inv = this.e.nades || {}, g = this.game, info = g.matchInfo();
    this.nadeT = rnd(3.5, 7);
    if (info.frozen || dist < 5 || dist > 23) return;
    let k = null;
    if (inv.frag > 0 && dist > 9 && Math.random() < 0.55) k = 'frag';
    else if (inv.flash > 0 && Math.random() < 0.45) k = 'flash';
    else if (inv.smoke > 0 && info.rounds && Math.random() < 0.18) k = 'smoke';
    if (!k) return;
    const R = k === 'smoke' ? dist * 0.55 : dist, dx = tp.x - this.p.x, dz = tp.z - this.p.z;
    const yaw = Math.atan2(-dx, -dz) + (Math.random() - 0.5) * 0.08;
    const pitch = 0.5 * Math.asin(Math.min(0.95, 18 * R / 400));
    g.botThrow(this.e, this, k, yaw, pitch);
  }

  startReload() { const w = WEAPONS[this.wid]; if (w.melee || this.reloadT > 0) return; this.reloadT = w.reload; this.game.botSound(this.e, 'reload'); }

  tryFire(dt, dist) {
    const w = WEAPONS[this.wid];
    if (this.reloadT > 0 || this.fireT > 0) return;
    if (!w.melee && this.mag <= 0) { this.startReload(); return; }
    this.fireT = w.melee ? w.interval * 1.4 : 60 / w.rpm * (w.auto ? 1 : rnd(1.6, 2.6));
    if (!w.melee) this.mag--;
    // ошибка прицела
    const moving = this.moveSpeed > 1 ? 1.4 : 1;
    const errDeg = this.cfg.err * (1 + dist / 35) * moving * (w.auto ? 1 : 0.8) + w.spread;
    const er = errDeg * Math.PI / 180, ry = (Math.random() + Math.random() - 1) * er, rp = (Math.random() + Math.random() - 1) * er;
    this.game.fireBot(this.e, this, this.yaw + ry, this.pitch + rp, w);
    this.burst++;
    if (w.auto && this.burst >= 3 + ((Math.random() * 6 * this.cfg.burst) | 0)) { this.burst = 0; this.pause = rnd(0.15, 0.5); }
    if (!w.auto) this.pause = rnd(0.05, 0.25);
  }

  // ---- задачи ----
  chooseGoal() {
    const g = this.game, info = g.matchInfo(), e = this.e;
    if (info.rounds) {
      if (e.team === 0) { // рейдеры
        if (info.bomb && info.bomb.pos) { const s = info.bomb.pos; const a = Math.random() * 6.28; return { x: s[0] + Math.cos(a) * 6, z: s[2] + Math.sin(a) * 6, kind: 'guardbomb' }; }
        if (!this.site) this.site = SITES[(Math.random() * SITES.length) | 0];
        return { x: this.site.x + rnd(-1.5, 1.5), z: this.site.z + rnd(-1.5, 1.5), kind: 'plant' };
      }
      if (info.bomb && info.bomb.pos && (info.bomb.state === 'planted' || info.bomb.state === 'defusing')) return { x: info.bomb.pos[0], z: info.bomb.pos[2], kind: 'defuse' };
      const s = SITES[(Math.random() * SITES.length) | 0]; const a = Math.random() * 6.28;
      return { x: s.x + Math.cos(a) * 6, z: s.z + Math.sin(a) * 6, kind: 'hold' };
    }
    // дезматч: к врагу или случайная точка
    if (Math.random() < 0.4) {
      const foes = [...g.ents.values()].filter((o) => o !== e && o.alive && (!info.teams || o.team !== e.team));
      if (foes.length) { const f = foes[(Math.random() * foes.length) | 0]; return { x: f.pos.x, z: f.pos.z, kind: 'hunt' }; }
    }
    const sp = SPAWNS.all[(Math.random() * SPAWNS.all.length) | 0];
    return { x: sp.x, z: sp.z, kind: 'roam' };
  }

  followGoal(dt) {
    const info = this.game.matchInfo();
    this.pathDir = null;
    // установка/разминирование
    if (info.rounds && this.goal && (this.goal.kind === 'plant' || this.goal.kind === 'defuse')) {
      const d = Math.hypot(this.goal.x - this.p.x, this.goal.z - this.p.z);
      const want = this.goal.kind === 'plant' ? (!info.bomb || info.bomb.state === 'none' || info.bomb.state === 'planting') : (info.bomb && (info.bomb.state === 'planted' || info.bomb.state === 'defusing'));
      if (!want && this.goal.kind !== 'hold') { this.goal = null; this.setAct(false); }
      else if (d < (this.goal.kind === 'plant' ? 2.5 : 1.6)) { this.setAct(true); return; }
    } else this.setAct(false);
    if (this.goal && this.goal.kind === 'plant' && info.rounds) this.flashSite(this.goal);
    this.wanderT -= dt;
    if (!this.goal || this.wanderT <= 0) {
      if (!this.goal || this.goal.kind === 'roam' || this.goal.kind === 'hunt' || this.goal.kind === 'hold' || this.goal.kind === 'guardbomb' || this.wanderT <= -3) {
        this.goal = this.chooseGoal(); this.path = null;
      }
      this.wanderT = rnd(6, 12);
    }
    if (!this.goal) return;
    const gd = Math.hypot(this.goal.x - this.p.x, this.goal.z - this.p.z);
    if (gd < 1.2 && this.goal.kind !== 'plant' && this.goal.kind !== 'defuse') { this.goal = null; this.wanderT = 0; return; }
    this.replanT -= dt;
    if (!this.path || this.replanT <= 0) {
      this.path = findPath(this.p.x, this.p.z, this.goal.x, this.goal.z); this.pi = 0; this.replanT = this.goal.kind === 'hunt' ? 1.5 : 4;
      if (!this.path) { this.goal = null; return; }
    }
    // сглаживание: прыгаем к самой дальней видимой точке
    while (this.pi < this.path.length - 1) {
      const n = this.path[Math.min(this.path.length - 1, this.pi + 3)];
      if (!blocked(this.p.x, 0.5, this.p.z, n[0], 0.5, n[1]) && Math.hypot(n[0] - this.p.x, n[1] - this.p.z) < 7) this.pi = Math.min(this.path.length - 1, this.pi + 1); else break;
    }
    const wp = this.path[Math.min(this.pi, this.path.length - 1)];
    const dx = wp[0] - this.p.x, dz = wp[1] - this.p.z, d = Math.hypot(dx, dz);
    if (d < 0.7) { if (this.pi < this.path.length - 1) this.pi++; else if (this.goal.kind !== 'plant' && this.goal.kind !== 'defuse') { this.goal = null; } }
    else this.pathDir = [dx / d, dz / d];
  }

  setAct(on) {
    if (this.acting === on) return;
    this.acting = on; this.game.sendAct(this.e, on);
  }
}
