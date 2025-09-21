import { injectAppCSS } from "../css.js";

// Exported function to create the CORS Proxy view
export default function createCorsProxyView() {
  // Inject shared CSS
  injectAppCSS();

  const corsProxyView = document.createElement("div");
  corsProxyView.className = "card-grid-view";

  corsProxyView.innerHTML = `
    <div class="proxy-header" style="margin-bottom: 30px;">
      <h2 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1.5rem;">CORS Proxy</h2>
      <p style="color: #aaa; margin: 0; font-size: 0.95rem;">Access websites that normally block cross-origin requests</p>
    </div>

    <div class="proxy-presets" style="margin-bottom: 20px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Quick Access</h3>
      <div class="card-list" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
        <div class="card-item preset-site" data-url="https://httpbin.org/get">
          <div class="card-title">Test API</div>
          <div class="card-desc">httpbin.org/get - Test the proxy functionality</div>
        </div>
        <div class="card-item preset-site" data-url="https://jsonplaceholder.typicode.com/posts/1">
          <div class="card-title">JSON API</div>
          <div class="card-desc">JSONPlaceholder - Sample JSON data</div>
        </div>
        <div class="card-item preset-site" data-url="https://api.github.com/users/octocat">
          <div class="card-title">GitHub API</div>
          <div class="card-desc">GitHub user data example</div>
        </div>
        <div class="card-item preset-site" data-url="https://reqres.in/api/users">
          <div class="card-title">ReqRes API</div>
          <div class="card-desc">Sample REST API for testing</div>
        </div>
      </div>
    </div>

    <div class="proxy-custom" style="margin-bottom: 20px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Custom URL</h3>
      <div style="display: grid; gap: 16px;">
        <div>
          <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">Target URL</label>
          <input type="text" id="url-input" placeholder="https://example.com/api/data" 
                 style="width: 100%; padding: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        </div>
        <div style="display: flex; gap: 12px; margin-top: 8px;">
          <button id="fetch-btn" class="games-tab" style="border-radius: 6px; background: #007acc;">Fetch via Proxy</button>
          <button id="open-new-tab-btn" class="games-tab" style="border-radius: 6px; background: #28a745;">Open in New Tab</button>
          <button id="clear-url-btn" class="games-tab" style="border-radius: 6px; background: #6c757d;">Clear</button>
        </div>
      </div>
    </div>

    <div class="proxy-options" style="margin-bottom: 15px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Proxy Settings</h3>
      <div style="background: #292d36; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
        <div style="display: grid; gap: 12px;">
          <div>
            <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">Proxy Service</label>
            <select id="proxy-service" style="width: 100%; padding: 8px; background: #1e1e1e; border: 1px solid #404040; border-radius: 4px; color: #fff;">
              <option value="https://api.codetabs.com/v1/proxy?quest=">CodeTabs Proxy</option>
              <option value="https://cors-anywhere.herokuapp.com/">CORS Anywhere</option>
              <option value="https://api.allorigins.win/get?url=">AllOrigins</option>
            </select>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <input type="checkbox" id="json-format" style="margin: 0;">
            <label for="json-format" style="color: #aaa; font-size: 0.9rem;">Try to format JSON response</label>
          </div>
        </div>
      </div>
    </div>

    <div class="proxy-status">
      <div style="background: #292d36; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
        <h4 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1rem;">Status</h4>
        <div id="status-display" style="color: #aaa; font-size: 0.9rem;">Ready to fetch URLs</div>
        <div id="response-preview" style="margin-top: 12px; max-height: 200px; overflow-y: auto; background: #1e1e1e; padding: 12px; border-radius: 4px; font-family: 'Consolas', monospace; font-size: 0.85rem; color: #d4d4d4; display: none;"></div>
      </div>
    </div>
  `;

  // Get elements
  const urlInput = corsProxyView.querySelector("#url-input");
  const fetchBtn = corsProxyView.querySelector("#fetch-btn");
  const openNewTabBtn = corsProxyView.querySelector("#open-new-tab-btn");
  const clearUrlBtn = corsProxyView.querySelector("#clear-url-btn");
  const proxyService = corsProxyView.querySelector("#proxy-service");
  const jsonFormat = corsProxyView.querySelector("#json-format");
  const statusDisplay = corsProxyView.querySelector("#status-display");
  const responsePreview = corsProxyView.querySelector("#response-preview");
  const presetCards = corsProxyView.querySelectorAll(".preset-site");

  function updateStatus(message, type = "info") {
    statusDisplay.textContent = message;
    statusDisplay.style.color =
      type === "success"
        ? "#56d364"
        : type === "error"
        ? "#f85149"
        : type === "warning"
        ? "#d29922"
        : "#aaa";
  }

  function isValidUrl(string) {
    try {
      new URL(string);
      return string.startsWith("http://") || string.startsWith("https://");
    } catch (_) {
      return false;
    }
  }

  function formatResponse(text) {
    if (!jsonFormat.checked) return text;

    try {
      const json = JSON.parse(text);
      return JSON.stringify(json, null, 2);
    } catch {
      return text;
    }
  }

  function showResponsePreview(text) {
    responsePreview.textContent = formatResponse(text);
    responsePreview.style.display = "block";
  }

  function hideResponsePreview() {
    responsePreview.style.display = "none";
  }

  async function fetchViaProxy(url, openInNewTab = false) {
    if (!isValidUrl(url)) {
      updateStatus(
        "Please enter a valid URL starting with http:// or https://",
        "error"
      );
      return;
    }

    const proxyUrl = proxyService.value;
    const fullProxyUrl = proxyUrl + encodeURIComponent(url);

    updateStatus(`Fetching ${url} via proxy...`, "warning");
    hideResponsePreview();

    try {
      const response = await fetch(fullProxyUrl);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const text = await response.text();

      if (openInNewTab) {
        const newWindow = window.open();
        if (newWindow) {
          newWindow.document.write(text);
          newWindow.document.close();
          updateStatus(`Successfully opened ${url} in new tab`, "success");
        } else {
          updateStatus(
            "Failed to open new tab - popup might be blocked",
            "error"
          );
        }
      } else {
        showResponsePreview(text);
        updateStatus(
          `Successfully fetched ${url} (${text.length} characters)`,
          "success"
        );
      }
    } catch (error) {
      updateStatus(`Error: ${error.message}`, "error");
      hideResponsePreview();
    }
  }

  // Event listeners
  fetchBtn.addEventListener("click", () => {
    const url = urlInput.value.trim();
    fetchViaProxy(url, false);
  });

  openNewTabBtn.addEventListener("click", () => {
    const url = urlInput.value.trim();
    fetchViaProxy(url, true);
  });

  clearUrlBtn.addEventListener("click", () => {
    urlInput.value = "";
    hideResponsePreview();
    updateStatus("Input cleared", "info");
  });

  // Preset card event listeners
  presetCards.forEach((card) => {
    card.addEventListener("click", () => {
      const url = card.dataset.url;
      urlInput.value = url;
      fetchViaProxy(url, false);
    });
  });

  // Input validation
  urlInput.addEventListener("input", () => {
    const url = urlInput.value.trim();
    if (!url) {
      urlInput.style.borderColor = "#404040";
      updateStatus("Ready to fetch URLs", "info");
    } else if (isValidUrl(url)) {
      urlInput.style.borderColor = "#28a745";
      updateStatus(`Ready to fetch: ${url}`, "info");
    } else {
      urlInput.style.borderColor = "#dc3545";
      updateStatus(
        "Please enter a valid URL (must start with http:// or https://)",
        "error"
      );
    }
  });

  // Enter key support
  urlInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      fetchBtn.click();
    }
  });

  // Proxy service change
  proxyService.addEventListener("change", () => {
    const serviceName = proxyService.options[proxyService.selectedIndex].text;
    updateStatus(`Switched to ${serviceName}`, "info");
  });

  return corsProxyView;
}
