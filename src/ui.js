import { t, setLang, getLang, skinName, weaponName, rankName } from './i18n.js';
import { store, save, owns, equipped, equip, addCredits, addXp, level, rollCase, grant, ownedCount, CASE_PRICE } from './store.js';
import { SKINS, SKIN_IDS, RARITY_COLORS, RARITY_WEIGHTS } from './skins.js';
import { WEAPONS, ALL_WEAPONS, PRIMARIES, SECONDARIES } from '../shared/weapons.js';
import { MAP_IDS } from '../shared/map.js';
import { Preview } from './preview.js';
import * as A from './audio.js';
import * as Y from './yandex.js';
import { submitScore } from './yandex.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const ICONS = { dm: '☄', tdm: '⚔', gg: '🎯', bomb: '💣' };

export class UI {
  constructor(game) {
    this.g = game; this.screen = 'menu'; this.stack = []; this.mode = 'dm'; this.map = 'helios'; this.online = true; this.aw = 'nova'; this.selSkin = null; this.lastAd = 0; this.opts = null;
    this.prev = null;
    game.ui.toast = (m) => this.toast(m);
    game.ui.onPause = (p) => this.onPause(p);
    game.ui.onEnd = (s) => this.onEnd(s);
    game.ui.onDisconnect = () => this.onDisconnect();
    game.ui.onMatchStart = () => this.onMatchStart();
    this.bind();
    this.renderTexts();
  }
  get preview() { if (!this.prev) this.prev = new Preview(); return this.prev; }

