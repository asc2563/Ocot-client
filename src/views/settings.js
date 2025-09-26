import { injectAppCSS } from "../css.js";

// Exported function to create the Settings view
export default function createSettingsView() {
  // Inject shared CSS
  injectAppCSS();
  
  // Inject tab order CSS
  injectTabOrderCSS();

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
          🎨 Themes
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
          🌐 Proxy Settings
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
            💾 Save Proxy Settings
          </button>
          <button id="reset-proxy-settings" class="games-tab" style="border-radius: 6px; background: #6c757d;">
            🔄 Reset to Default
          </button>
        </div>
      </div>

      <!-- Pocket Browser Settings Section -->
      <div class="settings-section browser-section">
        <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
          🔍 Pocket Browser Settings
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
            💾 Save Settings
          </button>
          <button id="reset-browser-settings" class="games-tab" style="border-radius: 6px; background: #6c757d;">
            🔄 Reset to Default
          </button>
        </div>
      </div>

      <!-- Tab Order Section -->
      <div class="settings-section tab-order-section">
        <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
          📱 Tab Order
        </h3>
        <p style="color: #aaa; margin: 0 0 16px 0; font-size: 0.9rem;">
          Customize the order of sidebar navigation tabs
        </p>
        
        <div class="tab-order-container" style="background: #292d36; border-radius: 8px; padding: 20px;">
          <div style="margin-bottom: 16px;">
            <div style="color: #00bfff; font-weight: 600; margin-bottom: 8px;">
              Current Tab Order
            </div>
            <div style="color: #aaa; font-size: 0.8rem; margin-bottom: 12px;">
              Drag tabs to reorder them, or use the arrow buttons for keyboard navigation
            </div>
          </div>
          
          <div id="tab-order-list" class="tab-order-list" style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 16px;">
            <!-- Tab items will be populated by JavaScript -->
          </div>
          
          <div class="tab-order-actions" style="display: flex; gap: 12px; flex-wrap: wrap;">
            <button id="reset-tab-order" class="games-tab" style="border-radius: 6px; background: #6c757d; font-size: 0.85rem;">
              🔄 Reset to Default
            </button>
            <div style="color: #aaa; font-size: 0.8rem; display: flex; align-items: center; margin-left: auto;">
              Changes are saved automatically
            </div>
          </div>
        </div>
      </div>

      <!-- Help Section -->
      <div class="settings-section help-section">
        <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
          ❓ Help & Support
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
              • Press <kbd style="background: #23272f; padding: 2px 6px; border-radius: 4px; font-family: monospace;">\\</kbd> to show/hide the Ocot Client
            </p>
            <p style="margin: 0 0 12px 0;">
              • Press <kbd style="background: #23272f; padding: 2px 6px; border-radius: 4px; font-family: monospace;">Esc</kbd> to exit full screen in proxy tab.
            </p>
            
            <h4 style="color: #00bfff; margin: 16px 0 12px 0; font-size: 1.1rem;">Tips & Tricks</h4>
            <p style="margin: 0 0 6px 0;">
              • Customize themes in the Settings tab for a personalized experience
            </p>
            <p style="margin: 0 0 6px 0;">
              • Use the Cloaking feature to disguise your browser tab
            </p>
            <p style="margin: 0 0 6px 0;">
              • The Notes feature saves automatically to local storage
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

  // Add event listeners after the element is created
  setTimeout(() => {
    setupSettingsEventListeners();
  }, 0);

  return settingsView;
}

