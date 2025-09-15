import createProxyView from "./views/proxy.js";
import createNotesView from "./views/notes.js";
import createCalculatorView from "./views/calculator.js";
import createConsoleView from "./views/console.js";
import createCloakingView from "./views/cloaking.js";
import createHistoryFloodView from "./views/historyFlood.js";
import createCorsProxyView from "./views/corsProxy.js";
import createPocketBrowserView from "./views/pocketBrowser.js";
import createscriptsView from "./views/scripts.js";
import createBookmarkletsView from "./views/bookmarklets.js";

console.log("\n\nNow launching ASC2563's Proxy Client...\n\n");

class ProxyClientApp {
  constructor() {
    this.frame = null;
    this.views = {};
    this.sidebarButtons = {};
  }

  launch() {
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

  setupFrameStyle() {
    const frame = this.frame;
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
    sidebar.style.width = "20%";
    sidebar.style.height = "80vh";
    sidebar.style.backgroundColor = "#333";
    sidebar.style.color = "#ffffff";
    sidebar.style.padding = "10px";
    sidebar.style.display = "flex";
    sidebar.style.flexDirection = "column";
    sidebar.style.gap = "10px";

    // Button factory
    const makeBtn = (label, id = "", bg = "#444") => {
      const btn = document.createElement("button");
      btn.textContent = label;
      btn.style.padding = "8px";
      btn.style.backgroundColor = bg;
      btn.style.border = "none";
      btn.style.borderRadius = "4px";
      btn.style.color = "#fff";
      btn.style.cursor = "pointer";
      if (id) btn.id = id;
      return btn;
    };

    // Sidebar buttons

    this.sidebarButtons.proxyButton = makeBtn("Proxy", "", "#555");
    this.sidebarButtons.proxyButton.classList.add("active-view");
    this.sidebarButtons.notesButton = makeBtn("Notes");
    this.sidebarButtons.calculatorButton = makeBtn("Calculator");
    this.sidebarButtons.consoleButton = makeBtn("Console");
    this.sidebarButtons.cloakingButton = makeBtn("Cloaking");
    this.sidebarButtons.historyFloodButton = makeBtn("History Flood");
    this.sidebarButtons.corsProxyButton = makeBtn("CORS Proxy");
    this.sidebarButtons.pocketBrowserButton = makeBtn("Pocket Browser");
    this.sidebarButtons.exploisButton = makeBtn("explois");
    this.sidebarButtons.bookmarkletsButton = makeBtn("Bookmarklets");
    this.sidebarButtons.hideButton = makeBtn("Hide All", "hideFrame", "#700");

    [
      this.sidebarButtons.proxyButton,
      this.sidebarButtons.notesButton,
      this.sidebarButtons.calculatorButton,
      this.sidebarButtons.consoleButton,
      this.sidebarButtons.cloakingButton,
      this.sidebarButtons.historyFloodButton,
      this.sidebarButtons.corsProxyButton,
      this.sidebarButtons.pocketBrowserButton,
      this.sidebarButtons.exploisButton,
      this.sidebarButtons.bookmarkletsButton,
      this.sidebarButtons.hideButton,
    ].forEach((btn) => sidebar.appendChild(btn));

    return sidebar;
  }

  createContent() {
    const content = document.createElement("div");
    content.style.flexGrow = "1";
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.width = "100%";
    content.style.height = "100%";
    content.style.padding = "0";

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

    // Add all views to content
    Object.values(this.views).forEach((view) => content.appendChild(view));

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
        if (btn && btn.style) {
          btn.style.backgroundColor = "#444";
          btn.classList && btn.classList.remove("active-view");
        }
      });
      if (activeBtn) {
        activeBtn.style.backgroundColor = "#555";
        activeBtn.classList && activeBtn.classList.add("active-view");
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

    b.exploisButton.addEventListener("click", () => {
      hideAll();
      v.exploisView.style.display = "block";
      setActiveButton(b.exploisButton);
    });

    b.bookmarkletsButton.addEventListener("click", () => {
      hideAll();
      v.bookmarkletsView.style.display = "block";
      setActiveButton(b.bookmarkletsButton);
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
              currentValue = eval(currentValue).toString();
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
