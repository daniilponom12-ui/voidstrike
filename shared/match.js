// Логика матча: одна и та же и на сервере, и в офлайн-режиме на клиенте.
import { WEAPONS, GG_LADDER, PRIMARIES, SECONDARIES, PRICES } from './weapons.js';
import { SPAWNS, SITES, BOUNDS, blocked, setMap } from './map.js';
import { NADES, NADE_SPEED, stepNade } from './nades.js';

export const MODES = {
  dm: { id: 'dm', teams: false, timeLimit: 300, scoreLimit: 25, respawn: 2.5, maxPlayers: 10 },
  tdm: { id: 'tdm', teams: true, timeLimit: 360, scoreLimit: 35, respawn: 2.5, maxPlayers: 10 },
  gg: { id: 'gg', teams: false, timeLimit: 420, respawn: 2, maxPlayers: 10 },
  bomb: { id: 'bomb', teams: true, rounds: true, roundsToWin: 6, half: 5, freeze: 10, roundTime: 120, bombTime: 40, plantTime: 3, defuseTime: 6, roundEnd: 5, maxPlayers: 10 },
};

const BOT_NAMES = ['Нова', 'Орион', 'Кассиопея', 'Вега', 'Сириус', 'Лайка', 'Гагарин', 'Тау', 'Андромеда', 'Квазар', 'Пульсар', 'Комета', 'Зенит', 'Титан', 'Фобос', 'Деймос'];
const now = () => (typeof performance !== 'undefined' ? performance.now() : Date.now()) / 1000;

export class Match {
  constructor(mode, emit, opts = {}) {
    this.mode = mode;
    this.cfg = MODES[mode];
    this.emit = emit; // (msg, toId?)
    this.ents = new Map();
    this.botTarget = opts.botTarget ?? 0;
    this.botSeq = 0;
    this.map = opts.map || 'helios';
    this.nades = []; this.nadeSeq = 0;
    this.reset();
  }

  reset() {
    this.t = 0;
    this.state = 'live'; // live | ended
    this.endsAt = 0;
    this.teamScore = [0, 0];
    this.round = 0;
    this.phase = 'live';
    this.phaseEnd = 0;
    this.bomb = { state: 'none' };
    this.lastSync = 0;
    this.lastActEmit = 0;
    this.timeLeftEnd = this.t + (this.cfg.timeLimit || 0);
    for (const e of this.ents.values()) {
      e.k = 0; e.d = 0; e.pts = 0; e.lvl = 0; e.alive = false; e.acting = false; this.resetEcon(e);
    }
    if (this.cfg.rounds) {
      this.phase = 'wait';
      this.phaseEnd = this.t + 1.5;
    } else {
      for (const e of this.ents.values()) e.respawnAt = this.t + 0.3;
    }
    this.clearNades();
    this.emit({ t: 'start', mode: this.mode });
  }

  econ(e) {
    if (e.money === undefined) { e.money = 800; e.keep = { p: null, s: 'pulsar' }; e.paid = { p: 0, s: 0 }; }
    if (!e.nades) e.nades = {};
    return e;
  }
  resetEcon(e) { e.money = 800; e.keep = { p: null, s: 'pulsar' }; e.paid = { p: 0, s: 0 }; e.nades = {}; }

