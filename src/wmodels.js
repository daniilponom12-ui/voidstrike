import * as THREE from 'three';
import { skinMaterials } from './skins.js';

// Процедурные модели оружия. Ствол направлен в -Z, начало координат у рукояти.
const boxG = new THREE.BoxGeometry(1, 1, 1);
const cylG = new THREE.CylinderGeometry(1, 1, 1, 14);
cylG.rotateX(Math.PI / 2); // ось вдоль Z

function B(m, g, w, h, d, x, y, z, rx = 0, ry = 0, rz = 0) {
  const o = new THREE.Mesh(boxG, m); o.scale.set(w, h, d); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); g.add(o); return o;
}
function C(m, g, r, len, x, y, z, rx = 0, ry = 0, rz = 0) {
  const o = new THREE.Mesh(cylG, m); o.scale.set(r, r, len); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); g.add(o); return o;
}

// набор мелких деталей: рёбра планки (пикатинни)
function rail(M, g, x, y, z0, z1, n = 12, w = 0.03) {
  const step = (z1 - z0) / n;
  for (let i = 0; i < n; i++) B(M.dark, g, w, 0.008, step * 0.55, x, y, z0 + step * (i + 0.5));
}
function vents(M, g, x, y, z0, z1, n, side = 1, h = 0.03) {
  const step = (z1 - z0) / n;
  for (let i = 0; i < n; i++) B(M.dark, g, 0.004, h, step * 0.4, x + side * 0.0, y, z0 + step * (i + 0.5));
}
function ring(M, g, r, len, x, y, z) { C(M.dark, g, r, len, x, y, z); }

