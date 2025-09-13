// Exported function to create the Console view
export default function createConsoleView() {
  const consoleView = document.createElement("div");
  consoleView.style.width = "100%";
  consoleView.style.height = "100%";
  consoleView.style.display = "none";
  consoleView.style.backgroundColor = "#1e1e1e";
  consoleView.style.color = "#ffffff";
  consoleView.style.padding = "20px";
  consoleView.style.fontFamily = "monospace";

  const consoleTextarea = document.createElement("textarea");
  consoleTextarea.style.width = "100%";
  consoleTextarea.style.height = "80%";
  consoleTextarea.style.backgroundColor = "#252526";
  consoleTextarea.style.color = "#d4d4d4";
  consoleTextarea.style.border = "1px solid #333";
  consoleTextarea.style.padding = "10px";
  consoleTextarea.style.fontFamily = "monospace";
  consoleTextarea.style.fontSize = "14px";
  consoleTextarea.placeholder = "Write JavaScript code here...";

  const runButton = document.createElement("button");
  runButton.textContent = "Run Code";
  runButton.style.marginTop = "10px";
  runButton.style.padding = "10px";
  runButton.style.backgroundColor = "#007acc";
  runButton.style.color = "#ffffff";
  runButton.style.border = "none";
  runButton.style.borderRadius = "4px";
  runButton.style.cursor = "pointer";

  const outputDiv = document.createElement("div");
  outputDiv.style.marginTop = "10px";
  outputDiv.style.padding = "10px";
  outputDiv.style.backgroundColor = "#252526";
  outputDiv.style.color = "#d4d4d4";
  outputDiv.style.border = "1px solid #333";
  outputDiv.style.height = "calc(20% - 20px)";
  outputDiv.style.overflowY = "auto";
  outputDiv.style.fontFamily = "monospace";
  outputDiv.style.fontSize = "14px";

  runButton.addEventListener("click", () => {
    try {
      const result = eval(consoleTextarea.value);
      outputDiv.textContent =
        result !== undefined ? result : "Code executed successfully.";
    } catch (error) {
      outputDiv.textContent = `Error: ${error.message}`;
    }
  });

  consoleView.appendChild(consoleTextarea);
  consoleView.appendChild(runButton);
  consoleView.appendChild(outputDiv);

  return consoleView;
}