  buy(id, w) {
    const e = this.ents.get(id), wp = WEAPONS[w];
    if (e && NADES[w]) return this.buyNade(e, w);
    if (!e || !this.cfg.rounds || !e.alive || this.phase !== 'freeze' || !wp || wp.melee || !(w in PRICES)) return false;
    this.econ(e);
    const slot = wp.slot === 1 ? 'p' : 's', price = PRICES[w];
    if (e.keep[slot] === w) return false;
    const refund = e.paid[slot];
    if (e.money + refund < price) return false;
    e.money += refund - price; e.paid[slot] = price; e.keep[slot] = w; e.w = e.keep.p || e.keep.s;
    this.emit({ t: 'equip', id, p: e.keep.p, s: e.keep.s, money: e.money });
    return true;
  }
  buyNade(e, k) {
    const c = NADES[k];
    if (!this.cfg.rounds || !e.alive || this.phase !== 'freeze') return false;
    this.econ(e);
    if ((e.nades[k] || 0) >= c.max || e.money < c.price) return false;
    e.money -= c.price; e.nades[k] = (e.nades[k] || 0) + 1;
    this.emitInv(e);
    return true;
  }
  emitInv(e) { this.emit({ t: 'inv', id: e.id, nades: { ...e.nades }, money: e.money | 0 }); }
  botBuy(e) {
    this.econ(e);
    const opts = ['nova', 'vortex', 'scatter', 'zenith', 'titan'].filter((w) => PRICES[w] <= e.money);
    if (e.money >= 3000 && Math.random() < 0.8) { const r = Math.random(); this.buy(e.id, r < 0.55 ? 'nova' : r < 0.75 && e.money >= 5200 ? 'titan' : 'zenith'); return; }
    if (opts.length && Math.random() < 0.7) this.buy(e.id, opts[(Math.random() * opts.length) | 0]);
    else if (e.money >= 500 && Math.random() < 0.4) this.buy(e.id, 'hawk');
    for (const k of ['frag', 'flash', 'smoke']) if (e.money >= NADES[k].price + 400 && Math.random() < 0.45) this.buy(e.id, k);
  }
  swapSides() {
    for (const e of this.ents.values()) { e.team = 1 - e.team; this.resetEcon(e); }
    this.teamScore = [this.teamScore[1], this.teamScore[0]];
    this.emit({ t: 'swap' });
    this.emitRoster();
  }

  humans() { let n = 0; for (const e of this.ents.values()) if (!e.bot) n++; return n; }

  pickTeam() {
    if (!this.cfg.teams) return -1;
    const c = [0, 0];
    for (const e of this.ents.values()) if (e.team >= 0) c[e.team]++;
    return c[0] <= c[1] ? 0 : 1;
  }

  addEntity({ id, name, bot = false, loadout }) {
    if (this.ents.has(id)) return this.ents.get(id);
    const e = {
      id, name: String(name || 'Pilot').slice(0, 16), bot, team: this.pickTeam(), hp: 100, alive: false,
      k: 0, d: 0, pts: 0, lvl: 0, loadout: { p: 'nova', s: 'pulsar' }, pos: [0, 0, 0], yaw: 0, w: 'nova',
      respawnAt: this.t + 0.3, protect: 0, acting: false, actT: 0, lastShot: {},
    };
    if (loadout) this.setLoadout(e, loadout);
    this.ents.set(id, e);
    this.emitRoster();
    if (this.cfg.rounds && (this.phase === 'freeze')) this.spawn(e);
    return e;
  }

  removeEntity(id) {
    if (!this.ents.delete(id)) return;
    if (this.bomb.actor === id) { this.bomb.actor = null; if (this.bomb.state === 'planting') this.bomb.state = 'none'; if (this.bomb.state === 'defusing') this.bomb.state = 'planted'; }
    this.emitRoster();
  }

  emitRoster() {
    const list = [];
    for (const e of this.ents.values()) list.push({ id: e.id, name: e.name, bot: e.bot, team: e.team });
    this.emit({ t: 'roster', list, mode: this.mode });
  }

  setLoadout(e, l) {
    if (!l) return;
    if (PRIMARIES.includes(l.p)) e.loadout.p = l.p;
    if (SECONDARIES.includes(l.s)) e.loadout.s = l.s;
  }

