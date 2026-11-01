// Локализация RU/EN. Ключ -> [ru, en]
const S = {
  title: ['VOID STRIKE', 'VOID STRIKE'],
  tagline: ['Космический тактический шутер', 'Tactical space shooter'],
  play: ['ИГРАТЬ', 'PLAY'], armory: ['АРСЕНАЛ', 'ARMORY'], cases: ['КЕЙСЫ', 'CASES'], settings: ['НАСТРОЙКИ', 'SETTINGS'], topBtn: ['ТОП', 'TOP'],
  back: ['НАЗАД', 'BACK'], start: ['В БОЙ', 'DEPLOY'], credits: ['Кредиты', 'Credits'], level: ['Ур.', 'Lv.'],
  online: ['Онлайн', 'Online'], offline: ['С ботами', 'Vs bots'], roomCode: ['Код комнаты (необязательно)', 'Room code (optional)'],
  difficulty: ['Сложность ботов', 'Bot difficulty'], easy: ['Новичок', 'Rookie'], normal: ['Обычная', 'Normal'], hard: ['Элита', 'Elite'],
  mode_dm: ['Все против всех', 'Deathmatch'], mode_tdm: ['Командный бой', 'Team Deathmatch'],
  mode_gg: ['Гонка вооружений', 'Arms Race'], mode_bomb: ['Заминирование', 'Demolition'],
  desc_dm: ['Каждый сам за себя. До 25 убийств.', 'Free for all. First to 25 kills.'],
  desc_tdm: ['Две команды, до 35 убийств.', 'Two teams, first to 35 kills.'],
  desc_gg: ['Убивай — оружие меняется. Победа за убийство клинком.', 'Every kill upgrades your weapon. Win with a blade kill.'],
  desc_bomb: ['Раунды без возрождения. Закладывай или обезвреживай заряд на точках A и B.', 'No respawns. Plant or defuse the charge at sites A and B.'],
  connecting: ['Подключение к серверу…', 'Connecting to server…'],
  connFail: ['Сервер недоступен. Играем с ботами?', 'Server unavailable. Play vs bots instead?'],
  disconnected: ['Соединение потеряно', 'Connection lost'],
  loadout: ['Снаряжение', 'Loadout'], primary: ['Основное', 'Primary'], secondary: ['Пистолет', 'Sidearm'], melee: ['Клинок', 'Melee'],
  equip: ['НАДЕТЬ', 'EQUIP'], equipped: ['НАДЕТО', 'EQUIPPED'], useLoadout: ['В СНАРЯЖЕНИЕ', 'ADD TO LOADOUT'], inLoadout: ['В СНАРЯЖЕНИИ', 'IN LOADOUT'],
  locked: ['Нет в наличии', 'Not owned'], owned: ['В наличии', 'Owned'],
  r0: ['Обычный', 'Common'], r1: ['Необычный', 'Uncommon'], r2: ['Редкий', 'Rare'], r3: ['Эпический', 'Epic'], r4: ['Легендарный', 'Legendary'], r5: ['Мифический', 'Mythic'],
  caseName: ['Космический кейс', 'Space Case'], caseDesc: ['Случайный скин для случайного оружия', 'A random skin for a random weapon'],
  open: ['ОТКРЫТЬ', 'OPEN'], notEnough: ['Недостаточно кредитов', 'Not enough credits'], adReward: ['+300 за рекламу', '+300 for an ad'],
  youGot: ['Вы получили', 'You got'], ok: ['ОТЛИЧНО', 'NICE'],
  sens: ['Чувствительность', 'Sensitivity'], fov: ['Поле зрения', 'Field of view'], volume: ['Громкость', 'Volume'], music: ['Фоновый гул', 'Ambience'],
  quality: ['Качество графики', 'Graphics quality'], low: ['Низкое', 'Low'], mid: ['Среднее', 'Medium'], high: ['Высокое', 'High'], lang: ['Язык', 'Language'],
  crosshair: ['Цвет прицела', 'Crosshair color'], name: ['Позывной', 'Callsign'],
  resume: ['ПРОДОЛЖИТЬ', 'RESUME'], leave: ['ПОКИНУТЬ МАТЧ', 'LEAVE MATCH'], pause: ['ПАУЗА', 'PAUSED'],
  clickToPlay: ['Нажмите, чтобы вернуться в бой', 'Click to return to the fight'],
  killedBy: ['Вас убил', 'Killed by'], respawnIn: ['Возрождение через', 'Respawning in'], spectating: ['Наблюдение', 'Spectating'],
  waitRound: ['Ждите следующего раунда', 'Wait for the next round'],
  freeze: ['ПОДГОТОВКА', 'FREEZE TIME'], round: ['Раунд', 'Round'],
  planted: ['ЗАРЯД УСТАНОВЛЕН', 'CHARGE PLANTED'], defused: ['ЗАРЯД ОБЕЗВРЕЖЕН', 'CHARGE DEFUSED'], exploded: ['ВЗРЫВ', 'DETONATED'],
  planting: ['Установка заряда…', 'Planting charge…'], defusing: ['Обезвреживание…', 'Defusing…'],
  pressE: ['Удерживайте E: установить заряд', 'Hold E to plant the charge'], pressEd: ['Удерживайте E: обезвредить', 'Hold E to defuse'],
  attackers: ['Рейдеры', 'Raiders'], defenders: ['Охрана', 'Guards'], teamA: ['Оранжевые', 'Orange'], teamB: ['Синие', 'Blue'],
  win: ['ПОБЕДА', 'VICTORY'], lose: ['ПОРАЖЕНИЕ', 'DEFEAT'], draw: ['НИЧЬЯ', 'DRAW'],
  roundWin: ['Раунд выигран', 'Round won'], roundLose: ['Раунд проигран', 'Round lost'],
  r_elim: ['Все противники уничтожены', 'All enemies eliminated'], r_time: ['Время вышло', 'Time ran out'], r_explode: ['Заряд сработал', 'Charge detonated'], r_defuse: ['Заряд обезврежен', 'Charge defused'],
  matchOver: ['МАТЧ ЗАВЕРШЁН', 'MATCH OVER'], reward: ['Награда', 'Reward'], kills: ['Убийства', 'Kills'], deaths: ['Смерти', 'Deaths'],
  playAgain: ['ЕЩЁ РАЗ', 'AGAIN'], toMenu: ['В МЕНЮ', 'MENU'], doubleAd: ['x2 ЗА РЕКЛАМУ', 'x2 FOR AN AD'],
  reloading: ['ПЕРЕЗАРЯДКА', 'RELOADING'], noAmmo: ['НЕТ ПАТРОНОВ', 'NO AMMO'],
  headshot: ['В голову', 'Headshot'], bot: ['бот', 'bot'], you: ['вы', 'you'],
  controls: ['WASD — движение · ЛКМ — огонь · ПКМ — прицел · R — перезарядка · 1/2/3 — оружие · F — осмотр · Ctrl — присесть · 4/5/6 — гранаты · Tab — таблица · E — заряд', 'WASD move · LMB fire · RMB aim · R reload · 1/2/3 weapons · F inspect · Ctrl crouch · 4/5/6 grenades · Tab scoreboard · E charge'],
  stats: ['Статистика', 'Stats'], matches: ['Матчи', 'Matches'], wins: ['Победы', 'Wins'],
  invCount: ['Предметов', 'Items'], rotate: ['Перетащите для вращения', 'Drag to rotate'],
  loading: ['Загрузка…', 'Loading…'], tapToStart: ['Нажмите, чтобы начать', 'Tap to start'],
  weaponname_pulsar: ['Пульсар P9', 'Pulsar P9'], weaponname_hawk: ['Ястреб X', 'Hawk X'], weaponname_vortex: ['Вихрь SMG', 'Vortex SMG'],
  weaponname_nova: ['Нова AR-7', 'Nova AR-7'], weaponname_scatter: ['Рассеиватель', 'Scatter'], weaponname_zenith: ['Зенит (рейлган)', 'Zenith Railgun'], weaponname_phantom: ['Клинок Фантом', 'Phantom Blade'], weaponname_titan: ['Титан LMG', 'Titan LMG'], weaponname_sting: ['Жало', 'Sting'],
  map_arena: ['Арена Гелиос', 'Helios Arena'], desc_arena: ['Компактная арена: центр с платформой, быстрые бои. Хороша для дезматча.', 'Compact arena with a central platform. Great for deathmatch.'],
  dmg: ['Урон', 'Damage'], rate: ['Темп', 'Rate'], mag: ['Магазин', 'Magazine'], rng: ['Дальность', 'Range'],
  server_hint: ['Для онлайна нужен запущенный сервер (см. README).', 'Online needs a running server (see README).'],
  players: ['Игроков', 'Players'], ping: ['Пинг', 'Ping'], team: ['Команда', 'Team'], score: ['Счёт', 'Score'],
  buyHint: ['B — магазин', 'B — shop'], buyTitle: ['МАГАЗИН', 'BUY MENU'], buyKeys: ['Клавиши 1–9 и 0 покупают. B — закрыть.', 'Keys 1–9 and 0 to buy. B to close.'], swapSides: ['СМЕНА СТОРОН', 'SIDES SWAPPED'],
  autoLow: ['Графика снижена для плавной игры', 'Graphics lowered for smoother play'],
  top: ['ТОП ИГРОКОВ', 'LEADERBOARD'], topOffline: ['Таблица лидеров доступна в версии на Яндекс Играх. Ваш личный результат:', 'The leaderboard is available in the Yandex Games build. Your personal best:'], topEmpty: ['Пока никого нет. Станьте первым!', 'Nobody yet. Be the first!'], topYou: ['Вы', 'You'],
  tutT: ['КАК ИГРАТЬ', 'HOW TO PLAY'], tutH: ['Нажмите Enter или кликните, чтобы закрыть', 'Press Enter or click to close'],
  tut1: ['WASD + мышь', 'WASD + mouse'], tut1d: ['движение и обзор, пробел — прыжок, Ctrl — присесть', 'move and look, Space to jump, Ctrl to crouch'],
  tut2: ['ЛКМ / ПКМ', 'LMB / RMB'], tut2d: ['огонь / прицел (у клинка — сильный удар)', 'fire / aim (strong strike with the blade)'],
  tut3: ['1 2 3 · R', '1 2 3 · R'], tut3d: ['смена оружия, R — перезарядка', 'switch weapons, R to reload'],
  tut4: ['4 · 5 · 6', '4 · 5 · 6'], tut4d: ['осколочная, светошумовая, дымовая гранаты', 'frag, flash and smoke grenades'],
  tut5: ['B · E', 'B · E'], tut5d: ['магазин в раундовом режиме; E — заложить или обезвредить заряд на точке A/B', 'buy menu in round mode; hold E to plant or defuse at sites A/B'],
  sTouch: ['Размер кнопок на экране', 'On-screen button size'], sGyro: ['Гироскоп (наклон телефона — прицел)', 'Gyroscope aiming'], sAuto: ['Автоматически снижать графику при тормозах', 'Auto-lower graphics when laggy'],
  hostBots: ['Боты', 'Bots'],
  weaponname_frag: ['Осколочная', 'Frag grenade'], weaponname_flash: ['Светошумовая', 'Flashbang'], weaponname_smoke: ['Дымовая', 'Smoke grenade'],
  map_helios: ['Колония Дюна', 'Dune Colony'], map_crater: ['Рудник Кратер', 'Crater Mine'], mapLabel: ['Карта', 'Map'],
  desc_helios: ['Три линии: длинный коридор, центр и туннели. Плаза посередине, площадки A и B на севере.', 'Three lanes: long corridor, mid and tunnels. Central plaza, sites A and B in the north.'],
  desc_crater: ['Городские кварталы: узкие улицы, крыша на лестницах, дворы A и B за арками.', 'City blocks: narrow streets, a rooftop on stairs, courtyards A and B behind arches.'],
};
export const SKIN_NAMES = {
  stock: ['Заводской', 'Factory'], hazard: ['Опасная зона', 'Hazard'], asteroid: ['Астероид', 'Asteroid'], carbon: ['Карбон', 'Carbon'],
  circuit: ['Микросхема', 'Circuit'], ice: ['Ледяной кристалл', 'Ice Crystal'], voidcamo: ['Камуфляж Пустоты', 'Void Camo'], hexgrid: ['Гекс-сетка', 'Hex Grid'],
  scales: ['Чешуя ксено', 'Xeno Scales'], solar: ['Солнечная вспышка', 'Solar Flare'], aurora: ['Аврора', 'Aurora'], nebula: ['Туманность', 'Nebula'],
  plasma: ['Плазменные вены', 'Plasma Veins'], bloodmoon: ['Кровавая луна', 'Blood Moon'], chrome: ['Зеркальный хром', 'Mirror Chrome'], gold: ['Золото квазара', 'Quasar Gold'], toxic: ['Токсин', 'Toxic'], lava: ['Лавовый поток', 'Lava Flow'], galaxy: ['Галактика', 'Galaxy'], holo: ['Голограмма', 'Hologram'],
};

let L = 0;
export const RANKS = [['Кадет','Cadet'],['Пилот','Pilot'],['Штурман','Navigator'],['Лейтенант','Lieutenant'],['Капитан','Captain'],['Майор','Major'],['Полковник','Colonel'],['Командор','Commodore'],['Адмирал','Admiral'],['Легенда Пустоты','Void Legend']];
export function rankName(lv) { return RANKS[Math.min(RANKS.length - 1, Math.floor((lv - 1) / 4))][L]; }
export function setLang(l) { L = l === 'en' ? 1 : 0; document.documentElement.lang = L ? 'en' : 'ru'; }
export function getLang() { return L ? 'en' : 'ru'; }
export function detectLang(code) {
  const c = String(code || navigator.language || 'ru').toLowerCase().slice(0, 2);
  return ['ru', 'be', 'kk', 'uk', 'uz', 'ky', 'hy', 'az', 'tg', 'tk'].includes(c) ? 'ru' : 'en';
}
export function t(k) { const v = S[k]; return v ? v[L] : k; }
export function skinName(id) { const v = SKIN_NAMES[id]; return v ? v[L] : id; }
export function weaponName(id) { return t('weaponname_' + id); }