const BUILD = {
  pulsar(M, g) {
    const slide = B(M.body, g, 0.036, 0.046, 0.25, 0, 0.032, -0.1);       // затвор
    B(M.dark, g, 0.034, 0.008, 0.25, 0, 0.056, -0.1);                     // верхняя планка затвора
    vents(M, g, 0.019, 0.034, -0.02, -0.18, 5); vents(M, g, -0.019, 0.034, -0.02, -0.18, 5);
    B(M.dark, g, 0.032, 0.03, 0.2, 0, -0.005, -0.08);       // рамка
    B(M.dark, g, 0.034, 0.11, 0.052, 0, -0.065, 0.015, 0.18); // рукоять
    B(M.accent, g, 0.038, 0.005, 0.14, 0, 0.0585, -0.1);
    B(M.accent, g, 0.0015, 0.05, 0.004, 0.0172, -0.06, 0.02, 0.18);
    const mag = B(M.dark, g, 0.026, 0.04, 0.04, 0, -0.125, 0.026, 0.18); // низ магазина
    C(M.dark, g, 0.0105, 0.05, 0, 0.032, -0.235); ring(M, g, 0.013, 0.012, 0, 0.032, -0.255);
    B(M.dark, g, 0.01, 0.014, 0.01, 0, 0.065, 0.0); B(M.dark, g, 0.008, 0.012, 0.01, 0, 0.065, -0.22);
    B(M.dark, g, 0.022, 0.012, 0.05, 0, -0.03, -0.03); B(M.dark, g, 0.01, 0.02, 0.052, 0, -0.045, -0.055); // скоба
    B(M.dark, g, 0.006, 0.018, 0.012, 0, -0.018, -0.045);                  // спуск
    g.userData.slide = slide; g.userData.slideZ = slide.position.z; g.userData.mag = mag;
    return { muzzle: [0, 0.032, -0.265], hands: { r: [0, -0.06, 0.02], l: [-0.035, -0.07, -0.02] }, view: [0.19, -0.19, -0.42], scale: 1.25 };
  },
  hawk(M, g) {
    B(M.dark, g, 0.036, 0.05, 0.16, 0, 0.01, -0.05);
    C(M.body, g, 0.017, 0.27, 0, 0.032, -0.2);                  // ствол
    B(M.dark, g, 0.026, 0.02, 0.27, 0, 0.012, -0.2);            // подствольная масса
    B(M.accent, g, 0.01, 0.006, 0.24, 0, 0.054, -0.2);
    const cyl = C(M.dark, g, 0.034, 0.07, 0, 0.015, -0.07);     // барабан
    for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; C(M.body, g, 0.007, 0.072, Math.cos(a) * 0.022, 0.015 + Math.sin(a) * 0.022, -0.07); }
    C(M.accent, g, 0.0355, 0.01, 0, 0.015, -0.1); C(M.accent, g, 0.0355, 0.01, 0, 0.015, -0.04);
    B(M.body, g, 0.034, 0.12, 0.05, 0, -0.07, 0.04, 0.35);
    B(M.dark, g, 0.01, 0.02, 0.012, 0, 0.065, -0.32); B(M.dark, g, 0.012, 0.016, 0.03, 0, 0.05, 0.02);
    B(M.dark, g, 0.01, 0.034, 0.02, 0, 0.04, 0.0); // курок
    B(M.dark, g, 0.022, 0.012, 0.05, 0, -0.03, -0.01);
    C(M.dark, g, 0.02, 0.03, 0, 0.032, -0.345); // дульный тормоз
    g.userData.mag = cyl;
    return { muzzle: [0, 0.032, -0.36], hands: { r: [0, -0.07, 0.05], l: [-0.03, -0.075, 0.02] }, view: [0.19, -0.2, -0.45], scale: 1.2 };
  },
  vortex(M, g) {
    B(M.body, g, 0.052, 0.07, 0.3, 0, 0, -0.12);
    vents(M, g, 0.027, 0.0, -0.02, -0.24, 7, 1, 0.04); vents(M, g, -0.027, 0.0, -0.02, -0.24, 7, -1, 0.04);
    B(M.dark, g, 0.044, 0.05, 0.14, 0, 0.005, -0.34);
    for (let i = 0; i < 4; i++) B(M.accent, g, 0.046, 0.006, 0.01, 0, 0.032, -0.29 - i * 0.03);
    C(M.dark, g, 0.012, 0.12, 0, 0.012, -0.46); ring(M, g, 0.02, 0.025, 0, 0.012, -0.52);
    C(M.accent, g, 0.016, 0.01, 0, 0.012, -0.4);
    const mag = new THREE.Group(); mag.position.set(0, 0, 0); g.add(mag);
    B(M.dark, mag, 0.026, 0.15, 0.045, 0, -0.1, -0.1, 0.12);
    B(M.accent, mag, 0.028, 0.012, 0.047, 0, -0.17, -0.098, 0.12);
    for (let i = 0; i < 4; i++) B(M.body, mag, 0.027, 0.006, 0.046, 0, -0.06 - i * 0.03, -0.1 + i * 0.0035, 0.12);
    B(M.dark, g, 0.036, 0.1, 0.05, 0, -0.07, 0.05, 0.25);
    B(M.dark, g, 0.02, 0.04, 0.16, 0, 0.0, 0.12);           // складной приклад
    B(M.dark, g, 0.026, 0.05, 0.012, 0, 0.0, 0.2);
    rail(M, g, 0, 0.04, -0.2, 0.05, 10);
    B(M.accent, g, 0.054, 0.006, 0.18, 0, 0.037, -0.1);
    B(M.dark, g, 0.034, 0.04, 0.05, 0, 0.06, -0.1); B(M.lens, g, 0.028, 0.028, 0.012, 0, 0.066, -0.125); // коллиматор
    B(M.dark, g, 0.014, 0.03, 0.03, 0.03, 0.01, -0.02); // рукоять заряжания
    g.userData.mag = mag;
    return { muzzle: [0, 0.012, -0.54], hands: { r: [0, -0.06, 0.05], l: [0, -0.045, -0.3] }, view: [0.17, -0.19, -0.4], scale: 1.0 };
  },
  nova(M, g) {
    B(M.body, g, 0.056, 0.085, 0.38, 0, 0, -0.1);
    B(M.dark, g, 0.04, 0.012, 0.08, 0.029, 0.01, -0.02); // окно выброса
    vents(M, g, 0.029, -0.01, -0.12, -0.28, 5, 1, 0.025); vents(M, g, -0.029, -0.01, -0.12, -0.28, 5, -1, 0.025);
    B(M.dark, g, 0.05, 0.065, 0.3, 0, 0.0, -0.44);          // цевьё
    for (let i = 0; i < 6; i++) B(M.body, g, 0.052, 0.008, 0.012, 0, 0.0, -0.32 - i * 0.045, 0, 0, 0);
    B(M.accent, g, 0.052, 0.008, 0.28, 0, 0.038, -0.44);
    rail(M, g, 0, 0.045, -0.58, -0.3, 8, 0.03);
    C(M.dark, g, 0.011, 0.22, 0, 0.012, -0.7);
    C(M.dark, g, 0.017, 0.05, 0, 0.012, -0.8); ring(M, g, 0.019, 0.01, 0, 0.012, -0.77); ring(M, g, 0.019, 0.01, 0, 0.012, -0.82);
    B(M.dark, g, 0.01, 0.04, 0.012, 0, 0.04, -0.74);        // мушка
    const mag = new THREE.Group(); g.add(mag);
    B(M.dark, mag, 0.028, 0.15, 0.06, 0, -0.115, -0.04, 0.22);
    for (let i = 0; i < 5; i++) B(M.body, mag, 0.029, 0.006, 0.062, 0, -0.07 - i * 0.025, -0.04 + i * 0.005, 0.22);
    B(M.body, g, 0.045, 0.1, 0.3, 0, -0.01, 0.2, -0.05);    // приклад
    B(M.dark, g, 0.05, 0.11, 0.02, 0, -0.01, 0.355, -0.05); // затыльник
    B(M.dark, g, 0.036, 0.1, 0.05, 0, -0.085, 0.06, 0.28);
    B(M.dark, g, 0.02, 0.012, 0.06, 0, -0.04, -0.01); B(M.dark, g, 0.008, 0.03, 0.06, 0, -0.05, -0.03); // скоба
    rail(M, g, 0, 0.052, -0.28, 0.08, 10);
    B(M.dark, g, 0.05, 0.05, 0.1, 0, 0.085, -0.12);         // прицел
    B(M.lens, g, 0.04, 0.036, 0.012, 0, 0.087, -0.17);
    B(M.accent, g, 0.058, 0.01, 0.1, 0, 0.02, -0.04);
    B(M.dark, g, 0.012, 0.02, 0.05, 0.034, 0.025, 0.03); // рукоять затвора
    g.userData.mag = mag;
    return { muzzle: [0, 0.012, -0.84], hands: { r: [0, -0.07, 0.07], l: [0, -0.04, -0.42] }, view: [0.16, -0.2, -0.42], scale: 0.78 };
  },
  scatter(M, g) {
    C(M.dark, g, 0.022, 0.62, 0, 0.02, -0.4);               // ствол
    C(M.body, g, 0.018, 0.5, 0, -0.022, -0.35);             // трубчатый магазин
    for (let i = 0; i < 4; i++) ring(M, g, 0.026, 0.012, 0, 0.0, -0.2 - i * 0.14);
    B(M.body, g, 0.058, 0.08, 0.24, 0, 0, -0.02);
    B(M.dark, g, 0.04, 0.012, 0.07, 0.03, 0.012, -0.02);
    const pump = B(M.dark, g, 0.052, 0.05, 0.2, 0, -0.015, -0.4); // цевьё-помпа
    for (let i = 0; i < 7; i++) B(M.body, g, 0.054, 0.04, 0.008, 0, -0.015, -0.46 + i * 0.025);
    B(M.accent, g, 0.054, 0.008, 0.22, 0, 0.012, -0.4);
    B(M.body, g, 0.045, 0.1, 0.32, 0, -0.02, 0.18, -0.1);
    B(M.dark, g, 0.05, 0.11, 0.02, 0, -0.025, 0.34, -0.1);
    B(M.dark, g, 0.036, 0.1, 0.05, 0, -0.08, 0.06, 0.25);
    B(M.dark, g, 0.008, 0.016, 0.01, 0, 0.048, -0.7);
    C(M.dark, g, 0.026, 0.04, 0, 0.02, -0.72);
    B(M.accent, g, 0.02, 0.004, 0.14, 0, 0.0415, -0.05);
    g.userData.pump = pump; g.userData.pumpZ = pump.position.z;
    return { muzzle: [0, 0.02, -0.74], hands: { r: [0, -0.07, 0.06], l: [0, -0.04, -0.42] }, view: [0.17, -0.2, -0.42], scale: 0.8 };
  },
  zenith(M, g) {
    B(M.body, g, 0.05, 0.085, 0.5, 0, 0, -0.05);
    vents(M, g, 0.026, 0.0, -0.1, -0.28, 6, 1, 0.04); vents(M, g, -0.026, 0.0, -0.1, -0.28, 6, -1, 0.04);
    C(M.dark, g, 0.014, 0.8, 0, 0.012, -0.7);               // длинный ствол
    C(M.accent, g, 0.0165, 0.02, 0, 0.012, -0.4); C(M.accent, g, 0.0165, 0.02, 0, 0.012, -0.8);
    for (let i = 0; i < 5; i++) ring(M, g, 0.0175, 0.012, 0, 0.012, -0.5 - i * 0.12);
    C(M.dark, g, 0.022, 0.07, 0, 0.012, -1.12);             // дульный тормоз
    for (let i = 0; i < 3; i++) B(M.dark, g, 0.05, 0.008, 0.01, 0, 0.012, -1.1 - i * 0.02);
    B(M.body, g, 0.045, 0.11, 0.34, 0, -0.02, 0.34, -0.06);
    B(M.dark, g, 0.05, 0.125, 0.02, 0, -0.02, 0.51, -0.06);
    B(M.dark, g, 0.036, 0.1, 0.05, 0, -0.085, 0.07, 0.25);
    const mag = B(M.dark, g, 0.026, 0.1, 0.05, 0, -0.08, -0.12, 0.1);
    rail(M, g, 0, 0.046, -0.28, 0.2, 12);
    // оптика
    C(M.dark, g, 0.026, 0.3, 0, 0.1, -0.08); C(M.dark, g, 0.034, 0.07, 0, 0.1, -0.2); C(M.dark, g, 0.036, 0.06, 0, 0.1, 0.05);
    ring(M, g, 0.028, 0.02, 0, 0.1, -0.1); ring(M, g, 0.028, 0.02, 0, 0.1, -0.05);
    B(M.dark, g, 0.012, 0.04, 0.02, 0, 0.065, -0.02); B(M.dark, g, 0.012, 0.04, 0.02, 0, 0.065, -0.16);
    B(M.dark, g, 0.02, 0.02, 0.02, 0.034, 0.1, -0.08); B(M.dark, g, 0.02, 0.02, 0.02, 0, 0.14, -0.08);
    const l = new THREE.Mesh(new THREE.CircleGeometry(0.03, 16), M.lens); l.position.set(0, 0.1, 0.082); g.add(l);
    const l2 = new THREE.Mesh(new THREE.CircleGeometry(0.034, 16), M.lens); l2.position.set(0, 0.1, -0.236); l2.rotation.y = Math.PI; g.add(l2);
    B(M.accent, g, 0.052, 0.006, 0.3, 0, 0.046, -0.05);
    B(M.dark, g, 0.014, 0.022, 0.05, 0.034, 0.03, 0.03); // рукоять затвора
    g.userData.mag = mag;
    return { muzzle: [0, 0.012, -1.16], hands: { r: [0, -0.07, 0.07], l: [0, -0.04, -0.4] }, view: [0.15, -0.2, -0.4], scale: 0.62, scope: true };
  },
  titan(M, g) {
    B(M.body, g, 0.06, 0.09, 0.42, 0, 0, -0.12);
    vents(M, g, 0.031, 0.0, -0.02, -0.24, 6, 1, 0.04); vents(M, g, -0.031, 0.0, -0.02, -0.24, 6, -1, 0.04);
    B(M.dark, g, 0.054, 0.07, 0.3, 0, 0.005, -0.5);
    for (let i = 0; i < 6; i++) B(M.body, g, 0.056, 0.008, 0.012, 0, 0.0, -0.4 - i * 0.045);
    B(M.accent, g, 0.056, 0.008, 0.28, 0, 0.042, -0.5);
    C(M.dark, g, 0.013, 0.22, 0, 0.01, -0.78); ring(M, g, 0.02, 0.012, 0, 0.01, -0.86); ring(M, g, 0.02, 0.012, 0, 0.01, -0.82); ring(M, g, 0.018, 0.01, 0, 0.01, -0.7);
    const mag = new THREE.Group(); g.add(mag);
    B(M.dark, mag, 0.07, 0.1, 0.13, 0, -0.095, -0.08);
    B(M.accent, mag, 0.072, 0.012, 0.132, 0, -0.145, -0.08);
    for (let i = 0; i < 3; i++) B(M.body, mag, 0.071, 0.006, 0.131, 0, -0.065 - i * 0.025, -0.08);
    for (const sx of [-1, 1]) B(M.dark, g, 0.006, 0.11, 0.006, sx * 0.032, -0.08, -0.66, 0, 0, sx * 0.4); // сошки
    B(M.body, g, 0.05, 0.1, 0.28, 0, -0.01, 0.22, -0.05); B(M.dark, g, 0.052, 0.11, 0.02, 0, -0.01, 0.37, -0.05);
    B(M.dark, g, 0.036, 0.1, 0.05, 0, -0.085, 0.06, 0.28);
    B(M.dark, g, 0.012, 0.04, 0.012, 0, 0.065, -0.05); B(M.dark, g, 0.014, 0.012, 0.2, 0, 0.088, -0.12); // ручка для переноски
    rail(M, g, 0, 0.047, -0.3, 0.08, 10);
    B(M.dark, g, 0.04, 0.04, 0.08, 0, 0.11, -0.28); B(M.lens, g, 0.028, 0.028, 0.012, 0, 0.11, -0.32);
    g.userData.mag = mag;
    return { muzzle: [0, 0.01, -0.88], hands: { r: [0, -0.065, 0.06], l: [0, -0.05, -0.45] }, view: [0.17, -0.2, -0.4], scale: 0.76 };
  },
  sting(M, g) {
    B(M.body, g, 0.034, 0.05, 0.22, 0, 0.03, -0.08);
    B(M.dark, g, 0.03, 0.025, 0.16, 0, 0.002, -0.06);
    C(M.accent, g, 0.009, 0.14, 0, 0.058, -0.09);          // энергоячейка
    for (let i = 0; i < 3; i++) ring(M, g, 0.017, 0.012, 0, 0.03, -0.2 - i * 0.022); // катушки
    C(M.dark, g, 0.009, 0.1, 0, 0.03, -0.26);
    vents(M, g, 0.018, 0.034, -0.0, -0.16, 4);
    const mag = B(M.dark, g, 0.026, 0.03, 0.04, 0, -0.12, 0.026, 0.2);
    B(M.dark, g, 0.034, 0.11, 0.05, 0, -0.065, 0.02, 0.2);
    B(M.accent, g, 0.0015, 0.05, 0.004, 0.0172, -0.06, 0.02, 0.2);
    B(M.dark, g, 0.022, 0.012, 0.05, 0, -0.03, -0.03); B(M.dark, g, 0.01, 0.02, 0.05, 0, -0.045, -0.055);
    B(M.dark, g, 0.01, 0.014, 0.01, 0, 0.066, 0.0); B(M.dark, g, 0.008, 0.012, 0.01, 0, 0.066, -0.17);
    g.userData.mag = mag;
    return { muzzle: [0, 0.03, -0.31], hands: { r: [0, -0.06, 0.03], l: [-0.035, -0.07, -0.01] }, view: [0.19, -0.19, -0.42], scale: 1.25 };
  },
  phantom(M, g) {
    C(M.dark, g, 0.014, 0.13, 0, 0, 0.02);                  // рукоять
    for (let i = 0; i < 3; i++) C(M.accent, g, 0.0152, 0.008, 0, 0, -0.02 + i * 0.04);
    for (let i = 0; i < 4; i++) C(M.body, g, 0.0146, 0.006, 0, 0, -0.005 + i * 0.027);
    C(M.dark, g, 0.019, 0.02, 0, 0, 0.09);                  // навершие
    B(M.dark, g, 0.026, 0.07, 0.016, 0, 0, -0.06);           // гарда
    const sh = new THREE.Shape(); sh.moveTo(0, -0.02); sh.lineTo(0.22, -0.02); sh.lineTo(0.3, 0.012); sh.lineTo(0.2, 0.034); sh.lineTo(0, 0.034); sh.closePath();
    const bg = new THREE.ExtrudeGeometry(sh, { depth: 0.006, bevelEnabled: false });
    bg.translate(0, 0, -0.003); bg.rotateY(Math.PI / 2);
    const blade = new THREE.Mesh(bg, M.body); blade.position.set(0, -0.004, -0.07); g.add(blade);
    B(M.accent, g, 0.0075, 0.005, 0.2, 0, 0.034 - 0.004, -0.17);
    B(M.accent, g, 0.0075, 0.004, 0.14, 0, -0.022, -0.15);
    return { muzzle: [0, 0, -0.3], hands: { r: [0, 0, 0.03], l: [0, -0.2, 0.2] }, view: [0.2, -0.17, -0.46], scale: 1.0, knife: true };
  },
};

