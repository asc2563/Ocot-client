import { injectAppCSS } from "../css.js";

// Exported function to create the Calculator view
export default function createCalculatorView() {
  // Inject shared CSS
  injectAppCSS();

  const calculatorView = document.createElement("div");
  calculatorView.className = "card-grid-view";

  calculatorView.innerHTML = `
    <h2 style="color: #00bfff; margin: 0 0 20px 0; font-size: 1.5rem; text-align: center;">Calculator</h2>
    <div style="max-width: 350px; margin: 0 auto;">
      <input type="text" id="calcDisplay" 
             style="width: 100%; height: 60px; margin-bottom: 20px; text-align: right; font-size: 24px; 
                    background: #292d36; border: 2px solid #404040; border-radius: 8px; color: #fff; 
                    padding: 0 16px; font-family: 'Courier New', monospace;" 
             placeholder="0" disabled>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
        <button class="calc-btn operator" data-value="C" style="grid-column: span 2;">Clear</button>
        <button class="calc-btn operator" data-value="backspace">⌫</button>
        <button class="calc-btn operator" data-value="/">/</button>
        
        <button class="calc-btn number" data-value="7">7</button>
        <button class="calc-btn number" data-value="8">8</button>
        <button class="calc-btn number" data-value="9">9</button>
        <button class="calc-btn operator" data-value="*">×</button>
        
        <button class="calc-btn number" data-value="4">4</button>
        <button class="calc-btn number" data-value="5">5</button>
        <button class="calc-btn number" data-value="6">6</button>
        <button class="calc-btn operator" data-value="-">−</button>
        
        <button class="calc-btn number" data-value="1">1</button>
        <button class="calc-btn number" data-value="2">2</button>
        <button class="calc-btn number" data-value="3">3</button>
        <button class="calc-btn operator" data-value="+">+</button>
        
        <button class="calc-btn number" data-value="0" style="grid-column: span 2;">0</button>
        <button class="calc-btn number" data-value=".">.</button>
        <button class="calc-btn equals" data-value="=">=</button>
      </div>
    </div>
  `;

  // Add calculator-specific CSS
  const style = document.createElement("style");
  style.textContent = `
    .calc-btn {
      height: 60px;
      border: none;
      border-radius: 8px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      user-select: none;
    }
    
    .calc-btn.number {
      background: #292d36;
      color: #fff;
      border: 1px solid #404040;
    }
    
    .calc-btn.number:hover {
      background: #353a45;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,122,204,0.15);
    }
    
    .calc-btn.operator {
      background: #007acc;
      color: #fff;
    }
    
    .calc-btn.operator:hover {
      background: #0066a3;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0,122,204,0.3);
    }
    
    .calc-btn.equals {
      background: #28a745;
      color: #fff;
    }
    
    .calc-btn.equals:hover {
      background: #218838;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(40,167,69,0.3);
    }
    
    .calc-btn:active {
      transform: translateY(1px);
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);

  // Calculator logic
  let currentInput = "";
  let operator = "";
  let previousInput = "";
  let shouldResetDisplay = false;

  const display = calculatorView.querySelector("#calcDisplay");

  function updateDisplay(value = currentInput || "0") {
    display.value = value;
  }

  function handleNumber(num) {
    if (shouldResetDisplay) {
      currentInput = "";
      shouldResetDisplay = false;
    }
    currentInput += num;
    updateDisplay();
  }

  function handleOperator(op) {
    if (currentInput === "" && op !== "-") return;

    if (previousInput !== "" && currentInput !== "" && operator !== "") {
      calculate();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = "";
    shouldResetDisplay = true;
  }

  function calculate() {
    if (previousInput === "" || currentInput === "" || operator === "") return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = current !== 0 ? prev / current : "Error";
        break;
      default:
        return;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    shouldResetDisplay = true;
    updateDisplay();
  }

  function clear() {
    currentInput = "";
    operator = "";
    previousInput = "";
    shouldResetDisplay = false;
    updateDisplay();
  }

  function backspace() {
    if (currentInput.length > 0) {
      currentInput = currentInput.slice(0, -1);
      updateDisplay();
    }
  }

  // Event listeners
  calculatorView.addEventListener("click", (e) => {
    if (!e.target.classList.contains("calc-btn")) return;

    const value = e.target.dataset.value;

    if ((value >= "0" && value <= "9") || value === ".") {
      handleNumber(value);
    } else if (["+", "-", "*", "/"].includes(value)) {
      handleOperator(value);
    } else if (value === "=") {
      calculate();
    } else if (value === "C") {
      clear();
    } else if (value === "backspace") {
      backspace();
    }
  });

  // Keyboard support
  calculatorView.addEventListener("keydown", (e) => {
    e.preventDefault();

    if ((e.key >= "0" && e.key <= "9") || e.key === ".") {
      handleNumber(e.key);
    } else if (["+", "-", "*", "/"].includes(e.key)) {
      handleOperator(e.key);
    } else if (e.key === "Enter" || e.key === "=") {
      calculate();
    } else if (e.key === "Escape" || e.key === "c" || e.key === "C") {
      clear();
    } else if (e.key === "Backspace") {
      backspace();
    }
  });

  // Make the calculator focusable for keyboard events
  calculatorView.tabIndex = 0;

  // Focus the calculator when it becomes visible
  setTimeout(() => {
    calculatorView.focus();
  }, 100);

  return calculatorView;
}