  bind() {
    const click = (id, fn) => $(id).addEventListener('click', () => { A.initAudio(); A.play('ui', 0.7); fn(); });
    click('bPlay', () => this.show('playScr'));
    click('bArmory', () => { this.show('armoryScr'); this.renderArmory(); });
    click('bCases', () => { this.show('casesScr'); this.renderCases(); });
    click('bTop', () => { this.show('topScr'); this.renderTop(); });
    click('bSettings', () => { this.show('setScr'); this.renderSettings(); });
    document.querySelectorAll('[data-back]').forEach((b) => b.addEventListener('click', () => { A.play('ui', 0.6); this.back(); }));
    click('bStart', () => this.startMatch());
    click('bResume', () => { this.g.lock(); this.g.setPaused(false); $('pause').classList.remove('on'); });
    click('bPauseSet', () => { $('pause').classList.remove('on'); this.pauseSettings = true; this.show('setScr'); this.renderSettings(); });
    click('bLeave', () => this.leave());
    click('bLobbyCancel', () => { $('lobby').classList.remove('on'); this.cancelConnect = true; });
    click('bAgain', () => this.again());
    click('bToMenu', () => this.toMenu());
    click('bDouble', () => this.doubleReward());
    click('bOpen', () => this.openCase());
    click('bAd', () => this.adCredits());
    click('bRevealOk', () => { $('caseOpen').classList.remove('on'); this.renderCases(); });
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && this.screen !== 'menu' && !this.g.running) this.back();
    });
    document.addEventListener('visibilitychange', () => { A.muteAll(document.hidden); if (document.hidden) { this.g.keys = {}; } });
  }

  // ---------- тексты ----------
  renderTexts() {
    $('tagline').textContent = t('tagline'); $('bPlay').textContent = t('play'); $('bArmory').textContent = t('armory'); $('bCases').textContent = t('cases'); $('bSettings').textContent = t('settings'); $('bTop').textContent = t('topBtn'); $('topTitle').textContent = t('top');
    $('playTitle').textContent = t('play'); $('bStart').textContent = t('start'); $('ctrlHint').textContent = t('controls');
    $('armTitle').textContent = t('armory'); $('casesTitle').textContent = t('cases'); $('setTitle').textContent = t('settings');
    $('pauseT').textContent = t('pause'); $('pauseH').textContent = t('clickToPlay'); $('bResume').textContent = t('resume'); $('bPauseSet').textContent = t('settings'); $('bLeave').textContent = t('leave');
    $('lobbyT').textContent = t('connecting'); $('bLobbyCancel').textContent = t('back');
    $('bAgain').textContent = t('playAgain'); $('bToMenu').textContent = t('toMenu'); $('bDouble').textContent = t('doubleAd');
    $('caseName').textContent = t('caseName'); $('caseDesc').textContent = t('caseDesc') + ' · ' + CASE_PRICE; $('bAd').textContent = t('adReward'); $('bRevealOk').textContent = t('ok');
    $('bOpen').textContent = t('open') + ' · ' + CASE_PRICE + ' ◈'; $('rotHint').textContent = t('rotate'); $('loadHint').textContent = t('loading');
    $('rarList').innerHTML = RARITY_COLORS.map((c, i) => `<span style="color:${c};border-color:${c}">${t('r' + i)} ${RARITY_WEIGHTS[i]}%</span>`).join('');
    this.renderProfile(); this.renderModes(); this.renderPlayOpts();
  }

  show(id) {
    if (this.screen !== id) this.stack.push(this.screen);
    document.querySelectorAll('.screen').forEach((s) => s.classList.remove('on'));
    $(id).classList.add('on'); this.screen = id;
    if (id !== 'armoryScr' && this.prev) this.prev.detach();
  }
  back() {
    const prev = this.stack.pop() || 'menu';
    document.querySelectorAll('.screen').forEach((s) => s.classList.remove('on'));
    this.screen = prev; $(prev).classList.add('on');
    if (this.prev) this.prev.detach();
    if (prev === 'menu') this.renderProfile();
    if (this.pauseSettings && this.g.running) { this.pauseSettings = false; document.querySelectorAll('.screen').forEach((s) => s.classList.remove('on')); $('pause').classList.add('on'); this.screen = 'menu'; }
  }
  hideScreens() { document.querySelectorAll('.screen').forEach((s) => s.classList.remove('on')); this.stack = []; this.screen = 'menu'; if (this.prev) this.prev.detach(); }
  toast(msg) { const el = $('toast'); el.textContent = msg; el.style.display = 'block'; clearTimeout(this.tt); this.tt = setTimeout(() => (el.style.display = 'none'), 2600); }

  // ---------- профиль ----------
  renderProfile() {
    const d = store.d, s = d.stats;
    $('profile').innerHTML = `<div class="hint">${t('name')}</div><input id="inName" maxlength="14" value="${esc(d.name)}">
      <div class="kv"><span>${t('level')} ${level()}</span><b style="color:var(--or)">${esc(rankName(level()))}</b></div><div class="kv"><span>${t('credits')}</span><b class="coin">${d.credits} ◈</b></div>
      <div class="kv"><span>${t('invCount')}</span><b>${ownedCount()}</b></div>
      <hr style="border:0;border-top:1px solid var(--line);width:100%"><div class="hint">${t('stats')}</div>
      <div class="kv"><span>${t('kills')}</span><b>${s.kills}</b></div><div class="kv"><span>${t('deaths')}</span><b>${s.deaths}</b></div>
      <div class="kv"><span>${t('matches')}</span><b>${s.matches}</b></div><div class="kv"><span>${t('wins')}</span><b>${s.wins}</b></div>`;
    $('inName').addEventListener('change', (e) => { store.d.name = e.target.value.trim().slice(0, 14) || store.d.name; save(); });
  }

  // ---------- выбор режима ----------
  renderModes() {
    $('modes').innerHTML = ['dm', 'tdm', 'gg', 'bomb'].map((m) => `<div class="mode ${m === this.mode ? 'sel' : ''}" data-m="${m}"><span class="ic">${ICONS[m]}</span><h3>${t('mode_' + m)}</h3><p>${t('desc_' + m)}</p></div>`).join('');
    $('modes').querySelectorAll('.mode').forEach((el) => el.addEventListener('click', () => { A.initAudio(); A.play('ui', 0.6); this.mode = el.dataset.m; this.renderModes(); }));
  }
  renderPlayOpts() {
    const d = store.d.settings;
    $('playOpts').innerHTML = `<div class="seg" id="segMap" title="${t('mapLabel')}">${MAP_IDS.map((m) => `<button data-map="${m}" class="${m === this.map ? 'on' : ''}">${t('map_' + m)}</button>`).join('')}</div><div class="seg" id="segNet"><button data-o="1" class="${this.online ? 'on' : ''}">${t('online')}</button><button data-o="0" class="${!this.online ? 'on' : ''}">${t('offline')}</button></div>
      ${this.online ? `<input type="text" class="code" id="inCode" maxlength="6" placeholder="${t('roomCode')}">` : `<label class="hint">${t('difficulty')} <select id="selDiff"><option value="easy">${t('easy')}</option><option value="normal">${t('normal')}</option><option value="hard">${t('hard')}</option></select></label>`}
      ${this.online ? `<span class="hint">${t('server_hint')}</span>` : ''}<span class="hint">${t('desc_' + this.map)}</span>`;
    if (!this.online) $('selDiff').value = d.difficulty;
    $('segMap').querySelectorAll('button').forEach((b) => b.addEventListener('click', () => { this.map = b.dataset.map; A.play('ui', 0.6); this.renderPlayOpts(); }));
    $('segNet').querySelectorAll('button').forEach((b) => b.addEventListener('click', () => { this.online = b.dataset.o === '1'; A.play('ui', 0.6); this.renderPlayOpts(); }));
    const sd = $('selDiff'); if (sd) sd.addEventListener('change', () => { store.d.settings.difficulty = sd.value; save(); });
  }

  // ---------- матч ----------
  async startMatch(force) {
    A.initAudio();
    const code = this.online && $('inCode') ? $('inCode').value.trim().toUpperCase() : '';
    const opts = { mode: this.mode, map: this.map, online: this.online, code, diff: store.d.settings.difficulty, bots: 7 };
    this.opts = opts;
    await this.launch(opts);
  }
  async launch(opts) {
    this.cancelConnect = false;
    if (opts.online) $('lobby').classList.add('on');
    const ok = await this.g.start(opts);
    $('lobby').classList.remove('on');
    if (this.cancelConnect) { this.g.stop(); return; }
    if (!ok) {
      if (opts.online && confirm(t('connFail'))) { this.online = false; this.opts = { ...opts, online: false }; return this.launch(this.opts); }
      return;
    }
    this.hideScreens(); $('end').classList.remove('on'); $('pause').classList.remove('on');
  }
  onPause(p) { if (this.g.ended) return; $('pause').classList.toggle('on', p); }
  onMatchStart() { $('end').classList.remove('on'); if (!this.g.touch && document.pointerLockElement !== this.g.canvas) this.g.setPaused(true); }
  onDisconnect() { this.g.stop(); $('end').classList.remove('on'); this.toast(t('disconnected')); this.toMenu(true); }
  leave() { $('pause').classList.remove('on'); this.g.setPaused(false); this.g.leaveMatch(); this.toMenu(true); }
  toMenu(skipAd) {
    $('end').classList.remove('on'); this.g.stop();
    document.querySelectorAll('.screen').forEach((s) => s.classList.remove('on')); $('menu').classList.add('on'); this.screen = 'menu'; this.stack = [];
    this.renderProfile();
    if (!skipAd) this.maybeAd();
  }
  again() { $('end').classList.remove('on'); this.maybeAd(() => this.launch(this.opts)); }
  maybeAd(cb) {
    const now = Date.now();
    if (now - this.lastAd < 120000 || !Y.hasYandex()) { cb && cb(); return; }
    this.lastAd = now;
    Y.showInterstitial({ onOpen: () => A.muteAll(true), onClose: () => { A.muteAll(false); cb && cb(); } });
  }

  onEnd(s) {
    const d = store.d, win = s.result === 'win';
    const credits = 40 + s.kills * 25 + s.heads * 10 + (win ? 150 : 0), xp = 40 + s.kills * 15 + (win ? 100 : 0);
    d.stats.kills += s.kills; d.stats.deaths += s.deaths; d.stats.heads += s.heads; d.stats.matches++; if (win) d.stats.wins++;
    addCredits(credits); addXp(xp); save(); submitScore(d.stats.kills);
    this.lastReward = credits; this.doubled = false;
    $('endTitle').textContent = s.result === 'win' ? t('win') : s.result === 'lose' ? t('lose') : t('draw'); $('endTitle').className = s.result;
    const rows = [...s.board].sort((a, b) => b.pts - a.pts || b.k - a.k).map((e) => `<tr class="${e.id === s.myId ? 'me' : ''}"><td>${esc(e.name)}${e.bot ? ' 🤖' : ''}</td><td>${e.k}</td><td>${e.d}</td><td>${e.pts}</td></tr>`).join('');
    $('endBody').innerHTML = `<div class="row" style="justify-content:center;margin-bottom:10px"><span class="coin" style="font-size:22px">+${credits} ◈</span><span class="hint">· ${t('kills')}: ${s.kills} · ${t('deaths')}: ${s.deaths}</span></div><table><tr><th></th><th>${t('kills')}</th><th>${t('deaths')}</th><th>${t('score')}</th></tr>${rows}</table>`;
    $('bDouble').style.display = ''; $('bAgain').textContent = s.online ? t('playAgain') : t('playAgain');
    $('end').classList.add('on'); A.play(win ? 'uiok' : 'ui', 1);
  }
  doubleReward() {
    if (this.doubled) return;
    Y.showRewarded({ onOpen: () => A.muteAll(true), onRewarded: () => { this.doubled = true; addCredits(this.lastReward); this.toast('+' + this.lastReward + ' ◈'); $('bDouble').style.display = 'none'; }, onClose: () => A.muteAll(false) });
  }
  adCredits() {
    Y.showRewarded({ onOpen: () => A.muteAll(true), onRewarded: () => { addCredits(300); this.toast('+300 ◈'); this.renderCases(); }, onClose: () => A.muteAll(false) });
  }

  // ---------- арсенал ----------
  renderArmory() {
    $('armCoins').textContent = store.d.credits + ' ◈';
    $('wtabs').innerHTML = ALL_WEAPONS.map((w) => `<button data-w="${w}" class="${w === this.aw ? 'on' : ''}">${esc(weaponName(w))}</button>`).join('');
    $('wtabs').querySelectorAll('button').forEach((b) => b.addEventListener('click', () => { A.play('ui', 0.5); this.aw = b.dataset.w; this.selSkin = equipped(this.aw); this.renderArmory(); }));
    if (!this.selSkin || !SKINS[this.selSkin]) this.selSkin = equipped(this.aw);
    const w = WEAPONS[this.aw];
    $('armName').textContent = weaponName(this.aw);
    this.renderSkinInfo();
    const bar = (v, max) => `<div class="bar"><i style="width:${Math.min(100, v / max * 100)}%"></i></div>`;
    $('wstats').innerHTML = w.melee ? `<div>${t('dmg')} ${w.dmg} / ${w.dmg2} / ${w.back}${bar(w.back, 200)}</div><div>${t('rate')}${bar(w.rpm, 900)}</div>`
      : `<div>${t('dmg')} ${w.dmg}${w.pellets > 1 ? '×' + w.pellets : ''}${bar(w.dmg * w.pellets, 130)}</div><div>${t('rate')} ${w.rpm}${bar(w.rpm, 900)}</div><div>${t('mag')} ${w.mag}${bar(w.mag, 35)}</div><div>${t('rng')}${bar(w.range, 400)}</div>`;
    const box = $('prevBox');
    this.preview.attach(box, this.aw, this.selSkin);
    // скины
    const p = this.preview;
    $('skins').innerHTML = SKIN_IDS.map((s) => {
      const own = owns(this.aw, s), cnt = store.d.inv[this.aw + ':' + s] || 0;
      return `<div class="sk ${own ? '' : 'lock'} ${s === this.selSkin ? 'sel' : ''}" data-s="${s}"><img alt="" data-t="${s}"><div class="nm" style="color:${RARITY_COLORS[SKINS[s].rarity]}">${esc(skinName(s))}</div><i class="rb" style="background:${RARITY_COLORS[SKINS[s].rarity]}"></i>${cnt > 1 ? `<span class="cnt">×${cnt}</span>` : ''}</div>`;
    }).join('');
    // иконки лениво, чтобы не подвешивать интерфейс
    const imgs = [...$('skins').querySelectorAll('img')]; let i = 0;
    const tick = () => { if (this.screen !== 'armoryScr' || i >= imgs.length) { if (this.screen === 'armoryScr') { this.preview.attach($('prevBox'), this.aw, this.selSkin); } return; } const im = imgs[i++]; im.src = p.thumb(this.aw, im.dataset.t, 224, 112); setTimeout(tick, 0); };
    setTimeout(tick, 30);
    $('skins').querySelectorAll('.sk').forEach((el) => el.addEventListener('click', () => { A.play('ui', 0.5); this.selSkin = el.dataset.s; $('skins').querySelectorAll('.sk').forEach((x) => x.classList.toggle('sel', x === el)); this.preview.setWeapon(this.aw, this.selSkin); this.preview.fit($('prevBox').clientWidth, $('prevBox').clientHeight); this.renderSkinInfo(); }));
  }
  renderSkinInfo() {
    const w = this.aw, s = this.selSkin, own = owns(w, s), eq = equipped(w) === s;
    $('armSkin').innerHTML = `<span style="color:${RARITY_COLORS[SKINS[s].rarity]}">${esc(skinName(s))} · ${t('r' + SKINS[s].rarity)}</span> · ${own ? t('owned') : t('locked')}`;
    const be = $('bEquip'); be.textContent = eq ? t('equipped') : t('equip'); be.disabled = !own || eq;
    be.onclick = () => { equip(w, s); A.play('uiok', 0.6); this.renderSkinInfo(); };
    const bl = $('bLoad'); const slot = WEAPONS[w].slot;
    if (slot === 3) bl.style.display = 'none'; else {
      bl.style.display = ''; const inL = (slot === 1 ? store.d.loadout.p : store.d.loadout.s) === w;
      bl.textContent = inL ? t('inLoadout') : t('useLoadout'); bl.disabled = inL;
      bl.onclick = () => { if (slot === 1) store.d.loadout.p = w; else store.d.loadout.s = w; save(); A.play('uiok', 0.6); this.renderSkinInfo(); };
    }
  }

  // ---------- кейсы ----------
  renderCases() {
    $('caseCoins').textContent = store.d.credits + ' ◈'; $('invCount').textContent = t('invCount') + ': ' + ownedCount() + ' / ' + (ALL_WEAPONS.length * (SKIN_IDS.length - 1));
    $('bOpen').disabled = store.d.credits < CASE_PRICE;
  }
  openCase() {
    if (store.d.credits < CASE_PRICE) return this.toast(t('notEnough'));
    addCredits(-CASE_PRICE);
    const win = rollCase(); grant(win);
    const p = this.preview, strip = $('strip'), N = 46, WIN = 38, CW = 160;
    const cards = [];
    for (let i = 0; i < N; i++) {
      let it = i === WIN ? win : rollCase();
      cards.push(it);
    }
    strip.innerHTML = cards.map((it) => `<div class="rc"><img alt="" src="${p.thumb(it.weapon, it.skin, 280, 140)}"><small style="color:${RARITY_COLORS[it.rarity]}">${esc(weaponName(it.weapon))} | ${esc(skinName(it.skin))}</small><i style="background:${RARITY_COLORS[it.rarity]}"></i></div>`).join('');
    $('reveal').className = ''; $('reveal').innerHTML = ''; $('bRevealOk').style.display = 'none';
    $('caseOpen').classList.add('on');
    strip.style.transition = 'none'; strip.style.transform = 'translateX(0)'; void strip.offsetWidth;
    const winEl = strip.children[WIN], half = $('roll').clientWidth / 2, target = -(winEl.offsetLeft + winEl.offsetWidth / 2 - half + (Math.random() - 0.5) * (winEl.offsetWidth * 0.6));
    strip.style.transition = 'transform 6s cubic-bezier(.08,.6,.08,1)'; strip.style.transform = `translateX(${target}px)`;
    let last = -1; const iv = setInterval(() => {
      const m = new DOMMatrix(getComputedStyle(strip).transform), idx = Math.floor((half - m.m41) / strip.children[0].offsetWidth);
      if (idx !== last) { last = idx; A.play('tick', 0.5); }
    }, 25);
    setTimeout(() => {
      clearInterval(iv);
      const col = RARITY_COLORS[win.rarity], r = $('reveal');
      r.style.setProperty('--rc', col);
      r.innerHTML = `<div class="hint">${t('youGot')}</div><img alt="" src="${p.thumb(win.weapon, win.skin, 560, 280)}"><h2>${esc(weaponName(win.weapon))} | ${esc(skinName(win.skin))}</h2><div style="color:${col};letter-spacing:.2em">${t('r' + win.rarity)}</div>`;
      r.className = 'on'; $('bRevealOk').style.display = ''; A.play(win.rarity >= 3 ? 'rare' : 'uiok', 1);
    }, 6300);
  }

  // ---------- настройки ----------
  async renderTop() {
    const box = $('topBody'); box.innerHTML = `<div class="hint">${t('loading')}</div>`;
    const r = await Y.getTop();
    if (!r) { box.innerHTML = `<div class="hint">${t('topOffline')}</div><div class="kv" style="margin-top:10px"><span>${t('kills')}</span><b>${store.d.stats.kills}</b></div><div class="kv"><span>${t('wins')}</span><b>${store.d.stats.wins}</b></div>`; return; }
    if (!r.entries.length) { box.innerHTML = `<div class="hint">${t('topEmpty')}</div>`; return; }
    box.innerHTML = r.entries.map((e) => `<div class="toprow ${e.rank === r.me ? 'me' : ''}"><b>#${e.rank}</b><span>${esc(e.name)}</span><i>${e.score}</i></div>`).join('');
  }

  renderSettings() {
    const s = store.d.settings;
    const sl = (id, label, min, max, step, val) => `<div><div class="kv"><span>${label}</span><b id="${id}V">${val}</b></div><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${val}" style="width:100%"></div>`;
    $('setBody').innerHTML = sl('sSens', t('sens'), 0.2, 3, 0.05, s.sens) + sl('sFov', t('fov'), 60, 110, 1, s.fov) + sl('sVol', t('volume'), 0, 1, 0.05, s.volume)
      + `<div><div class="kv"><span>${t('quality')}</span></div><select id="sQ" style="width:100%"><option value="low">${t('low')}</option><option value="mid">${t('mid')}</option><option value="high">${t('high')}</option></select></div>
         <div><div class="kv"><span>${t('lang')}</span></div><select id="sL" style="width:100%"><option value="ru">Русский</option><option value="en">English</option></select></div>
         <div><div class="kv"><span>${t('crosshair')}</span></div><input type="color" id="sC" value="${s.cross}" style="width:100%;height:36px"></div>
         <label class="row"><input type="checkbox" id="sA" ${s.ambient ? 'checked' : ''}> ${t('music')}</label>
         <label class="row"><input type="checkbox" id="sAuto" ${s.auto !== false ? 'checked' : ''}> ${t('sAuto')}</label>
         ${this.g.touch ? sl('sTS', t('sTouch'), 0.7, 1.5, 0.05, s.touchScale || 1) + `<label class="row"><input type="checkbox" id="sGy" ${s.gyro ? 'checked' : ''}> ${t('sGyro')}</label>` : ''}`;
    $('sQ').value = s.quality; $('sL').value = getLang();
    const bindR = (id, key, fmt) => $(id).addEventListener('input', (e) => { s[key] = +e.target.value; $(id + 'V').textContent = e.target.value; save(); fmt && fmt(); });
    bindR('sSens', 'sens'); bindR('sFov', 'fov'); bindR('sVol', 'volume', () => A.setVolume(s.volume));
    $('sQ').addEventListener('change', (e) => { s.quality = e.target.value; save(); this.g.resize(); });
    $('sL').addEventListener('change', (e) => { s.lang = e.target.value; setLang(s.lang); save(); this.renderTexts(); this.renderSettings(); });
    $('sC').addEventListener('input', (e) => { s.cross = e.target.value; save(); $('crosshair').style.setProperty('--cc', s.cross); });
    $('sAuto').addEventListener('change', (e) => { s.auto = e.target.checked; save(); });
    if ($('sTS')) { bindR('sTS', 'touchScale', () => this.g.applyTouchScale()); $('sGy').addEventListener('change', (e) => { s.gyro = e.target.checked; save(); this.g.enableGyro(s.gyro); }); }
    $('sA').addEventListener('change', (e) => { s.ambient = e.target.checked; save(); A.setAmbient(s.ambient); });
  }
}
