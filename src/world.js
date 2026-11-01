import * as THREE from 'three';
import { BOXES, BOUNDS, SITES } from '../shared/map.js';

function cv(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function tex(c, rx = 1, ry = 1) { const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; }
function rnd(seed) { let a = seed; return () => { a = (a * 1664525 + 1013904223) % 4294967296; return a / 4294967296; }; }

function floorTex(F) {
  const c = cv(256, 256), x = c.getContext('2d');
  x.fillStyle = F[0]; x.fillRect(0, 0, 256, 256);
  x.fillStyle = F[1]; x.fillRect(4, 4, 120, 120); x.fillRect(132, 132, 120, 120);
  x.fillStyle = F[2]; x.fillRect(132, 4, 120, 120); x.fillRect(4, 132, 120, 120);
  x.strokeStyle = F[3]; x.lineWidth = 4; x.strokeRect(0, 0, 256, 256); x.beginPath(); x.moveTo(128, 0); x.lineTo(128, 256); x.moveTo(0, 128); x.lineTo(256, 128); x.stroke();
  x.fillStyle = F[4]; x.fillRect(0, 0, 256, 2); x.fillRect(0, 0, 2, 256);
  const r = rnd(5); x.fillStyle = 'rgba(255,255,255,.04)'; for (let i = 0; i < 300; i++) x.fillRect(r() * 256, r() * 256, 2, 2);
  return c;
}
function wallTex(color = '#4a5668') {
  const c = cv(256, 256), x = c.getContext('2d');
  x.fillStyle = color; x.fillRect(0, 0, 256, 256);
  x.fillStyle = 'rgba(0,0,0,.18)'; x.fillRect(0, 0, 256, 6); x.fillRect(0, 128, 256, 4);
  x.fillStyle = 'rgba(255,255,255,.07)'; x.fillRect(6, 6, 116, 116); x.fillRect(134, 134, 116, 116);
  x.strokeStyle = 'rgba(0,0,0,.4)'; x.lineWidth = 3; x.strokeRect(1, 1, 254, 254);
  x.fillStyle = 'rgba(0,0,0,.5)'; for (const [a, b] of [[14, 14], [110, 14], [14, 110], [110, 110], [142, 142], [238, 142], [142, 238], [238, 238]]) { x.beginPath(); x.arc(a, b, 3, 0, 7); x.fill(); }
  return c;
}
function crateTex() {
  const c = cv(256, 256), x = c.getContext('2d');
  x.fillStyle = '#6a5a3c'; x.fillRect(0, 0, 256, 256);
  x.fillStyle = '#4c3f29'; x.fillRect(0, 0, 256, 16); x.fillRect(0, 240, 256, 16); x.fillRect(0, 0, 16, 256); x.fillRect(240, 0, 16, 256);
  x.strokeStyle = '#3a2f1e'; x.lineWidth = 8; x.beginPath(); x.moveTo(16, 16); x.lineTo(240, 240); x.moveTo(240, 16); x.lineTo(16, 240); x.stroke();
  x.fillStyle = '#ffcf1a'; x.fillRect(100, 100, 56, 56); x.fillStyle = '#111'; x.font = 'bold 40px sans-serif'; x.textAlign = 'center'; x.fillText('!', 128, 142);
  return c;
}
function gridTex(rgb) {
  const c = cv(128, 128), x = c.getContext('2d'); x.clearRect(0, 0, 128, 128);
  x.strokeStyle = `rgba(${rgb},.9)`; x.lineWidth = 2; x.strokeRect(1, 1, 126, 126);
  x.strokeStyle = `rgba(${rgb},.35)`; x.lineWidth = 1; x.beginPath(); x.moveTo(64, 0); x.lineTo(64, 128); x.moveTo(0, 64); x.lineTo(128, 64); x.stroke();
  return c;
}


const THEMES = {
  helios: {
    floor: ['#262c38', '#2d3442', '#222833', '#0e1219', '#3b8fb5'], grid: '80,220,255', wall: '#4a5668', pillar: '#3a4252', low: '#566176', platform: '#2f3f55', step: '#3a5170',
    stripC: 0x4de2ff, stripO: 0xff8a34, edge: 0x3ad7ff, hemi: [0x9bbcff, 0x2a2f45, 0.85], sun: [0xfff0d8, 2.2], fill: 0x6a8cff,
    pls: [[-30, 7, 0, 0x34d4ff], [30, 7, 0, 0xff8a34], [0, 9, 38, 0xff8a34], [0, 9, -38, 0x34d4ff], [-30, 7, -28, 0x34d4ff], [30, 7, 28, 0xff8a34]],
    sky: [[90, 30, 120], [20, 70, 110]], hull: 0x2a303c,
    barrel: 0x3a6a8a, sand: 0xb09a68, dump: '#3d5a48',
    p1: ['#0b2a5c', '#5fd0ff', 0x0a1a33, 0x5fb8ff], p2: ['#6b2a12', '#ffb36b', 0x2a1006], ring: 0xd9b48a, sunC: 0xfff1cf, halo: 0xffd9a0,
  },
  crater: {
    floor: ['#352a26', '#40322d', '#2d2320', '#120c0a', '#c9732d'], grid: '255,150,70', wall: '#6d5646', pillar: '#55423a', low: '#7c6552', platform: '#5a3d33', step: '#6e4b3b',
    stripC: 0xffb24a, stripO: 0xff5a3a, edge: 0xff9a3a, hemi: [0xffc9a0, 0x3a2620, 0.9], sun: [0xffe2c0, 2.4], fill: 0xff8a60,
    pls: [[-30, 7, 0, 0xffa040], [30, 7, 0, 0xff5a3a], [0, 9, 38, 0xffc060], [0, 9, -38, 0xff6a40], [-30, 7, -28, 0xffa040], [30, 7, 28, 0xff6a40]],
    sky: [[135, 55, 25], [110, 60, 30]], hull: 0x3a2a24,
    barrel: 0x9a3a22, sand: 0x7e6c52, dump: '#5a4a3a',
    p1: ['#4a1408', '#ff9a50', 0x2a0e06, 0xff8a50], p2: ['#2a4a5a', '#9fe0d0', 0x0a1a1a], ring: 0xb8d8e0, sunC: 0xffe0b0, halo: 0xffb070,
  },
};

function fbm(seed) {
  const r = rnd(seed), n = 64, g = []; for (let i = 0; i < n * n; i++) g.push(r());
  const v = (x, y) => { x = ((x % n) + n) % n; y = ((y % n) + n) % n; const x0 = x | 0, y0 = y | 0, x1 = (x0 + 1) % n, y1 = (y0 + 1) % n, fx = x - x0, fy = y - y0; const s = (t) => t * t * (3 - 2 * t); const a = g[y0 * n + x0] * (1 - s(fx)) + g[y0 * n + x1] * s(fx), b = g[y1 * n + x0] * (1 - s(fx)) + g[y1 * n + x1] * s(fx); return a * (1 - s(fy)) + b * s(fy); };
  return (x, y) => { let s = 0, a = 0.5, f = 1; for (let i = 0; i < 5; i++) { s += v(x * f, y * f) * a; a *= 0.5; f *= 2; } return s; };
}

function skyTexture(K) {
  const W = 1024, H = 512, c = cv(W, H), x = c.getContext('2d'), im = x.createImageData(W, H), n = fbm(3), n2 = fbm(11);
  for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
    const u = i / W, v = j / H, a = n(u * 6, v * 3), b = n2(u * 8 + 5, v * 4);
    const k = Math.max(0, a - 0.42) * 2.2, m = Math.max(0, b - 0.5) * 2;
    const o = (j * W + i) * 4;
    im.data[o] = 6 + k * K[0][0] + m * K[1][0] * 0.3; im.data[o + 1] = 6 + k * K[0][1] + m * K[1][1] * 0.7; im.data[o + 2] = 16 + k * K[0][2] + m * K[1][2]; im.data[o + 3] = 255;
  }
  x.putImageData(im, 0, 0);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.mapping = THREE.EquirectangularReflectionMapping; return t;
}
function planetTexture(c1, c2, seed) {
  const c = cv(512, 256), x = c.getContext('2d'), n = fbm(seed), im = x.createImageData(512, 256);
  const A = new THREE.Color(c1), B = new THREE.Color(c2);
  for (let j = 0; j < 256; j++) for (let i = 0; i < 512; i++) {
    const t = n(i / 40, j / 14 + n(i / 90, j / 60) * 3); const col = A.clone().lerp(B, Math.min(1, t * 1.3));
    const o = (j * 512 + i) * 4; im.data[o] = col.r * 255; im.data[o + 1] = col.g * 255; im.data[o + 2] = col.b * 255; im.data[o + 3] = 255;
  }
  x.putImageData(im, 0, 0); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}