  /** Поддерживает число ботов так, чтобы всего было botTarget (минимум людей+ботов) */
  balanceBots() {
    const humans = this.humans();
    const bots = [...this.ents.values()].filter((e) => e.bot);
    const want = Math.max(0, this.botTarget - humans);
    let changed = false;
    while (bots.length > want) {
      // убираем бота из команды, где больше игроков, предпочитая мёртвых
      const cnt = [0, 0];
      for (const e of this.ents.values()) if (e.team >= 0) cnt[e.team]++;
      bots.sort((a, b) => (cnt[b.team] - cnt[a.team]) || ((a.alive ? 1 : 0) - (b.alive ? 1 : 0)));
      const b = bots.shift();
      this.ents.delete(b.id); changed = true;
    }
    while (bots.length < want && this.ents.size < this.cfg.maxPlayers) {
      const used = new Set([...this.ents.values()].map((e) => e.name));
      let name = BOT_NAMES.find((n) => !used.has(n)) || 'Бот' + this.botSeq;
      const pr = PRIMARIES[(Math.random() * PRIMARIES.length) | 0], sc = SECONDARIES[(Math.random() * SECONDARIES.length) | 0];
      const id = 'b' + (++this.botSeq);
      const e = this.addEntityQuiet({ id, name, bot: true, loadout: { p: pr, s: sc } });
      bots.push(e); changed = true;
    }
    if (changed) this.emitRoster();
  }
  addEntityQuiet(o) {
    const e = {
      id: o.id, name: o.name, bot: !!o.bot, team: this.pickTeam(), hp: 100, alive: false, k: 0, d: 0, pts: 0, lvl: 0,
      loadout: { ...o.loadout }, pos: [0, 0, 0], yaw: 0, w: 'nova', respawnAt: this.t + 0.5, protect: 0, acting: false, actT: 0, lastShot: {},
    };
    this.ents.set(e.id, e);
    if (this.cfg.rounds && this.phase === 'freeze') this.spawn(e);
    return e;
  }

  /** Принимает состояние игрока от клиента. Возвращает false, если оно отвергнуто (телепорт/спидхак). */
  setState(id, st) {
    const e = this.ents.get(id);
    if (!e || !e.alive) return false;
    let x = st.x, y = st.y, z = st.z;
    if (!Number.isFinite(x + y + z)) return false;
    x = Math.max(-BOUNDS.x, Math.min(BOUNDS.x, x)); z = Math.max(-BOUNDS.z, Math.min(BOUNDS.z, z)); y = Math.max(-1, Math.min(14, y));
    if (!e.bot) {
      const dist = Math.hypot(x - e.pos[0], z - e.pos[2]);
      if (e.justSpawned) {
        if (dist > 4) { e.viol = (e.viol || 0) + 1; return false; }
        e.justSpawned = false;
      } else if (e.stT !== undefined) {
        const dt = Math.min(1.2, Math.max(0.02, this.t - e.stT));
        if (dist > 9.5 * dt + 1.4) { e.viol = (e.viol || 0) + 1; return false; }
      }
      e.stT = this.t;
    }
    e.pos[0] = x; e.pos[1] = y; e.pos[2] = z; e.yaw = st.yaw;
    if (typeof st.w === 'string' && WEAPONS[st.w]) e.w = st.w;
    return true;
  }

  // ---------- спавн ----------
  spawn(e) {
    let sp;
    if (this.cfg.teams) {
      const list = SPAWNS.team[e.team] || SPAWNS.all;
      // выбираем спавн, не занятый союзником
      const free = list.filter((s) => ![...this.ents.values()].some((o) => o !== e && o.alive && Math.hypot(o.pos[0] - s.x, o.pos[2] - s.z) < 1.2));
      const pool = free.length ? free : list;
      sp = pool[(Math.random() * pool.length) | 0];
    } else {
      let best = null, bestD = -1;
      for (let i = 0; i < 6; i++) {
        const s = SPAWNS.all[(Math.random() * SPAWNS.all.length) | 0];
        let md = 1e9;
        for (const o of this.ents.values()) if (o !== e && o.alive) md = Math.min(md, Math.hypot(o.pos[0] - s.x, o.pos[2] - s.z));
        if (md > bestD) { bestD = md; best = s; }
      }
      sp = best;
    }
    e.pos = [sp.x, 0, sp.z]; e.yaw = sp.yaw; e.justSpawned = true; e.stT = undefined; e.hp = 100; e.alive = true; e.acting = false;
    e.protect = this.cfg.rounds ? 0 : this.t + 2;
    this.econ(e);
    if (!this.cfg.rounds) e.nades = { frag: 1, flash: 1, smoke: 1 };
    const L = this.cfg.rounds ? e.keep : e.loadout;
    e.w = this.cfg.id === 'gg' ? GG_LADDER[Math.min(e.lvl, GG_LADDER.length - 1)] : (L.p || L.s);
    this.emit({ t: 'spawn', id: e.id, pos: e.pos.slice(), yaw: sp.yaw, hp: 100, lvl: e.lvl, loadout: { p: L.p, s: L.s }, money: this.cfg.rounds ? e.money : 0, nades: { ...e.nades }, prot: this.cfg.rounds ? 0 : 2 });
  }

