import { gamesList as jsListFallback } from "../data/javascript/games.js";
import { loadJson } from "../utils/helpers.js";

// Inject games view CSS if not already present
function injectGamesCSS() {
  if (document.getElementById("games-view-style")) return;
  const style = document.createElement("style");
  style.id = "games-view-style";
  style.textContent = `
    .games-view {
      padding: 20px;
      background: #23272f;
      border-radius: 10px;
      min-height: 400px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,0.15);
    }
    .games-tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
    .games-tab {
      padding: 10px 24px;
      background: #2d323e;
      border: none;
      border-radius: 6px 6px 0 0;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      outline: none;
    }
    .games-tab.active, .games-tab:hover {
      background: var(--accent-color, #007acc);
      color: #fff;
    }
    .games-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-top: 10px;
    }
    .game-item {
      background: #292d36;
      border-radius: 8px;
      padding: 18px 14px;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .game-item:hover {
      box-shadow: 0 4px 16px 0 rgba(0,122,204,0.15);
      transform: translateY(-2px) scale(1.03);
    }
    .game-item a {
      font-size: 1.1rem;
      font-weight: 600;
      color: #00bfff;
      margin-bottom: 4px;
    }
    .game-item a:hover {
      color: #fff;
    }
    .game-item .game-type {
      font-size: 0.85rem;
      color: #aaa;
      margin-top: 2px;
      text-transform: capitalize;
    }
  `;
  document.head.appendChild(style);
}

const TABS = [
  { key: "blocked", label: "Blocked" },
  { key: "unblocked", label: "Unblocked" },
  { key: "cors-optimized", label: "CORS Proxy Optimized" },
];

let gamesData = [];
let activeTab = "unblocked";

async function loadGames() {
  // Always start with the JavaScript fallback to ensure we have data
  gamesData = jsListFallback;
  
  // Try to load JSON only if we're in a local/hosted environment
  try {
    // Quick check if we can fetch JSON (will fail in bookmarklet mode)
    const loaded = await Promise.race([
      loadJson("src/data/json/games.json"),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 2000))
    ]);
    
    if (loaded && Array.isArray(loaded) && loaded.length > 0) {
      gamesData = loaded;
    }
  } catch (error) {
    // JSON loading failed (normal in bookmarklet mode), stick with JS fallback
    console.log('Using JavaScript games data (JSON load failed):', error.message);
  }
  
  renderGames();
}

function setTab(tabKey) {
  activeTab = tabKey;
  renderGames();
}

function renderTabs() {
  return `
    <div class="games-tabs">
      ${TABS.map(
        (tab) => `
        <button class="games-tab${
          activeTab === tab.key ? " active" : ""
        }" data-tab-key="${tab.key}">${tab.label}</button>
      `
      ).join("")}
    </div>
  `;
}

function renderGames() {
  const container = document.getElementById("games-view");
  if (!container) {
    console.log("Games container not found, retrying in 100ms...");
    setTimeout(renderGames, 100);
    return;
  }
  
  if (!gamesData || gamesData.length === 0) {
    container.innerHTML = `
      ${renderTabs()}
      <div class="games-list">
        <p style="grid-column: 1/-1; text-align: center; color: #aaa;">No games data available.</p>
      </div>
    `;
    setupTabEventListeners();
    return;
  }
  
  const filtered = gamesData.filter((game) => game.type === activeTab);
  container.innerHTML = `
    ${renderTabs()}
    <div class="games-list">
      ${
        filtered.length === 0
          ? `<p style="grid-column: 1/-1; text-align: center; color: #aaa;">No games found for "${activeTab}" category.</p>`
          : filtered
              .map(
                (game) => `
        <div class="game-item">
          <a href="${game.url}" target="_blank">${game.title}</a>
          <div class="game-type">${game.type.replace(
            "cors-optimized",
            "CORS Optimized"
          )}</div>
        </div>
      `
              )
              .join("")
      }
    </div>
  `;

  // Set up event delegation for tab clicks
  setupTabEventListeners();
}

function setupTabEventListeners() {
  const container = document.getElementById("games-view");
  if (!container) return;

  // Remove existing listeners to prevent duplicates
  container.removeEventListener("click", handleTabClick);
  container.addEventListener("click", handleTabClick);
}

function handleTabClick(event) {
  if (event.target.classList.contains("games-tab")) {
    const tabKey = event.target.getAttribute("data-tab-key");
    if (tabKey) {
      event.preventDefault();
      event.stopPropagation();
      setTab(tabKey);
    }
  }
}

export function showGamesView() {
  // Inject CSS immediately
  injectGamesCSS();
  
  // Start loading games asynchronously
  setTimeout(() => {
    loadGames();
  }, 0);
  
  return `
    <div id="games-view" class="games-view">
      Loading games...
    </div>
  `;
}
