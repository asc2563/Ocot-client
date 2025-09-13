// Exported function to create the Notes view
export default function createNotesView() {
  const notesView = document.createElement("div");
  notesView.style.width = "100%";
  notesView.style.height = "100%";
  notesView.style.display = "none";
  notesView.style.backgroundColor = "#f5f5f5";
  notesView.style.padding = "20px";
  const notesTextarea = document.createElement("textarea");
  notesTextarea.style.width = "100%";
  notesTextarea.style.height = "100%";
  notesTextarea.style.border = "1px solid #ddd";
  notesTextarea.style.padding = "10px";
  notesTextarea.placeholder = "Enter your notes here...";
  notesView.appendChild(notesTextarea);
  return notesView;
}
