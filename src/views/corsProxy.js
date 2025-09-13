// Exported function to create the CORS Proxy view
export default function createCorsProxyView() {
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
    fetch(proxy + url)
      .then((response) => response.text())
      .then((text) => {
        const newWindow = window.open();
        newWindow.document.write(text);
      })
      .catch((error) => {
        alert(`Error fetching the URL: ${error.message}`);
      });
  });

  corsProxyView.appendChild(corsInput);
  corsProxyView.appendChild(corsFetchButton);

  return corsProxyView;
}
