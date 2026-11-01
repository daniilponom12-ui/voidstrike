import * as THREE from 'three';

// rarity: 0 common … 5 mythic
export const RARITY_COLORS = ['#9aa5b4', '#5ec2ff', '#4a7dff', '#b05cff', '#ff4fa3', '#ffc83d'];
export const RARITY_WEIGHTS = [38, 27, 18, 10, 5, 2];

export const SKINS = {
  stock:    { id: 'stock', rarity: 0, metal: 0.7, rough: 0.45, accent: '#38d6ff' },
  hazard:   { id: 'hazard', rarity: 0, metal: 0.3, rough: 0.55, accent: '#ffd400' },
  asteroid: { id: 'asteroid', rarity: 0, metal: 0.2, rough: 0.9, accent: '#ff9a4d' },
  carbon:   { id: 'carbon', rarity: 1, metal: 0.5, rough: 0.35, accent: '#ff3b3b' },
  circuit:  { id: 'circuit', rarity: 1, metal: 0.4, rough: 0.5, accent: '#2cff9a' },
  ice:      { id: 'ice', rarity: 1, metal: 0.3, rough: 0.12, accent: '#bdf3ff' },
  voidcamo: { id: 'voidcamo', rarity: 2, metal: 0.35, rough: 0.6, accent: '#7a5cff' },
  hexgrid:  { id: 'hexgrid', rarity: 2, metal: 0.6, rough: 0.35, accent: '#19f0ff' },
  scales:   { id: 'scales', rarity: 2, metal: 0.55, rough: 0.35, accent: '#8cff3a' },
  solar:    { id: 'solar', rarity: 3, metal: 0.4, rough: 0.4, accent: '#ff7a1a' },
  aurora:   { id: 'aurora', rarity: 3, metal: 0.4, rough: 0.3, accent: '#4dffb8' },
  nebula:   { id: 'nebula', rarity: 3, metal: 0.4, rough: 0.35, accent: '#d36bff' },
  plasma:   { id: 'plasma', rarity: 4, metal: 0.7, rough: 0.25, accent: '#ff2bd6' },
  bloodmoon:{ id: 'bloodmoon', rarity: 4, metal: 0.6, rough: 0.3, accent: '#ff2b2b' },
  chrome:   { id: 'chrome', rarity: 4, metal: 1.0, rough: 0.06, accent: '#ffffff' },
  toxic:    { id: 'toxic', rarity: 2, metal: 0.4, rough: 0.35, accent: '#9dff00' },
  lava:     { id: 'lava', rarity: 3, metal: 0.5, rough: 0.45, accent: '#ff6a00', anim: 'scroll' },
  galaxy:   { id: 'galaxy', rarity: 4, metal: 0.6, rough: 0.25, accent: '#8ab4ff', anim: 'scroll' },
  holo:     { id: 'holo', rarity: 5, metal: 0.9, rough: 0.12, accent: '#ff66ff', anim: 'hue' },
  gold:     { id: 'gold', rarity: 5, metal: 1.0, rough: 0.2, accent: '#ffe27a' },
};
export const SKIN_IDS = Object.keys(SKINS);

