// Процедурный звук (WebAudio) — без внешних файлов
let ctx = null, master = null, sfx = null, amb = null, revIn = null, occluder = null;
const bufs = {};
let vol = 0.7, ambOn = true;

function mk(len, fn) {
  const sr = ctx.sampleRate, n = (len * sr) | 0, b = ctx.createBuffer(1, n, sr), d = b.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = fn(i / sr, i / n);
  return b;
}
const noise = () => Math.random() * 2 - 1;
function lp(prev, x, a) { return prev + (x - prev) * a; }

function shot({ len = 0.35, thump = 70, crack = 0.8, tone = 0, toneF = 1500, dec = 14, lpf = 0.5 }) {
  let f = 0, ph = 0, ph2 = 0;
  return mk(len, (t, u) => {
    const e = Math.exp(-t * dec), n = noise();
    f = lp(f, n, lpf);
    ph += (thump * (1 + 1.5 * Math.exp(-t * 30))) / ctx.sampleRate; ph2 += (toneF * Math.exp(-t * 18) + 200) / ctx.sampleRate;
    return (f * crack * e + Math.sin(ph * 6.283) * Math.exp(-t * 22) * 0.9 + (tone ? Math.sin(ph2 * 6.283) * Math.exp(-t * 16) * tone : 0)) * 0.7;
  });
}

export function initAudio() {
  if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
  const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
  ctx = new AC();
  master = ctx.createGain(); master.gain.value = vol; master.connect(ctx.destination);
  sfx = ctx.createGain(); sfx.connect(master);
  const comp = ctx.createDynamicsCompressor(); comp.connect(sfx); sfx._in = comp;
  // реверберация: синтетический импульс (затухающий шум) — эхо в коридорах
  const conv = ctx.createConvolver(), irLen = (ctx.sampleRate * 1.3) | 0, ir = ctx.createBuffer(2, irLen, ctx.sampleRate);
  for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); let f = 0; for (let i = 0; i < irLen; i++) { f += ((Math.random() * 2 - 1) - f) * 0.35; d[i] = f * Math.pow(1 - i / irLen, 2.6); } }
  conv.buffer = ir; revIn = ctx.createGain(); revIn.gain.value = 0.2; const revOut = ctx.createGain(); revOut.gain.value = 0.7;
  revIn.connect(conv); conv.connect(revOut); revOut.connect(sfx);
  bufs.pistol = shot({ len: 0.25, thump: 110, crack: 0.9, tone: 0.35, toneF: 2600, dec: 20, lpf: 0.6 });
  bufs.heavy = shot({ len: 0.5, thump: 55, crack: 1, tone: 0.5, toneF: 1800, dec: 10, lpf: 0.45 });
  bufs.smg = shot({ len: 0.18, thump: 120, crack: 0.8, tone: 0.3, toneF: 3200, dec: 28, lpf: 0.7 });
  bufs.rifle = shot({ len: 0.3, thump: 80, crack: 1, tone: 0.4, toneF: 2200, dec: 16, lpf: 0.55 });
  bufs.shotgun = shot({ len: 0.55, thump: 50, crack: 1.1, tone: 0.2, toneF: 900, dec: 9, lpf: 0.35 });
  bufs.sniper = shot({ len: 0.9, thump: 45, crack: 1.1, tone: 0.8, toneF: 1400, dec: 5, lpf: 0.3 });
  bufs.knife = mk(0.25, (t) => noise() * Math.exp(-t * 18) * Math.sin(t * 40) * 0.3);
  bufs.click = mk(0.05, (t) => (noise() * 0.5 + Math.sin(t * 5000)) * Math.exp(-t * 90) * 0.4);
  bufs.clack = mk(0.09, (t) => (noise() * 0.4 + Math.sin(t * 2200)) * Math.exp(-t * 60) * 0.5);
  bufs.reload = mk(0.18, (t) => (Math.sin(t * 900 * (1 + t * 3)) * 0.4 + noise() * 0.2) * Math.exp(-t * 20));
  bufs.hit = mk(0.1, (t) => Math.sin(t * 2 * Math.PI * 1100) * Math.exp(-t * 45) * 0.6);
  bufs.head = mk(0.25, (t) => (Math.sin(t * 2 * Math.PI * 1700) + Math.sin(t * 2 * Math.PI * 2550) * 0.5) * Math.exp(-t * 16) * 0.5);
  bufs.hurt = mk(0.22, (t) => (noise() * 0.4 + Math.sin(t * 2 * Math.PI * 140)) * Math.exp(-t * 14) * 0.6);
  bufs.kill = mk(0.5, (t) => (Math.sin(t * 2 * Math.PI * 90 * (1 - t)) * 0.9 + Math.sin(t * 2 * Math.PI * 660) * 0.2 * Math.exp(-t * 8)) * Math.exp(-t * 6));
  bufs.step = mk(0.12, (t) => { return lp(0, noise(), 0.12) * Math.exp(-t * 35) * 1.4; });
  bufs.jump = mk(0.15, (t) => noise() * Math.exp(-t * 25) * 0.3);
  bufs.beep = mk(0.08, (t) => Math.sin(t * 2 * Math.PI * 1500) * Math.exp(-t * 20) * 0.5);
  bufs.boom = mk(2.2, (t) => { const e = Math.exp(-t * 2.2); return (lp(0, noise(), 0.05) * 1.6 + Math.sin(t * 2 * Math.PI * 38 * (1 - t / 4))) * e * 0.8; });
  bufs.throw = mk(0.22, (t) => lp(0, noise(), 0.25) * Math.sin(Math.min(1, t * 9) * Math.PI) * 0.35 * Math.exp(-t * 6));
  bufs.bounce = mk(0.12, (t) => (Math.sin(t * 2 * Math.PI * 520) * 0.5 + noise() * 0.25) * Math.exp(-t * 38) * 0.6);
  bufs.flash = mk(1.4, (t) => (noise() * 0.9 * Math.exp(-t * 28) + Math.sin(t * 2 * Math.PI * 4200) * 0.35 * Math.exp(-t * 1.6)) * 0.8);
  bufs.hiss = mk(1.6, (t) => lp(0, noise(), 0.4) * (t < 0.15 ? t / 0.15 : Math.exp(-(t - 0.15) * 1.6)) * 0.45);
  bufs.ui = mk(0.07, (t) => Math.sin(t * 2 * Math.PI * 880) * Math.exp(-t * 50) * 0.35);
  bufs.uiok = mk(0.3, (t) => (Math.sin(t * 2 * Math.PI * 660) + Math.sin(t * 2 * Math.PI * 990)) * Math.exp(-t * 10) * 0.25);
  bufs.tick = mk(0.04, (t) => Math.sin(t * 2 * Math.PI * 2400) * Math.exp(-t * 120) * 0.4);
  bufs.spawn = mk(0.4, (t) => Math.sin(t * 2 * Math.PI * (300 + t * 900)) * Math.exp(-t * 6) * 0.3);
  bufs.rare = mk(1.2, (t) => (Math.sin(t * 2 * Math.PI * 523) + Math.sin(t * 2 * Math.PI * 659) + Math.sin(t * 2 * Math.PI * 784)) * Math.exp(-t * 2.5) * 0.18);
  // фоновый гул станции
  amb = ctx.createGain(); amb.gain.value = ambOn ? 0.05 : 0; amb.connect(master);
  const o1 = ctx.createOscillator(), o2 = ctx.createOscillator(), f = ctx.createBiquadFilter();
  o1.type = 'sawtooth'; o1.frequency.value = 55; o2.type = 'sawtooth'; o2.frequency.value = 55.7; f.type = 'lowpass'; f.frequency.value = 220;
  o1.connect(f); o2.connect(f); f.connect(amb); o1.start(); o2.start();
}

