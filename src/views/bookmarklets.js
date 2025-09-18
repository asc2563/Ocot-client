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
      name: "page editer (on)",
      url: "javascript: document.body.contentEditable = 'true';document.designMode = 'on';void 0;",
    },
    {
      name: "page editer (off)",
      url: "javascript: document.body.contentEditable = 'false';document.designMode = 'off';void 0;",
    },
    {
      name: "jsdelivr (repo)",
      url: "javascript: (function () {     let repo = prompt('Enter the repository (user/repo/file): ');     if (repo) {         let url = `https://cdn.jsdelivr.net/gh/${repo}`;         const choice = prompt(             'what would you like to do?\n1. Open in new tab\n2. Copy to clipboard\n3. give a bookmarklet for it (fetch)\n4: give a bookmarklet for it (script tag)\n5: Cancel'         );         if (choice === '1') {             window.open(url, '_blank');         } else if (choice === '2') {             navigator.clipboard                 .writeText(url)                 .then(() => {                     alert('URL copied to clipboard! ' + url);                 })                 .catch(() => {                     prompt('Copy this URL manually:', url);                 });         } else if (choice === '3') {             const bookmarklet = `javascript:fetch('${url}).then(data=>{data.text().then(text=>{eval(text)})});`;             prompt('Copy this bookmarklet:', bookmarklet);         } else if (choice === '4') {             const bookmarklet = `javascript:(function() { let script = document.createElement('script'); script.src = '${url}'; document.head.appendChild(script); })();`;             prompt('Copy this bookmarklet:', bookmarklet);         } else {             alert('Cancelled');         }     } })();",
    },
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