// Theme management functions
function setupSettingsEventListeners() {
  // Theme selection
  const themeOptions = document.querySelectorAll(".theme-option");
  themeOptions.forEach((option) => {
    option.addEventListener("click", () => {
      const theme = option.getAttribute("data-theme");
      applyTheme(theme);

      // Update active theme selection
      themeOptions.forEach((opt) => (opt.style.borderColor = "#404040"));
      option.style.borderColor = "#00bfff";

      // Save theme preference
      localStorage.setItem("proxyClientTheme", theme);
    });
  });

  // Load saved theme on startup
  const savedTheme = localStorage.getItem("proxyClientTheme") || "default";
  applyTheme(savedTheme);

  // Highlight saved theme
  const savedThemeOption = document.querySelector(
    `[data-theme="${savedTheme}"]`
  );
  if (savedThemeOption) {
    savedThemeOption.style.borderColor = "#00bfff";
  }

  // Browser settings
  const saveButton = document.getElementById("save-browser-settings");
  const resetButton = document.getElementById("reset-browser-settings");

  if (saveButton) {
    saveButton.addEventListener("click", saveBrowserSettings);
  }

  if (resetButton) {
    resetButton.addEventListener("click", resetBrowserSettings);
  }

  // Proxy settings
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

  // Load saved browser settings
  loadBrowserSettings();

  // Load saved proxy settings
  loadProxySettings();

  // Auto-save when browser settings change
  const browserInputs = [
    "homepage-input",
    "enable-history",
    "enable-bookmarks",
    "enable-popup-blocker",
    "enable-safe-search",
    "user-agent-select",
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

  // Setup tab order functionality
  setupTabOrderEventListeners();
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
    default: // default theme
      root.style.setProperty("--bg-primary", "#23272f");
      root.style.setProperty("--bg-secondary", "#292d36");
      root.style.setProperty("--accent-color", "#007acc");
      root.style.setProperty("--accent-hover", "#005a9e");
      root.style.setProperty("--accent-color-rgb", "0, 122, 204");
      break;
  }

  // Apply theme colors to existing elements
  updateThemeColors();
}

function updateThemeColors() {
  const root = document.documentElement;
  const bgPrimary = root.style.getPropertyValue("--bg-primary") || "#23272f";
  const bgSecondary =
    root.style.getPropertyValue("--bg-secondary") || "#292d36";
  const accentColor =
    root.style.getPropertyValue("--accent-color") || "#007acc";

  // Update main app elements
  const appFrame = document.querySelector(".proxy-app-frame");
  const sidebar = document.querySelector(".proxy-sidebar");
  const content = document.querySelector(".proxy-content");

  if (appFrame) {
    appFrame.style.background = bgPrimary;
  }

  if (content) {
    content.style.background = bgPrimary;
  }

  // Update all card-based views
  const cardViews = document.querySelectorAll(".card-grid-view");
  cardViews.forEach((view) => {
    view.style.background = bgPrimary;
  });

  // Update card items
  const cardItems = document.querySelectorAll(
    ".card-item, .game-item, .script-item"
  );
  cardItems.forEach((item) => {
    item.style.background = bgSecondary;
  });

  // Update active buttons
  const activeButtons = document.querySelectorAll(
    ".sidebar-btn.active, .games-tab.active"
  );
  activeButtons.forEach((btn) => {
    btn.style.background = accentColor;
  });
}

function saveBrowserSettings() {
  const settings = {
    homepage:
      document.getElementById("homepage-input")?.value ||
      "https://google.com?igu=1",
    enableHistory: document.getElementById("enable-history")?.checked ?? true,
    enableBookmarks:
      document.getElementById("enable-bookmarks")?.checked ?? true,
    enablePopupBlocker:
      document.getElementById("enable-popup-blocker")?.checked ?? true,
    enableSafeSearch:
      document.getElementById("enable-safe-search")?.checked ?? false,
    userAgent: document.getElementById("user-agent-select")?.value || "default",
  };

  localStorage.setItem("pocketBrowserSettings", JSON.stringify(settings));

  console.log("Settings: Saved browser settings", settings);

  // Dispatch custom event for immediate updates
  window.dispatchEvent(
    new CustomEvent("pocketBrowserSettingsChanged", {
      detail: settings,
    })
  );

  console.log("Settings: Dispatched pocketBrowserSettingsChanged event");

  // Show confirmation
  const saveButton = document.getElementById("save-browser-settings");
  if (saveButton) {
    const originalText = saveButton.innerHTML;
    saveButton.innerHTML = "✅ Saved!";
    saveButton.style.background = "#28a745";

    setTimeout(() => {
      saveButton.innerHTML = originalText;
    }, 2000);
  }
}

