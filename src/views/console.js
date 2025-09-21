import { injectAppCSS } from "../css.js";

// Exported function to create the Console view
export default function createConsoleView() {
  // Inject shared CSS
  injectAppCSS();

  const consoleView = document.createElement("div");
  consoleView.className = "card-grid-view";

  consoleView.innerHTML = `
    <div class="console-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h2 style="color: #00bfff; margin: 0; font-size: 1.5rem;">JavaScript Console</h2>
      <div style="display: flex; gap: 10px;">
        <button id="run-btn" class="games-tab" style="border-radius: 6px; background: #28a745;">▶ Run</button>
        <button id="clear-btn" class="games-tab" style="border-radius: 6px; background: #dc3545;">Clear</button>
      </div>
    </div>
    
    <div style="display: grid; grid-template-rows: 1fr auto 200px; gap: 16px; height: 500px;">
      <div class="code-editor-container">
        <div style="background: #292d36; border-radius: 8px 8px 0 0; padding: 8px 16px; border-bottom: 1px solid #404040;">
          <span style="color: #00bfff; font-size: 0.9rem; font-weight: 600;">Code Editor</span>
        </div>
        <textarea id="code-input" 
                  placeholder="// Write your JavaScript code here...
console.log('Hello World!');
Math.sqrt(16);
[1,2,3].map(x => x * 2);"
                  style="width: 100%; height: calc(100% - 40px); background: #1e1e1e; color: #d4d4d4; 
                         border: none; border-radius: 0 0 8px 8px; padding: 16px; font-family: 'Consolas', 'Courier New', monospace; 
                         font-size: 14px; resize: none; outline: none; line-height: 1.5;"></textarea>
      </div>
      
      <div class="output-container">
        <div style="background: #292d36; border-radius: 8px 8px 0 0; padding: 8px 16px; border-bottom: 1px solid #404040;">
          <span style="color: #00bfff; font-size: 0.9rem; font-weight: 600;">Output</span>
        </div>
        <div id="output" 
             style="width: 100%; height: calc(100% - 40px); background: #1a1a1a; color: #d4d4d4; 
                    border: none; border-radius: 0 0 8px 8px; padding: 16px; font-family: 'Consolas', 'Courier New', monospace; 
                    font-size: 14px; overflow-y: auto; white-space: pre-wrap;"></div>
      </div>
    </div>
  `;

  // Add console-specific CSS
  const style = document.createElement("style");
  style.textContent = `
    .code-editor-container, .output-container {
      background: #292d36;
      border-radius: 8px;
      border: 1px solid #404040;
      overflow: hidden;
    }
    
    #code-input:focus {
      box-shadow: 0 0 0 2px rgba(0, 191, 255, 0.3);
    }
    
    .console-output-line {
      margin: 4px 0;
      padding: 2px 0;
    }
    
    .console-error {
      color: #f85149;
    }
    
    .console-warning {
      color: #d29922;
    }
    
    .console-success {
      color: #56d364;
    }
    
    .console-info {
      color: #79c0ff;
    }
    
    .console-timestamp {
      color: #7d8590;
      font-size: 12px;
    }
  `;
  document.head.appendChild(style);

  const codeInput = consoleView.querySelector("#code-input");
  const output = consoleView.querySelector("#output");
  const runBtn = consoleView.querySelector("#run-btn");
  const clearBtn = consoleView.querySelector("#clear-btn");

  // Console log override to capture output
  let originalConsole = {};
  let consoleOutput = [];

  function initializeConsole() {
    // Store original console methods
    originalConsole.log = console.log;
    originalConsole.error = console.error;
    originalConsole.warn = console.warn;
    originalConsole.info = console.info;

    // Override console methods
    console.log = (...args) => {
      originalConsole.log(...args);
      addToOutput(args.map((arg) => formatValue(arg)).join(" "), "info");
    };

    console.error = (...args) => {
      originalConsole.error(...args);
      addToOutput(args.map((arg) => formatValue(arg)).join(" "), "error");
    };

    console.warn = (...args) => {
      originalConsole.warn(...args);
      addToOutput(args.map((arg) => formatValue(arg)).join(" "), "warning");
    };

    console.info = (...args) => {
      originalConsole.info(...args);
      addToOutput(args.map((arg) => formatValue(arg)).join(" "), "info");
    };
  }

  function restoreConsole() {
    console.log = originalConsole.log;
    console.error = originalConsole.error;
    console.warn = originalConsole.warn;
    console.info = originalConsole.info;
  }

  function formatValue(value) {
    if (typeof value === "string") return `"${value}"`;
    if (typeof value === "object") {
      try {
        return JSON.stringify(value, null, 2);
      } catch {
        return String(value);
      }
    }
    return String(value);
  }

  function addToOutput(message, type = "info") {
    const timestamp = new Date().toLocaleTimeString();
    const line = document.createElement("div");
    line.className = `console-output-line console-${type}`;
    line.innerHTML = `<span class="console-timestamp">[${timestamp}]</span> ${message}`;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  function executeCode() {
    const code = codeInput.value.trim();
    if (!code) {
      addToOutput("No code to execute.", "warning");
      return;
    }

    // Add the code being executed to output
    addToOutput(`> ${code}`, "info");

    try {
      // Basic input validation - reject potentially dangerous patterns
      const dangerousPatterns = [
        /document\.write/i,
        /window\.location/i,
        /eval\s*\(/i,
        /Function\s*\(/i,
        /setTimeout\s*\(/i,
        /setInterval\s*\(/i,
        /alert\s*\(/i,
        /confirm\s*\(/i,
        /prompt\s*\(/i,
      ];

      const isDangerous = dangerousPatterns.some((pattern) =>
        pattern.test(code)
      );
      if (isDangerous) {
        addToOutput(
          "Error: Potentially unsafe code detected. Please use safer alternatives.",
          "error"
        );
        return;
      }

      initializeConsole();

      // Execute the code
      const result = Function('"use strict"; return (' + code + ")")();

      // Show result if it's not undefined
      if (result !== undefined) {
        addToOutput(`← ${formatValue(result)}`, "success");
      }
    } catch (error) {
      addToOutput(`Error: ${error.name}: ${error.message}`, "error");
    } finally {
      restoreConsole();
    }
  }

  function clearOutput() {
    output.innerHTML = "";
    addToOutput("Console cleared.", "info");
  }

  // Event listeners
  runBtn.addEventListener("click", executeCode);
  clearBtn.addEventListener("click", clearOutput);

  // Keyboard shortcuts
  codeInput.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      executeCode();
    }

    if (e.key === "Tab") {
      e.preventDefault();
      const start = codeInput.selectionStart;
      const end = codeInput.selectionEnd;
      codeInput.value =
        codeInput.value.substring(0, start) +
        "  " +
        codeInput.value.substring(end);
      codeInput.selectionStart = codeInput.selectionEnd = start + 2;
    }
  });

  // Initialize with welcome message
  addToOutput(
    "JavaScript Console ready. Type your code above and click 'Run' or press Ctrl+Enter.",
    "info"
  );

  return consoleView;
}
