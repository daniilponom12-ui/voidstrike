// VOID STRIKE — игровой сервер (WebSocket). Запуск: node server/server.js  (PORT=8787)
import http from 'node:http';
import { WebSocketServer } from 'ws';
import { Match, MODES } from '../shared/match.js';
import { MAPS, setMap } from '../shared/map.js';

const PORT = process.env.PORT || 8787;
const TICK = 50;
const BOT_TARGET = 8;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'content-type': 'application/json', 'access-control-allow-origin': '*' });
    let players = 0; for (const r of rooms.values()) players += r.clients.size;
    return res.end(JSON.stringify({ ok: true, rooms: rooms.size, players }));
  }
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('VOID STRIKE server');
});
const wss = new WebSocketServer({ server, maxPayload: 4096 });
const rooms = new Map();
let seq = 0;

class Room {
  constructor(mode, code, map) {
    this.id = 'r' + (++seq);
    this.mode = mode;
    this.map = MAPS[map] ? map : 'helios';
    setMap(this.map);
    this.code = code || '';
    this.clients = new Map(); // id -> {ws, name}
    this.hostId = null;
    this.states = new Map(); // id -> st для снапшотов
    this.match = new Match(mode, (msg, to) => this.send(msg, to), { botTarget: BOT_TARGET, map: this.map });
    this.last = Date.now();
  }
  send(msg, to) {
    if (msg.t === 'roster') msg.host = this.hostId;
    const data = JSON.stringify(msg);
    if (to) { const c = this.clients.get(to); if (c && c.ws.readyState === 1) c.ws.send(data); return; }
    for (const c of this.clients.values()) if (c.ws.readyState === 1) c.ws.send(data);
  }
  sendExcept(msg, except) {
    const data = JSON.stringify(msg);
    for (const [id, c] of this.clients) if (id !== except && c.ws.readyState === 1) c.ws.send(data);
  }
  join(id, ws, name, loadout) {
    setMap(this.map);
    if (!this.hostId) this.hostId = id;
    this.clients.set(id, { ws, name });
    this.send({ t: 'welcome', id, mode: this.mode, map: this.map, code: this.code, host: this.hostId }, id);
    this.match.addEntity({ id, name, loadout });
    this.match.balanceBots();
    this.match.emitRoster();
    this.match.sync(true);
  }
  leave(id) {
    setMap(this.map);
    this.clients.delete(id);
    this.states.delete(id);
    if (this.hostId === id) this.hostId = this.clients.keys().next().value || null;
    this.match.removeEntity(id);
    if (this.clients.size) this.match.balanceBots();
  }
  tick(dt) {
    setMap(this.map);
    this.match.update(dt);
    const s = [];
    for (const e of this.match.ents.values()) {
      if (!e.alive) continue;
      const st = this.states.get(e.id);
      if (!st) continue;
      s.push([e.id, st.x, st.y, st.z, st.yaw, st.pitch, st.w, st.sk, st.fl]);
    }
    if (s.length) this.send({ t: 'snap', s });
  }
}

function findRoom(mode, code, map) {
  if (code) {
    for (const r of rooms.values()) if (r.code === code && r.mode === mode && r.map === map) return r;
    const r = new Room(mode, code, map); rooms.set(r.id, r); return r;
  }
  for (const r of rooms.values()) {
    if (r.mode === mode && r.map === map && !r.code && r.clients.size < 6 && r.match.state === 'live') return r;
  }
  const r = new Room(mode, '', map); rooms.set(r.id, r); return r;
}

const num = (v, d = 0) => (Number.isFinite(v) ? v : d);

wss.on('connection', (ws) => {
  let room = null, id = null;
  ws.isAlive = true;
  ws.on('pong', () => { ws.isAlive = true; });
  ws.on('message', (raw) => {
    let m;
    try { m = JSON.parse(raw); } catch { return; }
    if (!m || typeof m.t !== 'string') return;
    if (!room) {
      if (m.t !== 'join' || !MODES[m.mode]) return;
      id = 'p' + (++seq);
      const code = typeof m.code === 'string' ? m.code.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6) : '';
      room = findRoom(m.mode, code, MAPS[m.map] ? m.map : 'helios');
      room.join(id, ws, typeof m.name === 'string' ? m.name : 'Pilot', m.loadout);
      return;
    }
    const match = room.match;
    setMap(room.map);
    switch (m.t) {
      case 'st': { // состояние игрока
        const st = { x: num(m.x), y: num(m.y), z: num(m.z), yaw: num(m.yaw), pitch: num(m.pitch), w: String(m.w || '').slice(0, 10), sk: String(m.sk || '').slice(0, 12), fl: m.fl | 0 };
        if (match.setState(id, st)) room.states.set(id, st);
        else { const ee = match.ents.get(id); if (ee && ee.viol > 25) ws.close(); }
        break;
      }
      case 'bst': { // состояние ботов (только хост)
        if (id !== room.hostId || !Array.isArray(m.s)) break;
        for (const b of m.s.slice(0, 12)) {
          const e = match.ents.get(b[0]);
          if (!e || !e.bot) continue;
          const st = { x: num(b[1]), y: num(b[2]), z: num(b[3]), yaw: num(b[4]), pitch: num(b[5]), w: String(b[6] || '').slice(0, 10), sk: String(b[7] || '').slice(0, 12), fl: b[8] | 0 };
          room.states.set(e.id, st);
          match.setState(e.id, st);
        }
        break;
      }
      case 'shot': {
        const by = (m.by && id === room.hostId && match.ents.get(m.by)?.bot) ? m.by : id;
        room.sendExcept({ t: 'shot', id: by, o: m.o, d: m.d, w: m.w, e: m.e }, id);
        break;
      }
      case 'hit': {
        let by = id;
        if (m.by && id === room.hostId && match.ents.get(m.by)?.bot) by = m.by;
        match.hit(by, { target: String(m.target), w: String(m.w), n: m.n, h: m.h, alt: !!m.alt });
        break;
      }
      case 'act': {
        let who = id;
        if (m.by && id === room.hostId && match.ents.get(m.by)?.bot) who = m.by;
        match.act(who, !!m.on);
        break;
      }
      case 'nade': {
        let who = id;
        if (m.by && id === room.hostId && match.ents.get(m.by)?.bot) who = m.by;
        match.throwNade(who, String(m.k), m.o, m.d);
        break;
      }
      case 'buy': match.buy(id, String(m.w)); break;
      case 'loadout': { const e = match.ents.get(id); if (e) match.setLoadout(e, m); break; }
      case 'ping': ws.send(JSON.stringify({ t: 'pong', c: m.c })); break;
      case 'leave': ws.close(); break;
    }
  });
  ws.on('close', () => {
    if (!room) return;
    room.leave(id);
    setMap(room.map);
    if (!room.clients.size) rooms.delete(room.id);
    else if (room.hostId) room.match.emitRoster();
  });
  ws.on('error', () => {});
});

setInterval(() => { for (const r of rooms.values()) r.tick(TICK / 1000); }, TICK);
setInterval(() => { for (const ws of wss.clients) { if (!ws.isAlive) { ws.terminate(); continue; } ws.isAlive = false; ws.ping(); } }, 15000);

server.listen(PORT, () => console.log('VOID STRIKE server on :' + PORT));