/** Группа оружия со скином. userData: muzzle (Object3D), info */
export function buildWeapon(id, skin) {
  const M = skinMaterials(skin);
  const g = new THREE.Group();
  const info = BUILD[id](M, g);
  const muzzle = new THREE.Object3D(); muzzle.position.set(...info.muzzle); g.add(muzzle);
  Object.assign(g.userData, { muzzle, info, id, skin });
  return g;
}

/** Руки-перчатки для вида от первого лица */
const trimCache = new WeakMap();
function trimMat(M) { let t = trimCache.get(M); if (!t) { t = new THREE.MeshStandardMaterial({ color: M.accent.color, emissive: M.accent.color, emissiveIntensity: 0.35, roughness: 0.6 }); trimCache.set(M, t); } return t; }

export function buildHands(info, M) {
  const g = new THREE.Group();
  const hand = (p, left, fwdReach) => {
    const side = left ? -1 : 1;
    // ладонь и пальцы (обхват рукояти)
    B(M.glove, g, 0.058, 0.052, 0.088, p[0], p[1], p[2]);
    for (let i = 0; i < 4; i++) {
      const y = p[1] + 0.02 - i * 0.0135;
      B(M.glove, g, 0.062, 0.0125, 0.034, p[0] - side * 0.002, y, p[2] - 0.058, 0.25, 0, 0);
      B(M.glove, g, 0.052, 0.0115, 0.026, p[0] - side * 0.004, y - 0.006, p[2] - 0.088, 0.9, 0, 0);
    }
    // большой палец
    B(M.glove, g, 0.017, 0.017, 0.062, p[0] - side * 0.034, p[1] + 0.022, p[2] - 0.022, -0.25, side * 0.3, 0);
    // тыльная сторона и костяшки
    B(M.glove, g, 0.05, 0.012, 0.07, p[0] + side * 0.002, p[1] + 0.03, p[2] + 0.004);
    // манжета перчатки и рукав
    const wrist = new THREE.Vector3(p[0] + side * 0.004, p[1] - 0.004, p[2] + 0.075);
    const e = new THREE.Euler(left ? 0.38 : 0.3, left ? -0.32 : 0.26, 0, 'YXZ');
    const dir = new THREE.Vector3(0, 0, 1).applyEuler(e);
    const cuff = new THREE.Mesh(cylG, M.dark); cuff.scale.set(0.033, 0.033, 0.02); cuff.position.copy(wrist).addScaledVector(dir, 0.012); cuff.rotation.copy(e); g.add(cuff);
    const len = 0.52;
    const arm = new THREE.Mesh(cylG, M.suit); arm.scale.set(0.03, 0.03, len); arm.position.copy(wrist).addScaledVector(dir, 0.03 + len / 2); arm.rotation.copy(e); g.add(arm);
    const pad = new THREE.Mesh(cylG, M.dark); pad.scale.set(0.034, 0.034, 0.05); pad.position.copy(wrist).addScaledVector(dir, 0.1); pad.rotation.copy(e); g.add(pad);
  };
  if (info.hands) { hand(info.hands.r, false); if (!info.knife) hand(info.hands.l, true); }
  return g;
}
