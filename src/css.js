// Centralized CSS for all views
export function injectAppCSS() {
  if (document.getElementById("app-shared-style")) return;
  const style = document.createElement("style");
  style.id = "app-shared-style";
  style.textContent = `
    /* --- Shared Card/Grid Styles --- */
    .card-grid-view {
      padding: 20px;
      background: #23272f;
      border-radius: 10px;
      min-height: 400px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,0.15);
    }
    .card-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-top: 10px;
    }
    .card-item {
      background: #292d36;
      border-radius: 8px;
      padding: 18px 14px;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: box-shadow 0.2s, transform 0.2s;
      cursor: pointer;
      user-select: none;
    }
    .card-item:hover {
      box-shadow: 0 4px 16px 0 rgba(0,122,204,0.15);
      transform: translateY(-2px) scale(1.03);
      background: #2d323e;
    }
    .card-item .card-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #00bfff;
      margin-bottom: 4px;
    }
    .card-item .card-desc {
      font-size: 0.95rem;
      color: #aaa;
      margin-bottom: 2px;
    }
    
    /* --- Games View Specific --- */
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
      background: #007acc;
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
      text-decoration: none;
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
      max-width: 100%;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .game-item a:hover {
      color: #fff;
    }
    .game-item .game-type {
      font-size: 0.85rem;
      color: #aaa;
      margin-top: 2px;
      text-transform: capitalize;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
  `;
  document.head.appendChild(style);
}
