import { injectAppCSS } from "../css.js";

export default function createWelcomeView() {
  // Inject shared CSS
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
        <div style="font-size: 4rem; margin-bottom: 16px;">🔧</div>
        <h1 style="color: #00bfff; font-size: 2.5rem; margin: 0 0 12px 0; font-weight: 700;">
          Welcome to Ocot Client
        </h1>
        <p style="color: #7d8590; font-size: 1.2rem; margin: 0 0 20px 0; line-height: 1.5;">
          by ASC2563 • Your ultimate web proxy toolkit
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
          📖 Documentation
        </button>
      </div>

      <!-- Feature Cards -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 40px;">
        
        <!-- Proxy Tools Card -->
        <div class="card-item" style="padding: 24px; text-align: left;">
          <div style="display: flex; align-items: center; margin-bottom: 16px;">
            <span style="font-size: 2rem; margin-right: 12px;">🌐</span>
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
            <span style="font-size: 2rem; margin-right: 12px;">🎮</span>
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
            <span style="font-size: 2rem; margin-right: 12px;">💻</span>
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
            <span style="font-size: 2rem; margin-right: 12px;">🎭</span>
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
        <h2 style="color: #00bfff; margin: 0 0 20px 0; font-size: 1.5rem;">🚀 Quick Start</h2>
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

  // Add event listener for docs button
  setTimeout(() => {
    const docsButton = welcomeView.querySelector("#docs-button");
    if (docsButton) {
      // Add hover effects
      docsButton.addEventListener("mouseenter", () => {
        docsButton.style.transform = "translateY(-2px)";
        docsButton.style.boxShadow = "0 6px 16px rgba(0, 122, 204, 0.4)";
      });

      docsButton.addEventListener("mouseleave", () => {
        docsButton.style.transform = "translateY(0)";
        docsButton.style.boxShadow = "0 4px 12px rgba(0, 122, 204, 0.3)";
      });

      // Add click handler
      docsButton.addEventListener("click", () => {
        openDocumentationApp();
      });
    }
  }, 0);

  return welcomeView;
}

// Documentation App Class
class OcotDocsApp {
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

    // Animate in
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

    // Create sidebar
    this.createSidebar();

    // Create content area
    this.createContent();

    // Assemble app
    this.appElement.appendChild(this.sidebar);
    this.appElement.appendChild(this.content);

    // Load initial view
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
      { key: "overview", label: "Overview", icon: "📋" },
      { key: "getting-started", label: "Getting Started", icon: "🚀" },
      { key: "proxy-guide", label: "Proxy Guide", icon: "🌐" },
      { key: "games-guide", label: "Games Guide", icon: "🎮" },
      { key: "privacy-tools", label: "Privacy Tools", icon: "🎭" },
      { key: "developer-tools", label: "Developer Tools", icon: "💻" },
      { key: "troubleshooting", label: "Troubleshooting", icon: "🔧" },
      { key: "api-reference", label: "API Reference", icon: "📖" },
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