// ---------- шум ----------
function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function makeNoise(seed, n = 32) {
  const r = rng(seed), g = new Float32Array(n * n);
  for (let i = 0; i < g.length; i++) g[i] = r();
  const sm = (t) => t * t * (3 - 2 * t);
  const v = (x, y) => {
    x = ((x % n) + n) % n; y = ((y % n) + n) % n;
    const x0 = Math.floor(x), y0 = Math.floor(y), x1 = (x0 + 1) % n, y1 = (y0 + 1) % n, fx = sm(x - x0), fy = sm(y - y0);
    return (g[y0 * n + x0] * (1 - fx) + g[y0 * n + x1] * fx) * (1 - fy) + (g[y1 * n + x0] * (1 - fx) + g[y1 * n + x1] * fx) * fy;
  };
  return (x, y, oct = 4) => { let s = 0, a = 0.5, f = 1, tot = 0; for (let i = 0; i < oct; i++) { s += v(x * f, y * f) * a; tot += a; a *= 0.5; f *= 2; } return s / tot; };
}
const hex = (c) => { const n = parseInt(c.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
function canvas(sz) { const c = document.createElement('canvas'); c.width = c.height = sz; return c; }
function pix(sz, fn) {
  const c = canvas(sz), x = c.getContext('2d'), im = x.createImageData(sz, sz), d = im.data;
  for (let j = 0; j < sz; j++) for (let i = 0; i < sz; i++) { const o = fn(i / sz, j / sz, i, j), k = (j * sz + i) * 4; d[k] = o[0]; d[k + 1] = o[1]; d[k + 2] = o[2]; d[k + 3] = 255; }
  x.putImageData(im, 0, 0); return c;
}
function worley(seed, count) {
  const r = rng(seed), pts = []; for (let i = 0; i < count; i++) pts.push([r(), r()]);
  return (u, v) => {
    let d1 = 9, d2 = 9, id = 0;
    for (let i = 0; i < pts.length; i++) for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
      const dx = u - (pts[i][0] + ox), dy = v - (pts[i][1] + oy), d = Math.hypot(dx, dy);
      if (d < d1) { d2 = d1; d1 = d; id = i; } else if (d < d2) d2 = d;
    }
    return [d1, d2, id];
  };
}

const GEN = {
  toxic(S) {
    const c = canvas(S), x = c.getContext('2d'), r = rng(8); x.fillStyle = '#0b1a07'; x.fillRect(0, 0, S, S);
    for (let i = 0; i < 40; i++) { const px = r() * S, py = r() * S, rr = 4 + r() * 22, g = x.createRadialGradient(px, py, 1, px, py, rr); g.addColorStop(0, 'rgba(190,255,40,.95)'); g.addColorStop(0.7, 'rgba(60,200,20,.5)'); g.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = g; x.beginPath(); x.arc(px, py, rr, 0, 7); x.fill(); }
    x.strokeStyle = '#d9ff3a'; x.lineWidth = 6; x.beginPath(); x.arc(S * 0.5, S * 0.5, S * 0.28, 0, 7); x.stroke();
    for (let k = 0; k < 3; k++) { const a = k * 2.094; x.beginPath(); x.arc(S * 0.5 + Math.cos(a) * S * 0.2, S * 0.5 + Math.sin(a) * S * 0.2, S * 0.07, 0, 7); x.stroke(); }
    return c;
  },
  lava(S) {
    const w = worley(14, 16), n = makeNoise(41);
    return pix(S, (u, v) => {
      const [d1, d2] = w(u, v), e = d2 - d1, glow = Math.max(0, 1 - e * 9) * (0.7 + n(u * 10, v * 10, 2) * 0.6);
      const rock = mix(hex('#140805'), hex('#3a1a0d'), n(u * 12, v * 12, 3));
      return mix(rock, mix(hex('#ff3a00'), hex('#ffe066'), Math.min(1, glow * 1.2)), Math.min(1, glow));
    });
  },
  galaxy(S) {
    const n = makeNoise(99), r = rng(5);
    const cv = pix(S, (u, v) => {
      const dx = u - 0.5, dy = v - 0.5, d = Math.hypot(dx, dy), a = Math.atan2(dy, dx) + d * 9;
      const arm = Math.pow(Math.max(0, Math.cos(a * 2)), 3) * Math.max(0, 1 - d * 2.1), cloud = n(u * 6, v * 6, 4);
      let c = mix(hex('#04030f'), hex('#3d2bff'), Math.min(1, arm * 1.4 + cloud * 0.2)); c = mix(c, hex('#ff7ad9'), Math.max(0, arm - 0.5) * 1.2); return mix(c, [255, 255, 240], Math.max(0, 0.5 - d * 3.2));
    });
    const x = cv.getContext('2d'); x.fillStyle = '#fff'; for (let i = 0; i < 140; i++) { x.globalAlpha = 0.3 + r() * 0.7; x.fillRect(r() * S, r() * S, 1.5, 1.5); }
    return cv;
  },
  holo(S) {
    return pix(S, (u, v, i, j) => {
      const h = ((u + v) * 1.6) % 1, f = 0.6 + 0.4 * Math.sin((i + j) * 0.35);
      const col = new THREE.Color().setHSL(h, 1, 0.55); return [col.r * 255 * f, col.g * 255 * f, col.b * 255 * f];
    });
  },
  stock(S) {
    const c = canvas(S), x = c.getContext('2d');
    const g = x.createLinearGradient(0, 0, 0, S); g.addColorStop(0, '#5b6677'); g.addColorStop(1, '#2f3744');
    x.fillStyle = g; x.fillRect(0, 0, S, S);
    x.strokeStyle = 'rgba(0,0,0,.45)'; x.lineWidth = 2;
    for (let i = 1; i < 4; i++) { x.beginPath(); x.moveTo(0, i * S / 4); x.lineTo(S, i * S / 4); x.stroke(); }
    x.beginPath(); x.moveTo(S * 0.3, 0); x.lineTo(S * 0.3, S); x.moveTo(S * 0.75, 0); x.lineTo(S * 0.75, S); x.stroke();
    x.fillStyle = 'rgba(255,255,255,.12)'; x.fillRect(0, 0, S, 3);
    return c;
  },
  hazard(S) {
    const c = canvas(S), x = c.getContext('2d'); x.fillStyle = '#16181c'; x.fillRect(0, 0, S, S);
    x.fillStyle = '#ffcf1a'; const w = S / 6;
    for (let i = -S; i < S * 2; i += w * 2) { x.beginPath(); x.moveTo(i, S); x.lineTo(i + w, S); x.lineTo(i + w + S, 0); x.lineTo(i + S, 0); x.fill(); }
    return c;
  },
  asteroid(S) {
    const n = makeNoise(5), w = worley(9, 7);
    return pix(S, (u, v) => {
      let h = n(u * 8, v * 8, 5); const [d1] = w(u, v); const crater = d1 < 0.12 ? 0.4 * Math.sin(d1 / 0.12 * Math.PI) : 0;
      h = h * 0.8 + crater * 0.3; return mix(hex('#2c2723'), hex('#9b8a73'), Math.min(1, h * 1.2));
    });
  },
  carbon(S) {
    return pix(S, (u, v, i, j) => {
      const cell = 16, a = ((i / cell) | 0) + ((j / cell) | 0), dx = i % cell, dy = j % cell;
      const t = (a & 1) ? dx / cell : dy / cell, f = 0.08 + 0.17 * Math.abs(Math.sin(t * Math.PI * 3));
      const l = 255 * f; return [l * 0.9, l * 0.95, l];
    });
  },
  circuit(S) {
    const c = canvas(S), x = c.getContext('2d'), r = rng(3);
    x.fillStyle = '#052a1d'; x.fillRect(0, 0, S, S);
    x.lineCap = 'round';
    for (let k = 0; k < 40; k++) {
      let px = ((r() * S / 8) | 0) * 8, py = ((r() * S / 8) | 0) * 8; x.strokeStyle = r() < 0.2 ? '#e8c14a' : '#27d98b'; x.lineWidth = 2 + (r() * 2 | 0);
      x.beginPath(); x.moveTo(px, py);
      for (let s = 0; s < 4; s++) { if (r() < 0.5) px += ((r() * 6 | 0) - 3) * 8; else py += ((r() * 6 | 0) - 3) * 8; x.lineTo(px, py); }
      x.stroke(); x.fillStyle = '#e8c14a'; x.beginPath(); x.arc(px, py, 3.5, 0, 7); x.fill();
    }
    x.fillStyle = '#0b0f10'; for (let k = 0; k < 6; k++) x.fillRect(r() * S, r() * S, 18 + r() * 18, 10 + r() * 10);
    return c;
  },
  ice(S) {
    const w = worley(21, 22);
    return pix(S, (u, v) => {
      const [d1, d2, id] = w(u, v), edge = Math.min(1, (d2 - d1) * 14), tone = 0.55 + ((id * 37) % 10) / 24;
      return mix([255, 255, 255], mix(hex('#6bbcff'), hex('#d9f4ff'), tone), edge);
    });
  },
  voidcamo(S) {
    const n = makeNoise(31), cols = ['#07091a', '#141b3c', '#2a2260', '#0b3a52'];
    return pix(S, (u, v) => { const h = n(u * 6, v * 6, 3); return hex(cols[h < 0.38 ? 0 : h < 0.5 ? 1 : h < 0.6 ? 2 : 3]); });
  },
  hexgrid(S) {
    const c = canvas(S), x = c.getContext('2d'); x.fillStyle = '#050d16'; x.fillRect(0, 0, S, S);
    const r = S / 10, h = r * Math.sqrt(3);
    x.strokeStyle = '#19f0ff'; x.lineWidth = 2; x.shadowColor = '#19f0ff'; x.shadowBlur = 6;
    for (let row = -1; row < S / h + 1; row++) for (let col = -1; col < S / (r * 1.5) + 1; col++) {
      const cx = col * r * 1.5, cy = row * h + (col & 1 ? h / 2 : 0);
      x.beginPath(); for (let k = 0; k < 6; k++) { const a = Math.PI / 3 * k; x[k ? 'lineTo' : 'moveTo'](cx + r * 0.92 * Math.cos(a), cy + r * 0.92 * Math.sin(a)); } x.closePath(); x.stroke();
    }
    return c;
  },
  scales(S) {
    const c = canvas(S), x = c.getContext('2d'); x.fillStyle = '#0a2a14'; x.fillRect(0, 0, S, S);
    const r = S / 10;
    for (let row = -1; row < S / (r * 0.6) + 2; row++) for (let col = -1; col < S / r + 2; col++) {
      const cx = col * r + (row & 1 ? r / 2 : 0), cy = row * r * 0.6;
      const g = x.createRadialGradient(cx, cy - r * 0.2, 2, cx, cy, r * 0.62); g.addColorStop(0, '#9bff4a'); g.addColorStop(0.6, '#2ba84a'); g.addColorStop(1, '#0a3d1c');
      x.fillStyle = g; x.beginPath(); x.arc(cx, cy, r * 0.58, 0, 7); x.fill();
    }
    return c;
  },
  solar(S) {
    const n = makeNoise(77);
    return pix(S, (u, v) => {
      const t = n(u * 5, v * 3 + n(u * 6, v * 6, 2) * 0.8, 4); let col = mix(hex('#ff2a00'), hex('#ffd24a'), Math.min(1, t * 1.5));
      const line = Math.abs(Math.sin((v + t * 0.3) * 40)); if (line > 0.97) col = [20, 8, 4]; return col;
    });
  },
  aurora(S) {
    const n = makeNoise(5);
    return pix(S, (u, v) => {
      const w = n(u * 3, v * 3, 3), band = Math.sin((v * 5 + w * 3) * Math.PI), k = Math.max(0, band);
      return mix(hex('#050b1a'), mix(hex('#24ffa6'), hex('#8a4dff'), n(u * 4 + 9, v * 2, 2)), k * 0.95);
    });
  },
  nebula(S) {
    const n = makeNoise(13), r = rng(4);
    const cv = pix(S, (u, v) => {
      const a = n(u * 4, v * 4, 5), b = n(u * 4 + 17, v * 4 + 5, 4);
      let c = mix(hex('#06031a'), hex('#7a2cff'), Math.max(0, a - 0.35) * 2.2); c = mix(c, hex('#00d0ff'), Math.max(0, b - 0.5) * 2); c = mix(c, hex('#ff3fa8'), Math.max(0, a * b - 0.3) * 2); return c;
    });
    const x = cv.getContext('2d'); x.fillStyle = '#fff'; for (let i = 0; i < 90; i++) { x.globalAlpha = 0.3 + r() * 0.7; x.fillRect(r() * S, r() * S, 1 + (r() < 0.2 ? 1 : 0), 1 + (r() < 0.2 ? 1 : 0)); }
    return cv;
  },
  plasma(S) {
    const w = worley(5, 14);
    return pix(S, (u, v) => {
      const [d1, d2] = w(u, v), e = d2 - d1, g = Math.max(0, 1 - e * 16); const base = [8, 4, 14];
      return mix(base, mix(hex('#ff2bd6'), hex('#35e0ff'), (u + v) % 1), Math.pow(g, 1.4));
    });
  },
  bloodmoon(S) {
    const n = makeNoise(88);
    return pix(S, (u, v) => {
      const d = Math.hypot(u - 0.5, v - 0.5), moon = Math.max(0, 1 - d * 2.2), t = n(u * 9, v * 9, 4);
      let c = mix(hex('#080303'), hex('#c01616'), Math.pow(moon, 0.8) * (0.6 + t * 0.6)); if (Math.abs(Math.sin((u * 13 + t * 3)) ) > 0.985) c = mix(c, hex('#ff5a3a'), 0.7); return c;
    });
  },
  chrome(S) {
    const c = canvas(S), x = c.getContext('2d'), g = x.createLinearGradient(0, 0, S, S);
    g.addColorStop(0, '#ffffff'); g.addColorStop(0.35, '#b9c2cf'); g.addColorStop(0.6, '#f4f7fb'); g.addColorStop(1, '#8e99a8'); x.fillStyle = g; x.fillRect(0, 0, S, S); return c;
  },
  gold(S) {
    const n = makeNoise(2);
    return pix(S, (u, v) => { const b = n(u * 2, v * 60, 2); return mix(hex('#a8780a'), hex('#fff0a6'), 0.35 + b * 0.65 * (0.6 + 0.4 * Math.sin((u + v) * 6))); });
  },
};

const texCache = new Map(), matCache = new Map();
export function skinTexture(id) {
  if (texCache.has(id)) return texCache.get(id);
  const t = new THREE.CanvasTexture(GEN[id](256));
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  texCache.set(id, t); return t;
}
export function skinCanvas(id, size = 128) { return GEN[id](size); }

/** Набор материалов оружия для скина */
export function skinMaterials(id) {
  if (matCache.has(id)) return matCache.get(id);
  const s = SKINS[id] || SKINS.stock;
  const glowSkins = ['hexgrid', 'circuit', 'plasma', 'solar', 'nebula', 'aurora', 'bloodmoon', 'toxic', 'lava', 'galaxy', 'holo'];
  const body = new THREE.MeshStandardMaterial({
    map: skinTexture(id), metalness: Math.min(s.metal, 0.9), roughness: s.rough, envMapIntensity: 2.6,
    emissive: glowSkins.includes(id) ? new THREE.Color(s.accent) : 0x000000, emissiveMap: glowSkins.includes(id) ? skinTexture(id) : null, emissiveIntensity: glowSkins.includes(id) ? 0.35 : 0,
  });
  const dark = new THREE.MeshStandardMaterial({ color: 0x39414f, metalness: 0.55, roughness: 0.48, envMapIntensity: 1.8 });
  const accent = new THREE.MeshStandardMaterial({ color: s.accent, emissive: s.accent, emissiveIntensity: 1.6, metalness: 0, roughness: 0.4 });
  const lens = new THREE.MeshStandardMaterial({ color: 0x66ccff, emissive: 0x2288cc, emissiveIntensity: 0.8, metalness: 0.9, roughness: 0.05, transparent: true, opacity: 0.85 });
  const glove = new THREE.MeshStandardMaterial({ color: 0x2c3442, metalness: 0.15, roughness: 0.65 });
  const suit = new THREE.MeshStandardMaterial({ color: 0x3a4659, metalness: 0.2, roughness: 0.8 });
  const m = { body, dark, accent, lens, glove, suit };
  matCache.set(id, m); return m;
}

/** Анимация скинов: бегущая текстура и переливы */
export function tickSkins(t) {
  for (const [id, m] of matCache) {
    const s = SKINS[id]; if (!s || !s.anim) continue;
    if (s.anim === 'scroll') { m.body.map.offset.x = (t * 0.06) % 1; if (m.body.emissiveMap) m.body.emissiveMap.offset.x = m.body.map.offset.x; m.body.emissiveIntensity = 0.45 + Math.sin(t * 2) * 0.15; }
    else if (s.anim === 'hue') { m.body.map.offset.x = (t * 0.08) % 1; m.body.emissive.setHSL((t * 0.25) % 1, 1, 0.5); m.body.emissiveIntensity = 0.35; m.accent.color.setHSL((t * 0.25 + 0.5) % 1, 1, 0.6); m.accent.emissive.copy(m.accent.color); }
  }
}
