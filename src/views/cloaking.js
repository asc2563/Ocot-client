import { injectAppCSS } from "../css.js";

// Exported function to create the Cloaking view
export default function createCloakingView() {
  // Inject shared CSS
  injectAppCSS();

  const cloakingView = document.createElement("div");
  cloakingView.className = "card-grid-view";

  cloakingView.innerHTML = `
    <div class="cloaking-header" style="margin-bottom: 30px;">
      <h2 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1.5rem;">Tab Cloaking</h2>
      <p style="color: #aaa; margin: 0; font-size: 0.95rem;">Change your tab's title and icon to disguise this page</p>
    </div>

    <div class="cloaking-presets" style="margin-bottom: 30px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Quick Presets</h3>
      <div class="card-list" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
        <div class="card-item preset-card" data-title="Google" data-icon="https://www.google.com/favicon.ico">
          <div class="card-title">Google</div>
          <div class="card-desc">Search engine homepage</div>
        </div>
        <div class="card-item preset-card" data-title="Gmail" data-icon="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico">
          <div class="card-title">Gmail</div>
          <div class="card-desc">Email service</div>
        </div>
        <div class="card-item preset-card" data-title="Clever | Portal" data-icon="https://assets.clever.com/launchpad/c4a9bd82e/favicon.ico">
          <div class="card-title">Clever</div>
          <div class="card-desc">Education platform</div>
        </div>
        <div class="card-item preset-card" data-title="Google Drive" data-icon="https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png">
          <div class="card-title">Google Drive</div>
          <div class="card-desc">Cloud storage</div>
        </div>
        <div class="card-item preset-card" data-title="Google Docs" data-icon="https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico">
          <div class="card-title">Google Docs</div>
          <div class="card-desc">Document editor</div>
        </div>
        <div class="card-item preset-card" data-title="Canvas" data-icon="https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico">
          <div class="card-title">Canvas</div>
          <div class="card-desc">Learning management</div>
        </div>
      </div>
    </div>

    <div class="cloaking-custom" style="margin-bottom: 20px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Custom Cloaking</h3>
      <div style="display: grid; gap: 16px;">
        <div>
          <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">Tab Title</label>
          <input type="text" id="title-input" placeholder="Enter new tab title (e.g., Google)" 
                 style="width: 100%; padding: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        </div>
        <div>
          <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">Tab Icon URL</label>
          <input type="text" id="icon-input" placeholder="Enter favicon URL (e.g., https://www.google.com/favicon.ico)" 
                 style="width: 100%; padding: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        </div>
        <div style="display: flex; gap: 12px; margin-top: 8px;">
          <button id="apply-btn" class="games-tab" style="border-radius: 6px; background: #28a745;">Apply Cloaking</button>
          <button id="stop-btn" class="games-tab" style="border-radius: 6px; background: #dc3545;">Stop Cloaking</button>
          <button id="reset-btn" class="games-tab" style="border-radius: 6px; background: #6c757d;">Reset to Original</button>
        </div>
      </div>
    </div>

    <div class="cloaking-status">
      <div style="background: #292d36; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
        <h4 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1rem;">Status</h4>
        <div id="status-display" style="color: #aaa; font-size: 0.9rem;">Ready to cloak</div>
      </div>
    </div>
  `;

  // Get elements
  const titleInput = cloakingView.querySelector("#title-input");
  const iconInput = cloakingView.querySelector("#icon-input");
  const applyBtn = cloakingView.querySelector("#apply-btn");
  const stopBtn = cloakingView.querySelector("#stop-btn");
  const resetBtn = cloakingView.querySelector("#reset-btn");
  const statusDisplay = cloakingView.querySelector("#status-display");
  const presetCards = cloakingView.querySelectorAll(".preset-card");

  // Store original values and interval
  let cloakingInterval = null;
  let originalTitle = document.title;
  let originalIcon = document.querySelector("link[rel*='icon']")?.href || "";

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

  function applyCloaking(title, iconUrl) {
    function gcloak() {
      try {
        // Update title
        if (title) {
          document.title = title;
        }

        // Update icon
        if (iconUrl) {
          const link =
            document.querySelector("link[rel*='icon']") ||
            document.createElement("link");
          link.type = "image/x-icon";
          link.rel = "shortcut icon";
          link.href = iconUrl;
          if (!document.querySelector("link[rel*='icon']")) {
            document.getElementsByTagName("head")[0].appendChild(link);
          }
        }
      } catch (error) {
        console.error("Cloaking error:", error);
      }
    }

    // Clear any existing interval
    if (cloakingInterval) {
      clearInterval(cloakingInterval);
    }

    // Apply immediately
    gcloak();

    // Set interval to maintain cloaking
    cloakingInterval = setInterval(gcloak, 3000);

    updateStatus(
      `Active: "${title || "Title unchanged"}" with custom icon`,
      "success"
    );
  }

  function stopCloaking() {
    if (cloakingInterval) {
      clearInterval(cloakingInterval);
      cloakingInterval = null;
      updateStatus("Cloaking stopped", "warning");
    } else {
      updateStatus("No active cloaking to stop", "warning");
    }
  }

  function resetToOriginal() {
    stopCloaking();
    document.title = originalTitle;

    const currentIcon = document.querySelector("link[rel*='icon']");
    if (currentIcon && originalIcon) {
      currentIcon.href = originalIcon;
    }

    titleInput.value = "";
    iconInput.value = "";
    updateStatus("Reset to original title and icon", "info");
  }

  // Event listeners
  applyBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const iconUrl = iconInput.value.trim();

    if (!title && !iconUrl) {
      updateStatus("Please enter a title or icon URL", "error");
      return;
    }

    applyCloaking(title, iconUrl);
  });

  stopBtn.addEventListener("click", stopCloaking);
  resetBtn.addEventListener("click", resetToOriginal);

  // Preset card event listeners
  presetCards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.dataset.title;
      const icon = card.dataset.icon;

      titleInput.value = title;
      iconInput.value = icon;

      applyCloaking(title, icon);
    });
  });

  // Input validation and preview
  iconInput.addEventListener("input", () => {
    const url = iconInput.value.trim();
    if (url) {
      // Simple URL validation
      try {
        new URL(url);
        iconInput.style.borderColor = "#28a745";
      } catch {
        iconInput.style.borderColor = "#dc3545";
      }
    } else {
      iconInput.style.borderColor = "#404040";
    }
  });

  // Cleanup on page unload
  window.addEventListener("beforeunload", () => {
    if (cloakingInterval) {
      clearInterval(cloakingInterval);
    }
  });

  return cloakingView;
}
