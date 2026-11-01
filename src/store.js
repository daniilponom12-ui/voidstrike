import { SKIN_IDS, SKINS, RARITY_WEIGHTS } from './skins.js';
import { ALL_WEAPONS } from '../shared/weapons.js';
import { saveCloud, loadCloud } from './yandex.js';

const KEY = 'voidstrike_v1';
export const CASE_PRICE = 500;

const defaults = () => ({
  ts: 0, name: '', credits: 1500, xp: 0,
  inv: {}, // "weapon:skin" -> count
  equip: {}, // weapon -> skin
  loadout: { p: 'nova', s: 'pulsar' },
  settings: { sens: 1, fov: 85, volume: 0.7, ambient: true, quality: 'mid', lang: '', cross: '#41ffb0', difficulty: 'normal', auto: true, touchScale: 1, gyro: false },
  tutDone: false,
  stats: { kills: 0, deaths: 0, matches: 0, wins: 0, heads: 0 },
});

export const store = { d: defaults() };
let saveTimer = 0;

export async function loadStore() {
  let local = null;
  try { local = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
  const cloud = await loadCloud();
  let best = local;
  if (cloud.data && cloud.data.ts && (!local || cloud.data.ts > local.ts)) best = cloud.data;
  store.d = Object.assign(defaults(), best || {});
  store.d.settings = Object.assign(defaults().settings, (best && best.settings) || {});
  store.d.stats = Object.assign(defaults().stats, (best && best.stats) || {});
  store.d.loadout = Object.assign(defaults().loadout, (best && best.loadout) || {});
  if (!store.d.name) store.d.name = cloud.name || 'Pilot' + ((Math.random() * 9000 + 1000) | 0);
  return store.d;
}

export function save() {
  store.d.ts = Date.now();
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try { localStorage.setItem(KEY, JSON.stringify(store.d)); } catch (e) {}
    saveCloud(store.d);
  }, 400);
}

export const owns = (w, s) => s === 'stock' || !!store.d.inv[w + ':' + s];
export const equipped = (w) => { const s = store.d.equip[w] || 'stock'; return owns(w, s) ? s : 'stock'; };
export function equip(w, s) { if (owns(w, s)) { store.d.equip[w] = s; save(); } }
export function addCredits(n) { store.d.credits = Math.max(0, store.d.credits + n); save(); }
export const level = () => Math.floor(Math.sqrt(store.d.xp / 120)) + 1;
export function addXp(n) { store.d.xp += n; save(); }
export function ownedCount() { return Object.keys(store.d.inv).length; }

/** Бросок кейса: возвращает {weapon, skin, rarity} */
export function rollCase() {
  const total = RARITY_WEIGHTS.reduce((a, b) => a + b, 0);
  let r = Math.random() * total, rar = 0;
  for (let i = 0; i < RARITY_WEIGHTS.length; i++) { r -= RARITY_WEIGHTS[i]; if (r <= 0) { rar = i; break; } }
  const pool = SKIN_IDS.filter((s) => SKINS[s].rarity === rar);
  const skin = pool[(Math.random() * pool.length) | 0];
  const weapon = ALL_WEAPONS[(Math.random() * ALL_WEAPONS.length) | 0];
  return { weapon, skin, rarity: rar };
}
export function grant(item) {
  const k = item.weapon + ':' + item.skin;
  store.d.inv[k] = (store.d.inv[k] || 0) + 1;
  save();
}
