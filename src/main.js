import { injectAppCSS } from "./css.js";
import createProxyView from "./views/proxy.js";
import createNotesView from "./views/notes.js";
import createCalculatorView from "./views/calculator.js";
import createConsoleView from "./views/console.js";
import createCloakingView from "./views/cloaking.js";
import createHistoryFloodView from "./views/historyFlood.js";
import createCorsProxyView from "./views/corsProxy.js";
import createPocketBrowserView from "./views/pocketBrowser.js";
import createScriptsView from "./views/scripts.js";

import createBookmarkletsView from "./views/bookmarklets.js";
import { showGamesView } from "./views/games.js";

console.log("\n\nNow launching ASC2563's Proxy Client...\n\n");

class ProxyClientApp {
  constructor() {
    this.frame = null;
    this.views = {};
    this.sidebarButtons = {};
  }

  launch() {
    // Inject shared CSS
    injectAppCSS();

    // Add app-specific CSS
    this.injectAppStyles();

    // Create frame
    this.frame = document.createElement("div");
    window.proxyFrame = this.frame;
    this.setupFrameStyle();

    // Sidebar
    const sidebar = this.createSidebar();

    // Content
    const content = this.createContent();

    this.frame.appendChild(sidebar);
    this.frame.appendChild(content);

    document.body.innerHTML = "";
    document.body.appendChild(this.frame);

    // Keyboard shortcut to show/hide
    document.addEventListener("keydown", (event) => {
      if (event.key === "\\") {
        if (window.proxyFrame) {
          window.proxyFrame.style.display =
            window.proxyFrame.style.display === "none" ? "flex" : "none";
        }
      }
    });

    // Hide button
    this.sidebarButtons.hideButton.addEventListener("click", () => {
      this.frame.style.display = "none";
    });

    console.log(
      "Application launched successfully. Press backslash (\\) to show if hidden."
    );
  }