function boxUV(geo, w, h, d, tile = 3) {
  const uv = geo.attributes.uv; const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) for (let i = 0; i < 4; i++) { const k = f * 4 + i; uv.setXY(k, uv.getX(k) * dims[f][0] / tile, uv.getY(k) * dims[f][1] / tile); }
}

export function buildWorld(scene, quality, mapId = 'helios') {
  const TH = THEMES[mapId] || THEMES.helios;
  const root = new THREE.Group(); scene.add(root);
  const world = { dyn: [], siteRings: [], lights: [], mapId, root };
  // освещение
  root.add(new THREE.HemisphereLight(...TH.hemi));
  const sun = new THREE.DirectionalLight(TH.sun[0], TH.sun[1]); sun.position.set(-60, 90, -40); root.add(sun);
  const fill = new THREE.DirectionalLight(TH.fill, 0.6); fill.position.set(50, 30, 60); root.add(fill);
  const pls = TH.pls.slice(0, quality === 'low' ? 2 : quality === 'mid' ? 4 : 6);
  for (const [x, y, z, c] of pls) { const l = new THREE.PointLight(c, quality === 'low' ? 40 : 26, 70, 1.5); l.position.set(x, y, z); root.add(l); world.lights.push(l); }

  // пол
  const FW = BOUNDS.x * 2 + 2, FD = BOUNDS.z * 2 + 2;
  const ft = tex(floorTex(TH.floor), FW / 4, FD / 4);
  const floor = new THREE.Mesh(new THREE.BoxGeometry(FW, 2, FD), new THREE.MeshStandardMaterial({ map: ft, metalness: 0.5, roughness: 0.55 }));
  floor.position.y = -1.0; root.add(floor);
  // корпус станции под палубой
  const hull = new THREE.Mesh(new THREE.CylinderGeometry(30, 44, 14, 8), new THREE.MeshStandardMaterial({ color: TH.hull, metalness: 0.8, roughness: 0.5 }));
  hull.position.y = -9; root.add(hull);
  for (const [x, z] of [[-40, -52], [40, -52], [-40, 52], [40, 52]]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.6, 10, 8), new THREE.MeshStandardMaterial({ color: 0x353c4a, metalness: 0.8, roughness: 0.4 })); p.position.set(x, -6, z); root.add(p);
    const g = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 0.2, 12), new THREE.MeshBasicMaterial({ color: 0x4de2ff })); g.position.set(x, -11.2, z); root.add(g);
  }
  // кромка
  const edge = new THREE.MeshBasicMaterial({ color: TH.edge });
  for (const [x, z, w, d] of [[0, BOUNDS.z + 0.6, FW, 0.25], [0, -BOUNDS.z - 0.6, FW, 0.25], [BOUNDS.x + 0.6, 0, 0.25, FD], [-BOUNDS.x - 0.6, 0, 0.25, FD]]) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.12, d), edge); m.position.set(x, 0.05, z); root.add(m); }

  // силовое поле
  const fieldMat = new THREE.MeshBasicMaterial({ map: tex(gridTex(TH.grid), 1, 1), transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false });
  const fieldH = 12;
  for (const [x, z, w, ry] of [[0, BOUNDS.z, FW, 0], [0, -BOUNDS.z, FW, 0], [BOUNDS.x, 0, FD, Math.PI / 2], [-BOUNDS.x, 0, FD, Math.PI / 2]]) {
    const m = fieldMat.clone(); m.map = tex(gridTex(TH.grid), w / 3, fieldH / 3);
    const p = new THREE.Mesh(new THREE.PlaneGeometry(w, fieldH), m); p.position.set(x, fieldH / 2, z); p.rotation.y = ry; root.add(p);
  }

  // коробки карты
  const mats = {
    wall: new THREE.MeshStandardMaterial({ map: tex(wallTex(TH.wall)), metalness: 0.55, roughness: 0.55 }),
    pillar: new THREE.MeshStandardMaterial({ map: tex(wallTex(TH.pillar)), metalness: 0.6, roughness: 0.5 }),
    crate: new THREE.MeshStandardMaterial({ map: tex(crateTex()), metalness: 0.2, roughness: 0.8 }),
    low: new THREE.MeshStandardMaterial({ map: tex(wallTex(TH.low)), metalness: 0.5, roughness: 0.55 }),
    platform: new THREE.MeshStandardMaterial({ map: tex(wallTex(TH.platform)), metalness: 0.6, roughness: 0.5 }),
    step: new THREE.MeshStandardMaterial({ map: tex(wallTex(TH.step)), metalness: 0.6, roughness: 0.5 }),
  };
  const stripC = new THREE.MeshBasicMaterial({ color: TH.stripC }), stripO = new THREE.MeshBasicMaterial({ color: TH.stripO });
  const barrelMat = new THREE.MeshStandardMaterial({ color: TH.barrel || 0x8a3b2a, metalness: 0.65, roughness: 0.45 });
  const bandMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2e, metalness: 0.8, roughness: 0.4 });
  const sandMat = new THREE.MeshStandardMaterial({ color: TH.sand || 0x9c8a62, roughness: 1, metalness: 0 });
  mats.dumpster = new THREE.MeshStandardMaterial({ map: tex(wallTex(TH.dump || '#3d5a48')), metalness: 0.5, roughness: 0.6 });
  for (const b of BOXES) {
    const cy = (b.y0 + b.y1) / 2;
    if (b.kind === 'barrel') {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(b.w / 2, b.w / 2, b.h, 14), barrelMat); m.position.set(b.cx, cy, b.cz); root.add(m);
      for (const f of [0.28, 0.72]) { const r = new THREE.Mesh(new THREE.CylinderGeometry(b.w / 2 + 0.01, b.w / 2 + 0.01, 0.06, 14), bandMat); r.position.set(b.cx, b.y0 + b.h * f, b.cz); root.add(r); }
      continue;
    }
    if (b.kind === 'sand') {
      const m = new THREE.Mesh(new THREE.BoxGeometry(b.w, b.h, b.d), sandMat); m.position.set(b.cx, cy, b.cz); root.add(m); continue;
    }
    const g = new THREE.BoxGeometry(b.w, b.h, b.d); boxUV(g, b.w, b.h, b.d, b.kind === 'crate' ? 3 : 3.5);
    const m = new THREE.Mesh(g, mats[b.kind] || mats.wall); m.position.set(b.cx, cy, b.cz); root.add(m);
    if (b.y0 < 0.5 && (b.kind === 'wall' || b.kind === 'pillar' || b.kind === 'low' || b.kind === 'platform') && b.h < 8.5) {
      const longX = b.w >= b.d, len = longX ? b.w : b.d;
      const s = new THREE.Mesh(new THREE.BoxGeometry(longX ? len * 0.9 : b.w + 0.04, 0.07, longX ? b.d + 0.04 : len * 0.9), b.cz > 0 || b.kind === 'platform' ? stripC : stripO);
      s.position.set(b.cx, Math.min(b.h - 0.08, b.kind === 'pillar' ? 2.0 : b.h - 0.2), b.cz); root.add(s);
    }
  }
  // кольца точек закладки
  for (const s of SITES) {
    const ring = new THREE.Mesh(new THREE.RingGeometry(s.r - 0.25, s.r, 48), new THREE.MeshBasicMaterial({ color: 0xff5a3a, transparent: true, opacity: 0.8, side: THREE.DoubleSide }));
    ring.rotation.x = -Math.PI / 2; ring.position.set(s.x, 0.03, s.z); root.add(ring); world.siteRings.push(ring);
    const c = cv(128, 128), x = c.getContext('2d'); x.fillStyle = 'rgba(255,90,58,.9)'; x.font = 'bold 110px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(s.id, 64, 70);
    const lt = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false }));
    lt.rotation.x = -Math.PI / 2; lt.position.set(s.x, 0.04, s.z); root.add(lt);
  }
  world.setSitesVisible = (v) => { for (const r of world.siteRings) r.visible = v; };

  // космос
  scene.background = skyTexture(TH.sky);
  const sp = new Float32Array(2600 * 3), sc = new Float32Array(2600 * 3), r = rnd(9);
  for (let i = 0; i < 2600; i++) {
    const th = r() * Math.PI * 2, ph = Math.acos(2 * r() - 1), R = 800;
    sp[i * 3] = R * Math.sin(ph) * Math.cos(th); sp[i * 3 + 1] = R * Math.cos(ph); sp[i * 3 + 2] = R * Math.sin(ph) * Math.sin(th);
    const k = 0.5 + r() * 0.5, tint = r(); sc[i * 3] = k * (tint < 0.3 ? 1 : 0.8); sc[i * 3 + 1] = k * 0.9; sc[i * 3 + 2] = k * (tint > 0.6 ? 1 : 0.85);
  }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(sp, 3)); sg.setAttribute('color', new THREE.BufferAttribute(sc, 3));
  root.add(new THREE.Points(sg, new THREE.PointsMaterial({ size: 2.2, sizeAttenuation: false, vertexColors: true, fog: false })));
  // планета и газовый гигант
  const planet = new THREE.Mesh(new THREE.SphereGeometry(160, 48, 32), new THREE.MeshStandardMaterial({ map: planetTexture(TH.p1[0], TH.p1[1], 4), roughness: 1, metalness: 0, emissive: TH.p1[2], emissiveIntensity: 0.6 }));
  planet.position.set(-420, 120, -520); root.add(planet);
  const atm = new THREE.Mesh(new THREE.SphereGeometry(170, 48, 32), new THREE.MeshBasicMaterial({ color: TH.p1[3], transparent: true, opacity: 0.16, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false }));
  atm.position.copy(planet.position); root.add(atm);
  const giant = new THREE.Mesh(new THREE.SphereGeometry(70, 40, 24), new THREE.MeshStandardMaterial({ map: planetTexture(TH.p2[0], TH.p2[1], 12), roughness: 1, emissive: TH.p2[2], emissiveIntensity: 0.7 }));
  giant.position.set(380, 160, 520); root.add(giant);
  const ringG = new THREE.Mesh(new THREE.RingGeometry(95, 140, 64), new THREE.MeshBasicMaterial({ color: TH.ring, transparent: true, opacity: 0.35, side: THREE.DoubleSide }));
  ringG.position.copy(giant.position); ringG.rotation.x = Math.PI / 2.4; ringG.rotation.y = 0.3; root.add(ringG);
  const sunMesh = new THREE.Mesh(new THREE.SphereGeometry(30, 24, 16), new THREE.MeshBasicMaterial({ color: TH.sunC }));
  sunMesh.position.set(-300, 450, -200); root.add(sunMesh);
  const halo = new THREE.Mesh(new THREE.SphereGeometry(55, 24, 16), new THREE.MeshBasicMaterial({ color: TH.halo, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false }));
  halo.position.copy(sunMesh.position); root.add(halo);
  // астероиды
  const rocks = [];
  const rg = new THREE.IcosahedronGeometry(1, 1); const pa = rg.attributes.position; const rr = rnd(2);
  for (let i = 0; i < pa.count; i++) { const k = 0.75 + rr() * 0.5; pa.setXYZ(i, pa.getX(i) * k, pa.getY(i) * k, pa.getZ(i) * k); } rg.computeVertexNormals();
  const rm = new THREE.MeshStandardMaterial({ color: 0x6b6358, roughness: 1, flatShading: true });
  for (let i = 0; i < 16; i++) {
    const a = rr() * Math.PI * 2, d = 90 + rr() * 140, m = new THREE.Mesh(rg, rm), s = 3 + rr() * 14;
    m.position.set(Math.cos(a) * d, -30 + rr() * 90, Math.sin(a) * d); m.scale.setScalar(s); m.userData.rot = new THREE.Vector3(rr() * 0.1, rr() * 0.1, 0); root.add(m); rocks.push(m);
  }
  world.update = (dt) => { for (const m of rocks) { m.rotation.x += m.userData.rot.x * dt; m.rotation.y += m.userData.rot.y * dt; } planet.rotation.y += dt * 0.004; giant.rotation.y += dt * 0.01; };
  world.dispose = () => {
    scene.remove(root);
    root.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) { const ms = Array.isArray(o.material) ? o.material : [o.material]; for (const m of ms) { if (m.map) m.map.dispose(); m.dispose(); } }
    });
    if (scene.background && scene.background.dispose) scene.background.dispose();
  };
  return world;
}
