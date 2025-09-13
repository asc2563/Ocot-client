// Exported function to create the Pocket Browser view
export default function createPocketBrowserView() {
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
        pocketBrowserIframe.src =
          url.startsWith("http://") || url.startsWith("https://")
            ? url
            : `https://${url}`;
      }
    }
  });

  pocketBrowserView.appendChild(urlBar);
  pocketBrowserView.appendChild(pocketBrowserIframe);

  return pocketBrowserView;
}
