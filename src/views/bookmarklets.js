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
    {
      name: "absurd crypto multi blooket (always)",
      url: `javascript: const activateTripleCrypto = async () => {       setInterval(         () =>           Object.values(             (function findReact(r = document.querySelector("body>div")) {               return Object.values(r)[1]?.children?.[0]?._owner.stateNode                 ? r                 : findReact(r.querySelector(":scope>div"));             })()           )[1].children[0]._owner.stateNode.setState({             choices: [               {                 type: "mult",                 val: 10000000000000000000000000000000,                 rate: 0.075,                 blook: "Brainy Bot",                 text: "100x Crypto",               },             ],           }),         25       );     };     let cryptoImage = new Image();     cryptoImage.src =       "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/crypto/alwaysTriple.png?" +       Date.now();     cryptoImage.crossOrigin = "Anonymous";     cryptoImage.onload = function () {       const canvasElement = document.createElement("canvas");       const canvasContext = canvasElement.getContext("2d");       canvasContext.drawImage(cryptoImage, 0, 0, this.width, this.height);       let { data: imageData } = canvasContext.getImageData(           0,           0,           this.width,           this.height         ),         decodedText = "",         previousChar;       for (let i = 0; i < imageData.length; i += 4) {         let currentChar = String.fromCharCode(           imageData[i + 1] * 256 + imageData[i + 2]         );         decodedText += currentChar;         if (currentChar == "/" && previousChar == "*") break;         previousChar = currentChar;       }       let iframeElement = document.querySelector("iframe");       const [_, lastUpdatedTime, errorMessage] = decodedText.match(         /LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/       );       if (         parseInt(lastUpdatedTime) <= 1708817191426 ||         iframeElement.contentWindow.confirm(errorMessage)       )         activateTripleCrypto();     };     cryptoImage.onerror = cryptoImage.onabort = () => {       cryptoImage.onerror = cryptoImage.onabort = null;       activateTripleCrypto();       let iframeElement = document.querySelector("iframe");       iframeElement.contentWindow.alert(         "It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6"       );     };`,
    },
    {
      name: "100x crypto multi (always)",
      url: `javascript: const activateTripleCrypto = async () => {       setInterval(         () =>           Object.values(             (function findReact(r = document.querySelector("body>div")) {               return Object.values(r)[1]?.children?.[0]?._owner.stateNode                 ? r                 : findReact(r.querySelector(":scope>div"));             })()           )[1].children[0]._owner.stateNode.setState({             choices: [               {                 type: "mult",                 val: 100,                 rate: 0.075,                 blook: "Brainy Bot",                 text: "100x Crypto",               },             ],           }),         25       );     };     let cryptoImage = new Image();     cryptoImage.src =       "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/crypto/alwaysTriple.png?" +       Date.now();     cryptoImage.crossOrigin = "Anonymous";     cryptoImage.onload = function () {       const canvasElement = document.createElement("canvas");       const canvasContext = canvasElement.getContext("2d");       canvasContext.drawImage(cryptoImage, 0, 0, this.width, this.height);       let { data: imageData } = canvasContext.getImageData(           0,           0,           this.width,           this.height         ),         decodedText = "",         previousChar;       for (let i = 0; i < imageData.length; i += 4) {         let currentChar = String.fromCharCode(           imageData[i + 1] * 256 + imageData[i + 2]         );         decodedText += currentChar;         if (currentChar == "/" && previousChar == "*") break;         previousChar = currentChar;       }       let iframeElement = document.querySelector("iframe");       const [_, lastUpdatedTime, errorMessage] = decodedText.match(         /LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/       );       if (         parseInt(lastUpdatedTime) <= 1708817191426 ||         iframeElement.contentWindow.confirm(errorMessage)       )         activateTripleCrypto();     };     cryptoImage.onerror = cryptoImage.onabort = () => {       cryptoImage.onerror = cryptoImage.onabort = null;       activateTripleCrypto();       let iframeElement = document.querySelector("iframe");       iframeElement.contentWindow.alert(         "It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6"       );     };`,
    },
    {
      name: "3x crypto blooket hack (always)",
      url: `javascript: const activateTripleCrypto = async () => {       setInterval(         () =>           Object.values(             (function findReact(r = document.querySelector("body>div")) {               return Object.values(r)[1]?.children?.[0]?._owner.stateNode                 ? r                 : findReact(r.querySelector(":scope>div"));             })()           )[1].children[0]._owner.stateNode.setState({             choices: [               {                 type: "mult",                 val: 3,                 rate: 0.075,                 blook: "Brainy Bot",                 text: "Triple Crypto",               },             ],           }),         25       );     };     let cryptoImage = new Image();     cryptoImage.src =       "https://raw.githubusercontent.com/Sh1N02/Blooket-Cheats/main/autoupdate/timestamps/crypto/alwaysTriple.png?" +       Date.now();     cryptoImage.crossOrigin = "Anonymous";     cryptoImage.onload = function () {       const canvasElement = document.createElement("canvas");       const canvasContext = canvasElement.getContext("2d");       canvasContext.drawImage(cryptoImage, 0, 0, this.width, this.height);       let { data: imageData } = canvasContext.getImageData(           0,           0,           this.width,           this.height         ),         decodedText = "",         previousChar;       for (let i = 0; i < imageData.length; i += 4) {         let currentChar = String.fromCharCode(           imageData[i + 1] * 256 + imageData[i + 2]         );         decodedText += currentChar;         if (currentChar == "/" && previousChar == "*") break;         previousChar = currentChar;       }       let iframeElement = document.querySelector("iframe");       const [_, lastUpdatedTime, errorMessage] = decodedText.match(         /LastUpdated: (.+?); ErrorMessage: "([\s\S]+?)"/       );       if (         parseInt(lastUpdatedTime) <= 1708817191426 ||         iframeElement.contentWindow.confirm(errorMessage)       )         activateTripleCrypto();     };     cryptoImage.onerror = cryptoImage.onabort = () => {       cryptoImage.onerror = cryptoImage.onabort = null;       activateTripleCrypto();       let iframeElement = document.querySelector("iframe");       iframeElement.contentWindow.alert(         "It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6"       );     };`,
    },
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
