import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { buildWeapon } from './wmodels.js';
import { tickSkins } from './skins.js';

// Отдельный рендерер для предпросмотра оружия в арсенале и иконок кейсов
export class Preview {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.r = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true, preserveDrawingBuffer: false });
    this.r.outputColorSpace = THREE.SRGBColorSpace; this.r.toneMapping = THREE.ACESFilmicToneMapping; this.r.toneMappingExposure = 1.5;
    this.scene = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(this.r); this.scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.add(new THREE.HemisphereLight(0xcfe0ff, 0x50586a, 2.0));
    const d = new THREE.DirectionalLight(0xffffff, 3.6); d.position.set(1, 2, 2); this.scene.add(d);
    const d2 = new THREE.DirectionalLight(0x6ad0ff, 1.4); d2.position.set(-2, 0.5, -1); this.scene.add(d2);
    this.cam = new THREE.PerspectiveCamera(28, 2, 0.05, 20);
    this.pivot = new THREE.Group(); this.scene.add(this.pivot);
    this.cache = new Map(); this.rot = -1.25; this.auto = true; this.active = false; this.cur = null;
    this.canvas.addEventListener('pointerdown', (e) => { this.drag = e.clientX; this.auto = false; this.canvas.setPointerCapture(e.pointerId); });
    this.canvas.addEventListener('pointermove', (e) => { if (this.drag !== undefined) { this.rot += (e.clientX - this.drag) * 0.012; this.drag = e.clientX; } });
    const up = () => { this.drag = undefined; setTimeout(() => { if (this.drag === undefined) this.auto = true; }, 2500); };
    this.canvas.addEventListener('pointerup', up); this.canvas.addEventListener('pointercancel', up);
  }
  setWeapon(id, skin) {
    if (this.cur) this.pivot.remove(this.cur);
    const g = buildWeapon(id, skin); const box = new THREE.Box3().setFromObject(g); const c = box.getCenter(new THREE.Vector3()); const s = box.getSize(new THREE.Vector3());
    g.position.sub(c); const holder = new THREE.Group(); holder.add(g); this.pivot.add(holder); this.cur = holder;
    this.size = Math.max(s.x, s.z, 0.3) * 1.0 + s.y * 0.2;
  }
  fit(w, h) {
    this.r.setSize(w, h, false); this.cam.aspect = w / h; const th = Math.tan(this.cam.fov * Math.PI / 360), dist = Math.max(this.size * 0.62 / (this.cam.aspect * th), this.size * 0.2 / th) * 1.0;
    this.cam.position.set(0, this.size * 0.05, dist); this.cam.lookAt(0, 0, 0); this.cam.updateProjectionMatrix();
  }
  attach(box, id, skin) {
    this.active = true; box.innerHTML = ''; box.appendChild(this.canvas);
    this.r.setPixelRatio(Math.min(devicePixelRatio || 1, 2)); this.setWeapon(id, skin);
    const w = box.clientWidth || 400, h = box.clientHeight || 300; this.fit(w, h);
    this.canvas.style.width = '100%'; this.canvas.style.height = '100%';
    if (!this._l) { this._l = true; this.loop(); }
  }
  detach() { this.active = false; }
  loop() {
    requestAnimationFrame(() => this.loop());
    if (!this.active) return;
    tickSkins(performance.now() / 1000);
    if (this.auto) this.rot += 0.01;
    this.pivot.rotation.y = this.rot; this.pivot.rotation.x = 0.12;
    this.r.render(this.scene, this.cam);
  }
  /** иконка оружия в скине (data URL) */
  thumb(id, skin, w = 280, h = 140) {
    const k = id + ':' + skin; if (this.cache.has(k)) return this.cache.get(k);
    const wasActive = this.active, keep = this.cur, rotKeep = this.pivot.rotation.clone();
    if (keep) this.pivot.remove(keep);
    this.cur = null; this.setWeapon(id, skin);
    this.r.setPixelRatio(1); this.fit(w, h); this.pivot.rotation.set(0.12, -1.25, 0);
    this.r.render(this.scene, this.cam);
    const url = this.canvas.toDataURL('image/png'); this.cache.set(k, url);
    if (this.cur) this.pivot.remove(this.cur); this.cur = keep; if (keep) this.pivot.add(keep);
    this.pivot.rotation.copy(rotKeep);
    return url;
  }
}
