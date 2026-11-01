import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { WEAPONS, GG_LADDER, PRICES } from '../shared/weapons.js';
import { BOXES, BOUNDS, SITES, PLAYER, moveEntity, rayWorld, hitNormal, blocked, setMap, MAPS } from '../shared/map.js';
import { NADES, stepNade } from '../shared/nades.js';
import { Match, MODES } from '../shared/match.js';
import { SKIN_IDS, tickSkins } from './skins.js';
import { buildWorld } from './world.js';
import { buildWeapon, buildHands } from './wmodels.js';
import { skinMaterials } from './skins.js';
import { Avatar, Effects, colorFor, TEAM_COLORS } from './entities.js';
import { BotAI } from './ai.js';
import * as A from './audio.js';
import { store, equipped, save } from './store.js';
import { t, getLang } from './i18n.js';
import * as Y from './yandex.js';

const $ = (id) => document.getElementById(id);
const V3 = THREE.Vector3;
const DEG = Math.PI / 180;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const hashSkin = (id) => { let h = 7; for (let i = 0; i < id.length; i++) h = (h * 33 + id.charCodeAt(i)) >>> 0; return SKIN_IDS[h % SKIN_IDS.length]; };
const isTouch = () => window.matchMedia && window.matchMedia('(pointer:coarse)').matches;