  // ---------- урон ----------
  hit(shooterId, m) {
    const s = this.ents.get(shooterId), v = this.ents.get(m.target);
    if (!s || !v || s === v || !s.alive || !v.alive) return;
    if (this.state !== 'live') return;
    if (this.cfg.rounds && this.phase !== 'live' && this.phase !== 'bomb') return;
    if (this.cfg.teams && s.team === v.team) return;
    if (this.t < v.protect) return;
    const w = WEAPONS[m.w];
    if (!w) return;
    const allowed = this.cfg.id === 'gg' ? [GG_LADDER[Math.min(s.lvl, GG_LADDER.length - 1)]] : [s.loadout.p, s.loadout.s, 'phantom'];
    if (!allowed.includes(m.w)) return;
    const c = now();
    const minI = 60 / w.rpm * 0.3;
    if (c - (s.lastShot[m.w] || -9) < minI) return;
    s.lastShot[m.w] = c;
    const dx = v.pos[0] - s.pos[0], dz = v.pos[2] - s.pos[2];
    const ds = Math.hypot(dx, dz, v.pos[1] - s.pos[1]);
    if (ds > w.range + 6) return;
    if (!w.melee) {
      const ex = s.pos[0], ey = s.pos[1] + 1.55, ez = s.pos[2];
      if (blocked(ex, ey, ez, v.pos[0], v.pos[1] + 1.5, v.pos[2]) && blocked(ex, ey, ez, v.pos[0], v.pos[1] + 0.6, v.pos[2])) return;
    }
    let dmg, hs = false;
    if (w.melee) {
      const fx = -Math.sin(v.yaw), fz = -Math.cos(v.yaw);
      const l = Math.hypot(dx, dz) || 1;
      const behind = (fx * (-dx / l) + fz * (-dz / l)) < -0.3; // атакующий сзади
      dmg = behind ? w.back : (m.alt ? w.dmg2 : w.dmg);
    } else {
      const n = Math.max(0, Math.min(w.pellets, m.n | 0)), h = Math.max(0, Math.min(w.pellets - n, m.h | 0));
      if (n + h < 1) return;
      const fall = Math.pow(w.falloff, ds / 10);
      dmg = (n * w.dmg + h * w.dmg * w.head) * fall;
      hs = h > 0;
    }
    this.damage(v, Math.round(dmg), s, m.w, hs);
  }

  // ---------- гранаты ----------
  clearNades() { this.nades.length = 0; this.smokes = []; this.emit({ t: 'clrnade' }); }

  throwNade(id, k, o, d) {
    const e = this.ents.get(id), c = NADES[k];
    if (!e || !c || !e.alive || this.state !== 'live') return false;
    if (this.cfg.rounds && this.phase !== 'live' && this.phase !== 'bomb') return false;
    if (!e.nades || !(e.nades[k] > 0)) return false;
    if (this.t - (e.lastNade || -9) < 0.55) return false;
    if (!Array.isArray(d) || !Array.isArray(o)) return false;
    let dx = +d[0], dy = +d[1], dz = +d[2];
    const dl = Math.hypot(dx, dy, dz);
    if (!(dl > 0.1) || !Number.isFinite(dl)) return false;
    dx /= dl; dy /= dl; dz /= dl;
    const eye = [e.pos[0], e.pos[1] + 1.55, e.pos[2]];
    let ox = +o[0], oy = +o[1], oz = +o[2];
    if (!Number.isFinite(ox + oy + oz) || Math.hypot(ox - eye[0], oy - eye[1], oz - eye[2]) > 1.5 || blocked(eye[0], eye[1], eye[2], ox, oy, oz)) { ox = eye[0]; oy = eye[1]; oz = eye[2]; }
    e.nades[k]--; e.lastNade = this.t;
    const n = { id: ++this.nadeSeq, k, by: id, x: ox, y: oy, z: oz, vx: dx * NADE_SPEED, vy: dy * NADE_SPEED, vz: dz * NADE_SPEED, t: 0, acc: 0 };
    this.nades.push(n);
    this.emit({ t: 'nade', id: n.id, k, by: id, p: [ox, oy, oz], v: [n.vx, n.vy, n.vz] });
    this.emitInv(e);
    return true;
  }

