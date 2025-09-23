import { injectAppCSS } from "../css.js";

// Exported function to create the Settings view
export default function createSettingsView() {
  // Inject shared CSS
  injectAppCSS();

  const settingsView = document.createElement("div");
  settingsView.className = "card-grid-view";
  settingsView.style.display = "none";

  settingsView.innerHTML = `
    <div class="settings-header" style="margin-bottom: 30px;">
      <h2 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1.5rem;">Settings</h2>
      <p style="color: #aaa; margin: 0; font-size: 0.95rem;">Customize your Proxy Client experience</p>
    </div>

    <div class="settings-content" style="display: flex; flex-direction: column; gap: 30px;">
      
      <!-- Themes Section -->
      <div class="settings-section themes-section">
        <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
          🎨 Themes
        </h3>
        <p style="color: #aaa; margin: 0 0 16px 0; font-size: 0.9rem;">
          Customize the appearance of your Proxy Client
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
            <input type="text" id="homepage-input" placeholder="https://www.google.com" 
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

      <!-- Help Section -->
      <div class="settings-section help-section">
        <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;">
          ❓ Help & Support
        </h3>
        <div class="help-content" style="background: #292d36; border-radius: 8px; padding: 20px;">
          <div style="color: #aaa; line-height: 1.6;">
            <h4 style="color: #00bfff; margin: 0 0 12px 0; font-size: 1.1rem;">Getting Started</h4>
            <p style="margin: 0 0 12px 0;">
              Welcome to Proxy Client! This powerful tool provides various utilities for web browsing and productivity.
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
              • Press <kbd style="background: #23272f; padding: 2px 6px; border-radius: 4px; font-family: monospace;">\\</kbd> to show/hide the Proxy Client
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
  const themeOptions = document.querySelectorAll('.theme-option');
  themeOptions.forEach(option => {
    option.addEventListener('click', () => {
      const theme = option.getAttribute('data-theme');
      applyTheme(theme);
      
      // Update active theme selection
      themeOptions.forEach(opt => opt.style.borderColor = '#404040');
      option.style.borderColor = '#00bfff';
      
      // Save theme preference
      localStorage.setItem('proxyClientTheme', theme);
    });
  });

  // Load saved theme on startup
  const savedTheme = localStorage.getItem('proxyClientTheme') || 'default';
  applyTheme(savedTheme);
  
  // Highlight saved theme
  const savedThemeOption = document.querySelector(`[data-theme="${savedTheme}"]`);
  if (savedThemeOption) {
    savedThemeOption.style.borderColor = '#00bfff';
  }

  // Browser settings
  const saveButton = document.getElementById('save-browser-settings');
  const resetButton = document.getElementById('reset-browser-settings');
  
  if (saveButton) {
    saveButton.addEventListener('click', saveBrowserSettings);
  }
  
  if (resetButton) {
    resetButton.addEventListener('click', resetBrowserSettings);
  }
  
  // Load saved browser settings
  loadBrowserSettings();
}

function applyTheme(themeName) {
  const root = document.documentElement;
  
  switch (themeName) {
    case 'blue':
      root.style.setProperty('--bg-primary', '#1a1f2e');
      root.style.setProperty('--bg-secondary', '#2a3040');
      root.style.setProperty('--accent-color', '#0066cc');
      root.style.setProperty('--accent-hover', '#0052a3');
      break;
    case 'purple':
      root.style.setProperty('--bg-primary', '#2a1f3d');
      root.style.setProperty('--bg-secondary', '#3d2a54');
      root.style.setProperty('--accent-color', '#8b5cf6');
      root.style.setProperty('--accent-hover', '#7c3aed');
      break;
    case 'green':
      root.style.setProperty('--bg-primary', '#1f2f1f');
      root.style.setProperty('--bg-secondary', '#2d3f2d');
      root.style.setProperty('--accent-color', '#10b981');
      root.style.setProperty('--accent-hover', '#059669');
      break;
    default: // default theme
      root.style.setProperty('--bg-primary', '#23272f');
      root.style.setProperty('--bg-secondary', '#292d36');
      root.style.setProperty('--accent-color', '#007acc');
      root.style.setProperty('--accent-hover', '#005a9e');
      break;
  }
  
  // Apply theme colors to existing elements
  updateThemeColors();
}

function updateThemeColors() {
  const root = document.documentElement;
  const bgPrimary = root.style.getPropertyValue('--bg-primary') || '#23272f';
  const bgSecondary = root.style.getPropertyValue('--bg-secondary') || '#292d36';
  const accentColor = root.style.getPropertyValue('--accent-color') || '#007acc';
  
  // Update main app elements
  const appFrame = document.querySelector('.proxy-app-frame');
  const sidebar = document.querySelector('.proxy-sidebar');
  const content = document.querySelector('.proxy-content');
  
  if (appFrame) {
    appFrame.style.background = bgPrimary;
  }
  
  if (content) {
    content.style.background = bgPrimary;
  }
  
  // Update all card-based views
  const cardViews = document.querySelectorAll('.card-grid-view');
  cardViews.forEach(view => {
    view.style.background = bgPrimary;
  });
  
  // Update card items
  const cardItems = document.querySelectorAll('.card-item, .game-item, .script-item');
  cardItems.forEach(item => {
    item.style.background = bgSecondary;
  });
  
  // Update active buttons
  const activeButtons = document.querySelectorAll('.sidebar-btn.active, .games-tab.active');
  activeButtons.forEach(btn => {
    btn.style.background = accentColor;
  });
}

function saveBrowserSettings() {
  const settings = {
    homepage: document.getElementById('homepage-input')?.value || 'https://www.google.com',
    enableHistory: document.getElementById('enable-history')?.checked || true,
    enableBookmarks: document.getElementById('enable-bookmarks')?.checked || true,
    enablePopupBlocker: document.getElementById('enable-popup-blocker')?.checked || true,
    enableSafeSearch: document.getElementById('enable-safe-search')?.checked || false,
    userAgent: document.getElementById('user-agent-select')?.value || 'default'
  };
  
  localStorage.setItem('pocketBrowserSettings', JSON.stringify(settings));
  
  // Show confirmation
  const saveButton = document.getElementById('save-browser-settings');
  if (saveButton) {
    const originalText = saveButton.innerHTML;
    saveButton.innerHTML = '✅ Saved!';
    saveButton.style.background = '#28a745';
    
    setTimeout(() => {
      saveButton.innerHTML = originalText;
    }, 2000);
  }
}

function resetBrowserSettings() {
  const defaults = {
    homepage: 'https://www.google.com',
    enableHistory: true,
    enableBookmarks: true,
    enablePopupBlocker: true,
    enableSafeSearch: false,
    userAgent: 'default'
  };
  
  // Update UI
  const homepageInput = document.getElementById('homepage-input');
  const historyCheck = document.getElementById('enable-history');
  const bookmarksCheck = document.getElementById('enable-bookmarks');
  const popupCheck = document.getElementById('enable-popup-blocker');
  const safeSearchCheck = document.getElementById('enable-safe-search');
  const userAgentSelect = document.getElementById('user-agent-select');
  
  if (homepageInput) homepageInput.value = defaults.homepage;
  if (historyCheck) historyCheck.checked = defaults.enableHistory;
  if (bookmarksCheck) bookmarksCheck.checked = defaults.enableBookmarks;
  if (popupCheck) popupCheck.checked = defaults.enablePopupBlocker;
  if (safeSearchCheck) safeSearchCheck.checked = defaults.enableSafeSearch;
  if (userAgentSelect) userAgentSelect.value = defaults.userAgent;
  
  // Save defaults
  localStorage.setItem('pocketBrowserSettings', JSON.stringify(defaults));
  
  // Show confirmation
  const resetButton = document.getElementById('reset-browser-settings');
  if (resetButton) {
    const originalText = resetButton.innerHTML;
    resetButton.innerHTML = '✅ Reset Complete';
    
    setTimeout(() => {
      resetButton.innerHTML = originalText;
    }, 2000);
  }
}

function loadBrowserSettings() {
  const saved = localStorage.getItem('pocketBrowserSettings');
  if (!saved) return;
  
  try {
    const settings = JSON.parse(saved);
    
    const homepageInput = document.getElementById('homepage-input');
    const historyCheck = document.getElementById('enable-history');
    const bookmarksCheck = document.getElementById('enable-bookmarks');
    const popupCheck = document.getElementById('enable-popup-blocker');
    const safeSearchCheck = document.getElementById('enable-safe-search');
    const userAgentSelect = document.getElementById('user-agent-select');
    
    if (homepageInput) homepageInput.value = settings.homepage || 'https://www.google.com';
    if (historyCheck) historyCheck.checked = settings.enableHistory !== false;
    if (bookmarksCheck) bookmarksCheck.checked = settings.enableBookmarks !== false;
    if (popupCheck) popupCheck.checked = settings.enablePopupBlocker !== false;
    if (safeSearchCheck) safeSearchCheck.checked = settings.enableSafeSearch === true;
    if (userAgentSelect) userAgentSelect.value = settings.userAgent || 'default';
  } catch (e) {
    console.warn('Failed to load browser settings:', e);
  }
}

// Export utility functions for use by pocket browser
export function getPocketBrowserSettings() {
  const saved = localStorage.getItem('pocketBrowserSettings');
  if (!saved) return null;
  
  try {
    return JSON.parse(saved);
  } catch (e) {
    return null;
  }
}