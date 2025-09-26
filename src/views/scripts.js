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
    {
      title: "Auto-Hide Script",
      desc: "Automatically hide the proxy client when switching tabs.",
      onClick: () => {
        // Check if auto-hide is already enabled
        if (window.autoHideEnabled) {
          // Disable auto-hide
          window.removeEventListener("blur", window.autoHideBlurHandler);
          window.removeEventListener("focus", window.autoHideFocusHandler);
          window.autoHideEnabled = false;
          alert("Auto-hide disabled. The proxy client will no longer hide when switching tabs.");
          return;
        }

        // Enable auto-hide
        window.autoHideBlurHandler = () => {
          // Hide the proxy client when window loses focus (tab switch)
          if (window.proxyFrame && window.proxyFrame.style.display !== "none") {
            // Store the previous state to restore later
            window.autoHideWasVisible = true;
            // Use the app's built-in hide method if available
            if (window.proxyClientApp && typeof window.proxyClientApp.hideProxyClient === 'function') {
              window.proxyClientApp.hideProxyClient();
            } else {
              // Fallback method
              window.proxyFrame.style.display = "none";
              const floatingButton = document.querySelector('[title*="Show Ocot Client"]');
              if (floatingButton) {
                floatingButton.style.display = "flex";
              }
            }
          } else {
            window.autoHideWasVisible = false;
          }
        };

        window.autoHideFocusHandler = () => {
          // Show the proxy client when window regains focus if it was visible before
          if (window.autoHideWasVisible && window.proxyFrame && window.proxyFrame.style.display === "none") {
            // Use the app's built-in show method if available
            if (window.proxyClientApp && typeof window.proxyClientApp.showProxyClient === 'function') {
              window.proxyClientApp.showProxyClient();
            } else {
              // Fallback method
              window.proxyFrame.style.display = "flex";
              const floatingButton = document.querySelector('[title*="Show Ocot Client"]');
              if (floatingButton) {
                floatingButton.style.display = "none";
              }
            }
          }
        };

        // Add event listeners
        window.addEventListener("blur", window.autoHideBlurHandler);
        window.addEventListener("focus", window.autoHideFocusHandler);
        
        window.autoHideEnabled = true;
        alert("Auto-hide enabled! The proxy client will now automatically hide when you switch tabs and reappear when you return. Click this script again to disable.");
      },
    },
    {
      title: "About:blank Injector",
      desc: "Inject scripts into a new about:blank page.",
      onClick: () => {
        // Create modal for injection options
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
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
              <h2 style="color: #00bfff; margin: 0; font-size: 1.5rem;">About:blank Injector</h2>
              <button id="close-modal" style="background: none; border: none; color: #aaa; font-size: 24px; cursor: pointer; padding: 0; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;">&times;</button>
            </div>
            
            <p style="color: #aaa; margin-bottom: 20px; line-height: 1.4;">
              Select an injection method to add scripts to a new about:blank page:
            </p>
            
            <div style="display: grid; gap: 16px;">
              <button id="url-option" style="background: #292d36; border: 1px solid #404040; border-radius: 8px; padding: 16px; color: #fff; cursor: pointer; text-align: left; transition: all 0.2s;">
                <div style="font-weight: 600; color: #00bfff; margin-bottom: 4px;">🔗 URL Injection</div>
                <div style="color: #aaa; font-size: 0.9rem;">Load a JavaScript file from a URL</div>
              </button>
              
              <button id="js-option" style="background: #292d36; border: 1px solid #404040; border-radius: 8px; padding: 16px; color: #fff; cursor: pointer; text-align: left; transition: all 0.2s;">
                <div style="font-weight: 600; color: #00bfff; margin-bottom: 4px;">📝 JavaScript Code</div>
                <div style="color: #aaa; font-size: 0.9rem;">Input custom JavaScript code to execute</div>
              </button>
              
              <button id="ocot-option" style="background: #292d36; border: 1px solid #404040; border-radius: 8px; padding: 16px; color: #fff; cursor: pointer; text-align: left; transition: all 0.2s;">
                <div style="font-weight: 600; color: #00bfff; margin-bottom: 4px;">🔧 Inject Ocot Client</div>
                <div style="color: #aaa; font-size: 0.9rem;">Load the latest Ocot Client from CDN</div>
              </button>
            </div>
          </div>
        `;

        // Add hover effects
        const buttons = modal.querySelectorAll('button[id$="-option"]');
        buttons.forEach(button => {
          button.addEventListener('mouseenter', () => {
            button.style.background = '#2d323e';
            button.style.borderColor = '#007acc';
            button.style.transform = 'translateY(-2px)';
          });
          button.addEventListener('mouseleave', () => {
            button.style.background = '#292d36';
            button.style.borderColor = '#404040';
            button.style.transform = 'translateY(0)';
          });
        });

        document.body.appendChild(modal);

        // Helper function to create about:blank window and inject script
        const createAboutBlankWithScript = (scriptContent, isUrl = false) => {
          const newWindow = window.open('about:blank', '_blank');
          if (newWindow) {
            const script = newWindow.document.createElement('script');
            if (isUrl) {
              script.src = scriptContent;
            } else {
              script.textContent = scriptContent;
            }
            newWindow.document.head.appendChild(script);
            
            // Add basic styling to the page
            const style = newWindow.document.createElement('style');
            style.textContent = `
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: #1a1a1a;
                color: #fff;
                margin: 0;
                padding: 20px;
              }
            `;
            newWindow.document.head.appendChild(style);
            
            document.body.removeChild(modal);
          } else {
            alert('Failed to open new window. Please check your browser\'s popup settings.');
          }
        };

        // Event listeners
        modal.querySelector('#close-modal').addEventListener('click', () => {
          document.body.removeChild(modal);
        });

        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            document.body.removeChild(modal);
          }
        });

        modal.querySelector('#url-option').addEventListener('click', () => {
          const url = prompt('Enter the JavaScript URL to inject:', 'https://example.com/script.js');
          if (url) {
            createAboutBlankWithScript(url, true);
          }
        });

        modal.querySelector('#js-option').addEventListener('click', () => {
          const jsCode = prompt('Enter JavaScript code to execute:', 'console.log("Hello from about:blank!");');
          if (jsCode) {
            createAboutBlankWithScript(jsCode, false);
          }
        });

        modal.querySelector('#ocot-option').addEventListener('click', () => {
          const ocotUrl = 'https://cdn.jsdelivr.net/gh/asc2563/ocot-client@latest/dist/bundle.js';
          createAboutBlankWithScript(ocotUrl, true);
        });
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
