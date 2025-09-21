import { injectAppCSS } from "../css.js";

// Exported function to create the History Flood view
export default function createHistoryFloodView() {
  // Inject shared CSS
  injectAppCSS();

  const historyFloodView = document.createElement("div");
  historyFloodView.className = "card-grid-view";

  historyFloodView.innerHTML = `
    <div class="flood-header" style="margin-bottom: 30px;">
      <h2 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1.5rem;">History Flood</h2>
      <p style="color: #aaa; margin: 0; font-size: 0.95rem;">Add multiple entries of the current page to browser history</p>
    </div>

    <div class="flood-presets" style="margin-bottom: 30px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Quick Amounts</h3>
      <div class="card-list" style="grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));">
        <div class="card-item preset-amount" data-amount="10">
          <div class="card-title">10 Entries</div>
          <div class="card-desc">Light flooding</div>
        </div>
        <div class="card-item preset-amount" data-amount="50">
          <div class="card-title">50 Entries</div>
          <div class="card-desc">Medium flooding</div>
        </div>
        <div class="card-item preset-amount" data-amount="100">
          <div class="card-title">100 Entries</div>
          <div class="card-desc">Heavy flooding</div>
        </div>
        <div class="card-item preset-amount" data-amount="500">
          <div class="card-title">500 Entries</div>
          <div class="card-desc">Extreme flooding</div>
        </div>
      </div>
    </div>

    <div class="flood-custom" style="margin-bottom: 20px;">
      <h3 style="color: #fff; margin: 0 0 16px 0; font-size: 1.2rem;">Custom Amount</h3>
      <div style="display: grid; gap: 16px;">
        <div>
          <label style="color: #00bfff; font-weight: 600; margin-bottom: 6px; display: block;">Number of History Entries</label>
          <input type="number" id="flood-input" placeholder="Enter amount (1-1000)" min="1" max="1000"
                 style="width: 100%; padding: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        </div>
        <div style="display: flex; gap: 12px; margin-top: 8px;">
          <button id="flood-btn" class="games-tab" style="border-radius: 6px; background: #007acc;">Flood History</button>
          <button id="clear-input-btn" class="games-tab" style="border-radius: 6px; background: #6c757d;">Clear</button>
        </div>
      </div>
    </div>

    <div class="flood-info" style="margin-bottom: 20px;">
      <div style="background: #292d36; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
        <h4 style="color: #d29922; margin: 0 0 8px 0; font-size: 1rem;">⚠️ How History Flooding Works</h4>
        <ul style="color: #aaa; font-size: 0.9rem; margin: 8px 0; padding-left: 20px;">
          <li>Adds multiple entries of the current page to browser history</li>
          <li>Makes it harder to navigate back using browser back button</li>
          <li>Creates the appearance of visiting this page multiple times</li>
          <li>Higher numbers create more difficulty going back</li>
        </ul>
      </div>
    </div>

    <div class="flood-status">
      <div style="background: #292d36; border-radius: 8px; padding: 16px; border: 1px solid #404040;">
        <h4 style="color: #00bfff; margin: 0 0 8px 0; font-size: 1rem;">Status</h4>
        <div id="status-display" style="color: #aaa; font-size: 0.9rem;">Ready to flood history</div>
      </div>
    </div>
  `;

  // Get elements
  const floodInput = historyFloodView.querySelector("#flood-input");
  const floodBtn = historyFloodView.querySelector("#flood-btn");
  const clearInputBtn = historyFloodView.querySelector("#clear-input-btn");
  const statusDisplay = historyFloodView.querySelector("#status-display");
  const presetCards = historyFloodView.querySelectorAll(".preset-amount");

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

  function floodHistory(amount) {
    if (isNaN(amount) || amount <= 0 || amount > 1000) {
      updateStatus("Please enter a valid number between 1 and 1000", "error");
      return;
    }

    updateStatus(`Flooding history with ${amount} entries...`, "warning");

    try {
      const currentUrl = window.location.href;
      let completed = 0;

      // Use requestAnimationFrame for better performance with large numbers
      function addEntries() {
        const batchSize = Math.min(10, amount - completed);

        for (let i = 0; i < batchSize; i++) {
          completed++;
          history.pushState(
            { flood: true, entry: completed },
            "",
            completed === amount
              ? currentUrl
              : `${currentUrl}#flood-${completed}`
          );
        }

        if (completed < amount) {
          requestAnimationFrame(addEntries);
          updateStatus(
            `Progress: ${completed}/${amount} entries added`,
            "warning"
          );
        } else {
          // Final entry should be the original URL
          history.pushState({ flood: true, final: true }, "", currentUrl);
          updateStatus(
            `Success! Added ${amount} ${
              amount === 1 ? "entry" : "entries"
            } to history. Current page now appears ${amount} times.`,
            "success"
          );
        }
      }

      addEntries();
    } catch (error) {
      updateStatus(`Error: ${error.message}`, "error");
    }
  }

  // Event listeners
  floodBtn.addEventListener("click", () => {
    const amount = parseInt(floodInput.value, 10);
    floodHistory(amount);
  });

  clearInputBtn.addEventListener("click", () => {
    floodInput.value = "";
    updateStatus("Input cleared", "info");
  });

  // Preset card event listeners
  presetCards.forEach((card) => {
    card.addEventListener("click", () => {
      const amount = parseInt(card.dataset.amount, 10);
      floodInput.value = amount;
      floodHistory(amount);
    });
  });

  // Input validation
  floodInput.addEventListener("input", () => {
    const value = parseInt(floodInput.value, 10);
    if (isNaN(value) || value <= 0) {
      floodInput.style.borderColor = "#dc3545";
    } else if (value > 1000) {
      floodInput.style.borderColor = "#d29922";
      updateStatus("Warning: Maximum recommended is 1000 entries", "warning");
    } else {
      floodInput.style.borderColor = "#28a745";
      updateStatus(
        `Ready to add ${value} ${value === 1 ? "entry" : "entries"}`,
        "info"
      );
    }
  });

  // Enter key support
  floodInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      floodBtn.click();
    }
  });

  return historyFloodView;
}
