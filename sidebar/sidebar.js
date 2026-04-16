'use strict';

// ===== デフォルトデータ =====
const DEFAULT_APPS = [
  {
    id: 'spreadsheet', name: 'スプシ', emoji: '📊', isDefault: true,
    shortcuts: [
      { id: 's1',  action: '保存',              key: 'Ctrl+S' },
      { id: 's2',  action: '元に戻す',           key: 'Ctrl+Z' },
      { id: 's3',  action: 'やり直す',           key: 'Ctrl+Y' },
      { id: 's4',  action: 'コピー',             key: 'Ctrl+C' },
      { id: 's5',  action: '貼り付け',           key: 'Ctrl+V' },
      { id: 's6',  action: '切り取り',           key: 'Ctrl+X' },
      { id: 's7',  action: '全選択',             key: 'Ctrl+A' },
      { id: 's8',  action: '検索',               key: 'Ctrl+F' },
      { id: 's9',  action: '検索と置換',         key: 'Ctrl+H' },
      { id: 's10', action: '太字',               key: 'Ctrl+B' },
      { id: 's11', action: '斜体',               key: 'Ctrl+I' },
      { id: 's12', action: '下線',               key: 'Ctrl+U' },
      { id: 's13', action: '行を削除',           key: 'Ctrl+Alt+−' },
      { id: 's14', action: '行を挿入',           key: 'Ctrl+Alt+=' },
      { id: 's15', action: '新しいシートを挿入', key: 'Shift+F11' },
      { id: 's16', action: 'コメントを挿入',     key: 'Ctrl+Alt+M' },
      { id: 's17', action: 'セルの書式設定',     key: 'Ctrl+1' },
      { id: 's18', action: '印刷',               key: 'Ctrl+P' },
    ],
  },
  {
    id: 'docs', name: 'ドキュメント', emoji: '📄', isDefault: true,
    shortcuts: [
      { id: 'd1',  action: '保存',            key: 'Ctrl+S' },
      { id: 'd2',  action: '元に戻す',         key: 'Ctrl+Z' },
      { id: 'd3',  action: 'やり直す',         key: 'Ctrl+Y' },
      { id: 'd4',  action: 'コピー',           key: 'Ctrl+C' },
      { id: 'd5',  action: '貼り付け',         key: 'Ctrl+V' },
      { id: 'd6',  action: '切り取り',         key: 'Ctrl+X' },
      { id: 'd7',  action: '全選択',           key: 'Ctrl+A' },
      { id: 'd8',  action: '検索',             key: 'Ctrl+F' },
      { id: 'd9',  action: '検索と置換',       key: 'Ctrl+H' },
      { id: 'd10', action: '太字',             key: 'Ctrl+B' },
      { id: 'd11', action: '斜体',             key: 'Ctrl+I' },
      { id: 'd12', action: '下線',             key: 'Ctrl+U' },
      { id: 'd13', action: '取り消し線',       key: 'Alt+Shift+5' },
      { id: 'd14', action: '見出し1',          key: 'Ctrl+Alt+1' },
      { id: 'd15', action: '見出し2',          key: 'Ctrl+Alt+2' },
      { id: 'd16', action: '見出し3',          key: 'Ctrl+Alt+3' },
      { id: 'd17', action: '標準テキスト',     key: 'Ctrl+Alt+0' },
      { id: 'd18', action: '印刷',             key: 'Ctrl+P' },
      { id: 'd19', action: 'コメントを挿入',   key: 'Ctrl+Alt+M' },
      { id: 'd20', action: 'リンクを挿入',     key: 'Ctrl+K' },
    ],
  },
  {
    id: 'slides', name: 'スライド', emoji: '📽️', isDefault: true,
    shortcuts: [
      { id: 'sl1',  action: '保存',                     key: 'Ctrl+S' },
      { id: 'sl2',  action: '元に戻す',                 key: 'Ctrl+Z' },
      { id: 'sl3',  action: 'やり直す',                 key: 'Ctrl+Y' },
      { id: 'sl4',  action: '新しいスライドを追加',     key: 'Ctrl+M' },
      { id: 'sl5',  action: 'スライドを複製',           key: 'Ctrl+D' },
      { id: 'sl6',  action: 'プレゼンテーションを開始', key: 'Ctrl+F5' },
      { id: 'sl7',  action: '太字',                     key: 'Ctrl+B' },
      { id: 'sl8',  action: '斜体',                     key: 'Ctrl+I' },
      { id: 'sl9',  action: '下線',                     key: 'Ctrl+U' },
      { id: 'sl10', action: '中央揃え',                 key: 'Ctrl+Shift+E' },
      { id: 'sl11', action: '左揃え',                   key: 'Ctrl+Shift+L' },
      { id: 'sl12', action: '右揃え',                   key: 'Ctrl+Shift+R' },
      { id: 'sl13', action: 'スライドを削除',           key: 'Delete' },
      { id: 'sl14', action: '印刷',                     key: 'Ctrl+P' },
      { id: 'sl15', action: 'コメントを挿入',           key: 'Ctrl+Alt+M' },
    ],
  },
  {
    id: 'gmail', name: 'Gmail', emoji: '✉️', isDefault: true,
    shortcuts: [
      { id: 'g1',  action: '新規作成',       key: 'C' },
      { id: 'g2',  action: '返信',           key: 'R' },
      { id: 'g3',  action: '全員に返信',     key: 'A' },
      { id: 'g4',  action: '転送',           key: 'F' },
      { id: 'g5',  action: '送信',           key: 'Ctrl+Enter' },
      { id: 'g6',  action: 'アーカイブ',     key: 'E' },
      { id: 'g7',  action: '削除',           key: '#' },
      { id: 'g8',  action: '既読にする',     key: 'Shift+I' },
      { id: 'g9',  action: '未読にする',     key: 'Shift+U' },
      { id: 'g10', action: '検索',           key: '/' },
      { id: 'g11', action: '受信トレイへ',   key: 'G→I' },
      { id: 'g12', action: '次のメール',     key: 'J' },
      { id: 'g13', action: '前のメール',     key: 'K' },
      { id: 'g14', action: 'スターを付ける', key: 'S' },
      { id: 'g15', action: 'スヌーズ',       key: 'B' },
    ],
  },
  {
    id: 'calendar', name: 'カレンダー', emoji: '📅', isDefault: true,
    shortcuts: [
      { id: 'c1',  action: '新しいイベントを作成', key: 'C' },
      { id: 'c2',  action: '日表示',               key: 'D' },
      { id: 'c3',  action: '週表示',               key: 'W' },
      { id: 'c4',  action: '月表示',               key: 'M' },
      { id: 'c5',  action: 'スケジュール表示',      key: 'A' },
      { id: 'c6',  action: '今日へ移動',            key: 'T' },
      { id: 'c7',  action: '次の期間へ',            key: 'N' },
      { id: 'c8',  action: '前の期間へ',            key: 'P' },
      { id: 'c9',  action: '検索',                  key: '/' },
      { id: 'c10', action: '削除',                  key: 'Delete' },
      { id: 'c11', action: '元に戻す',              key: 'Ctrl+Z' },
    ],
  },
  {
    id: 'web', name: 'Web検索', emoji: '🌐', isDefault: true,
    shortcuts: [
      { id: 'w1',  action: '新しいタブを開く',     key: 'Ctrl+T' },
      { id: 'w2',  action: 'タブを閉じる',         key: 'Ctrl+W' },
      { id: 'w3',  action: 'タブを再度開く',       key: 'Ctrl+Shift+T' },
      { id: 'w4',  action: '次のタブ',             key: 'Ctrl+Tab' },
      { id: 'w5',  action: '前のタブ',             key: 'Ctrl+Shift+Tab' },
      { id: 'w6',  action: 'アドレスバーへ',       key: 'Ctrl+L' },
      { id: 'w7',  action: '検索バーへフォーカス', key: '/' },
      { id: 'w8',  action: 'ページ内検索',         key: 'Ctrl+F' },
      { id: 'w9',  action: '戻る',                 key: 'Alt+←' },
      { id: 'w10', action: '進む',                 key: 'Alt+→' },
      { id: 'w11', action: 'ページを更新',         key: 'F5' },
      { id: 'w12', action: 'ページの先頭へ',       key: 'Ctrl+Home' },
      { id: 'w13', action: 'ページの末尾へ',       key: 'Ctrl+End' },
      { id: 'w14', action: 'ズームイン',           key: 'Ctrl++' },
      { id: 'w15', action: 'ズームアウト',         key: 'Ctrl+−' },
      { id: 'w16', action: 'ズームをリセット',     key: 'Ctrl+0' },
    ],
  },
];

