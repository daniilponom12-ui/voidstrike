import { initYandex, yandexLang, loadingReady } from './yandex.js';
import { loadStore, store } from './store.js';
import { setLang, detectLang } from './i18n.js';
import { Game } from './game.js';
import { UI } from './ui.js';

async function boot() {
  const ld = document.getElementById('loading'); ld.classList.add('on');
  await initYandex();
  await loadStore();
  setLang(store.d.settings.lang || detectLang(yandexLang()));
  store.d.settings.lang = store.d.settings.lang || (document.documentElement.lang);
  const game = new Game(document.getElementById('game'));
  const ui = new UI(game);
  window.__vs = { game, ui };
  ld.classList.remove('on');
  loadingReady();
}
boot().catch((e) => { console.error(e); document.getElementById('loadHint').textContent = 'Error: ' + e.message; });
