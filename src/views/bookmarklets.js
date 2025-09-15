// Exported function to create the Bookmarklets view
export default function createBookmarkletsView() {
  const bookmarkletsView = document.createElement("div");
  bookmarkletsView.style.width = "100%";
  bookmarkletsView.style.height = "100%";
  bookmarkletsView.style.display = "none";
  bookmarkletsView.style.backgroundColor = "#f0f0f0";
  bookmarkletsView.style.color = "#333";
  bookmarkletsView.style.padding = "20px";
  bookmarkletsView.style.fontFamily = "Arial, sans-serif";

  const title = document.createElement("h2");
  title.textContent = "Bookmarklets";
  bookmarkletsView.appendChild(title);

  const bookmarkletList = document.createElement("div");
  bookmarkletList.style.display = "flex";
  bookmarkletList.style.flexDirection = "column";
  bookmarkletList.style.gap = "10px";

  const bookmarklets = [
    {
      name: "page editer",
      url: "javascript: document.body.contentEditable = 'true';document.designMode = 'on';void 0;",
    },
    { name: "YouTube", url: "https://www.youtube.com" },
    { name: "Wikipedia", url: "https://www.wikipedia.org" },
    { name: "Stack Overflow", url: "https://stackoverflow.com" },
    { name: "GitHub", url: "https://github.com" },
  ];

  bookmarklets.forEach((bookmarklet) => {
    const anchor = document.createElement("a");
    anchor.href = bookmarklet.url;
    anchor.textContent = bookmarklet.name;
    anchor.target = "_blank";
    anchor.style.color = "#007acc";
    anchor.style.textDecoration = "none";
    anchor.style.padding = "5px";
    anchor.style.border = "1px solid #ccc";
    anchor.style.borderRadius = "4px";
    anchor.style.backgroundColor = "#fff";
    anchor.style.display = "inline-block";
    bookmarkletList.appendChild(anchor);
  });

  bookmarkletsView.appendChild(bookmarkletList);
  return bookmarkletsView;
}
