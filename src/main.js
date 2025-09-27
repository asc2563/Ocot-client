import { injectAppCSS } from "./css.js";
import ProxySidebar from "./sidebar.js";
import createWelcomeView from "./views/welcome.js";
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

console.log("\n\nNow launching ASC2563's Ocot Client...\n\n");

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

    // Don't set any initial active button since we're showing welcome view
    this.sidebar.setActiveButton(null);

    // Add click event to header for returning to welcome
    const sidebarHeader = this.sidebar.getHeader();
    sidebarHeader.addEventListener("click", () => {
      this.showWelcomeView();
    });

    // Content
    const content = this.createContent();

    this.frame.appendChild(sidebarElement);
    this.frame.appendChild(content);

    // Append to existing page instead of clearing it
    document.body.appendChild(this.frame);

    // Create floating show button
    this.createFloatingButton();

    // Apply initial settings for floating button visibility
    this.applyInitialSettings();

    // Keyboard shortcut to show/hide
    document.addEventListener("keydown", (event) => {
      if (event.key === "\\") {
        if (window.proxyFrame) {
          this.toggleProxyClient();
        }
      }
    });

    // Clear active button when clicking outside the Ocot Client
    document.addEventListener("click", (event) => {
      // Check if click is outside the Ocot Client frame
      if (this.frame && this.frame.style.display !== "none") {
        const clickedInsideFrame = this.frame.contains(event.target);

        if (!clickedInsideFrame) {
          // Clear all active button states (except settings which is handled in the method)
          console.log("Clicking outside - clearing active buttons");
          this.sidebar.setActiveButton(null);
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

    // Hover effects
    this.floatingButton.addEventListener("mouseenter", () => {
      this.floatingButton.style.transform = "scale(1.1)";
      this.floatingButton.style.boxShadow = "0 6px 16px rgba(0, 122, 204, 0.4)";
    });

    this.floatingButton.addEventListener("mouseleave", () => {
      this.floatingButton.style.transform = "scale(1)";
      this.floatingButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
    });

    // Click to show Ocot Client
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
    console.log("Hiding Ocot Client");
    this.frame.style.display = "none";

    // Check if floating button is enabled in settings
    const settings = this.getGeneralSettings();
    if (settings.enableFloatingButton) {
      console.log("Showing floating button (enabled in settings)");
      this.floatingButton.style.display = "flex";
    } else {
      console.log("Floating button disabled in settings");
      this.floatingButton.style.display = "none";
    }
  }

  showProxyClient() {
    console.log("Showing Ocot Client, hiding floating button");
    this.frame.style.display = "flex";
    this.floatingButton.style.display = "none";
  }

  getGeneralSettings() {
    const settings = localStorage.getItem("ocot-general-settings");
    return settings ? JSON.parse(settings) : { enableFloatingButton: true };
  }

  applyInitialSettings() {
    const settings = this.getGeneralSettings();

    // Apply floating button visibility based on current state
    if (!settings.enableFloatingButton) {
      // If floating button is disabled, make sure it's hidden
      this.floatingButton.style.display = "none";
      console.log("Initial settings: Floating button disabled");
    } else {
      console.log("Initial settings: Floating button enabled");
    }
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
    console.log("Ocot Client completely removed");
  }

  // Show welcome view (called when clicking header)
  showWelcomeView() {
    // Hide all views
    Object.values(this.views).forEach((view) => (view.style.display = "none"));
    // Show welcome view
    if (this.views.welcomeView) this.views.welcomeView.style.display = "flex";
    // Clear active button since welcome doesn't have a sidebar button
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

    // Add background overlay
    const overlay = document.createElement("div");
    overlay.className = "content-overlay";
    content.appendChild(overlay);

    // Views
    this.views.welcomeView = createWelcomeView();
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

    // Hide all views, then show only welcomeView by default
    Object.values(this.views).forEach((view) => (view.style.display = "none"));
    if (this.views.welcomeView) this.views.welcomeView.style.display = "flex";

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

    // Create event handler mapping
    const eventHandlers = {
      proxyButton: () => {
        hideAll();
        v.proxyView.style.display = "flex";
        setActiveButton("proxyButton");
      },
      notesButton: () => {
        hideAll();
        v.notesView.style.display = "block";
        setActiveButton("notesButton");
      },
      calculatorButton: () => {
        hideAll();
        v.calculatorView.style.display = "block";
        setActiveButton("calculatorButton");
        this.initCalculator();
      },
      consoleButton: () => {
        hideAll();
        v.consoleView.style.display = "block";
        setActiveButton("consoleButton");
      },
      cloakingButton: () => {
        hideAll();
        v.cloakingView.style.display = "block";
        setActiveButton("cloakingButton");
      },
      historyFloodButton: () => {
        hideAll();
        v.historyFloodView.style.display = "block";
        setActiveButton("historyFloodButton");
      },
      corsProxyButton: () => {
        hideAll();
        v.corsProxyView.style.display = "block";
        setActiveButton("corsProxyButton");
      },
      pocketBrowserButton: () => {
        hideAll();
        v.pocketBrowserView.style.display = "block";
        setActiveButton("pocketBrowserButton");
      },
      scriptsButton: () => {
        hideAll();
        v.scriptsView.style.display = "block";
        setActiveButton("scriptsButton");
      },
      settingsButton: () => {
        hideAll();
        v.settingsView.style.display = "block";
        setActiveButton("settingsButton");
      },
      bookmarkletsButton: () => {
        hideAll();
        v.bookmarkletsView.style.display = "block";
        setActiveButton("bookmarkletsButton");
      },
      gamesButton: () => {
        hideAll();
        v.gamesView.style.display = "block";
        setActiveButton("gamesButton");
      },
    };

    // Attach event listeners to all buttons
    this.attachButtonEventListeners(eventHandlers);

    // Listen for tab order changes to refresh sidebar
    document.addEventListener("tabOrderChanged", () => {
      this.refreshSidebar();
    });
  }

  // Method to attach event listeners to buttons
  attachButtonEventListeners(eventHandlers) {
    const b = this.sidebarButtons;

    Object.keys(eventHandlers).forEach((buttonKey) => {
      if (b[buttonKey]) {
        // Remove existing listeners (if any)
        const oldButton = b[buttonKey];
        const newButton = oldButton.cloneNode(true);
        oldButton.parentNode.replaceChild(newButton, oldButton);
        b[buttonKey] = newButton;

        // Attach new listener
        b[buttonKey].addEventListener("click", eventHandlers[buttonKey]);
      }
    });
  }

  // Method to refresh sidebar when tab order changes
  refreshSidebar() {
    // Refresh button order in sidebar
    this.sidebar.refreshButtonOrder();

    // Update button references
    this.sidebarButtons = this.sidebar.getButtons();

    // Re-attach event listeners with new button references
    const v = this.views;
    const hideAll = () => {
      Object.values(v).forEach((view) => (view.style.display = "none"));
    };
    const setActiveButton = (buttonKey) => {
      this.sidebar.setActiveButton(buttonKey);
    };

    const eventHandlers = {
      proxyButton: () => {
        hideAll();
        v.proxyView.style.display = "flex";
        setActiveButton("proxyButton");
      },
      notesButton: () => {
        hideAll();
        v.notesView.style.display = "block";
        setActiveButton("notesButton");
      },
      calculatorButton: () => {
        hideAll();
        v.calculatorView.style.display = "block";
        setActiveButton("calculatorButton");
        this.initCalculator();
      },
      consoleButton: () => {
        hideAll();
        v.consoleView.style.display = "block";
        setActiveButton("consoleButton");
      },
      cloakingButton: () => {
        hideAll();
        v.cloakingView.style.display = "block";
        setActiveButton("cloakingButton");
      },
      historyFloodButton: () => {
        hideAll();
        v.historyFloodView.style.display = "block";
        setActiveButton("historyFloodButton");
      },
      corsProxyButton: () => {
        hideAll();
        v.corsProxyView.style.display = "block";
        setActiveButton("corsProxyButton");
      },
      pocketBrowserButton: () => {
        hideAll();
        v.pocketBrowserView.style.display = "block";
        setActiveButton("pocketBrowserButton");
      },
      scriptsButton: () => {
        hideAll();
        v.scriptsView.style.display = "block";
        setActiveButton("scriptsButton");
      },
      settingsButton: () => {
        hideAll();
        v.settingsView.style.display = "block";
        setActiveButton("settingsButton");
      },
      bookmarkletsButton: () => {
        hideAll();
        v.bookmarkletsView.style.display = "block";
        setActiveButton("bookmarkletsButton");
      },
      gamesButton: () => {
        hideAll();
        v.gamesView.style.display = "block";
        setActiveButton("gamesButton");
      },
    };

    this.attachButtonEventListeners(eventHandlers);
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
window.proxyClientApp = app; // Make app instance globally accessible
app.launch();
