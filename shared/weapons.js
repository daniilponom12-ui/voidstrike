// Общие характеристики оружия (клиент + сервер)
function pattern(n, pitch, yaw, seed) {
  // детерминированный паттерн отдачи: сначала вверх, потом уход вбок
  let s = seed, r = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  const out = []; let dir = r() < 0.5 ? -1 : 1;
  for (let i = 0; i < n; i++) {
    const up = pitch * (i < 8 ? 1 : i < 16 ? 0.8 : 0.6);
    if (i > 6 && r() < 0.25) dir = -dir;
    out.push([+(up * (0.85 + r() * 0.3)).toFixed(3), +((i < 4 ? (r() - 0.5) * yaw * 0.5 : dir * yaw * (0.4 + r() * 0.6))).toFixed(3)]);
  }
  return out;
}

export const WEAPONS = {
  pulsar: {
    id: 'pulsar', slot: 2, auto: false, rpm: 380, dmg: 28, head: 3, falloff: 0.975, range: 120,
    mag: 16, reserve: 64, reload: 1.55, pellets: 1,
    spread: 0.25, spreadMove: 2.4, spreadAir: 4.5, spreadCrouch: 0.6, spreadPerShot: 0.5, spreadMax: 2.8,
    recoil: pattern(16, 0.8, 0.25, 11), recoverTime: 0.32, speed: 0.98, kick: 0.018, tracer: '#7fe9ff', snd: 'pistol',
  },
  hawk: {
    id: 'hawk', slot: 2, auto: false, rpm: 105, dmg: 62, head: 3, falloff: 0.98, range: 140,
    mag: 7, reserve: 28, reload: 2.3, pellets: 1,
    spread: 0.2, spreadMove: 3.2, spreadAir: 6, spreadCrouch: 0.6, spreadPerShot: 2.5, spreadMax: 4,
    recoil: pattern(7, 4.2, 0.6, 23), recoverTime: 0.7, speed: 0.93, kick: 0.05, tracer: '#ffb347', snd: 'heavy',
  },
  vortex: {
    id: 'vortex', slot: 1, auto: true, rpm: 850, dmg: 20, head: 3, falloff: 0.955, range: 90,
    mag: 32, reserve: 128, reload: 1.95, pellets: 1,
    spread: 0.5, spreadMove: 2.0, spreadAir: 4, spreadCrouch: 0.65, spreadPerShot: 0.12, spreadMax: 3.2,
    recoil: pattern(32, 0.55, 0.5, 37), recoverTime: 0.25, speed: 1.0, kick: 0.012, tracer: '#c77dff', snd: 'smg',
  },
  nova: {
    id: 'nova', slot: 1, auto: true, rpm: 650, dmg: 27, head: 4, falloff: 0.985, range: 200,
    mag: 30, reserve: 90, reload: 2.4, pellets: 1,
    spread: 0.2, spreadMove: 3.2, spreadAir: 6, spreadCrouch: 0.55, spreadPerShot: 0.18, spreadMax: 3.5,
    recoil: pattern(30, 0.95, 0.6, 51), recoverTime: 0.3, speed: 0.9, kick: 0.02, tracer: '#5cf2ff', snd: 'rifle',
  },
  scatter: {
    id: 'scatter', slot: 1, auto: false, rpm: 70, dmg: 13, head: 2, falloff: 0.82, range: 45,
    mag: 6, reserve: 30, reload: 2.9, pellets: 9,
    spread: 3.0, spreadMove: 0.8, spreadAir: 1.5, spreadCrouch: 0.8, spreadPerShot: 0, spreadMax: 4,
    recoil: pattern(6, 5, 0.8, 7), recoverTime: 0.9, speed: 0.92, kick: 0.07, tracer: '#ff7a3d', snd: 'shotgun',
  },
  zenith: {
    id: 'zenith', slot: 1, auto: false, rpm: 48, dmg: 115, head: 4, falloff: 0.995, range: 400,
    mag: 5, reserve: 20, reload: 3.3, pellets: 1,
    spread: 0.08, spreadMove: 7, spreadAir: 9, spreadCrouch: 0.7, spreadPerShot: 0, spreadMax: 7, scopedSpread: 0.02,
    recoil: pattern(5, 3.2, 0.3, 91), recoverTime: 1.0, speed: 0.8, kick: 0.09, tracer: '#ff4d6d', snd: 'sniper',
    zoom: [40, 14],
  },
  titan: {
    id: 'titan', slot: 1, auto: true, rpm: 600, dmg: 24, head: 3.5, falloff: 0.98, range: 180,
    mag: 100, reserve: 200, reload: 4.6, pellets: 1,
    spread: 0.35, spreadMove: 4.5, spreadAir: 7, spreadCrouch: 0.6, spreadPerShot: 0.1, spreadMax: 4.5,
    recoil: pattern(100, 0.7, 0.55, 63), recoverTime: 0.35, speed: 0.78, kick: 0.025, tracer: '#9dff6a', snd: 'rifle',
  },
  sting: {
    id: 'sting', slot: 2, auto: false, rpm: 240, dmg: 38, head: 3.5, falloff: 0.975, range: 130,
    mag: 14, reserve: 56, reload: 1.8, pellets: 1,
    spread: 0.22, spreadMove: 2.8, spreadAir: 5.5, spreadCrouch: 0.6, spreadPerShot: 0.8, spreadMax: 3.2,
    recoil: pattern(14, 1.5, 0.35, 17), recoverTime: 0.4, speed: 0.97, kick: 0.03, tracer: '#ff6ad5', snd: 'pistol',
  },
  phantom: {
    id: 'phantom', slot: 3, melee: true, auto: false, rpm: 110, dmg: 40, dmg2: 65, back: 180, head: 1, falloff: 1, range: 2.4,
    mag: 0, reserve: 0, reload: 0, pellets: 1, spread: 0, spreadMove: 0, spreadAir: 0, spreadCrouch: 1, spreadPerShot: 0, spreadMax: 0,
    recoil: [[0, 0]], recoverTime: 0.2, speed: 1.06, kick: 0, tracer: '#ffffff', snd: 'knife',
    interval: 0.55, interval2: 1.1,
  },
};

export const GG_LADDER = ['pulsar', 'sting', 'hawk', 'vortex', 'scatter', 'nova', 'titan', 'zenith', 'phantom'];
export const PRIMARIES = ['nova', 'vortex', 'scatter', 'zenith', 'titan'];
export const SECONDARIES = ['pulsar', 'hawk', 'sting'];
export const ALL_WEAPONS = Object.keys(WEAPONS);

export const PRICES = { pulsar: 0, hawk: 500, sting: 300, vortex: 1500, scatter: 1200, nova: 2700, titan: 5200, zenith: 4750 };
