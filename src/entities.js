import * as THREE from 'three';
import { buildWeapon } from './wmodels.js';

const boxG = new THREE.BoxGeometry(1, 1, 1);
const sphG = new THREE.SphereGeometry(1, 16, 12);

export const TEAM_COLORS = ['#ff7a2f', '#27c8ff'];
const FFA = ['#ff5a5a', '#ffd23f', '#6bff6b', '#c77dff', '#ff8cd0', '#5cf2ff', '#ffa94d', '#9bff3a'];
export function colorFor(team, id) {
  if (team >= 0) return TEAM_COLORS[team];
  let h = 0; for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return FFA[h % FFA.length];
}

function nameSprite(name, color) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 48; const x = c.getContext('2d');
  x.font = 'bold 28px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.lineWidth = 6; x.strokeStyle = 'rgba(0,0,0,.8)'; x.strokeText(name, 128, 24); x.fillStyle = color; x.fillText(name, 128, 24);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthTest: false, depthWrite: false }));
  s.scale.set(1.3, 0.24, 1); s.position.y = 2.15; s.renderOrder = 10; return s;
}

export class Avatar {
  constructor(color, name) {
    this.color = color;
    const col = new THREE.Color(color);
    this.suit = new THREE.MeshStandardMaterial({ color: 0xd5dbe5, metalness: 0.25, roughness: 0.65 });
    this.dark = new THREE.MeshStandardMaterial({ color: 0x232a37, metalness: 0.5, roughness: 0.5 });
    this.acc = new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 0.9 });
    this.visor = new THREE.MeshStandardMaterial({ color: 0x0a1626, emissive: col, emissiveIntensity: 0.25, metalness: 1, roughness: 0.08 });
    this.root = new THREE.Group();
    this.body = new THREE.Group(); this.root.add(this.body);
    const M = (m, w, h, d, x, y, z, p) => { const o = new THREE.Mesh(boxG, m); o.scale.set(w, h, d); o.position.set(x, y, z); (p || this.body).add(o); return o; };
    // ноги
    this.legL = new THREE.Group(); this.legR = new THREE.Group();
    this.legL.position.set(-0.12, 0.8, 0); this.legR.position.set(0.12, 0.8, 0);
    for (const l of [this.legL, this.legR]) { M(this.suit, 0.16, 0.8, 0.18, 0, -0.4, 0, l); M(this.dark, 0.18, 0.12, 0.26, 0, -0.75, -0.03, l); M(this.acc, 0.17, 0.04, 0.19, 0, -0.5, 0, l); this.body.add(l); }
    // верх
    this.upper = new THREE.Group(); this.upper.position.set(0, 1.0, 0); this.body.add(this.upper);
    M(this.suit, 0.46, 0.5, 0.28, 0, 0.08, 0, this.upper);
    M(this.acc, 0.22, 0.07, 0.02, 0, 0.18, -0.15, this.upper);
    M(this.dark, 0.34, 0.44, 0.16, 0, 0.1, 0.22, this.upper); M(this.acc, 0.2, 0.05, 0.17, 0, 0.3, 0.22, this.upper);
    const head = new THREE.Mesh(sphG, this.suit); head.scale.setScalar(0.17); head.position.set(0, 0.55, 0); this.upper.add(head);
    const vis = new THREE.Mesh(sphG, this.visor); vis.scale.set(0.15, 0.11, 0.1); vis.position.set(0, 0.56, -0.1); this.upper.add(vis);
    M(this.acc, 0.07, 0.07, 0.07, 0, 0.55, 0.04, this.upper).scale.set(0.38, 0.05, 0.03);
    // руки
    this.aim = new THREE.Group(); this.aim.position.set(0, 0.15, 0); this.upper.add(this.aim);
    for (const sx of [-1, 1]) {
      const a = new THREE.Group(); a.position.set(sx * 0.3, 0.12, 0); a.rotation.x = -1.35; a.rotation.z = -sx * 0.18;
      M(this.suit, 0.13, 0.5, 0.13, 0, -0.25, 0, a); M(this.dark, 0.14, 0.1, 0.14, 0, -0.52, 0, a); M(this.acc, 0.14, 0.04, 0.14, 0, -0.18, 0, a);
      this.aim.add(a);
    }
    this.hold = new THREE.Group(); this.hold.position.set(0.12, 0.0, -0.32); this.aim.add(this.hold);
    this.flash = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.4), new THREE.MeshBasicMaterial({ color: 0xffe9a0, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    this.flash.visible = false; this.hold.add(this.flash);
    this.tag = nameSprite(name, color); this.root.add(this.tag);
    this.weapon = null; this.wid = ''; this.wsk = ''; this.phase = 0; this.flashT = 0; this.hurtT = 0; this.crouch = 0;
    this.muzzleWorld = new THREE.Vector3();
  }
  setWeapon(wid, skin) {
    if (this.wid === wid && this.wsk === skin) return;
    if (this.weapon) this.hold.remove(this.weapon);
    this.weapon = buildWeapon(wid, skin); this.weapon.rotation.y = 0; this.hold.add(this.weapon);
    this.flash.position.set(...this.weapon.userData.info.muzzle.map((v, i) => (i === 2 ? v - 0.1 : v)));
    this.wid = wid; this.wsk = skin;
  }
  muzzlePos() { this.weapon.userData.muzzle.getWorldPosition(this.muzzleWorld); return this.muzzleWorld; }
  fire() { this.flashT = 0.05; this.flash.visible = true; this.flash.rotation.z = Math.random() * 6; this.flash.scale.setScalar(0.7 + Math.random() * 0.8); }
  hurt() { this.hurtT = 0.12; this.suit.emissive.setHex(0xaa1111); }
  update(dt, speed, crouch, yaw, pitch) {
    this.root.rotation.y = yaw;
    this.upper.rotation.x = Math.max(-0.9, Math.min(0.9, pitch * 0.8));
    this.crouch += ((crouch ? 1 : 0) - this.crouch) * Math.min(1, dt * 12);
    this.body.scale.y = 1 - this.crouch * 0.26;
    this.phase += dt * speed * 1.7;
    const sw = Math.min(1, speed / 4) * 0.8;
    this.legL.rotation.x = Math.sin(this.phase) * sw; this.legR.rotation.x = -Math.sin(this.phase) * sw;
    this.upper.position.y = 1.0 + Math.abs(Math.sin(this.phase)) * 0.03 * Math.min(1, speed / 4);
    if (this.flashT > 0) { this.flashT -= dt; if (this.flashT <= 0) this.flash.visible = false; }
    if (this.hurtT > 0) { this.hurtT -= dt; if (this.hurtT <= 0) this.suit.emissive.setHex(0); }
  }
  dispose() { this.root.removeFromParent(); }
}

