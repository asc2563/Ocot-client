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
      
      /* Auto-hide script states */
      .script-item.auto-hide-enabled {
        background: linear-gradient(135deg, #1a4f3a, #2d5a42);
        border: 2px solid #28a745;
        box-shadow: 0 4px 16px 0 rgba(40, 167, 69, 0.3);
      }
      
      .script-item.auto-hide-enabled:hover {
        background: linear-gradient(135deg, #1e5d47, #326349);
        box-shadow: 0 6px 20px 0 rgba(40, 167, 69, 0.4);
        transform: translateY(-2px) scale(1.03);
      }
      
      .script-item.auto-hide-enabled .script-title::before {
        content: "🔒 ";
        color: #28a745;
      }
      
      .script-item.auto-hide-disabled {
        background: #292d36;
        border: 2px solid transparent;
      }
      
      .script-item.auto-hide-disabled .script-title::before {
        content: "🔓 ";
        color: #6c757d;
      }
      
      .script-item .status-indicator {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-left: 8px;
        animation: pulse 2s infinite;
      }
      
      .script-item.auto-hide-enabled .status-indicator {
        background: #28a745;
        box-shadow: 0 0 6px rgba(40, 167, 69, 0.6);
      }
      
      .script-item.auto-hide-disabled .status-indicator {
        background: #6c757d;
        animation: none;
      }
      
      @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  const scriptsView = document.createElement("div");
  scriptsView.className = "scripts-view";

  // Function to update auto-hide visual state
  function updateAutoHideVisualState(itemElement, isEnabled) {
    if (!itemElement) return;

    const titleElement = itemElement.querySelector(".script-title");
    const descElement = itemElement.querySelector(".script-desc");
    const statusIndicator =
      itemElement.querySelector(".status-indicator") ||
      document.createElement("span");

    if (isEnabled) {
      itemElement.className = "script-item auto-hide-enabled";
      titleElement.textContent = "Auto-Hide Script (ON)";
      descElement.textContent =
        "Auto-hide is ACTIVE - will hide when switching tabs or clicking away.";
      statusIndicator.className = "status-indicator";
      statusIndicator.title = "Auto-hide is currently enabled";
    } else {
      itemElement.className = "script-item auto-hide-disabled";
      titleElement.textContent = "Auto-Hide Script (OFF)";
      descElement.textContent =
        "Click to enable automatic hiding when switching tabs.";
      statusIndicator.className = "status-indicator";
      statusIndicator.title = "Auto-hide is currently disabled";
    }

    // Add status indicator if not already present
    if (!titleElement.querySelector(".status-indicator")) {
      titleElement.appendChild(statusIndicator);
    }
  }

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
      isAutoHide: true, // Special flag to identify this script for dynamic updates
      onClick: () => {
        // Find the auto-hide script item and update it
        const autoHideItem = document.querySelector(
          '.script-item[data-script="auto-hide"]'
        );

        // Check if auto-hide is already enabled
        if (window.autoHideEnabled) {
          // Disable auto-hide
          window.removeEventListener("blur", window.autoHideBlurHandler);
          window.autoHideEnabled = false;

          // Update the visual state
          updateAutoHideVisualState(autoHideItem, false);

          alert(
            "🔓 Auto-hide disabled!\n\nThe Ocot Client will no longer automatically hide when you switch tabs or click away. You can manually hide it using the Hide App button or the backslash (\\) key."
          );
          return;
        }

        // Enable auto-hide
        window.autoHideBlurHandler = () => {
          // Use setTimeout to allow DOM to update before checking activeElement
          setTimeout(() => {
            // Check if the blur was caused by focusing on an internal iframe
            const activeElement = document.activeElement;
            
            // Helper function to check if element is an internal iframe
            const isInternalIframe = (element) => {
              if (!element || element.tagName !== 'IFRAME') {
                return false;
              }
              
              // Check if it's one of our internal iframes
              const internalIframeIds = ['ocot-proxy-iframe', 'ocot-pocket-browser-iframe'];
              return internalIframeIds.includes(element.id);
            };
            
            // Don't hide if focus moved to an internal iframe
            if (isInternalIframe(activeElement)) {
              return;
            }
            
            // Hide the proxy client when window loses focus (tab switch)
            if (window.proxyFrame && window.proxyFrame.style.display !== "none") {
              // Use the app's built-in hide method if available
              if (
                window.proxyClientApp &&
                typeof window.proxyClientApp.hideProxyClient === "function"
              ) {
                window.proxyClientApp.hideProxyClient();
              } else {
                // Fallback method
                window.proxyFrame.style.display = "none";
                const floatingButton = document.querySelector(
                  '[title*="Show Ocot Client"]'
                );
                if (floatingButton) {
                  floatingButton.style.display = "flex";
                }
              }
            }
          }, 0);
        };

        // Add event listeners
        window.addEventListener("blur", window.autoHideBlurHandler);

        window.autoHideEnabled = true;

        // Update the visual state
        updateAutoHideVisualState(autoHideItem, true);

        alert(
          "🔒 Auto-hide enabled!\n\nThe Ocot Client is now set to automatically hide when you:\n• Switch to another tab\n• Click outside the application\n\nNOTE: It will NOT hide immediately when you click this button - only when you switch tabs or click away. Click this script again to disable auto-hide."
        );
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
        buttons.forEach((button) => {
          button.addEventListener("mouseenter", () => {
            button.style.background = "#2d323e";
            button.style.borderColor = "#007acc";
            button.style.transform = "translateY(-2px)";
          });
          button.addEventListener("mouseleave", () => {
            button.style.background = "#292d36";
            button.style.borderColor = "#404040";
            button.style.transform = "translateY(0)";
          });
        });

        document.body.appendChild(modal);

        // Function to show code editor modal
        const showCodeEditorModal = (executeCallback) => {
          const codeModal = document.createElement("div");
          codeModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 100002;
          `;

          codeModal.innerHTML = `
            <div style="background: #23272f; padding: 24px; border-radius: 10px; width: 90%; max-width: 700px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                <h2 style="color: #00bfff; margin: 0; font-size: 1.5rem;">JavaScript Code Editor</h2>
                <button id="close-code-modal" style="background: none; border: none; color: #aaa; font-size: 24px; cursor: pointer; padding: 0; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center;">&times;</button>
              </div>
              
              <p style="color: #aaa; margin-bottom: 16px; line-height: 1.4;">
                Write your JavaScript code below. It will be executed in a new about:blank page.
              </p>
              
              <textarea id="js-code-input" placeholder="// Write your JavaScript code here...
console.log('Hello from about:blank!');
alert('Code executed successfully!');

// Examples:
// - DOM manipulation
// - API calls  
// - Custom functions
// - Variable declarations" 
                        style="width: 100%; height: 300px; padding: 16px; margin-bottom: 16px; 
                               background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; 
                               color: #d4d4d4; font-size: 14px; font-family: 'Consolas', 'Courier New', 'Monaco', monospace; 
                               resize: vertical; outline: none; line-height: 1.5; tab-size: 2;"></textarea>
              
              <div style="display: flex; gap: 12px; justify-content: flex-end;">
                <button id="cancel-code-btn" style="padding: 12px 24px; background: #404040; border: none; border-radius: 6px; color: white; cursor: pointer; font-size: 1rem;">Cancel</button>
                <button id="execute-code-btn" style="padding: 12px 24px; background: #007acc; border: none; border-radius: 6px; color: white; cursor: pointer; font-size: 1rem;">Execute</button>
              </div>
            </div>
          `;

          document.body.appendChild(codeModal);

          const codeTextarea = codeModal.querySelector("#js-code-input");
          const cancelBtn = codeModal.querySelector("#cancel-code-btn");
          const executeBtn = codeModal.querySelector("#execute-code-btn");
          const closeBtn = codeModal.querySelector("#close-code-modal");

          // Focus on the textarea
          codeTextarea.focus();

          // Handle textarea styling for better code editing
          codeTextarea.addEventListener("focus", () => {
            codeTextarea.style.borderColor = "#007acc";
            codeTextarea.style.boxShadow = "0 0 0 2px rgba(0, 122, 204, 0.3)";
          });

          codeTextarea.addEventListener("blur", () => {
            codeTextarea.style.borderColor = "#404040";
            codeTextarea.style.boxShadow = "none";
          });

          // Handle Tab key for proper indentation
          codeTextarea.addEventListener("keydown", (e) => {
            if (e.key === "Tab") {
              e.preventDefault();
              const start = codeTextarea.selectionStart;
              const end = codeTextarea.selectionEnd;

              // Insert tab character
              codeTextarea.value =
                codeTextarea.value.substring(0, start) +
                "  " +
                codeTextarea.value.substring(end);
              codeTextarea.selectionStart = codeTextarea.selectionEnd =
                start + 2;
            }
          });

          // Event handlers
          const closeModal = () => {
            document.body.removeChild(codeModal);
          };

          cancelBtn.onclick = closeModal;
          closeBtn.onclick = closeModal;

          executeBtn.onclick = () => {
            const jsCode = codeTextarea.value.trim();
            if (!jsCode) {
              alert("Please enter some JavaScript code to execute.");
              return;
            }

            // Execute the code using the callback
            executeCallback(jsCode, false);
            closeModal();
          };

          // Close modal when clicking outside
          codeModal.onclick = (e) => {
            if (e.target === codeModal) {
              closeModal();
            }
          };

          // Handle Enter key in textarea (Ctrl+Enter to execute)
          codeTextarea.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
              e.preventDefault();
              executeBtn.click();
            }
          });
        };

        // Helper function to create about:blank window and inject script with robust error handling
        const createAboutBlankWithScript = (scriptContent, isUrl = false) => {
          const newWindow = window.open("about:blank", "_blank");
          if (!newWindow) {
            alert(
              "Failed to open new window. Please check your browser's popup settings."
            );
            return;
          }

          // Wait for the new window's document to be ready
          const initializeWindow = () => {
            try {
              // Add comprehensive styling to the page
              const style = newWindow.document.createElement("style");
              style.textContent = `
                body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  background: #1a1a1a;
                  color: #fff;
                  margin: 0;
                  padding: 20px;
                  line-height: 1.6;
                }
                .status-container {
                  background: #292d36;
                  border-radius: 8px;
                  padding: 16px;
                  margin-bottom: 20px;
                  border-left: 4px solid #00bfff;
                }
                .status-title {
                  font-weight: 600;
                  color: #00bfff;
                  margin-bottom: 8px;
                }
                .status-message {
                  color: #aaa;
                  font-size: 0.9rem;
                }
                .success { border-left-color: #28a745; }
                .success .status-title { color: #28a745; }
                .error { border-left-color: #dc3545; }
                .error .status-title { color: #dc3545; }
                .warning { border-left-color: #ffc107; }
                .warning .status-title { color: #ffc107; }
                .code-block {
                  background: #1e2126;
                  border-radius: 4px;
                  padding: 12px;
                  margin: 8px 0;
                  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
                  font-size: 0.85rem;
                  border: 1px solid #404040;
                  overflow-x: auto;
                }
                .timestamp {
                  color: #666;
                  font-size: 0.8rem;
                }
              `;
              newWindow.document.head.appendChild(style);

              // Create status container
              const statusContainer = newWindow.document.createElement("div");
              statusContainer.innerHTML = `
                <div class="status-container" id="injection-status">
                  <div class="status-title">🔄 Script Injection Status</div>
                  <div class="status-message">Initializing script injection...</div>
                </div>
              `;
              newWindow.document.body.appendChild(statusContainer);

              const updateStatus = (title, message, type = "info") => {
                const status =
                  newWindow.document.getElementById("injection-status");
                if (status) {
                  status.className = `status-container ${type}`;
                  status.innerHTML = `
                    <div class="status-title">${title}</div>
                    <div class="status-message">${message}</div>
                    <div class="timestamp">Last updated: ${new Date().toLocaleTimeString()}</div>
                  `;
                }
              };

              // Script injection with comprehensive error handling
              const injectScript = () => {
                try {
                  const script = newWindow.document.createElement("script");

                  if (isUrl) {
                    // Handle external script URL
                    updateStatus(
                      "🔗 Loading External Script",
                      `Fetching: ${scriptContent}`
                    );

                    script.src = scriptContent;

                    // Set up timeout for script loading
                    const timeoutId = setTimeout(() => {
                      updateStatus(
                        "⏰ Script Load Timeout",
                        `Script failed to load within 10 seconds. This may be due to network issues or CORS restrictions.<br><br>
                        <strong>Troubleshooting:</strong><br>
                        • Check if the URL is accessible<br>
                        • Verify CORS headers allow cross-origin requests<br>
                        • Try a different script URL<br><br>
                        <div class="code-block">URL: ${scriptContent}</div>`,
                        "warning"
                      );
                    }, 10000);

                    // Success handler
                    script.onload = () => {
                      clearTimeout(timeoutId);
                      updateStatus(
                        "✅ Script Loaded Successfully",
                        `External script has been loaded and executed successfully.<br><br>
                        <div class="code-block">URL: ${scriptContent}</div>
                        <br>Check the browser console for any script output.`,
                        "success"
                      );
                    };

                    // Error handler
                    script.onerror = (event) => {
                      clearTimeout(timeoutId);
                      updateStatus(
                        "❌ Script Load Failed",
                        `Failed to load external script. This is likely due to:<br><br>
                        <strong>Common causes:</strong><br>
                        • CORS (Cross-Origin Resource Sharing) restrictions<br>
                        • Network connectivity issues<br>
                        • Invalid or inaccessible URL<br>
                        • Server-side blocking of cross-origin requests<br><br>
                        <div class="code-block">URL: ${scriptContent}</div>
                        <br><strong>Suggestion:</strong> Try copying the script content and using 'Direct JavaScript Code' option instead.`,
                        "error"
                      );
                    };
                  } else {
                    // Handle inline JavaScript code
                    updateStatus(
                      "📝 Executing Inline Script",
                      "Processing JavaScript code..."
                    );

                    try {
                      // Validate and execute inline script
                      script.textContent = scriptContent;

                      // Add error handling wrapper for inline scripts
                      const wrappedScript =
                        newWindow.document.createElement("script");
                      wrappedScript.textContent = `
                        try {
                          ${scriptContent}
                          console.log('✅ Inline script executed successfully');
                        } catch (error) {
                          console.error('❌ Script execution error:', error);
                          const statusEl = document.getElementById('injection-status');
                          if (statusEl) {
                            statusEl.className = 'status-container error';
                            statusEl.innerHTML = \`
                              <div class="status-title">❌ Script Execution Error</div>
                              <div class="status-message">
                                JavaScript execution failed:<br><br>
                                <div class="code-block">\${error.name}: \${error.message}</div>
                                <br>Please check your JavaScript syntax and try again.
                              </div>
                              <div class="timestamp">Last updated: \${new Date().toLocaleTimeString()}</div>
                            \`;
                          }
                        }
                      `;

                      newWindow.document.head.appendChild(wrappedScript);

                      updateStatus(
                        "✅ Script Executed Successfully",
                        `Inline JavaScript code has been executed.<br><br>
                        <div class="code-block">${
                          scriptContent.length > 200
                            ? scriptContent.substring(0, 200) + "..."
                            : scriptContent
                        }</div>
                        <br>Check the browser console for any script output.`,
                        "success"
                      );
                    } catch (error) {
                      updateStatus(
                        "❌ Script Preparation Failed",
                        `Failed to prepare script for execution:<br><br>
                        <div class="code-block">${error.name}: ${error.message}</div>
                        <br>Please check your JavaScript syntax.`,
                        "error"
                      );
                    }
                  }

                  // Append script to head for URL-based scripts
                  if (isUrl) {
                    newWindow.document.head.appendChild(script);
                  }
                } catch (error) {
                  updateStatus(
                    "❌ Injection Failed",
                    `Critical error during script injection:<br><br>
                    <div class="code-block">${error.name}: ${error.message}</div>
                    <br>This may indicate a browser security restriction or internal error.`,
                    "error"
                  );
                }
              };

              // Start script injection
              setTimeout(injectScript, 100); // Small delay to ensure DOM is ready
            } catch (error) {
              // Fallback error handling if window initialization fails
              newWindow.document.body.innerHTML = `
                <div style="font-family: Arial, sans-serif; padding: 20px; background: #1a1a1a; color: #fff;">
                  <h2 style="color: #dc3545;">❌ Initialization Failed</h2>
                  <p>Failed to initialize the injection environment:</p>
                  <pre style="background: #2d2d2d; padding: 10px; border-radius: 4px;">${error.message}</pre>
                </div>
              `;
            }
          };

          // Wait for new window to be ready
          if (newWindow.document.readyState === "loading") {
            newWindow.document.addEventListener(
              "DOMContentLoaded",
              initializeWindow
            );
          } else {
            // Document is already ready
            setTimeout(initializeWindow, 50);
          }

          // Close modal after successful window creation
          document.body.removeChild(modal);
        };

        // Event listeners
        modal.querySelector("#close-modal").addEventListener("click", () => {
          document.body.removeChild(modal);
        });

        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            document.body.removeChild(modal);
          }
        });

        modal.querySelector("#url-option").addEventListener("click", () => {
          const url = prompt(
            "Enter the JavaScript URL to inject:",
            "https://example.com/script.js"
          );
          if (url) {
            createAboutBlankWithScript(url, true);
          }
        });

        modal.querySelector("#js-option").addEventListener("click", () => {
          // Close the choice modal first
          document.body.removeChild(modal);

          // Show the code editor modal
          showCodeEditorModal(createAboutBlankWithScript);
        });

        modal.querySelector("#ocot-option").addEventListener("click", () => {
          const ocotUrl =
            "https://cdn.jsdelivr.net/gh/asc2563/ocot-client@2.2.6/dist/bundle.js";
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

    // Special handling for auto-hide script
    if (action.isAutoHide) {
      item.setAttribute("data-script", "auto-hide");
      const isEnabled = window.autoHideEnabled || false;

      // Set initial state based on current auto-hide status
      item.innerHTML = `
        <div class="script-title">${
          isEnabled ? "Auto-Hide Script (ON)" : "Auto-Hide Script (OFF)"
        }</div>
        <div class="script-desc">${
          isEnabled
            ? "Auto-hide is ACTIVE - will hide when switching tabs or clicking away."
            : "Click to enable automatic hiding when switching tabs."
        }</div>
      `;

      // Apply initial visual state
      updateAutoHideVisualState(item, isEnabled);
    } else {
      item.innerHTML = `
        <div class="script-title">${action.title}</div>
        <div class="script-desc">${action.desc}</div>
      `;
    }

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
