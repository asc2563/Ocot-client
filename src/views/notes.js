import { injectAppCSS } from "../css.js";

export default function createNotesView() {
  // Inject shared CSS
  injectAppCSS();

  const notesView = document.createElement("div");
  notesView.className = "card-grid-view";

  // Load saved notes from localStorage
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

      const preview =
        note.content.length > 100
          ? note.content.substring(0, 100) + "..."
          : note.content;
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
      z-index: 1000;
    `;

    modal.innerHTML = `
      <div style="background: #23272f; padding: 24px; border-radius: 10px; width: 90%; max-width: 600px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
        <h3 style="color: #00bfff; margin: 0 0 16px 0;">${
          isEditing ? "Edit Note" : "New Note"
        }</h3>
        <input type="text" id="note-title" placeholder="Note title..." value="${
          note.title
        }" 
               style="width: 100%; padding: 12px; margin-bottom: 12px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem;">
        <textarea id="note-content" placeholder="Write your note here..." rows="10" 
                  style="width: 100%; padding: 12px; margin-bottom: 16px; background: #292d36; border: 1px solid #404040; border-radius: 6px; color: #fff; font-size: 1rem; resize: vertical;">${
                    note.content
                  }</textarea>
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
        content: content,
        timestamp: Date.now(),
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

  // Event listeners
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
