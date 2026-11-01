// Обёртка над SDK Яндекс Игр. Без SDK (локальный запуск) все методы безопасно ничего не делают.
let ysdk = null, player = null;

export async function initYandex() {
  try {
    if (window.YaGames) ysdk = await window.YaGames.init();
  } catch (e) { console.warn('YSDK init failed', e); ysdk = null; }
  return !!ysdk;
}
export const hasYandex = () => !!ysdk;
export const yandexLang = () => (ysdk && ysdk.environment && ysdk.environment.i18n && ysdk.environment.i18n.lang) || null;
export const loadingReady = () => { try { ysdk && ysdk.features && ysdk.features.LoadingAPI && ysdk.features.LoadingAPI.ready(); } catch (e) {} };
export const gameplayStart = () => { try { ysdk && ysdk.features && ysdk.features.GameplayAPI && ysdk.features.GameplayAPI.start(); } catch (e) {} };
export const gameplayStop = () => { try { ysdk && ysdk.features && ysdk.features.GameplayAPI && ysdk.features.GameplayAPI.stop(); } catch (e) {} };

export async function loadCloud() {
  if (!ysdk) return { data: null, name: null };
  try {
    player = await ysdk.getPlayer({ scopes: false });
    const data = await player.getData();
    const name = player.getName && player.getName();
    return { data, name: name || null };
  } catch (e) { return { data: null, name: null }; }
}
export async function saveCloud(data) {
  if (!ysdk || !player) return;
  try { await player.setData(data, false); } catch (e) {}
}
export function submitScore(kills) {
  if (!ysdk) return;
  try { ysdk.getLeaderboards().then((lb) => lb.setLeaderboardScore('kills', kills)).catch(() => {}); } catch (e) {}
}

/** Межстраничная реклама. cb вызывается после закрытия/ошибки. */
export function showInterstitial(hooks = {}) {
  if (!ysdk) return hooks.onClose && hooks.onClose(false);
  try {
    ysdk.adv.showFullscreenAdv({
      callbacks: {
        onOpen: () => hooks.onOpen && hooks.onOpen(),
        onClose: (shown) => hooks.onClose && hooks.onClose(shown),
        onError: () => hooks.onClose && hooks.onClose(false),
      },
    });
  } catch (e) { hooks.onClose && hooks.onClose(false); }
}
/** Реклама с наградой. */
export function showRewarded(hooks = {}) {
  if (!ysdk) { // локальная отладка: награда сразу
    hooks.onRewarded && hooks.onRewarded(); hooks.onClose && hooks.onClose(); return;
  }
  try {
    ysdk.adv.showRewardedVideo({
      callbacks: {
        onOpen: () => hooks.onOpen && hooks.onOpen(),
        onRewarded: () => hooks.onRewarded && hooks.onRewarded(),
        onClose: () => hooks.onClose && hooks.onClose(),
        onError: () => hooks.onClose && hooks.onClose(),
      },
    });
  } catch (e) { hooks.onClose && hooks.onClose(); }
}

/** Топ-10 по убийствам. Возвращает {entries:[{rank,score,name}], me} или null вне Яндекс Игр. */
export async function getTop() {
  if (!ysdk) return null;
  try {
    const lb = await ysdk.getLeaderboards();
    const r = await lb.getLeaderboardEntries('kills', { quantityTop: 10, includeUser: true, quantityAround: 2 });
    const entries = (r.entries || []).map((e) => ({ rank: e.rank, score: e.score, name: (e.player && e.player.publicName) || '—' }));
    return { entries, me: r.userRank || 0 };
  } catch (e) { return { entries: [], me: 0, error: true }; }
}
