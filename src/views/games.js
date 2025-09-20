import { loadJson } from "../utils/helpers.js";

const TABS = [
  { key: "blocked", label: "Blocked" },
  { key: "unblocked", label: "Unblocked" },
  { key: "cors-optimized", label: "CORS Proxy Optimized" },
];

let gamesData = [];
let activeTab = "unblocked";

async function loadGames() {
  // You can switch to the JS import if needed
  gamesData = (await loadJson("/src/data/json/games.json")) || [];
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
        }" onclick="window.setGamesTab('${tab.key}')">${tab.label}</button>
      `
      ).join("")}
    </div>
  `;
}

function renderGames() {
  const container = document.getElementById("games-view");
  if (!container) return;
  const filtered = gamesData.filter((game) => game.type === activeTab);
  container.innerHTML = `
    ${renderTabs()}
    <div class="games-list">
      ${
        filtered.length === 0
          ? "<p>No games found.</p>"
          : filtered
              .map(
                (game) => `
        <div class="game-item">
          <a href="${game.url}" target="_blank">${game.title}</a>
        </div>
      `
              )
              .join("")
      }
    </div>
  `;
}

// Expose tab switcher for inline onclick
window.setGamesTab = setTab;

export function showGamesView() {
  return `
    <div id="games-view" class="games-view">
      Loading games...
    </div>
  `;
}

// Load games on first import
loadGames();
