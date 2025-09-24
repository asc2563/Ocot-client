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
          Welcome to Proxy Client
        </h1>
        <p style="color: #7d8590; font-size: 1.2rem; margin: 0; line-height: 1.5;">
          by ASC2563 • Your ultimate web proxy toolkit
        </p>
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
        <p style="margin: 0 0 12px 0;">
          <strong style="color: #00bfff;">Keyboard Shortcuts:</strong> 
          Press <kbd style="background: #404040; padding: 2px 6px; border-radius: 4px; font-family: monospace;">\\</kbd> to hide/show the client
        </p>
        <p style="margin: 0;">
          Need help? Check out each tool's individual features by exploring the sidebar options.
        </p>
      </div>
      
    </div>
  `;

  return welcomeView;
}
