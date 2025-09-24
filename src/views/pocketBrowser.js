import { injectAppCSS } from "../css.js";
import { getPocketBrowserSettings } from "./settings.js";

// Exported function to create the Pocket Browser view
export default function createPocketBrowserView() {
  // Inject shared CSS
  injectAppCSS();

  const pocketBrowserView = document.createElement("div");
  pocketBrowserView.style.cssText = `
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #23272f;
    flex-direction: column;
  `;

  // Initially hide the view
  pocketBrowserView.style.display = "none";

  // Create browser toolbar
  const toolbar = document.createElement("div");
  toolbar.style.cssText = `
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    background: #292d36;
    border-bottom: 1px solid #404040;
  `;

  // Navigation buttons
  const backBtn = document.createElement("button");
  backBtn.innerHTML = "⬅️";
  backBtn.title = "Go Back";
  backBtn.style.cssText = `
    padding: 8px 12px;
    background: #007acc;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;

  const forwardBtn = document.createElement("button");
  forwardBtn.innerHTML = "➡️";
  forwardBtn.title = "Go Forward";
  forwardBtn.style.cssText = `
    padding: 8px 12px;
    background: #007acc;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;

  const refreshBtn = document.createElement("button");
  refreshBtn.innerHTML = "🔄";
  refreshBtn.title = "Refresh";
  refreshBtn.style.cssText = `
    padding: 8px 12px;
    background: #28a745;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;

  const homeBtn = document.createElement("button");
  homeBtn.innerHTML = "🏠";
  homeBtn.title = "Home";
  homeBtn.style.cssText = `
    padding: 8px 12px;
    background: #6c757d;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;

  // URL bar
  const urlBar = document.createElement("input");
  urlBar.type = "text";
  urlBar.placeholder = "Enter URL and press Enter";
  urlBar.style.cssText = `
    flex: 1;
    padding: 10px 12px;
    background: #1e1e1e;
    border: 1px solid #404040;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
  `;

  // Go button
  const goBtn = document.createElement("button");
  goBtn.innerHTML = "Go";
  goBtn.style.cssText = `
    padding: 10px 16px;
    background: #007acc;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: background 0.2s;
  `;

  // Add hover effects
  [backBtn, forwardBtn, refreshBtn, homeBtn, goBtn].forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      if (btn === refreshBtn) btn.style.background = "#218838";
      else if (btn === homeBtn) btn.style.background = "#5a6268";
      else btn.style.background = "#0056b3";
    });
    btn.addEventListener("mouseleave", () => {
      if (btn === refreshBtn) btn.style.background = "#28a745";
      else if (btn === homeBtn) btn.style.background = "#6c757d";
      else btn.style.background = "#007acc";
    });
  });

  // URL bar focus effect
  urlBar.addEventListener("focus", () => {
    urlBar.style.borderColor = "#007acc";
    urlBar.style.boxShadow = "0 0 0 2px rgba(0, 122, 204, 0.3)";
  });
  urlBar.addEventListener("blur", () => {
    urlBar.style.borderColor = "#404040";
    urlBar.style.boxShadow = "none";
  });

  // Add elements to toolbar
  toolbar.appendChild(backBtn);
  toolbar.appendChild(forwardBtn);
  toolbar.appendChild(refreshBtn);
  toolbar.appendChild(homeBtn);
  toolbar.appendChild(urlBar);
  toolbar.appendChild(goBtn);

  // Create iframe container
  const iframeContainer = document.createElement("div");
  iframeContainer.style.cssText = `
    flex: 1;
    background: #fff;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    min-height: 0;
    height: calc(100% - 60px);
  `;

  // Get saved settings
  const settings = getPocketBrowserSettings();
  const defaultHomepage = settings?.homepage || "https://google.com?igu=1";

  const pocketBrowserIframe = document.createElement("iframe");
  pocketBrowserIframe.src = defaultHomepage;
  pocketBrowserIframe.style.cssText = `
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  `;

  iframeContainer.appendChild(pocketBrowserIframe);

  // Navigation history
  let history = [defaultHomepage];
  let currentIndex = 0;

  function updateUrl(url) {
    // Ensure URL has protocol
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = `https://${url}`;
    }

    // Update iframe
    pocketBrowserIframe.src = url;

    // Update URL bar
    urlBar.value = url;

    // Update history
    if (currentIndex < history.length - 1) {
      // Remove forward history if navigating to new page
      history = history.slice(0, currentIndex + 1);
    }
    history.push(url);
    currentIndex = history.length - 1;

    updateButtonStates();
  }

  function updateButtonStates() {
    backBtn.disabled = currentIndex <= 0;
    forwardBtn.disabled = currentIndex >= history.length - 1;

    // Update button styles based on disabled state
    backBtn.style.opacity = backBtn.disabled ? "0.5" : "1";
    forwardBtn.style.opacity = forwardBtn.disabled ? "0.5" : "1";
    backBtn.style.cursor = backBtn.disabled ? "not-allowed" : "pointer";
    forwardBtn.style.cursor = forwardBtn.disabled ? "not-allowed" : "pointer";
  }

  // Event listeners
  backBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      const url = history[currentIndex];
      pocketBrowserIframe.src = url;
      urlBar.value = url;
      updateButtonStates();
    }
  });

  forwardBtn.addEventListener("click", () => {
    if (currentIndex < history.length - 1) {
      currentIndex++;
      const url = history[currentIndex];
      pocketBrowserIframe.src = url;
      urlBar.value = url;
      updateButtonStates();
    }
  });

  refreshBtn.addEventListener("click", () => {
    pocketBrowserIframe.src = pocketBrowserIframe.src;
  });

  homeBtn.addEventListener("click", () => {
    updateUrl(defaultHomepage);
  });

  const navigateToUrl = () => {
    const url = urlBar.value.trim();
    if (url) {
      updateUrl(url);
    }
  };

  goBtn.addEventListener("click", navigateToUrl);

  urlBar.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      navigateToUrl();
    }
  });

  // Initialize button states
  updateButtonStates();

  pocketBrowserView.appendChild(toolbar);
  pocketBrowserView.appendChild(iframeContainer);

  return pocketBrowserView;
}
