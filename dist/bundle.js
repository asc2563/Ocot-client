(() => {
  // src/css.js
  function injectAppCSS() {
    if (document.getElementById("app-shared-style")) return;
    const style = document.createElement("style");
    style.id = "app-shared-style";
    style.textContent = `
    /* CSS Variables for theming */
    :root {
      --bg-primary: #23272f;
      --bg-secondary: #292d36;
      --accent-color: #007acc;
      --accent-hover: #005a9e;
      --accent-color-rgb: 0, 122, 204;
      --text-primary: #fff;
      --text-secondary: #aaa;
      --border-color: #404040;
    }

    /* --- Shared Card/Grid Styles --- */
    .card-grid-view {
      padding: 20px;
      background: var(--bg-primary);
      border-radius: 10px;
      min-height: 400px;
      max-height: calc(80vh - 40px);
      overflow-y: auto;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,0.15);
    }
    .card-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-top: 10px;
    }
    .card-item {
      background: var(--bg-secondary);
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
      max-height: calc(80vh - 40px);
      overflow-y: auto;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,0.15);
    }
    
    /* Custom Scrollbar Styling */
    .card-grid-view::-webkit-scrollbar,
    .games-view::-webkit-scrollbar {
      width: 8px;
    }
    
    .card-grid-view::-webkit-scrollbar-track,
    .games-view::-webkit-scrollbar-track {
      background: #1e1e1e;
      border-radius: 4px;
    }
    
    .card-grid-view::-webkit-scrollbar-thumb,
    .games-view::-webkit-scrollbar-thumb {
      background: #404040;
      border-radius: 4px;
    }
    
    .card-grid-view::-webkit-scrollbar-thumb:hover,
    .games-view::-webkit-scrollbar-thumb:hover {
      background: var(--accent-color);
    }
    .games-tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
    .games-tab {
      padding: 10px 24px;
      background: var(--bg-secondary);
      border: none;
      border-radius: 6px 6px 0 0;
      color: var(--text-primary);
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      outline: none;
    }
    .games-tab.active, .games-tab:hover {
      background: var(--accent-color);
      color: var(--text-primary);
    }
    .games-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-top: 10px;
    }
    .game-item {
      background: var(--bg-secondary);
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

  // src/sidebar.js
  var ProxySidebar = class {
    constructor() {
      this.sidebar = null;
      this.buttons = {};
      this.buttonContainer = null;
    }
    // Create the main sidebar element
    createSidebar() {
      this.sidebar = document.createElement("div");
      this.sidebar.className = "proxy-sidebar";
      this.sidebar.style.cssText = `
      width: 280px;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 0;
    `;
      const header = this.createHeader();
      this.buttonContainer = this.createButtonContainer();
      this.sidebar.appendChild(header);
      this.sidebar.appendChild(this.buttonContainer);
      return this.sidebar;
    }
    // Create sidebar header with title and subtitle
    createHeader() {
      const header = document.createElement("div");
      header.className = "sidebar-header";
      header.style.cursor = "pointer";
      header.title = "Click to return to welcome screen";
      header.innerHTML = `
      <h1 class="sidebar-title">Ocot Client</h1>
      <p class="sidebar-subtitle">by ASC2563</p>
    `;
      this.headerElement = header;
      return header;
    }
    // Create scrollable button container
    createButtonContainer() {
      const container = document.createElement("div");
      container.style.cssText = `
      flex: 1;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
    `;
      return container;
    }
    // Button factory function
    createButton(label, icon = "", type = "normal") {
      const btn = document.createElement("button");
      btn.className = `sidebar-btn ${type === "hide" ? "hide-btn" : ""} ${type === "remove" ? "remove-btn" : ""}`;
      btn.innerHTML = icon ? `${icon} ${label}` : label;
      return btn;
    }
    // Add all navigation buttons
    addNavigationButtons() {
      const navButtons = [
        { key: "proxyButton", label: "Proxy", icon: "\u{1F310}" },
        { key: "gamesButton", label: "Games List", icon: "\u{1F3AE}" },
        { key: "bookmarkletsButton", label: "Bookmarklets", icon: "\u{1F516}" },
        { key: "scriptsButton", label: "Scripts", icon: "\u{1F4DC}" },
        { key: "notesButton", label: "Notes", icon: "\u{1F4DD}" },
        { key: "calculatorButton", label: "Calculator", icon: "\u{1F9EE}" },
        { key: "consoleButton", label: "Console", icon: "\u{1F4BB}" },
        { key: "cloakingButton", label: "Cloaking", icon: "\u{1F3AD}" },
        { key: "historyFloodButton", label: "History Flood", icon: "\u{1F30A}" },
        { key: "corsProxyButton", label: "CORS Proxy", icon: "\u{1F504}" },
        { key: "pocketBrowserButton", label: "Pocket Browser", icon: "\u{1F50D}" },
        { key: "settingsButton", label: "Settings", icon: "\u2699\uFE0F", active: true }
      ];
      navButtons.forEach(({ key, label, icon, active }) => {
        this.buttons[key] = this.createButton(label, icon);
        if (active) {
          this.buttons[key].classList.add("active");
        }
        this.buttonContainer.appendChild(this.buttons[key]);
      });
      this.buttons.hideButton = this.createButton("Hide App", "\u274C", "hide");
      this.buttons.removeButton = this.createButton("Remove App", "\u{1F5D1}\uFE0F", "remove");
      this.buttonContainer.appendChild(this.buttons.hideButton);
      this.buttonContainer.appendChild(this.buttons.removeButton);
    }
    // Get button references for event listeners
    getButtons() {
      return this.buttons;
    }
    // Get header element for external event binding
    getHeader() {
      return this.headerElement;
    }
    // Set active button
    setActiveButton(buttonKey) {
      console.log("setActiveButton called with:", buttonKey);
      Object.entries(this.buttons).forEach(([key, btn]) => {
        if (key !== "settingsButton") {
          console.log("Removing active from:", key);
          btn.classList.remove("active");
        }
      });
      if (buttonKey && this.buttons[buttonKey]) {
        console.log("Adding active to:", buttonKey);
        this.buttons[buttonKey].classList.add("active");
      }
      if (this.buttons.settingsButton) {
        this.buttons.settingsButton.classList.add("active");
      }
    }
    // Add custom button
    addCustomButton(key, label, icon = "", type = "normal") {
      const button = this.createButton(label, icon, type);
      this.buttons[key] = button;
      this.buttonContainer.appendChild(button);
      return button;
    }
    // Remove button
    removeButton(key) {
      if (this.buttons[key]) {
        this.buttons[key].remove();
        delete this.buttons[key];
      }
    }
    // Inject sidebar-specific CSS
    static injectCSS() {
      const style = document.createElement("style");
      style.textContent = `
      /* Sidebar Container */
      .proxy-sidebar {
        background: #292d36;
        border-right: 1px solid #404040;
        box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
      }

      /* Sidebar Header */
      .sidebar-header {
        padding: 20px 16px;
        border-bottom: 1px solid #404040;
        text-align: center;
        background: linear-gradient(135deg, #23272f, #2a2e37);
        transition: all 0.3s ease;
      }

      .sidebar-header:hover {
        background: linear-gradient(135deg, #2a2e37, #323641);
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(var(--accent-color-rgb, 0, 191, 255), 0.1);
      }

      .sidebar-title {
        color: var(--accent-color);
        font-size: 1.4rem;
        font-weight: 700;
        margin: 0 0 4px 0;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      }

      .sidebar-subtitle {
        color: #7d8590;
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
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        position: relative;
        overflow: hidden;
      }

      .sidebar-btn:hover {
        background: rgba(var(--accent-color-rgb, 0, 122, 204), 0.1);
        color: var(--accent-color);
        transform: translateX(4px);
      }

      .sidebar-btn.active {
        background: var(--accent-color);
        color: #fff;
        box-shadow: 0 2px 8px rgba(var(--accent-color-rgb, 0, 122, 204), 0.3);
      }

      .sidebar-btn.active::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        height: 100%;
        background: var(--accent-color);
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

      .sidebar-btn.remove-btn {
        background: #6f2232;
        color: #fff;
        margin-top: 8px;
      }

      .sidebar-btn.remove-btn:hover {
        background: #5a1a28;
        transform: translateX(0);
      }

      /* Sidebar Scrollbar Styling */
      .proxy-sidebar ::-webkit-scrollbar {
        width: 8px;
      }

      .proxy-sidebar ::-webkit-scrollbar-track {
        background: #23272f;
        border-radius: 4px;
      }

      .proxy-sidebar ::-webkit-scrollbar-thumb {
        background: #404040;
        border-radius: 4px;
        transition: background 0.2s;
      }

      .proxy-sidebar ::-webkit-scrollbar-thumb:hover {
        background: #525252;
      }
    `;
      document.head.appendChild(style);
    }
  };
  var sidebar_default = ProxySidebar;

  // src/views/welcome.js
  function createWelcomeView() {
    injectAppCSS();
    const welcomeView = document.createElement("div");
    welcomeView.className = "card-grid-view";
    welcomeView.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    padding: 40px 20px;
    overflow-y: auto;
    height: 100%;
  `;
    welcomeView.innerHTML = `
    <div style="max-width: 800px; width: 100%;">
      <!-- Welcome Header -->
      <div style="margin-bottom: 40px;">
        <div style="font-size: 4rem; margin-bottom: 16px;">\u{1F527}</div>
        <h1 style="color: #00bfff; font-size: 2.5rem; margin: 0 0 12px 0; font-weight: 700;">
          Welcome to Ocot Client
        </h1>
        <p style="color: #7d8590; font-size: 1.2rem; margin: 0 0 20px 0; line-height: 1.5;">
          by ASC2563 \u2022 Your ultimate web proxy toolkit
        </p>
        
        <!-- Docs Button -->
        <button id="docs-button" style="
          background: linear-gradient(135deg, #007acc, #0066cc);
          border: none;
          border-radius: 8px;
          color: #fff;
          padding: 12px 24px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 122, 204, 0.3);
        ">
          \u{1F4D6} Documentation
        </button>
      </div>

      <!-- Feature Cards -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 40px;">
        
        <!-- Proxy Tools Card -->
        <div class="card-item" style="padding: 24px; text-align: left;">
          <div style="display: flex; align-items: center; margin-bottom: 16px;">
            <span style="font-size: 2rem; margin-right: 12px;">\u{1F310}</span>
            <h3 style="color: #00bfff; margin: 0; font-size: 1.3rem;">Proxy Tools</h3>
          </div>
          <p style="color: #d4d4d4; margin: 0 0 12px 0; line-height: 1.5;">
            Access blocked websites and bypass restrictions with our powerful proxy system.
          </p>
          <ul style="color: #7d8590; margin: 0; padding-left: 20px; font-size: 0.9rem;">
            <li>Web proxy with custom settings</li>
            <li>CORS proxy for API requests</li>
            <li>History flooding protection</li>
          </ul>
        </div>

        <!-- Games & Entertainment Card -->
        <div class="card-item" style="padding: 24px; text-align: left;">
          <div style="display: flex; align-items: center; margin-bottom: 16px;">
            <span style="font-size: 2rem; margin-right: 12px;">\u{1F3AE}</span>
            <h3 style="color: #00bfff; margin: 0; font-size: 1.3rem;">Games & Fun</h3>
          </div>
          <p style="color: #d4d4d4; margin: 0 0 12px 0; line-height: 1.5;">
            Access a curated list of unblocked games and entertainment sites.
          </p>
          <ul style="color: #7d8590; margin: 0; padding-left: 20px; font-size: 0.9rem;">
            <li>Unblocked games collection</li>
            <li>Blocked games collection</li>
            <li>cors proxy optimized games collection</li>
          </ul>
        </div>

        <!-- Developer Tools Card -->
        <div class="card-item" style="padding: 24px; text-align: left;">
          <div style="display: flex; align-items: center; margin-bottom: 16px;">
            <span style="font-size: 2rem; margin-right: 12px;">\u{1F4BB}</span>
            <h3 style="color: #00bfff; margin: 0; font-size: 1.3rem;">Developer Tools</h3>
          </div>
          <p style="color: #d4d4d4; margin: 0 0 12px 0; line-height: 1.5;">
            Built-in tools for development, testing, and productivity.
          </p>
          <ul style="color: #7d8590; margin: 0; padding-left: 20px; font-size: 0.9rem;">
            <li>JavaScript console</li>
            <li>Calculator with advanced functions</li>
            <li>Notes and bookmarklets</li>
          </ul>
        </div>

        <!-- Privacy & Security Card -->
        <div class="card-item" style="padding: 24px; text-align: left;">
          <div style="display: flex; align-items: center; margin-bottom: 16px;">
            <span style="font-size: 2rem; margin-right: 12px;">\u{1F3AD}</span>
            <h3 style="color: #00bfff; margin: 0; font-size: 1.3rem;">Privacy & Security</h3>
          </div>
          <p style="color: #d4d4d4; margin: 0 0 12px 0; line-height: 1.5;">
            Advanced privacy tools to protect your browsing and identity.
          </p>
          <ul style="color: #7d8590; margin: 0; padding-left: 20px; font-size: 0.9rem;">
            <li>Tab cloaking and disguise</li>
            <li>Pocket browser for isolation</li>
            <li>Custom scripts and automation</li>
          </ul>
        </div>

      </div>

      <!-- Quick Start Section -->
      <div style="background: #292d36; border-radius: 12px; padding: 32px; margin-bottom: 32px; border: 1px solid #404040;">
        <h2 style="color: #00bfff; margin: 0 0 20px 0; font-size: 1.5rem;">\u{1F680} Quick Start</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; text-align: left;">
          
          <div>
            <h4 style="color: #d4d4d4; margin: 0 0 8px 0; font-size: 1.1rem;">1. Choose a Tool</h4>
            <p style="color: #7d8590; margin: 0; font-size: 0.9rem;">
              Click any option in the sidebar to access different features and tools.
            </p>
          </div>
          
          <div>
            <h4 style="color: #d4d4d4; margin: 0 0 8px 0; font-size: 1.1rem;">2. Browse Safely</h4>
            <p style="color: #7d8590; margin: 0; font-size: 0.9rem;">
              Use the proxy tab to access blocked websites securely and anonymously.
            </p>
          </div>
          
          <div>
            <h4 style="color: #d4d4d4; margin: 0 0 8px 0; font-size: 1.1rem;">3. Stay Hidden</h4>
            <p style="color: #7d8590; margin: 0; font-size: 0.9rem;">
              Press \\ to hide the client or use cloaking tools for extra privacy.
            </p>
          </div>
          
        </div>
      </div>

      <!-- Footer Info -->
      <div style="color: #7d8590; font-size: 0.9rem; line-height: 1.6;">
        <p style="margin: 0;">
          Need help? Check settings and scroll down for help and support. Additionally you can check the documentation.
        </p>
      </div>
      
    </div>
  `;
    setTimeout(() => {
      const docsButton = welcomeView.querySelector("#docs-button");
      if (docsButton) {
        docsButton.addEventListener("mouseenter", () => {
          docsButton.style.transform = "translateY(-2px)";
          docsButton.style.boxShadow = "0 6px 16px rgba(0, 122, 204, 0.4)";
        });
        docsButton.addEventListener("mouseleave", () => {
          docsButton.style.transform = "translateY(0)";
          docsButton.style.boxShadow = "0 4px 12px rgba(0, 122, 204, 0.3)";
        });
        docsButton.addEventListener("click", () => {
          openDocumentationApp();
        });
      }
    }, 0);
    return welcomeView;
  }
  var OcotDocsApp = class {
    constructor() {
      this.isOpen = false;
      this.appElement = null;
      this.sidebar = null;
      this.content = null;
      this.currentView = "overview";
    }
    open() {
      if (this.isOpen) return;
      this.isOpen = true;
      this.createApp();
      document.body.appendChild(this.appElement);
      requestAnimationFrame(() => {
        this.appElement.style.opacity = "1";
      });
    }
    close() {
      if (!this.isOpen) return;
      this.appElement.style.opacity = "0";
      setTimeout(() => {
        if (this.appElement && this.appElement.parentNode) {
          this.appElement.parentNode.removeChild(this.appElement);
        }
        this.isOpen = false;
      }, 300);
    }
    createApp() {
      this.appElement = document.createElement("div");
      this.appElement.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #1a1d23;
      z-index: 100000;
      opacity: 0;
      transition: opacity 0.3s ease;
      display: flex;
    `;
      this.createSidebar();
      this.createContent();
      this.appElement.appendChild(this.sidebar);
      this.appElement.appendChild(this.content);
      this.loadView("overview");
    }
    createSidebar() {
      this.sidebar = document.createElement("div");
      this.sidebar.style.cssText = `
      width: 280px;
      height: 100%;
      background: #292d36;
      border-right: 1px solid #404040;
      display: flex;
      flex-direction: column;
    `;
      const header = document.createElement("div");
      header.style.cssText = `
      padding: 20px 16px;
      border-bottom: 1px solid #404040;
      text-align: center;
      background: linear-gradient(135deg, #23272f, #2a2e37);
    `;
      header.innerHTML = `
      <h1 style="color: #00bfff; font-size: 1.4rem; margin: 0 0 4px 0; font-weight: 700;">
        Ocot Client Docs
      </h1>
      <p style="color: #7d8590; font-size: 0.8rem; margin: 0;">
        Documentation & Guides
      </p>
    `;
      const navigation = document.createElement("div");
      navigation.style.cssText = `
      flex: 1;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    `;
      const navItems = [
        { key: "overview", label: "Overview", icon: "\u{1F4CB}" },
        { key: "getting-started", label: "Getting Started", icon: "\u{1F680}" },
        { key: "proxy-guide", label: "Proxy Guide", icon: "\u{1F310}" },
        { key: "games-guide", label: "Games Guide", icon: "\u{1F3AE}" },
        { key: "privacy-tools", label: "Privacy Tools", icon: "\u{1F3AD}" },
        { key: "developer-tools", label: "Developer Tools", icon: "\u{1F4BB}" },
        { key: "troubleshooting", label: "Troubleshooting", icon: "\u{1F527}" },
        { key: "api-reference", label: "API Reference", icon: "\u{1F4D6}" }
      ];
      navItems.forEach((item) => {
        const navBtn = document.createElement("button");
        navBtn.style.cssText = `
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
        display: flex;
        align-items: center;
        transition: all 0.2s ease;
      `;
        navBtn.innerHTML = `${item.icon} ${item.label}`;
        navBtn.addEventListener("mouseenter", () => {
          if (!navBtn.classList.contains("active")) {
            navBtn.style.background = "rgba(0, 122, 204, 0.1)";
            navBtn.style.color = "#00bfff";
          }
        });
        navBtn.addEventListener("mouseleave", () => {
          if (!navBtn.classList.contains("active")) {
            navBtn.style.background = "transparent";
            navBtn.style.color = "#d4d4d4";
          }
        });
        navBtn.addEventListener("click", () => {
          this.setActiveNav(navBtn);
          this.loadView(item.key);
        });
        navigation.appendChild(navBtn);
      });
      const closeBtn = document.createElement("button");
      closeBtn.style.cssText = `
      width: 100%;
      padding: 12px 16px;
      margin-top: auto;
      margin-bottom: 16px;
      background: #dc3545;
      border: none;
      border-radius: 8px;
      color: #fff;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 600;
    `;
      closeBtn.innerHTML = "\u274C Close Documentation";
      closeBtn.addEventListener("click", () => this.close());
      navigation.appendChild(closeBtn);
      this.sidebar.appendChild(header);
      this.sidebar.appendChild(navigation);
    }
    createContent() {
      this.content = document.createElement("div");
      this.content.style.cssText = `
      flex: 1;
      height: 100%;
      background: #23272f;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 40px 40px 100px 40px;
      box-sizing: border-box;
    `;
    }
    setActiveNav(activeButton) {
      const navButtons = this.sidebar.querySelectorAll("button");
      navButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.style.background = "transparent";
        btn.style.color = "#d4d4d4";
      });
      activeButton.classList.add("active");
      activeButton.style.background = "#00bfff";
      activeButton.style.color = "#fff";
    }
    loadView(viewKey) {
      this.currentView = viewKey;
      const views = {
        overview: this.createOverviewView(),
        "getting-started": this.createGettingStartedView(),
        "proxy-guide": this.createProxyGuideView(),
        "games-guide": this.createGamesGuideView(),
        "privacy-tools": this.createPrivacyToolsView(),
        "developer-tools": this.createDeveloperToolsView(),
        troubleshooting: this.createTroubleshootingView(),
        "api-reference": this.createApiReferenceView()
      };
      this.content.innerHTML = views[viewKey] || views["overview"];
    }
    createOverviewView() {
      return `
      <div style="max-width: 800px;">
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">\u{1F4CB} Overview</h1>
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Ocot Client is a comprehensive web proxy toolkit designed to provide secure browsing, 
          privacy protection, and access to restricted content.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px; border: 1px solid #404040;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F31F} Key Features</h2>
          <ul style="color: #d4d4d4; line-height: 1.8; margin: 0; padding-left: 20px;">
            <li><strong>Web Proxy:</strong> Access blocked websites with custom proxy settings</li>
            <li><strong>Games Collection:</strong> Curated list of unblocked and blocked games</li>
            <li><strong>Privacy Tools:</strong> Tab cloaking, history flooding, and more</li>
            <li><strong>Developer Tools:</strong> Built-in console, calculator, and utilities</li>
            <li><strong>Customization:</strong> Multiple themes and personalization options</li>
          </ul>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #00bfff;">
          <h3 style="color: #00bfff; margin: 0 0 12px 0;">\u{1F4A1} Getting Started</h3>
          <p style="color: #d4d4d4; margin: 0; line-height: 1.6;">
            New to Ocot Client? Check out our <strong>Getting Started</strong> guide to learn 
            the basics and start using the proxy safely and effectively.
          </p>
        </div>
      </div>
    `;
    }
    createGettingStartedView() {
      return `
      <div style="max-width: 800px;">
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">\u{1F680} Getting Started</h1>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">Step 1: Choose Your Tool</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin: 0;">
            Click any option in the sidebar to access different features. The most common starting point is the <strong>Proxy</strong> tab for web browsing.
          </p>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">Step 2: Configure Settings</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin: 0;">
            Visit the <strong>Settings</strong> tab to customize themes, proxy URLs, and privacy options. For Utopia links, make sure to turn off hidden mode in settings.
          </p>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">Step 3: Stay Hidden</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin: 0;">
            Press <kbd style="background: #23272f; padding: 2px 6px; border-radius: 4px; font-family: monospace;">\\</kbd> to quickly hide the client, or use the cloaking tools for additional privacy protection.
          </p>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #ffc107;">
          <h3 style="color: #ffc107; margin: 0 0 12px 0;">\u26A0\uFE0F Important Safety Tips</h3>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li>Always use HTTPS websites when possible</li>
            <li>Don't enter sensitive information on untrusted sites</li>
            <li>Clear your browsing data regularly</li>
            <li>Be aware of your network's acceptable use policies</li>
          </ul>
        </div>
      </div>
    `;
    }
    createProxyGuideView() {
      return `
      <div style="max-width: 800px;">
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">\u{1F310} Proxy Guide</h1>
        
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Learn how to use the proxy features effectively and safely.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F527} Proxy Settings</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            Configure your proxy server in the Settings tab. Available options:
          </p>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li><strong>Utopia Link 1:</strong> Default proxy server (recommended)</li>
            <li><strong>Example Proxy 1 & 2:</strong> Alternative proxy servers</li>
            <li><strong>Custom URL:</strong> Use your own proxy server</li>
          </ul>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F50D} Pocket Browser</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin: 0;">
            Use the Pocket Browser for isolated browsing with additional features:
          </p>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 16px 0 0 0; padding-left: 20px;">
            <li>Bookmarks (if enabled in settings)</li>
            <li>Session history tracking</li>
            <li>Custom user agent selection</li>
            <li>Built-in navigation controls</li>
          </ul>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #dc3545;">
          <h3 style="color: #dc3545; margin: 0 0 12px 0;">\u{1F6A8} Utopia Links Important Note</h3>
          <p style="color: #d4d4d4; margin: 0; line-height: 1.6;">
            <strong>Before using Utopia links in the proxy, go to settings and turn off hidden mode.</strong> This ensures proper functionality and prevents connection issues.
          </p>
        </div>
      </div>
    `;
    }
    // Add more view methods here...
    createGamesGuideView() {
      return `
      <div style="max-width: 800px;">
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">\u{1F3AE} Games Guide</h1>
        
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Access a curated collection of games organized by availability and compatibility.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F3AF} Game Categories</h2>
          <div style="display: grid; gap: 16px;">
            
            <div style="background: #23272f; border-radius: 8px; padding: 16px; border-left: 4px solid #28a745;">
              <h3 style="color: #28a745; margin: 0 0 8px 0; font-size: 1.2rem;">\u2705 Unblocked Games</h3>
              <p style="color: #d4d4d4; margin: 0; line-height: 1.5;">
                Games that are typically accessible on most networks and don't require special proxy settings. These are the safest and most reliable option for casual gaming.
              </p>
            </div>
            
            <div style="background: #23272f; border-radius: 8px; padding: 16px; border-left: 4px solid #dc3545;">
              <h3 style="color: #dc3545; margin: 0 0 8px 0; font-size: 1.2rem;">\u{1F6AB} Blocked Games</h3>
              <p style="color: #d4d4d4; margin: 0; line-height: 1.5;">
                Games that may be restricted on school or work networks. Use the main proxy feature to access these games when they're blocked.
              </p>
            </div>
            
            <div style="background: #23272f; border-radius: 8px; padding: 16px; border-left: 4px solid #007acc;">
              <h3 style="color: #007acc; margin: 0 0 8px 0; font-size: 1.2rem;">\u{1F504} CORS Proxy Optimized</h3>
              <p style="color: #d4d4d4; margin: 0; line-height: 1.5;">
                Games specifically optimized to work with CORS proxy settings. These games have been tested to work well with the proxy system for better performance.
              </p>
            </div>
            
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F3AE} How to Access Games</h2>
          <div style="display: grid; gap: 20px;">
            
            <div>
              <h3 style="color: #d4d4d4; margin: 0 0 8px 0; font-size: 1.1rem;">Step 1: Navigate to Games</h3>
              <p style="color: #7d8590; margin: 0; line-height: 1.5;">
                Click on <strong>"Games List"</strong> in the sidebar to access the games collection.
              </p>
            </div>
            
            <div>
              <h3 style="color: #d4d4d4; margin: 0 0 8px 0; font-size: 1.1rem;">Step 2: Choose Category</h3>
              <p style="color: #7d8590; margin: 0; line-height: 1.5;">
                Use the tabs at the top (Blocked, Unblocked, CORS Optimized) to filter games by type.
              </p>
            </div>
            
            <div>
              <h3 style="color: #d4d4d4; margin: 0 0 8px 0; font-size: 1.1rem;">Step 3: Click to Play</h3>
              <p style="color: #7d8590; margin: 0; line-height: 1.5;">
                Click on any game title to open it in a new tab. Games will open directly in your browser.
              </p>
            </div>
            
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F6E0}\uFE0F Troubleshooting Games</h2>
          
          <div style="margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Game Won't Load?</h3>
            <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>Try switching to the main <strong>Proxy</strong> tab and accessing the game through there</li>
              <li>Check if the game is in the "Blocked" category - it may need proxy access</li>
              <li>Clear your browser cache and cookies</li>
              <li>Try a different browser or incognito/private mode</li>
            </ul>
          </div>
          
          <div style="margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Game Running Slowly?</h3>
            <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
              <li>Try games from the "Unblocked" category first - they're optimized for direct access</li>
              <li>Close other tabs and applications to free up system resources</li>
              <li>Check your internet connection speed</li>
              <li>Try games from the "CORS Proxy Optimized" category for better proxy performance</li>
            </ul>
          </div>
          
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #8b5cf6;">
          <h3 style="color: #8b5cf6; margin: 0 0 12px 0;">\u{1F4A1} Pro Tips</h3>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li><strong>Start with Unblocked:</strong> Try the "Unblocked" category first for the best experience</li>
            <li><strong>Use Cloaking:</strong> Enable tab cloaking from the sidebar to hide your gaming activity</li>
            <li><strong>Bookmark Favorites:</strong> Use the Pocket Browser's bookmark feature to save your favorite games</li>
            <li><strong>Network Awareness:</strong> Be mindful of your network's policies regarding gaming</li>
            <li><strong>Performance:</strong> CORS Optimized games are tested to work well with proxy settings</li>
          </ul>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 20px; border-left: 4px solid #dc3545; margin-top: 24px; word-wrap: break-word; overflow-wrap: break-word;">
          <h3 style="color: #dc3545; margin: 0 0 12px 0;">\u26A0\uFE0F Important Notes</h3>
          <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 18px;">
            <li style="margin-bottom: 6px;">Games open in new tabs - make sure your browser allows popups</li>
            <li style="margin-bottom: 6px;">Some games may require Flash or specific plugins</li>
            <li style="margin-bottom: 6px;">Respect your network's acceptable use policy when gaming</li>
            <li style="margin-bottom: 0;">If a game doesn't work, try the main Proxy tab instead</li>
          </ul>
        </div>
        
      </div>
    `;
    }
    createPrivacyToolsView() {
      return `
      <div style="max-width: 800px;">
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">\u{1F3AD} Privacy Tools</h1>
        
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Protect your privacy and maintain anonymity with our comprehensive suite of privacy tools.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F3AD} Tab Cloaking</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            Disguise your browser tab to look like a different website or application. Perfect for maintaining privacy in shared environments.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">How to Use:</h3>
            <ol style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Click "Cloaking" in the sidebar</li>
              <li>Choose from preset options (Google, Classroom, etc.)</li>
              <li>Or create custom tab title and favicon</li>
              <li>Your tab will instantly disguise itself</li>
            </ol>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #28a745;">
            <strong style="color: #28a745;">Pro Tip:</strong> 
            <span style="color: #d4d4d4;">Use academic or work-related cloaking options for better disguise in school/work environments.</span>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F30A} History Flooding</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            Fill your browser history with legitimate-looking entries to obscure your actual browsing activity.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Features:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Floods history with educational websites</li>
              <li>Customizable flood intensity and duration</li>
              <li>Runs in background without interrupting browsing</li>
              <li>Uses realistic browsing patterns</li>
            </ul>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #dc3545;">
            <strong style="color: #dc3545;">Warning:</strong> 
            <span style="color: #d4d4d4;">Use responsibly - this will add many entries to your browser history.</span>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F504} CORS Proxy</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            Bypass Cross-Origin Resource Sharing (CORS) restrictions for API requests and web applications.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Use Cases:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Access APIs that block direct browser requests</li>
              <li>Test web applications with external APIs</li>
              <li>Bypass CORS restrictions for development</li>
              <li>Access web services from client-side applications</li>
            </ul>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #007acc;">
            <strong style="color: #007acc;">Developer Note:</strong> 
            <span style="color: #d4d4d4;">Primarily useful for developers and advanced users working with APIs.</span>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F50D} Pocket Browser</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            Isolated browsing environment with enhanced privacy features and customizable settings.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Privacy Features:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Session-based history (clears on restart)</li>
              <li>Optional bookmarks with privacy controls</li>
              <li>Custom user agent selection</li>
              <li>Isolated from main browser session</li>
              <li>Built-in navigation controls</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Configuration:</h3>
            <p style="color: #d4d4d4; line-height: 1.5; margin: 0;">
              Visit <strong>Settings \u2192 Pocket Browser Settings</strong> to enable/disable bookmarks, history tracking, and select user agents for maximum privacy.
            </p>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F4DC} Custom Scripts</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            Run custom JavaScript utilities and automation scripts for enhanced functionality and privacy.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Available Scripts:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Website unblockers and bypass tools</li>
              <li>Privacy enhancement scripts</li>
              <li>Automation and productivity tools</li>
              <li>Custom bookmarklets for quick actions</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #8b5cf6; margin-bottom: 30px;">
          <h3 style="color: #8b5cf6; margin: 0 0 12px 0;">\u{1F6E1}\uFE0F Privacy Best Practices</h3>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li><strong>Layer your privacy:</strong> Use multiple tools together for maximum protection</li>
            <li><strong>Regular cleanup:</strong> Clear cookies, cache, and browsing data frequently</li>
            <li><strong>Incognito mode:</strong> Combine tools with private/incognito browsing</li>
            <li><strong>Network awareness:</strong> Be mindful of your network's monitoring capabilities</li>
            <li><strong>Tool rotation:</strong> Vary your privacy tool usage patterns</li>
          </ul>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 20px; border-left: 4px solid #dc3545; word-wrap: break-word; overflow-wrap: break-word;">
          <h3 style="color: #dc3545; margin: 0 0 12px 0;">\u26A0\uFE0F Important Disclaimers</h3>
          <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 18px;">
            <li style="margin-bottom: 6px;">Privacy tools provide protection but are not 100% foolproof</li>
            <li style="margin-bottom: 6px;">Some tools may affect browser performance or functionality</li>
            <li style="margin-bottom: 0;">Use responsibly and respect others' privacy and security</li>
          </ul>
        </div>
        
      </div>
    `;
    }
    createDeveloperToolsView() {
      return `
      <div style="max-width: 800px;">
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">\u{1F4BB} Developer Tools</h1>
        
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Built-in development utilities designed for productivity, testing, and web development tasks.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F5A5}\uFE0F JavaScript Console</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            A fully-featured JavaScript console for testing, debugging, and executing code snippets directly within the browser.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 12px 0; font-size: 1.1rem;">Features:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li><strong>Code Execution:</strong> Run JavaScript code with real-time output</li>
              <li><strong>Error Handling:</strong> Clear error messages and stack traces</li>
              <li><strong>Auto-clear:</strong> Optional automatic clearing of output</li>
              <li><strong>Multi-line Support:</strong> Execute complex scripts and functions</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">How to Use:</h3>
            <ol style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Navigate to <strong>"Console"</strong> in the sidebar</li>
              <li>Type JavaScript code in the input field</li>
              <li>View results and errors in the output area</li>
            </ol>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #28a745;">
            <strong style="color: #28a745;">Pro Tip:</strong> 
            <span style="color: #d4d4d4;">Use <code style="background: #23272f; padding: 2px 4px; border-radius: 3px; color: #ffc107;">console.log()</code>, <code style="background: #23272f; padding: 2px 4px; border-radius: 3px; color: #ffc107;">console.error()</code>, and <code style="background: #23272f; padding: 2px 4px; border-radius: 3px; color: #ffc107;">console.table()</code> for structured output.</span>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F522} Calculator</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            A powerful calculator with support for basic arithmetic, advanced mathematical functions, and scientific operations.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 12px 0; font-size: 1.1rem;">Supported Operations:</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div>
                <h4 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1rem;">Basic Arithmetic:</h4>
                <ul style="color: #d4d4d4; line-height: 1.4; margin: 0; padding-left: 16px; font-size: 0.9rem;">
                  <li>Addition (+), Subtraction (-)</li>
                  <li>Multiplication (*), Division (/)</li>
                  <li>Exponentiation (**)</li>
                  <li>Modulo (%), Parentheses</li>
                </ul>
              </div>
              <div>
                <h4 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1rem;">Advanced Functions:</h4>
                <ul style="color: #d4d4d4; line-height: 1.4; margin: 0; padding-left: 16px; font-size: 0.9rem;">
                  <li>Advanced mathematical operations</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Features:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li><strong>Error Handling:</strong> Clear messages for invalid expressions</li>
              <li><strong>Copy Results:</strong> Easy copying of calculation results</li>
            </ul>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #007acc;">
            <strong style="color: #007acc;">Example:</strong> 
            <span style="color: #d4d4d4;">Try <code style="background: #23272f; padding: 2px 4px; border-radius: 3px; color: #ffc107;">2*16</code> or <code style="background: #23272f; padding: 2px 4px; border-radius: 3px; color: #ffc107;">23*21</code></span>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F4DD} Notes & Productivity</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            A simple but powerful note-taking tool with persistence for quick thoughts and code snippets.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 12px 0; font-size: 1.1rem;">Features:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li><strong>Auto-save:</strong> Notes are automatically saved to local storage</li>
              <li><strong>Persistent Storage:</strong> Your notes survive browser restarts</li>
              <li><strong>Large Text Area:</strong> Comfortable writing space</li>
              <li><strong>Quick Access:</strong> Always available from the sidebar</li>
              <li><strong>Privacy:</strong> Notes stored locally, never sent to servers</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Use Cases:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Temporary code snippets and testing</li>
              <li>Quick thoughts and reminders</li>
              <li>URL collections and bookmarks</li>
              <li>Meeting notes and study materials</li>
              <li>Draft messages and text formatting</li>
            </ul>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #28a745;">
            <strong style="color: #28a745;">Privacy Note:</strong> 
            <span style="color: #d4d4d4;">All notes are stored locally in your browser and never transmitted to external servers.</span>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F516} Bookmarklets Collection</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            A curated collection of useful JavaScript bookmarklets for web development, productivity, and site enhancement.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 12px 0; font-size: 1.1rem;">Available Categories:</h3>
            <div style="display: grid; gap: 12px;">
              <div>
                <h4 style="color: #00bfff; margin: 0 0 6px 0; font-size: 1rem;">\u{1F6E0}\uFE0F Development Tools:</h4>
                <ul style="color: #d4d4d4; line-height: 1.4; margin: 0; padding-left: 16px; font-size: 0.9rem;">
                  <li>Page structure analyzers and DOM inspectors</li>
                  <li>CSS debugging and style inspection tools</li>
                  <li>Accessibility checking utilities</li>
                </ul>
              </div>
              <div>
                <h4 style="color: #00bfff; margin: 0 0 6px 0; font-size: 1rem;">\u{1F4CA} Productivity Tools:</h4>
                <ul style="color: #d4d4d4; line-height: 1.4; margin: 0; padding-left: 16px; font-size: 0.9rem;">
                  <li>Text selection and manipulation tools</li>
                  <li>URL and link extraction utilities</li>
                  <li>Page modification and enhancement scripts</li>
                </ul>
              </div>
              <div>
                <h4 style="color: #00bfff; margin: 0 0 6px 0; font-size: 1rem;">\u{1F527} Utility Scripts:</h4>
                <ul style="color: #d4d4d4; line-height: 1.4; margin: 0; padding-left: 16px; font-size: 0.9rem;">
                  <li>Website unblockers and bypass tools</li>
                  <li>Content extraction and formatting</li>
                  <li>Custom page styling and theming</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">How to Use Bookmarklets:</h3>
            <ol style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Navigate to <strong>"Bookmarklets"</strong> in the sidebar</li>
              <li>Browse available tools</li>
              <li>Click on any bookmarklet to execute it on the current page</li>
              <li>Bookmarklets can be dragged to your browser's bookmark bar</li>
              <li>Results appear immediately or open in new windows</li>
            </ol>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #ffc107;">
            <strong style="color: #ffc107;">Safety Note:</strong> 
            <span style="color: #d4d4d4;">Only use bookmarklets on sites you trust. Some may modify page content or behavior.</span>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F4DC} Custom Scripts</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            Advanced JavaScript utilities and automation scripts for power users and developers.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 12px 0; font-size: 1.1rem;">Script Categories:</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li><strong>Website Unblockers:</strong> Scripts to bypass common web filters</li>
              <li><strong>Privacy Enhancers:</strong> Tools for improved online privacy</li>
              <li><strong>Developer Utilities:</strong> Advanced debugging and development aids</li>
              <li><strong>Custom Functions:</strong> Specialized scripts for specific use cases</li>
            </ul>
          </div>
          
          <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #dc3545;">
            <strong style="color: #dc3545;">Advanced User Warning:</strong> 
            <span style="color: #d4d4d4;">These scripts execute powerful JavaScript code. Only use if you understand the implications.</span>
          </div>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #8b5cf6; margin-bottom: 30px;">
          <h3 style="color: #8b5cf6; margin: 0 0 12px 0;">\u{1F680} Development Tips & Tricks</h3>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li><strong>Console Commands:</strong> Use the console for quick DOM manipulation: <code style="background: #23272f; padding: 2px 4px; border-radius: 3px; color: #ffc107;">document.querySelector()</code></li>
            <li><strong>Bookmarklet Creation:</strong> Create custom bookmarklets by prefixing code with <code style="background: #23272f; padding: 2px 4px; border-radius: 3px; color: #ffc107;">javascript:</code></li>
            <li><strong>Local Storage:</strong> All tools respect browser privacy and use local storage only</li>
          </ul>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #007acc; margin-bottom: 30px;">
          <h3 style="color: #007acc; margin: 0 0 12px 0;">\u{1F3AF} Common Use Cases</h3>
          
          <div style="margin-bottom: 16px;">
            <h4 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">For Students:</h4>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Calculator for math homework and assignments</li>
              <li>Notes for quick study materials and reminders</li>
              <li>Console for learning JavaScript and programming concepts</li>
            </ul>
          </div>
          
          <div style="margin-bottom: 16px;">
            <h4 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">For Developers:</h4>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Console for testing JavaScript code and debugging</li>
              <li>Bookmarklets for web development and site analysis</li>
              <li>Notes for code snippets and documentation</li>
              <li>Custom scripts for automation and productivity</li>
            </ul>
          </div>
          
          <div>
            <h4 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">For General Users:</h4>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Calculator for daily calculations</li>
              <li>Notes for temporary text storage and drafts</li>
              <li>Bookmarklets for enhanced web browsing experience</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 20px; border-left: 4px solid #28a745; word-wrap: break-word; overflow-wrap: break-word;">
          <h3 style="color: #28a745; margin: 0 0 12px 0;">\u2728 Getting Started with Developer Tools</h3>
          <ol style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 18px;">
            <li style="margin-bottom: 6px;"><strong>Start with the Calculator:</strong> Test basic mathematical operations</li>
            <li style="margin-bottom: 6px;"><strong>Try the Console:</strong> Execute simple JavaScript commands like <code style="background: #23272f; padding: 1px 3px; border-radius: 3px; color: #ffc107;">alert('Hello!')</code></li>
            <li style="margin-bottom: 6px;"><strong>Use Notes:</strong> Save useful code snippets and reminders</li>
            <li style="margin-bottom: 6px;"><strong>Explore Bookmarklets:</strong> Find tools that enhance your browsing experience</li>
            <li style="margin-bottom: 0;"><strong>Advanced Scripts:</strong> Only use if you're comfortable with JavaScript execution</li>
          </ol>
        </div>
        
      </div>
    `;
    }
    createTroubleshootingView() {
      return `
      <div style="max-width: 800px;">
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">\u{1F527} Troubleshooting</h1>
        
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Common issues and solutions for using Ocot Client effectively in different environments.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F310} Proxy Issues</h2>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #dc3545; margin: 0 0 12px 0; font-size: 1.1rem;">\u{1F6A8} Utopia Links Not Working</h3>
            <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 12px;">
              <strong>Problem:</strong> Utopia proxy links fail to load or show connection errors.
            </p>
            <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 12px;">
              <strong>Solution:</strong> Before using Utopia links in the proxy, you must disable hidden mode:
            </p>
            <ol style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Click <strong>"Settings"</strong> in the sidebar</li>
              <li>Find the <strong>"Hidden Mode"</strong> toggle</li>
              <li>Turn OFF hidden mode</li>
              <li>Try accessing Utopia links again</li>
            </ol>
            <div style="background: #1f2937; border-radius: 6px; padding: 12px; margin-top: 12px; border-left: 3px solid #ffc107;">
              <strong style="color: #ffc107;">Important:</strong> 
              <span style="color: #d4d4d4;">This setting is required for Utopia proxy functionality to work properly.</span>
            </div>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Proxy Won't Load Websites</h3>
            <div style="margin-bottom: 12px;">
              <p style="color: #d4d4d4; line-height: 1.5; margin: 0 0 8px 0;"><strong>Try these solutions:</strong></p>
              <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
                <li>Check your internet connection</li>
                <li>Try a different proxy server in Settings</li>
                <li>Clear browser cache and cookies</li>
                <li>Disable browser extensions temporarily</li>
                <li>Try using incognito/private mode</li>
              </ul>
            </div>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Slow Proxy Performance</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Switch to a different proxy server in Settings</li>
              <li>Close unnecessary browser tabs</li>
              <li>Check if your network is throttling proxy connections</li>
              <li>Try using the proxy during off-peak hours</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F516} Bookmarklets Issues</h2>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #dc3545; margin: 0 0 12px 0; font-size: 1.1rem;">\u{1F3EB} School Computer Restrictions</h3>
            <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 12px;">
              <strong>Problem:</strong> Bookmarklets don't work on school computers with Chrome or Edge.
            </p>
            <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 12px;">
              <strong>Solution:</strong> Use Firefox browser instead:
            </p>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0 0 12px 0; padding-left: 20px;">
              <li>Bookmarklets typically work better on Firefox in restricted environments</li>
              <li>School IT policies often block JavaScript execution in Chrome/Edge</li>
              <li>Firefox may have fewer restrictions on bookmarklet execution</li>
              <li>If Firefox isn't available, try using the main proxy feature instead</li>
            </ul>
            <div style="background: #1f2937; border-radius: 6px; padding: 12px; border-left: 3px solid #007acc;">
              <strong style="color: #007acc;">Pro Tip:</strong> 
              <span style="color: #d4d4d4;">If bookmarklets are completely blocked, use the Scripts section which may have alternative solutions.</span>
            </div>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Bookmarklets Not Executing</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Make sure JavaScript is enabled in your browser</li>
              <li>Check if popup blockers are interfering</li>
              <li>Try refreshing the page and running the bookmarklet again</li>
              <li>Some bookmarklets only work on specific types of websites</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Bookmarklet Installation Issues</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Try right-clicking and selecting "Bookmark this link"</li>
              <li>Manually copy the bookmarklet code and create a new bookmark</li>
              <li>Ensure the bookmark URL starts with <code style="background: #1f2937; padding: 1px 3px; border-radius: 3px; color: #ffc107;">javascript:</code></li>
              <li>Test the bookmarklet on a simple webpage first</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F3AE} Games Issues</h2>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Games Won't Load</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Try games from the "Unblocked" category first</li>
              <li>If blocked games don't work, use the main Proxy tab</li>
              <li>Check if Flash Player or other plugins are required</li>
              <li>Allow popups in your browser settings</li>
              <li>Try a different browser or incognito mode</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Poor Game Performance</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Close other browser tabs and applications</li>
              <li>Try games from "CORS Proxy Optimized" category</li>
              <li>Lower game quality settings if available</li>
              <li>Check your internet connection speed</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F4BB} Developer Tools Issues</h2>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Console Not Working</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Refresh the page and try again</li>
              <li>Check if JavaScript is enabled in your browser</li>
              <li>Try simpler commands first (like <code style="background: #1f2937; padding: 1px 3px; border-radius: 3px; color: #ffc107;">2+2</code>)</li>
              <li>Clear browser cache if console appears frozen</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Calculator Issues</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Make sure to use proper mathematical syntax</li>
              <li>Use * for multiplication, not x</li>
              <li>Check parentheses are balanced</li>
              <li>Try simpler calculations first</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Notes Not Saving</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Check if local storage is enabled in your browser</li>
              <li>Try typing something and refreshing the page</li>
              <li>Clear browser data and test again</li>
              <li>Incognito mode may prevent saving</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">\u{1F3AD} Privacy Tools Issues</h2>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">Tab Cloaking Not Working</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Refresh the page after applying cloaking</li>
              <li>Try a different cloaking preset</li>
              <li>Check if browser extensions are interfering</li>
              <li>Some browsers may prevent favicon changes</li>
            </ul>
          </div>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 8px 0; font-size: 1.1rem;">History Flooding Issues</h3>
            <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 20px;">
              <li>Allow popups in your browser for history flooding to work</li>
              <li>The process may be slow - be patient</li>
              <li>Some browsers may block rapid history additions</li>
              <li>Check browser console for any error messages</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #28a745; margin-bottom: 30px;">
          <h3 style="color: #28a745; margin: 0 0 12px 0;">\u{1F4A1} General Tips</h3>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li><strong>Browser Compatibility:</strong> Chrome, Firefox, and Edge are recommended</li>
            <li><strong>JavaScript Required:</strong> Most features need JavaScript enabled</li>
            <li><strong>Popup Blockers:</strong> Disable popup blockers for full functionality</li>
            <li><strong>Incognito Mode:</strong> Some features may not persist in private browsing</li>
            <li><strong>Network Restrictions:</strong> School/work networks may block certain features</li>
            <li><strong>Regular Updates:</strong> Clear cache occasionally for best performance</li>
          </ul>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 20px; border-left: 4px solid #007acc; word-wrap: break-word; overflow-wrap: break-word;">
          <h3 style="color: #007acc; margin: 0 0 12px 0;">\u{1F198} Still Having Issues?</h3>
          <p style="color: #d4d4d4; line-height: 1.5; margin: 0 0 12px 0;">
            If problems persist after trying these solutions:
          </p>
          <ul style="color: #d4d4d4; line-height: 1.5; margin: 0; padding-left: 18px;">
            <li style="margin-bottom: 6px;">Try using a different browser (Firefox recommended for school computers)</li>
            <li style="margin-bottom: 6px;">Test in incognito/private mode to rule out extensions</li>
            <li style="margin-bottom: 6px;">Check if the issue occurs on different networks</li>
            <li style="margin-bottom: 0;">Consider using alternative tools within Ocot Client</li>
          </ul>
        </div>
        
      </div>
    `;
    }
    createApiReferenceView() {
      return `<div style="max-width: 800px;"><h1 style="color: #00bfff;">\u{1F4D6} API Reference</h1><p style="color: #d4d4d4;">API documentation coming soon...</p></div>`;
    }
  };
  var docsApp = null;
  function openDocumentationApp() {
    if (!docsApp) {
      docsApp = new OcotDocsApp();
    }
    docsApp.open();
  }

  // src/views/settings.js
  function createSettingsView() {
    injectAppCSS();
    const settingsView = document.createElement("div");
    settingsView.className = "card-grid-view";
    settingsView.style.display = "none";
    settingsView.innerHTML = `
    <div class="settings-header" style="margin-bottom: 30px;">
      <h2 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1.5rem;">Settings</h2>
      <p style="color: #aaa; margin: 0; font-size: 0.95rem;">Customize your Ocot Client experience</p>
    </div>

    <div class="settings-content" style="display: flex; flex-direction: column; gap: 30px;">
      
      <!-- Themes Section -->
      <div class="settings-section themes-section">
        <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
          \u{1F3A8} Themes
        </h3>
        <p style="color: #aaa; margin: 0 0 16px 0; font-size: 0.9rem;">
          Customize the appearance of your Ocot Client
        </p>
        <div class="theme-options" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
          <div class="theme-option" data-theme="default" style="background: #292d36; border: 2px solid #404040; border-radius: 8px; padding: 16px; cursor: pointer; transition: all 0.2s;">
            <div class="theme-preview" style="display: flex; gap: 8px; margin-bottom: 8px;">
              <div style="width: 20px; height: 20px; background: #23272f; border-radius: 4px;"></div>
              <div style="width: 20px; height: 20px; background: #007acc; border-radius: 4px;"></div>
              <div style="width: 20px; height: 20px; background: #292d36; border-radius: 4px;"></div>
            </div>
            <div style="color: #fff; font-weight: 600;">Default Dark</div>
            <div style="color: #aaa; font-size: 0.85rem;">Classic dark theme</div>
          </div>
          
          <div class="theme-option" data-theme="blue" style="background: #292d36; border: 2px solid #404040; border-radius: 8px; padding: 16px; cursor: pointer; transition: all 0.2s;">
            <div class="theme-preview" style="display: flex; gap: 8px; margin-bottom: 8px;">
              <div style="width: 20px; height: 20px; background: #1a1f2e; border-radius: 4px;"></div>
              <div style="width: 20px; height: 20px; background: #0066cc; border-radius: 4px;"></div>
              <div style="width: 20px; height: 20px; background: #2a3040; border-radius: 4px;"></div>
            </div>
            <div style="color: #fff; font-weight: 600;">Ocean Blue</div>
            <div style="color: #aaa; font-size: 0.85rem;">Cool blue tones</div>
          </div>
          
          <div class="theme-option" data-theme="purple" style="background: #292d36; border: 2px solid #404040; border-radius: 8px; padding: 16px; cursor: pointer; transition: all 0.2s;">
            <div class="theme-preview" style="display: flex; gap: 8px; margin-bottom: 8px;">
              <div style="width: 20px; height: 20px; background: #2a1f3d; border-radius: 4px;"></div>
              <div style="width: 20px; height: 20px; background: #8b5cf6; border-radius: 4px;"></div>
              <div style="width: 20px; height: 20px; background: #3d2a54; border-radius: 4px;"></div>
            </div>
            <div style="color: #fff; font-weight: 600;">Purple Haze</div>
            <div style="color: #aaa; font-size: 0.85rem;">Rich purple theme</div>
          </div>
          
          <div class="theme-option" data-theme="green" style="background: #292d36; border: 2px solid #404040; border-radius: 8px; padding: 16px; cursor: pointer; transition: all 0.2s;">
            <div class="theme-preview" style="display: flex; gap: 8px; margin-bottom: 8px;">
              <div style="width: 20px; height: 20px; background: #1f2f1f; border-radius: 4px;"></div>
              <div style="width: 20px; height: 20px; background: #10b981; border-radius: 4px;"></div>
              <div style="width: 20px; height: 20px; background: #2d3f2d; border-radius: 4px;"></div>
            </div>
            <div style="color: #fff; font-weight: 600;">Matrix Green</div>
            <div style="color: #aaa; font-size: 0.85rem;">Terminal inspired</div>
          </div>
          
          <div class="theme-option" data-theme="red" style="background: #292d36; border: 2px solid #404040; border-radius: 8px; padding: 16px; cursor: pointer; transition: all 0.2s;">
            <div class="theme-preview" style="display: flex; gap: 8px; margin-bottom: 8px;">
              <div style="width: 20px; height: 20px; background: #3d1f1f; border-radius: 4px;"></div>
              <div style="width: 20px; height: 20px; background: #dc2626; border-radius: 4px;"></div>
              <div style="width: 20px; height: 20px; background: #4a2929; border-radius: 4px;"></div>
            </div>
            <div style="color: #fff; font-weight: 600;">Crimson Red</div>
            <div style="color: #aaa; font-size: 0.85rem;">Bold and striking</div>
          </div>
        </div>
      </div>

      <!-- Proxy Settings Section -->
      <div class="settings-section proxy-section">
        <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
          \u{1F310} Proxy Settings
        </h3>
        <p style="color: #aaa; margin: 0 0 16px 0; font-size: 0.9rem;">
          Configure your proxy server URL
        </p>
        <div class="proxy-options" style="display: grid; gap: 16px;">
          <div class="setting-item" style="background: #292d36; border-radius: 8px; padding: 16px;">
            <label style="color: #00bfff; font-weight: 600; margin-bottom: 12px; display: block;">
              Proxy Server
            </label>
            <select id="proxy-server-select" style="width: 100%; padding: 10px; background: #23272f; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 0.9rem; margin-bottom: 12px;">
              <option value="utopia1">Utopia Link 1 (Default)</option>
              <option value="example1">Example Proxy 1</option>
              <option value="example2">Example Proxy 2</option>
              <option value="custom">Custom URL</option>
            </select>
            <div id="custom-proxy-input" style="display: none;">
              <input type="text" id="custom-proxy-url" placeholder="Enter custom proxy URL (e.g., proxy.example.com)" 
                     style="width: 100%; padding: 10px; background: #23272f; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 0.9rem;">
              <div style="color: #aaa; font-size: 0.8rem; margin-top: 4px;">
                Protocol (https:// or http://) will be added automatically if not specified
              </div>
            </div>
            <div style="color: #aaa; font-size: 0.8rem; margin-top: 8px;">
              Select the proxy server to use for web browsing. Changes take effect after reopening the proxy tab.
            </div>
          </div>
        </div>
        
        <div style="margin-top: 16px; display: flex; gap: 12px;">
          <button id="save-proxy-settings" class="games-tab" style="border-radius: 6px; background: #28a745;">
            \u{1F4BE} Save Proxy Settings
          </button>
          <button id="reset-proxy-settings" class="games-tab" style="border-radius: 6px; background: #6c757d;">
            \u{1F504} Reset to Default
          </button>
        </div>
      </div>

      <!-- Pocket Browser Settings Section -->
      <div class="settings-section browser-section">
        <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
          \u{1F50D} Pocket Browser Settings
        </h3>
        <p style="color: #aaa; margin: 0 0 16px 0; font-size: 0.9rem;">
          Configure your browsing experience
        </p>
        <div class="browser-options" style="display: grid; gap: 16px;">
          <div class="setting-item" style="background: #292d36; border-radius: 8px; padding: 16px;">
            <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">
              Default Homepage
            </label>
            <input type="text" id="homepage-input" placeholder="https://google.com?igu=1" 
                   style="width: 100%; padding: 10px; background: #23272f; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 0.9rem;">
            <div style="color: #aaa; font-size: 0.8rem; margin-top: 4px;">
              Set the default page when opening Pocket Browser
            </div>
          </div>
          
          <div class="setting-item" style="background: #292d36; border-radius: 8px; padding: 16px;">
            <label style="color: #00bfff; font-weight: 600; margin-bottom: 12px; display: block;">
              Browser Features
            </label>
            <div style="display: grid; gap: 8px;">
              <label style="display: flex; align-items: center; gap: 8px; color: #fff; cursor: pointer;">
                <input type="checkbox" id="enable-history" checked style="margin: 0;">
                <span>Enable browsing history</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; color: #fff; cursor: pointer;">
                <input type="checkbox" id="enable-bookmarks" checked style="margin: 0;">
                <span>Enable bookmarks</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; color: #fff; cursor: pointer;">
                <input type="checkbox" id="enable-popup-blocker" checked style="margin: 0;">
                <span>Block popups</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; color: #fff; cursor: pointer;">
                <input type="checkbox" id="enable-safe-search" style="margin: 0;">
                <span>Enable safe search</span>
              </label>
            </div>
          </div>
          
          <div class="setting-item" style="background: #292d36; border-radius: 8px; padding: 16px;">
            <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">
              User Agent
            </label>
            <select id="user-agent-select" style="width: 100%; padding: 10px; background: #23272f; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 0.9rem;">
              <option value="default">Default</option>
              <option value="chrome">Chrome Desktop</option>
              <option value="firefox">Firefox Desktop</option>
              <option value="safari">Safari Desktop</option>
              <option value="mobile">Mobile Browser</option>
            </select>
            <div style="color: #aaa; font-size: 0.8rem; margin-top: 4px;">
              Change how websites see your browser
            </div>
          </div>
        </div>
        
        <div style="margin-top: 16px; display: flex; gap: 12px;">
          <button id="save-browser-settings" class="games-tab" style="border-radius: 6px; background: #28a745;">
            \u{1F4BE} Save Settings
          </button>
          <button id="reset-browser-settings" class="games-tab" style="border-radius: 6px; background: #6c757d;">
            \u{1F504} Reset to Default
          </button>
        </div>
      </div>

      <!-- Help Section -->
      <div class="settings-section help-section">
        <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
          \u2753 Help & Support
        </h3>
        <div class="help-content" style="background: #292d36; border-radius: 8px; padding: 20px;">
          <div style="color: #aaa; line-height: 1.6;">
            <h4 style="color: #00bfff; margin: 0 0 12px 0; font-size: 1.1rem;">Getting Started</h4>
            <p style="margin: 0 0 12px 0;">
              Welcome to Ocot Client! This powerful tool provides various utilities for web browsing and productivity.
            </p>
            
            <h4 style="color: #00bfff; margin: 16px 0 12px 0; font-size: 1.1rem;">Features Overview</h4>
            <ul style="margin: 0 0 12px 0; padding-left: 20px;">
              <li style="margin-bottom: 6px;"><strong>Proxy:</strong> Browse websites through proxy servers</li>
              <li style="margin-bottom: 6px;"><strong>Games:</strong> Access a collection of web games</li>
              <li style="margin-bottom: 6px;"><strong>Scripts:</strong> Run useful JavaScript utilities</li>
              <li style="margin-bottom: 6px;"><strong>Pocket Browser:</strong> Embedded browser with privacy features</li>
              <li style="margin-bottom: 6px;"><strong>Tools:</strong> Calculator, Notes, Console, and more</li>
            </ul>
            
            <h4 style="color: #00bfff; margin: 16px 0 12px 0; font-size: 1.1rem;">Keyboard Shortcuts</h4>
            <p style="margin: 0 0 12px 0;">
              \u2022 Press <kbd style="background: #23272f; padding: 2px 6px; border-radius: 4px; font-family: monospace;">\\</kbd> to show/hide the Ocot Client
            </p>
            <p style="margin: 0 0 12px 0;">
              \u2022 Press <kbd style="background: #23272f; padding: 2px 6px; border-radius: 4px; font-family: monospace;">Esc</kbd> to exit full screen in proxy tab.
            </p>
            
            <h4 style="color: #00bfff; margin: 16px 0 12px 0; font-size: 1.1rem;">Tips & Tricks</h4>
            <p style="margin: 0 0 6px 0;">
              \u2022 Customize themes in the Settings tab for a personalized experience
            </p>
            <p style="margin: 0 0 6px 0;">
              \u2022 Use the Cloaking feature to disguise your browser tab
            </p>
            <p style="margin: 0 0 6px 0;">
              \u2022 The Notes feature saves automatically to local storage
            </p>
            
            <div style="background: #2a1f3d; border-radius: 6px; padding: 12px; margin-top: 16px; border-left: 4px solid #8b5cf6;">
              <strong style="color: #8b5cf6;">Important:</strong> For Utopia links (in the proxy), before using go to settings and turn off hidden mode.
            </div>
            
            <div style="background: #23272f; border-radius: 6px; padding: 12px; margin-top: 16px; border-left: 4px solid #00bfff;">
              <strong style="color: #00bfff;">Note:</strong> This help section will be expanded with more detailed documentation and troubleshooting guides in future updates.
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
    setTimeout(() => {
      setupSettingsEventListeners();
    }, 0);
    return settingsView;
  }
  function setupSettingsEventListeners() {
    const themeOptions = document.querySelectorAll(".theme-option");
    themeOptions.forEach((option) => {
      option.addEventListener("click", () => {
        const theme = option.getAttribute("data-theme");
        applyTheme(theme);
        themeOptions.forEach((opt) => opt.style.borderColor = "#404040");
        option.style.borderColor = "#00bfff";
        localStorage.setItem("proxyClientTheme", theme);
      });
    });
    const savedTheme = localStorage.getItem("proxyClientTheme") || "default";
    applyTheme(savedTheme);
    const savedThemeOption = document.querySelector(
      `[data-theme="${savedTheme}"]`
    );
    if (savedThemeOption) {
      savedThemeOption.style.borderColor = "#00bfff";
    }
    const saveButton = document.getElementById("save-browser-settings");
    const resetButton = document.getElementById("reset-browser-settings");
    if (saveButton) {
      saveButton.addEventListener("click", saveBrowserSettings);
    }
    if (resetButton) {
      resetButton.addEventListener("click", resetBrowserSettings);
    }
    const proxyServerSelect = document.getElementById("proxy-server-select");
    const customProxyInput = document.getElementById("custom-proxy-input");
    const saveProxyButton = document.getElementById("save-proxy-settings");
    const resetProxyButton = document.getElementById("reset-proxy-settings");
    if (proxyServerSelect) {
      proxyServerSelect.addEventListener("change", () => {
        const isCustom = proxyServerSelect.value === "custom";
        if (customProxyInput) {
          customProxyInput.style.display = isCustom ? "block" : "none";
        }
      });
    }
    if (saveProxyButton) {
      saveProxyButton.addEventListener("click", saveProxySettings);
    }
    if (resetProxyButton) {
      resetProxyButton.addEventListener("click", resetProxySettings);
    }
    loadBrowserSettings();
    loadProxySettings();
    const browserInputs = [
      "homepage-input",
      "enable-history",
      "enable-bookmarks",
      "enable-popup-blocker",
      "enable-safe-search",
      "user-agent-select"
    ];
    browserInputs.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        if (element.type === "checkbox") {
          element.addEventListener("change", saveBrowserSettings);
        } else {
          element.addEventListener("change", saveBrowserSettings);
          element.addEventListener("input", saveBrowserSettings);
        }
      }
    });
  }
  function applyTheme(themeName) {
    const root = document.documentElement;
    switch (themeName) {
      case "blue":
        root.style.setProperty("--bg-primary", "#1a1f2e");
        root.style.setProperty("--bg-secondary", "#2a3040");
        root.style.setProperty("--accent-color", "#0066cc");
        root.style.setProperty("--accent-hover", "#0052a3");
        root.style.setProperty("--accent-color-rgb", "0, 102, 204");
        break;
      case "purple":
        root.style.setProperty("--bg-primary", "#2a1f3d");
        root.style.setProperty("--bg-secondary", "#3d2a54");
        root.style.setProperty("--accent-color", "#8b5cf6");
        root.style.setProperty("--accent-hover", "#7c3aed");
        root.style.setProperty("--accent-color-rgb", "139, 92, 246");
        break;
      case "green":
        root.style.setProperty("--bg-primary", "#1f2f1f");
        root.style.setProperty("--bg-secondary", "#2d3f2d");
        root.style.setProperty("--accent-color", "#10b981");
        root.style.setProperty("--accent-hover", "#059669");
        root.style.setProperty("--accent-color-rgb", "16, 185, 129");
        break;
      case "red":
        root.style.setProperty("--bg-primary", "#3d1f1f");
        root.style.setProperty("--bg-secondary", "#4a2929");
        root.style.setProperty("--accent-color", "#dc2626");
        root.style.setProperty("--accent-hover", "#b91c1c");
        root.style.setProperty("--accent-color-rgb", "220, 38, 38");
        break;
      default:
        root.style.setProperty("--bg-primary", "#23272f");
        root.style.setProperty("--bg-secondary", "#292d36");
        root.style.setProperty("--accent-color", "#007acc");
        root.style.setProperty("--accent-hover", "#005a9e");
        root.style.setProperty("--accent-color-rgb", "0, 122, 204");
        break;
    }
    updateThemeColors();
  }
  function updateThemeColors() {
    const root = document.documentElement;
    const bgPrimary = root.style.getPropertyValue("--bg-primary") || "#23272f";
    const bgSecondary = root.style.getPropertyValue("--bg-secondary") || "#292d36";
    const accentColor = root.style.getPropertyValue("--accent-color") || "#007acc";
    const appFrame = document.querySelector(".proxy-app-frame");
    const sidebar = document.querySelector(".proxy-sidebar");
    const content = document.querySelector(".proxy-content");
    if (appFrame) {
      appFrame.style.background = bgPrimary;
    }
    if (content) {
      content.style.background = bgPrimary;
    }
    const cardViews = document.querySelectorAll(".card-grid-view");
    cardViews.forEach((view) => {
      view.style.background = bgPrimary;
    });
    const cardItems = document.querySelectorAll(
      ".card-item, .game-item, .script-item"
    );
    cardItems.forEach((item) => {
      item.style.background = bgSecondary;
    });
    const activeButtons = document.querySelectorAll(
      ".sidebar-btn.active, .games-tab.active"
    );
    activeButtons.forEach((btn) => {
      btn.style.background = accentColor;
    });
  }
  function saveBrowserSettings() {
    const settings = {
      homepage: document.getElementById("homepage-input")?.value || "https://google.com?igu=1",
      enableHistory: document.getElementById("enable-history")?.checked ?? true,
      enableBookmarks: document.getElementById("enable-bookmarks")?.checked ?? true,
      enablePopupBlocker: document.getElementById("enable-popup-blocker")?.checked ?? true,
      enableSafeSearch: document.getElementById("enable-safe-search")?.checked ?? false,
      userAgent: document.getElementById("user-agent-select")?.value || "default"
    };
    localStorage.setItem("pocketBrowserSettings", JSON.stringify(settings));
    console.log("Settings: Saved browser settings", settings);
    window.dispatchEvent(
      new CustomEvent("pocketBrowserSettingsChanged", {
        detail: settings
      })
    );
    console.log("Settings: Dispatched pocketBrowserSettingsChanged event");
    const saveButton = document.getElementById("save-browser-settings");
    if (saveButton) {
      const originalText = saveButton.innerHTML;
      saveButton.innerHTML = "\u2705 Saved!";
      saveButton.style.background = "#28a745";
      setTimeout(() => {
        saveButton.innerHTML = originalText;
      }, 2e3);
    }
  }
  function resetBrowserSettings() {
    const defaults = {
      homepage: "https://google.com?igu=1",
      enableHistory: true,
      enableBookmarks: true,
      enablePopupBlocker: true,
      enableSafeSearch: false,
      userAgent: "default"
    };
    const homepageInput = document.getElementById("homepage-input");
    const historyCheck = document.getElementById("enable-history");
    const bookmarksCheck = document.getElementById("enable-bookmarks");
    const popupCheck = document.getElementById("enable-popup-blocker");
    const safeSearchCheck = document.getElementById("enable-safe-search");
    const userAgentSelect = document.getElementById("user-agent-select");
    if (homepageInput) homepageInput.value = defaults.homepage;
    if (historyCheck) historyCheck.checked = defaults.enableHistory;
    if (bookmarksCheck) bookmarksCheck.checked = defaults.enableBookmarks;
    if (popupCheck) popupCheck.checked = defaults.enablePopupBlocker;
    if (safeSearchCheck) safeSearchCheck.checked = defaults.enableSafeSearch;
    if (userAgentSelect) userAgentSelect.value = defaults.userAgent;
    localStorage.setItem("pocketBrowserSettings", JSON.stringify(defaults));
    const resetButton = document.getElementById("reset-browser-settings");
    if (resetButton) {
      const originalText = resetButton.innerHTML;
      resetButton.innerHTML = "\u2705 Reset Complete";
      setTimeout(() => {
        resetButton.innerHTML = originalText;
      }, 2e3);
    }
  }
  function loadBrowserSettings() {
    const saved = localStorage.getItem("pocketBrowserSettings");
    if (!saved) return;
    try {
      const settings = JSON.parse(saved);
      const homepageInput = document.getElementById("homepage-input");
      const historyCheck = document.getElementById("enable-history");
      const bookmarksCheck = document.getElementById("enable-bookmarks");
      const popupCheck = document.getElementById("enable-popup-blocker");
      const safeSearchCheck = document.getElementById("enable-safe-search");
      const userAgentSelect = document.getElementById("user-agent-select");
      if (homepageInput)
        homepageInput.value = settings.homepage || "https://google.com?igu=1";
      if (historyCheck) historyCheck.checked = settings.enableHistory !== false;
      if (bookmarksCheck)
        bookmarksCheck.checked = settings.enableBookmarks !== false;
      if (popupCheck) popupCheck.checked = settings.enablePopupBlocker !== false;
      if (safeSearchCheck)
        safeSearchCheck.checked = settings.enableSafeSearch === true;
      if (userAgentSelect)
        userAgentSelect.value = settings.userAgent || "default";
    } catch (e) {
      console.warn("Failed to load browser settings:", e);
    }
  }
  function saveProxySettings() {
    const proxyServerSelect = document.getElementById("proxy-server-select");
    const customProxyUrl = document.getElementById("custom-proxy-url");
    let proxyUrl = "";
    const selectedServer = proxyServerSelect?.value || "utopia1";
    switch (selectedServer) {
      case "utopia1":
        proxyUrl = "https://core.lab.infosv.ro";
        break;
      case "example1":
        proxyUrl = "https://proxy1.example.com";
        break;
      case "example2":
        proxyUrl = "https://proxy2.example.com";
        break;
      case "custom":
        let customUrl = customProxyUrl?.value?.trim() || "";
        if (customUrl) {
          if (!customUrl.startsWith("http://") && !customUrl.startsWith("https://")) {
            customUrl = "https://" + customUrl;
          }
          proxyUrl = customUrl;
        } else {
          proxyUrl = "https://core.lab.infosv.ro";
        }
        break;
      default:
        proxyUrl = "https://core.lab.infosv.ro";
    }
    const settings = {
      server: selectedServer,
      url: proxyUrl,
      customUrl: customProxyUrl?.value?.trim() || ""
    };
    localStorage.setItem("proxyClientProxySettings", JSON.stringify(settings));
    console.log("Settings: Saved proxy settings", settings);
    window.dispatchEvent(
      new CustomEvent("proxySettingsChanged", {
        detail: settings
      })
    );
    console.log("Settings: Dispatched proxySettingsChanged event");
    const saveProxyButton = document.getElementById("save-proxy-settings");
    if (saveProxyButton) {
      const originalText = saveProxyButton.innerHTML;
      saveProxyButton.innerHTML = "\u2705 Saved!";
      saveProxyButton.style.background = "#28a745";
      setTimeout(() => {
        saveProxyButton.innerHTML = originalText;
      }, 2e3);
    }
  }
  function resetProxySettings() {
    const defaults = {
      server: "utopia1",
      url: "https://core.lab.infosv.ro",
      customUrl: ""
    };
    const proxyServerSelect = document.getElementById("proxy-server-select");
    const customProxyUrl = document.getElementById("custom-proxy-url");
    const customProxyInput = document.getElementById("custom-proxy-input");
    if (proxyServerSelect) proxyServerSelect.value = defaults.server;
    if (customProxyUrl) customProxyUrl.value = defaults.customUrl;
    if (customProxyInput) customProxyInput.style.display = "none";
    localStorage.setItem("proxyClientProxySettings", JSON.stringify(defaults));
    console.log("Settings: Reset proxy settings to defaults", defaults);
    window.dispatchEvent(
      new CustomEvent("proxySettingsChanged", {
        detail: defaults
      })
    );
    console.log("Settings: Dispatched proxySettingsChanged event for reset");
    const resetProxyButton = document.getElementById("reset-proxy-settings");
    if (resetProxyButton) {
      const originalText = resetProxyButton.innerHTML;
      resetProxyButton.innerHTML = "\u2705 Reset Complete";
      setTimeout(() => {
        resetProxyButton.innerHTML = originalText;
      }, 2e3);
    }
  }
  function loadProxySettings() {
    const saved = localStorage.getItem("proxyClientProxySettings");
    if (!saved) return;
    try {
      const settings = JSON.parse(saved);
      const proxyServerSelect = document.getElementById("proxy-server-select");
      const customProxyUrl = document.getElementById("custom-proxy-url");
      const customProxyInput = document.getElementById("custom-proxy-input");
      if (proxyServerSelect)
        proxyServerSelect.value = settings.server || "utopia1";
      if (customProxyUrl) customProxyUrl.value = settings.customUrl || "";
      if (customProxyInput && settings.server === "custom") {
        customProxyInput.style.display = "block";
      }
    } catch (e) {
      console.warn("Failed to load proxy settings:", e);
    }
  }
  function getProxySettings() {
    const saved = localStorage.getItem("proxyClientProxySettings");
    if (!saved) {
      return {
        server: "utopia1",
        url: "https://core.lab.infosv.ro",
        customUrl: ""
      };
    }
    try {
      return JSON.parse(saved);
    } catch (e) {
      return {
        server: "utopia1",
        url: "https://core.lab.infosv.ro",
        customUrl: ""
      };
    }
  }
  function getPocketBrowserSettings() {
    const saved = localStorage.getItem("pocketBrowserSettings");
    const defaults = {
      homepage: "https://google.com?igu=1",
      enableHistory: true,
      enableBookmarks: true,
      enablePopupBlocker: true,
      enableSafeSearch: false,
      userAgent: "default"
    };
    if (!saved) {
      return defaults;
    }
    try {
      const parsed = JSON.parse(saved);
      return { ...defaults, ...parsed };
    } catch (e) {
      return defaults;
    }
  }

  // src/views/proxy.js
  function createProxyView() {
    const proxyView = document.createElement("div");
    proxyView.style.width = "100%";
    proxyView.style.height = "100%";
    proxyView.style.display = "flex";
    proxyView.style.flexDirection = "column";
    const toolbar = document.createElement("div");
    toolbar.style.cssText = `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 8px 12px;
    background: #292d36;
    border-bottom: 1px solid #404040;
    min-height: 40px;
  `;
    const fullscreenBtn = document.createElement("button");
    fullscreenBtn.innerHTML = "\u26F6";
    fullscreenBtn.title = "Enter Fullscreen";
    fullscreenBtn.style.cssText = `
    background: #2d323e;
    border: 1px solid #404040;
    border-radius: 4px;
    color: #fff;
    padding: 6px 10px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
    outline: none;
  `;
    fullscreenBtn.addEventListener("mouseenter", () => {
      fullscreenBtn.style.background = "var(--accent-color, #007acc)";
      fullscreenBtn.style.borderColor = "var(--accent-color, #007acc)";
    });
    fullscreenBtn.addEventListener("mouseleave", () => {
      fullscreenBtn.style.background = "#2d323e";
      fullscreenBtn.style.borderColor = "#404040";
    });
    const iframe = document.createElement("iframe");
    const proxySettings = getProxySettings();
    iframe.src = proxySettings.url || "https://core.lab.infosv.ro";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.flex = "1";
    function reloadProxyIframe() {
      const currentSettings = getProxySettings();
      const newUrl = currentSettings.url || "https://core.lab.infosv.ro";
      if (iframe.src !== newUrl) {
        console.log("Proxy: Reloading iframe due to settings change", {
          oldUrl: iframe.src,
          newUrl
        });
        iframe.src = newUrl;
      }
    }
    window.addEventListener("storage", (e) => {
      if (e.key === "proxyClientProxySettings") {
        console.log("Proxy: Storage event detected for proxy settings");
        reloadProxyIframe();
      }
    });
    window.addEventListener("proxySettingsChanged", (e) => {
      console.log("Proxy: Settings changed event received", e.detail);
      reloadProxyIframe();
    });
    fullscreenBtn.addEventListener("click", () => {
      enterFullscreen();
    });
    function enterFullscreen() {
      try {
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen();
        } else if (iframe.webkitRequestFullscreen) {
          iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) {
          iframe.msRequestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
          iframe.mozRequestFullScreen();
        }
      } catch (error) {
        console.warn("Fullscreen not supported or blocked:", error);
      }
    }
    function handleFullscreenChange() {
      const isFullscreen = document.fullscreenElement === iframe || document.webkitFullscreenElement === iframe || document.msFullscreenElement === iframe || document.mozFullScreenElement === iframe;
      if (isFullscreen) {
        fullscreenBtn.innerHTML = "\u26F6";
        fullscreenBtn.title = "Exit Fullscreen (Press Esc)";
      } else {
        fullscreenBtn.innerHTML = "\u26F6";
        fullscreenBtn.title = "Enter Fullscreen";
      }
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    toolbar.appendChild(fullscreenBtn);
    proxyView.appendChild(toolbar);
    proxyView.appendChild(iframe);
    return proxyView;
  }

  // src/views/notes.js
  function createNotesView() {
    injectAppCSS();
    const notesView = document.createElement("div");
    notesView.className = "card-grid-view";
    const savedNotes = JSON.parse(
      localStorage.getItem("proxyClientNotes") || "[]"
    );
    notesView.innerHTML = `
    <div class="notes-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h2 style="color: #00bfff; margin: 0; font-size: 1.5rem;">Notes</h2>
      <button id="add-note-btn" class="games-tab" style="border-radius: 6px;">Add Note</button>
    </div>
    <div id="notes-list" class="card-list"></div>
  `;
    const notesList = notesView.querySelector("#notes-list");
    const addNoteBtn = notesView.querySelector("#add-note-btn");
    function renderNotes() {
      notesList.innerHTML = "";
      if (savedNotes.length === 0) {
        notesList.innerHTML = `
        <div class="card-item" style="text-align: center; grid-column: 1 / -1;">
          <div class="card-title">No Notes Yet</div>
          <div class="card-desc">Click "Add Note" to create your first note</div>
        </div>
      `;
        return;
      }
      savedNotes.forEach((note, index) => {
        const noteItem = document.createElement("div");
        noteItem.className = "card-item";
        const preview = note.content.length > 100 ? note.content.substring(0, 100) + "..." : note.content;
        const timestamp = new Date(note.timestamp).toLocaleDateString();
        noteItem.innerHTML = `
        <div class="card-title">${note.title || "Untitled Note"}</div>
        <div class="card-desc">${preview}</div>
        <div class="card-desc" style="margin-top: 8px; font-size: 0.8rem; color: #666;">
          ${timestamp}
        </div>
        <div style="display: flex; gap: 8px; margin-top: 12px;">
          <button class="edit-btn" data-index="${index}" style="padding: 4px 12px; background: #007acc; border: none; border-radius: 4px; color: white; cursor: pointer; font-size: 0.85rem;">Edit</button>
          <button class="delete-btn" data-index="${index}" style="padding: 4px 12px; background: #d73a49; border: none; border-radius: 4px; color: white; cursor: pointer; font-size: 0.85rem;">Delete</button>
        </div>
      `;
        notesList.appendChild(noteItem);
      });
    }
    function showNoteEditor(noteIndex = null) {
      const isEditing = noteIndex !== null;
      const note = isEditing ? savedNotes[noteIndex] : { title: "", content: "" };
      const modal = document.createElement("div");
      modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100001;
    `;
      modal.innerHTML = `
      <div style="background: #23272f; padding: 24px; border-radius: 10px; width: 90%; max-width: 600px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
        <h3 style="color: #00bfff; margin: 0 0 16px 0;">${isEditing ? "Edit Note" : "New Note"}</h3>
        <input type="text" id="note-title" placeholder="Note title..." value="${note.title}" 
               style="width: 100%; padding: 12px; margin-bottom: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        <textarea id="note-content" placeholder="Write your note here..." rows="10" 
                  style="width: 100%; padding: 12px; margin-bottom: 16px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem; resize: vertical;">${note.content}</textarea>
        <div style="display: flex; gap: 12px; justify-content: flex-end;">
          <button id="cancel-btn" style="padding: 10px 20px; background: #404040; border: none; border-radius: 6px; color: white; cursor: pointer;">Cancel</button>
          <button id="save-btn" style="padding: 10px 20px; background: #007acc; border: none; border-radius: 6px; color: white; cursor: pointer;">Save</button>
        </div>
      </div>
    `;
      document.body.appendChild(modal);
      const titleInput = modal.querySelector("#note-title");
      const contentTextarea = modal.querySelector("#note-content");
      const cancelBtn = modal.querySelector("#cancel-btn");
      const saveBtn = modal.querySelector("#save-btn");
      titleInput.focus();
      cancelBtn.onclick = () => document.body.removeChild(modal);
      saveBtn.onclick = () => {
        const title = titleInput.value.trim();
        const content = contentTextarea.value.trim();
        if (!title && !content) {
          alert("Please enter a title or content for the note.");
          return;
        }
        const noteData = {
          title: title || "Untitled Note",
          content,
          timestamp: Date.now()
        };
        if (isEditing) {
          savedNotes[noteIndex] = noteData;
        } else {
          savedNotes.unshift(noteData);
        }
        localStorage.setItem("proxyClientNotes", JSON.stringify(savedNotes));
        renderNotes();
        document.body.removeChild(modal);
      };
      modal.onclick = (e) => {
        if (e.target === modal) document.body.removeChild(modal);
      };
    }
    addNoteBtn.onclick = () => showNoteEditor();
    notesList.onclick = (e) => {
      if (e.target.classList.contains("edit-btn")) {
        const index = parseInt(e.target.dataset.index);
        showNoteEditor(index);
      } else if (e.target.classList.contains("delete-btn")) {
        const index = parseInt(e.target.dataset.index);
        if (confirm("Are you sure you want to delete this note?")) {
          savedNotes.splice(index, 1);
          localStorage.setItem("proxyClientNotes", JSON.stringify(savedNotes));
          renderNotes();
        }
      }
    };
    renderNotes();
    return notesView;
  }

  // src/views/calculator.js
  function createCalculatorView() {
    injectAppCSS();
    const calculatorView = document.createElement("div");
    calculatorView.className = "card-grid-view";
    calculatorView.innerHTML = `
    <h2 style="color: #00bfff; margin: 0 0 20px 0; font-size: 1.5rem; text-align: center;">Calculator</h2>
    <div style="max-width: 350px; margin: 0 auto;">
      <input type="text" id="calcDisplay" 
             style="width: 100%; height: 60px; margin-bottom: 20px; text-align: right; font-size: 24px; 
                    background: #292d36; border: 2px solid #404040; border-radius: 8px; color: #fff; 
                    padding: 0 16px; font-family: 'Courier New', monospace;" 
             placeholder="0" disabled>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
        <button class="calc-btn operator" data-value="C" style="grid-column: span 2;">Clear</button>
        <button class="calc-btn operator" data-value="backspace">\u232B</button>
        <button class="calc-btn operator" data-value="/">/</button>
        
        <button class="calc-btn number" data-value="7">7</button>
        <button class="calc-btn number" data-value="8">8</button>
        <button class="calc-btn number" data-value="9">9</button>
        <button class="calc-btn operator" data-value="*">\xD7</button>
        
        <button class="calc-btn number" data-value="4">4</button>
        <button class="calc-btn number" data-value="5">5</button>
        <button class="calc-btn number" data-value="6">6</button>
        <button class="calc-btn operator" data-value="-">\u2212</button>
        
        <button class="calc-btn number" data-value="1">1</button>
        <button class="calc-btn number" data-value="2">2</button>
        <button class="calc-btn number" data-value="3">3</button>
        <button class="calc-btn operator" data-value="+">+</button>
        
        <button class="calc-btn number" data-value="0" style="grid-column: span 2;">0</button>
        <button class="calc-btn number" data-value=".">.</button>
        <button class="calc-btn equals" data-value="=">=</button>
      </div>
    </div>
  `;
    const style = document.createElement("style");
    style.textContent = `
    .calc-btn {
      height: 60px;
      border: none;
      border-radius: 8px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      user-select: none;
    }
    
    .calc-btn.number {
      background: #292d36;
      color: #fff;
      border: 1px solid #404040;
    }
    
    .calc-btn.number:hover {
      background: #353a45;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,122,204,0.15);
    }
    
    .calc-btn.operator {
      background: #007acc;
      color: #fff;
    }
    
    .calc-btn.operator:hover {
      background: #0066a3;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,122,204,0.3);
    }
    
    .calc-btn.equals {
      background: #28a745;
      color: #fff;
    }
    
    .calc-btn.equals:hover {
      background: #218838;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(40,167,69,0.3);
    }
    
    .calc-btn:active {
      transform: translateY(1px);
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
  `;
    document.head.appendChild(style);
    let currentInput = "";
    let operator = "";
    let previousInput = "";
    let shouldResetDisplay = false;
    const display = calculatorView.querySelector("#calcDisplay");
    function updateDisplay(value = currentInput || "0") {
      display.value = value;
    }
    function handleNumber(num) {
      if (shouldResetDisplay) {
        currentInput = "";
        shouldResetDisplay = false;
      }
      currentInput += num;
      updateDisplay();
    }
    function handleOperator(op) {
      if (currentInput === "" && op !== "-") return;
      if (previousInput !== "" && currentInput !== "" && operator !== "") {
        calculate();
      }
      operator = op;
      previousInput = currentInput;
      currentInput = "";
      shouldResetDisplay = true;
    }
    function calculate() {
      if (previousInput === "" || currentInput === "" || operator === "") return;
      let result;
      const prev = parseFloat(previousInput);
      const current = parseFloat(currentInput);
      switch (operator) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "*":
          result = prev * current;
          break;
        case "/":
          result = current !== 0 ? prev / current : "Error";
          break;
        default:
          return;
      }
      currentInput = result.toString();
      operator = "";
      previousInput = "";
      shouldResetDisplay = true;
      updateDisplay();
    }
    function clear() {
      currentInput = "";
      operator = "";
      previousInput = "";
      shouldResetDisplay = false;
      updateDisplay();
    }
    function backspace() {
      if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
      }
    }
    calculatorView.addEventListener("click", (e) => {
      if (!e.target.classList.contains("calc-btn")) return;
      const value = e.target.dataset.value;
      if (value >= "0" && value <= "9" || value === ".") {
        handleNumber(value);
      } else if (["+", "-", "*", "/"].includes(value)) {
        handleOperator(value);
      } else if (value === "=") {
        calculate();
      } else if (value === "C") {
        clear();
      } else if (value === "backspace") {
        backspace();
      }
    });
    calculatorView.addEventListener("keydown", (e) => {
      e.preventDefault();
      if (e.key >= "0" && e.key <= "9" || e.key === ".") {
        handleNumber(e.key);
      } else if (["+", "-", "*", "/"].includes(e.key)) {
        handleOperator(e.key);
      } else if (e.key === "Enter" || e.key === "=") {
        calculate();
      } else if (e.key === "Escape" || e.key === "c" || e.key === "C") {
        clear();
      } else if (e.key === "Backspace") {
        backspace();
      }
    });
    calculatorView.tabIndex = 0;
    setTimeout(() => {
      calculatorView.focus();
    }, 100);
    return calculatorView;
  }

  // src/views/console.js
  function createConsoleView() {
    injectAppCSS();
    const consoleView = document.createElement("div");
    consoleView.className = "card-grid-view";
    consoleView.innerHTML = `
    <div class="console-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h2 style="color: #00bfff; margin: 0; font-size: 1.5rem;">JavaScript Console</h2>
      <div style="display: flex; gap: 10px;">
        <button id="run-btn" class="games-tab" style="border-radius: 6px; background: #28a745;">\u25B6 Run</button>
        <button id="clear-btn" class="games-tab" style="border-radius: 6px; background: #dc3545;">Clear</button>
      </div>
    </div>
    
    <div style="display: grid; grid-template-rows: 1fr auto 200px; gap: 16px; height: 500px;">
      <div class="code-editor-container">
        <div style="background: #292d36; border-radius: 8px 8px 0 0; padding: 8px 16px; border-bottom: 1px solid #404040;">
          <span style="color: #00bfff; font-size: 0.9rem; font-weight: 600;">Code Editor</span>
        </div>
        <textarea id="code-input" 
                  placeholder="// Write your JavaScript code here...
console.log('Hello World!');
Math.sqrt(16);
[1,2,3].map(x => x * 2);"
                  style="width: 100%; height: calc(100% - 40px); background: #1e1e1e; color: #d4d4d4; 
                         border: none; border-radius: 0 0 8px 8px; padding: 16px; font-family: 'Consolas', 'Courier New', monospace; 
                         font-size: 14px; resize: none; outline: none; line-height: 1.5;"></textarea>
      </div>
      
      <div class="output-container">
        <div style="background: #292d36; border-radius: 8px 8px 0 0; padding: 8px 16px; border-bottom: 1px solid #404040;">
          <span style="color: #00bfff; font-size: 0.9rem; font-weight: 600;">Output</span>
        </div>
        <div id="output" 
             style="width: 100%; height: calc(100% - 40px); background: #1a1a1a; color: #d4d4d4; 
                    border: none; border-radius: 0 0 8px 8px; padding: 16px; font-family: 'Consolas', 'Courier New', monospace; 
                    font-size: 14px; overflow-y: auto; white-space: pre-wrap;"></div>
      </div>
    </div>
  `;
    const style = document.createElement("style");
    style.textContent = `
    .code-editor-container, .output-container {
      background: #292d36;
      border-radius: 8px;
      border: 1px solid #404040;
      overflow: hidden;
    }
    
    #code-input:focus {
      box-shadow: 0 0 0 2px rgba(0, 191, 255, 0.3);
    }
    
    .console-output-line {
      margin: 4px 0;
      padding: 2px 0;
    }
    
    .console-error {
      color: #f85149;
    }
    
    .console-warning {
      color: #d29922;
    }
    
    .console-success {
      color: #56d364;
    }
    
    .console-info {
      color: #79c0ff;
    }
    
    .console-timestamp {
      color: #7d8590;
      font-size: 12px;
    }
  `;
    document.head.appendChild(style);
    const codeInput = consoleView.querySelector("#code-input");
    const output = consoleView.querySelector("#output");
    const runBtn = consoleView.querySelector("#run-btn");
    const clearBtn = consoleView.querySelector("#clear-btn");
    let originalConsole = {};
    let consoleOutput = [];
    function initializeConsole() {
      originalConsole.log = console.log;
      originalConsole.error = console.error;
      originalConsole.warn = console.warn;
      originalConsole.info = console.info;
      console.log = (...args) => {
        originalConsole.log(...args);
        addToOutput(args.map((arg) => formatValue(arg)).join(" "), "info");
      };
      console.error = (...args) => {
        originalConsole.error(...args);
        addToOutput(args.map((arg) => formatValue(arg)).join(" "), "error");
      };
      console.warn = (...args) => {
        originalConsole.warn(...args);
        addToOutput(args.map((arg) => formatValue(arg)).join(" "), "warning");
      };
      console.info = (...args) => {
        originalConsole.info(...args);
        addToOutput(args.map((arg) => formatValue(arg)).join(" "), "info");
      };
    }
    function restoreConsole() {
      console.log = originalConsole.log;
      console.error = originalConsole.error;
      console.warn = originalConsole.warn;
      console.info = originalConsole.info;
    }
    function formatValue(value) {
      if (typeof value === "string") return `"${value}"`;
      if (typeof value === "object") {
        try {
          return JSON.stringify(value, null, 2);
        } catch {
          return String(value);
        }
      }
      return String(value);
    }
    function addToOutput(message, type = "info") {
      const timestamp = (/* @__PURE__ */ new Date()).toLocaleTimeString();
      const line = document.createElement("div");
      line.className = `console-output-line console-${type}`;
      line.innerHTML = `<span class="console-timestamp">[${timestamp}]</span> ${message}`;
      output.appendChild(line);
      output.scrollTop = output.scrollHeight;
    }
    function executeCode() {
      const code = codeInput.value.trim();
      if (!code) {
        addToOutput("No code to execute.", "warning");
        return;
      }
      addToOutput(`> ${code}`, "info");
      try {
        const dangerousPatterns = [
          /document\.write/i,
          /window\.location/i,
          /eval\s*\(/i,
          /setTimeout\s*\(/i,
          /setInterval\s*\(/i,
          /alert\s*\(/i,
          /confirm\s*\(/i
        ];
        const isDangerous = dangerousPatterns.some(
          (pattern) => pattern.test(code)
        );
        if (isDangerous) {
          addToOutput(
            "Error: Potentially unsafe code detected. Please use safer alternatives.",
            "error"
          );
          return;
        }
        initializeConsole();
        let result;
        try {
          result = Function('"use strict"; return (' + code + ")")();
        } catch (expressionError) {
          try {
            result = Function('"use strict"; ' + code)();
          } catch (statementError) {
            throw expressionError;
          }
        }
        if (result !== void 0) {
          addToOutput(`\u2190 ${formatValue(result)}`, "success");
        }
      } catch (error) {
        addToOutput(`Error: ${error.name}: ${error.message}`, "error");
      } finally {
        restoreConsole();
      }
    }
    function clearOutput() {
      output.innerHTML = "";
      addToOutput("Console cleared.", "info");
    }
    runBtn.addEventListener("click", executeCode);
    clearBtn.addEventListener("click", clearOutput);
    codeInput.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        executeCode();
      }
      if (e.key === "Tab") {
        e.preventDefault();
        const start = codeInput.selectionStart;
        const end = codeInput.selectionEnd;
        codeInput.value = codeInput.value.substring(0, start) + "  " + codeInput.value.substring(end);
        codeInput.selectionStart = codeInput.selectionEnd = start + 2;
      }
    });
    addToOutput(
      "JavaScript Console ready. Type your code above and click 'Run' or press Ctrl+Enter.",
      "info"
    );
    return consoleView;
  }

  // src/views/cloaking.js
  function createCloakingView() {
    injectAppCSS();
    const cloakingView = document.createElement("div");
    cloakingView.className = "card-grid-view";
    cloakingView.innerHTML = `
    <div class="cloaking-header" style="margin-bottom: 30px;">
      <h2 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1.5rem;">Tab Cloaking</h2>
      <p style="color: #aaa; margin: 0; font-size: 0.95rem;">Change your tab's title and icon to disguise this page</p>
    </div>

    <div class="cloaking-presets" style="margin-bottom: 30px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Quick Presets</h3>
      <div class="card-list" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
        <div class="card-item preset-card" data-title="Google" data-icon="https://www.google.com/favicon.ico">
          <div class="card-title">Google</div>
          <div class="card-desc">Search engine homepage</div>
        </div>
        <div class="card-item preset-card" data-title="Gmail" data-icon="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico">
          <div class="card-title">Gmail</div>
          <div class="card-desc">Email service</div>
        </div>
        <div class="card-item preset-card" data-title="Clever | Portal" data-icon="https://assets.clever.com/launchpad/c4a9bd82e/favicon.ico">
          <div class="card-title">Clever</div>
          <div class="card-desc">Education platform</div>
        </div>
        <div class="card-item preset-card" data-title="Google Drive" data-icon="https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png">
          <div class="card-title">Google Drive</div>
          <div class="card-desc">Cloud storage</div>
        </div>
        <div class="card-item preset-card" data-title="Google Docs" data-icon="https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico">
          <div class="card-title">Google Docs</div>
          <div class="card-desc">Document editor</div>
        </div>
        <div class="card-item preset-card" data-title="Canvas" data-icon="https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico">
          <div class="card-title">Canvas</div>
          <div class="card-desc">Learning management</div>
        </div>
      </div>
    </div>

    <div class="cloaking-custom" style="margin-bottom: 20px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Custom Cloaking</h3>
      <div style="display: grid; gap: 16px;">
        <div>
          <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">Tab Title</label>
          <input type="text" id="title-input" placeholder="Enter new tab title (e.g., Google)" 
                 style="width: 100%; padding: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        </div>
        <div>
          <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">Tab Icon URL</label>
          <input type="text" id="icon-input" placeholder="Enter favicon URL (e.g., https://www.google.com/favicon.ico)" 
                 style="width: 100%; padding: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        </div>
        <div style="display: flex; gap: 12px; margin-top: 8px;">
          <button id="apply-btn" class="games-tab" style="border-radius: 6px; background: #28a745;">Apply Cloaking</button>
          <button id="stop-btn" class="games-tab" style="border-radius: 6px; background: #dc3545;">Stop Cloaking</button>
          <button id="reset-btn" class="games-tab" style="border-radius: 6px; background: #6c757d;">Reset to Original</button>
        </div>
      </div>
    </div>

    <div class="cloaking-status">
      <div style="background: #292d36; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
        <h4 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1rem;">Status</h4>
        <div id="status-display" style="color: #aaa; font-size: 0.9rem;">Ready to cloak</div>
      </div>
    </div>
  `;
    const titleInput = cloakingView.querySelector("#title-input");
    const iconInput = cloakingView.querySelector("#icon-input");
    const applyBtn = cloakingView.querySelector("#apply-btn");
    const stopBtn = cloakingView.querySelector("#stop-btn");
    const resetBtn = cloakingView.querySelector("#reset-btn");
    const statusDisplay = cloakingView.querySelector("#status-display");
    const presetCards = cloakingView.querySelectorAll(".preset-card");
    let cloakingInterval = null;
    let originalTitle = document.title;
    let originalIcon = document.querySelector("link[rel*='icon']")?.href || "";
    function updateStatus(message, type = "info") {
      statusDisplay.textContent = message;
      statusDisplay.style.color = type === "success" ? "#56d364" : type === "error" ? "#f85149" : type === "warning" ? "#d29922" : "#aaa";
    }
    function applyCloaking(title, iconUrl) {
      function gcloak() {
        try {
          if (title) {
            document.title = title;
          }
          if (iconUrl) {
            const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
            link.type = "image/x-icon";
            link.rel = "shortcut icon";
            link.href = iconUrl;
            if (!document.querySelector("link[rel*='icon']")) {
              document.getElementsByTagName("head")[0].appendChild(link);
            }
          }
        } catch (error) {
          console.error("Cloaking error:", error);
        }
      }
      if (cloakingInterval) {
        clearInterval(cloakingInterval);
      }
      gcloak();
      cloakingInterval = setInterval(gcloak, 3e3);
      updateStatus(
        `Active: "${title || "Title unchanged"}" with custom icon`,
        "success"
      );
    }
    function stopCloaking() {
      if (cloakingInterval) {
        clearInterval(cloakingInterval);
        cloakingInterval = null;
        updateStatus("Cloaking stopped", "warning");
      } else {
        updateStatus("No active cloaking to stop", "warning");
      }
    }
    function resetToOriginal() {
      stopCloaking();
      document.title = originalTitle;
      const currentIcon = document.querySelector("link[rel*='icon']");
      if (currentIcon && originalIcon) {
        currentIcon.href = originalIcon;
      }
      titleInput.value = "";
      iconInput.value = "";
      updateStatus("Reset to original title and icon", "info");
    }
    applyBtn.addEventListener("click", () => {
      const title = titleInput.value.trim();
      const iconUrl = iconInput.value.trim();
      if (!title && !iconUrl) {
        updateStatus("Please enter a title or icon URL", "error");
        return;
      }
      applyCloaking(title, iconUrl);
    });
    stopBtn.addEventListener("click", stopCloaking);
    resetBtn.addEventListener("click", resetToOriginal);
    presetCards.forEach((card) => {
      card.addEventListener("click", () => {
        const title = card.dataset.title;
        const icon = card.dataset.icon;
        titleInput.value = title;
        iconInput.value = icon;
        applyCloaking(title, icon);
      });
    });
    iconInput.addEventListener("input", () => {
      const url = iconInput.value.trim();
      if (url) {
        try {
          new URL(url);
          iconInput.style.borderColor = "#28a745";
        } catch {
          iconInput.style.borderColor = "#dc3545";
        }
      } else {
        iconInput.style.borderColor = "#404040";
      }
    });
    window.addEventListener("beforeunload", () => {
      if (cloakingInterval) {
        clearInterval(cloakingInterval);
      }
    });
    return cloakingView;
  }

  // src/views/historyFlood.js
  function createHistoryFloodView() {
    injectAppCSS();
    const historyFloodView = document.createElement("div");
    historyFloodView.className = "card-grid-view";
    historyFloodView.innerHTML = `
    <div class="flood-header" style="margin-bottom: 30px;">
      <h2 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1.5rem;">History Flood</h2>
      <p style="color: #aaa; margin: 0; font-size: 0.95rem;">Add multiple entries of the current page to browser history</p>
    </div>

    <div class="flood-presets" style="margin-bottom: 30px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Quick Amounts</h3>
      <div class="card-list" style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));">
        <div class="card-item preset-amount" data-amount="10">
          <div class="card-title">10 Entries</div>
          <div class="card-desc">Light flooding</div>
        </div>
        <div class="card-item preset-amount" data-amount="50">
          <div class="card-title">50 Entries</div>
          <div class="card-desc">Medium flooding</div>
        </div>
        <div class="card-item preset-amount" data-amount="100">
          <div class="card-title">100 Entries</div>
          <div class="card-desc">Heavy flooding</div>
        </div>
        <div class="card-item preset-amount" data-amount="500">
          <div class="card-title">500 Entries</div>
          <div class="card-desc">Extreme flooding</div>
        </div>
      </div>
    </div>

    <div class="flood-custom" style="margin-bottom: 20px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Custom Amount</h3>
      <div style="display: grid; gap: 16px;">
        <div>
          <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">Number of History Entries</label>
          <input type="number" id="flood-input" placeholder="Enter amount (1-1000)" min="1" max="1000"
                 style="width: 100%; padding: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        </div>
        <div style="display: flex; gap: 12px; margin-top: 8px;">
          <button id="flood-btn" class="games-tab" style="border-radius: 6px; background: #007acc;">Flood History</button>
          <button id="clear-input-btn" class="games-tab" style="border-radius: 6px; background: #6c757d;">Clear</button>
        </div>
      </div>
    </div>

    <div class="flood-info" style="margin-bottom: 20px;">
      <div style="background: #292d36; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
        <h4 style="color: #d29922; margin: 0 0 8px 0; font-size: 1rem;">\u26A0\uFE0F How History Flooding Works</h4>
        <ul style="color: #aaa; font-size: 0.9rem; margin: 8px 0; padding-left: 20px;">
          <li>Adds multiple entries of the current page to browser history</li>
          <li>Makes it harder to navigate back using browser back button</li>
          <li>Creates the appearance of visiting this page multiple times</li>
          <li>Higher numbers create more difficulty going back</li>
        </ul>
      </div>
    </div>

    <div class="flood-status">
      <div style="background: #292d36; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
        <h4 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1rem;">Status</h4>
        <div id="status-display" style="color: #aaa; font-size: 0.9rem;">Ready to flood history</div>
      </div>
    </div>
  `;
    const floodInput = historyFloodView.querySelector("#flood-input");
    const floodBtn = historyFloodView.querySelector("#flood-btn");
    const clearInputBtn = historyFloodView.querySelector("#clear-input-btn");
    const statusDisplay = historyFloodView.querySelector("#status-display");
    const presetCards = historyFloodView.querySelectorAll(".preset-amount");
    function updateStatus(message, type = "info") {
      statusDisplay.textContent = message;
      statusDisplay.style.color = type === "success" ? "#56d364" : type === "error" ? "#f85149" : type === "warning" ? "#d29922" : "#aaa";
    }
    function floodHistory(amount) {
      if (isNaN(amount) || amount <= 0 || amount > 1e3) {
        updateStatus("Please enter a valid number between 1 and 1000", "error");
        return;
      }
      updateStatus(`Flooding history with ${amount} entries...`, "warning");
      try {
        let addEntries = function() {
          const batchSize = Math.min(10, amount - completed);
          for (let i = 0; i < batchSize; i++) {
            completed++;
            history.pushState(
              { flood: true, entry: completed },
              "",
              completed === amount ? currentUrl : `${currentUrl}#flood-${completed}`
            );
          }
          if (completed < amount) {
            requestAnimationFrame(addEntries);
            updateStatus(
              `Progress: ${completed}/${amount} entries added`,
              "warning"
            );
          } else {
            history.pushState({ flood: true, final: true }, "", currentUrl);
            updateStatus(
              `Success! Added ${amount} ${amount === 1 ? "entry" : "entries"} to history. Current page now appears ${amount} times.`,
              "success"
            );
          }
        };
        const currentUrl = window.location.href;
        let completed = 0;
        addEntries();
      } catch (error) {
        updateStatus(`Error: ${error.message}`, "error");
      }
    }
    floodBtn.addEventListener("click", () => {
      const amount = parseInt(floodInput.value, 10);
      floodHistory(amount);
    });
    clearInputBtn.addEventListener("click", () => {
      floodInput.value = "";
      updateStatus("Input cleared", "info");
    });
    presetCards.forEach((card) => {
      card.addEventListener("click", () => {
        const amount = parseInt(card.dataset.amount, 10);
        floodInput.value = amount;
        floodHistory(amount);
      });
    });
    floodInput.addEventListener("input", () => {
      const value = parseInt(floodInput.value, 10);
      if (isNaN(value) || value <= 0) {
        floodInput.style.borderColor = "#dc3545";
      } else if (value > 1e3) {
        floodInput.style.borderColor = "#d29922";
        updateStatus("Warning: Maximum recommended is 1000 entries", "warning");
      } else {
        floodInput.style.borderColor = "#28a745";
        updateStatus(
          `Ready to add ${value} ${value === 1 ? "entry" : "entries"}`,
          "info"
        );
      }
    });
    floodInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        floodBtn.click();
      }
    });
    return historyFloodView;
  }

  // src/views/corsProxy.js
  function createCorsProxyView() {
    injectAppCSS();
    const corsProxyView = document.createElement("div");
    corsProxyView.className = "card-grid-view";
    corsProxyView.innerHTML = `
    <div class="proxy-header" style="margin-bottom: 30px;">
      <h2 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1.5rem;">CORS Proxy</h2>
      <p style="color: #aaa; margin: 0; font-size: 0.95rem;">Access websites that normally block cross-origin requests</p>
    </div>

    <div class="proxy-presets" style="margin-bottom: 20px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Quick Access</h3>
      <div class="card-list" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
        <div class="card-item preset-site" data-url="https://httpbin.org/get">
          <div class="card-title">Test API</div>
          <div class="card-desc">httpbin.org/get - Test the proxy functionality</div>
        </div>
        <div class="card-item preset-site" data-url="https://jsonplaceholder.typicode.com/posts/1">
          <div class="card-title">JSON API</div>
          <div class="card-desc">JSONPlaceholder - Sample JSON data</div>
        </div>
        <div class="card-item preset-site" data-url="https://api.github.com/users/octocat">
          <div class="card-title">GitHub API</div>
          <div class="card-desc">GitHub user data example</div>
        </div>
        <div class="card-item preset-site" data-url="https://reqres.in/api/users">
          <div class="card-title">ReqRes API</div>
          <div class="card-desc">Sample REST API for testing</div>
        </div>
      </div>
    </div>

    <div class="proxy-custom" style="margin-bottom: 20px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Custom URL</h3>
      <div style="display: grid; gap: 16px;">
        <div>
          <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">Target URL</label>
          <input type="text" id="url-input" placeholder="https://example.com/api/data" 
                 style="width: 100%; padding: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        </div>
        <div style="display: flex; gap: 12px; margin-top: 8px;">
          <button id="fetch-btn" class="games-tab" style="border-radius: 6px; background: #007acc;">Fetch via Proxy</button>
          <button id="open-new-tab-btn" class="games-tab" style="border-radius: 6px; background: #28a745;">Open in New Tab</button>
          <button id="clear-url-btn" class="games-tab" style="border-radius: 6px; background: #6c757d;">Clear</button>
        </div>
      </div>
    </div>

    <div class="proxy-options" style="margin-bottom: 15px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Proxy Settings</h3>
      <div style="background: #292d36; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
        <div style="display: grid; gap: 12px;">
          <div>
            <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">Proxy Service</label>
            <select id="proxy-service" style="width: 100%; padding: 8px; background: #1e1e1e; border: 1px solid #404040; border-radius: 4px; color: #fff;">
              <option value="https://api.codetabs.com/v1/proxy?quest=">CodeTabs Proxy</option>
              <option value="https://cors-anywhere.herokuapp.com/">CORS Anywhere</option>
              <option value="https://api.allorigins.win/get?url=">AllOrigins</option>
            </select>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <input type="checkbox" id="json-format" style="margin: 0;">
            <label for="json-format" style="color: #aaa; font-size: 0.9rem;">Try to format JSON response</label>
          </div>
        </div>
      </div>
    </div>

    <div class="proxy-status">
      <div style="background: #292d36; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
        <h4 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1rem;">Status</h4>
        <div id="status-display" style="color: #aaa; font-size: 0.9rem;">Ready to fetch URLs</div>
        <div id="response-preview" style="margin-top: 12px; max-height: 200px; overflow-y: auto; background: #1e1e1e; padding: 12px; border-radius: 4px; font-family: 'Consolas', monospace; font-size: 0.85rem; color: #d4d4d4; display: none;"></div>
      </div>
    </div>
  `;
    const urlInput = corsProxyView.querySelector("#url-input");
    const fetchBtn = corsProxyView.querySelector("#fetch-btn");
    const openNewTabBtn = corsProxyView.querySelector("#open-new-tab-btn");
    const clearUrlBtn = corsProxyView.querySelector("#clear-url-btn");
    const proxyService = corsProxyView.querySelector("#proxy-service");
    const jsonFormat = corsProxyView.querySelector("#json-format");
    const statusDisplay = corsProxyView.querySelector("#status-display");
    const responsePreview = corsProxyView.querySelector("#response-preview");
    const presetCards = corsProxyView.querySelectorAll(".preset-site");
    function updateStatus(message, type = "info") {
      statusDisplay.textContent = message;
      statusDisplay.style.color = type === "success" ? "#56d364" : type === "error" ? "#f85149" : type === "warning" ? "#d29922" : "#aaa";
    }
    function isValidUrl(string) {
      try {
        new URL(string);
        return string.startsWith("http://") || string.startsWith("https://");
      } catch (_) {
        return false;
      }
    }
    function formatResponse(text) {
      if (!jsonFormat.checked) return text;
      try {
        const json = JSON.parse(text);
        return JSON.stringify(json, null, 2);
      } catch {
        return text;
      }
    }
    function showResponsePreview(text) {
      responsePreview.textContent = formatResponse(text);
      responsePreview.style.display = "block";
    }
    function hideResponsePreview() {
      responsePreview.style.display = "none";
    }
    async function fetchViaProxy(url, openInNewTab = false) {
      if (!isValidUrl(url)) {
        updateStatus(
          "Please enter a valid URL starting with http:// or https://",
          "error"
        );
        return;
      }
      const proxyUrl = proxyService.value;
      const fullProxyUrl = proxyUrl + encodeURIComponent(url);
      updateStatus(`Fetching ${url} via proxy...`, "warning");
      hideResponsePreview();
      try {
        const response = await fetch(fullProxyUrl);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const text = await response.text();
        if (openInNewTab) {
          const newWindow = window.open();
          if (newWindow) {
            newWindow.document.write(text);
            newWindow.document.close();
            updateStatus(`Successfully opened ${url} in new tab`, "success");
          } else {
            updateStatus(
              "Failed to open new tab - popup might be blocked",
              "error"
            );
          }
        } else {
          showResponsePreview(text);
          updateStatus(
            `Successfully fetched ${url} (${text.length} characters)`,
            "success"
          );
        }
      } catch (error) {
        updateStatus(`Error: ${error.message}`, "error");
        hideResponsePreview();
      }
    }
    fetchBtn.addEventListener("click", () => {
      const url = urlInput.value.trim();
      fetchViaProxy(url, false);
    });
    openNewTabBtn.addEventListener("click", () => {
      const url = urlInput.value.trim();
      fetchViaProxy(url, true);
    });
    clearUrlBtn.addEventListener("click", () => {
      urlInput.value = "";
      hideResponsePreview();
      updateStatus("Input cleared", "info");
    });
    presetCards.forEach((card) => {
      card.addEventListener("click", () => {
        const url = card.dataset.url;
        urlInput.value = url;
        fetchViaProxy(url, false);
      });
    });
    urlInput.addEventListener("input", () => {
      const url = urlInput.value.trim();
      if (!url) {
        urlInput.style.borderColor = "#404040";
        updateStatus("Ready to fetch URLs", "info");
      } else if (isValidUrl(url)) {
        urlInput.style.borderColor = "#28a745";
        updateStatus(`Ready to fetch: ${url}`, "info");
      } else {
        urlInput.style.borderColor = "#dc3545";
        updateStatus(
          "Please enter a valid URL (must start with http:// or https://)",
          "error"
        );
      }
    });
    urlInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        fetchBtn.click();
      }
    });
    proxyService.addEventListener("change", () => {
      const serviceName = proxyService.options[proxyService.selectedIndex].text;
      updateStatus(`Switched to ${serviceName}`, "info");
    });
    return corsProxyView;
  }

  // src/views/pocketBrowser.js
  function createPocketBrowserView() {
    injectAppCSS();
    let browserConfig = null;
    try {
      browserConfig = getPocketBrowserSettings();
    } catch (e) {
      console.warn("Could not load pocket browser settings");
    }
    const browserSettings = browserConfig || {
      homepage: "https://google.com?igu=1",
      enableHistory: true,
      enableBookmarks: true,
      enablePopupBlocker: true,
      enableSafeSearch: false,
      userAgent: "default"
    };
    const pocketBrowserView = document.createElement("div");
    pocketBrowserView.style.cssText = `
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #23272f;
    flex-direction: column;
  `;
    pocketBrowserView.style.display = "none";
    const toolbar = document.createElement("div");
    toolbar.style.cssText = `
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    background: #292d36;
    border-bottom: 1px solid #404040;
  `;
    const backBtn = document.createElement("button");
    backBtn.innerHTML = "\u2B05\uFE0F";
    backBtn.title = "Go Back";
    backBtn.style.cssText = `
    padding: 8px 12px;
    background: #007acc;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;
    const forwardBtn = document.createElement("button");
    forwardBtn.innerHTML = "\u27A1\uFE0F";
    forwardBtn.title = "Go Forward";
    forwardBtn.style.cssText = `
    padding: 8px 12px;
    background: #007acc;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;
    const refreshBtn = document.createElement("button");
    refreshBtn.innerHTML = "\u{1F504}";
    refreshBtn.title = "Refresh";
    refreshBtn.style.cssText = `
    padding: 8px 12px;
    background: #28a745;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;
    const homeBtn = document.createElement("button");
    homeBtn.innerHTML = "\u{1F3E0}";
    homeBtn.title = "Home";
    homeBtn.style.cssText = `
    padding: 8px 12px;
    background: #6c757d;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;
    const bookmarksBtn = document.createElement("button");
    bookmarksBtn.innerHTML = "\u2B50";
    bookmarksBtn.title = "Bookmarks";
    bookmarksBtn.style.cssText = `
    padding: 8px 12px;
    background: #ffc107;
    border: none;
    border-radius: 6px;
    color: #000;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
    display: ${browserSettings.enableBookmarks ? "block" : "none"};
  `;
    const historyBtn = document.createElement("button");
    historyBtn.innerHTML = "\u{1F4CB}";
    historyBtn.title = "Session History";
    historyBtn.style.cssText = `
    padding: 8px 12px;
    background: #17a2b8;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
    display: ${browserSettings.enableHistory ? "block" : "none"};
  `;
    const urlBar = document.createElement("input");
    urlBar.type = "text";
    urlBar.placeholder = "Enter URL and press Enter";
    urlBar.style.cssText = `
    flex: 1;
    padding: 10px 12px;
    background: #1e1e1e;
    border: 1px solid #404040;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
  `;
    const goBtn = document.createElement("button");
    goBtn.innerHTML = "Go";
    goBtn.style.cssText = `
    padding: 10px 16px;
    background: #007acc;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: background 0.2s;
  `;
    const allButtons = [backBtn, forwardBtn, refreshBtn, homeBtn, goBtn];
    if (browserSettings.enableBookmarks) allButtons.push(bookmarksBtn);
    if (browserSettings.enableHistory) allButtons.push(historyBtn);
    allButtons.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        if (btn === refreshBtn) btn.style.background = "#218838";
        else if (btn === homeBtn) btn.style.background = "#5a6268";
        else if (btn === bookmarksBtn) btn.style.background = "#e0a800";
        else if (btn === historyBtn) btn.style.background = "#138496";
        else btn.style.background = "#0056b3";
      });
      btn.addEventListener("mouseleave", () => {
        if (btn === refreshBtn) btn.style.background = "#28a745";
        else if (btn === homeBtn) btn.style.background = "#6c757d";
        else if (btn === bookmarksBtn) btn.style.background = "#ffc107";
        else if (btn === historyBtn) btn.style.background = "#17a2b8";
        else btn.style.background = "#007acc";
      });
    });
    urlBar.addEventListener("focus", () => {
      urlBar.style.borderColor = "#007acc";
      urlBar.style.boxShadow = "0 0 0 2px rgba(0, 122, 204, 0.3)";
    });
    urlBar.addEventListener("blur", () => {
      urlBar.style.borderColor = "#404040";
      urlBar.style.boxShadow = "none";
    });
    toolbar.appendChild(backBtn);
    toolbar.appendChild(forwardBtn);
    toolbar.appendChild(refreshBtn);
    toolbar.appendChild(homeBtn);
    if (browserSettings.enableBookmarks) {
      toolbar.appendChild(bookmarksBtn);
    }
    if (browserSettings.enableHistory) {
      toolbar.appendChild(historyBtn);
    }
    toolbar.appendChild(urlBar);
    toolbar.appendChild(goBtn);
    const iframeContainer = document.createElement("div");
    iframeContainer.style.cssText = `
    flex: 1;
    background: #fff;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    min-height: 0;
    height: calc(100% - 60px);
  `;
    const pocketBrowserIframe = document.createElement("iframe");
    pocketBrowserIframe.src = browserSettings.homepage;
    pocketBrowserIframe.style.cssText = `
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  `;
    if (browserSettings.userAgent && browserSettings.userAgent !== "default") {
      const userAgentMap = {
        chrome: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        firefox: "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/120.0",
        safari: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15",
        mobile: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
      };
      if (userAgentMap[browserSettings.userAgent]) {
        pocketBrowserIframe.setAttribute(
          "sandbox",
          "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-navigation"
        );
      }
    }
    let sessionHistoryList = [];
    let bookmarksStorage = [];
    try {
      const savedBookmarks = localStorage.getItem("pocketBrowserBookmarks");
      if (savedBookmarks) {
        bookmarksStorage = JSON.parse(savedBookmarks);
      }
    } catch (e) {
      console.warn("Could not load bookmarks:", e);
      bookmarksStorage = [];
    }
    iframeContainer.appendChild(pocketBrowserIframe);
    let history2 = [browserSettings.homepage];
    let currentIndex = 0;
    function updateUrl(url) {
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = `https://${url}`;
      }
      pocketBrowserIframe.src = url;
      urlBar.value = url;
      if (currentIndex < history2.length - 1) {
        history2 = history2.slice(0, currentIndex + 1);
      }
      history2.push(url);
      currentIndex = history2.length - 1;
      if (browserSettings.enableHistory) {
        const historyEntry = {
          url,
          title: extractDomainFromUrl(url),
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        };
        sessionHistoryList.unshift(historyEntry);
        if (sessionHistoryList.length > 50) {
          sessionHistoryList = sessionHistoryList.slice(0, 50);
        }
      }
      updateButtonStates();
    }
    function extractDomainFromUrl(url) {
      try {
        return new URL(url).hostname;
      } catch (e) {
        return url;
      }
    }
    function updateButtonStates() {
      backBtn.disabled = currentIndex <= 0;
      forwardBtn.disabled = currentIndex >= history2.length - 1;
      backBtn.style.opacity = backBtn.disabled ? "0.5" : "1";
      forwardBtn.style.opacity = forwardBtn.disabled ? "0.5" : "1";
      backBtn.style.cursor = backBtn.disabled ? "not-allowed" : "pointer";
      forwardBtn.style.cursor = forwardBtn.disabled ? "not-allowed" : "pointer";
    }
    backBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        const url = history2[currentIndex];
        pocketBrowserIframe.src = url;
        urlBar.value = url;
        updateButtonStates();
      }
    });
    forwardBtn.addEventListener("click", () => {
      if (currentIndex < history2.length - 1) {
        currentIndex++;
        const url = history2[currentIndex];
        pocketBrowserIframe.src = url;
        urlBar.value = url;
        updateButtonStates();
      }
    });
    refreshBtn.addEventListener("click", () => {
      pocketBrowserIframe.src = pocketBrowserIframe.src;
    });
    homeBtn.addEventListener("click", () => {
      updateUrl(browserSettings.homepage);
    });
    const navigateToUrl = () => {
      const url = urlBar.value.trim();
      if (url) {
        updateUrl(url);
      }
    };
    goBtn.addEventListener("click", navigateToUrl);
    urlBar.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        navigateToUrl();
      }
    });
    if (browserSettings.enableBookmarks) {
      bookmarksBtn.addEventListener("click", () => {
        showBookmarksMenu();
      });
    }
    if (browserSettings.enableHistory) {
      historyBtn.addEventListener("click", () => {
        showSessionHistoryMenu();
      });
    }
    function showBookmarksMenu() {
      const menu = createDropdownMenu();
      const currentUrl = urlBar.value.trim();
      if (currentUrl) {
        const addBookmarkItem = document.createElement("div");
        addBookmarkItem.textContent = "\u2B50 Bookmark This Page";
        addBookmarkItem.style.cssText = `
        padding: 10px 15px;
        cursor: pointer;
        border-bottom: 1px solid #404040;
        font-weight: 600;
        color: #ffc107;
        background: rgba(255, 193, 7, 0.1);
      `;
        addBookmarkItem.addEventListener("click", () => {
          addBookmark(currentUrl, extractDomainFromUrl(currentUrl));
          document.body.removeChild(menu);
        });
        addBookmarkItem.addEventListener("mouseenter", () => {
          addBookmarkItem.style.background = "rgba(255, 193, 7, 0.2)";
        });
        addBookmarkItem.addEventListener("mouseleave", () => {
          addBookmarkItem.style.background = "rgba(255, 193, 7, 0.1)";
        });
        menu.appendChild(addBookmarkItem);
      }
      if (bookmarksStorage.length > 0) {
        bookmarksStorage.forEach((bookmark, index) => {
          const item = document.createElement("div");
          item.style.cssText = `
          padding: 10px 15px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #404040;
        `;
          const linkInfo = document.createElement("div");
          linkInfo.style.cssText = `
          flex: 1;
          min-width: 0;
        `;
          const title = document.createElement("div");
          title.textContent = bookmark.title || bookmark.url;
          title.style.cssText = `
          color: #fff;
          font-weight: 500;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin-bottom: 2px;
        `;
          const url = document.createElement("div");
          url.textContent = bookmark.url;
          url.style.cssText = `
          color: #aaa;
          font-size: 0.8rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        `;
          const deleteBtn = document.createElement("span");
          deleteBtn.textContent = "\u274C";
          deleteBtn.style.cssText = `
          margin-left: 10px;
          cursor: pointer;
          font-size: 12px;
          opacity: 0.7;
          transition: opacity 0.2s;
        `;
          linkInfo.appendChild(title);
          linkInfo.appendChild(url);
          linkInfo.addEventListener("click", () => {
            updateUrl(bookmark.url);
            document.body.removeChild(menu);
          });
          deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            removeBookmark(index);
            document.body.removeChild(menu);
          });
          deleteBtn.addEventListener("mouseenter", () => {
            deleteBtn.style.opacity = "1";
          });
          deleteBtn.addEventListener("mouseleave", () => {
            deleteBtn.style.opacity = "0.7";
          });
          item.addEventListener("mouseenter", () => {
            item.style.background = "rgba(0, 122, 204, 0.1)";
          });
          item.addEventListener("mouseleave", () => {
            item.style.background = "transparent";
          });
          item.appendChild(linkInfo);
          item.appendChild(deleteBtn);
          menu.appendChild(item);
        });
      } else {
        const emptyItem = document.createElement("div");
        emptyItem.textContent = "No bookmarks yet";
        emptyItem.style.cssText = `
        padding: 20px;
        color: #aaa;
        text-align: center;
        font-style: italic;
      `;
        menu.appendChild(emptyItem);
      }
      positionMenu(menu, bookmarksBtn);
    }
    function showSessionHistoryMenu() {
      const menu = createDropdownMenu();
      if (sessionHistoryList.length > 0) {
        sessionHistoryList.slice(0, 15).forEach((entry) => {
          const item = document.createElement("div");
          item.style.cssText = `
          padding: 10px 15px;
          cursor: pointer;
          border-bottom: 1px solid #404040;
        `;
          const title = document.createElement("div");
          title.textContent = entry.title;
          title.style.cssText = `
          color: #fff;
          font-weight: 500;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin-bottom: 4px;
        `;
          const details = document.createElement("div");
          details.style.cssText = `
          display: flex;
          justify-content: space-between;
          align-items: center;
        `;
          const url = document.createElement("span");
          url.textContent = entry.url;
          url.style.cssText = `
          color: #aaa;
          font-size: 0.8rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          flex: 1;
          margin-right: 10px;
        `;
          const time = document.createElement("span");
          time.textContent = new Date(entry.timestamp).toLocaleTimeString();
          time.style.cssText = `
          color: #888;
          font-size: 0.75rem;
        `;
          details.appendChild(url);
          details.appendChild(time);
          item.appendChild(title);
          item.appendChild(details);
          item.addEventListener("click", () => {
            updateUrl(entry.url);
            document.body.removeChild(menu);
          });
          item.addEventListener("mouseenter", () => {
            item.style.background = "rgba(23, 162, 184, 0.1)";
          });
          item.addEventListener("mouseleave", () => {
            item.style.background = "transparent";
          });
          menu.appendChild(item);
        });
        const clearItem = document.createElement("div");
        clearItem.textContent = "\u{1F5D1}\uFE0F Clear Session History";
        clearItem.style.cssText = `
        padding: 10px 15px;
        cursor: pointer;
        color: #dc3545;
        font-weight: 600;
        border-top: 2px solid #404040;
        margin-top: 5px;
      `;
        clearItem.addEventListener("click", () => {
          sessionHistoryList = [];
          document.body.removeChild(menu);
        });
        clearItem.addEventListener("mouseenter", () => {
          clearItem.style.background = "rgba(220, 53, 69, 0.1)";
        });
        clearItem.addEventListener("mouseleave", () => {
          clearItem.style.background = "transparent";
        });
        menu.appendChild(clearItem);
      } else {
        const emptyItem = document.createElement("div");
        emptyItem.textContent = "No history for this session";
        emptyItem.style.cssText = `
        padding: 20px;
        color: #aaa;
        text-align: center;
        font-style: italic;
      `;
        menu.appendChild(emptyItem);
      }
      positionMenu(menu, historyBtn);
    }
    function createDropdownMenu() {
      const menu = document.createElement("div");
      menu.style.cssText = `
      position: fixed;
      background: #292d36;
      border: 1px solid #404040;
      border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
      z-index: 100002;
      min-width: 300px;
      max-width: 450px;
      max-height: 400px;
      overflow-y: auto;
    `;
      setTimeout(() => {
        const closeHandler = (e) => {
          if (!menu.contains(e.target)) {
            if (document.body.contains(menu)) {
              document.body.removeChild(menu);
            }
            document.removeEventListener("click", closeHandler);
          }
        };
        document.addEventListener("click", closeHandler);
      }, 0);
      return menu;
    }
    function positionMenu(menu, button) {
      const rect = button.getBoundingClientRect();
      menu.style.left = rect.left + "px";
      menu.style.top = rect.bottom + 5 + "px";
      document.body.appendChild(menu);
      const menuRect = menu.getBoundingClientRect();
      if (menuRect.right > window.innerWidth) {
        menu.style.left = window.innerWidth - menuRect.width - 10 + "px";
      }
      if (menuRect.bottom > window.innerHeight) {
        menu.style.top = rect.top - menuRect.height - 5 + "px";
      }
    }
    function addBookmark(url, title) {
      if (!url) return;
      const exists = bookmarksStorage.some((bookmark2) => bookmark2.url === url);
      if (exists) return;
      const bookmark = {
        url,
        title: title || extractDomainFromUrl(url),
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      };
      bookmarksStorage.unshift(bookmark);
      if (bookmarksStorage.length > 50) {
        bookmarksStorage = bookmarksStorage.slice(0, 50);
      }
      try {
        localStorage.setItem(
          "pocketBrowserBookmarks",
          JSON.stringify(bookmarksStorage)
        );
      } catch (e) {
        console.warn("Could not save bookmarks:", e);
      }
    }
    function removeBookmark(index) {
      bookmarksStorage.splice(index, 1);
      try {
        localStorage.setItem(
          "pocketBrowserBookmarks",
          JSON.stringify(bookmarksStorage)
        );
      } catch (e) {
        console.warn("Could not save bookmarks:", e);
      }
    }
    updateButtonStates();
    function updateButtonVisibility() {
      if (bookmarksBtn) {
        bookmarksBtn.style.display = browserSettings.enableBookmarks ? "block" : "none";
      }
      if (historyBtn) {
        historyBtn.style.display = browserSettings.enableHistory ? "block" : "none";
      }
    }
    window.addEventListener("storage", (e) => {
      if (e.key === "pocketBrowserSettings") {
        const newBrowserSettings = getPocketBrowserSettings();
        Object.assign(browserSettings, newBrowserSettings);
        updateButtonVisibility();
      }
    });
    window.addEventListener("pocketBrowserSettingsChanged", (e) => {
      console.log("Pocket Browser: Settings changed event received", e.detail);
      Object.assign(browserSettings, e.detail);
      updateButtonVisibility();
      console.log("Pocket Browser: Button visibility updated", {
        bookmarks: browserSettings.enableBookmarks,
        history: browserSettings.enableHistory
      });
    });
    updateButtonVisibility();
    pocketBrowserView.appendChild(toolbar);
    pocketBrowserView.appendChild(iframeContainer);
    return pocketBrowserView;
  }

  // src/views/scripts.js
  function createscriptsView() {
    if (!document.getElementById("scripts-view-style")) {
      const style = document.createElement("style");
      style.id = "scripts-view-style";
      style.textContent = `
      .scripts-view {
        padding: 20px;
        background: #23272f;
        border-radius: 10px;
        min-height: 400px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.15);
      }
      .scripts-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 18px;
        margin-top: 10px;
      }
      .script-item {
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
      .script-item:hover {
        box-shadow: 0 4px 16px 0 rgba(0,122,204,0.15);
        transform: translateY(-2px) scale(1.03);
        background: #2d323e;
      }
      .script-item .script-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: #00bfff;
        margin-bottom: 4px;
      }
      .script-item .script-desc {
        font-size: 0.95rem;
        color: #aaa;
        margin-bottom: 2px;
      }
    `;
      document.head.appendChild(style);
    }
    const scriptsView = document.createElement("div");
    scriptsView.className = "scripts-view";
    const scriptActions = [
      {
        title: "Tab Cloak",
        desc: "Open a URL in a cloaked tab.",
        onClick: () => {
          let url = prompt("Enter the URL to cloak:", "https://example.com");
          let win = window.open();
          let iframe = win.document.createElement("iframe");
          iframe.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
          if (url.includes("https://") || url.includes("http://")) {
            iframe.src = url;
          } else {
            iframe.src = "https://" + url;
          }
          win.document.body.appendChild(iframe);
        }
      },
      {
        title: "Page Editor On",
        desc: "Make the current page editable.",
        onClick: () => {
          document.body.contentEditable = "true";
          document.designMode = "on";
          alert(
            "Page is now editable. Refresh the page or press page editor off to disable editing."
          );
        }
      },
      {
        title: "Page Editor Off",
        desc: "Disable page editing mode.",
        onClick: () => {
          document.body.contentEditable = "false";
          document.designMode = "off";
          alert("Page editing is now disabled.");
        }
      },
      {
        title: "Blooket Cheats",
        desc: "Inject Blooket Cheats GUI.",
        onClick: () => {
          try {
            (function() {
              let script = document.createElement("script");
              script.src = "https://cdn.jsdelivr.net/gh/randomstuff69/blooketcheatsplus@master/GUI/Gui.js";
              document.body.appendChild(script);
            })();
          } catch (error) {
            alert(`Error loading Blooket Cheats: ${error.message}`);
          }
        }
      },
      {
        title: "Fake Crash",
        desc: "Simulate a browser crash and close the tab.",
        onClick: () => {
          if (window.proxyFrame) {
            window.proxyFrame.style.display = "none";
          }
          setTimeout(() => {
            alert(
              "Uncaught TypeError: Failed to execute 'run' on 'ClientCore': Cannot read properties of undefined (reading 'execute')\n    at ProxyClientCore.run (main.js:1:1234)\n    at <anonymous>:1:1"
            );
            window.close();
            setTimeout(() => {
              if (!window.closed) {
                window.location.href = "about:blank";
                setTimeout(() => {
                  window.close();
                  if (!window.closed) {
                    alert(
                      "Unable to close the tab automatically. Please close it manually."
                    );
                  }
                }, 100);
              }
            }, 100);
          }, 50);
        }
      },
      {
        title: "Emergency Tab Switcher",
        desc: "Quickly switch to a safe tab with Z or click.",
        onClick: () => {
          (() => {
            const elem = document.createElement("div");
            const body = document.body;
            body.appendChild(elem);
            Object.assign(elem.style, {
              position: "fixed",
              top: "0px",
              right: "0px",
              margin: "10px",
              paddingTop: "10px",
              width: "200px",
              height: "40px",
              zIndex: "10000",
              opacity: "0.9",
              color: "white",
              backgroundColor: "black",
              border: "1px solid white",
              textAlign: "center",
              cursor: "pointer",
              display: "block"
            });
            elem.id = "elem";
            elem.textContent = "Z";
            const safetyUrl = prompt(
              "What tab do you want to open when a teacher comes by? Click Z to go to that tab. Warning: may have to click out of element for it to work"
            );
            const navigateToSafety = () => {
              if (safetyUrl) {
                window.location.href = safetyUrl;
              }
            };
            window.addEventListener("keydown", (event) => {
              if (event.key.toLowerCase() === "z") {
                navigateToSafety();
              }
            });
            elem.addEventListener("click", navigateToSafety);
          })();
        }
      }
    ];
    const list = document.createElement("div");
    list.className = "scripts-list";
    scriptActions.forEach((action) => {
      const item = document.createElement("div");
      item.className = "script-item";
      item.tabIndex = 0;
      item.innerHTML = `
      <div class="script-title">${action.title}</div>
      <div class="script-desc">${action.desc}</div>
    `;
      item.addEventListener("click", action.onClick);
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          action.onClick();
        }
      });
      list.appendChild(item);
    });
    scriptsView.appendChild(list);
    return scriptsView;
  }

  // src/views/bookmarklets.js
  function createBookmarkletsView() {
    injectAppCSS();
    const bookmarkletsView = document.createElement("div");
    bookmarkletsView.className = "games-view";
    const bookmarklets = [
      {
        name: "page editer (on)",
        url: "javascript: document.body.contentEditable = 'true';document.designMode = 'on';void 0;"
      },
      {
        name: "page editer (off)",
        url: "javascript: document.body.contentEditable = 'false';document.designMode = 'off';void 0;"
      },
      {
        name: "jsdelivr (repo)",
        url: "javascript: (function () {     let repo = prompt('Enter the repository (user/repo/file): ');     if (repo) {         let url = `https://cdn.jsdelivr.net/gh/${repo}`;         const choice = prompt(             'what would you like to do?\n1. Open in new tab\n2. Copy to clipboard\n3. give a bookmarklet for it (fetch)\n4: give a bookmarklet for it (script tag)\n5: Cancel'         );         if (choice === '1') {             window.open(url, '_blank');         } else if (choice === '2') {             navigator.clipboard                 .writeText(url)                 .then(() => {                     alert('URL copied to clipboard! ' + url);                 })                 .catch(() => {                     prompt('Copy this URL manually:', url);                 });         } else if (choice === '3') {             const bookmarklet = `javascript:fetch('${url}).then(data=>{data.text().then(text=>{eval(text)})});`;             prompt('Copy this bookmarklet:', bookmarklet);         } else if (choice === '4') {             const bookmarklet = `javascript:(function() { let script = document.createElement('script'); script.src = '${url}'; document.head.appendChild(script); })();`;             prompt('Copy this bookmarklet:', bookmarklet);         } else {             alert('Cancelled');         }     } })();"
      },
      {
        name: "absurd crypto multi blooket (always)",
        url: `javascript: const activateTripleCrypto = async () => {       setInterval(         () =>           Object.values(             (function findReact(r = document.querySelector("body>div")) {               return Object.values(r)[1]?.children?.[0]?._owner.stateNode                 ? r                 : findReact(r.querySelector(":scope>div"));             })()           )[1].children[0]._owner.stateNode.setState({             choices: [               {                 type: "mult",                 val: 10000000000000000000000000000000,                 rate: 0.075,                 blook: "Brainy Bot",                 text: "100x Crypto",               },             ],           }),         25       );     };     let cryptoImage = new Image();     cryptoImage.src =       "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/crypto/alwaysTriple.png?" +       Date.now();     cryptoImage.crossOrigin = "Anonymous";     cryptoImage.onload = function () {       const canvasElement = document.createElement("canvas");       const canvasContext = canvasElement.getContext("2d");       canvasContext.drawImage(cryptoImage, 0, 0, this.width, this.height);       let { data: imageData } = canvasContext.getImageData(           0,           0,           this.width,           this.height         ),         decodedText = "",         previousChar;       for (let i = 0; i < imageData.length; i += 4) {         let currentChar = String.fromCharCode(           imageData[i + 1] * 256 + imageData[i + 2]         );         decodedText += currentChar;         if (currentChar == "/" && previousChar == "*") break;         previousChar = currentChar;       }       let iframeElement = document.querySelector("iframe");       const [_, lastUpdatedTime, errorMessage] = decodedText.match(         /LastUpdated: (.+?); ErrorMessage: "([sS]+?)"/       );       if (         parseInt(lastUpdatedTime) <= 1708817191426 ||         iframeElement.contentWindow.confirm(errorMessage)       )         activateTripleCrypto();     };     cryptoImage.onerror = cryptoImage.onabort = () => {       cryptoImage.onerror = cryptoImage.onabort = null;       activateTripleCrypto();       let iframeElement = document.querySelector("iframe");       iframeElement.contentWindow.alert(         "It seems the GitHub is either blocked or down.

If it's NOT blocked, join the Discord server for updates
https://discord.gg/jHjGrrdXP6"       );     };`
      },
      {
        name: "100x crypto multi (always)",
        url: `javascript: const activateTripleCrypto = async () => {       setInterval(         () =>           Object.values(             (function findReact(r = document.querySelector("body>div")) {               return Object.values(r)[1]?.children?.[0]?._owner.stateNode                 ? r                 : findReact(r.querySelector(":scope>div"));             })()           )[1].children[0]._owner.stateNode.setState({             choices: [               {                 type: "mult",                 val: 100,                 rate: 0.075,                 blook: "Brainy Bot",                 text: "100x Crypto",               },             ],           }),         25       );     };     let cryptoImage = new Image();     cryptoImage.src =       "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/crypto/alwaysTriple.png?" +       Date.now();     cryptoImage.crossOrigin = "Anonymous";     cryptoImage.onload = function () {       const canvasElement = document.createElement("canvas");       const canvasContext = canvasElement.getContext("2d");       canvasContext.drawImage(cryptoImage, 0, 0, this.width, this.height);       let { data: imageData } = canvasContext.getImageData(           0,           0,           this.width,           this.height         ),         decodedText = "",         previousChar;       for (let i = 0; i < imageData.length; i += 4) {         let currentChar = String.fromCharCode(           imageData[i + 1] * 256 + imageData[i + 2]         );         decodedText += currentChar;         if (currentChar == "/" && previousChar == "*") break;         previousChar = currentChar;       }       let iframeElement = document.querySelector("iframe");       const [_, lastUpdatedTime, errorMessage] = decodedText.match(         /LastUpdated: (.+?); ErrorMessage: "([sS]+?)"/       );       if (         parseInt(lastUpdatedTime) <= 1708817191426 ||         iframeElement.contentWindow.confirm(errorMessage)       )         activateTripleCrypto();     };     cryptoImage.onerror = cryptoImage.onabort = () => {       cryptoImage.onerror = cryptoImage.onabort = null;       activateTripleCrypto();       let iframeElement = document.querySelector("iframe");       iframeElement.contentWindow.alert(         "It seems the GitHub is either blocked or down.

If it's NOT blocked, join the Discord server for updates
https://discord.gg/jHjGrrdXP6"       );     };`
      },
      {
        name: "3x crypto blooket hack (always)",
        url: `javascript: const activateTripleCrypto = async () => {       setInterval(         () =>           Object.values(             (function findReact(r = document.querySelector("body>div")) {               return Object.values(r)[1]?.children?.[0]?._owner.stateNode                 ? r                 : findReact(r.querySelector(":scope>div"));             })()           )[1].children[0]._owner.stateNode.setState({             choices: [               {                 type: "mult",                 val: 3,                 rate: 0.075,                 blook: "Brainy Bot",                 text: "Triple Crypto",               },             ],           }),         25       );     };     let cryptoImage = new Image();     cryptoImage.src =       "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/crypto/alwaysTriple.png?" +       Date.now();     cryptoImage.crossOrigin = "Anonymous";     cryptoImage.onload = function () {       const canvasElement = document.createElement("canvas");       const canvasContext = canvasElement.getContext("2d");       canvasContext.drawImage(cryptoImage, 0, 0, this.width, this.height);       let { data: imageData } = canvasContext.getImageData(           0,           0,           this.width,           this.height         ),         decodedText = "",         previousChar;       for (let i = 0; i < imageData.length; i += 4) {         let currentChar = String.fromCharCode(           imageData[i + 1] * 256 + imageData[i + 2]         );         decodedText += currentChar;         if (currentChar == "/" && previousChar == "*") break;         previousChar = currentChar;       }       let iframeElement = document.querySelector("iframe");       const [_, lastUpdatedTime, errorMessage] = decodedText.match(         /LastUpdated: (.+?); ErrorMessage: "([sS]+?)"/       );       if (         parseInt(lastUpdatedTime) <= 1708817191426 ||         iframeElement.contentWindow.confirm(errorMessage)       )         activateTripleCrypto();     };     cryptoImage.onerror = cryptoImage.onabort = () => {       cryptoImage.onerror = cryptoImage.onabort = null;       activateTripleCrypto();       let iframeElement = document.querySelector("iframe");       iframeElement.contentWindow.alert(         "It seems the GitHub is either blocked or down.

If it's NOT blocked, join the Discord server for updates
https://discord.gg/jHjGrrdXP6"       );     };`
      }
    ];
    const list = document.createElement("div");
    list.className = "games-list";
    bookmarklets.forEach((bookmarklet) => {
      const item = document.createElement("div");
      item.className = "game-item";
      item.tabIndex = 0;
      const anchor = document.createElement("a");
      anchor.href = bookmarklet.url;
      anchor.draggable = true;
      anchor.textContent = bookmarklet.name;
      const gameType = document.createElement("div");
      gameType.className = "game-type";
      gameType.textContent = "Bookmarklet";
      item.appendChild(anchor);
      item.appendChild(gameType);
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(bookmarklet.url).then(() => {
          const originalText = gameType.textContent;
          gameType.textContent = "Copied!";
          setTimeout(() => {
            gameType.textContent = originalText;
          }, 1200);
        });
      });
      anchor.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/uri-list", bookmarklet.url);
        e.dataTransfer.setData("text/plain", bookmarklet.url);
        e.dataTransfer.setData(
          "text/html",
          `<a href="${bookmarklet.url}">${bookmarklet.name}</a>`
        );
      });
      list.appendChild(item);
    });
    bookmarkletsView.appendChild(list);
    return bookmarkletsView;
  }

  // src/utils/helpers.js
  async function loadJson(file) {
    try {
      const response = await fetch(file);
      if (!response.ok)
        throw new Error(`Failed to load ${file}: ${response.statusText}`);
      return await response.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  // src/views/games.js
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
      import { loadJson } from "../utils/helpers.js";
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
  var TABS = [
    { key: "blocked", label: "Blocked" },
    { key: "unblocked", label: "Unblocked" },
    { key: "cors-optimized", label: "CORS Proxy Optimized" }
  ];
  var gamesData = [];
  var activeTab = "unblocked";
  async function loadGames() {
    let loaded = await loadJson("src/data/json/games.json");
    gamesData = loaded;
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
        <button class="games-tab${activeTab === tab.key ? " active" : ""}" data-tab-key="${tab.key}">${tab.label}</button>
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
      ${filtered.length === 0 ? `<p style="grid-column: 1/-1; text-align: center; color: #aaa;">No games found.</p>` : filtered.map(
      (game) => `
        <div class="game-item">
          <a href="${game.url}" target="_blank">${game.title}</a>
          <div class="game-type">${game.type.replace(
        "cors-optimized",
        "CORS Optimized"
      )}</div>
        </div>
      `
    ).join("")}
    </div>
  `;
    setupTabEventListeners();
  }
  function setupTabEventListeners() {
    const container = document.getElementById("games-view");
    if (!container) return;
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
  function showGamesView() {
    return `
    <div id="games-view" class="games-view">
      Loading games...
    </div>
  `;
  }
  injectGamesCSS();
  loadGames();

  // src/main.js
  console.log("\n\nNow launching ASC2563's Ocot Client...\n\n");
  var ProxyClientApp = class {
    constructor() {
      this.frame = null;
      this.views = {};
      this.sidebar = new sidebar_default();
      this.sidebarButtons = {};
    }
    launch() {
      injectAppCSS();
      sidebar_default.injectCSS();
      this.injectAppStyles();
      this.frame = document.createElement("div");
      window.proxyFrame = this.frame;
      this.setupFrameStyle();
      const sidebarElement = this.sidebar.createSidebar();
      this.sidebar.addNavigationButtons();
      this.sidebarButtons = this.sidebar.getButtons();
      this.sidebar.setActiveButton(null);
      const sidebarHeader = this.sidebar.getHeader();
      sidebarHeader.addEventListener("click", () => {
        this.showWelcomeView();
      });
      const content = this.createContent();
      this.frame.appendChild(sidebarElement);
      this.frame.appendChild(content);
      document.body.appendChild(this.frame);
      this.createFloatingButton();
      document.addEventListener("keydown", (event) => {
        if (event.key === "\\") {
          if (window.proxyFrame) {
            this.toggleProxyClient();
          }
        }
      });
      document.addEventListener("click", (event) => {
        if (this.frame && this.frame.style.display !== "none") {
          const clickedInsideFrame = this.frame.contains(event.target);
          if (!clickedInsideFrame) {
            console.log("Clicking outside - clearing active buttons");
            this.sidebar.setActiveButton(null);
          }
        }
      });
      this.sidebarButtons.hideButton.addEventListener("click", () => {
        this.hideProxyClient();
      });
      this.sidebarButtons.removeButton.addEventListener("click", () => {
        this.removeProxyClient();
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
        background: var(--bg-primary);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        border: 1px solid var(--border-color);
        overflow: hidden;
      }
      
      /* Content Area Styling */
      .proxy-content {
        background: var(--bg-primary);
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
    createFloatingButton() {
      console.log("Creating floating button...");
      this.floatingButton = document.createElement("div");
      this.floatingButton.innerHTML = "\u{1F527}";
      this.floatingButton.title = "Show Ocot Client (Press \\ to toggle)";
      this.floatingButton.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #007acc, #0056b3);
      border: 2px solid #004085;
      border-radius: 50%;
      display: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 100000;
      font-size: 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      user-select: none;
    `;
      console.log("Floating button created, adding to body...");
      this.floatingButton.addEventListener("mouseenter", () => {
        this.floatingButton.style.transform = "scale(1.1)";
        this.floatingButton.style.boxShadow = "0 6px 16px rgba(0, 122, 204, 0.4)";
      });
      this.floatingButton.addEventListener("mouseleave", () => {
        this.floatingButton.style.transform = "scale(1)";
        this.floatingButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
      });
      this.floatingButton.addEventListener("click", (e) => {
        if (!this.isDragging) {
          console.log("Floating button clicked!");
          this.showProxyClient();
        }
      });
      this.addDragFunctionality();
      document.body.appendChild(this.floatingButton);
      console.log("Floating button added to body, should be visible now");
    }
    addDragFunctionality() {
      let isDragging = false;
      let startX, startY, initialX, initialY;
      this.isDragging = false;
      this.floatingButton.addEventListener("mousedown", (e) => {
        isDragging = true;
        this.isDragging = false;
        startX = e.clientX;
        startY = e.clientY;
        const rect = this.floatingButton.getBoundingClientRect();
        initialX = rect.left;
        initialY = rect.top;
        this.floatingButton.style.cursor = "grabbing";
        this.floatingButton.style.transition = "none";
        e.preventDefault();
      });
      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
          this.isDragging = true;
        }
        let newX = initialX + deltaX;
        let newY = initialY + deltaY;
        const buttonSize = 50;
        const maxX = window.innerWidth - buttonSize;
        const maxY = window.innerHeight - buttonSize;
        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));
        this.floatingButton.style.left = newX + "px";
        this.floatingButton.style.top = newY + "px";
        this.floatingButton.style.right = "auto";
        this.floatingButton.style.bottom = "auto";
      });
      document.addEventListener("mouseup", () => {
        if (isDragging) {
          isDragging = false;
          this.floatingButton.style.cursor = "pointer";
          this.floatingButton.style.transition = "all 0.3s ease";
          setTimeout(() => {
            this.isDragging = false;
          }, 100);
        }
      });
    }
    hideProxyClient() {
      console.log("Hiding Ocot Client, showing floating button");
      this.frame.style.display = "none";
      this.floatingButton.style.display = "flex";
    }
    showProxyClient() {
      console.log("Showing Ocot Client, hiding floating button");
      this.frame.style.display = "flex";
      this.floatingButton.style.display = "none";
    }
    toggleProxyClient() {
      if (this.frame.style.display === "none") {
        this.showProxyClient();
      } else {
        this.hideProxyClient();
      }
    }
    removeProxyClient() {
      console.log("Completely removing Ocot Client from page");
      if (this.frame && this.frame.parentNode) {
        this.frame.parentNode.removeChild(this.frame);
      }
      if (this.floatingButton && this.floatingButton.parentNode) {
        this.floatingButton.parentNode.removeChild(this.floatingButton);
      }
      this.frame = null;
      this.floatingButton = null;
      window.proxyFrame = null;
      console.log("Ocot Client completely removed");
    }
    // Show welcome view (called when clicking header)
    showWelcomeView() {
      Object.values(this.views).forEach((view) => view.style.display = "none");
      if (this.views.welcomeView) this.views.welcomeView.style.display = "flex";
      this.sidebar.setActiveButton(null);
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
      frame.style.zIndex = "99999";
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
      const overlay = document.createElement("div");
      overlay.className = "content-overlay";
      content.appendChild(overlay);
      this.views.welcomeView = createWelcomeView();
      this.views.proxyView = createProxyView();
      this.views.notesView = createNotesView();
      this.views.calculatorView = createCalculatorView();
      this.views.consoleView = createConsoleView();
      this.views.cloakingView = createCloakingView();
      this.views.historyFloodView = createHistoryFloodView();
      this.views.corsProxyView = createCorsProxyView();
      this.views.pocketBrowserView = createPocketBrowserView();
      this.views.scriptsView = createscriptsView();
      this.views.settingsView = createSettingsView();
      this.views.bookmarkletsView = createBookmarkletsView();
      const gamesViewDiv = document.createElement("div");
      gamesViewDiv.innerHTML = showGamesView();
      gamesViewDiv.style.display = "none";
      this.views.gamesView = gamesViewDiv;
      Object.values(this.views).forEach((view) => {
        view.style.position = "relative";
        view.style.zIndex = "1";
        content.appendChild(view);
      });
      Object.values(this.views).forEach((view) => view.style.display = "none");
      if (this.views.welcomeView) this.views.welcomeView.style.display = "flex";
      this.setupSidebarEvents();
      return content;
    }
    // --- Sidebar Button Events and View Switching ---
    setupSidebarEvents() {
      const v = this.views;
      const b = this.sidebarButtons;
      const hideAll = () => {
        Object.values(v).forEach((view) => view.style.display = "none");
      };
      const setActiveButton = (buttonKey) => {
        this.sidebar.setActiveButton(buttonKey);
      };
      b.proxyButton.addEventListener("click", () => {
        hideAll();
        v.proxyView.style.display = "flex";
        setActiveButton("proxyButton");
      });
      b.notesButton.addEventListener("click", () => {
        hideAll();
        v.notesView.style.display = "block";
        setActiveButton("notesButton");
      });
      b.calculatorButton.addEventListener("click", () => {
        hideAll();
        v.calculatorView.style.display = "block";
        setActiveButton("calculatorButton");
        this.initCalculator();
      });
      b.consoleButton.addEventListener("click", () => {
        hideAll();
        v.consoleView.style.display = "block";
        setActiveButton("consoleButton");
      });
      b.cloakingButton.addEventListener("click", () => {
        hideAll();
        v.cloakingView.style.display = "block";
        setActiveButton("cloakingButton");
      });
      b.historyFloodButton.addEventListener("click", () => {
        hideAll();
        v.historyFloodView.style.display = "block";
        setActiveButton("historyFloodButton");
      });
      b.corsProxyButton.addEventListener("click", () => {
        hideAll();
        v.corsProxyView.style.display = "block";
        setActiveButton("corsProxyButton");
      });
      b.pocketBrowserButton.addEventListener("click", () => {
        hideAll();
        v.pocketBrowserView.style.display = "block";
        setActiveButton("pocketBrowserButton");
      });
      b.scriptsButton.addEventListener("click", () => {
        hideAll();
        v.scriptsView.style.display = "block";
        setActiveButton("scriptsButton");
      });
      b.settingsButton.addEventListener("click", () => {
        hideAll();
        v.settingsView.style.display = "block";
        setActiveButton("settingsButton");
      });
      b.bookmarkletsButton.addEventListener("click", () => {
        hideAll();
        v.bookmarkletsView.style.display = "block";
        setActiveButton("bookmarkletsButton");
      });
      b.gamesButton.addEventListener("click", () => {
        hideAll();
        v.gamesView.style.display = "block";
        setActiveButton("gamesButton");
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
                  currentValue = typeof result === "number" && isFinite(result) ? result.toString() : "Error";
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
  };
  var app = new ProxyClientApp();
  app.launch();
})();
