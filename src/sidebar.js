// Sidebar UI Module for Ocot Client
// Handles all sidebar-related functionality and styling

export class ProxySidebar {
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

    // Create header
    const header = this.createHeader();

    // Create button container
    this.buttonContainer = this.createButtonContainer();

    // Assemble sidebar
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

    // Store reference for external event binding
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
    btn.className = `sidebar-btn`;
    btn.innerHTML = icon ? `${icon} ${label}` : label;
    return btn;
  }

  // Add all navigation buttons
  addNavigationButtons() {
    // Get current tab order from localStorage or use default
    const tabOrder = this._getTabOrder();
    const tabMetadata = this._getTabMetadata();

    // Create navigation buttons in custom order
    tabOrder.forEach((key) => {
      const tabData = tabMetadata[key];
      if (tabData) {
        this.buttons[key] = this.createButton(tabData.label, tabData.icon);
        // Settings button is active by default
        if (key === "settingsButton") {
          this.buttons[key].classList.add("active");
        }
        this.buttonContainer.appendChild(this.buttons[key]);
      }
    });
  }

  // Get tab order from localStorage or return default
  _getTabOrder() {
    const defaultOrder = [
      "proxyButton",
      "gamesButton",
      "bookmarkletsButton",
      "scriptsButton",
      "notesButton",
      "calculatorButton",
      "consoleButton",
      "cloakingButton",
      "historyFloodButton",
      "corsProxyButton",
      "pocketBrowserButton",
      "settingsButton",
    ];

    try {
      const saved = localStorage.getItem("ocot-tab-order");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Validate that we have all required tabs
        if (Array.isArray(parsed) && parsed.length === defaultOrder.length) {
          const hasAllTabs = defaultOrder.every((tab) => parsed.includes(tab));
          if (hasAllTabs) {
            return parsed;
          }
        }
      }
    } catch (e) {
      console.warn("Failed to load tab order from localStorage:", e);
    }
    return defaultOrder;
  }

  // Get tab metadata
  _getTabMetadata() {
    return {
      proxyButton: { label: "Proxy", icon: "🌐" },
      gamesButton: { label: "Games List", icon: "🎮" },
      bookmarkletsButton: { label: "Bookmarklets", icon: "🔖" },
      scriptsButton: { label: "Scripts", icon: "📜" },
      notesButton: { label: "Notes", icon: "📝" },
      calculatorButton: { label: "Calculator", icon: "🧮" },
      consoleButton: { label: "Console", icon: "💻" },
      cloakingButton: { label: "Cloaking", icon: "🎭" },
      historyFloodButton: { label: "History Flood", icon: "🌊" },
      corsProxyButton: { label: "CORS Proxy", icon: "🔄" },
      pocketBrowserButton: { label: "Pocket Browser", icon: "🔍" },
      settingsButton: { label: "Settings", icon: "⚙️" },
    };
  }

  // Method to refresh button order (for when settings change)
  refreshButtonOrder() {
    // Clear existing navigation buttons
    const buttonsToRemove = [];
    Object.keys(this.buttons).forEach((key) => {
      if (this.buttons[key] && this.buttons[key].parentNode) {
        this.buttons[key].parentNode.removeChild(this.buttons[key]);
      }
      buttonsToRemove.push(key);
    });

    // Remove from buttons object
    buttonsToRemove.forEach((key) => {
      delete this.buttons[key];
    });

    // Re-add navigation buttons with new order
    const tabOrder = this._getTabOrder();
    const tabMetadata = this._getTabMetadata();

    tabOrder.forEach((key) => {
      const tabData = tabMetadata[key];
      if (tabData) {
        this.buttons[key] = this.createButton(tabData.label, tabData.icon);
        // Settings button is active by default
        if (key === "settingsButton") {
          this.buttons[key].classList.add("active");
        }
        this.buttonContainer.appendChild(this.buttons[key]);
      }
    });
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

    // Remove active class from all buttons except settings
    Object.entries(this.buttons).forEach(([key, btn]) => {
      if (key !== "settingsButton") {
        console.log("Removing active from:", key);
        btn.classList.remove("active");
      }
    });

    // Add active class to selected button (if it exists and is not null)
    if (buttonKey && this.buttons[buttonKey]) {
      console.log("Adding active to:", buttonKey);
      this.buttons[buttonKey].classList.add("active");
    }

    // Always keep settings button active
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
}

// Export default for easy importing
export default ProxySidebar;