  stepNades(dt) {
    for (let i = this.nades.length - 1; i >= 0; i--) {
      const n = this.nades[i];
      stepNade(n, dt);
      if (n.t >= NADES[n.k].fuse) { this.nades.splice(i, 1); this.explode(n); }
    }
  }

  explode(n) {
    const c = NADES[n.k], thrower = this.ents.get(n.by);
    const msg = { t: 'boom', id: n.id, k: n.k, p: [+n.x.toFixed(2), +n.y.toFixed(2), +n.z.toFixed(2)] };
    const live = !this.cfg.rounds || this.phase === 'live' || this.phase === 'bomb';
    if (n.k === 'frag') {
      if (live) for (const v of [...this.ents.values()]) {
        if (!v.alive || this.t < v.protect) continue;
        if (this.cfg.teams && thrower && v !== thrower && v.team === thrower.team) continue;
        const cx = v.pos[0], cy = v.pos[1] + 1.0, cz = v.pos[2];
        const d = Math.hypot(cx - n.x, cy - n.y, cz - n.z);
        if (d >= c.radius) continue;
        if (blocked(n.x, n.y + 0.15, n.z, cx, cy, cz) && blocked(n.x, n.y + 0.15, n.z, cx, v.pos[1] + 1.55, cz) && d > 1.2) continue;
        let dmg = c.dmg * Math.pow(1 - d / c.radius, 1.1);
        if (v === thrower) dmg *= 0.6;
        if (dmg >= 4) this.damage(v, Math.round(dmg), thrower || null, 'frag', false);
      }
    } else if (n.k === 'flash') {
      const fl = {};
      for (const v of this.ents.values()) {
        if (!v.alive) continue;
        const ex = v.pos[0], ey = v.pos[1] + 1.55, ez = v.pos[2];
        const dx = n.x - ex, dy = n.y - ey, dz = n.z - ez, d = Math.hypot(dx, dy, dz);
        if (d > c.radius || blocked(n.x, n.y, n.z, ex, ey, ez)) continue;
        const fx = -Math.sin(v.yaw), fz = -Math.cos(v.yaw), dh = Math.hypot(dx, dz) || 1;
        const facing = (fx * dx / dh + fz * dz / dh + 1) / 2; // 0 — спиной, 1 — лицом
        const dur = (0.5 + 3.6 * Math.pow(facing, 1.6)) * (1 - d / c.radius * 0.6);
        if (dur > 0.35) fl[v.id] = +dur.toFixed(2);
      }
      msg.fl = fl;
    } else if (n.k === 'smoke') {
      msg.dur = c.dur; msg.r = c.radius;
    }
    this.emit(msg);
  }

  damage(v, dmg, s, w, hs) {
    v.hp -= dmg;
    this.emit({ t: 'dmg', id: v.id, hp: Math.max(0, v.hp), by: s ? s.id : null, hs, w });
    if (v.hp <= 0) this.kill(v, s, w, hs);
  }

  kill(v, s, w, hs) {
    v.alive = false; v.hp = 0; v.d++; v.acting = false;
    v.respawnAt = this.t + (this.cfg.respawn || 0);
    if (s && s !== v) {
      s.k++;
      s.pts++;
      if (this.cfg.rounds) { this.econ(s); s.money = Math.min(16000, s.money + 300); }
      if (this.cfg.id === 'tdm' && s.team >= 0) this.teamScore[s.team]++;
      if (this.cfg.id === 'gg' && w === GG_LADDER[Math.min(s.lvl, GG_LADDER.length - 1)]) {
        s.lvl++;
        if (s.lvl >= GG_LADDER.length) {
          this.emit({ t: 'kill', k: s.id, v: v.id, w, hs });
          return this.finish({ winner: s.id });
        }
        s.w = GG_LADDER[s.lvl];
        this.emit({ t: 'lvl', id: s.id, lvl: s.lvl });
      }
    }
    this.emit({ t: 'kill', k: s ? s.id : null, v: v.id, w, hs });
    this.sync(true);
    if (this.cfg.id === 'dm' && s && s.pts >= this.cfg.scoreLimit) this.finish({ winner: s.id });
    if (this.cfg.id === 'tdm' && s && this.teamScore[s.team] >= this.cfg.scoreLimit) this.finish({ team: s.team });
  }

