(() => {
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

  // src/views/calculator.js
  function createCalculatorView() {
    const calculatorView = document.createElement("div");
    calculatorView.style.width = "100%";
    calculatorView.style.height = "100%";
    calculatorView.style.display = "none";
    calculatorView.style.backgroundColor = "#e0e0e0";
    calculatorView.style.padding = "20px";
    calculatorView.innerHTML = `
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
    calculatorView._initialized = false;
    return calculatorView;
  }

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
        const code = consoleTextarea.value.trim();
        if (!code) {
          outputDiv.textContent = "No code to execute.";
          return;
        }
        const dangerousPatterns = [
          /document\.write/i,
          /window\.location/i,
          /eval\s*\(/i,
          /Function\s*\(/i,
          /setTimeout\s*\(/i,
          /setInterval\s*\(/i
        ];
        const isDangerous = dangerousPatterns.some((pattern) => pattern.test(code));
        if (isDangerous) {
          outputDiv.textContent = "Error: Potentially unsafe code detected. Please use safer alternatives.";
          return;
        }
        const result = Function('"use strict"; return (' + code + ")")();
        outputDiv.textContent = result !== void 0 ? String(result) : "Code executed successfully.";
      } catch (error) {
        outputDiv.textContent = `Error: ${error.name}: ${error.message}`;
      }
    });
    consoleView.appendChild(consoleTextarea);
    consoleView.appendChild(runButton);
    consoleView.appendChild(outputDiv);
    return consoleView;
  }

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
    let cloakingInterval = null;
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
      if (cloakingInterval) {
        clearInterval(cloakingInterval);
      }
      gcloak();
      cloakingInterval = setInterval(gcloak, 5e3);
    });
    const stopButton = document.createElement("button");
    stopButton.textContent = "Stop Cloaking";
    stopButton.style.padding = "10px";
    stopButton.style.backgroundColor = "#dc3545";
    stopButton.style.color = "#ffffff";
    stopButton.style.border = "none";
    stopButton.style.borderRadius = "4px";
    stopButton.style.cursor = "pointer";
    stopButton.style.marginLeft = "10px";
    stopButton.addEventListener("click", () => {
      if (cloakingInterval) {
        clearInterval(cloakingInterval);
        cloakingInterval = null;
        alert("Cloaking stopped.");
      }
    });
    cloakingView.appendChild(titleInput);
    cloakingView.appendChild(iconInput);
    const buttonContainer = document.createElement("div");
    buttonContainer.appendChild(applyButton);
    buttonContainer.appendChild(stopButton);
    cloakingView.appendChild(buttonContainer);
    return cloakingView;
  }

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

  // src/views/scripts.js
  function createscriptsView() {
    const scriptsView = document.createElement("div");
    scriptsView.style.width = "100%";
    scriptsView.style.height = "100%";
    scriptsView.style.display = "none";
    scriptsView.style.backgroundColor = "#f0f0f0";
    scriptsView.style.color = "#333";
    scriptsView.style.padding = "20px";
    scriptsView.style.fontFamily = "Arial, sans-serif";
    const tabCloakButton = document.createElement("button");
    tabCloakButton.textContent = "Tab Cloak";
    tabCloakButton.style.padding = "8px";
    tabCloakButton.style.backgroundColor = "#444";
    tabCloakButton.style.border = "none";
    tabCloakButton.style.borderRadius = "4px";
    tabCloakButton.style.color = "#fff";
    tabCloakButton.style.cursor = "pointer";
    tabCloakButton.addEventListener("click", () => {
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
    });
    const pageEditorButton = document.createElement("button");
    pageEditorButton.textContent = "Page Editor On";
    pageEditorButton.style.padding = "8px";
    pageEditorButton.style.backgroundColor = "#444";
    pageEditorButton.style.border = "none";
    pageEditorButton.style.borderRadius = "4px";
    pageEditorButton.style.color = "#fff";
    pageEditorButton.style.cursor = "pointer";
    pageEditorButton.addEventListener("click", () => {
      document.body.contentEditable = "true";
      document.designMode = "on";
      alert(
        "Page is now editable. Refresh the page or press page editor off to disable editing."
      );
    });
    const pageEditorOffButton = document.createElement("button");
    pageEditorOffButton.textContent = "Page Editor Off";
    pageEditorOffButton.style.padding = "8px";
    pageEditorOffButton.style.backgroundColor = "#444";
    pageEditorOffButton.style.border = "none";
    pageEditorOffButton.style.borderRadius = "4px";
    pageEditorOffButton.style.color = "#fff";
    pageEditorOffButton.style.cursor = "pointer";
    pageEditorOffButton.addEventListener("click", () => {
      document.body.contentEditable = "false";
      document.designMode = "off";
      alert("Page editing is now disabled.");
    });
    const blooketCheatsButton = document.createElement("button");
    blooketCheatsButton.textContent = "Blooket Cheats";
    blooketCheatsButton.style.padding = "8px";
    blooketCheatsButton.style.backgroundColor = "#444";
    blooketCheatsButton.style.border = "none";
    blooketCheatsButton.style.borderRadius = "4px";
    blooketCheatsButton.style.color = "#fff";
    blooketCheatsButton.style.cursor = "pointer";
    blooketCheatsButton.addEventListener("click", () => {
      try {
        (function() {
          let script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/gh/randomstuff69/blooketcheatsplus@master/GUI/Gui.js";
          document.body.appendChild(script);
        })();
      } catch (error) {
        alert(`Error loading Blooket Cheats: ${error.message}`);
      }
    });
    const fakeCrashButton = document.createElement("button");
    fakeCrashButton.textContent = "Fake Crash";
    fakeCrashButton.style.padding = "8px";
    fakeCrashButton.style.backgroundColor = "#c00";
    fakeCrashButton.style.border = "none";
    fakeCrashButton.style.borderRadius = "4px";
    fakeCrashButton.style.color = "#fff";
    fakeCrashButton.style.cursor = "pointer";
    fakeCrashButton.style.marginTop = "10px";
    fakeCrashButton.addEventListener("click", () => {
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
    });
    const emergencyTabSwitcherButton = document.createElement("button");
    emergencyTabSwitcherButton.textContent = "Emergency Tab Switcher";
    emergencyTabSwitcherButton.style.padding = "8px";
    emergencyTabSwitcherButton.style.backgroundColor = "#444";
    emergencyTabSwitcherButton.style.border = "none";
    emergencyTabSwitcherButton.style.borderRadius = "4px";
    emergencyTabSwitcherButton.style.color = "#fff";
    emergencyTabSwitcherButton.style.cursor = "pointer";
    emergencyTabSwitcherButton.addEventListener("click", () => {
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
    });
    [
      tabCloakButton,
      pageEditorButton,
      pageEditorOffButton,
      blooketCheatsButton,
      fakeCrashButton,
      emergencyTabSwitcherButton
    ].forEach((btn) => scriptsView.appendChild(btn));
    return scriptsView;
  }

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
  var TABS = [
    { key: "blocked", label: "Blocked" },
    { key: "unblocked", label: "Unblocked" },
    { key: "cors-optimized", label: "CORS Proxy Optimized" }
  ];
  var gamesData = [];
  var activeTab = "unblocked";
  async function loadGames() {
    gamesData = await loadJson("/src/data/json/games.json") || [];
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
        <button class="games-tab${activeTab === tab.key ? " active" : ""}" onclick="window.setGamesTab('${tab.key}')">${tab.label}</button>
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
          <div class="game-type">${game.type.replace("cors-optimized", "CORS Optimized")}</div>
        </div>
      `
    ).join("")}
    </div>
  `;
  }
  window.setGamesTab = setTab;
  function showGamesView() {
    return `
    <div id="games-view" class="games-view">
      Loading games...
    </div>
  `;
  }
  loadGames();

  // src/main.js
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
      this.sidebarButtons.scriptsButton = makeBtn("scripts");
      this.sidebarButtons.bookmarkletsButton = makeBtn("Bookmarklets");
      this.sidebarButtons.gamesButton = makeBtn("Games List");
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
        this.sidebarButtons.scriptsButton,
        this.sidebarButtons.bookmarkletsButton,
        this.sidebarButtons.gamesButton,
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
      this.views.scriptsView = createscriptsView();
      this.views.bookmarkletsView = createBookmarkletsView();
      const gamesViewDiv = document.createElement("div");
      gamesViewDiv.innerHTML = showGamesView();
      gamesViewDiv.style.display = "none";
      this.views.gamesView = gamesViewDiv;
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
      b.scriptsButton.addEventListener("click", () => {
        hideAll();
        v.scriptsView.style.display = "block";
        setActiveButton(b.scriptsButton);
      });
      b.bookmarkletsButton.addEventListener("click", () => {
        hideAll();
        v.bookmarkletsView.style.display = "block";
        setActiveButton(b.bookmarkletsButton);
      });
      b.gamesButton.addEventListener("click", () => {
        hideAll();
        v.gamesView.style.display = "block";
        setActiveButton(b.gamesButton);
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
