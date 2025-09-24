import { injectAppCSS } from "./css.js";
import ProxySidebar from "./sidebar.js";
import createProxyView from "./views/proxy.js";
import createNotesView from "./views/notes.js";
import createCalculatorView from "./views/calculator.js";
import createConsoleView from "./views/console.js";
import createCloakingView from "./views/cloaking.js";
import createHistoryFloodView from "./views/historyFlood.js";
import createCorsProxyView from "./views/corsProxy.js";
import createPocketBrowserView from "./views/pocketBrowser.js";
import createScriptsView from "./views/scripts.js";
import createSettingsView from "./views/settings.js";

import createBookmarkletsView from "./views/bookmarklets.js";
import { showGamesView } from "./views/games.js";

console.log("\n\nNow launching ASC2563's Proxy Client...\n\n");

class ProxyClientApp {
  constructor() {
    this.frame = null;
    this.views = {};
    this.sidebar = new ProxySidebar();
    this.sidebarButtons = {};
  }

  launch() {
    // Inject shared CSS
    injectAppCSS();

    // Inject sidebar CSS
    ProxySidebar.injectCSS();

    // Add app-specific CSS
    this.injectAppStyles();

    // Create frame
    this.frame = document.createElement("div");
    window.proxyFrame = this.frame;
    this.setupFrameStyle();

    // Create sidebar using the module
    const sidebarElement = this.sidebar.createSidebar();
    this.sidebar.addNavigationButtons();
    this.sidebarButtons = this.sidebar.getButtons();

    // Content
    const content = this.createContent();

    this.frame.appendChild(sidebarElement);
    this.frame.appendChild(content);

    // Append to existing page instead of clearing it
    document.body.appendChild(this.frame);

    // Create floating show button
    this.createFloatingButton();

    // Keyboard shortcut to show/hide
    document.addEventListener("keydown", (event) => {
      if (event.key === "\\") {
        if (window.proxyFrame) {
          this.toggleProxyClient();
        }
      }
    });

    // Hide button
    this.sidebarButtons.hideButton.addEventListener("click", () => {
      this.hideProxyClient();
    });

    // Remove button - completely destroy the app
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
    // Create floating button
    this.floatingButton = document.createElement("div");
    this.floatingButton.innerHTML = "🔧";
    this.floatingButton.title = "Show Proxy Client (Press \\ to toggle)";
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

    // Hover effects
    this.floatingButton.addEventListener("mouseenter", () => {
      this.floatingButton.style.transform = "scale(1.1)";
      this.floatingButton.style.boxShadow = "0 6px 16px rgba(0, 122, 204, 0.4)";
    });

    this.floatingButton.addEventListener("mouseleave", () => {
      this.floatingButton.style.transform = "scale(1)";
      this.floatingButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
    });

    // Click to show proxy client
    this.floatingButton.addEventListener("click", (e) => {
      // Only trigger click if it wasn't a drag
      if (!this.isDragging) {
        console.log("Floating button clicked!");
        this.showProxyClient();
      }
    });

    // Add drag functionality
    this.addDragFunctionality();

    document.body.appendChild(this.floatingButton);
    console.log("Floating button added to body, should be visible now");
  }

  addDragFunctionality() {
    let isDragging = false;
    let startX, startY, initialX, initialY;

    // Track dragging state for click prevention
    this.isDragging = false;

    this.floatingButton.addEventListener("mousedown", (e) => {
      isDragging = true;
      this.isDragging = false; // Reset for this interaction

      // Get initial positions
      startX = e.clientX;
      startY = e.clientY;

      // Get current button position
      const rect = this.floatingButton.getBoundingClientRect();
      initialX = rect.left;
      initialY = rect.top;

      // Change cursor and disable transitions
      this.floatingButton.style.cursor = "grabbing";
      this.floatingButton.style.transition = "none";

      // Prevent text selection
      e.preventDefault();
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;

      // Calculate movement
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      // If moved enough, consider it a drag
      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        this.isDragging = true;
      }

      // Calculate new position
      let newX = initialX + deltaX;
      let newY = initialY + deltaY;

      // Keep button within screen bounds
      const buttonSize = 50; // Button width/height
      const maxX = window.innerWidth - buttonSize;
      const maxY = window.innerHeight - buttonSize;

      newX = Math.max(0, Math.min(newX, maxX));
      newY = Math.max(0, Math.min(newY, maxY));

      // Update button position
      this.floatingButton.style.left = newX + "px";
      this.floatingButton.style.top = newY + "px";
      this.floatingButton.style.right = "auto";
      this.floatingButton.style.bottom = "auto";
    });

    document.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;

        // Restore cursor and transitions
        this.floatingButton.style.cursor = "pointer";
        this.floatingButton.style.transition = "all 0.3s ease";

        // Small delay to prevent click event after drag
        setTimeout(() => {
          this.isDragging = false;
        }, 100);
      }
    });
  }

  hideProxyClient() {
    console.log("Hiding proxy client, showing floating button");
    this.frame.style.display = "none";
    this.floatingButton.style.display = "flex";
  }

  showProxyClient() {
    console.log("Showing proxy client, hiding floating button");
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
    console.log("Completely removing proxy client from page");
    // Remove the main frame
    if (this.frame && this.frame.parentNode) {
      this.frame.parentNode.removeChild(this.frame);
    }
    // Remove the floating button
    if (this.floatingButton && this.floatingButton.parentNode) {
      this.floatingButton.parentNode.removeChild(this.floatingButton);
    }
    // Clear references
    this.frame = null;
    this.floatingButton = null;
    window.proxyFrame = null;
    console.log("Proxy client completely removed");
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
    this.views.settingsView = createSettingsView();
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

    // Games List button
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
