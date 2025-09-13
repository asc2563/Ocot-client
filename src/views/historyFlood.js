// Exported function to create the History Flood view
export default function createHistoryFloodView() {
  const historyFloodView = document.createElement("div");
  historyFloodView.style.width = "100%";
  historyFloodView.style.height = "100%";
  historyFloodView.style.display = "none";
  historyFloodView.style.backgroundColor = "#f0f0f0";
  historyFloodView.style.color = "#333";
  historyFloodView.style.padding = "20px";
  historyFloodView.style.fontFamily = "Arial, sans-serif";

  const floodInput = document.createElement("input");
  floodInput.type = "number";
  floodInput.placeholder = "Enter history flood amount";
  floodInput.style.width = "100%";
  floodInput.style.marginBottom = "10px";
  floodInput.style.padding = "10px";
  floodInput.style.border = "1px solid #ccc";
  floodInput.style.borderRadius = "4px";

  const floodButton = document.createElement("button");
  floodButton.textContent = "Flood History";
  floodButton.style.padding = "10px";
  floodButton.style.backgroundColor = "#007acc";
  floodButton.style.color = "#ffffff";
  floodButton.style.border = "none";
  floodButton.style.borderRadius = "4px";
  floodButton.style.cursor = "pointer";

  floodButton.addEventListener("click", () => {
    const num = parseInt(floodInput.value, 10);
    if (isNaN(num) || num <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }

    let done = false;
    const x = window.location.href;
    for (let i = 1; i <= num; i++) {
      history.pushState(0, 0, i === num ? x : i.toString());
      if (i === num) {
        done = true;
      }
    }
    if (done) {
      alert(
        `History Flooding Successful!\n ${
          window.location.href
        } \nNow Appears In Your History ${num} ${
          num === 1 ? "time." : "times."
        }`
      );
    }
  });

  historyFloodView.appendChild(floodInput);
  historyFloodView.appendChild(floodButton);

  return historyFloodView;
}
