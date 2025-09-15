(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/views/proxy.js
  function createProxyView() {
    const proxyView = document.createElement("div");
    proxyView.style.width = "100%";
    proxyView.style.height = "100%";
    proxyView.style.display = "flex";
    const iframe = document.createElement("iframe");
    iframe.src = "https://portal.apai.shadowshark.ipv64.net/";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    proxyView.appendChild(iframe);
    return proxyView;
  }
  var init_proxy = __esm({
    "src/views/proxy.js"() {
    }
  });

  // src/views/notes.js
  function createNotesView() {
    const notesView = document.createElement("div");
    notesView.style.width = "100%";
    notesView.style.height = "100%";
    notesView.style.display = "none";
    notesView.style.backgroundColor = "#f5f5f5";
    notesView.style.padding = "20px";
    const notesTextarea = document.createElement("textarea");
    notesTextarea.style.width = "100%";
    notesTextarea.style.height = "100%";
    notesTextarea.style.border = "1px solid #ddd";
    notesTextarea.style.padding = "10px";
    notesTextarea.placeholder = "Enter your notes here...";
    notesView.appendChild(notesTextarea);
    return notesView;
  }
  var init_notes = __esm({
    "src/views/notes.js"() {
    }
  });

  // src/views/calculator.js
  function createCalculatorView() {
    const calculatorView2 = document.createElement("div");
    calculatorView2.style.width = "100%";
    calculatorView2.style.height = "100%";
    calculatorView2.style.display = "none";
    calculatorView2.style.backgroundColor = "#e0e0e0";
    calculatorView2.style.padding = "20px";
    calculatorView2.innerHTML = `
		<div style="max-width: 300px; margin: 0 auto;">
			<input type="text" id="calcDisplay" style="width: 100%; height: 40px; margin-bottom: 10px; text-align: right; font-size: 20px;" disabled>
			<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px;">
				<button class="calc-btn" data-value="7">7</button>
				<button class="calc-btn" data-value="8">8</button>
				<button class="calc-btn" data-value="9">9</button>
				<button class="calc-btn" data-value="/">/</button>
				<button class="calc-btn" data-value="4">4</button>
				<button class="calc-btn" data-value="5">5</button>
				<button class="calc-btn" data-value="6">6</button>
				<button class="calc-btn" data-value="*">*</button>
				<button class="calc-btn" data-value="1">1</button>
				<button class="calc-btn" data-value="2">2</button>
				<button class="calc-btn" data-value="3">3</button>
				<button class="calc-btn" data-value="-">-</button>
				<button class="calc-btn" data-value="0">0</button>
				<button class="calc-btn" data-value=".">.</button>
				<button class="calc-btn" data-value="=">=</button>
				<button class="calc-btn" data-value="+">+</button>
				<button class="calc-btn" data-value="C" style="grid-column: span 4;">Clear</button>
			</div>
		</div>
	`;
    calculatorView2._initialized = false;
    return calculatorView2;
  }
  var init_calculator = __esm({
    "src/views/calculator.js"() {
    }
  });

  // src/views/console.js
  function createConsoleView() {
    const consoleView = document.createElement("div");
    consoleView.style.width = "100%";
    consoleView.style.height = "100%";
    consoleView.style.display = "none";
    consoleView.style.backgroundColor = "#1e1e1e";
    consoleView.style.color = "#ffffff";
    consoleView.style.padding = "20px";
    consoleView.style.fontFamily = "monospace";
    const consoleTextarea = document.createElement("textarea");
    consoleTextarea.style.width = "100%";
    consoleTextarea.style.height = "80%";
    consoleTextarea.style.backgroundColor = "#252526";
    consoleTextarea.style.color = "#d4d4d4";
    consoleTextarea.style.border = "1px solid #333";
    consoleTextarea.style.padding = "10px";
    consoleTextarea.style.fontFamily = "monospace";
    consoleTextarea.style.fontSize = "14px";
    consoleTextarea.placeholder = "Write JavaScript code here...";
    const runButton = document.createElement("button");
    runButton.textContent = "Run Code";
    runButton.style.marginTop = "10px";
    runButton.style.padding = "10px";
    runButton.style.backgroundColor = "#007acc";
    runButton.style.color = "#ffffff";
    runButton.style.border = "none";
    runButton.style.borderRadius = "4px";
    runButton.style.cursor = "pointer";
    const outputDiv = document.createElement("div");
    outputDiv.style.marginTop = "10px";
    outputDiv.style.padding = "10px";
    outputDiv.style.backgroundColor = "#252526";
    outputDiv.style.color = "#d4d4d4";
    outputDiv.style.border = "1px solid #333";
    outputDiv.style.height = "calc(20% - 20px)";
    outputDiv.style.overflowY = "auto";
    outputDiv.style.fontFamily = "monospace";
    outputDiv.style.fontSize = "14px";
    runButton.addEventListener("click", () => {
      try {
        const result = eval(consoleTextarea.value);
        outputDiv.textContent = result !== void 0 ? result : "Code executed successfully.";
      } catch (error) {
        outputDiv.textContent = `Error: ${error.message}`;
      }
    });
    consoleView.appendChild(consoleTextarea);
    consoleView.appendChild(runButton);
    consoleView.appendChild(outputDiv);
    return consoleView;
  }
  var init_console = __esm({
    "src/views/console.js"() {
    }
  });

  // src/views/cloaking.js
  function createCloakingView() {
    const cloakingView = document.createElement("div");
    cloakingView.style.width = "100%";
    cloakingView.style.height = "100%";
    cloakingView.style.display = "none";
    cloakingView.style.backgroundColor = "#f0f0f0";
    cloakingView.style.color = "#333";
    cloakingView.style.padding = "20px";
    cloakingView.style.fontFamily = "Arial, sans-serif";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.placeholder = "Enter new tab title";
    titleInput.style.width = "100%";
    titleInput.style.marginBottom = "10px";
    titleInput.style.padding = "10px";
    titleInput.style.border = "1px solid #ccc";
    titleInput.style.borderRadius = "4px";
    const iconInput = document.createElement("input");
    iconInput.type = "text";
    iconInput.placeholder = "Enter new tab icon URL";
    iconInput.style.width = "100%";
    iconInput.style.marginBottom = "10px";
    iconInput.style.padding = "10px";
    iconInput.style.border = "1px solid #ccc";
    iconInput.style.borderRadius = "4px";
    const applyButton = document.createElement("button");
    applyButton.textContent = "Apply Changes";
    applyButton.style.padding = "10px";
    applyButton.style.backgroundColor = "#007acc";
    applyButton.style.color = "#ffffff";
    applyButton.style.border = "none";
    applyButton.style.borderRadius = "4px";
    applyButton.style.cursor = "pointer";
    applyButton.addEventListener("click", () => {
      const newTitle = titleInput.value;
      const newIcon = iconInput.value;
      function gcloak() {
        const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
        link.type = "image/x-icon";
        link.rel = "shortcut icon";
        link.href = newIcon || "default-icon.png";
        document.title = newTitle || "Default Title";
        document.getElementsByTagName("head")[0].appendChild(link);
      }
      gcloak();
      setInterval(gcloak, 1e3);
    });
    cloakingView.appendChild(titleInput);
    cloakingView.appendChild(iconInput);
    cloakingView.appendChild(applyButton);
    return cloakingView;
  }
  var init_cloaking = __esm({
    "src/views/cloaking.js"() {
    }
  });

  // src/views/historyFlood.js
  function createHistoryFloodView() {
    const historyFloodView = document.createElement("div");
    historyFloodView.style.width = "100%";
    historyFloodView.style.height = "100%";
    historyFloodView.style.display = "none";
    historyFloodView.style.backgroundColor = "#f0f0f0";
    historyFloodView.style.color = "#333";
    historyFloodView.style.padding = "20px";
    historyFloodView.style.fontFamily = "Arial, sans-serif";
    const floodInput = document.createElement("input");
    floodInput.type = "number";
    floodInput.placeholder = "Enter history flood amount";
    floodInput.style.width = "100%";
    floodInput.style.marginBottom = "10px";
    floodInput.style.padding = "10px";
    floodInput.style.border = "1px solid #ccc";
    floodInput.style.borderRadius = "4px";
    const floodButton = document.createElement("button");
    floodButton.textContent = "Flood History";
    floodButton.style.padding = "10px";
    floodButton.style.backgroundColor = "#007acc";
    floodButton.style.color = "#ffffff";
    floodButton.style.border = "none";
    floodButton.style.borderRadius = "4px";
    floodButton.style.cursor = "pointer";
    floodButton.addEventListener("click", () => {
      const num = parseInt(floodInput.value, 10);
      if (isNaN(num) || num <= 0) {
        alert("Please enter a valid positive number.");
        return;
      }
      let done = false;
      const x = window.location.href;
      for (let i = 1; i <= num; i++) {
        history.pushState(0, 0, i === num ? x : i.toString());
        if (i === num) {
          done = true;
        }
      }
      if (done) {
        alert(
          `History Flooding Successful!
 ${window.location.href} 
Now Appears In Your History ${num} ${num === 1 ? "time." : "times."}`
        );
      }
    });
    historyFloodView.appendChild(floodInput);
    historyFloodView.appendChild(floodButton);
    return historyFloodView;
  }
  var init_historyFlood = __esm({
    "src/views/historyFlood.js"() {
    }
  });

  // src/views/corsProxy.js
  function createCorsProxyView() {
    const corsProxyView = document.createElement("div");
    corsProxyView.style.width = "100%";
    corsProxyView.style.height = "100%";
    corsProxyView.style.display = "none";
    corsProxyView.style.backgroundColor = "#f0f0f0";
    corsProxyView.style.color = "#333";
    corsProxyView.style.padding = "20px";
    corsProxyView.style.fontFamily = "Arial, sans-serif";
    const corsInput = document.createElement("input");
    corsInput.type = "text";
    corsInput.placeholder = "Enter URL with https://http";
    corsInput.style.width = "100%";
    corsInput.style.marginBottom = "10px";
    corsInput.style.padding = "10px";
    corsInput.style.border = "1px solid #ccc";
    corsInput.style.borderRadius = "4px";
    const corsFetchButton = document.createElement("button");
    corsFetchButton.textContent = "Fetch via CORS Proxy";
    corsFetchButton.style.padding = "10px";
    corsFetchButton.style.backgroundColor = "#007acc";
    corsFetchButton.style.color = "#ffffff";
    corsFetchButton.style.border = "none";
    corsFetchButton.style.borderRadius = "4px";
    corsFetchButton.style.cursor = "pointer";
    corsFetchButton.addEventListener("click", () => {
      const url = corsInput.value;
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        alert("Please enter a valid URL starting with http:// or https://");
        return;
      }
      const proxy = "https://api.codetabs.com/v1/proxy?quest=";
      fetch(proxy + url).then((response) => response.text()).then((text) => {
        const newWindow = window.open();
        newWindow.document.write(text);
      }).catch((error) => {
        alert(`Error fetching the URL: ${error.message}`);
      });
    });
    corsProxyView.appendChild(corsInput);
    corsProxyView.appendChild(corsFetchButton);
    return corsProxyView;
  }
  var init_corsProxy = __esm({
    "src/views/corsProxy.js"() {
    }
  });

  // src/views/pocketBrowser.js
  function createPocketBrowserView() {
    const pocketBrowserView = document.createElement("div");
    pocketBrowserView.style.width = "100%";
    pocketBrowserView.style.height = "100%";
    pocketBrowserView.style.display = "none";
    pocketBrowserView.style.backgroundColor = "#ffffff";
    pocketBrowserView.style.flexDirection = "column";
    const urlBar = document.createElement("input");
    urlBar.type = "text";
    urlBar.placeholder = "Enter URL and press Enter";
    urlBar.style.width = "100%";
    urlBar.style.padding = "10px";
    urlBar.style.border = "1px solid #ccc";
    urlBar.style.boxSizing = "border-box";
    urlBar.style.marginBottom = "10px";
    const pocketBrowserIframe = document.createElement("iframe");
    pocketBrowserIframe.src = "https://google.com?igu=1";
    pocketBrowserIframe.style.width = "100%";
    pocketBrowserIframe.style.height = "100%";
    pocketBrowserIframe.style.border = "none";
    urlBar.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const url = urlBar.value.trim();
        if (url) {
          pocketBrowserIframe.src = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
        }
      }
    });
    pocketBrowserView.appendChild(urlBar);
    pocketBrowserView.appendChild(pocketBrowserIframe);
    return pocketBrowserView;
  }
  var init_pocketBrowser = __esm({
    "src/views/pocketBrowser.js"() {
    }
  });

  // src/views/scripts.js
  var init_scripts = __esm({
    "src/views/scripts.js"() {
    }
  });

  // src/views/bookmarklets.js
  function createBookmarkletsView() {
    const bookmarkletsView = document.createElement("div");
    bookmarkletsView.style.width = "100%";
    bookmarkletsView.style.height = "100%";
    bookmarkletsView.style.display = "none";
    bookmarkletsView.style.backgroundColor = "#f0f0f0";
    bookmarkletsView.style.color = "#333";
    bookmarkletsView.style.padding = "20px";
    bookmarkletsView.style.fontFamily = "Arial, sans-serif";
    const title = document.createElement("h2");
    title.textContent = "Bookmarklets";
    bookmarkletsView.appendChild(title);
    const bookmarkletList = document.createElement("div");
    bookmarkletList.style.display = "flex";
    bookmarkletList.style.flexDirection = "column";
    bookmarkletList.style.gap = "10px";
    const bookmarklets = [
      {
        name: "page editer",
        url: "javascript: document.body.contentEditable = 'true';document.designMode = 'on';void 0;"
      },
      { name: "YouTube", url: "https://www.youtube.com" },
      { name: "Wikipedia", url: "https://www.wikipedia.org" },
      { name: "Stack Overflow", url: "https://stackoverflow.com" },
      { name: "GitHub", url: "https://github.com" }
    ];
    bookmarklets.forEach((bookmarklet) => {
      const anchor = document.createElement("a");
      anchor.href = bookmarklet.url;
      anchor.textContent = bookmarklet.name;
      anchor.target = "_blank";
      anchor.style.color = "#007acc";
      anchor.style.textDecoration = "none";
      anchor.style.padding = "5px";
      anchor.style.border = "1px solid #ccc";
      anchor.style.borderRadius = "4px";
      anchor.style.backgroundColor = "#fff";
      anchor.style.display = "inline-block";
      bookmarkletList.appendChild(anchor);
    });
    bookmarkletsView.appendChild(bookmarkletList);
    return bookmarkletsView;
  }
  var init_bookmarklets = __esm({
    "src/views/bookmarklets.js"() {
    }
  });

  // src/main.js
  var require_main = __commonJS({
    "src/main.js"(exports, module) {
      init_proxy();
      init_notes();
      init_calculator();
      init_console();
      init_cloaking();
      init_historyFlood();
      init_corsProxy();
      init_pocketBrowser();
      init_scripts();
      init_bookmarklets();
      console.log("\n\nNow launching ASC2563's Proxy Client...\n\n");
      var ProxyClientApp = class {
        constructor() {
          this.frame = null;
          this.views = {};
          this.sidebarButtons = {};
        }
        launch() {
          this.frame = document.createElement("div");
          window.proxyFrame = this.frame;
          this.setupFrameStyle();
          const sidebar = this.createSidebar();
          const content = this.createContent();
          this.frame.appendChild(sidebar);
          this.frame.appendChild(content);
          document.body.innerHTML = "";
          document.body.appendChild(this.frame);
          document.addEventListener("keydown", (event) => {
            if (event.key === "\\") {
              if (window.proxyFrame) {
                window.proxyFrame.style.display = window.proxyFrame.style.display === "none" ? "flex" : "none";
              }
            }
          });
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
            this.sidebarButtons.hideButton
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
          Object.values(this.views).forEach((view) => content.appendChild(view));
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
      };
      var app = new ProxyClientApp();
      app.launch();
    }
  });
  require_main();
})();
