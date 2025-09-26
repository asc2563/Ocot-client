import { getProxySettings } from "./settings.js";

// Exported function to create the Proxy view
export default function createProxyView() {
  const proxyView = document.createElement("div");
  proxyView.style.width = "100%";
  proxyView.style.height = "100%";
  proxyView.style.display = "flex";
  proxyView.style.flexDirection = "column";

  // Create toolbar
  const toolbar = document.createElement("div");
  toolbar.style.cssText = `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 8px 12px;
    background: #292d36;
    border-bottom: 1px solid #404040;
    min-height: 40px;
  `;

  // Create fullscreen button
  const fullscreenBtn = document.createElement("button");
  fullscreenBtn.innerHTML = "⛶"; // Square icon for fullscreen
  fullscreenBtn.title = "Enter Fullscreen";
  fullscreenBtn.style.cssText = `
    background: #2d323e;
    border: 1px solid #404040;
    border-radius: 4px;
    color: #fff;
    padding: 6px 10px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;
    outline: none;
  `;

  // Add hover effect
  fullscreenBtn.addEventListener("mouseenter", () => {
    fullscreenBtn.style.background = "var(--accent-color, #007acc)";
    fullscreenBtn.style.borderColor = "var(--accent-color, #007acc)";
  });

  fullscreenBtn.addEventListener("mouseleave", () => {
    fullscreenBtn.style.background = "#2d323e";
    fullscreenBtn.style.borderColor = "#404040";
  });

  const iframe = document.createElement("iframe");
  
  // Add unique ID for auto-hide detection
  iframe.id = "ocot-proxy-iframe";

  // Get proxy URL from settings
  const proxySettings = getProxySettings();
  iframe.src = proxySettings.url || "https://core.lab.infosv.ro";

  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.style.flex = "1";

  // Function to reload the proxy iframe with current settings
  function reloadProxyIframe() {
    const currentSettings = getProxySettings();
    const newUrl = currentSettings.url || "https://core.lab.infosv.ro";

    // Only reload if the URL has actually changed
    if (iframe.src !== newUrl) {
      console.log("Proxy: Reloading iframe due to settings change", {
        oldUrl: iframe.src,
        newUrl: newUrl,
      });
      iframe.src = newUrl;
    }
  }

  // Listen for storage events (cross-tab proxy settings changes)
  window.addEventListener("storage", (e) => {
    if (e.key === "proxyClientProxySettings") {
      console.log("Proxy: Storage event detected for proxy settings");
      reloadProxyIframe();
    }
  });

  // Listen for immediate settings changes within the same page
  window.addEventListener("proxySettingsChanged", (e) => {
    console.log("Proxy: Settings changed event received", e.detail);
    reloadProxyIframe();
  });

  // Fullscreen functionality
  fullscreenBtn.addEventListener("click", () => {
    enterFullscreen();
  });

  function enterFullscreen() {
    try {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      }
    } catch (error) {
      console.warn("Fullscreen not supported or blocked:", error);
    }
  }

  // Listen for fullscreen changes to update button state
  function handleFullscreenChange() {
    const isFullscreen =
      document.fullscreenElement === iframe ||
      document.webkitFullscreenElement === iframe ||
      document.msFullscreenElement === iframe ||
      document.mozFullScreenElement === iframe;

    if (isFullscreen) {
      fullscreenBtn.innerHTML = "⛶";
      fullscreenBtn.title = "Exit Fullscreen (Press Esc)";
    } else {
      fullscreenBtn.innerHTML = "⛶";
      fullscreenBtn.title = "Enter Fullscreen";
    }
  }

  // Add fullscreen event listeners
  document.addEventListener("fullscreenchange", handleFullscreenChange);
  document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
  document.addEventListener("msfullscreenchange", handleFullscreenChange);
  document.addEventListener("mozfullscreenchange", handleFullscreenChange);

  // Assemble components
  toolbar.appendChild(fullscreenBtn);
  proxyView.appendChild(toolbar);
  proxyView.appendChild(iframe);
  return proxyView;
}
