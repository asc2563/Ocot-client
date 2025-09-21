// Exported function to create the scripts view
export default function createscriptsView() {
  // Inject scripts view CSS if not already present
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

  // List of script actions
  const scriptActions = [
    {
      title: "Tab Cloak",
      desc: "Open a URL in a cloaked tab.",
      onClick: () => {
        let url = prompt("Enter the URL to cloak:", "https://example.com");
        let win = window.open();
        let iframe = win.document.createElement("iframe");
        iframe.style =
          "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
        if (url.includes("https://") || url.includes("http://")) {
          iframe.src = url;
        } else {
          iframe.src = "https://" + url;
        }
        win.document.body.appendChild(iframe);
      },
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
      },
    },
    {
      title: "Page Editor Off",
      desc: "Disable page editing mode.",
      onClick: () => {
        document.body.contentEditable = "false";
        document.designMode = "off";
        alert("Page editing is now disabled.");
      },
    },
    {
      title: "Blooket Cheats",
      desc: "Inject Blooket Cheats GUI.",
      onClick: () => {
        try {
          (function () {
            let script = document.createElement("script");
            script.src =
              "https://cdn.jsdelivr.net/gh/randomstuff69/blooketcheatsplus@master/GUI/Gui.js";
            document.body.appendChild(script);
          })();
        } catch (error) {
          alert(`Error loading Blooket Cheats: ${error.message}`);
        }
      },
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
      },
    },
    {
      title: "Emergency Tab Switcher",
      desc: "Quickly switch to a safe tab with Z or click.",
      onClick: () => {
        (() => {
          // Create and configure the emergency tab switcher element
          const elem = document.createElement("div");
          const body = document.body;

          body.appendChild(elem);

          // Apply styles using Object.assign for cleaner code
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
            display: "block",
          });

          elem.id = "elem";
          elem.textContent = "Z";

          // Get the safety URL from user
          const safetyUrl = prompt(
            "What tab do you want to open when a teacher comes by? " +
              "Click Z to go to that tab. Warning: may have to click out of element for it to work"
          );

          // Function to navigate to safety URL
          const navigateToSafety = () => {
            if (safetyUrl) {
              window.location.href = safetyUrl;
            }
          };

          // Add keyboard event listener
          window.addEventListener("keydown", (event) => {
            if (event.key.toLowerCase() === "z") {
              navigateToSafety();
            }
          });

          // Add click event listener
          elem.addEventListener("click", navigateToSafety);
        })();
      },
    },
  ];

  // Create the grid list
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
