// Exported function to create the Calculator view
export default function createCalculatorView() {
  const calculatorView = document.createElement("div");
  calculatorView.style.width = "100%";
  calculatorView.style.height = "100%";
  calculatorView.style.display = "none";
  calculatorView.style.backgroundColor = "#e0e0e0";
  calculatorView.style.padding = "20px";
  calculatorView.innerHTML = `
		<div style="max-width: 300px; margin: 0 auto;">
			<input type="text" id="calcDisplay" style="width: 100%; height: 40px; margin-bottom: 10px; text-align: right; font-size: 20px;" disabled>
			<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px;">
				<button class="calc-btn" data-value="7">7</button>
				<button class="calc-btn" data-value="8">8</button>
				<button class="calc-btn" data-value="9">9</button>
				<button class="calc-btn" data-value="/">/</button>
				<button class="calc-btn" data-value="4">4</button>
				<button class="calc-btn" data-value="5">5</button>
				<button class="calc-btn" data-value="6">6</button>
				<button class="calc-btn" data-value="*">*</button>
				<button class="calc-btn" data-value="1">1</button>
				<button class="calc-btn" data-value="2">2</button>
				<button class="calc-btn" data-value="3">3</button>
				<button class="calc-btn" data-value="-">-</button>
				<button class="calc-btn" data-value="0">0</button>
				<button class="calc-btn" data-value=".">.</button>
				<button class="calc-btn" data-value="=">=</button>
				<button class="calc-btn" data-value="+">+</button>
				<button class="calc-btn" data-value="C" style="grid-column: span 4;">Clear</button>
			</div>
		</div>
	`;
  calculatorView._initialized = false;
  return calculatorView;
}
