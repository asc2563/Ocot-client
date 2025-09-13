// Exported function to create the Proxy view
export default function createProxyView() {
  const proxyView = document.createElement("div");
  proxyView.style.width = "100%";
  proxyView.style.height = "100%";
  proxyView.style.display = "flex";
  const iframe = document.createElement("iframe");
  iframe.src = "https://portal.apai.shadowshark.ipv64.net/"; // Example proxy URL
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  proxyView.appendChild(iframe);
  return proxyView;
}