  // ---------- действия (установка/разминирование) ----------
  act(id, on) {
    const e = this.ents.get(id);
    if (!e) return;
    e.acting = !!on && e.alive;
    if (!e.acting && this.bomb.actor === id) {
      this.bomb.actor = null;
      if (this.bomb.state === 'planting') this.bomb.state = 'none';
      if (this.bomb.state === 'defusing') this.bomb.state = 'planted';
      this.emit({ t: 'bomb', state: this.bomb.state, site: this.bomb.site, p: 0 });
    }
  }

  // ---------- раунды ----------
  alive(team) { let n = 0; for (const e of this.ents.values()) if (e.alive && e.team === team) n++; return n; }
  count(team) { let n = 0; for (const e of this.ents.values()) if (e.team === team) n++; return n; }

  startRound() {
    this.round++;
    this.phase = 'freeze';
    this.phaseEnd = this.t + this.cfg.freeze;
    this.bomb = { state: 'none' };
    this.clearNades();
    for (const e of this.ents.values()) { this.econ(e); e.paid = { p: 0, s: 0 }; }
    for (const e of this.ents.values()) this.spawn(e);
    for (const e of this.ents.values()) if (e.bot) this.botBuy(e);
    this.emit({ t: 'phase', phase: 'freeze', left: this.cfg.freeze, round: this.round, score: this.teamScore.slice() });
    this.emit({ t: 'bomb', state: 'none' });
  }

  roundEnd(team, reason) {
    this.phase = 'roundend';
    this.phaseEnd = this.t + this.cfg.roundEnd;
    this.teamScore[team]++;
    for (const e of this.ents.values()) {
      this.econ(e);
      if (e.team === team) { e.pts += 2; e.money = Math.min(16000, e.money + 3000); } else e.money = Math.min(16000, e.money + 1900);
      if (!e.alive) { e.keep = { p: null, s: 'pulsar' }; e.nades = {}; }
    }
    this.emit({ t: 'phase', phase: 'roundend', left: this.cfg.roundEnd, winner: team, reason, round: this.round, score: this.teamScore.slice() });
    this.sync(true);
  }

  finish(res) {
    if (this.state === 'ended') return;
    this.state = 'ended';
    this.endsAt = this.t + 14;
    const board = [...this.ents.values()].map((e) => ({ id: e.id, name: e.name, team: e.team, k: e.k, d: e.d, pts: e.pts, bot: e.bot }));
    let result = res;
    if (!result) {
      if (this.cfg.teams) result = { team: this.teamScore[0] === this.teamScore[1] ? -1 : this.teamScore[0] > this.teamScore[1] ? 0 : 1 };
      else { const top = [...this.ents.values()].sort((a, b) => b.pts - a.pts || (a.d - b.d))[0]; result = { winner: top ? top.id : null }; }
    }
    this.emit({ t: 'end', ...result, board, score: this.teamScore.slice() });
  }

  sync(force) {
    if (!force && this.t - this.lastSync < 0.5) return;
    this.lastSync = this.t;
    const ents = [];
    for (const e of this.ents.values()) ents.push([e.id, e.k, e.d, Math.max(0, e.hp | 0), e.alive ? 1 : 0, e.lvl, e.team, e.pts, e.money | 0]);
    const left = this.cfg.rounds ? Math.max(0, this.phaseEnd - this.t) : Math.max(0, this.timeLeftEnd - this.t);
    this.emit({
      t: 'sync', ents, left, phase: this.phase, round: this.round, score: this.teamScore.slice(),
      bomb: this.bomb.state === 'none' ? null : { state: this.bomb.state, site: this.bomb.site, pos: this.bomb.pos, left: this.bomb.end ? Math.max(0, this.bomb.end - this.t) : 0 },
      ended: this.state === 'ended',
    });
  }

