# Copilot Instructions for Ocot Client

## Project Overview

Ocot Client is a web-based application that provides various functionalities including proxy operations, privacy tools, developer utilities, and productivity features. The application is built with vanilla JavaScript and uses a modular view-based architecture.

## Key Features

- **Proxy View**: Access and manage proxy operations
- **Privacy & Security Tools**: Tab cloaking, history manipulation, CORS proxying
- **Developer Tools**: JavaScript console, calculator, notes, bookmarklets
- **Games Collection**: Access to blocked/unblocked games
- **Pocket Browser**: Embedded browser with privacy features
- **Scripts**: Collection of useful JavaScript utilities

## Key Application Characteristics

### Single-Page Application (SPA)
- Uses `ProxyClientApp` class as main application controller
- Views are dynamically created and switched via sidebar navigation
- No external routing library - custom view management system

### Modular View System
- Each view is a self-contained module returning DOM elements
- Views handle their own styling via CSS injection
- Event listeners are attached within view creation functions
- State management through local storage and DOM manipulation

### Launch Methods
- **File mode**: Direct HTML file opening (`index.html`)
- **Bookmarklet injection**: Can be injected into any webpage
- **CDN distribution**: Available via jsDelivr for remote loading

## Architecture & Code Style

### Project Structure
```
src/
├── main.js              # Application entry point with ProxyClientApp class
├── sidebar.js           # ProxySidebar class for navigation
├── css.js               # Shared CSS injection utilities
├── styles/              # CSS stylesheets
├── views/               # Individual view modules
│   ├── welcome.js       # Landing page view
│   ├── settings.js      # Settings and help view
│   ├── console.js       # JavaScript console tool
│   ├── calculator.js    # Calculator utility
│   ├── notes.js         # Note-taking tool
│   ├── scripts.js       # JavaScript utilities collection
│   ├── proxy.js         # Proxy functionality
│   ├── games.js         # Games collection
│   ├── bookmarklets.js  # Bookmarklets collection
│   ├── cloaking.js      # Tab cloaking features
│   ├── historyFlood.js  # History manipulation
│   ├── corsProxy.js     # CORS proxy utilities
│   └── pocketBrowser.js # Embedded browser
└── utils/
    └── helpers.js       # Shared utility functions
```

### Coding Standards

1. **ES6 Modules**: Use ES6 import/export syntax
2. **Vanilla JavaScript**: No external frameworks, keep dependencies minimal
3. **Function Exports**: Each view exports a default function that returns DOM elements
4. **CSS-in-JS**: Use template literals for inline styles, consistent with existing patterns
5. **Event Handling**: Attach event listeners within view creation functions
6. **Local Storage**: Use for persistent data (themes, notes, settings)

### View Pattern
```javascript
// Standard view module pattern
export default function createViewName() {
  // CSS injection if needed
  if (!document.getElementById("view-style")) {
    const style = document.createElement("style");
    style.id = "view-style";
    style.textContent = `/* CSS styles */`;
    document.head.appendChild(style);
  }

  // Create and return DOM element
  const viewElement = document.createElement("div");
  viewElement.innerHTML = `/* HTML template */`;
  
  // Add event listeners
  // Return element
  return viewElement;
}
```

## Development Environment

### Setup
```bash
npm install          # Install dependencies
npm run build        # Build with esbuild
npm start           # Start local server on port 8080
```

### Build System
- **Bundler**: esbuild (fast, minimal configuration)
- **Output**: Single bundle file at `dist/bundle.js`
- **Format**: IIFE (Immediately Invoked Function Expression)
- **Entry**: `src/main.js`

### Testing
- **Framework**: Jest (configured but tests may be minimal)
- **Command**: `npm test`
- **Focus**: Functionality over extensive testing due to UI-heavy nature

## UI/UX Guidelines

### Design System
- **Theme**: Dark theme with blue (#00bfff) accents
- **Colors**: 
  - Background: #23272f, #292d36
  - Text: #fff, #d4d4d4, #aaa
  - Accent: #00bfff
  - Success: Green tones
  - Error: Red tones
- **Typography**: System fonts, monospace for code
- **Layout**: CSS Grid and Flexbox for responsive design

### Component Patterns
- Card-based layouts for feature groupings
- Consistent padding and spacing (12px, 16px, 24px)
- Hover effects with subtle animations
- Keyboard shortcuts support (backslash key to toggle)

## Browser Compatibility

- **Target**: Modern browsers with ES6 support
- **Deployment**: Can run as standalone HTML file or via CDN
- **Bookmarklet**: Supports injection via bookmarklet for any website

## Security Considerations

- **Content Security**: Be mindful of XSS when handling user input
- **Proxy Features**: Understand CORS implications
- **Local Storage**: Sensitive data should be handled carefully
- **Script Execution**: Console and scripts features execute arbitrary JavaScript

## Common Tasks

### Adding a New View
1. Create new file in `src/views/newview.js`
2. Follow the standard view pattern
3. Export default function that returns DOM element
4. Import the view in `src/main.js`
5. Add view creation in `ProxyClientApp.setupViews()`
6. Add navigation button in `ProxySidebar.addNavigationButtons()`
7. Add view switching logic in button event handlers

### Styling Guidelines
- Use inline styles for component-specific styling
- Inject global styles via CSS-in-JS pattern
- Maintain consistency with existing color scheme
- Ensure responsive design with CSS Grid/Flexbox

### Local Storage Usage
- Theme preferences: `ocot-theme`
- Notes content: Auto-saved keys
- Settings: Prefix with `ocot-` for namespace

## Contributing Guidelines

- **Minimal Dependencies**: Avoid adding new dependencies unless absolutely necessary
- **Backward Compatibility**: Maintain compatibility with existing bookmarklet users
- **Performance**: Keep bundle size reasonable for web distribution
- **Cross-Platform**: Ensure features work across different browsers and contexts

## Deployment

The application supports multiple deployment methods:
1. **File-based**: Open `index.html` directly
2. **CDN**: Via jsDelivr from GitHub releases
3. **Bookmarklet**: Injected into any webpage
4. **Local Server**: Using npm start for development

## Special Considerations

- **Context Awareness**: Application may run in various contexts (standalone, injected)
- **No External APIs**: Designed to work without external service dependencies
- **Privacy Focus**: Many features are designed for privacy and security
- **Educational Purpose**: Some features demonstrate web development concepts