/** fn(x,y,z,listener) -> true, если звук перекрыт стеной */
export function setOccluder(fn) { occluder = fn; }
export function setVolume(v) { vol = v; if (master) master.gain.value = v; }
export function setAmbient(on) { ambOn = on; if (amb) amb.gain.value = on ? 0.05 : 0; }
export function muteAll(m) { if (master) master.gain.value = m ? 0 : vol; }

/** Простой звук (UI/локальный) */
export function play(name, gain = 1, rate = 1) {
  if (!ctx || !bufs[name]) return;
  const s = ctx.createBufferSource(); s.buffer = bufs[name]; s.playbackRate.value = rate * (0.96 + Math.random() * 0.08);
  const g = ctx.createGain(); g.gain.value = gain; s.connect(g); g.connect(sfx._in); s.start();
}
/** Позиционный звук: listener={x,y,z,yaw} */
export function playAt(name, px, py, pz, L, gain = 1, rate = 1) {
  if (!ctx || !bufs[name]) return;
  const dx = px - L.x, dz = pz - L.z, dist = Math.hypot(dx, py - L.y, dz);
  const g0 = gain / (1 + dist * dist * 0.012);
  if (g0 < 0.01) return;
  const rx = Math.cos(L.yaw) * dx - Math.sin(L.yaw) * dz; // вправо
  const pan = Math.max(-1, Math.min(1, rx / (dist + 0.5)));
  const s = ctx.createBufferSource(); s.buffer = bufs[name]; s.playbackRate.value = rate * (0.96 + Math.random() * 0.08);
  const occ = occluder ? occluder(px, py, pz, L) : false;
  const g = ctx.createGain(); g.gain.value = occ ? g0 * 0.55 : g0;
  const p = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
  let src = s;
  if (occ) { const lp2 = ctx.createBiquadFilter(); lp2.type = 'lowpass'; lp2.frequency.value = 650; s.connect(lp2); src = lp2; }
  if (p) { p.pan.value = pan; src.connect(g); g.connect(p); p.connect(sfx._in); } else { src.connect(g); g.connect(sfx._in); }
  if (revIn) { const w = ctx.createGain(); w.gain.value = Math.min(1, 0.35 + dist * 0.025); g.connect(w); w.connect(revIn); }
  s.start();
}
