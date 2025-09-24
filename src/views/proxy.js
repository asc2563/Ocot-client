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
  proxyView.appendChild(iframe);
  return proxyView;
}