// ===== 状態管理 =====
const STORAGE_KEY = 'shortcutHelperData';
let apps = [];
let activeAppId = null;
let editingShortcutId = null;
let deletingAppId = null;

// ===== ストレージ =====
const loadData = () => new Promise(r => chrome.storage.sync.get(STORAGE_KEY, res => r(res[STORAGE_KEY] || null)));
const saveData = () => new Promise(r => chrome.storage.sync.set({ [STORAGE_KEY]: apps }, r));

// ===== ユーティリティ =====
const generateId = () => `id_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
const escapeHtml = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function renderKeyBadges(key) {
  return key.split('+').map((p, i, a) =>
    `<span class="key-badge">${escapeHtml(p.trim())}</span>` +
    (i < a.length - 1 ? `<span class="key-separator">+</span>` : '')
  ).join('');
}

// ===== タブの描画 =====
function renderTabs() {
  const list = document.getElementById('tabsList');
  list.innerHTML = apps.map(app => `
    <div class="tab-item${app.id === activeAppId ? ' active' : ''}" data-id="${app.id}">
      <span class="tab-emoji">${app.emoji}</span>
      <span class="tab-name">${escapeHtml(app.name)}</span>
      ${!app.isDefault
        ? `<button class="tab-delete" data-id="${app.id}" title="${escapeHtml(app.name)}を削除">✕</button>`
        : ''}
    </div>
  `).join('');

  list.querySelectorAll('.tab-item').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.classList.contains('tab-delete')) return;
      setActiveApp(el.dataset.id);
    });
  });
  list.querySelectorAll('.tab-delete').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openDeleteTabModal(btn.dataset.id);
    });
  });
}

// ===== アクティブアプリ切替 =====
function setActiveApp(id) {
  activeAppId = id;
  renderTabs();
  renderShortcuts();
}

// ===== ショートカットリストの描画 =====
function renderShortcuts() {
  const app = apps.find(a => a.id === activeAppId);
  if (!app) return;

  document.getElementById('shortcutsCount').textContent = `${app.shortcuts.length} 件`;
  const list = document.getElementById('shortcutsList');

  if (app.shortcuts.length === 0) {
    list.innerHTML = `
      <li class="shortcuts-empty">
        <div>ショートカットがありません</div>
        <p>「＋ 追加」から登録できます</p>
      </li>`;
    return;
  }

  list.innerHTML = app.shortcuts.map(sc => `
    <li class="shortcut-item" data-id="${sc.id}">
      <span class="shortcut-action">${escapeHtml(sc.action)}</span>
      <span class="shortcut-key">${renderKeyBadges(sc.key)}</span>
      <div class="shortcut-actions">
        <button class="shortcut-edit-btn"   data-id="${sc.id}" title="編集">✏️</button>
        <button class="shortcut-delete-btn" data-id="${sc.id}" title="削除">🗑</button>
      </div>
    </li>
  `).join('');

  list.querySelectorAll('.shortcut-edit-btn').forEach(btn => {
    btn.addEventListener('click', () => openEditShortcutModal(btn.dataset.id));
  });
  list.querySelectorAll('.shortcut-delete-btn').forEach(btn => {
    btn.addEventListener('click', () => deleteShortcut(btn.dataset.id));
  });
}

// ===== 検索 =====
function handleSearch(query) {
  const resultsPanel = document.getElementById('searchResultsPanel');
  const resultsList  = document.getElementById('searchResultsList');
  const clearBtn     = document.getElementById('searchClear');
  const q = query.trim().toLowerCase();

  clearBtn.classList.toggle('visible', q.length > 0);

  if (!q) {
    resultsPanel.style.display = 'none';
    return;
  }

  resultsPanel.style.display = 'block';
  let total = 0;
  const html = apps.map(app => {
    const matched = app.shortcuts.filter(s =>
      s.action.toLowerCase().includes(q) || s.key.toLowerCase().includes(q)
    );
    if (!matched.length) return '';
    total += matched.length;
    return `
      <div>
        <div class="search-group-title"><span>${app.emoji}</span><span>${escapeHtml(app.name)}</span></div>
        ${matched.map(sc => `
          <li class="shortcut-item" style="list-style:none;">
            <span class="shortcut-action">${escapeHtml(sc.action)}</span>
            <span class="shortcut-key">${renderKeyBadges(sc.key)}</span>
          </li>
        `).join('')}
      </div>`;
  }).join('');

  resultsList.innerHTML = total === 0
    ? `<div class="search-empty">「${escapeHtml(query)}」に一致するショートカットが見つかりません</div>`
    : html;
}

// ===== モーダル：アプリ追加 =====
function openAddTabModal() {
  document.getElementById('newAppName').value  = '';
  document.getElementById('newAppEmoji').value = '';
  document.getElementById('addTabModal').style.display = 'flex';
  document.getElementById('newAppName').focus();
}
function closeAddTabModal() { document.getElementById('addTabModal').style.display = 'none'; }
async function confirmAddTab() {
  const name  = document.getElementById('newAppName').value.trim();
  const emoji = document.getElementById('newAppEmoji').value.trim() || '📌';
  if (!name) { document.getElementById('newAppName').focus(); return; }
  const newApp = { id: generateId(), name, emoji, isDefault: false, shortcuts: [] };
  apps.push(newApp);
  await saveData();
  closeAddTabModal();
  setActiveApp(newApp.id);
}

// ===== モーダル：アプリ削除 =====
function openDeleteTabModal(appId) {
  const app = apps.find(a => a.id === appId);
  if (!app) return;
  deletingAppId = appId;
  document.getElementById('deleteTabMessage').textContent =
    `「${app.name}」とその全ショートカットを削除します。この操作は取り消せません。`;
  document.getElementById('deleteTabModal').style.display = 'flex';
}
function closeDeleteTabModal() {
  document.getElementById('deleteTabModal').style.display = 'none';
  deletingAppId = null;
}
async function confirmDeleteTab() {
  if (!deletingAppId) return;
  apps = apps.filter(a => a.id !== deletingAppId);
  await saveData();
  closeDeleteTabModal();
  if (activeAppId === deletingAppId) {
    activeAppId = apps[0]?.id ?? null;
  }
  renderTabs();
  renderShortcuts();
}

// ===== モーダル：ショートカット追加/編集 =====
function openAddShortcutModal() {
  editingShortcutId = null;
  document.getElementById('shortcutModalTitle').textContent = 'ショートカットを追加';
  document.getElementById('newAction').value = '';
  document.getElementById('newKey').value    = '';
  document.getElementById('addShortcutModal').style.display = 'flex';
  document.getElementById('newAction').focus();
}
function openEditShortcutModal(scId) {
  const app = apps.find(a => a.id === activeAppId);
  const sc  = app?.shortcuts.find(s => s.id === scId);
  if (!sc) return;
  editingShortcutId = scId;
  document.getElementById('shortcutModalTitle').textContent = 'ショートカットを編集';
  document.getElementById('newAction').value = sc.action;
  document.getElementById('newKey').value    = sc.key;
  document.getElementById('addShortcutModal').style.display = 'flex';
  document.getElementById('newAction').focus();
}
function closeAddShortcutModal() {
  document.getElementById('addShortcutModal').style.display = 'none';
  editingShortcutId = null;
}
async function confirmAddShortcut() {
  const action = document.getElementById('newAction').value.trim();
  const key    = document.getElementById('newKey').value.trim();
  if (!action) { document.getElementById('newAction').focus(); return; }
  if (!key)    { document.getElementById('newKey').focus();    return; }
  const app = apps.find(a => a.id === activeAppId);
  if (!app) return;
  if (editingShortcutId) {
    const sc = app.shortcuts.find(s => s.id === editingShortcutId);
    if (sc) { sc.action = action; sc.key = key; }
  } else {
    app.shortcuts.push({ id: generateId(), action, key });
  }
  await saveData();
  closeAddShortcutModal();
  renderShortcuts();
}
async function deleteShortcut(scId) {
  const app = apps.find(a => a.id === activeAppId);
  if (!app) return;
  app.shortcuts = app.shortcuts.filter(s => s.id !== scId);
  await saveData();
  renderShortcuts();
}

// ===== キーボード（Escape / Enter） =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeAddTabModal();
    closeAddShortcutModal();
    closeDeleteTabModal();
  }
  if (e.key === 'Enter') {
    if (document.getElementById('addTabModal').style.display      === 'flex') { e.preventDefault(); confirmAddTab(); }
    if (document.getElementById('addShortcutModal').style.display === 'flex') { e.preventDefault(); confirmAddShortcut(); }
  }
});

// ===== モーダルオーバーレイクリックで閉じる =====
['addTabModal', 'addShortcutModal', 'deleteTabModal'].forEach(id => {
  document.getElementById(id).addEventListener('click', e => {
    if (e.target.id === id) {
      closeAddTabModal();
      closeAddShortcutModal();
      closeDeleteTabModal();
    }
  });
});

// ===== イベントリスナー登録 =====
function bindEvents() {
  document.getElementById('searchInput').addEventListener('input', e => handleSearch(e.target.value));
  document.getElementById('searchClear').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    handleSearch('');
    document.getElementById('searchInput').focus();
  });
  document.getElementById('addTabBtn').addEventListener('click', openAddTabModal);
  document.getElementById('closeAddTabModal').addEventListener('click', closeAddTabModal);
  document.getElementById('cancelAddTab').addEventListener('click', closeAddTabModal);
  document.getElementById('confirmAddTab').addEventListener('click', confirmAddTab);
  document.getElementById('addShortcutBtn').addEventListener('click', openAddShortcutModal);
  document.getElementById('closeAddShortcutModal').addEventListener('click', closeAddShortcutModal);
  document.getElementById('cancelAddShortcut').addEventListener('click', closeAddShortcutModal);
  document.getElementById('confirmAddShortcut').addEventListener('click', confirmAddShortcut);
  document.getElementById('closeDeleteTabModal').addEventListener('click', closeDeleteTabModal);
  document.getElementById('cancelDeleteTab').addEventListener('click', closeDeleteTabModal);
  document.getElementById('confirmDeleteTab').addEventListener('click', confirmDeleteTab);
}

// ===== 初期化 =====
async function init() {
  const stored = await loadData();
  apps = (stored && Array.isArray(stored) && stored.length > 0)
    ? stored
    : JSON.parse(JSON.stringify(DEFAULT_APPS));
  if (!stored) await saveData();
  activeAppId = apps[0]?.id ?? null;
  bindEvents();
  renderTabs();
  renderShortcuts();
}

init();
