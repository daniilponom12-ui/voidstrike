// Адрес игрового сервера. Для Яндекс Игр нужен wss:// (HTTPS).
window.VOIDSTRIKE_CONFIG = {
  server: (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
    ? 'ws://localhost:8787'
    : 'wss://YOUR-SERVER-DOMAIN'
};
