(() => {
  // src/css.js
  function injectAppCSS() {
    if (document.getElementById("app-shared-style")) return;
    const style = document.createElement("style");
    style.id = "app-shared-style";
    style.textContent = `
    /* --- Shared Card/Grid Styles --- */
    .card-grid-view {
      padding: 20px;
      background: #23272f;
      border-radius: 10px;
      min-height: 400px;
      max-height: calc(80vh - 40px);
      overflow-y: auto;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,0.15);
    }
    .card-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-top: 10px;
    }
    .card-item {
      background: #292d36;
      border-radius: 8px;
      padding: 18px 14px;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: box-shadow 0.2s, transform 0.2s;
      cursor: pointer;
      user-select: none;
    }
    .card-item:hover {
      box-shadow: 0 4px 16px 0 rgba(0,122,204,0.15);
      transform: translateY(-2px) scale(1.03);
      background: #2d323e;
    }
    .card-item .card-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #00bfff;
      margin-bottom: 4px;
    }
    .card-item .card-desc {
      font-size: 0.95rem;
      color: #aaa;
      margin-bottom: 2px;
    }
    
    /* --- Games View Specific --- */
    .games-view {
      padding: 20px;
      background: #23272f;
      border-radius: 10px;
      min-height: 400px;
      max-height: calc(80vh - 40px);
      overflow-y: auto;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,0.15);
    }
    
    /* Custom Scrollbar Styling */
    .card-grid-view::-webkit-scrollbar,
    .games-view::-webkit-scrollbar {
      width: 8px;
    }
    
    .card-grid-view::-webkit-scrollbar-track,
    .games-view::-webkit-scrollbar-track {
      background: #1e1e1e;
      border-radius: 4px;
    }
    
    .card-grid-view::-webkit-scrollbar-thumb,
    .games-view::-webkit-scrollbar-thumb {
      background: #404040;
      border-radius: 4px;
    }
    
    .card-grid-view::-webkit-scrollbar-thumb:hover,
    .games-view::-webkit-scrollbar-thumb:hover {
      background: #007acc;
    }
    .games-tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
    .games-tab {
      padding: 10px 24px;
      background: #2d323e;
      border: none;
      border-radius: 6px 6px 0 0;
      color: #fff;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      outline: none;
    }
    .games-tab.active, .games-tab:hover {
      background: #007acc;
      color: #fff;
    }
    .games-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-top: 10px;
    }
    .game-item {
      background: #292d36;
      border-radius: 8px;
      padding: 18px 14px;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .game-item:hover {
      box-shadow: 0 4px 16px 0 rgba(0,122,204,0.15);
      transform: translateY(-2px) scale(1.03);
    }
    .game-item a {
      font-size: 1.1rem;
      font-weight: 600;
      color: #00bfff;
      margin-bottom: 4px;
      text-decoration: none;
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
      max-width: 100%;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .game-item a:hover {
      color: #fff;
    }
    .game-item .game-type {
      font-size: 0.85rem;
      color: #aaa;
      margin-top: 2px;
      text-transform: capitalize;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }
  `;
    document.head.appendChild(style);
  }

  // src/sidebar.js
  var ProxySidebar = class {
    constructor() {
      this.sidebar = null;
      this.buttons = {};
      this.buttonContainer = null;
    }
    // Create the main sidebar element
    createSidebar() {
      this.sidebar = document.createElement("div");
      this.sidebar.className = "proxy-sidebar";
      this.sidebar.style.cssText = `
      width: 280px;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 0;
    `;
      const header = this.createHeader();
      this.buttonContainer = this.createButtonContainer();
      this.sidebar.appendChild(header);
      this.sidebar.appendChild(this.buttonContainer);
      return this.sidebar;
    }
    // Create sidebar header with title and subtitle
    createHeader() {
      const header = document.createElement("div");
      header.className = "sidebar-header";
      header.innerHTML = `
      <h1 class="sidebar-title">Proxy Client</h1>
      <p class="sidebar-subtitle">by ASC2563</p>
    `;
      return header;
    }
    // Create scrollable button container
    createButtonContainer() {
      const container = document.createElement("div");
      container.style.cssText = `
      flex: 1;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      overflow-x: hidden;
    `;
      return container;
    }
    // Button factory function
    createButton(label, icon = "", type = "normal") {
      const btn = document.createElement("button");
      btn.className = `sidebar-btn ${type === "hide" ? "hide-btn" : ""} ${type === "remove" ? "remove-btn" : ""}`;
      btn.innerHTML = icon ? `${icon} ${label}` : label;
      return btn;
    }
    // Add all navigation buttons
    addNavigationButtons() {
      const navButtons = [
        { key: "proxyButton", label: "Proxy", icon: "\u{1F310}", active: true },
        { key: "gamesButton", label: "Games List", icon: "\u{1F3AE}" },
        { key: "bookmarkletsButton", label: "Bookmarklets", icon: "\u{1F516}" },
        { key: "scriptsButton", label: "Scripts", icon: "\u{1F4DC}" },
        { key: "notesButton", label: "Notes", icon: "\u{1F4DD}" },
        { key: "calculatorButton", label: "Calculator", icon: "\u{1F9EE}" },
        { key: "consoleButton", label: "Console", icon: "\u{1F4BB}" },
        { key: "cloakingButton", label: "Cloaking", icon: "\u{1F3AD}" },
        { key: "historyFloodButton", label: "History Flood", icon: "\u{1F30A}" },
        { key: "corsProxyButton", label: "CORS Proxy", icon: "\u{1F504}" },
        { key: "pocketBrowserButton", label: "Pocket Browser", icon: "\u{1F50D}" }
      ];
      navButtons.forEach(({ key, label, icon, active }) => {
        this.buttons[key] = this.createButton(label, icon);
        if (active) {
          this.buttons[key].classList.add("active");
        }
        this.buttonContainer.appendChild(this.buttons[key]);
      });
      this.buttons.hideButton = this.createButton("Hide App", "\u274C", "hide");
      this.buttons.removeButton = this.createButton("Remove App", "\u{1F5D1}\uFE0F", "remove");
      this.buttonContainer.appendChild(this.buttons.hideButton);
      this.buttonContainer.appendChild(this.buttons.removeButton);
    }
    // Get button references for event listeners
    getButtons() {
      return this.buttons;
    }
    // Set active button
    setActiveButton(buttonKey) {
      Object.values(this.buttons).forEach((btn) => {
        btn.classList.remove("active");
      });
      if (this.buttons[buttonKey]) {
        this.buttons[buttonKey].classList.add("active");
      }
    }
    // Add custom button
    addCustomButton(key, label, icon = "", type = "normal") {
      const button = this.createButton(label, icon, type);
      this.buttons[key] = button;
      this.buttonContainer.appendChild(button);
      return button;
    }
    // Remove button
    removeButton(key) {
      if (this.buttons[key]) {
        this.buttons[key].remove();
        delete this.buttons[key];
      }
    }
    // Inject sidebar-specific CSS
    static injectCSS() {
      const style = document.createElement("style");
      style.textContent = `
      /* Sidebar Container */
      .proxy-sidebar {
        background: #292d36;
        border-right: 1px solid #404040;
        box-shadow: 2px 0 8px rgba(0, 0, 0, 0.3);
      }

      /* Sidebar Header */
      .sidebar-header {
        padding: 20px 16px;
        border-bottom: 1px solid #404040;
        text-align: center;
        background: linear-gradient(135deg, #23272f, #2a2e37);
      }

      .sidebar-title {
        color: #00bfff;
        font-size: 1.4rem;
        font-weight: 700;
        margin: 0 0 4px 0;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      }

      .sidebar-subtitle {
        color: #7d8590;
        font-size: 0.8rem;
        margin: 0;
      }

      /* Sidebar Button Styling */
      .sidebar-btn {
        width: 100%;
        padding: 12px 16px;
        margin-bottom: 4px;
        background: transparent;
        border: none;
        border-radius: 8px;
        color: #d4d4d4;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 500;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        position: relative;
        overflow: hidden;
      }

      .sidebar-btn:hover {
        background: rgba(0, 122, 204, 0.1);
        color: #00bfff;
        transform: translateX(4px);
      }

      .sidebar-btn.active {
        background: #007acc;
        color: #fff;
        box-shadow: 0 2px 8px rgba(0, 122, 204, 0.3);
      }

      .sidebar-btn.active::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 3px;
        height: 100%;
        background: #00bfff;
      }

      .sidebar-btn.hide-btn {
        background: #dc3545;
        color: #fff;
        margin-top: auto;
      }

      .sidebar-btn.hide-btn:hover {
        background: #c82333;
        transform: translateX(0);
      }

      .sidebar-btn.remove-btn {
        background: #6f2232;
        color: #fff;
        margin-top: 8px;
      }

      .sidebar-btn.remove-btn:hover {
        background: #5a1a28;
        transform: translateX(0);
      }

      /* Sidebar Scrollbar Styling */
      .proxy-sidebar ::-webkit-scrollbar {
        width: 8px;
      }

      .proxy-sidebar ::-webkit-scrollbar-track {
        background: #23272f;
        border-radius: 4px;
      }

      .proxy-sidebar ::-webkit-scrollbar-thumb {
        background: #404040;
        border-radius: 4px;
        transition: background 0.2s;
      }

      .proxy-sidebar ::-webkit-scrollbar-thumb:hover {
        background: #525252;
      }
    `;
      document.head.appendChild(style);
    }
  };
  var sidebar_default = ProxySidebar;

  // src/views/proxy.js
  function createProxyView() {
    const proxyView = document.createElement("div");
    proxyView.style.width = "100%";
    proxyView.style.height = "100%";
    proxyView.style.display = "flex";
    const iframe = document.createElement("iframe");
    iframe.src = "https://example.com";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    proxyView.appendChild(iframe);
    return proxyView;
  }

  // src/views/notes.js
  function createNotesView() {
    injectAppCSS();
    const notesView = document.createElement("div");
    notesView.className = "card-grid-view";
    const savedNotes = JSON.parse(
      localStorage.getItem("proxyClientNotes") || "[]"
    );
    notesView.innerHTML = `
    <div class="notes-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h2 style="color: #00bfff; margin: 0; font-size: 1.5rem;">Notes</h2>
      <button id="add-note-btn" class="games-tab" style="border-radius: 6px;">Add Note</button>
    </div>
    <div id="notes-list" class="card-list"></div>
  `;
    const notesList = notesView.querySelector("#notes-list");
    const addNoteBtn = notesView.querySelector("#add-note-btn");
    function renderNotes() {
      notesList.innerHTML = "";
      if (savedNotes.length === 0) {
        notesList.innerHTML = `
        <div class="card-item" style="text-align: center; grid-column: 1 / -1;">
          <div class="card-title">No Notes Yet</div>
          <div class="card-desc">Click "Add Note" to create your first note</div>
        </div>
      `;
        return;
      }
      savedNotes.forEach((note, index) => {
        const noteItem = document.createElement("div");
        noteItem.className = "card-item";
        const preview = note.content.length > 100 ? note.content.substring(0, 100) + "..." : note.content;
        const timestamp = new Date(note.timestamp).toLocaleDateString();
        noteItem.innerHTML = `
        <div class="card-title">${note.title || "Untitled Note"}</div>
        <div class="card-desc">${preview}</div>
        <div class="card-desc" style="margin-top: 8px; font-size: 0.8rem; color: #666;">
          ${timestamp}
        </div>
        <div style="display: flex; gap: 8px; margin-top: 12px;">
          <button class="edit-btn" data-index="${index}" style="padding: 4px 12px; background: #007acc; border: none; border-radius: 4px; color: white; cursor: pointer; font-size: 0.85rem;">Edit</button>
          <button class="delete-btn" data-index="${index}" style="padding: 4px 12px; background: #d73a49; border: none; border-radius: 4px; color: white; cursor: pointer; font-size: 0.85rem;">Delete</button>
        </div>
      `;
        notesList.appendChild(noteItem);
      });
    }
    function showNoteEditor(noteIndex = null) {
      const isEditing = noteIndex !== null;
      const note = isEditing ? savedNotes[noteIndex] : { title: "", content: "" };
      const modal = document.createElement("div");
      modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100001;
    `;
      modal.innerHTML = `
      <div style="background: #23272f; padding: 24px; border-radius: 10px; width: 90%; max-width: 600px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
        <h3 style="color: #00bfff; margin: 0 0 16px 0;">${isEditing ? "Edit Note" : "New Note"}</h3>
        <input type="text" id="note-title" placeholder="Note title..." value="${note.title}" 
               style="width: 100%; padding: 12px; margin-bottom: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        <textarea id="note-content" placeholder="Write your note here..." rows="10" 
                  style="width: 100%; padding: 12px; margin-bottom: 16px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem; resize: vertical;">${note.content}</textarea>
        <div style="display: flex; gap: 12px; justify-content: flex-end;">
          <button id="cancel-btn" style="padding: 10px 20px; background: #404040; border: none; border-radius: 6px; color: white; cursor: pointer;">Cancel</button>
          <button id="save-btn" style="padding: 10px 20px; background: #007acc; border: none; border-radius: 6px; color: white; cursor: pointer;">Save</button>
        </div>
      </div>
    `;
      document.body.appendChild(modal);
      const titleInput = modal.querySelector("#note-title");
      const contentTextarea = modal.querySelector("#note-content");
      const cancelBtn = modal.querySelector("#cancel-btn");
      const saveBtn = modal.querySelector("#save-btn");
      titleInput.focus();
      cancelBtn.onclick = () => document.body.removeChild(modal);
      saveBtn.onclick = () => {
        const title = titleInput.value.trim();
        const content = contentTextarea.value.trim();
        if (!title && !content) {
          alert("Please enter a title or content for the note.");
          return;
        }
        const noteData = {
          title: title || "Untitled Note",
          content,
          timestamp: Date.now()
        };
        if (isEditing) {
          savedNotes[noteIndex] = noteData;
        } else {
          savedNotes.unshift(noteData);
        }
        localStorage.setItem("proxyClientNotes", JSON.stringify(savedNotes));
        renderNotes();
        document.body.removeChild(modal);
      };
      modal.onclick = (e) => {
        if (e.target === modal) document.body.removeChild(modal);
      };
    }
    addNoteBtn.onclick = () => showNoteEditor();
    notesList.onclick = (e) => {
      if (e.target.classList.contains("edit-btn")) {
        const index = parseInt(e.target.dataset.index);
        showNoteEditor(index);
      } else if (e.target.classList.contains("delete-btn")) {
        const index = parseInt(e.target.dataset.index);
        if (confirm("Are you sure you want to delete this note?")) {
          savedNotes.splice(index, 1);
          localStorage.setItem("proxyClientNotes", JSON.stringify(savedNotes));
          renderNotes();
        }
      }
    };
    renderNotes();
    return notesView;
  }

  // src/views/calculator.js
  function createCalculatorView() {
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
        <button class="calc-btn operator" data-value="backspace">\u232B</button>
        <button class="calc-btn operator" data-value="/">/</button>
        
        <button class="calc-btn number" data-value="7">7</button>
        <button class="calc-btn number" data-value="8">8</button>
        <button class="calc-btn number" data-value="9">9</button>
        <button class="calc-btn operator" data-value="*">\xD7</button>
        
        <button class="calc-btn number" data-value="4">4</button>
        <button class="calc-btn number" data-value="5">5</button>
        <button class="calc-btn number" data-value="6">6</button>
        <button class="calc-btn operator" data-value="-">\u2212</button>
        
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
    calculatorView.addEventListener("click", (e) => {
      if (!e.target.classList.contains("calc-btn")) return;
      const value = e.target.dataset.value;
      if (value >= "0" && value <= "9" || value === ".") {
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
    calculatorView.addEventListener("keydown", (e) => {
      e.preventDefault();
      if (e.key >= "0" && e.key <= "9" || e.key === ".") {
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
    calculatorView.tabIndex = 0;
    setTimeout(() => {
      calculatorView.focus();
    }, 100);
    return calculatorView;
  }

  // src/views/console.js
  function createConsoleView() {
    injectAppCSS();
    const consoleView = document.createElement("div");
    consoleView.className = "card-grid-view";
    consoleView.innerHTML = `
    <div class="console-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h2 style="color: #00bfff; margin: 0; font-size: 1.5rem;">JavaScript Console</h2>
      <div style="display: flex; gap: 10px;">
        <button id="run-btn" class="games-tab" style="border-radius: 6px; background: #28a745;">\u25B6 Run</button>
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
    let originalConsole = {};
    let consoleOutput = [];
    function initializeConsole() {
      originalConsole.log = console.log;
      originalConsole.error = console.error;
      originalConsole.warn = console.warn;
      originalConsole.info = console.info;
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
      const timestamp = (/* @__PURE__ */ new Date()).toLocaleTimeString();
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
      addToOutput(`> ${code}`, "info");
      try {
        const dangerousPatterns = [
          /document\.write/i,
          /window\.location/i,
          /eval\s*\(/i,
          /setTimeout\s*\(/i,
          /setInterval\s*\(/i,
          /alert\s*\(/i,
          /confirm\s*\(/i
        ];
        const isDangerous = dangerousPatterns.some(
          (pattern) => pattern.test(code)
        );
        if (isDangerous) {
          addToOutput(
            "Error: Potentially unsafe code detected. Please use safer alternatives.",
            "error"
          );
          return;
        }
        initializeConsole();
        let result;
        try {
          result = Function('"use strict"; return (' + code + ")")();
        } catch (expressionError) {
          try {
            result = Function('"use strict"; ' + code)();
          } catch (statementError) {
            throw expressionError;
          }
        }
        if (result !== void 0) {
          addToOutput(`\u2190 ${formatValue(result)}`, "success");
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
    runBtn.addEventListener("click", executeCode);
    clearBtn.addEventListener("click", clearOutput);
    codeInput.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        executeCode();
      }
      if (e.key === "Tab") {
        e.preventDefault();
        const start = codeInput.selectionStart;
        const end = codeInput.selectionEnd;
        codeInput.value = codeInput.value.substring(0, start) + "  " + codeInput.value.substring(end);
        codeInput.selectionStart = codeInput.selectionEnd = start + 2;
      }
    });
    addToOutput(
      "JavaScript Console ready. Type your code above and click 'Run' or press Ctrl+Enter.",
      "info"
    );
    return consoleView;
  }

  // src/views/cloaking.js
  function createCloakingView() {
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
        <div class="card-item preset-card" data-title="YouTube" data-icon="https://www.youtube.com/favicon.ico">
          <div class="card-title">YouTube</div>
          <div class="card-desc">Video platform</div>
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
    const titleInput = cloakingView.querySelector("#title-input");
    const iconInput = cloakingView.querySelector("#icon-input");
    const applyBtn = cloakingView.querySelector("#apply-btn");
    const stopBtn = cloakingView.querySelector("#stop-btn");
    const resetBtn = cloakingView.querySelector("#reset-btn");
    const statusDisplay = cloakingView.querySelector("#status-display");
    const presetCards = cloakingView.querySelectorAll(".preset-card");
    let cloakingInterval = null;
    let originalTitle = document.title;
    let originalIcon = document.querySelector("link[rel*='icon']")?.href || "";
    function updateStatus(message, type = "info") {
      statusDisplay.textContent = message;
      statusDisplay.style.color = type === "success" ? "#56d364" : type === "error" ? "#f85149" : type === "warning" ? "#d29922" : "#aaa";
    }
    function applyCloaking(title, iconUrl) {
      function gcloak() {
        try {
          if (title) {
            document.title = title;
          }
          if (iconUrl) {
            const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
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
      if (cloakingInterval) {
        clearInterval(cloakingInterval);
      }
      gcloak();
      cloakingInterval = setInterval(gcloak, 3e3);
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
    presetCards.forEach((card) => {
      card.addEventListener("click", () => {
        const title = card.dataset.title;
        const icon = card.dataset.icon;
        titleInput.value = title;
        iconInput.value = icon;
        applyCloaking(title, icon);
      });
    });
    iconInput.addEventListener("input", () => {
      const url = iconInput.value.trim();
      if (url) {
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
    window.addEventListener("beforeunload", () => {
      if (cloakingInterval) {
        clearInterval(cloakingInterval);
      }
    });
    return cloakingView;
  }

  // src/views/historyFlood.js
  function createHistoryFloodView() {
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
        <h4 style="color: #d29922; margin: 0 0 8px 0; font-size: 1rem;">\u26A0\uFE0F How History Flooding Works</h4>
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
    const floodInput = historyFloodView.querySelector("#flood-input");
    const floodBtn = historyFloodView.querySelector("#flood-btn");
    const clearInputBtn = historyFloodView.querySelector("#clear-input-btn");
    const statusDisplay = historyFloodView.querySelector("#status-display");
    const presetCards = historyFloodView.querySelectorAll(".preset-amount");
    function updateStatus(message, type = "info") {
      statusDisplay.textContent = message;
      statusDisplay.style.color = type === "success" ? "#56d364" : type === "error" ? "#f85149" : type === "warning" ? "#d29922" : "#aaa";
    }
    function floodHistory(amount) {
      if (isNaN(amount) || amount <= 0 || amount > 1e3) {
        updateStatus("Please enter a valid number between 1 and 1000", "error");
        return;
      }
      updateStatus(`Flooding history with ${amount} entries...`, "warning");
      try {
        let addEntries = function() {
          const batchSize = Math.min(10, amount - completed);
          for (let i = 0; i < batchSize; i++) {
            completed++;
            history.pushState(
              { flood: true, entry: completed },
              "",
              completed === amount ? currentUrl : `${currentUrl}#flood-${completed}`
            );
          }
          if (completed < amount) {
            requestAnimationFrame(addEntries);
            updateStatus(
              `Progress: ${completed}/${amount} entries added`,
              "warning"
            );
          } else {
            history.pushState({ flood: true, final: true }, "", currentUrl);
            updateStatus(
              `Success! Added ${amount} ${amount === 1 ? "entry" : "entries"} to history. Current page now appears ${amount} times.`,
              "success"
            );
          }
        };
        const currentUrl = window.location.href;
        let completed = 0;
        addEntries();
      } catch (error) {
        updateStatus(`Error: ${error.message}`, "error");
      }
    }
    floodBtn.addEventListener("click", () => {
      const amount = parseInt(floodInput.value, 10);
      floodHistory(amount);
    });
    clearInputBtn.addEventListener("click", () => {
      floodInput.value = "";
      updateStatus("Input cleared", "info");
    });
    presetCards.forEach((card) => {
      card.addEventListener("click", () => {
        const amount = parseInt(card.dataset.amount, 10);
        floodInput.value = amount;
        floodHistory(amount);
      });
    });
    floodInput.addEventListener("input", () => {
      const value = parseInt(floodInput.value, 10);
      if (isNaN(value) || value <= 0) {
        floodInput.style.borderColor = "#dc3545";
      } else if (value > 1e3) {
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
    floodInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        floodBtn.click();
      }
    });
    return historyFloodView;
  }

  // src/views/corsProxy.js
  function createCorsProxyView() {
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
      statusDisplay.style.color = type === "success" ? "#56d364" : type === "error" ? "#f85149" : type === "warning" ? "#d29922" : "#aaa";
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
    presetCards.forEach((card) => {
      card.addEventListener("click", () => {
        const url = card.dataset.url;
        urlInput.value = url;
        fetchViaProxy(url, false);
      });
    });
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
    urlInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        fetchBtn.click();
      }
    });
    proxyService.addEventListener("change", () => {
      const serviceName = proxyService.options[proxyService.selectedIndex].text;
      updateStatus(`Switched to ${serviceName}`, "info");
    });
    return corsProxyView;
  }

  // src/views/pocketBrowser.js
  function createPocketBrowserView() {
    injectAppCSS();
    const pocketBrowserView = document.createElement("div");
    pocketBrowserView.style.cssText = `
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #23272f;
    flex-direction: column;
  `;
    pocketBrowserView.style.display = "none";
    const toolbar = document.createElement("div");
    toolbar.style.cssText = `
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    background: #292d36;
    border-bottom: 1px solid #404040;
  `;
    const backBtn = document.createElement("button");
    backBtn.innerHTML = "\u2B05\uFE0F";
    backBtn.title = "Go Back";
    backBtn.style.cssText = `
    padding: 8px 12px;
    background: #007acc;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;
    const forwardBtn = document.createElement("button");
    forwardBtn.innerHTML = "\u27A1\uFE0F";
    forwardBtn.title = "Go Forward";
    forwardBtn.style.cssText = `
    padding: 8px 12px;
    background: #007acc;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;
    const refreshBtn = document.createElement("button");
    refreshBtn.innerHTML = "\u{1F504}";
    refreshBtn.title = "Refresh";
    refreshBtn.style.cssText = `
    padding: 8px 12px;
    background: #28a745;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;
    const homeBtn = document.createElement("button");
    homeBtn.innerHTML = "\u{1F3E0}";
    homeBtn.title = "Home";
    homeBtn.style.cssText = `
    padding: 8px 12px;
    background: #6c757d;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
  `;
    const urlBar = document.createElement("input");
    urlBar.type = "text";
    urlBar.placeholder = "Enter URL and press Enter";
    urlBar.style.cssText = `
    flex: 1;
    padding: 10px 12px;
    background: #1e1e1e;
    border: 1px solid #404040;
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
  `;
    const goBtn = document.createElement("button");
    goBtn.innerHTML = "Go";
    goBtn.style.cssText = `
    padding: 10px 16px;
    background: #007acc;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: background 0.2s;
  `;
    [backBtn, forwardBtn, refreshBtn, homeBtn, goBtn].forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        if (btn === refreshBtn) btn.style.background = "#218838";
        else if (btn === homeBtn) btn.style.background = "#5a6268";
        else btn.style.background = "#0056b3";
      });
      btn.addEventListener("mouseleave", () => {
        if (btn === refreshBtn) btn.style.background = "#28a745";
        else if (btn === homeBtn) btn.style.background = "#6c757d";
        else btn.style.background = "#007acc";
      });
    });
    urlBar.addEventListener("focus", () => {
      urlBar.style.borderColor = "#007acc";
      urlBar.style.boxShadow = "0 0 0 2px rgba(0, 122, 204, 0.3)";
    });
    urlBar.addEventListener("blur", () => {
      urlBar.style.borderColor = "#404040";
      urlBar.style.boxShadow = "none";
    });
    toolbar.appendChild(backBtn);
    toolbar.appendChild(forwardBtn);
    toolbar.appendChild(refreshBtn);
    toolbar.appendChild(homeBtn);
    toolbar.appendChild(urlBar);
    toolbar.appendChild(goBtn);
    const iframeContainer = document.createElement("div");
    iframeContainer.style.cssText = `
    flex: 1;
    background: #fff;
    border-radius: 0 0 8px 8px;
    overflow: hidden;
    min-height: 0;
    height: calc(100% - 60px);
  `;
    const pocketBrowserIframe = document.createElement("iframe");
    pocketBrowserIframe.src = "https://google.com?igu=1";
    pocketBrowserIframe.style.cssText = `
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  `;
    iframeContainer.appendChild(pocketBrowserIframe);
    let history2 = ["https://google.com?igu=1"];
    let currentIndex = 0;
    function updateUrl(url) {
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = `https://${url}`;
      }
      pocketBrowserIframe.src = url;
      urlBar.value = url;
      if (currentIndex < history2.length - 1) {
        history2 = history2.slice(0, currentIndex + 1);
      }
      history2.push(url);
      currentIndex = history2.length - 1;
      updateButtonStates();
    }
    function updateButtonStates() {
      backBtn.disabled = currentIndex <= 0;
      forwardBtn.disabled = currentIndex >= history2.length - 1;
      backBtn.style.opacity = backBtn.disabled ? "0.5" : "1";
      forwardBtn.style.opacity = forwardBtn.disabled ? "0.5" : "1";
      backBtn.style.cursor = backBtn.disabled ? "not-allowed" : "pointer";
      forwardBtn.style.cursor = forwardBtn.disabled ? "not-allowed" : "pointer";
    }
    backBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        const url = history2[currentIndex];
        pocketBrowserIframe.src = url;
        urlBar.value = url;
        updateButtonStates();
      }
    });
    forwardBtn.addEventListener("click", () => {
      if (currentIndex < history2.length - 1) {
        currentIndex++;
        const url = history2[currentIndex];
        pocketBrowserIframe.src = url;
        urlBar.value = url;
        updateButtonStates();
      }
    });
    refreshBtn.addEventListener("click", () => {
      pocketBrowserIframe.src = pocketBrowserIframe.src;
    });
    homeBtn.addEventListener("click", () => {
      updateUrl("https://google.com?igu=1");
    });
    const navigateToUrl = () => {
      const url = urlBar.value.trim();
      if (url) {
        updateUrl(url);
      }
    };
    goBtn.addEventListener("click", navigateToUrl);
    urlBar.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        navigateToUrl();
      }
    });
    updateButtonStates();
    pocketBrowserView.appendChild(toolbar);
    pocketBrowserView.appendChild(iframeContainer);
    return pocketBrowserView;
  }

  // src/views/scripts.js
  function createscriptsView() {
    if (!document.getElementById("scripts-view-style")) {
      const style = document.createElement("style");
      style.id = "scripts-view-style";
      style.textContent = `
      .scripts-view {
        padding: 20px;
        background: #23272f;
        border-radius: 10px;
        min-height: 400px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.15);
      }
      .scripts-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 18px;
        margin-top: 10px;
      }
      .script-item {
        background: #292d36;
        border-radius: 8px;
        padding: 18px 14px;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transition: box-shadow 0.2s, transform 0.2s;
        cursor: pointer;
        user-select: none;
      }
      .script-item:hover {
        box-shadow: 0 4px 16px 0 rgba(0,122,204,0.15);
        transform: translateY(-2px) scale(1.03);
        background: #2d323e;
      }
      .script-item .script-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: #00bfff;
        margin-bottom: 4px;
      }
      .script-item .script-desc {
        font-size: 0.95rem;
        color: #aaa;
        margin-bottom: 2px;
      }
    `;
      document.head.appendChild(style);
    }
    const scriptsView = document.createElement("div");
    scriptsView.className = "scripts-view";
    const scriptActions = [
      {
        title: "Tab Cloak",
        desc: "Open a URL in a cloaked tab.",
        onClick: () => {
          let url = prompt("Enter the URL to cloak:", "https://example.com");
          let win = window.open();
          let iframe = win.document.createElement("iframe");
          iframe.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
          if (url.includes("https://") || url.includes("http://")) {
            iframe.src = url;
          } else {
            iframe.src = "https://" + url;
          }
          win.document.body.appendChild(iframe);
        }
      },
      {
        title: "Page Editor On",
        desc: "Make the current page editable.",
        onClick: () => {
          document.body.contentEditable = "true";
          document.designMode = "on";
          alert(
            "Page is now editable. Refresh the page or press page editor off to disable editing."
          );
        }
      },
      {
        title: "Page Editor Off",
        desc: "Disable page editing mode.",
        onClick: () => {
          document.body.contentEditable = "false";
          document.designMode = "off";
          alert("Page editing is now disabled.");
        }
      },
      {
        title: "Blooket Cheats",
        desc: "Inject Blooket Cheats GUI.",
        onClick: () => {
          try {
            (function() {
              let script = document.createElement("script");
              script.src = "https://cdn.jsdelivr.net/gh/randomstuff69/blooketcheatsplus@master/GUI/Gui.js";
              document.body.appendChild(script);
            })();
          } catch (error) {
            alert(`Error loading Blooket Cheats: ${error.message}`);
          }
        }
      },
      {
        title: "Fake Crash",
        desc: "Simulate a browser crash and close the tab.",
        onClick: () => {
          if (window.proxyFrame) {
            window.proxyFrame.style.display = "none";
          }
          setTimeout(() => {
            alert(
              "Uncaught TypeError: Failed to execute 'run' on 'ClientCore': Cannot read properties of undefined (reading 'execute')\n    at ProxyClientCore.run (main.js:1:1234)\n    at <anonymous>:1:1"
            );
            window.close();
            setTimeout(() => {
              if (!window.closed) {
                window.location.href = "about:blank";
                setTimeout(() => {
                  window.close();
                  if (!window.closed) {
                    alert(
                      "Unable to close the tab automatically. Please close it manually."
                    );
                  }
                }, 100);
              }
            }, 100);
          }, 50);
        }
      },
      {
        title: "Emergency Tab Switcher",
        desc: "Quickly switch to a safe tab with Z or click.",
        onClick: () => {
          (() => {
            const elem = document.createElement("div");
            const body = document.body;
            body.appendChild(elem);
            Object.assign(elem.style, {
              position: "fixed",
              top: "0px",
              right: "0px",
              margin: "10px",
              paddingTop: "10px",
              width: "200px",
              height: "40px",
              zIndex: "10000",
              opacity: "0.9",
              color: "white",
              backgroundColor: "black",
              border: "1px solid white",
              textAlign: "center",
              cursor: "pointer",
              display: "block"
            });
            elem.id = "elem";
            elem.textContent = "Z";
            const safetyUrl = prompt(
              "What tab do you want to open when a teacher comes by? Click Z to go to that tab. Warning: may have to click out of element for it to work"
            );
            const navigateToSafety = () => {
              if (safetyUrl) {
                window.location.href = safetyUrl;
              }
            };
            window.addEventListener("keydown", (event) => {
              if (event.key.toLowerCase() === "z") {
                navigateToSafety();
              }
            });
            elem.addEventListener("click", navigateToSafety);
          })();
        }
      }
    ];
    const list = document.createElement("div");
    list.className = "scripts-list";
    scriptActions.forEach((action) => {
      const item = document.createElement("div");
      item.className = "script-item";
      item.tabIndex = 0;
      item.innerHTML = `
      <div class="script-title">${action.title}</div>
      <div class="script-desc">${action.desc}</div>
    `;
      item.addEventListener("click", action.onClick);
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          action.onClick();
        }
      });
      list.appendChild(item);
    });
    scriptsView.appendChild(list);
    return scriptsView;
  }

  // src/views/bookmarklets.js
  function createBookmarkletsView() {
    injectAppCSS();
    const bookmarkletsView = document.createElement("div");
    bookmarkletsView.className = "games-view";
    const bookmarklets = [
      {
        name: "page editer (on)",
        url: "javascript: document.body.contentEditable = 'true';document.designMode = 'on';void 0;"
      },
      {
        name: "page editer (off)",
        url: "javascript: document.body.contentEditable = 'false';document.designMode = 'off';void 0;"
      },
      {
        name: "jsdelivr (repo)",
        url: "javascript: (function () {     let repo = prompt('Enter the repository (user/repo/file): ');     if (repo) {         let url = `https://cdn.jsdelivr.net/gh/${repo}`;         const choice = prompt(             'what would you like to do?\n1. Open in new tab\n2. Copy to clipboard\n3. give a bookmarklet for it (fetch)\n4: give a bookmarklet for it (script tag)\n5: Cancel'         );         if (choice === '1') {             window.open(url, '_blank');         } else if (choice === '2') {             navigator.clipboard                 .writeText(url)                 .then(() => {                     alert('URL copied to clipboard! ' + url);                 })                 .catch(() => {                     prompt('Copy this URL manually:', url);                 });         } else if (choice === '3') {             const bookmarklet = `javascript:fetch('${url}).then(data=>{data.text().then(text=>{eval(text)})});`;             prompt('Copy this bookmarklet:', bookmarklet);         } else if (choice === '4') {             const bookmarklet = `javascript:(function() { let script = document.createElement('script'); script.src = '${url}'; document.head.appendChild(script); })();`;             prompt('Copy this bookmarklet:', bookmarklet);         } else {             alert('Cancelled');         }     } })();"
      },
      {
        name: "absurd crypto multi blooket (always)",
        url: `javascript: const activateTripleCrypto = async () => {       setInterval(         () =>           Object.values(             (function findReact(r = document.querySelector("body>div")) {               return Object.values(r)[1]?.children?.[0]?._owner.stateNode                 ? r                 : findReact(r.querySelector(":scope>div"));             })()           )[1].children[0]._owner.stateNode.setState({             choices: [               {                 type: "mult",                 val: 10000000000000000000000000000000,                 rate: 0.075,                 blook: "Brainy Bot",                 text: "100x Crypto",               },             ],           }),         25       );     };     let cryptoImage = new Image();     cryptoImage.src =       "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/crypto/alwaysTriple.png?" +       Date.now();     cryptoImage.crossOrigin = "Anonymous";     cryptoImage.onload = function () {       const canvasElement = document.createElement("canvas");       const canvasContext = canvasElement.getContext("2d");       canvasContext.drawImage(cryptoImage, 0, 0, this.width, this.height);       let { data: imageData } = canvasContext.getImageData(           0,           0,           this.width,           this.height         ),         decodedText = "",         previousChar;       for (let i = 0; i < imageData.length; i += 4) {         let currentChar = String.fromCharCode(           imageData[i + 1] * 256 + imageData[i + 2]         );         decodedText += currentChar;         if (currentChar == "/" && previousChar == "*") break;         previousChar = currentChar;       }       let iframeElement = document.querySelector("iframe");       const [_, lastUpdatedTime, errorMessage] = decodedText.match(         /LastUpdated: (.+?); ErrorMessage: "([sS]+?)"/       );       if (         parseInt(lastUpdatedTime) <= 1708817191426 ||         iframeElement.contentWindow.confirm(errorMessage)       )         activateTripleCrypto();     };     cryptoImage.onerror = cryptoImage.onabort = () => {       cryptoImage.onerror = cryptoImage.onabort = null;       activateTripleCrypto();       let iframeElement = document.querySelector("iframe");       iframeElement.contentWindow.alert(         "It seems the GitHub is either blocked or down.

If it's NOT blocked, join the Discord server for updates
https://discord.gg/jHjGrrdXP6"       );     };`
      },
      {
        name: "100x crypto multi (always)",
        url: `javascript: const activateTripleCrypto = async () => {       setInterval(         () =>           Object.values(             (function findReact(r = document.querySelector("body>div")) {               return Object.values(r)[1]?.children?.[0]?._owner.stateNode                 ? r                 : findReact(r.querySelector(":scope>div"));             })()           )[1].children[0]._owner.stateNode.setState({             choices: [               {                 type: "mult",                 val: 100,                 rate: 0.075,                 blook: "Brainy Bot",                 text: "100x Crypto",               },             ],           }),         25       );     };     let cryptoImage = new Image();     cryptoImage.src =       "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/crypto/alwaysTriple.png?" +       Date.now();     cryptoImage.crossOrigin = "Anonymous";     cryptoImage.onload = function () {       const canvasElement = document.createElement("canvas");       const canvasContext = canvasElement.getContext("2d");       canvasContext.drawImage(cryptoImage, 0, 0, this.width, this.height);       let { data: imageData } = canvasContext.getImageData(           0,           0,           this.width,           this.height         ),         decodedText = "",         previousChar;       for (let i = 0; i < imageData.length; i += 4) {         let currentChar = String.fromCharCode(           imageData[i + 1] * 256 + imageData[i + 2]         );         decodedText += currentChar;         if (currentChar == "/" && previousChar == "*") break;         previousChar = currentChar;       }       let iframeElement = document.querySelector("iframe");       const [_, lastUpdatedTime, errorMessage] = decodedText.match(         /LastUpdated: (.+?); ErrorMessage: "([sS]+?)"/       );       if (         parseInt(lastUpdatedTime) <= 1708817191426 ||         iframeElement.contentWindow.confirm(errorMessage)       )         activateTripleCrypto();     };     cryptoImage.onerror = cryptoImage.onabort = () => {       cryptoImage.onerror = cryptoImage.onabort = null;       activateTripleCrypto();       let iframeElement = document.querySelector("iframe");       iframeElement.contentWindow.alert(         "It seems the GitHub is either blocked or down.

If it's NOT blocked, join the Discord server for updates
https://discord.gg/jHjGrrdXP6"       );     };`
      },
      {
        name: "3x crypto blooket hack (always)",
        url: `javascript: const activateTripleCrypto = async () => {       setInterval(         () =>           Object.values(             (function findReact(r = document.querySelector("body>div")) {               return Object.values(r)[1]?.children?.[0]?._owner.stateNode                 ? r                 : findReact(r.querySelector(":scope>div"));             })()           )[1].children[0]._owner.stateNode.setState({             choices: [               {                 type: "mult",                 val: 3,                 rate: 0.075,                 blook: "Brainy Bot",                 text: "Triple Crypto",               },             ],           }),         25       );     };     let cryptoImage = new Image();     cryptoImage.src =       "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/crypto/alwaysTriple.png?" +       Date.now();     cryptoImage.crossOrigin = "Anonymous";     cryptoImage.onload = function () {       const canvasElement = document.createElement("canvas");       const canvasContext = canvasElement.getContext("2d");       canvasContext.drawImage(cryptoImage, 0, 0, this.width, this.height);       let { data: imageData } = canvasContext.getImageData(           0,           0,           this.width,           this.height         ),         decodedText = "",         previousChar;       for (let i = 0; i < imageData.length; i += 4) {         let currentChar = String.fromCharCode(           imageData[i + 1] * 256 + imageData[i + 2]         );         decodedText += currentChar;         if (currentChar == "/" && previousChar == "*") break;         previousChar = currentChar;       }       let iframeElement = document.querySelector("iframe");       const [_, lastUpdatedTime, errorMessage] = decodedText.match(         /LastUpdated: (.+?); ErrorMessage: "([sS]+?)"/       );       if (         parseInt(lastUpdatedTime) <= 1708817191426 ||         iframeElement.contentWindow.confirm(errorMessage)       )         activateTripleCrypto();     };     cryptoImage.onerror = cryptoImage.onabort = () => {       cryptoImage.onerror = cryptoImage.onabort = null;       activateTripleCrypto();       let iframeElement = document.querySelector("iframe");       iframeElement.contentWindow.alert(         "It seems the GitHub is either blocked or down.

If it's NOT blocked, join the Discord server for updates
https://discord.gg/jHjGrrdXP6"       );     };`
      }
    ];
    const list = document.createElement("div");
    list.className = "games-list";
    bookmarklets.forEach((bookmarklet) => {
      const item = document.createElement("div");
      item.className = "game-item";
      item.tabIndex = 0;
      const anchor = document.createElement("a");
      anchor.href = bookmarklet.url;
      anchor.draggable = true;
      anchor.textContent = bookmarklet.name;
      const gameType = document.createElement("div");
      gameType.className = "game-type";
      gameType.textContent = "Bookmarklet";
      item.appendChild(anchor);
      item.appendChild(gameType);
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(bookmarklet.url).then(() => {
          const originalText = gameType.textContent;
          gameType.textContent = "Copied!";
          setTimeout(() => {
            gameType.textContent = originalText;
          }, 1200);
        });
      });
      anchor.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/uri-list", bookmarklet.url);
        e.dataTransfer.setData("text/plain", bookmarklet.url);
        e.dataTransfer.setData(
          "text/html",
          `<a href="${bookmarklet.url}">${bookmarklet.name}</a>`
        );
      });
      list.appendChild(item);
    });
    bookmarkletsView.appendChild(list);
    return bookmarkletsView;
  }

  // src/utils/helpers.js
  async function loadJson(file) {
    try {
      const response = await fetch(file);
      if (!response.ok)
        throw new Error(`Failed to load ${file}: ${response.statusText}`);
      return await response.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  // src/data/javascript/games.js
  var gamesList = [
    {
      url: "https://example.com/game1",
      title: "Game One",
      type: "unblocked"
    },
    {
      url: "https://example.com/game2",
      title: "Game Two",
      type: "blocked"
    },
    {
      url: "https://example.com/game3",
      title: "Game Three",
      type: "cors-optimized"
    }
  ];

  // src/views/games.js
  function injectGamesCSS() {
    if (document.getElementById("games-view-style")) return;
    const style = document.createElement("style");
    style.id = "games-view-style";
    style.textContent = `
    .games-view {
      padding: 20px;
      background: #23272f;
      border-radius: 10px;
      min-height: 400px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,0.15);
    }
    .games-tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
    .games-tab {
      padding: 10px 24px;
      background: #2d323e;
      border: none;
      border-radius: 6px 6px 0 0;
      color: #fff;
      font-size: 1rem;
      import { loadJson } from "../utils/helpers.js";
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      outline: none;
    }
    .games-tab.active, .games-tab:hover {
      background: #007acc;
      color: #fff;
    }
    .games-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 18px;
      margin-top: 10px;
    }
    .game-item {
      background: #292d36;
      border-radius: 8px;
      padding: 18px 14px;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .game-item:hover {
      box-shadow: 0 4px 16px 0 rgba(0,122,204,0.15);
      transform: translateY(-2px) scale(1.03);
    }
    .game-item a {
      font-size: 1.1rem;
      font-weight: 600;
      color: #00bfff;
      margin-bottom: 4px;
    }
    .game-item a:hover {
      color: #fff;
    }
    .game-item .game-type {
      font-size: 0.85rem;
      color: #aaa;
      margin-top: 2px;
      text-transform: capitalize;
    }
  `;
    document.head.appendChild(style);
  }
  var TABS = [
    { key: "blocked", label: "Blocked" },
    { key: "unblocked", label: "Unblocked" },
    { key: "cors-optimized", label: "CORS Proxy Optimized" }
  ];
  var gamesData = [];
  var activeTab = "unblocked";
  async function loadGames() {
    let loaded = await loadJson("src/data/json/games.json");
    if (!loaded || !Array.isArray(loaded)) {
      gamesData = gamesList;
    } else {
      gamesData = loaded;
    }
    renderGames();
  }
  function setTab(tabKey) {
    activeTab = tabKey;
    renderGames();
  }
  function renderTabs() {
    return `
    <div class="games-tabs">
      ${TABS.map(
      (tab) => `
        <button class="games-tab${activeTab === tab.key ? " active" : ""}" onclick="window.setGamesTab('${tab.key}')">${tab.label}</button>
      `
    ).join("")}
    </div>
  `;
  }
  function renderGames() {
    const container = document.getElementById("games-view");
    if (!container) return;
    const filtered = gamesData.filter((game) => game.type === activeTab);
    container.innerHTML = `
    ${renderTabs()}
    <div class="games-list">
      ${filtered.length === 0 ? `<p style="grid-column: 1/-1; text-align: center; color: #aaa;">No games found.</p>` : filtered.map(
      (game) => `
        <div class="game-item">
          <a href="${game.url}" target="_blank">${game.title}</a>
          <div class="game-type">${game.type.replace(
        "cors-optimized",
        "CORS Optimized"
      )}</div>
        </div>
      `
    ).join("")}
    </div>
  `;
  }
  window.setGamesTab = setTab;
  function showGamesView() {
    return `
    <div id="games-view" class="games-view">
      Loading games...
    </div>
  `;
  }
  injectGamesCSS();
  loadGames();

  // src/main.js
  console.log("\n\nNow launching ASC2563's Proxy Client...\n\n");
  var ProxyClientApp = class {
    constructor() {
      this.frame = null;
      this.views = {};
      this.sidebar = new sidebar_default();
      this.sidebarButtons = {};
    }
    launch() {
      injectAppCSS();
      sidebar_default.injectCSS();
      this.injectAppStyles();
      this.frame = document.createElement("div");
      window.proxyFrame = this.frame;
      this.setupFrameStyle();
      const sidebarElement = this.sidebar.createSidebar();
      this.sidebar.addNavigationButtons();
      this.sidebarButtons = this.sidebar.getButtons();
      const content = this.createContent();
      this.frame.appendChild(sidebarElement);
      this.frame.appendChild(content);
      document.body.appendChild(this.frame);
      this.createFloatingButton();
      document.addEventListener("keydown", (event) => {
        if (event.key === "\\") {
          if (window.proxyFrame) {
            this.toggleProxyClient();
          }
        }
      });
      this.sidebarButtons.hideButton.addEventListener("click", () => {
        this.hideProxyClient();
      });
      this.sidebarButtons.removeButton.addEventListener("click", () => {
        this.removeProxyClient();
      });
      console.log(
        "Application launched successfully. Press backslash (\\) to show if hidden."
      );
    }
    injectAppStyles() {
      const style = document.createElement("style");
      style.textContent = `
      /* App Frame Styling */
      .proxy-app-frame {
        background: #23272f;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        border: 1px solid #404040;
        overflow: hidden;
      }
      
      /* Content Area Styling */
      .proxy-content {
        background: #23272f;
        position: relative;
      }
      
      .content-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 20% 80%, rgba(0, 122, 204, 0.03) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(0, 191, 255, 0.03) 0%, transparent 50%);
        pointer-events: none;
      }
    `;
      document.head.appendChild(style);
    }
    createFloatingButton() {
      console.log("Creating floating button...");
      this.floatingButton = document.createElement("div");
      this.floatingButton.innerHTML = "\u{1F527}";
      this.floatingButton.title = "Show Proxy Client (Press \\ to toggle)";
      this.floatingButton.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #007acc, #0056b3);
      border: 2px solid #004085;
      border-radius: 50%;
      display: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 100000;
      font-size: 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
      user-select: none;
    `;
      console.log("Floating button created, adding to body...");
      this.floatingButton.addEventListener("mouseenter", () => {
        this.floatingButton.style.transform = "scale(1.1)";
        this.floatingButton.style.boxShadow = "0 6px 16px rgba(0, 122, 204, 0.4)";
      });
      this.floatingButton.addEventListener("mouseleave", () => {
        this.floatingButton.style.transform = "scale(1)";
        this.floatingButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
      });
      this.floatingButton.addEventListener("click", (e) => {
        if (!this.isDragging) {
          console.log("Floating button clicked!");
          this.showProxyClient();
        }
      });
      this.addDragFunctionality();
      document.body.appendChild(this.floatingButton);
      console.log("Floating button added to body, should be visible now");
    }
    addDragFunctionality() {
      let isDragging = false;
      let startX, startY, initialX, initialY;
      this.isDragging = false;
      this.floatingButton.addEventListener("mousedown", (e) => {
        isDragging = true;
        this.isDragging = false;
        startX = e.clientX;
        startY = e.clientY;
        const rect = this.floatingButton.getBoundingClientRect();
        initialX = rect.left;
        initialY = rect.top;
        this.floatingButton.style.cursor = "grabbing";
        this.floatingButton.style.transition = "none";
        e.preventDefault();
      });
      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
          this.isDragging = true;
        }
        let newX = initialX + deltaX;
        let newY = initialY + deltaY;
        const buttonSize = 50;
        const maxX = window.innerWidth - buttonSize;
        const maxY = window.innerHeight - buttonSize;
        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));
        this.floatingButton.style.left = newX + "px";
        this.floatingButton.style.top = newY + "px";
        this.floatingButton.style.right = "auto";
        this.floatingButton.style.bottom = "auto";
      });
      document.addEventListener("mouseup", () => {
        if (isDragging) {
          isDragging = false;
          this.floatingButton.style.cursor = "pointer";
          this.floatingButton.style.transition = "all 0.3s ease";
          setTimeout(() => {
            this.isDragging = false;
          }, 100);
        }
      });
    }
    hideProxyClient() {
      console.log("Hiding proxy client, showing floating button");
      this.frame.style.display = "none";
      this.floatingButton.style.display = "flex";
    }
    showProxyClient() {
      console.log("Showing proxy client, hiding floating button");
      this.frame.style.display = "flex";
      this.floatingButton.style.display = "none";
    }
    toggleProxyClient() {
      if (this.frame.style.display === "none") {
        this.showProxyClient();
      } else {
        this.hideProxyClient();
      }
    }
    removeProxyClient() {
      console.log("Completely removing proxy client from page");
      if (this.frame && this.frame.parentNode) {
        this.frame.parentNode.removeChild(this.frame);
      }
      if (this.floatingButton && this.floatingButton.parentNode) {
        this.floatingButton.parentNode.removeChild(this.floatingButton);
      }
      this.frame = null;
      this.floatingButton = null;
      window.proxyFrame = null;
      console.log("Proxy client completely removed");
    }
    setupFrameStyle() {
      const frame = this.frame;
      frame.className = "proxy-app-frame";
      frame.style.position = "fixed";
      frame.style.top = "50%";
      frame.style.left = "50%";
      frame.style.transform = "translate(-50%, -50%)";
      frame.style.width = "70vw";
      frame.style.height = "80vh";
      frame.style.display = "flex";
      frame.style.color = "#ffffff";
      frame.style.zIndex = "99999";
    }
    createContent() {
      const content = document.createElement("div");
      content.className = "proxy-content";
      content.style.flexGrow = "1";
      content.style.display = "flex";
      content.style.flexDirection = "column";
      content.style.width = "100%";
      content.style.height = "100%";
      content.style.padding = "0";
      content.style.position = "relative";
      const overlay = document.createElement("div");
      overlay.className = "content-overlay";
      content.appendChild(overlay);
      this.views.proxyView = createProxyView();
      this.views.notesView = createNotesView();
      this.views.calculatorView = createCalculatorView();
      this.views.consoleView = createConsoleView();
      this.views.cloakingView = createCloakingView();
      this.views.historyFloodView = createHistoryFloodView();
      this.views.corsProxyView = createCorsProxyView();
      this.views.pocketBrowserView = createPocketBrowserView();
      this.views.scriptsView = createscriptsView();
      this.views.bookmarkletsView = createBookmarkletsView();
      const gamesViewDiv = document.createElement("div");
      gamesViewDiv.innerHTML = showGamesView();
      gamesViewDiv.style.display = "none";
      this.views.gamesView = gamesViewDiv;
      Object.values(this.views).forEach((view) => {
        view.style.position = "relative";
        view.style.zIndex = "1";
        content.appendChild(view);
      });
      Object.values(this.views).forEach((view) => view.style.display = "none");
      if (this.views.proxyView) this.views.proxyView.style.display = "flex";
      this.setupSidebarEvents();
      return content;
    }
    // --- Sidebar Button Events and View Switching ---
    setupSidebarEvents() {
      const v = this.views;
      const b = this.sidebarButtons;
      const hideAll = () => {
        Object.values(v).forEach((view) => view.style.display = "none");
      };
      const setActiveButton = (buttonKey) => {
        this.sidebar.setActiveButton(buttonKey);
      };
      b.proxyButton.addEventListener("click", () => {
        hideAll();
        v.proxyView.style.display = "flex";
        setActiveButton("proxyButton");
      });
      b.notesButton.addEventListener("click", () => {
        hideAll();
        v.notesView.style.display = "block";
        setActiveButton("notesButton");
      });
      b.calculatorButton.addEventListener("click", () => {
        hideAll();
        v.calculatorView.style.display = "block";
        setActiveButton("calculatorButton");
        this.initCalculator();
      });
      b.consoleButton.addEventListener("click", () => {
        hideAll();
        v.consoleView.style.display = "block";
        setActiveButton("consoleButton");
      });
      b.cloakingButton.addEventListener("click", () => {
        hideAll();
        v.cloakingView.style.display = "block";
        setActiveButton("cloakingButton");
      });
      b.historyFloodButton.addEventListener("click", () => {
        hideAll();
        v.historyFloodView.style.display = "block";
        setActiveButton("historyFloodButton");
      });
      b.corsProxyButton.addEventListener("click", () => {
        hideAll();
        v.corsProxyView.style.display = "block";
        setActiveButton("corsProxyButton");
      });
      b.pocketBrowserButton.addEventListener("click", () => {
        hideAll();
        v.pocketBrowserView.style.display = "block";
        setActiveButton("pocketBrowserButton");
      });
      b.scriptsButton.addEventListener("click", () => {
        hideAll();
        v.scriptsView.style.display = "block";
        setActiveButton("scriptsButton");
      });
      b.bookmarkletsButton.addEventListener("click", () => {
        hideAll();
        v.bookmarkletsView.style.display = "block";
        setActiveButton("bookmarkletsButton");
      });
      b.gamesButton.addEventListener("click", () => {
        hideAll();
        v.gamesView.style.display = "block";
        setActiveButton("gamesButton");
      });
    }
    // --- Calculator Initialization ---
    initCalculator() {
      const calculatorView = this.views.calculatorView;
      if (!calculatorView._initialized) {
        const display = calculatorView.querySelector("#calcDisplay");
        const buttons = calculatorView.querySelectorAll(".calc-btn");
        let currentValue = "";
        buttons.forEach((button) => {
          button.style.padding = "10px";
          button.style.fontSize = "16px";
          button.style.cursor = "pointer";
          button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");
            if (value === "C") {
              currentValue = "";
            } else if (value === "=") {
              try {
                const sanitizedValue = currentValue.replace(
                  /[^0-9+\-*/.() ]/g,
                  ""
                );
                if (sanitizedValue !== currentValue) {
                  currentValue = "Invalid Input";
                } else if (sanitizedValue.trim() === "") {
                  currentValue = "";
                } else {
                  const result = Function(
                    '"use strict"; return (' + sanitizedValue + ")"
                  )();
                  currentValue = typeof result === "number" && isFinite(result) ? result.toString() : "Error";
                }
              } catch (e) {
                currentValue = "Error";
              }
            } else {
              currentValue += value;
            }
            display.value = currentValue;
          });
        });
        calculatorView._initialized = true;
      }
    }
  };
  var app = new ProxyClientApp();
  app.launch();
})();