class Ent {
  constructor(m) {
    this.id = m.id; this.name = m.name; this.bot = !!m.bot; this.team = m.team; this.hp = 100; this.alive = false;
    this.k = 0; this.d = 0; this.pts = 0; this.lvl = 0; this.pos = new V3(); this.yaw = 0; this.pitch = 0; this.w = 'nova'; this.sk = 'stock';
    this.nades = {}; this.crouch = false; this.speed = 0; this.buf = []; this.avatar = null; this.protect = 0; this.ai = null; this.lastShotT = -9; this.isLocal = false; this.stepAcc = 0;
  }
}

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.running = false; this.paused = false; this.ents = new Map(); this.touch = isTouch();
    this.keys = {}; this.mouse = { l: false, r: false, dx: 0, dy: 0 };
    this.initRenderer();
    this.bindInput();
    this.ui = {}; // колбэки UI
  }

  now() { return performance.now() / 1000; }

  // ---------- рендер ----------
  initRenderer() {
    const q = store.d.settings.quality;
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: q !== 'low', powerPreference: 'high-performance' });
    this.renderer.autoClear = false;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping; this.renderer.toneMappingExposure = 1.05;
    this.scene = new THREE.Scene(); this.vmScene = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(this.renderer);
    const env = pm.fromScene(new RoomEnvironment(), 0.04).texture; this.scene.environment = env; this.vmScene.environment = env;
    this.cam = new THREE.PerspectiveCamera(85, 1, 0.05, 2000); this.cam.rotation.order = 'YXZ';
    this.vmCam = new THREE.PerspectiveCamera(62, 1, 0.01, 10);
    this.world = buildWorld(this.scene, q);
    this.world.setSitesVisible(false);
    this.fx = new Effects(this.scene);
    this.vmScene.add(new THREE.HemisphereLight(0xcfe0ff, 0x30384a, 0.45));
    const dl = new THREE.DirectionalLight(0xffffff, 1.3); dl.position.set(0.5, 1, 0.8); this.vmScene.add(dl);
    this.vmLight = new THREE.PointLight(0xffc070, 0, 3); this.vmScene.add(this.vmLight);
    this.vmRoot = new THREE.Group(); this.vmScene.add(this.vmRoot);
    this.listener = { x: 0, y: 0, z: 0, yaw: 0 };
    this.bombMesh = null;
    this.nadeObjs = new Map(); this.smokes = []; this.blindT = 0; this.blindTot = 1; this.nadeCd = 0; this.mapId = 'helios';
    this.nadeGeo = new THREE.SphereGeometry(0.085, 12, 9); this.nadeCap = new THREE.CylinderGeometry(0.03, 0.03, 0.05, 8); this.smokeGeo = new THREE.IcosahedronGeometry(1, 2);
    this.nadeMats = { frag: new THREE.MeshStandardMaterial({ color: 0x4f6240, metalness: 0.4, roughness: 0.5 }), flash: new THREE.MeshStandardMaterial({ color: 0xc9ced6, metalness: 0.6, roughness: 0.35 }), smoke: new THREE.MeshStandardMaterial({ color: 0x6f7d92, metalness: 0.5, roughness: 0.5 }) };
    this.nadeCapMat = new THREE.MeshStandardMaterial({ color: 0xffb02e, emissive: 0x663a00, metalness: 0.3, roughness: 0.4 });
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }
  resize() {
    const q = store.d.settings.quality, dpr = Math.min(window.devicePixelRatio || 1, q === 'low' ? 0.8 : q === 'mid' ? 1.25 : 2);
    this.renderer.setPixelRatio(dpr);
    const w = window.innerWidth, h = window.innerHeight; this.renderer.setSize(w, h, false);
    this.canvas.style.width = w + 'px'; this.canvas.style.height = h + 'px';
    this.cam.aspect = w / h; this.cam.updateProjectionMatrix(); this.vmCam.aspect = w / h; this.vmCam.updateProjectionMatrix();
  }

  // ---------- ввод ----------
  bindInput() {
    const down = (e) => {
      if (!this.running) return;
      if (e.repeat && e.code !== 'Space') return;
      this.keys[e.code] = true;
      if (e.code === 'Tab') { e.preventDefault(); this.showBoard(true); }
      if (e.code === 'Enter' && this.tutOpen) this.closeTutorial();
      if (e.code === 'KeyB') this.toggleBuy();
      if (this.buyOpen && /^Digit[0-9]$/.test(e.code)) { const n = +e.code[5]; this.buy(this.buyItems()[n === 0 ? 9 : n - 1]); return; }
      if (e.code === 'Digit4') this.throwNade('frag'); if (e.code === 'Digit5') this.throwNade('flash'); if (e.code === 'Digit6') this.throwNade('smoke');
      if (e.code === 'Digit1') this.selectSlot(1); if (e.code === 'Digit2') this.selectSlot(2); if (e.code === 'Digit3') this.selectSlot(3);
      if (e.code === 'KeyQ') this.selectWeapon(this.lastW);
      if (e.code === 'KeyR') this.startReload();
      if (e.code === 'KeyF') this.inspect();
      if (e.code === 'KeyE') this.setAct(true);
      if (e.code === 'Space') e.preventDefault();
    };
    const up = (e) => { this.keys[e.code] = false; if (e.code === 'Tab') { e.preventDefault(); this.showBoard(false); } if (e.code === 'KeyE') this.setAct(false); };
    window.addEventListener('keydown', down); window.addEventListener('keyup', up);
    window.addEventListener('blur', () => { this.keys = {}; this.mouse.l = this.mouse.r = false; this.setAct(false); });
    document.addEventListener('mousemove', (e) => { if (document.pointerLockElement === this.canvas) { this.mouse.dx += e.movementX; this.mouse.dy += e.movementY; } });
    this.canvas.addEventListener('mousedown', (e) => {
      if (!this.running) return;
      if (!this.touch && document.pointerLockElement !== this.canvas && !this.paused) { this.lock(); return; }
      if (e.button === 0) { this.mouse.l = true; this.fireEdge = true; if (!this.me.alive) this.cycleSpectate(); }
      if (e.button === 2) { this.mouse.r = true; this.onRightClick(); }
    });
    window.addEventListener('mouseup', (e) => { if (e.button === 0) this.mouse.l = false; if (e.button === 2) this.mouse.r = false; });
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('wheel', (e) => { if (this.running && !this.paused && this.me && this.me.alive) this.cycleWeapon(e.deltaY > 0 ? 1 : -1); }, { passive: true });
    document.addEventListener('pointerlockchange', () => {
      if (!this.running) return;
      const locked = document.pointerLockElement === this.canvas;
      if (!locked && !this.touch && !this.ended) this.setPaused(true);
      if (locked) this.setPaused(false);
    });
    this.bindTouch();
  }
  lock() { try { const p = this.canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (e) {} }
  setPaused(p) {
    if (this.paused === p) return; this.paused = p;
    if (this.ui.onPause) this.ui.onPause(p);
    if (p) { Y.gameplayStop(); this.keys = {}; this.mouse.l = this.mouse.r = false; } else Y.gameplayStart();
  }
  bindTouch() {
    if (!this.touch) return;
    const tc = $('touch'); if (!tc) return;
    const stick = { id: null, x: 0, y: 0, ox: 0, oy: 0 }, look = { id: null, x: 0, y: 0 };
    const zone = $('tz');
    zone.addEventListener('touchstart', (e) => {
      for (const t of e.changedTouches) {
        if (t.clientX < window.innerWidth * 0.45 && stick.id === null) { stick.id = t.identifier; stick.ox = t.clientX; stick.oy = t.clientY; }
        else if (look.id === null && t.clientX >= window.innerWidth * 0.45) { look.id = t.identifier; look.x = t.clientX; look.y = t.clientY; }
      } e.preventDefault();
    }, { passive: false });
    zone.addEventListener('touchmove', (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === stick.id) { stick.x = clamp((t.clientX - stick.ox) / 50, -1, 1); stick.y = clamp((t.clientY - stick.oy) / 50, -1, 1); this.stick = stick; }
        if (t.identifier === look.id) { this.mouse.dx += (t.clientX - look.x) * 1.6; this.mouse.dy += (t.clientY - look.y) * 1.6; look.x = t.clientX; look.y = t.clientY; }
      } e.preventDefault();
    }, { passive: false });
    const end = (e) => { for (const t of e.changedTouches) { if (t.identifier === stick.id) { stick.id = null; stick.x = stick.y = 0; } if (t.identifier === look.id) look.id = null; } };
    zone.addEventListener('touchend', end); zone.addEventListener('touchcancel', end);
    this.stick = stick;
    const bind = (id, on, off) => { const el = $(id); if (!el) return; el.addEventListener('touchstart', (e) => { e.preventDefault(); on(); }, { passive: false }); el.addEventListener('touchend', (e) => { e.preventDefault(); off && off(); }, { passive: false }); };
    bind('tFire', () => { this.mouse.l = true; this.fireEdge = true; if (!this.me.alive) this.cycleSpectate(); }, () => { this.mouse.l = false; });
    bind('tJump', () => { this.keys.Space = true; }, () => { this.keys.Space = false; });
    bind('tReload', () => this.startReload());
    bind('tCrouch', () => { this.keys.ControlLeft = !this.keys.ControlLeft; });
    bind('tScope', () => this.onRightClick());
    bind('tSwap', () => this.cycleWeapon(1));
    bind('tAct', () => this.setAct(true), () => this.setAct(false));
    bind('tNade', () => { for (const k of ['frag', 'flash', 'smoke']) if (this.me.ent && this.me.ent.nades[k] > 0) return this.throwNade(k); });
    bind('tPause', () => this.setPaused(true));
  }

  // ---------- обучение, мобильные настройки ----------
  showTutorial() {
    const el = $('tut'); if (!el) return;
    $('tutT').textContent = t('tutT'); $('tutH').textContent = t('tutH');
    $('tutL').innerHTML = [1, 2, 3, 4, 5].map((i) => `<div class="tr"><b>${t('tut' + i)}</b><span>${t('tut' + i + 'd')}</span></div>`).join('');
    el.classList.add('on'); this.tutOpen = true;
    el.onclick = () => this.closeTutorial();
    clearTimeout(this.tutT); this.tutT = setTimeout(() => this.closeTutorial(), 22000);
  }
  closeTutorial() {
    if (!this.tutOpen) return; this.tutOpen = false; $('tut').classList.remove('on');
    store.d.tutDone = true; save();
  }
  applyTouchScale() { const tc = $('touch'); if (tc) tc.style.setProperty('--ts', store.d.settings.touchScale || 1); }
  enableGyro(on) {
    this.gyroOn = on;
    if (on && !this._gy) {
      this._gy = (e) => {
        if (!this.gyroOn || !this.running || this.paused || !e.rotationRate) return;
        const r = e.rotationRate, ang = (screen.orientation && screen.orientation.angle) || 0, land = Math.abs(ang) === 90, sg = ang === 270 || ang === -90 ? -1 : 1;
        const dt = (e.interval > 5 ? e.interval / 1000 : e.interval) || 0.016;
        const yawRate = land ? -sg * (r.beta || 0) : -(r.gamma || 0), pitchRate = land ? sg * (r.gamma || 0) : (r.beta || 0);
        this.mouse.dx += -yawRate * dt * 5; this.mouse.dy += -pitchRate * dt * 5;
      };
      window.addEventListener('devicemotion', this._gy);
      try { if (window.DeviceMotionEvent && DeviceMotionEvent.requestPermission) DeviceMotionEvent.requestPermission().catch(() => {}); } catch (e) {}
    }
  }

  // ---------- запуск матча ----------
  async start(opts) {
    this.stop(true);
    this.opts = opts; this.mapId = MAPS[opts.map] ? opts.map : 'helios'; setMap(this.mapId); this.useMap(this.mapId);
    this.mode = opts.mode; this.cfg = MODES[opts.mode]; this.online = !!opts.online;
    this.ents.clear(); this.myId = this.online ? null : 'me'; this.hostId = null; this.ended = false; this.paused = false;
    this.sync = { left: 0, at: this.now(), phase: 'live', round: 0, score: [0, 0], bomb: null };
    this.feed = []; this.statKills = 0; this.statDeaths = 0; this.statHeads = 0; this.matchStart = this.now();
    this.me = { alive: false, hp: 100, pos: new V3(), vel: new V3(), yaw: 0, pitch: 0, ground: true, crouchT: 0, lvl: 0, acting: false, punchP: 0, punchY: 0, bloom: 0, spray: 0, lastShot: -9, bobT: 0, stepAcc: 0 };
    this.fx.clearDecals();
    this.world.setSitesVisible(this.mode === 'bomb');
    this.clearNades(); this.blindT = 0;
    this.setupHud();
    A.initAudio(); A.setOccluder((x, y, z, L) => blocked(L.x, L.y, L.z, x, y, z)); A.setVolume(store.d.settings.volume); A.setAmbient(store.d.settings.ambient);
    if (this.online) {
      const ok = await this.connect(opts.code || '');
      if (!ok) return false;
    } else {
      this.localMatch(opts.bots ?? 7, opts.diff || store.d.settings.difficulty);
    }
    this.running = true; this.lastT = this.now(); this.accState = 0; this.accBot = 0; this.ping = 0;
    if (!this.touch) this.lock();
    Y.gameplayStart();
    if (!this._loop) { this._loop = true; requestAnimationFrame(() => this.loop()); }
    $('hud').classList.add('on'); if (this.touch) { $('touch').classList.add('on'); this.applyTouchScale(); if (store.d.settings.gyro) this.enableGyro(true); }
    if (!store.d.tutDone) this.showTutorial();
    return true;
  }
  /** Пересобирает визуал карты, если выбрана другая */
  useMap(id) {
    if (this.world && this.world.mapId === id) return;
    if (this.world) this.world.dispose();
    this.world = buildWorld(this.scene, store.d.settings.quality, id);
    this.world.setSitesVisible(false);
  }
  stop(silent) {
    if (this.net && this.net.close) try { this.net.close(); } catch (e) {}
    this.net = null; this.localM = null; this.running = false; this.clearNades(); this.blindT = 0;
    for (const e of this.ents.values()) if (e.avatar) e.avatar.dispose();
    this.ents.clear();
    if (this.vmWeapon) { this.vmRoot.remove(this.vmWeapon); this.vmWeapon = null; }
    if (this.bombMesh) { this.scene.remove(this.bombMesh); this.bombMesh = null; }
    if (document.pointerLockElement === this.canvas) document.exitPointerLock();
    $('hud').classList.remove('on'); $('touch') && $('touch').classList.remove('on');
    if (!silent) Y.gameplayStop();
    this.cam.fov = 85; this.cam.rotation.set(0, 0, 0);
  }

  localMatch(bots, diff) {
    const m = new Match(this.mode, (msg) => this.onMsg(msg), { botTarget: bots + 1, map: this.mapId });
    this.localM = m; this.diff = diff; this.hostId = 'me'; this.isHost = true;
    m.ents.clear();
    this.onMsg({ t: 'welcome', id: 'me' });
    m.addEntity({ id: 'me', name: store.d.name, loadout: store.d.loadout });
    m.balanceBots();
    this.net = {
      send: (msg) => this.localSend(msg), close() {},
    };
  }
  localSend(msg) {
    const m = this.localM; if (!m) return;
    switch (msg.t) {
      case 'st': m.setState('me', msg); break;
      case 'bst': for (const b of msg.s) m.setState(b[0], { x: b[1], y: b[2], z: b[3], yaw: b[4], w: b[6] }); break;
      case 'hit': m.hit(msg.by || 'me', msg); break;
      case 'act': m.act(msg.by || 'me', msg.on); break;
      case 'buy': m.buy('me', msg.w); break;
      case 'nade': m.throwNade(msg.by || 'me', msg.k, msg.o, msg.d); break;
      case 'loadout': break;
    }
  }

  connect(code) {
    return new Promise((resolve) => {
      const url = (window.VOIDSTRIKE_CONFIG && window.VOIDSTRIKE_CONFIG.server) || '';
      if (!url || url.includes('YOUR-SERVER')) return resolve(false);
      let ws, done = false;
      const fail = () => { if (!done) { done = true; resolve(false); } };
      try { ws = new WebSocket(url); } catch (e) { return fail(); }
      const to = setTimeout(() => { try { ws.close(); } catch (e) {} fail(); }, 5000);
      ws.onopen = () => ws.send(JSON.stringify({ t: 'join', mode: this.mode, map: this.mapId, name: store.d.name, code, loadout: store.d.loadout }));
      ws.onmessage = (ev) => {
        let m; try { m = JSON.parse(ev.data); } catch (e) { return; }
        if (m.t === 'welcome' && !done) { done = true; clearTimeout(to); resolve(true); }
        this.onMsg(m);
      };
      ws.onerror = () => fail();
      ws.onclose = () => { clearTimeout(to); if (!done) fail(); else if (this.running && this.online) { this.running = false; if (this.ui.onDisconnect) this.ui.onDisconnect(); } };
      this.net = { send: (msg) => { if (ws.readyState === 1) ws.send(JSON.stringify(msg)); }, close: () => { try { ws.close(); } catch (e) {} } };
      this.pingTimer = setInterval(() => { if (!this.net || !this.running) return clearInterval(this.pingTimer); this.net.send({ t: 'ping', c: performance.now() }); }, 2000);
    });
  }

  // ---------- сообщения матча ----------
  ent(id) { return this.ents.get(id); }
  onMsg(m) {
    switch (m.t) {
      case 'welcome': this.myId = m.id; if (m.host) this.hostId = m.host;
        for (const e of this.ents.values()) if (e.id === m.id && !e.isLocal) { e.isLocal = true; if (e.avatar) { e.avatar.dispose(); e.avatar = null; } }
        break;
      case 'roster': this.onRoster(m); break;
      case 'start': this.onStart(); break;
      case 'spawn': this.onSpawn(m); break;
      case 'snap': this.onSnap(m); break;
      case 'shot': this.onShot(m); break;
      case 'dmg': this.onDmg(m); break;
      case 'kill': this.onKill(m); break;
      case 'equip': this.onEquip(m); break;
      case 'inv': this.onInv(m); break;
      case 'nade': this.onNade(m); break;
      case 'boom': this.onBoom(m); break;
      case 'clrnade': this.clearNades(); break;
      case 'swap': this.showMsg(t('swapSides'), '', 3000, 'warn'); this.closeBuy(); break;
      case 'lvl': { const e = this.ent(m.id); if (e) e.lvl = m.lvl; if (e && e.isLocal) this.giveLadder(m.lvl); break; }
      case 'sync': this.onSync(m); break;
      case 'phase': this.onPhase(m); break;
      case 'bomb': this.onBomb(m); break;
      case 'end': this.onEnd(m); break;
      case 'pong': this.ping = Math.round(performance.now() - m.c); break;
    }
  }
  onRoster(m) {
    const seen = new Set();
    this.hostId = m.host || this.hostId;
    for (const r of m.list) {
      seen.add(r.id);
      let e = this.ents.get(r.id);
      if (!e) { e = new Ent(r); this.ents.set(r.id, e); e.isLocal = r.id === this.myId; e.sk = r.bot ? hashSkin(r.id) : 'stock'; if (!e.isLocal) this.makeAvatar(e); }
      else { e.name = r.name; if (e.team !== r.team) { e.team = r.team; if (e.avatar) { e.avatar.dispose(); e.avatar = null; this.makeAvatar(e); } } }
      e.team = r.team;
    }
    for (const [id, e] of this.ents) if (!seen.has(id)) { if (e.avatar) e.avatar.dispose(); this.ents.delete(id); }
    if (this.myId && !this.me.ent) { this.me.ent = this.ents.get(this.myId); }
    this.me.ent = this.ents.get(this.myId);
    this.isHost = this.hostId === this.myId;
    for (const e of this.ents.values()) {
      if (e.bot) { if (this.isHost && !e.ai) { e.ai = new BotAI(e, this, this.diff || store.d.settings.difficulty); e.ai.resetAt([e.pos.x, e.pos.y, e.pos.z], e.yaw, e.w); } else if (!this.isHost && e.ai) e.ai = null; }
    }
  }
  makeAvatar(e) {
    const av = new Avatar(colorFor(e.team, e.id), e.name); this.scene.add(av.root); av.root.visible = false; e.avatar = av;
    av.setWeapon(e.w, e.sk);
  }
  onStart() {
    this.ended = false;
    for (const e of this.ents.values()) { e.k = e.d = e.pts = e.lvl = 0; e.alive = false; if (e.avatar) e.avatar.root.visible = false; }
    this.statKills = this.statDeaths = this.statHeads = 0; this.matchStart = this.now();
    if (this.me) { this.me.alive = false; }
    if (this.ui.onMatchStart) this.ui.onMatchStart();
    $('endscreen') && $('endscreen').classList.remove('on');
  }
  onSpawn(m) {
    const e = this.ent(m.id); if (!e) return;
    e.nades = m.nades || {}; e.alive = true; e.hp = m.hp; e.lvl = m.lvl; e.pos.set(m.pos[0], m.pos[1], m.pos[2]); e.yaw = m.yaw; e.buf.length = 0; e.protect = this.now() + (m.prot || 0);
    if (e.isLocal) { this.respawnLocal(m); return; }
    if (e.ai) { const w = this.cfg.id === 'gg' ? GG_LADDER[Math.min(m.lvl, GG_LADDER.length - 1)] : (m.loadout.p || m.loadout.s); e.w = w; e.ai.resetAt(m.pos, m.yaw, w); e.ai.loadout = m.loadout; if (!this.cfg.rounds || true) e.ai.site = null; }
    if (e.avatar) { e.avatar.root.visible = true; e.avatar.root.position.copy(e.pos); }
    if (e.bot) { const l = m.loadout; if (l) { e.loadout = l; e.w = this.cfg.id === 'gg' ? GG_LADDER[Math.min(m.lvl, GG_LADDER.length - 1)] : (l.p || l.s); if (e.avatar) e.avatar.setWeapon(e.w, e.sk); } }
  }
  onEquip(m) {
    const e = this.ent(m.id); if (!e) return;
    e.money = m.money; e.w = m.p || m.s;
    if (e.ai) e.ai.setWeapon(e.w);
    if (e.avatar && !e.isLocal) e.avatar.setWeapon(e.w, e.sk);
    if (e.isLocal) {
      this.slots = { 3: 'phantom' };
      for (const id of [m.p, m.s]) if (id) { const w = WEAPONS[id]; this.slots[w.slot] = id; if (!this.ammo[id]) this.ammo[id] = { mag: w.mag, res: w.reserve }; }
      this.selectWeapon(m.p || m.s, true); A.play('uiok', 0.6); this.renderBuy();
    }
  }
  toggleBuy() {
    if (!this.cfg.rounds || !this.me.alive || this.sync.phase !== 'freeze') return this.closeBuy();
    this.buyOpen = !this.buyOpen; $('buy').classList.toggle('on', this.buyOpen); this.renderBuy();
  }
  closeBuy() { this.buyOpen = false; const b = $('buy'); if (b) b.classList.remove('on'); }
  buyItems() { return ['sting', 'hawk', 'vortex', 'scatter', 'nova', 'titan', 'zenith', 'frag', 'flash', 'smoke']; }
  priceOf(id) { return NADES[id] ? NADES[id].price : PRICES[id]; }
  renderBuy() {
    if (!this.buyOpen) return; const me = this.me.ent, money = me ? me.money | 0 : 0, items = this.buyItems();
    $('buyList').innerHTML = items.map((id, i) => { const nd = NADES[id], cnt = nd && me ? (me.nades[id] || 0) : 0, have = nd ? cnt >= nd.max : (this.slots && Object.values(this.slots).includes(id)); return `<div class="bi ${this.priceOf(id) > money ? 'no' : ''} ${have ? 'have' : ''}" data-w="${id}"><i>${(i + 1) % 10}</i><span>${t('weaponname_' + id)}${nd ? ' ×' + cnt : ''}</span><b>$${this.priceOf(id)}</b></div>`; }).join('');
    $('buyMoney').textContent = '$' + money;
    $('buyList').querySelectorAll('.bi').forEach((el) => el.addEventListener('click', () => this.buy(el.dataset.w)));
  }
  buy(id) { if (this.net) this.net.send({ t: 'buy', w: id }); }
  onInv(m) { const e = this.ent(m.id); if (!e) return; e.nades = m.nades || {}; if (m.money !== undefined) e.money = m.money; if (e.isLocal) this.renderBuy(); }

  // ---------- гранаты ----------
  throwNade(k) {
    const me = this.me;
    if (!this.running || !me.alive || this.paused || this.ended || !this.net || this.nadeCd > 0) return;
    if (this.cfg.rounds && this.sync.phase !== 'live' && this.sync.phase !== 'bomb') return;
    const e = me.ent; if (!e || !(e.nades && e.nades[k] > 0)) return;
    this.nadeCd = 0.7;
    const eye = me.pos.y + PLAYER.eye - (PLAYER.eye - PLAYER.eyeCrouch) * me.crouchT;
    const d = this.camDir(me.yaw, me.pitch + 0.14, new V3()).normalize();
    const o = [+(me.pos.x + d.x * 0.45).toFixed(2), +(eye + d.y * 0.45).toFixed(2), +(me.pos.z + d.z * 0.45).toFixed(2)];
    this.net.send({ t: 'nade', k, o, d: [+d.x.toFixed(3), +d.y.toFixed(3), +d.z.toFixed(3)] });
    A.play('throw', 0.9); this.drawT = 0.45; this.inspectT = 0; this.scopeLvl = 0;
  }
  botThrow(e, ai, k, yaw, pitch) {
    const cp = Math.cos(pitch), d = [-Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp];
    const o = [ai.p.x + d[0] * 0.45, ai.p.y + 1.55 + d[1] * 0.45, ai.p.z + d[2] * 0.45];
    this.net.send({ t: 'nade', by: e.id, k, o, d });
  }
  makeNadeMesh(k) {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(this.nadeGeo, this.nadeMats[k]));
    const cap = new THREE.Mesh(this.nadeCap, this.nadeCapMat); cap.position.y = 0.09; g.add(cap);
    return g;
  }
  onNade(m) {
    const mesh = this.makeNadeMesh(m.k); mesh.position.set(m.p[0], m.p[1], m.p[2]); this.scene.add(mesh);
    this.nadeObjs.set(m.id, { k: m.k, mesh, st: { x: m.p[0], y: m.p[1], z: m.p[2], vx: m.v[0], vy: m.v[1], vz: m.v[2], t: 0, acc: 0 }, bt: 0, spin: [Math.random() * 8 - 4, Math.random() * 8 - 4] });
    const by = this.ent(m.by);
    if (!(by && by.isLocal)) A.playAt('throw', m.p[0], m.p[1], m.p[2], this.listener, 0.8);
  }
  updateNades(dt) {
    this.nadeCd -= dt;
    for (const [id, o] of this.nadeObjs) {
      const st = o.st, ovx = st.vx, ovy = st.vy, ovz = st.vz;
      stepNade(st, dt);
      o.mesh.position.set(st.x, st.y, st.z); o.mesh.rotation.x += o.spin[0] * dt; o.mesh.rotation.z += o.spin[1] * dt;
      o.bt -= dt;
      if (o.bt <= 0 && Math.hypot(st.vx - ovx, st.vy - ovy + 18 * dt, st.vz - ovz) > 3) { o.bt = 0.15; A.playAt('bounce', st.x, st.y, st.z, this.listener, 0.7); }
      if (st.t > NADES[o.k].fuse + 2.5) { this.scene.remove(o.mesh); this.nadeObjs.delete(id); }
    }
    const tn = this.now();
    for (let i = this.smokes.length - 1; i >= 0; i--) {
      const s = this.smokes[i], age = tn - s.start, left = s.end - tn;
      if (left <= 0) { this.scene.remove(s.group); s.mat.dispose(); this.smokes.splice(i, 1); continue; }
      const grow = Math.min(1, age / 0.9), ease = 1 - Math.pow(1 - grow, 3);
      s.group.children.forEach((c, j) => { const u = c.userData; c.scale.setScalar(u.r * ease); c.position.set(u.x * ease, u.y * (0.4 + 0.6 * ease), u.z * ease); c.rotation.y += dt * u.spin; });
      if (left < 3) { s.mat.transparent = true; s.mat.opacity = Math.max(0, left / 3); }
    }
  }
  onBoom(m) {
    const o = this.nadeObjs.get(m.id); if (o) { this.scene.remove(o.mesh); this.nadeObjs.delete(m.id); }
    const p = new V3(m.p[0], m.p[1], m.p[2]), L = this.listener, d = Math.hypot(p.x - L.x, p.y - L.y, p.z - L.z);
    if (m.k === 'frag') {
      this.fx.explosion(new V3(p.x, Math.max(0.5, p.y), p.z)); A.playAt('boom', p.x, p.y, p.z, L, 1.5);
      this.shake = Math.max(this.shake || 0, 1.3 * Math.max(0, 1 - d / 28));
    } else if (m.k === 'flash') {
      this.fx.burst(p, 26, 0xffffff, 7, 0.45, 0.18, 1); A.playAt('flash', p.x, p.y, p.z, L, 1.6);
      const tn = this.now();
      for (const id in (m.fl || {})) {
        const dur = m.fl[id], e = this.ent(id);
        if (e && e.isLocal && this.me.alive) { this.blindT = Math.max(this.blindT, dur); this.blindTot = Math.max(this.blindTot, dur); }
        if (e && e.ai) e.ai.blindUntil = tn + dur;
      }
    } else if (m.k === 'smoke') {
      A.playAt('hiss', p.x, p.y, p.z, L, 1.2); this.makeSmoke(p, m.r || 4.4, m.dur || 17);
    }
  }
  makeSmoke(p, r, dur) {
    const mat = new THREE.MeshStandardMaterial({ color: 0x9ea7b5, roughness: 1, metalness: 0 });
    const g = new THREE.Group(); g.position.set(p.x, 0, p.z);
    for (let i = 0; i < 16; i++) {
      const a = Math.random() * 6.283, rr = Math.sqrt(Math.random()) * r * 0.62;
      const c = new THREE.Mesh(this.smokeGeo, mat);
      c.userData = { x: Math.cos(a) * rr, z: Math.sin(a) * rr, y: 0.6 + Math.random() * r * 0.75, r: r * (0.34 + Math.random() * 0.2), spin: Math.random() - 0.5 };
      c.scale.setScalar(0.01); g.add(c);
    }
    this.scene.add(g); const tn = this.now();
    this.smokes.push({ x: p.x, y: 1.6, z: p.z, r, start: tn, end: tn + dur, group: g, mat });
  }
  /** перекрывает ли дым линию взгляда (для ботов) */
  smokeBlocked(ax, ay, az, bx, by, bz) {
    if (!this.smokes.length) return false;
    const tn = this.now(), dx = bx - ax, dy = by - ay, dz = bz - az, l2 = dx * dx + dy * dy + dz * dz || 1;
    for (const s of this.smokes) {
      if (tn < s.start + 0.5 || tn > s.end - 0.5) continue;
      let u = ((s.x - ax) * dx + (s.y - ay) * dy + (s.z - az) * dz) / l2; u = Math.max(0, Math.min(1, u));
      if (Math.hypot(ax + dx * u - s.x, ay + dy * u - s.y, az + dz * u - s.z) < s.r * 0.78) return true;
    }
    return false;
  }
  clearNades() {
    for (const o of this.nadeObjs.values()) this.scene.remove(o.mesh);
    this.nadeObjs.clear();
    for (const s of this.smokes) { this.scene.remove(s.group); s.mat.dispose(); }
    this.smokes.length = 0;
  }

  onSnap(m) {
    const tn = performance.now();
    for (const s of m.s) {
      const e = this.ents.get(s[0]); if (!e || e.isLocal || (e.ai)) continue;
      e.buf.push({ t: tn, x: s[1], y: s[2], z: s[3], yaw: s[4], pitch: s[5] });
      if (e.buf.length > 24) e.buf.shift();
      if (WEAPONS[s[6]] && (e.w !== s[6] || e.sk !== s[7])) { e.w = s[6]; e.sk = s[7] || 'stock'; if (e.avatar) e.avatar.setWeapon(e.w, SKIN_IDS.includes(e.sk) ? e.sk : 'stock'); }
      e.crouch = !!(s[8] & 1);
    }
  }
  onShot(m) {
    const e = this.ent(m.id); if (!e || e.isLocal || !e.avatar) return;
    const w = WEAPONS[m.w]; if (!w) return;
    e.lastShotT = this.now();
    e.avatar.fire();
    const mp = e.avatar.muzzlePos().clone();
    if (m.e) this.fx.tracer(mp, new V3(m.e[0], m.e[1], m.e[2]), w.tracer);
    A.playAt(w.snd, e.pos.x, e.pos.y + 1.4, e.pos.z, this.listener, 1.1);
    if (m.e && !w.melee) { const p = new V3(m.e[0], m.e[1], m.e[2]); if (m.n) this.fx.impact(p, new V3(m.n[0], m.n[1], m.n[2])); }
  }
  onDmg(m) {
    const v = this.ent(m.id); if (!v) return;
    v.hp = m.hp;
    if (v.avatar) v.avatar.hurt();
    const me = this.me.ent;
    if (v.isLocal) {
      this.me.hp = m.hp; A.play('hurt', 0.9); this.hurtFlash = 0.5;
      const by = m.by && this.ent(m.by);
      if (by) this.addDamageIndicator(by.pos);
    }
    if (me && m.by === me.id && !v.isLocal) {
      this.hitMark = 0.18; this.hitHead = m.hs; A.play(m.hs ? 'head' : 'hit', 0.9);
      const hm = $('hitmarker'); hm.classList.toggle('head', !!m.hs); hm.classList.remove('on'); void hm.offsetWidth; hm.classList.add('on');
    }
    if (v.avatar && v.alive) this.fx.burst(new V3(v.pos.x, v.pos.y + 1.3, v.pos.z), 6, m.hs ? 0xffe14a : 0xff5a3a, 2.5, 0.3, 0.07, 6);
  }
  onKill(m) {
    const v = this.ent(m.v), k = m.k && this.ent(m.k);
    if (v) {
      v.alive = false; v.hp = 0; v.d++; if (v.avatar) { this.fx.burst(new V3(v.pos.x, v.pos.y + 1, v.pos.z), 28, TEAM_COLORS[Math.max(0, v.team)] || '#ffffff', 5, 0.8, 0.12, 6); v.avatar.root.visible = false; }
      A.playAt('kill', v.pos.x, v.pos.y + 1, v.pos.z, this.listener, 0.8);
    }
    if (k) k.k++;
    const me = this.me.ent;
    this.pushFeed(k, v, m.w, m.hs);
    if (me && k === me && v !== me) { this.statKills++; if (m.hs) this.statHeads++; A.play('kill', 1); this.showMsg(m.hs ? '★ ' + t('headshot') : v.name, '', 900, 'kill'); }
    if (v && v.isLocal) {
      this.statDeaths++; this.me.alive = false; this.deathAt = this.now(); this.killer = k || null; this.setAct(false);
      this.scopeLvl = 0; this.mouse.r = false;
      this.spectate = null;
    }
  }
  onSync(m) {
    this.sync = { left: m.left, at: this.now(), phase: m.phase, round: m.round, score: m.score, bomb: m.bomb, mode: m.mode };
    for (const r of m.ents) {
      const e = this.ents.get(r[0]); if (!e) continue;
      e.k = r[1]; e.d = r[2]; e.lvl = r[5]; e.pts = r[7]; e.money = r[8] | 0; if (e.team !== r[6] && r[6] >= 0 && false) e.team = r[6];
      if (!e.isLocal) { e.hp = r[3]; }
      if (!r[4] && e.alive) { e.alive = false; if (e.avatar) e.avatar.root.visible = false; if (e.isLocal) this.me.alive = false; }
      else if (r[4] && !e.alive && !e.isLocal) { e.alive = true; e.buf.length = 0; }
    }
    this.hostBomb = m.bomb;
    if (m.bomb && m.bomb.state === 'planted' || (m.bomb && m.bomb.state === 'defusing')) this.ensureBomb(m.bomb.pos);
  }
  onPhase(m) {
    this.sync.phase = m.phase; this.sync.left = m.left; this.sync.at = this.now(); this.sync.round = m.round; this.sync.score = m.score;
    if (m.phase === 'freeze') { this.showMsg(t('round') + ' ' + m.round, t('freeze') + ' · ' + t('buyHint'), 3500); this.closeBuy(); if (this.bombMesh) { this.scene.remove(this.bombMesh); this.bombMesh = null; } this.fx.clearDecals(); A.play('spawn', 0.8); }
    if (m.phase === 'live') { this.showMsg('GO!', '', 900); this.closeBuy(); }
    if (m.phase === 'roundend') {
      const me = this.me.ent, win = me && me.team === m.winner;
      this.showMsg(win ? t('roundWin') : t('roundLose'), t('r_' + m.reason), 3500, win ? 'win' : 'lose'); A.play(win ? 'uiok' : 'ui', 1);
    }
  }
  onBomb(m) {
    const me = this.me.ent;
    if (m.state === 'planting') { this.prog = { label: t('planting'), p: m.p, mine: m.id === (me && me.id) }; this.progT = this.now(); }
    else if (m.state === 'defusing') { this.prog = { label: t('defusing'), p: m.p, mine: m.id === (me && me.id) }; this.progT = this.now(); }
    else this.prog = null;
    if (m.state === 'planted') { this.ensureBomb(m.pos); this.showMsg(t('planted'), '', 2500, 'warn'); A.play('boom', 0.25, 2.2); this.bombBeepT = 0; }
    if (m.state === 'defused') { this.showMsg(t('defused'), '', 2500, 'win'); if (this.bombMesh) this.bombMesh.userData.led.material.color.set(0x44ff88); }
    if (m.state === 'exploded') {
      const p = m.pos || (this.bombMesh && [this.bombMesh.position.x, 0, this.bombMesh.position.z]); this.showMsg(t('exploded'), '', 2500, 'warn');
      if (p) { this.fx.explosion(new V3(p[0], 1, p[2])); this.shake = 1.2; }
      A.play('boom', 1.4); if (this.bombMesh) { this.scene.remove(this.bombMesh); this.bombMesh = null; }
    }
    if (m.state === 'none' && this.bombMesh) { this.scene.remove(this.bombMesh); this.bombMesh = null; }
  }
  ensureBomb(pos) {
    if (this.bombMesh || !pos) return;
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.22, 0.34), new THREE.MeshStandardMaterial({ color: 0x2a303c, metalness: 0.7, roughness: 0.4 })); body.position.y = 0.11; g.add(body);
    const led = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), new THREE.MeshBasicMaterial({ color: 0xff2222 })); led.position.set(0.15, 0.26, 0); g.add(led);
    const dsp = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.02, 0.12), new THREE.MeshBasicMaterial({ color: 0xff8a34 })); dsp.position.set(-0.06, 0.23, 0); g.add(dsp);
    g.position.set(pos[0], 0, pos[2]); g.userData.led = led; this.scene.add(g); this.bombMesh = g;
  }
  onEnd(m) {
    this.ended = true; Y.gameplayStop();
    if (document.pointerLockElement === this.canvas) document.exitPointerLock();
    const me = this.me.ent;
    let result = 'draw';
    if (m.team !== undefined && m.team !== null) result = m.team === -1 ? 'draw' : (me && me.team === m.team ? 'win' : 'lose');
    else if (m.winner) result = me && m.winner === me.id ? 'win' : 'lose';
    const dur = this.now() - this.matchStart;
    const sum = { result, board: m.board, score: m.score, kills: this.statKills, deaths: this.statDeaths, heads: this.statHeads, myId: this.myId, mode: this.mode, teams: this.cfg.teams, online: this.online, dur };
    if (this.ui.onEnd) this.ui.onEnd(sum);
  }

  // ---------- локальный игрок ----------
  respawnLocal(m) {
    const me = this.me;
    me.alive = true; me.hp = m.hp; me.pos.set(m.pos[0], m.pos[1], m.pos[2]); me.vel.set(0, 0, 0); me.yaw = m.yaw; me.pitch = 0; me.punchP = me.punchY = 0; me.bloom = 0; me.spray = 0;
    me.lvl = m.lvl; this.spectate = null; this.killer = null; this.scopeLvl = 0; this.hurtFlash = 0;
    this.ammo = {}; this.slots = {};
    if (this.cfg.id === 'gg') this.giveLadder(m.lvl, true);
    else {
      for (const id of [m.loadout.p, m.loadout.s, 'phantom']) { if (!id) continue; const w = WEAPONS[id]; this.slots[w.slot] = id; this.ammo[id] = { mag: w.mag, res: w.reserve }; }
      this.selectWeapon(m.loadout.p || m.loadout.s, true);
      if (this.cfg.rounds) { const ent = this.ent(m.id); if (ent) ent.money = m.money; }
    }
    this.reloadT = 0; this.fireCd = 0; this.drawT = 0.45; this.inspectT = 0;
    A.play('spawn', 0.7);
    $('deathbox').classList.remove('on');
  }
  giveLadder(lvl, fresh) {
    const id = GG_LADDER[Math.min(lvl, GG_LADDER.length - 1)], w = WEAPONS[id];
    this.slots = { [w.slot]: id }; this.ammo[id] = { mag: w.mag, res: w.reserve };
    this.selectWeapon(id, true);
    if (!fresh) { this.showMsg(t('weaponname_' + id), (lvl + 1) + '/' + GG_LADDER.length, 1200); A.play('uiok', 0.8); }
  }
  selectSlot(s) { if (this.slots && this.slots[s]) this.selectWeapon(this.slots[s]); }
  cycleWeapon(d) {
    if (!this.slots) return; const order = [1, 2, 3].filter((s) => this.slots[s]); const cur = WEAPONS[this.cur].slot; let i = order.indexOf(cur);
    i = (i + d + order.length) % order.length; this.selectWeapon(this.slots[order[i]]);
  }
  selectWeapon(id, force) {
    if (!id || !WEAPONS[id] || (!force && id === this.cur)) return;
    if (!this.me.alive && !force) return;
    if (this.cur && this.cur !== id) this.lastW = this.cur;
    this.cur = id; this.reloadT = 0; this.scopeLvl = 0; this.drawT = 0.4; this.inspectT = 0; this.spray = 0;
    this.rebuildViewmodel(); A.play('click', 0.6);
  }
  rebuildViewmodel() {
    if (this.vmWeapon) this.vmRoot.remove(this.vmWeapon);
    const id = this.cur, skin = equipped(id);
    const g = new THREE.Group(); const w = buildWeapon(id, skin); g.add(w);
    g.add(buildHands(w.userData.info, skinMaterials(skin)));
    const flash = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.22), new THREE.MeshBasicMaterial({ color: 0xffe9a0, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    flash.position.set(...w.userData.info.muzzle); flash.position.z -= 0.05; flash.visible = false; w.add(flash);
    this.vmFlash = flash; this.vmWeapon = g; this.vmInfo = w.userData.info; this.vmRoot.add(g); this.vmMuzzle = w.userData.muzzle;
    g.scale.setScalar(this.vmInfo.scale);
  }
  inspect() { if (this.me.alive && !this.reloadT && this.inspectT <= 0) this.inspectT = 3.2; }
  onRightClick() {
    if (!this.me || !this.me.alive) return;
    const w = WEAPONS[this.cur];
    if (w.zoom) { this.scopeLvl = (this.scopeLvl + 1) % (w.zoom.length + 1); A.play('click', 0.6); }
    else if (w.melee) this.tryFire(true);
  }
  startReload() {
    const w = WEAPONS[this.cur], a = this.ammo && this.ammo[this.cur];
    if (!this.me.alive || !a || w.melee || this.reloadT > 0 || a.mag >= w.mag || a.res <= 0) return;
    this.reloadT = w.reload; this.scopeLvl = 0; this.inspectT = 0; A.play('reload', 0.9);
    setTimeout(() => A.play('clack', 0.8), w.reload * 650);
  }
  setAct(on) {
    if (!this.running || !this.cfg || !this.cfg.rounds || !this.net) return;
    if (this.me.acting === on) return;
    if (on && !(this.me.alive && this.sync.phase !== 'freeze')) return;
    this.me.acting = on; this.net.send({ t: 'act', on });
  }

  /** трассировка по сущностям и стенам */
  hitscan(ox, oy, oz, dx, dy, dz, maxD, shooter) {
    const wall = rayWorld(ox, oy, oz, dx, dy, dz, maxD);
    const n = [hitNormal[0], hitNormal[1], hitNormal[2]];
    let best = { t: wall, ent: null, zone: null, n };
    const info = this.matchInfo();
    for (const e of this.ents.values()) {
      if (e === shooter || !e.alive) continue;
      if (info.teams && shooter && e.team === shooter.team) continue;
      const r = rayEnt(ox, oy, oz, dx, dy, dz, e);
      if (r && r.t < best.t) best = { t: r.t, ent: e, zone: r.zone, n: null };
    }
    return best;
  }
  /** с позиции локального игрока */
  camDir(yaw, pitch, out) { const cp = Math.cos(pitch); return out.set(-Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp); }

  spreadNow() {
    const w = WEAPONS[this.cur || 'nova'], me = this.me;
    if (w.zoom && this.scopeLvl > 0 && me.ground && Math.hypot(me.vel.x, me.vel.z) < 1.5) return w.scopedSpread;
    const sp = Math.hypot(me.vel.x, me.vel.z) / 5.5;
    let s = w.spread * (me.crouchT > 0.5 ? w.spreadCrouch : 1) + sp * w.spreadMove * (me.crouchT > 0.5 ? 0.7 : 1) + (me.ground ? 0 : w.spreadAir) + me.bloom;
    return Math.min(s, w.spreadMax + w.spreadMove + 2);
  }

  tryFire(alt) {
    const me = this.me, w = WEAPONS[this.cur], now = this.now();
    if (!me.alive || this.fireCd > 0 || this.drawT > 0 || this.paused) return;
    if (this.cfg.rounds && this.sync.phase === 'freeze') return;
    this.inspectT = 0;
    const eye = me.pos.y + PLAYER.eye - (PLAYER.eye - PLAYER.eyeCrouch) * me.crouchT;
    const origin = new V3(me.pos.x, eye, me.pos.z);
    const myEnt = me.ent;
    if (w.melee) {
      this.fireCd = alt ? w.interval2 : w.interval; this.swing = { t: 0, alt: !!alt };
      A.play('knife', 0.9);
      const f = this.camDir(me.yaw, me.pitch, new V3());
      let best = null, bd = 1e9;
      for (const e of this.ents.values()) {
        if (e === myEnt || !e.alive) continue; if (this.cfg.teams && e.team === myEnt.team) continue;
        const dx = e.pos.x - origin.x, dy = e.pos.y + 1.0 - origin.y, dz = e.pos.z - origin.z, d = Math.hypot(dx, dy, dz);
        if (d > w.range + 0.4) continue;
        if ((dx * f.x + dy * f.y + dz * f.z) / d < 0.62) continue;
        if (blocked(origin.x, origin.y, origin.z, e.pos.x, e.pos.y + 1.0, e.pos.z)) continue;
        if (d < bd) { bd = d; best = e; }
      }
      if (best) { this.net.send({ t: 'hit', target: best.id, w: w.id, alt: !!alt }); this.fx.burst(new V3(best.pos.x, best.pos.y + 1.2, best.pos.z), 8, 0xff5a3a, 3, 0.3, 0.07, 6); }
      return;
    }
    const a = this.ammo[this.cur];
    if (this.reloadT > 0) return;
    if (a.mag <= 0) { A.play('click', 0.8); this.fireCd = 0.25; if (a.res > 0) this.startReload(); return; }
    a.mag--; this.fireCd = 60 / w.rpm;
    // отдача
    if (now - me.lastShot > w.recoverTime + 60 / w.rpm) me.spray = 0;
    me.lastShot = now;
    const rec = w.recoil[Math.min(me.spray, w.recoil.length - 1)]; me.spray++;
    const scoped = this.scopeLvl > 0 ? 0.6 : 1;
    me.punchP += rec[0] * DEG * scoped; me.punchY += rec[1] * DEG * scoped;
    const spread = this.spreadNow();
    me.bloom = Math.min(w.spreadMax, me.bloom + w.spreadPerShot);
    // вспышка, звук
    this.vmKick = Math.min(1, (this.vmKick || 0) + 1); this.flashT = 0.045; this.vmLight.intensity = 3;
    A.play(w.snd, 1.0);
    // лучи
    const fwd = this.camDir(me.yaw + me.punchY, me.pitch + me.punchP, new V3());
    const right = new V3(Math.cos(me.yaw), 0, -Math.sin(me.yaw)), up = new V3().crossVectors(right, fwd).normalize();
    const range = w.range, hits = new Map(); let endPt = null, endN = null;
    const start = origin.clone().addScaledVector(fwd, 0.55).addScaledVector(right, 0.17).addScaledVector(up, -0.13);
    for (let p = 0; p < w.pellets; p++) {
      const ang = spread * DEG * Math.sqrt(Math.random()), th = Math.random() * 6.2832;
      const d = fwd.clone().addScaledVector(right, Math.cos(th) * Math.tan(ang)).addScaledVector(up, Math.sin(th) * Math.tan(ang)).normalize();
      const r = this.hitscan(origin.x, origin.y, origin.z, d.x, d.y, d.z, range, myEnt);
      const end = origin.clone().addScaledVector(d, Math.min(r.t, range));
      if (r.ent) {
        const h = hits.get(r.ent.id) || { n: 0, h: 0 }; if (r.zone === 'head') h.h++; else h.n++; hits.set(r.ent.id, h);
        if (r.ent.avatar) { this.fx.burst(end, 3, r.zone === 'head' ? 0xffe14a : 0xff5a3a, 2.2, 0.25, 0.06, 6); }
      } else if (r.t < range) { this.fx.impact(end, new V3(r.n[0], r.n[1], r.n[2])); if (p === 0) endN = r.n; }
      if (p < 3 || w.pellets === 1) this.fx.tracer(start, end, w.tracer);
      if (p === 0) endPt = end;
    }
    for (const [id, h] of hits) this.net.send({ t: 'hit', target: id, w: w.id, n: h.n, h: h.h });
    if (this.net && this.online) this.net.send({ t: 'shot', w: w.id, e: [+endPt.x.toFixed(2), +endPt.y.toFixed(2), +endPt.z.toFixed(2)], n: endN });
    if (a.mag <= 0 && a.res > 0) setTimeout(() => this.me.alive && this.startReload(), 250);
    if (w.zoom && this.scopeLvl > 0) { this.scopeLvl = 0; this.rescope = 0.9; } // болтовой затвор
  }

  // ---------- боты (для хоста) ----------
  matchInfo() {
    const s = this.sync, b = s.bomb;
    return {
      teams: this.cfg.teams, rounds: !!this.cfg.rounds, frozen: this.cfg.rounds && (s.phase === 'freeze' || s.phase === 'roundend' || s.phase === 'wait') || this.ended,
      bomb: b ? { state: b.state, pos: b.pos } : null, protectedUntil: true,
    };
  }
  botSound(e, name) { A.playAt(name, e.pos.x, e.pos.y + 1, e.pos.z, this.listener, 0.8); }
  sendAct(e, on) { if (this.net) this.net.send({ t: 'act', by: e.id, on }); }
  fireBot(e, ai, yaw, pitch, w) {
    const ox = ai.p.x, oy = ai.p.y + 1.55, oz = ai.p.z;
    const cp = Math.cos(pitch), d = new V3(-Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp);
    e.lastShotT = this.now();
    if (w.melee) {
      A.playAt('knife', ox, oy, oz, this.listener, 0.9);
      let best = null;
      for (const o of this.ents.values()) { if (o === e || !o.alive || (this.cfg.teams && o.team === e.team)) continue; if (Math.hypot(o.pos.x - ox, o.pos.z - oz) < 2.3 && Math.abs(o.pos.y - ai.p.y) < 1.5) best = o; }
      if (best) this.net.send({ t: 'hit', by: e.id, target: best.id, w: w.id, alt: false });
      return;
    }
    const origin = new V3(ox, oy, oz), hits = new Map(); let endPt = null;
    const right = new V3(Math.cos(yaw), 0, -Math.sin(yaw)), up = new V3().crossVectors(right, d).normalize();
    for (let p = 0; p < w.pellets; p++) {
      const dd = w.pellets > 1 ? d.clone().addScaledVector(right, (Math.random() - 0.5) * 0.12).addScaledVector(up, (Math.random() - 0.5) * 0.12).normalize() : d;
      const r = this.hitscan(ox, oy, oz, dd.x, dd.y, dd.z, w.range, e);
      const end = origin.clone().addScaledVector(dd, Math.min(r.t, w.range));
      if (r.ent) { const h = hits.get(r.ent.id) || { n: 0, h: 0 }; if (r.zone === 'head') h.h++; else h.n++; hits.set(r.ent.id, h); }
      else if (r.t < w.range) this.fx.impact(end, new V3(r.n[0], r.n[1], r.n[2]));
      if (p === 0) endPt = end;
    }
    if (e.avatar) { e.avatar.fire(); const mp = e.avatar.muzzlePos().clone(); this.fx.tracer(mp, endPt, w.tracer); }
    A.playAt(w.snd, ox, oy, oz, this.listener, 1.1);
    for (const [id, h] of hits) this.net.send({ t: 'hit', by: e.id, target: id, w: w.id, n: h.n, h: h.h });
    if (this.online) this.net.send({ t: 'shot', by: e.id, w: w.id, e: [+endPt.x.toFixed(2), +endPt.y.toFixed(2), +endPt.z.toFixed(2)] });
  }

  // ---------- главный цикл ----------
  loop() {
    requestAnimationFrame(() => this.loop());
    if (!this.running) { this.menuRender(); return; }
    const tn = this.now(), raw = tn - this.lastT; let dt = Math.min(0.05, raw); this.lastT = tn;
    if (document.hidden) return;
    this.autoQuality(Math.min(raw, 0.5));
    if (!this.paused) this.update(dt, tn); else if (this.localM) { /* офлайн пауза */ }
    this.render(dt);
  }

  /** Если первые секунды матча идут медленно, снижаем качество графики */
  autoQuality(frame) {
    const set = store.d.settings;
    if (set.auto === false || this.paused || !this.running) return;
    const a = this.aq || (this.aq = { t: 0, n: 0, done: false });
    if (a.done) return;
    if (a.t < 1.5) { a.t += frame; return; } // прогрев
    a.n++; a.sum = (a.sum || 0) + frame;
    if (a.sum > 4) {
      const fps = a.n / a.sum; a.done = true;
      if (fps < 32 && set.quality !== 'low') {
        set.quality = set.quality === 'high' ? 'mid' : 'low'; this.resize();
        if (this.world.lights) this.world.lights.forEach((l, i) => { l.visible = i < (set.quality === 'low' ? 2 : 4); });
        if (this.ui.toast) this.ui.toast(t('autoLow'));
        this.aq = null;
      }
    }
  }

  menuRender() {
    if (!this.world || document.hidden) return;
    const t0 = this.now() * 0.06;
    this.cam.position.set(Math.sin(t0) * 70, 24 + Math.sin(t0 * 1.7) * 3, Math.cos(t0) * 86);
    this.cam.fov = 70; this.cam.updateProjectionMatrix(); this.cam.lookAt(0, 2, 0);
    this.vmRoot.visible = false; this.world.update(0.016);
    this.renderer.clear(); this.renderer.render(this.scene, this.cam);
  }

  update(dt, tn) {
    const me = this.me;
    if (this.localM) this.localM.update(dt);
    // боты
    if (this.isHost) {
      const out = [];
      for (const e of this.ents.values()) {
        if (!e.ai) continue;
        if (e.alive) {
          e.ai.think(dt);
          const a = e.ai; e.pos.set(a.p.x, a.p.y, a.p.z); e.yaw = a.yaw; e.pitch = a.pitch; e.speed = a.moveSpeed; e.w = a.wid;
          if (e.avatar) e.avatar.setWeapon(e.w, e.sk);
          out.push([e.id, +a.p.x.toFixed(2), +a.p.y.toFixed(2), +a.p.z.toFixed(2), +a.yaw.toFixed(3), +a.pitch.toFixed(3), a.wid, e.sk, 0]);
        }
      }
      this.accBot += dt;
      if (out.length && this.accBot > 0.05) { this.accBot = 0; this.net.send({ t: 'bst', s: out }); }
    }
    this.updateLocal(dt, tn);
    this.updateRemote(dt, tn);
    this.fx.update(dt);
    this.updateNades(dt);
    this.world.update(dt);
    // отправка состояния
    this.accState += dt;
    if (this.accState > 0.05 && me.alive && this.net) {
      this.accState = 0;
      this.net.send({ t: 'st', x: +me.pos.x.toFixed(2), y: +me.pos.y.toFixed(2), z: +me.pos.z.toFixed(2), yaw: +me.yaw.toFixed(3), pitch: +me.pitch.toFixed(3), w: this.cur, sk: equipped(this.cur), fl: me.crouchT > 0.5 ? 1 : 0 });
    }
    // бомба: мигание и писк
    if (this.bombMesh && this.sync.bomb && this.sync.bomb.state !== 'none') {
      const left = Math.max(0, (this.sync.bomb.left || 0) - (tn - this.sync.at));
      const iv = Math.max(0.12, left / 40 * 1.0);
      this.bombBeepT -= dt;
      if (this.bombBeepT <= 0 && this.sync.bomb.state !== 'defused') { this.bombBeepT = iv; this.bombMesh.userData.led.material.color.set(0xff2222); setTimeout(() => this.bombMesh && this.bombMesh.userData.led.material.color.set(0x440000), 80); A.playAt('beep', this.bombMesh.position.x, 0.3, this.bombMesh.position.z, this.listener, 1.2); }
    }
    if (this.prog && tn - this.progT > 0.5) this.prog = null;
  }

  updateLocal(dt, tn) {
    const me = this.me, set = store.d.settings;
    const k = this.keys;
    const mdx = this.mouse.dx, mdy = this.mouse.dy; this.mouse.dx = this.mouse.dy = 0;
    const w = WEAPONS[this.cur || 'nova'];
    const zoomF = this.scopeLvl > 0 && w.zoom ? w.zoom[this.scopeLvl - 1] / set.fov : 1;
    if (me.alive) {
      const sens = 0.0022 * set.sens * zoomF;
      me.yaw -= mdx * sens; me.pitch = clamp(me.pitch - mdy * sens, -1.5, 1.5);
      const frozen = this.cfg.rounds && (this.sync.phase === 'freeze' || this.sync.phase === 'roundend');
      // движение
      let fx = 0, fz = 0;
      if (k.KeyW || k.ArrowUp) fz += 1; if (k.KeyS || k.ArrowDown) fz -= 1; if (k.KeyD || k.ArrowRight) fx += 1; if (k.KeyA || k.ArrowLeft) fx -= 1;
      if (this.stick && (this.stick.x || this.stick.y)) { fx += this.stick.x; fz -= this.stick.y; }
      const crouch = !!(k.ControlLeft || k.KeyC || k.ControlRight), walk = !!(k.ShiftLeft || k.ShiftRight);
      me.crouchT += ((crouch ? 1 : 0) - me.crouchT) * Math.min(1, dt * 12);
      const len = Math.hypot(fx, fz);
      let sp = 5.8 * w.speed * (walk ? 0.5 : 1) * (1 - me.crouchT * 0.55) * (this.scopeLvl > 0 ? 0.6 : 1);
      if (frozen || me.acting) sp = 0;
      const sn = Math.sin(me.yaw), cs = Math.cos(me.yaw);
      let wx = 0, wz = 0;
      if (len > 0.01) { fx /= Math.max(1, len); fz /= Math.max(1, len); wx = (-sn * fz + cs * fx) * sp; wz = (-cs * fz - sn * fx) * sp; }
      const a = me.ground ? Math.min(1, dt * 11) : Math.min(1, dt * 1.6);
      me.vel.x += (wx - me.vel.x) * a; me.vel.z += (wz - me.vel.z) * a;
      me.vel.y -= 24 * dt;
      if (k.Space && me.ground && !frozen) { me.vel.y = 7.9; me.ground = false; A.play('jump', 0.5); }
      const h = PLAYER.h - (PLAYER.h - PLAYER.hCrouch) * me.crouchT;
      const wasG = me.ground;
      me.ground = moveEntity(me.pos, me.vel, dt, h);
      if (me.ground && !wasG) A.play('step', 0.9, 0.7);
      // шаги
      const spd = Math.hypot(me.vel.x, me.vel.z);
      if (me.ground && spd > 3.2 && !walk && me.crouchT < 0.4) { me.stepAcc += spd * dt; if (me.stepAcc > 2.2) { me.stepAcc = 0; A.play('step', 0.7); } }
      me.bobT += spd * dt * (me.ground ? 1 : 0);
      // отдача / разброс
      const rec = Math.exp(-dt * (this.mouse.l ? 2.2 : 7));
      me.punchP *= rec; me.punchY *= rec;
      me.bloom = Math.max(0, me.bloom - dt * 5);
      // оружие
      this.fireCd -= dt; this.drawT -= dt; if (this.inspectT > 0) this.inspectT -= dt; if (this.rescope > 0) this.rescope -= dt;
      if (this.reloadT > 0) { this.reloadT -= dt; if (this.reloadT <= 0) { const a2 = this.ammo[this.cur], need = w.mag - a2.mag, take = Math.min(need, a2.res); a2.mag += take; a2.res -= take; } }
      if (!frozen) {
        if (w.melee) { if (this.mouse.l && this.fireCd <= 0) this.tryFire(false); }
        else if (this.mouse.l && (w.auto || this.fireEdge)) this.tryFire(false);
      }
      this.fireEdge = false;
      // E: автоотпускание
      if (me.acting && !(k.KeyE || (this.touch && this.actTouch))) { /* держим до keyup */ }
      this.localAct();
    } else {
      this.fireEdge = false;
    }
    const le = me.ent;
    if (le) { le.pos.copy(me.pos); le.yaw = me.yaw; le.pitch = me.pitch; le.crouch = me.crouchT > 0.5; le.speed = Math.hypot(me.vel.x, me.vel.z); le.w = this.cur || le.w; }
    this.listener.x = me.pos.x; this.listener.y = me.pos.y + 1.5; this.listener.z = me.pos.z; this.listener.yaw = me.yaw;
  }
  localAct() {
    // подсказка у точки
    const me = this.me, hint = $('interact'); let txt = '';
    if (this.cfg.rounds && me.alive && me.ent) {
      if (me.ent.team === 0 && (!this.sync.bomb || this.sync.bomb.state === 'none' || this.sync.bomb.state === 'planting')) {
        if (SITES.some((s) => Math.hypot(me.pos.x - s.x, me.pos.z - s.z) < s.r)) txt = t('pressE');
      } else if (me.ent.team === 1 && this.sync.bomb && this.sync.bomb.pos && (this.sync.bomb.state === 'planted' || this.sync.bomb.state === 'defusing')) {
        if (Math.hypot(me.pos.x - this.sync.bomb.pos[0], me.pos.z - this.sync.bomb.pos[2]) < 2.6) txt = t('pressEd');
      }
    }
    if (hint.textContent !== txt) { hint.textContent = txt; hint.style.display = txt ? 'block' : 'none'; }
  }

  updateRemote(dt, tn) {
    const rt = performance.now() - 110;
    for (const e of this.ents.values()) {
      if (e.isLocal || !e.avatar) continue;
      if (!e.alive) { e.avatar.root.visible = false; continue; }
      if (!e.ai) { // интерполяция
        const b = e.buf; let ox = e.pos.x, oz = e.pos.z;
        if (b.length) {
          let i = b.length - 1; while (i > 0 && b[i - 1].t > rt) i--;
          if (i === 0 || b[i].t <= rt) { const s = b[Math.min(i, b.length - 1)]; e.pos.set(s.x, s.y, s.z); e.yaw = s.yaw; e.pitch = s.pitch; }
          else { const a = b[i - 1], c = b[i], f = (rt - a.t) / Math.max(1, c.t - a.t); e.pos.set(a.x + (c.x - a.x) * f, a.y + (c.y - a.y) * f, a.z + (c.z - a.z) * f); let dy = c.yaw - a.yaw; while (dy > Math.PI) dy -= 6.2832; while (dy < -Math.PI) dy += 6.2832; e.yaw = a.yaw + dy * f; e.pitch = a.pitch + (c.pitch - a.pitch) * f; }
        }
        e.speed = Math.hypot(e.pos.x - ox, e.pos.z - oz) / Math.max(dt, 0.001) * 0.5 + e.speed * 0.5;
      }
      const av = e.avatar; av.root.visible = !!(e.ai || e.buf.length || e.pos.lengthSq() > 0.01); av.root.position.copy(e.pos);
      av.update(dt, e.speed, e.crouch, e.yaw, e.pitch);
      const me = this.me.ent, friendly = this.cfg.teams && me && e.team === me.team;
      av.tag.visible = !!friendly;
      // шаги соперников
      if (e.speed > 3.2) { e.stepAcc += e.speed * dt; if (e.stepAcc > 2.4) { e.stepAcc = 0; A.playAt('step', e.pos.x, e.pos.y, e.pos.z, this.listener, 0.6); } }
    }
  }

  addDamageIndicator(p) {
    const me = this.me, dx = p.x - me.pos.x, dz = p.z - me.pos.z;
    const ang = Math.atan2(-dx, -dz) - me.yaw; // относительно взгляда
    const el = document.createElement('div'); el.className = 'dmgarrow'; el.style.transform = `rotate(${(-ang * 180 / Math.PI)}deg)`;
    $('dmgind').appendChild(el); setTimeout(() => el.remove(), 900);
  }

  // ---------- камера и рендер ----------
  render(dt) {
    const me = this.me, set = store.d.settings, cam = this.cam, tn = this.now();
    let showVm = false;
    const w = WEAPONS[this.cur || 'nova'];
    if (me.alive) {
      const eye = me.pos.y + PLAYER.eye - (PLAYER.eye - PLAYER.eyeCrouch) * me.crouchT;
      cam.position.set(me.pos.x, eye + Math.sin(me.bobT * 2.2) * 0.012, me.pos.z);
      cam.rotation.set(me.pitch + me.punchP, me.yaw + me.punchY, 0);
      const fovT = this.scopeLvl > 0 && w.zoom ? w.zoom[this.scopeLvl - 1] : set.fov;
      cam.fov += (fovT - cam.fov) * Math.min(1, dt * 14); cam.updateProjectionMatrix();
      showVm = !(this.scopeLvl > 0 && w.zoom);
    } else {
      // наблюдение / камера смерти
      const tgt = this.spectateTarget();
      if (tgt) {
        cam.position.set(tgt.pos.x, tgt.pos.y + 1.6, tgt.pos.z); cam.rotation.set(tgt.pitch, tgt.yaw, 0);
        if (tgt.avatar) tgt.avatar.root.visible = false;
      } else {
        const k = this.killer;
        cam.position.set(me.pos.x, Math.max(0.35, me.pos.y + 0.5), me.pos.z);
        if (k) { const dx = k.pos.x - me.pos.x, dz = k.pos.z - me.pos.z; cam.rotation.set(0.2, Math.atan2(-dx, -dz), 0.15); }
      }
      cam.fov += (set.fov - cam.fov) * Math.min(1, dt * 10); cam.updateProjectionMatrix();
    }
    if (this.shake > 0) { this.shake -= dt; cam.position.x += (Math.random() - 0.5) * this.shake * 0.2; cam.position.y += (Math.random() - 0.5) * this.shake * 0.2; }
    // viewmodel
    this.vmRoot.visible = showVm && me.alive;
    if (this.vmRoot.visible && this.vmWeapon) this.animateVm(dt, tn);
    // вспышка
    if (this.flashT > 0) { this.flashT -= dt; this.vmFlash.visible = true; this.vmFlash.rotation.z = Math.random() * 6; this.vmFlash.scale.setScalar(0.8 + Math.random() * 0.8); if (this.flashT <= 0) { this.vmFlash.visible = false; } }
    else if (this.vmFlash) this.vmFlash.visible = false;
    this.vmLight.intensity *= Math.exp(-dt * 40);
    if (this.vmMuzzle) { this.vmMuzzle.getWorldPosition(this.vmLight.position); }
    this.vmCam.position.set(0, 0, 0); this.vmCam.fov = 62;

    tickSkins(tn);
    this.renderer.clear();
    this.renderer.render(this.scene, cam);
    if (this.vmRoot.visible) { this.renderer.clearDepth(); this.renderer.render(this.vmScene, this.vmCam); }
    this.updateHud(dt, tn);
  }

  animateVm(dt, tn) {
    const me = this.me, info = this.vmInfo, g = this.vmWeapon, w = WEAPONS[this.cur];
    const spd = Math.hypot(me.vel.x, me.vel.z);
    const bob = me.ground ? Math.min(1, spd / 5) : 0;
    this.vmSway = this.vmSway || { x: 0, y: 0 };
    this.vmSway.x += (-this.lastDX * 0.0006 - this.vmSway.x) * Math.min(1, dt * 10); this.vmSway.y += (this.lastDY * 0.0006 - this.vmSway.y) * Math.min(1, dt * 10);
    this.vmKick = Math.max(0, (this.vmKick || 0) - dt * 14);
    let [x, y, z] = info.view; y += 0.085; x -= 0.015;
    x += this.vmSway.x + Math.sin(me.bobT * 1.1) * 0.012 * bob; y += this.vmSway.y + Math.abs(Math.cos(me.bobT * 1.1)) * 0.01 * bob;
    z += this.vmKick * (w.kick || 0.02) * 2.2;
    let rx = this.vmKick * (w.kick || 0.02) * 6, ry = 0, rz = 0;
    // дыхание
    y += Math.sin(tn * 1.6) * 0.0015;
    if (this.drawT > 0) { const u = this.drawT / 0.4; y -= u * 0.3; rx += u * 0.7; }
    if (this.reloadT > 0) { const u = 1 - this.reloadT / w.reload, s = Math.sin(u * Math.PI); y -= 0.1 * s; rx -= 0.7 * s; rz += 0.5 * s; x -= 0.04 * s; }
    if (this.inspectT > 0) { const u = 1 - this.inspectT / 3.2, e = Math.sin(Math.min(1, u * 1.1) * Math.PI); x -= 0.1 * e; y += 0.04 * e; z += 0.08 * e; ry = Math.sin(u * Math.PI * 2) * 0.9 * e + e * 0.5; rz += Math.sin(u * Math.PI * 4) * 0.25 * e; rx -= 0.2 * e; }
    if (this.swing) { this.swing.t += dt * (this.swing.alt ? 3.2 : 4.6); const u = this.swing.t; if (u >= 1) this.swing = null; else { const s = Math.sin(u * Math.PI); if (this.swing.alt) { z -= 0.18 * s; y += 0.02 * s; rx += 0.1 * s; } else { x -= 0.18 * s; rz += 1.1 * s; ry -= 0.7 * s; y -= 0.05 * s; } } }
    g.position.set(x, y, z); g.rotation.set(rx, ry, rz);
    const wu = this.vmWeapon.children[0] && this.vmWeapon.children[0].userData;
    if (wu) {
      if (wu.mag) {
        if (this.reloadT > 0) { const u = 1 - this.reloadT / w.reload, k = Math.sin(clamp((u - 0.22) / 0.4, 0, 1) * Math.PI); wu.mag.position.y = -0.2 * k; wu.mag.position.z = 0.03 * k; }
        else { wu.mag.position.y = 0; wu.mag.position.z = 0; }
      }
      if (wu.slide) wu.slide.position.z = wu.slideZ + this.vmKick * 0.05;
      if (wu.pump) { const k = this.vmKick > 0.2 ? Math.min(1, (this.vmKick - 0.2)) : 0; wu.pump.position.z = wu.pumpZ + 0.09 * Math.sin(k * Math.PI); }
    }
  }

  spectateTarget() {
    if (this.me.alive) return null;
    if (this.cfg.rounds) {
      const me = this.me.ent; let t = this.spectate && this.spectate.alive ? this.spectate : null;
      if (!t) { for (const e of this.ents.values()) if (e.alive && !e.isLocal && me && e.team === me.team) { t = e; break; } }
      if (!t) for (const e of this.ents.values()) if (e.alive && !e.isLocal) { t = e; break; }
      this.spectate = t; return t;
    }
    return null;
  }
  cycleSpectate() {
    if (!this.cfg.rounds) return;
    const list = [...this.ents.values()].filter((e) => e.alive && !e.isLocal && this.me.ent && e.team === this.me.ent.team); if (!list.length) return;
    const i = list.indexOf(this.spectate); this.spectate = list[(i + 1) % list.length];
  }

  // ---------- HUD ----------
  setupHud() {
    const ch = $('crosshair'); if (!ch.firstChild) { for (const c of ['t', 'b', 'l', 'r']) { const d = document.createElement('i'); d.className = 'ch ' + c; ch.appendChild(d); } const dot = document.createElement('i'); dot.className = 'chdot'; ch.appendChild(dot); }
    ch.style.setProperty('--cc', store.d.settings.cross);
    $('killfeed').innerHTML = ''; $('msg').className = ''; $('msg').textContent = ''; $('submsg').textContent = '';
    this.lastDX = 0; this.lastDY = 0; this.hurtFlash = 0; this.hitMark = 0;
    this.cur = null; this.ammo = {}; this.slots = {}; this.aq = null;
    const labels = { dm: 'mode_dm', tdm: 'mode_tdm', gg: 'mode_gg', bomb: 'mode_bomb' };
    $('modeLabel').textContent = t(labels[this.mode]);
    $('deathbox').classList.remove('on'); $('board').classList.remove('on'); $('buyT').textContent = t('buyTitle'); $('buyH').textContent = t('buyKeys'); this.closeBuy();
    $('hud').classList.toggle('touch', this.touch);
    const act = $('tAct'); if (act) act.style.display = this.cfg.rounds ? 'flex' : 'none';
    $('radar').style.display = this.cfg.teams ? 'block' : 'none';
    this.radarCtx = $('radar').getContext('2d');
  }
  showMsg(text, sub, ms, cls) {
    const m = $('msg'); m.textContent = text; m.className = 'on ' + (cls || ''); $('submsg').textContent = sub || '';
    clearTimeout(this.msgT); this.msgT = setTimeout(() => { m.className = ''; $('submsg').textContent = ''; }, ms || 1500);
  }
  pushFeed(k, v, wid, hs) {
    const me = this.me.ent, el = document.createElement('div'); el.className = 'kf' + ((k && k === me) || v === me ? ' me' : '');
    const col = (e) => `<b style="color:${colorFor(e.team, e.id)}">${esc(e.name)}</b>`;
    el.innerHTML = (k ? col(k) : '') + ` <span class="kw">${esc(t('weaponname_' + wid))}${hs ? ' ⌖' : ''}</span> ` + (v ? col(v) : '');
    const kf = $('killfeed'); kf.appendChild(el); while (kf.children.length > 6) kf.firstChild.remove(); setTimeout(() => el.remove(), 6000);
  }
  showBoard(on) { this.boardOn = on; $('board').classList.toggle('on', on); if (on) this.renderBoard(); }
  renderBoard() {
    const list = [...this.ents.values()].sort((a, b) => (b.pts - a.pts) || (b.k - a.k) || (a.d - b.d));
    const row = (e) => `<tr class="${e.isLocal ? 'me' : ''} ${e.alive ? '' : 'dead'}"><td style="color:${colorFor(e.team, e.id)}">${esc(e.name)}${e.bot ? ' <small>🤖</small>' : ''}</td><td>${e.k}</td><td>${e.d}</td><td>${e.pts}</td></tr>`;
    let h = '';
    if (this.cfg.teams) {
      for (const tm of [0, 1]) {
        const names = this.mode === 'bomb' ? [t('attackers'), t('defenders')] : [t('teamA'), t('teamB')];
        h += `<h4 style="color:${TEAM_COLORS[tm]}">${names[tm]} — ${this.sync.score[tm]}</h4><table><tr><th></th><th>${t('kills')}</th><th>${t('deaths')}</th><th>${t('score')}</th></tr>${list.filter((e) => e.team === tm).map(row).join('')}</table>`;
      }
    } else h = `<table><tr><th></th><th>${t('kills')}</th><th>${t('deaths')}</th><th>${t('score')}</th></tr>${list.map(row).join('')}</table>`;
    $('boardBody').innerHTML = h;
  }

  updateHud(dt, tn) {
    const me = this.me, w = WEAPONS[this.cur || 'nova'], sync = this.sync;
    this.lastDX += (this.mouse.dx - this.lastDX) * 0.5; this.lastDY += (this.mouse.dy - this.lastDY) * 0.5;
    // верх
    const left = Math.max(0, sync.left - (tn - sync.at));
    const mm = Math.floor(left / 60), ss = Math.floor(left % 60);
    $('timer').textContent = mm + ':' + (ss < 10 ? '0' : '') + ss;
    const me2 = me.ent;
    if (this.cfg.teams) {
      $('scoreL').textContent = sync.score[0]; $('scoreR').textContent = sync.score[1];
      $('scoreL').style.color = TEAM_COLORS[0]; $('scoreR').style.color = TEAM_COLORS[1];
      if (this.mode === 'bomb') {
        const al = [0, 0]; for (const e of this.ents.values()) if (e.alive && e.team >= 0) al[e.team]++;
        $('subTop').textContent = t('round') + ' ' + sync.round + ' · ' + al[0] + ' vs ' + al[1];
      } else $('subTop').textContent = '';
    } else {
      const mine = me2 ? me2.pts : 0; let lead = 0; for (const e of this.ents.values()) lead = Math.max(lead, e.pts);
      if (this.mode === 'gg') { $('scoreL').textContent = (me2 ? me2.lvl + 1 : 1) + '/' + GG_LADDER.length; $('scoreR').textContent = ''; $('subTop').textContent = ''; }
      else { $('scoreL').textContent = mine; $('scoreR').textContent = lead; $('scoreL').style.color = '#41ffb0'; $('scoreR').style.color = '#ff9a4d'; $('subTop').textContent = ''; }
    }
    if (this.online) $('pingbox').textContent = t('ping') + ' ' + this.ping; else $('pingbox').textContent = '';
    // HP, патроны
    const hp = me.alive ? me.hp : 0;
    $('hpVal').textContent = Math.ceil(hp); $('hpBar').style.width = hp + '%'; $('hpBar').style.background = hp > 50 ? '#41ffb0' : hp > 25 ? '#ffc83d' : '#ff4d4d';
    const a = this.ammo && this.ammo[this.cur];
    $('ammoMag').textContent = a && !w.melee ? a.mag : '—'; $('ammoRes').textContent = a && !w.melee ? '/ ' + a.res : '';
    $('wname').textContent = this.cur ? t('weaponname_' + this.cur) : '';
    $('money').textContent = this.cfg.rounds && me2 ? '$' + (me2.money | 0) : '';
    { const ns = me2 && me.alive ? me2.nades : null; let h = ''; if (ns) for (const [k, ic, key] of [['frag', '●', 4], ['flash', '✦', 5], ['smoke', '☁', 6]]) if (ns[k] > 0) h += `<div class="nd on"><i>${key}</i>${ic} ${ns[k]}</div>`; if (h !== this._nh) { $('nades').innerHTML = h; this._nh = h; } }
    this.blindT = Math.max(0, this.blindT - dt); if (this.blindT <= 0) this.blindTot = 0.01;
    $('flashov').style.opacity = this.blindT > 0 ? Math.min(1, this.blindT * 1.5) : 0;
    if (this.buyOpen) { this._bm = (this._bm || 0) + dt; if (this._bm > 0.3) { this._bm = 0; this.renderBuy(); } }
    $('reloadTxt').textContent = this.reloadT > 0 ? t('reloading') : (a && !w.melee && a.mag === 0 && a.res === 0 ? t('noAmmo') : '');
    // список оружия
    if (this.slots) {
      let h = ''; for (const s of [1, 2, 3]) if (this.slots[s]) h += `<div class="ws ${this.slots[s] === this.cur ? 'on' : ''}"><i>${s}</i>${esc(t('weaponname_' + this.slots[s]))}</div>`;
      if (h !== this._wl) { $('wlist').innerHTML = h; this._wl = h; }
    }
    // прицел
    const sp = this.spreadNow(), px = 5 + sp * 5.2;
    const ch = $('crosshair'); ch.style.setProperty('--gap', px + 'px'); ch.style.display = (me.alive && this.scopeLvl === 0 ? 'block' : 'none');
    $('scope').classList.toggle('on', me.alive && this.scopeLvl > 0);
    // вспышки урона
    this.hurtFlash = Math.max(0, this.hurtFlash - dt * 1.5);
    $('dmgflash').style.opacity = this.hurtFlash + (me.alive && me.hp < 30 ? 0.18 + Math.sin(tn * 5) * 0.06 : 0);
    // смерть
    const db = $('deathbox');
    if (!me.alive && !this.ended && this.deathAt && this.running && sync.phase !== 'wait') {
      db.classList.add('on');
      const kn = this.killer ? this.killer.name : '';
      let txt = kn ? t('killedBy') + ' ' + kn : '';
      if (this.cfg.rounds) txt += '<br><small>' + (this.spectate ? t('spectating') + ': ' + esc(this.spectate.name) : t('waitRound')) + '</small>';
      else txt += `<br><small>${t('respawnIn')} ${Math.max(0, Math.ceil(this.cfg.respawn - (tn - this.deathAt)))}</small>`;
      if (db.dataset.t !== txt) { db.innerHTML = txt; db.dataset.t = txt; }
    } else db.classList.remove('on');
    // прогресс
    const pg = $('prog');
    if (this.prog) { pg.style.display = 'block'; $('progBar').style.width = Math.min(100, this.prog.p * 100) + '%'; $('progLbl').textContent = this.prog.label; } else pg.style.display = 'none';
    if (this.boardOn) { this._bt = (this._bt || 0) + dt; if (this._bt > 0.3) { this._bt = 0; this.renderBoard(); } }
    this.drawRadar();
  }

  drawRadar() {
    if (!this.cfg.teams) return;
    const c = this.radarCtx, S = 150, me = this.me; if (!c) return;
    c.clearRect(0, 0, S, S);
    c.save(); c.beginPath(); c.arc(S / 2, S / 2, S / 2 - 1, 0, 7); c.clip(); c.fillStyle = 'rgba(6,12,22,.62)'; c.fillRect(0, 0, S, S);
    const sc = 1.7; c.translate(S / 2, S / 2); c.rotate(me.alive ? me.yaw : (this.spectate ? this.spectate.yaw : 0)); c.scale(sc, sc);
    const cx = me.alive ? me.pos.x : (this.spectate ? this.spectate.pos.x : 0), cz = me.alive ? me.pos.z : (this.spectate ? this.spectate.pos.z : 0);
    c.translate(-cx, -cz);
    c.fillStyle = 'rgba(120,150,190,.45)'; for (const b of BOXES) c.fillRect(b.x0, b.z0, b.w, b.d);
    c.strokeStyle = 'rgba(80,220,255,.7)'; c.lineWidth = 0.5; c.strokeRect(-BOUNDS.x, -BOUNDS.z, BOUNDS.x * 2, BOUNDS.z * 2);
    if (this.mode === 'bomb') { c.font = 'bold 6px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; for (const s of SITES) { c.fillStyle = '#ff5a3a'; c.beginPath(); c.arc(s.x, s.z, s.r, 0, 7); c.globalAlpha = 0.25; c.fill(); c.globalAlpha = 1; c.save(); c.translate(s.x, s.z); c.rotate(-(me.alive ? me.yaw : 0)); c.fillText(s.id, 0, 0); c.restore(); } }
    if (this.sync.bomb && this.sync.bomb.pos) { c.fillStyle = '#ff2222'; c.beginPath(); c.arc(this.sync.bomb.pos[0], this.sync.bomb.pos[2], 2.2, 0, 7); c.fill(); }
    const my = me.ent, tn = this.now();
    for (const e of this.ents.values()) {
      if (e.isLocal || !e.alive || !my) continue;
      const friend = e.team === my.team;
      if (!friend && tn - e.lastShotT > 1.2) continue;
      c.fillStyle = TEAM_COLORS[e.team]; c.beginPath(); c.arc(e.pos.x, e.pos.z, 1.8, 0, 7); c.fill();
    }
    c.restore();
    c.fillStyle = '#fff'; c.beginPath(); c.moveTo(S / 2, S / 2 - 5); c.lineTo(S / 2 + 4, S / 2 + 4); c.lineTo(S / 2 - 4, S / 2 + 4); c.fill();
    c.strokeStyle = 'rgba(80,220,255,.5)'; c.lineWidth = 2; c.beginPath(); c.arc(S / 2, S / 2, S / 2 - 1, 0, 7); c.stroke();
  }

  // отдельные утилиты для UI
  leaveMatch() { if (this.net && this.online) this.net.send({ t: 'leave' }); this.stop(); }
}

function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

/** луч против головы (сфера) и тела (вертикальный цилиндр). Возвращает {t,zone} */
function rayEnt(ox, oy, oz, dx, dy, dz, e) {
  const cr = e.crouch;
  const hc = { x: e.pos.x, y: e.pos.y + (cr ? 1.18 : 1.6), z: e.pos.z }, hr = 0.2;
  let best = null;
  // сфера головы
  { const lx = ox - hc.x, ly = oy - hc.y, lz = oz - hc.z; const b = lx * dx + ly * dy + lz * dz, c = lx * lx + ly * ly + lz * lz - hr * hr, disc = b * b - c;
    if (disc >= 0) { const t0 = -b - Math.sqrt(disc); if (t0 > 0) best = { t: t0, zone: 'head' }; } }
  // цилиндр тела
  { const r = 0.34, top = e.pos.y + (cr ? 1.3 : 1.78), bot = e.pos.y;
    const lx = ox - e.pos.x, lz = oz - e.pos.z, a = dx * dx + dz * dz;
    if (a > 1e-8) {
      const b = lx * dx + lz * dz, c = lx * lx + lz * lz - r * r, disc = b * b - a * c;
      if (disc >= 0) { const s = Math.sqrt(disc); for (const tt of [(-b - s) / a, (-b + s) / a]) { if (tt > 0) { const y = oy + dy * tt; if (y >= bot && y <= top) { if (!best || tt < best.t) best = { t: tt, zone: 'body' }; break; } } } }
    } }
  return best;
}