  injectAppStyles() {
    const style = document.createElement("style");
    style.textContent = `
      /* App Frame Styling */
      .proxy-app-frame {
        background: #23272f;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        border: 1px solid #404040;
        overflow: hidden;
      }
      
      /* Sidebar Styling */
      .proxy-sidebar {
        background: #1e2228;
        border-right: 1px solid #404040;
        position: relative;
      }
      
      .proxy-sidebar::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #007acc, transparent);
        opacity: 0.5;
      }
      
      .sidebar-header {
        padding: 20px 16px 16px;
        border-bottom: 1px solid #404040;
        margin-bottom: 16px;
      }
      
      .sidebar-title {
        color: #00bfff;
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0 0 4px 0;
      }
      
      .sidebar-subtitle {
        color: #aaa;
        font-size: 0.8rem;
        margin: 0;
      }
      
      /* Sidebar Button Styling */
      .sidebar-btn {
        width: 100%;
        padding: 12px 16px;
        margin-bottom: 4px;
        background: transparent;
        border: none;
        border-radius: 8px;
        color: #d4d4d4;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 500;
        text-align: left;
        transition: all 0.2s ease;
        position: relative;
        overflow: hidden;
      }
      
      .sidebar-btn:hover {
        background: rgba(0, 122, 204, 0.1);
        color: #00bfff;
        transform: translateX(4px);
      }
      
      .sidebar-btn.active {
        background: #007acc;
        color: #fff;
        box-shadow: 0 2px 8px rgba(0, 122, 204, 0.3);
      }
      
      .sidebar-btn.active::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        height: 100%;
        background: #00bfff;
      }
      
      .sidebar-btn.hide-btn {
        background: #dc3545;
        color: #fff;
        margin-top: auto;
      }
      
      .sidebar-btn.hide-btn:hover {
        background: #c82333;
        transform: translateX(0);
      }
      
      /* Content Area Styling */
      .proxy-content {
        background: #23272f;
        position: relative;
      }
      
      .content-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 20% 80%, rgba(0, 122, 204, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(0, 191, 255, 0.03) 0%, transparent 50%);
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);
  }

  setupFrameStyle() {
    const frame = this.frame;
    frame.className = "proxy-app-frame";
    frame.style.position = "fixed";
    frame.style.top = "50%";
    frame.style.left = "50%";
    frame.style.transform = "translate(-50%, -50%)";
    frame.style.width = "70vw";
    frame.style.height = "80vh";
    frame.style.display = "flex";
    frame.style.color = "#ffffff";
  }

  createSidebar() {
    const sidebar = document.createElement("div");
    sidebar.className = "proxy-sidebar";
    sidebar.style.width = "280px";
    sidebar.style.height = "100%";
    sidebar.style.display = "flex";
    sidebar.style.flexDirection = "column";
    sidebar.style.padding = "0";

    // Sidebar header
    const header = document.createElement("div");
    header.className = "sidebar-header";
    header.innerHTML = `
      <h1 class="sidebar-title">Proxy Client</h1>
      <p class="sidebar-subtitle">by ASC2563</p>
    `;

    // Button container
    const buttonContainer = document.createElement("div");
    buttonContainer.style.flex = "1";
    buttonContainer.style.padding = "0 16px";
    buttonContainer.style.display = "flex";
    buttonContainer.style.flexDirection = "column";

    // Button factory
    const makeBtn = (label, icon = "") => {
      const btn = document.createElement("button");
      btn.className = "sidebar-btn";
      btn.innerHTML = icon ? `${icon} ${label}` : label;
      return btn;
    };

    // Sidebar buttons with icons
    this.sidebarButtons.proxyButton = makeBtn("Proxy", "🌐");
    this.sidebarButtons.proxyButton.classList.add("active");
    this.sidebarButtons.gamesButton = makeBtn("Games List", "🎮");
    this.sidebarButtons.bookmarkletsButton = makeBtn("Bookmarklets", "🔖");
    this.sidebarButtons.scriptsButton = makeBtn("Scripts", "📜");
    this.sidebarButtons.notesButton = makeBtn("Notes", "📝");
    this.sidebarButtons.calculatorButton = makeBtn("Calculator", "🧮");
    this.sidebarButtons.consoleButton = makeBtn("Console", "💻");
    this.sidebarButtons.cloakingButton = makeBtn("Cloaking", "🎭");
    this.sidebarButtons.historyFloodButton = makeBtn("History Flood", "📚");
    this.sidebarButtons.corsProxyButton = makeBtn("CORS Proxy", "🔄");
    this.sidebarButtons.pocketBrowserButton = makeBtn("Pocket Browser", "🔍");
    this.sidebarButtons.hideButton = makeBtn("Hide App", "❌");
    this.sidebarButtons.hideButton.classList.add("hide-btn");

    // Add buttons to container
    [
      this.sidebarButtons.proxyButton,
      this.sidebarButtons.gamesButton,
      this.sidebarButtons.bookmarkletsButton,
      this.sidebarButtons.scriptsButton,
      this.sidebarButtons.notesButton,
      this.sidebarButtons.calculatorButton,
      this.sidebarButtons.consoleButton,
      this.sidebarButtons.cloakingButton,
      this.sidebarButtons.historyFloodButton,
      this.sidebarButtons.corsProxyButton,
      this.sidebarButtons.pocketBrowserButton,
      this.sidebarButtons.hideButton,
    ].forEach((btn) => buttonContainer.appendChild(btn));

    sidebar.appendChild(header);
    sidebar.appendChild(buttonContainer);

    return sidebar;
  }

  createContent() {
    const content = document.createElement("div");
    content.className = "proxy-content";
    content.style.flexGrow = "1";
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.width = "100%";
    content.style.height = "100%";
    content.style.padding = "0";
    content.style.position = "relative";

    // Add background overlay
    const overlay = document.createElement("div");
    overlay.className = "content-overlay";
    content.appendChild(overlay);

    // Views
    this.views.proxyView = createProxyView();
    this.views.notesView = createNotesView();
    this.views.calculatorView = createCalculatorView();
    this.views.consoleView = createConsoleView();
    this.views.cloakingView = createCloakingView();
    this.views.historyFloodView = createHistoryFloodView();
    this.views.corsProxyView = createCorsProxyView();
    this.views.pocketBrowserView = createPocketBrowserView();
    this.views.scriptsView = createScriptsView();
    this.views.bookmarkletsView = createBookmarkletsView();

    // Games view
    const gamesViewDiv = document.createElement("div");
    gamesViewDiv.innerHTML = showGamesView();
    gamesViewDiv.style.display = "none";
    this.views.gamesView = gamesViewDiv;

    // Add all views to content
    Object.values(this.views).forEach((view) => {
      view.style.position = "relative";
      view.style.zIndex = "1";
      content.appendChild(view);
    });

    // Hide all views, then show only proxyView by default
    Object.values(this.views).forEach((view) => (view.style.display = "none"));
    if (this.views.proxyView) this.views.proxyView.style.display = "flex";

    // Setup sidebar button events
    this.setupSidebarEvents();

    return content;
  }

  // --- Sidebar Button Events and View Switching ---

  setupSidebarEvents() {
    const v = this.views;
    const b = this.sidebarButtons;

    const hideAll = () => {
      Object.values(v).forEach((view) => (view.style.display = "none"));
    };

    const setActiveButton = (activeBtn) => {
      Object.values(b).forEach((btn) => {
        if (btn && btn.classList) {
          btn.classList.remove("active");
        }
      });
      if (activeBtn && activeBtn.classList) {
        activeBtn.classList.add("active");
      }
    };

    b.proxyButton.addEventListener("click", () => {
      hideAll();
      v.proxyView.style.display = "flex";
      setActiveButton(b.proxyButton);
    });

    b.notesButton.addEventListener("click", () => {
      hideAll();
      v.notesView.style.display = "block";
      setActiveButton(b.notesButton);
    });

    b.calculatorButton.addEventListener("click", () => {
      hideAll();
      v.calculatorView.style.display = "block";
      setActiveButton(b.calculatorButton);
      this.initCalculator();
    });

    b.consoleButton.addEventListener("click", () => {
      hideAll();
      v.consoleView.style.display = "block";
      setActiveButton(b.consoleButton);
    });

    b.cloakingButton.addEventListener("click", () => {
      hideAll();
      v.cloakingView.style.display = "block";
      setActiveButton(b.cloakingButton);
    });

    b.historyFloodButton.addEventListener("click", () => {
      hideAll();
      v.historyFloodView.style.display = "block";
      setActiveButton(b.historyFloodButton);
    });

    b.corsProxyButton.addEventListener("click", () => {
      hideAll();
      v.corsProxyView.style.display = "block";
      setActiveButton(b.corsProxyButton);
    });

    b.pocketBrowserButton.addEventListener("click", () => {
      hideAll();
      v.pocketBrowserView.style.display = "block";
      setActiveButton(b.pocketBrowserButton);
    });

    b.scriptsButton.addEventListener("click", () => {
      hideAll();
      v.scriptsView.style.display = "block";
      setActiveButton(b.scriptsButton);
    });

    b.bookmarkletsButton.addEventListener("click", () => {
      hideAll();
      v.bookmarkletsView.style.display = "block";
      setActiveButton(b.bookmarkletsButton);
    });

    // Games List button
    b.gamesButton.addEventListener("click", () => {
      hideAll();
      v.gamesView.style.display = "block";
      setActiveButton(b.gamesButton);
    });
  }

  // --- Calculator Initialization ---

  initCalculator() {
    const calculatorView = this.views.calculatorView;
    if (!calculatorView._initialized) {
      const display = calculatorView.querySelector("#calcDisplay");
      const buttons = calculatorView.querySelectorAll(".calc-btn");
      let currentValue = "";

      buttons.forEach((button) => {
        button.style.padding = "10px";
        button.style.fontSize = "16px";
        button.style.cursor = "pointer";

        button.addEventListener("click", () => {
          const value = button.getAttribute("data-value");
          if (value === "C") {
            currentValue = "";
          } else if (value === "=") {
            try {
              // Sanitize input to only allow safe mathematical expressions
              const sanitizedValue = currentValue.replace(
                /[^0-9+\-*/.() ]/g,
                ""
              );
              if (sanitizedValue !== currentValue) {
                currentValue = "Invalid Input";
              } else if (sanitizedValue.trim() === "") {
                currentValue = "";
              } else {
                const result = Function(
                  '"use strict"; return (' + sanitizedValue + ")"
                )();
                currentValue =
                  typeof result === "number" && isFinite(result)
                    ? result.toString()
                    : "Error";
              }
            } catch (e) {
              currentValue = "Error";
            }
          } else {
            currentValue += value;
          }
          display.value = currentValue;
        });
      });

      calculatorView._initialized = true;
    }
  }
}

// Launch the app
const app = new ProxyClientApp();
app.launch();
