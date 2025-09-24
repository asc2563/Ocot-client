import { injectAppCSS } from "../css.js";
import { getPocketBrowserSettings } from "./settings.js";

// Exported function to create the Pocket Browser view
export default function createPocketBrowserView() {
  // Inject shared CSS
  injectAppCSS();

  // Get browser settings with safe defaults
  let browserConfig = null;
  try {
    browserConfig = getPocketBrowserSettings();
  } catch (e) {
    console.warn("Could not load pocket browser settings");
  }

  // Use safe defaults if no settings available
  const browserSettings = browserConfig || {
    homepage: "https://google.com?igu=1",
    enableHistory: true,
    enableBookmarks: true,
    enablePopupBlocker: true,
    enableSafeSearch: false,
    userAgent: "default",
  };

  const pocketBrowserView = document.createElement("div");
  pocketBrowserView.style.cssText = `
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #23272f;
    flex-direction: column;
  `;

  // Initially hide the view
  pocketBrowserView.style.display = "none";

  // Create browser toolbar
  const toolbar = document.createElement("div");
  toolbar.style.cssText = `
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    background: #292d36;
    border-bottom: 1px solid #404040;
  `;

  // Navigation buttons
  const backBtn = document.createElement("button");
  backBtn.innerHTML = "⬅️";
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
  forwardBtn.innerHTML = "➡️";
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
  refreshBtn.innerHTML = "🔄";
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
  homeBtn.innerHTML = "🏠";
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

  // Bookmarks button (conditional based on settings)
  const bookmarksBtn = document.createElement("button");
  bookmarksBtn.innerHTML = "⭐";
  bookmarksBtn.title = "Bookmarks";
  bookmarksBtn.style.cssText = `
    padding: 8px 12px;
    background: #ffc107;
    border: none;
    border-radius: 6px;
    color: #000;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
    display: ${browserSettings.enableBookmarks ? "block" : "none"};
  `;

  // History button (conditional based on settings)
  const historyBtn = document.createElement("button");
  historyBtn.innerHTML = "📋";
  historyBtn.title = "Session History";
  historyBtn.style.cssText = `
    padding: 8px 12px;
    background: #17a2b8;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: background 0.2s;
    display: ${browserSettings.enableHistory ? "block" : "none"};
  `;

  // URL bar
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

  // Go button
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

  // Add hover effects
  const allButtons = [backBtn, forwardBtn, refreshBtn, homeBtn, goBtn];
  if (browserSettings.enableBookmarks) allButtons.push(bookmarksBtn);
  if (browserSettings.enableHistory) allButtons.push(historyBtn);

  allButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      if (btn === refreshBtn) btn.style.background = "#218838";
      else if (btn === homeBtn) btn.style.background = "#5a6268";
      else if (btn === bookmarksBtn) btn.style.background = "#e0a800";
      else if (btn === historyBtn) btn.style.background = "#138496";
      else btn.style.background = "#0056b3";
    });
    btn.addEventListener("mouseleave", () => {
      if (btn === refreshBtn) btn.style.background = "#28a745";
      else if (btn === homeBtn) btn.style.background = "#6c757d";
      else if (btn === bookmarksBtn) btn.style.background = "#ffc107";
      else if (btn === historyBtn) btn.style.background = "#17a2b8";
      else btn.style.background = "#007acc";
    });
  });

  // URL bar focus effect
  urlBar.addEventListener("focus", () => {
    urlBar.style.borderColor = "#007acc";
    urlBar.style.boxShadow = "0 0 0 2px rgba(0, 122, 204, 0.3)";
  });
  urlBar.addEventListener("blur", () => {
    urlBar.style.borderColor = "#404040";
    urlBar.style.boxShadow = "none";
  });

  // Add elements to toolbar
  toolbar.appendChild(backBtn);
  toolbar.appendChild(forwardBtn);
  toolbar.appendChild(refreshBtn);
  toolbar.appendChild(homeBtn);
  if (browserSettings.enableBookmarks) {
    toolbar.appendChild(bookmarksBtn);
  }
  if (browserSettings.enableHistory) {
    toolbar.appendChild(historyBtn);
  }
  toolbar.appendChild(urlBar);
  toolbar.appendChild(goBtn);

  // Create iframe container
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
  pocketBrowserIframe.src = browserSettings.homepage;
  pocketBrowserIframe.style.cssText = `
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  `;

  // Apply user agent settings if specified
  if (browserSettings.userAgent && browserSettings.userAgent !== "default") {
    const userAgentMap = {
      chrome:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      firefox:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/120.0",
      safari:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15",
      mobile:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    };

    if (userAgentMap[browserSettings.userAgent]) {
      // Note: Direct user agent setting in iframe is limited, but we can add sandbox attributes
      pocketBrowserIframe.setAttribute(
        "sandbox",
        "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-navigation"
      );
    }
  }

  // Initialize storage for bookmarks and session history
  let sessionHistoryList = [];
  let bookmarksStorage = [];

  try {
    const savedBookmarks = localStorage.getItem("pocketBrowserBookmarks");
    if (savedBookmarks) {
      bookmarksStorage = JSON.parse(savedBookmarks);
    }
  } catch (e) {
    console.warn("Could not load bookmarks:", e);
    bookmarksStorage = [];
  }

  iframeContainer.appendChild(pocketBrowserIframe);

  // Navigation history
  let history = [browserSettings.homepage];
  let currentIndex = 0;

  function updateUrl(url) {
    // Ensure URL has protocol
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = `https://${url}`;
    }

    // Update iframe
    pocketBrowserIframe.src = url;

    // Update URL bar
    urlBar.value = url;

    // Update navigation history
    if (currentIndex < history.length - 1) {
      // Remove forward history if navigating to new page
      history = history.slice(0, currentIndex + 1);
    }
    history.push(url);
    currentIndex = history.length - 1;

    // Add to session history if enabled
    if (browserSettings.enableHistory) {
      const historyEntry = {
        url: url,
        title: extractDomainFromUrl(url),
        timestamp: new Date().toISOString(),
      };
      sessionHistoryList.unshift(historyEntry);

      // Keep only last 50 entries
      if (sessionHistoryList.length > 50) {
        sessionHistoryList = sessionHistoryList.slice(0, 50);
      }
    }

    updateButtonStates();
  }

  function extractDomainFromUrl(url) {
    try {
      return new URL(url).hostname;
    } catch (e) {
      return url;
    }
  }

  function updateButtonStates() {
    backBtn.disabled = currentIndex <= 0;
    forwardBtn.disabled = currentIndex >= history.length - 1;

    // Update button styles based on disabled state
    backBtn.style.opacity = backBtn.disabled ? "0.5" : "1";
    forwardBtn.style.opacity = forwardBtn.disabled ? "0.5" : "1";
    backBtn.style.cursor = backBtn.disabled ? "not-allowed" : "pointer";
    forwardBtn.style.cursor = forwardBtn.disabled ? "not-allowed" : "pointer";
  }

  // Event listeners
  backBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      const url = history[currentIndex];
      pocketBrowserIframe.src = url;
      urlBar.value = url;
      updateButtonStates();
    }
  });

  forwardBtn.addEventListener("click", () => {
    if (currentIndex < history.length - 1) {
      currentIndex++;
      const url = history[currentIndex];
      pocketBrowserIframe.src = url;
      urlBar.value = url;
      updateButtonStates();
    }
  });

  refreshBtn.addEventListener("click", () => {
    pocketBrowserIframe.src = pocketBrowserIframe.src;
  });

  homeBtn.addEventListener("click", () => {
    updateUrl(browserSettings.homepage);
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

  // Bookmarks functionality
  if (browserSettings.enableBookmarks) {
    bookmarksBtn.addEventListener("click", () => {
      showBookmarksMenu();
    });
  }

  // History functionality
  if (browserSettings.enableHistory) {
    historyBtn.addEventListener("click", () => {
      showSessionHistoryMenu();
    });
  }

  // Bookmarks menu functions
  function showBookmarksMenu() {
    const menu = createDropdownMenu();

    // Add current page to bookmarks option
    const currentUrl = urlBar.value.trim();
    if (currentUrl) {
      const addBookmarkItem = document.createElement("div");
      addBookmarkItem.textContent = "⭐ Bookmark This Page";
      addBookmarkItem.style.cssText = `
        padding: 10px 15px;
        cursor: pointer;
        border-bottom: 1px solid #404040;
        font-weight: 600;
        color: #ffc107;
        background: rgba(255, 193, 7, 0.1);
      `;
      addBookmarkItem.addEventListener("click", () => {
        addBookmark(currentUrl, extractDomainFromUrl(currentUrl));
        document.body.removeChild(menu);
      });
      addBookmarkItem.addEventListener("mouseenter", () => {
        addBookmarkItem.style.background = "rgba(255, 193, 7, 0.2)";
      });
      addBookmarkItem.addEventListener("mouseleave", () => {
        addBookmarkItem.style.background = "rgba(255, 193, 7, 0.1)";
      });
      menu.appendChild(addBookmarkItem);
    }

    // Show existing bookmarks
    if (bookmarksStorage.length > 0) {
      bookmarksStorage.forEach((bookmark, index) => {
        const item = document.createElement("div");
        item.style.cssText = `
          padding: 10px 15px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #404040;
        `;

        const linkInfo = document.createElement("div");
        linkInfo.style.cssText = `
          flex: 1;
          min-width: 0;
        `;

        const title = document.createElement("div");
        title.textContent = bookmark.title || bookmark.url;
        title.style.cssText = `
          color: #fff;
          font-weight: 500;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin-bottom: 2px;
        `;

        const url = document.createElement("div");
        url.textContent = bookmark.url;
        url.style.cssText = `
          color: #aaa;
          font-size: 0.8rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        `;

        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "❌";
        deleteBtn.style.cssText = `
          margin-left: 10px;
          cursor: pointer;
          font-size: 12px;
          opacity: 0.7;
          transition: opacity 0.2s;
        `;

        linkInfo.appendChild(title);
        linkInfo.appendChild(url);

        linkInfo.addEventListener("click", () => {
          updateUrl(bookmark.url);
          document.body.removeChild(menu);
        });

        deleteBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          removeBookmark(index);
          document.body.removeChild(menu);
        });

        deleteBtn.addEventListener("mouseenter", () => {
          deleteBtn.style.opacity = "1";
        });
        deleteBtn.addEventListener("mouseleave", () => {
          deleteBtn.style.opacity = "0.7";
        });

        item.addEventListener("mouseenter", () => {
          item.style.background = "rgba(0, 122, 204, 0.1)";
        });
        item.addEventListener("mouseleave", () => {
          item.style.background = "transparent";
        });

        item.appendChild(linkInfo);
        item.appendChild(deleteBtn);
        menu.appendChild(item);
      });
    } else {
      const emptyItem = document.createElement("div");
      emptyItem.textContent = "No bookmarks yet";
      emptyItem.style.cssText = `
        padding: 20px;
        color: #aaa;
        text-align: center;
        font-style: italic;
      `;
      menu.appendChild(emptyItem);
    }

    positionMenu(menu, bookmarksBtn);
  }

  function showSessionHistoryMenu() {
    const menu = createDropdownMenu();

    if (sessionHistoryList.length > 0) {
      // Show last 15 history entries
      sessionHistoryList.slice(0, 15).forEach((entry) => {
        const item = document.createElement("div");
        item.style.cssText = `
          padding: 10px 15px;
          cursor: pointer;
          border-bottom: 1px solid #404040;
        `;

        const title = document.createElement("div");
        title.textContent = entry.title;
        title.style.cssText = `
          color: #fff;
          font-weight: 500;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          margin-bottom: 4px;
        `;

        const details = document.createElement("div");
        details.style.cssText = `
          display: flex;
          justify-content: space-between;
          align-items: center;
        `;

        const url = document.createElement("span");
        url.textContent = entry.url;
        url.style.cssText = `
          color: #aaa;
          font-size: 0.8rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          flex: 1;
          margin-right: 10px;
        `;

        const time = document.createElement("span");
        time.textContent = new Date(entry.timestamp).toLocaleTimeString();
        time.style.cssText = `
          color: #888;
          font-size: 0.75rem;
        `;

        details.appendChild(url);
        details.appendChild(time);
        item.appendChild(title);
        item.appendChild(details);

        item.addEventListener("click", () => {
          updateUrl(entry.url);
          document.body.removeChild(menu);
        });

        item.addEventListener("mouseenter", () => {
          item.style.background = "rgba(23, 162, 184, 0.1)";
        });
        item.addEventListener("mouseleave", () => {
          item.style.background = "transparent";
        });

        menu.appendChild(item);
      });

      // Add clear history option
      const clearItem = document.createElement("div");
      clearItem.textContent = "🗑️ Clear Session History";
      clearItem.style.cssText = `
        padding: 10px 15px;
        cursor: pointer;
        color: #dc3545;
        font-weight: 600;
        border-top: 2px solid #404040;
        margin-top: 5px;
      `;
      clearItem.addEventListener("click", () => {
        sessionHistoryList = [];
        document.body.removeChild(menu);
      });
      clearItem.addEventListener("mouseenter", () => {
        clearItem.style.background = "rgba(220, 53, 69, 0.1)";
      });
      clearItem.addEventListener("mouseleave", () => {
        clearItem.style.background = "transparent";
      });
      menu.appendChild(clearItem);
    } else {
      const emptyItem = document.createElement("div");
      emptyItem.textContent = "No history for this session";
      emptyItem.style.cssText = `
        padding: 20px;
        color: #aaa;
        text-align: center;
        font-style: italic;
      `;
      menu.appendChild(emptyItem);
    }

    positionMenu(menu, historyBtn);
  }

  function createDropdownMenu() {
    const menu = document.createElement("div");
    menu.style.cssText = `
      position: fixed;
      background: #292d36;
      border: 1px solid #404040;
      border-radius: 8px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
      z-index: 100002;
      min-width: 300px;
      max-width: 450px;
      max-height: 400px;
      overflow-y: auto;
    `;

    // Close menu when clicking outside
    setTimeout(() => {
      const closeHandler = (e) => {
        if (!menu.contains(e.target)) {
          if (document.body.contains(menu)) {
            document.body.removeChild(menu);
          }
          document.removeEventListener("click", closeHandler);
        }
      };
      document.addEventListener("click", closeHandler);
    }, 0);

    return menu;
  }

  function positionMenu(menu, button) {
    const rect = button.getBoundingClientRect();
    menu.style.left = rect.left + "px";
    menu.style.top = rect.bottom + 5 + "px";

    document.body.appendChild(menu);

    // Adjust position if menu goes off screen
    const menuRect = menu.getBoundingClientRect();
    if (menuRect.right > window.innerWidth) {
      menu.style.left = window.innerWidth - menuRect.width - 10 + "px";
    }
    if (menuRect.bottom > window.innerHeight) {
      menu.style.top = rect.top - menuRect.height - 5 + "px";
    }
  }

  function addBookmark(url, title) {
    if (!url) return;

    // Check if bookmark already exists
    const exists = bookmarksStorage.some((bookmark) => bookmark.url === url);
    if (exists) return;

    const bookmark = {
      url: url,
      title: title || extractDomainFromUrl(url),
      timestamp: new Date().toISOString(),
    };

    bookmarksStorage.unshift(bookmark);

    // Keep only last 50 bookmarks
    if (bookmarksStorage.length > 50) {
      bookmarksStorage = bookmarksStorage.slice(0, 50);
    }

    try {
      localStorage.setItem(
        "pocketBrowserBookmarks",
        JSON.stringify(bookmarksStorage)
      );
    } catch (e) {
      console.warn("Could not save bookmarks:", e);
    }
  }

  function removeBookmark(index) {
    bookmarksStorage.splice(index, 1);
    try {
      localStorage.setItem(
        "pocketBrowserBookmarks",
        JSON.stringify(bookmarksStorage)
      );
    } catch (e) {
      console.warn("Could not save bookmarks:", e);
    }
  }

  // Initialize button states
  updateButtonStates();

  // Function to update button visibility based on settings
  function updateButtonVisibility() {
    if (bookmarksBtn) {
      bookmarksBtn.style.display = browserSettings.enableBookmarks
        ? "block"
        : "none";
    }
    if (historyBtn) {
      historyBtn.style.display = browserSettings.enableHistory
        ? "block"
        : "none";
    }
  }

  // Listen for settings changes to update button visibility
  window.addEventListener("storage", (e) => {
    if (e.key === "pocketBrowserSettings") {
      // Reload settings and update button visibility
      const newBrowserSettings = getPocketBrowserSettings();
      Object.assign(browserSettings, newBrowserSettings);
      updateButtonVisibility();
    }
  });

  // Listen for immediate settings changes within the same page
  window.addEventListener("pocketBrowserSettingsChanged", (e) => {
    console.log("Pocket Browser: Settings changed event received", e.detail);
    // Update settings from the event detail
    Object.assign(browserSettings, e.detail);
    updateButtonVisibility();
    console.log("Pocket Browser: Button visibility updated", {
      bookmarks: browserSettings.enableBookmarks,
      history: browserSettings.enableHistory,
    });
  });

  // Initial button visibility setup
  updateButtonVisibility();

  pocketBrowserView.appendChild(toolbar);
  pocketBrowserView.appendChild(iframeContainer);

  return pocketBrowserView;
}