// ---------- эффекты ----------
export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.tracers = []; this.parts = []; this.decals = []; this.di = 0;
    this.tg = new THREE.BoxGeometry(1, 1, 1);
    for (let i = 0; i < 28; i++) {
      const m = new THREE.Mesh(this.tg, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      m.visible = false; scene.add(m); this.tracers.push({ m, t: 0, life: 0.1 });
    }
    const sm = new THREE.SpriteMaterial({ color: 0xffd080, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    for (let i = 0; i < 160; i++) {
      const s = new THREE.Sprite(sm.clone()); s.visible = false; s.scale.setScalar(0.08); scene.add(s);
      this.parts.push({ s, v: new THREE.Vector3(), life: 0, max: 1, g: 0 });
    }
    const dm = new THREE.MeshBasicMaterial({ color: 0x05070a, transparent: true, opacity: 0.7, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    const dg = new THREE.CircleGeometry(0.06, 8);
    for (let i = 0; i < 48; i++) { const d = new THREE.Mesh(dg, dm); d.visible = false; scene.add(d); this.decals.push(d); }
    this.ti = 0; this.pi = 0;
  }
  tracer(a, b, color) {
    const tr = this.tracers[this.ti++ % this.tracers.length];
    const len = a.distanceTo(b); if (len < 0.5) return;
    tr.m.visible = true; tr.m.material.color.set(color); tr.m.material.opacity = 0.9; tr.t = tr.life;
    tr.m.scale.set(0.012, 0.012, len); tr.m.position.copy(a).lerp(b, 0.5); tr.m.lookAt(b);
  }
  burst(p, n, color, speed = 3, life = 0.35, size = 0.07, g = 8, dir) {
    for (let i = 0; i < n; i++) {
      const q = this.parts[this.pi++ % this.parts.length];
      q.s.visible = true; q.s.position.copy(p); q.s.material.color.set(color); q.s.scale.setScalar(size * (0.6 + Math.random() * 0.8));
      q.v.set(Math.random() - 0.5, Math.random() - 0.1, Math.random() - 0.5).multiplyScalar(speed * (0.4 + Math.random()));
      if (dir) q.v.addScaledVector(dir, speed * 0.7);
      q.life = q.max = life * (0.6 + Math.random() * 0.6); q.g = g;
    }
  }
  impact(p, n, color) { // попадание в стену
    this.burst(p, 7, color || 0xffd080, 3, 0.3, 0.06, 9, n);
    const d = this.decals[this.di++ % this.decals.length];
    d.visible = true; d.position.copy(p).addScaledVector(n, 0.01); d.lookAt(p.clone().add(n)); d.rotation.z = Math.random() * 6;
  }
  explosion(p) {
    this.burst(p, 60, 0xff7a2f, 14, 1.0, 0.5, 4); this.burst(p, 40, 0xffd080, 9, 0.8, 0.35, 3); this.burst(p, 30, 0xffffff, 18, 0.5, 0.2, 2);
  }
  update(dt) {
    for (const t of this.tracers) if (t.t > 0) { t.t -= dt; t.m.material.opacity = Math.max(0, t.t / t.life) * 0.9; if (t.t <= 0) t.m.visible = false; }
    for (const q of this.parts) if (q.life > 0) {
      q.life -= dt; if (q.life <= 0) { q.s.visible = false; continue; }
      q.v.y -= q.g * dt; q.s.position.addScaledVector(q.v, dt); q.s.material.opacity = q.life / q.max;
    }
  }
  clearDecals() { for (const d of this.decals) d.visible = false; }
}