function resetBrowserSettings() {
  const defaults = {
    homepage: "https://google.com?igu=1",
    enableHistory: true,
    enableBookmarks: true,
    enablePopupBlocker: true,
    enableSafeSearch: false,
    userAgent: "default",
  };

  // Update UI
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

  // Save defaults
  localStorage.setItem("pocketBrowserSettings", JSON.stringify(defaults));

  // Show confirmation
  const resetButton = document.getElementById("reset-browser-settings");
  if (resetButton) {
    const originalText = resetButton.innerHTML;
    resetButton.innerHTML = "✅ Reset Complete";

    setTimeout(() => {
      resetButton.innerHTML = originalText;
    }, 2000);
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
        // Add protocol if not present
        if (
          !customUrl.startsWith("http://") &&
          !customUrl.startsWith("https://")
        ) {
          customUrl = "https://" + customUrl;
        }
        proxyUrl = customUrl;
      } else {
        proxyUrl = "https://core.lab.infosv.ro"; // fallback to default
      }
      break;
    default:
      proxyUrl = "https://core.lab.infosv.ro";
  }

  const settings = {
    server: selectedServer,
    url: proxyUrl,
    customUrl: customProxyUrl?.value?.trim() || "",
  };

  localStorage.setItem("proxyClientProxySettings", JSON.stringify(settings));

  console.log("Settings: Saved proxy settings", settings);

  // Dispatch custom event for immediate proxy tab reload
  window.dispatchEvent(
    new CustomEvent("proxySettingsChanged", {
      detail: settings,
    })
  );

  console.log("Settings: Dispatched proxySettingsChanged event");

  // Show confirmation
  const saveProxyButton = document.getElementById("save-proxy-settings");
  if (saveProxyButton) {
    const originalText = saveProxyButton.innerHTML;
    saveProxyButton.innerHTML = "✅ Saved!";
    saveProxyButton.style.background = "#28a745";

    setTimeout(() => {
      saveProxyButton.innerHTML = originalText;
    }, 2000);
  }
}

function resetProxySettings() {
  const defaults = {
    server: "utopia1",
    url: "https://core.lab.infosv.ro",
    customUrl: "",
  };

  // Update UI
  const proxyServerSelect = document.getElementById("proxy-server-select");
  const customProxyUrl = document.getElementById("custom-proxy-url");
  const customProxyInput = document.getElementById("custom-proxy-input");

  if (proxyServerSelect) proxyServerSelect.value = defaults.server;
  if (customProxyUrl) customProxyUrl.value = defaults.customUrl;
  if (customProxyInput) customProxyInput.style.display = "none";

  // Save defaults
  localStorage.setItem("proxyClientProxySettings", JSON.stringify(defaults));

  console.log("Settings: Reset proxy settings to defaults", defaults);

  // Dispatch custom event for immediate proxy tab reload
  window.dispatchEvent(
    new CustomEvent("proxySettingsChanged", {
      detail: defaults,
    })
  );

  console.log("Settings: Dispatched proxySettingsChanged event for reset");

  // Show confirmation
  const resetProxyButton = document.getElementById("reset-proxy-settings");
  if (resetProxyButton) {
    const originalText = resetProxyButton.innerHTML;
    resetProxyButton.innerHTML = "✅ Reset Complete";

    setTimeout(() => {
      resetProxyButton.innerHTML = originalText;
    }, 2000);
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

    // Show custom input if custom is selected
    if (customProxyInput && settings.server === "custom") {
      customProxyInput.style.display = "block";
    }
  } catch (e) {
    console.warn("Failed to load proxy settings:", e);
  }
}

// Export utility functions for use by proxy view
export function getProxySettings() {
  const saved = localStorage.getItem("proxyClientProxySettings");
  if (!saved) {
    return {
      server: "utopia1",
      url: "https://core.lab.infosv.ro",
      customUrl: "",
    };
  }

  try {
    return JSON.parse(saved);
  } catch (e) {
    return {
      server: "utopia1",
      url: "https://core.lab.infosv.ro",
      customUrl: "",
    };
  }
}

// Export utility functions for use by pocket browser
export function getPocketBrowserSettings() {
  const saved = localStorage.getItem("pocketBrowserSettings");

  const defaults = {
    homepage: "https://google.com?igu=1",
    enableHistory: true,
    enableBookmarks: true,
    enablePopupBlocker: true,
    enableSafeSearch: false,
    userAgent: "default",
  };

  if (!saved) {
    return defaults;
  }

  try {
    const parsed = JSON.parse(saved);
    // Merge with defaults to ensure all properties exist
    return { ...defaults, ...parsed };
  } catch (e) {
    return defaults;
  }
}