    // Close button
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
    closeBtn.innerHTML = "❌ Close Documentation";
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
    // Remove active class from all nav buttons
    const navButtons = this.sidebar.querySelectorAll("button");
    navButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.style.background = "transparent";
      btn.style.color = "#d4d4d4";
    });

    // Add active class to selected button
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
      "api-reference": this.createApiReferenceView(),
    };

    this.content.innerHTML = views[viewKey] || views["overview"];
  }

  createOverviewView() {
    return `
      <div style="max-width: 800px;">
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">📋 Overview</h1>
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Ocot Client is a comprehensive web proxy toolkit designed to provide secure browsing, 
          privacy protection, and access to restricted content.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px; border: 1px solid #404040;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🌟 Key Features</h2>
          <ul style="color: #d4d4d4; line-height: 1.8; margin: 0; padding-left: 20px;">
            <li><strong>Web Proxy:</strong> Access blocked websites with custom proxy settings</li>
            <li><strong>Games Collection:</strong> Curated list of unblocked and blocked games</li>
            <li><strong>Privacy Tools:</strong> Tab cloaking, history flooding, and more</li>
            <li><strong>Developer Tools:</strong> Built-in console, calculator, and utilities</li>
            <li><strong>Customization:</strong> Multiple themes and personalization options</li>
          </ul>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #00bfff;">
          <h3 style="color: #00bfff; margin: 0 0 12px 0;">💡 Getting Started</h3>
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
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">🚀 Getting Started</h1>
        
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
          <h3 style="color: #ffc107; margin: 0 0 12px 0;">⚠️ Important Safety Tips</h3>
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
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">🌐 Proxy Guide</h1>
        
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Learn how to use the proxy features effectively and safely.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🔧 Proxy Settings</h2>
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
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🔍 Pocket Browser</h2>
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
          <h3 style="color: #dc3545; margin: 0 0 12px 0;">🚨 Utopia Links Important Note</h3>
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
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">🎮 Games Guide</h1>
        
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Access a curated collection of games organized by availability and compatibility.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🎯 Game Categories</h2>
          <div style="display: grid; gap: 16px;">
            
            <div style="background: #23272f; border-radius: 8px; padding: 16px; border-left: 4px solid #28a745;">
              <h3 style="color: #28a745; margin: 0 0 8px 0; font-size: 1.2rem;">✅ Unblocked Games</h3>
              <p style="color: #d4d4d4; margin: 0; line-height: 1.5;">
                Games that are typically accessible on most networks and don't require special proxy settings. These are the safest and most reliable option for casual gaming.
              </p>
            </div>
            
            <div style="background: #23272f; border-radius: 8px; padding: 16px; border-left: 4px solid #dc3545;">
              <h3 style="color: #dc3545; margin: 0 0 8px 0; font-size: 1.2rem;">🚫 Blocked Games</h3>
              <p style="color: #d4d4d4; margin: 0; line-height: 1.5;">
                Games that may be restricted on school or work networks. Use the main proxy feature to access these games when they're blocked.
              </p>
            </div>
            
            <div style="background: #23272f; border-radius: 8px; padding: 16px; border-left: 4px solid #007acc;">
              <h3 style="color: #007acc; margin: 0 0 8px 0; font-size: 1.2rem;">🔄 CORS Proxy Optimized</h3>
              <p style="color: #d4d4d4; margin: 0; line-height: 1.5;">
                Games specifically optimized to work with CORS proxy settings. These games have been tested to work well with the proxy system for better performance.
              </p>
            </div>
            
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🎮 How to Access Games</h2>
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
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🛠️ Troubleshooting Games</h2>
          
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
          <h3 style="color: #8b5cf6; margin: 0 0 12px 0;">💡 Pro Tips</h3>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li><strong>Start with Unblocked:</strong> Try the "Unblocked" category first for the best experience</li>
            <li><strong>Use Cloaking:</strong> Enable tab cloaking from the sidebar to hide your gaming activity</li>
            <li><strong>Bookmark Favorites:</strong> Use the Pocket Browser's bookmark feature to save your favorite games</li>
            <li><strong>Network Awareness:</strong> Be mindful of your network's policies regarding gaming</li>
            <li><strong>Performance:</strong> CORS Optimized games are tested to work well with proxy settings</li>
          </ul>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 20px; border-left: 4px solid #dc3545; margin-top: 24px; word-wrap: break-word; overflow-wrap: break-word;">
          <h3 style="color: #dc3545; margin: 0 0 12px 0;">⚠️ Important Notes</h3>
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
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">🎭 Privacy Tools</h1>
        
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Protect your privacy and maintain anonymity with our comprehensive suite of privacy tools.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🎭 Tab Cloaking</h2>
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
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🌊 History Flooding</h2>
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
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🔄 CORS Proxy</h2>
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
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🔍 Pocket Browser</h2>
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
              Visit <strong>Settings → Pocket Browser Settings</strong> to enable/disable bookmarks, history tracking, and select user agents for maximum privacy.
            </p>
          </div>
        </div>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">📜 Custom Scripts</h2>
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
          <h3 style="color: #8b5cf6; margin: 0 0 12px 0;">🛡️ Privacy Best Practices</h3>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li><strong>Layer your privacy:</strong> Use multiple tools together for maximum protection</li>
            <li><strong>Regular cleanup:</strong> Clear cookies, cache, and browsing data frequently</li>
            <li><strong>Incognito mode:</strong> Combine tools with private/incognito browsing</li>
            <li><strong>Network awareness:</strong> Be mindful of your network's monitoring capabilities</li>
            <li><strong>Tool rotation:</strong> Vary your privacy tool usage patterns</li>
          </ul>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 20px; border-left: 4px solid #dc3545; word-wrap: break-word; overflow-wrap: break-word;">
          <h3 style="color: #dc3545; margin: 0 0 12px 0;">⚠️ Important Disclaimers</h3>
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
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">💻 Developer Tools</h1>
        
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Built-in development utilities designed for productivity, testing, and web development tasks.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🖥️ JavaScript Console</h2>
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
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🔢 Calculator</h2>
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
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">📝 Notes & Productivity</h2>
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
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🔖 Bookmarklets Collection</h2>
          <p style="color: #d4d4d4; line-height: 1.6; margin-bottom: 16px;">
            A curated collection of useful JavaScript bookmarklets for web development, productivity, and site enhancement.
          </p>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #ffc107; margin: 0 0 12px 0; font-size: 1.1rem;">Available Categories:</h3>
            <div style="display: grid; gap: 12px;">
              <div>
                <h4 style="color: #00bfff; margin: 0 0 6px 0; font-size: 1rem;">🛠️ Development Tools:</h4>
                <ul style="color: #d4d4d4; line-height: 1.4; margin: 0; padding-left: 16px; font-size: 0.9rem;">
                  <li>Page structure analyzers and DOM inspectors</li>
                  <li>CSS debugging and style inspection tools</li>
                  <li>Accessibility checking utilities</li>
                </ul>
              </div>
              <div>
                <h4 style="color: #00bfff; margin: 0 0 6px 0; font-size: 1rem;">📊 Productivity Tools:</h4>
                <ul style="color: #d4d4d4; line-height: 1.4; margin: 0; padding-left: 16px; font-size: 0.9rem;">
                  <li>Text selection and manipulation tools</li>
                  <li>URL and link extraction utilities</li>
                  <li>Page modification and enhancement scripts</li>
                </ul>
              </div>
              <div>
                <h4 style="color: #00bfff; margin: 0 0 6px 0; font-size: 1rem;">🔧 Utility Scripts:</h4>
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
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">📜 Custom Scripts</h2>
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
          <h3 style="color: #8b5cf6; margin: 0 0 12px 0;">🚀 Development Tips & Tricks</h3>
          <ul style="color: #d4d4d4; line-height: 1.6; margin: 0; padding-left: 20px;">
            <li><strong>Console Commands:</strong> Use the console for quick DOM manipulation: <code style="background: #23272f; padding: 2px 4px; border-radius: 3px; color: #ffc107;">document.querySelector()</code></li>
            <li><strong>Bookmarklet Creation:</strong> Create custom bookmarklets by prefixing code with <code style="background: #23272f; padding: 2px 4px; border-radius: 3px; color: #ffc107;">javascript:</code></li>
            <li><strong>Local Storage:</strong> All tools respect browser privacy and use local storage only</li>
          </ul>
        </div>
        
        <div style="background: #1f2937; border-radius: 12px; padding: 24px; border-left: 4px solid #007acc; margin-bottom: 30px;">
          <h3 style="color: #007acc; margin: 0 0 12px 0;">🎯 Common Use Cases</h3>
          
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
          <h3 style="color: #28a745; margin: 0 0 12px 0;">✨ Getting Started with Developer Tools</h3>
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
        <h1 style="color: #00bfff; margin: 0 0 20px 0; font-size: 2.5rem;">🔧 Troubleshooting</h1>
        
        <p style="color: #d4d4d4; font-size: 1.1rem; line-height: 1.6; margin-bottom: 30px;">
          Common issues and solutions for using Ocot Client effectively in different environments.
        </p>
        
        <div style="background: #292d36; border-radius: 12px; padding: 24px; margin-bottom: 30px;">
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🌐 Proxy Issues</h2>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #dc3545; margin: 0 0 12px 0; font-size: 1.1rem;">🚨 Utopia Links Not Working</h3>
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
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🔖 Bookmarklets Issues</h2>
          
          <div style="background: #23272f; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <h3 style="color: #dc3545; margin: 0 0 12px 0; font-size: 1.1rem;">🏫 School Computer Restrictions</h3>
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
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🎮 Games Issues</h2>
          
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
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">💻 Developer Tools Issues</h2>
          
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
          <h2 style="color: #00bfff; margin: 0 0 16px 0;">🎭 Privacy Tools Issues</h2>
          
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
          <h3 style="color: #28a745; margin: 0 0 12px 0;">💡 General Tips</h3>
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
          <h3 style="color: #007acc; margin: 0 0 12px 0;">🆘 Still Having Issues?</h3>
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
    return `<div style="max-width: 800px;"><h1 style="color: #00bfff;">📖 API Reference</h1><p style="color: #d4d4d4;">API documentation coming soon...</p></div>`;
  }
}

// Global docs app instance
let docsApp = null;

function openDocumentationApp() {
  if (!docsApp) {
    docsApp = new OcotDocsApp();
  }
  docsApp.open();
}
