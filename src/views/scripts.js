// Exported function to create the explois view
export default function createscriptsView() {
  const exploisView = document.createElement("div");
  exploisView.style.width = "100%";
  exploisView.style.height = "100%";
  exploisView.style.display = "none";
  exploisView.style.backgroundColor = "#f0f0f0";
  exploisView.style.color = "#333";
  exploisView.style.padding = "20px";
  exploisView.style.fontFamily = "Arial, sans-serif";

  // Tab Cloak
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
    iframe.style =
      "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
    if (url.includes("https://") || url.includes("http://")) {
      iframe.src = url;
    } else {
      iframe.src = "https://" + url;
    }
    win.document.body.appendChild(iframe);
  });

  // Page Editor On
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

  // Page Editor Off
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

  // Blooket Cheats
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
      (function () {
        let bkmkltscript = document.createElement("script");
        bkmkltscript.src =
          "https://cdn.jsdelivr.net/gh/asc2563/proxys@master/blooketcheats.js";
        document.body.appendChild(bkmkltscript);
      })();
    } catch (error) {
      alert(`Error loading Blooket Cheats: ${error.message}`);
    }
  });

  // Fake Crash
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

  // Emergency Tab Switcher
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
      // Create and configure the emergency tab switcher element
      const elem = document.createElement("div");
      const body = document.body;

      body.appendChild(elem);

      // Apply styles using Object.assign for cleaner code
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
        display: "block",
      });

      elem.id = "elem";
      elem.textContent = "Z";

      // Get the safety URL from user
      const safetyUrl = prompt(
        "What tab do you want to open when a teacher comes by? " +
          "Click Z to go to that tab. Warning: may have to click out of element for it to work"
      );

      // Function to navigate to safety URL
      const navigateToSafety = () => {
        if (safetyUrl) {
          window.location.href = safetyUrl;
        }
      };

      // Add keyboard event listener
      window.addEventListener("keydown", (event) => {
        if (event.key.toLowerCase() === "z") {
          navigateToSafety();
        }
      });

      // Add click event listener
      elem.addEventListener("click", navigateToSafety);
    })();
  });

  // Add all exploit buttons
  [
    tabCloakButton,
    pageEditorButton,
    pageEditorOffButton,
    blooketCheatsButton,
    fakeCrashButton,
    emergencyTabSwitcherButton,
  ].forEach((btn) => exploisView.appendChild(btn));

  return exploisView;
}