// Tab Order Management Functions
function injectTabOrderCSS() {
  if (document.getElementById("tab-order-style")) return;
  
  const style = document.createElement("style");
  style.id = "tab-order-style";
  style.textContent = `
    .tab-order-list {
      max-height: 400px;
      overflow-y: auto;
    }
    
    .tab-order-item {
      background: #23272f;
      border: 1px solid #404040;
      border-radius: 6px;
      padding: 12px;
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: move;
      transition: all 0.2s ease;
      user-select: none;
    }
    
    .tab-order-item:hover {
      background: #2a2e37;
      border-color: #525252;
      transform: translateY(-1px);
    }
    
    .tab-order-item.dragging {
      opacity: 0.5;
      transform: rotate(2deg);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    
    .tab-order-item.drag-over {
      border-color: #00bfff;
      box-shadow: 0 0 0 2px rgba(0, 191, 255, 0.3);
    }
    
    .tab-drag-handle {
      font-size: 1.2rem;
      color: #666;
      cursor: grab;
      line-height: 1;
    }
    
    .tab-drag-handle:active {
      cursor: grabbing;
    }
    
    .tab-info {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .tab-icon {
      font-size: 1.1rem;
      width: 20px;
      text-align: center;
    }
    
    .tab-label {
      color: #fff;
      font-weight: 500;
    }
    
    .tab-order-controls {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    
    .tab-order-btn {
      background: #404040;
      border: none;
      border-radius: 4px;
      color: #fff;
      font-size: 0.7rem;
      padding: 4px 6px;
      cursor: pointer;
      transition: background 0.2s;
      line-height: 1;
    }
    
    .tab-order-btn:hover {
      background: #00bfff;
    }
    
    .tab-order-btn:disabled {
      background: #2a2e37;
      color: #666;
      cursor: not-allowed;
    }
    
    /* Drag and drop visual feedback */
    .tab-order-list.drag-active {
      background: rgba(0, 191, 255, 0.05);
      border-radius: 6px;
    }
  `;
  document.head.appendChild(style);
}

function getTabOrder() {
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
    "settingsButton"
  ];

  try {
    const saved = localStorage.getItem("ocot-tab-order");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length === defaultOrder.length) {
        const hasAllTabs = defaultOrder.every(tab => parsed.includes(tab));
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

function getTabMetadata() {
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
    settingsButton: { label: "Settings", icon: "⚙️" }
  };
}

function saveTabOrder(tabOrder) {
  try {
    localStorage.setItem("ocot-tab-order", JSON.stringify(tabOrder));
    console.log("Tab order saved:", tabOrder);
    // Dispatch event to notify sidebar to refresh
    document.dispatchEvent(new CustomEvent("tabOrderChanged"));
  } catch (e) {
    console.error("Failed to save tab order to localStorage:", e);
  }
}

function resetTabOrder() {
  try {
    localStorage.removeItem("ocot-tab-order");
    console.log("Tab order reset to default");
    // Dispatch event to notify sidebar to refresh
    document.dispatchEvent(new CustomEvent("tabOrderChanged"));
    // Re-render the tab order list
    renderTabOrderList();
  } catch (e) {
    console.error("Failed to reset tab order:", e);
  }
}

function renderTabOrderList() {
  const tabOrderList = document.getElementById("tab-order-list");
  if (!tabOrderList) return;

  const tabOrder = getTabOrder();
  const tabMetadata = getTabMetadata();

  tabOrderList.innerHTML = tabOrder.map((tabKey, index) => {
    const tab = tabMetadata[tabKey];
    if (!tab) return "";

    return `
      <div class="tab-order-item" draggable="true" data-tab-key="${tabKey}" data-index="${index}">
        <div class="tab-drag-handle">⋮⋮</div>
        <div class="tab-info">
          <div class="tab-icon">${tab.icon}</div>
          <div class="tab-label">${tab.label}</div>
        </div>
        <div class="tab-order-controls">
          <button class="tab-order-btn" onclick="moveTabUp('${tabKey}')" ${index === 0 ? 'disabled' : ''}>▲</button>
          <button class="tab-order-btn" onclick="moveTabDown('${tabKey}')" ${index === tabOrder.length - 1 ? 'disabled' : ''}>▼</button>
        </div>
      </div>
    `;
  }).join("");

  // Add drag and drop event listeners
  setupDragAndDrop();
}