  // ---------- главный цикл ----------
  update(dt) {
    this.t += dt;
    if (this.state === 'ended') {
      if (this.t >= this.endsAt) { this.reset(); }
      this.sync();
      return;
    }
    const cfg = this.cfg;
    this.stepNades(dt);
    if (!cfg.rounds) {
      for (const e of this.ents.values()) {
        if (!e.alive && this.t >= e.respawnAt) this.spawn(e);
      }
      if (this.t >= this.timeLeftEnd) this.finish();
    } else {
      this.updateRounds();
    }
    this.sync();
  }

  updateRounds() {
    const cfg = this.cfg;
    if (this.phase === 'wait') {
      if (this.t >= this.phaseEnd && this.ents.size > 0) this.startRound();
      return;
    }
    if (this.phase === 'freeze') {
      if (this.t >= this.phaseEnd) {
        this.phase = 'live'; this.phaseEnd = this.t + cfg.roundTime;
        this.emit({ t: 'phase', phase: 'live', left: cfg.roundTime, round: this.round, score: this.teamScore.slice() });
      }
      return;
    }
    if (this.phase === 'roundend') {
      if (this.t >= this.phaseEnd) {
        if (Math.max(...this.teamScore) >= cfg.roundsToWin) this.finish();
        else { if (this.round === cfg.half) this.swapSides(); this.startRound(); }
      }
      return;
    }
    // live / bomb
    this.processActions();
    const a = this.alive(0), d = this.alive(1);
    const both = this.count(0) > 0 && this.count(1) > 0;
    const planted = this.bomb.state === 'planted' || this.bomb.state === 'defusing';
    if (planted) {
      this.phase = 'bomb';
      if (this.t >= this.bomb.end) { this.bomb.state = 'exploded'; this.emit({ t: 'bomb', state: 'exploded', pos: this.bomb.pos }); this.roundEnd(0, 'explode'); return; }
      if (both && d === 0) return this.roundEnd(0, 'elim');
    } else if (both) {
      if (a === 0) return this.roundEnd(1, 'elim');
      if (d === 0) return this.roundEnd(0, 'elim');
      if (this.t >= this.phaseEnd) return this.roundEnd(1, 'time');
    }
  }

  processActions() {
    const cfg = this.cfg;
    for (const e of this.ents.values()) {
      if (!e.acting || !e.alive) continue;
      if (e.team === 0 && (this.bomb.state === 'none' || (this.bomb.state === 'planting' && this.bomb.actor === e.id))) {
        const site = SITES.findIndex((s) => Math.hypot(e.pos[0] - s.x, e.pos[2] - s.z) < s.r);
        if (site < 0) { this.act(e.id, false); continue; }
        if (this.bomb.state === 'none') { this.bomb = { state: 'planting', actor: e.id, start: this.t, site }; }
        const p = (this.t - this.bomb.start) / cfg.plantTime;
        if (this.t - (this.lastActEmit) > 0.1) { this.lastActEmit = this.t; this.emit({ t: 'bomb', state: 'planting', id: e.id, p, site }); }
        if (p >= 1) {
          this.bomb = { state: 'planted', site, pos: [e.pos[0], 0, e.pos[2]], end: this.t + cfg.bombTime };
          e.acting = false; e.pts += 3;
          this.emit({ t: 'bomb', state: 'planted', site, pos: this.bomb.pos, left: cfg.bombTime });
        }
      } else if (e.team === 1 && (this.bomb.state === 'planted' || (this.bomb.state === 'defusing' && this.bomb.actor === e.id))) {
        const bp = this.bomb.pos;
        if (Math.hypot(e.pos[0] - bp[0], e.pos[2] - bp[2]) > 2.6) { this.act(e.id, false); continue; }
        if (this.bomb.state === 'planted') { this.bomb.state = 'defusing'; this.bomb.actor = e.id; this.bomb.dstart = this.t; }
        const p = (this.t - this.bomb.dstart) / cfg.defuseTime;
        if (this.t - this.lastActEmit > 0.1) { this.lastActEmit = this.t; this.emit({ t: 'bomb', state: 'defusing', id: e.id, p }); }
        if (p >= 1) {
          this.bomb.state = 'defused'; e.acting = false; e.pts += 3;
          this.emit({ t: 'bomb', state: 'defused' });
          this.roundEnd(1, 'defuse');
          return;
        }
      } else e.acting = false;
    }
  }

  begin() { this.sync(true); }
}
