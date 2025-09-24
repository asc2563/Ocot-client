import { getProxySettings } from "./settings.js";

// Exported function to create the Proxy view
export default function createProxyView() {
  const proxyView = document.createElement("div");
  proxyView.style.width = "100%";
  proxyView.style.height = "100%";
  proxyView.style.display = "flex";

  const iframe = document.createElement("iframe");

  // Get proxy URL from settings
  const proxySettings = getProxySettings();
  iframe.src = proxySettings.url || "https://core.lab.infosv.ro";

  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";

  // Function to reload the proxy iframe with current settings
  function reloadProxyIframe() {
    const currentSettings = getProxySettings();
    const newUrl = currentSettings.url || "https://core.lab.infosv.ro";
    
    // Only reload if the URL has actually changed
    if (iframe.src !== newUrl) {
      console.log("Proxy: Reloading iframe due to settings change", { 
        oldUrl: iframe.src, 
        newUrl: newUrl 
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

  proxyView.appendChild(iframe);
  return proxyView;
}