function setupDragAndDrop() {
  const tabOrderList = document.getElementById("tab-order-list");
  if (!tabOrderList) return;

  let draggedElement = null;

  tabOrderList.addEventListener("dragstart", (e) => {
    if (!e.target.classList.contains("tab-order-item")) return;
    
    draggedElement = e.target;
    e.target.classList.add("dragging");
    tabOrderList.classList.add("drag-active");
    
    // Set drag data
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.outerHTML);
  });

  tabOrderList.addEventListener("dragend", (e) => {
    if (!e.target.classList.contains("tab-order-item")) return;
    
    e.target.classList.remove("dragging");
    tabOrderList.classList.remove("drag-active");
    
    // Remove drag-over class from all items
    tabOrderList.querySelectorAll(".tab-order-item").forEach(item => {
      item.classList.remove("drag-over");
    });
    
    draggedElement = null;
  });

  tabOrderList.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    
    const afterElement = getDragAfterElement(tabOrderList, e.clientY);
    const dragging = tabOrderList.querySelector(".dragging");
    
    // Remove drag-over class from all items
    tabOrderList.querySelectorAll(".tab-order-item").forEach(item => {
      item.classList.remove("drag-over");
    });
    
    if (afterElement == null) {
      // Add drag-over to last element
      const items = [...tabOrderList.querySelectorAll(".tab-order-item:not(.dragging)")];
      if (items.length > 0) {
        items[items.length - 1].classList.add("drag-over");
      }
    } else {
      afterElement.classList.add("drag-over");
    }
  });

  tabOrderList.addEventListener("drop", (e) => {
    e.preventDefault();
    
    const afterElement = getDragAfterElement(tabOrderList, e.clientY);
    const dragging = tabOrderList.querySelector(".dragging");
    
    if (dragging && dragging !== afterElement) {
      if (afterElement == null) {
        tabOrderList.appendChild(dragging);
      } else {
        tabOrderList.insertBefore(dragging, afterElement);
      }
      
      // Update the saved order
      updateTabOrderFromDOM();
    }
  });
}

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".tab-order-item:not(.dragging)")];
  
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function updateTabOrderFromDOM() {
  const tabOrderList = document.getElementById("tab-order-list");
  if (!tabOrderList) return;

  const newOrder = [...tabOrderList.querySelectorAll(".tab-order-item")]
    .map(item => item.getAttribute("data-tab-key"));
  
  saveTabOrder(newOrder);
  
  // Re-render to update button states
  setTimeout(() => renderTabOrderList(), 100);
}

// Global functions for arrow buttons
window.moveTabUp = function(tabKey) {
  const tabOrder = getTabOrder();
  const currentIndex = tabOrder.indexOf(tabKey);
  
  if (currentIndex > 0) {
    // Swap with previous item
    [tabOrder[currentIndex - 1], tabOrder[currentIndex]] = [tabOrder[currentIndex], tabOrder[currentIndex - 1]];
    saveTabOrder(tabOrder);
    renderTabOrderList();
  }
};

window.moveTabDown = function(tabKey) {
  const tabOrder = getTabOrder();
  const currentIndex = tabOrder.indexOf(tabKey);
  
  if (currentIndex < tabOrder.length - 1) {
    // Swap with next item
    [tabOrder[currentIndex], tabOrder[currentIndex + 1]] = [tabOrder[currentIndex + 1], tabOrder[currentIndex]];
    saveTabOrder(tabOrder);
    renderTabOrderList();
  }
};

function setupTabOrderEventListeners() {
  // Reset button
  const resetButton = document.getElementById("reset-tab-order");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      resetTabOrder();
      // Show confirmation feedback
      const originalText = resetButton.innerHTML;
      resetButton.innerHTML = "✅ Reset Complete";
      resetButton.style.background = "#28a745";
      
      setTimeout(() => {
        resetButton.innerHTML = originalText;
        resetButton.style.background = "#6c757d";
      }, 2000);
    });
  }

  // Initial render
  renderTabOrderList();
}
