// Exported function to create the Cloaking view
export default function createCloakingView() {
  const cloakingView = document.createElement("div");
  cloakingView.style.width = "100%";
  cloakingView.style.height = "100%";
  cloakingView.style.display = "none";
  cloakingView.style.backgroundColor = "#f0f0f0";
  cloakingView.style.color = "#333";
  cloakingView.style.padding = "20px";
  cloakingView.style.fontFamily = "Arial, sans-serif";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Enter new tab title";
  titleInput.style.width = "100%";
  titleInput.style.marginBottom = "10px";
  titleInput.style.padding = "10px";
  titleInput.style.border = "1px solid #ccc";
  titleInput.style.borderRadius = "4px";

  const iconInput = document.createElement("input");
  iconInput.type = "text";
  iconInput.placeholder = "Enter new tab icon URL";
  iconInput.style.width = "100%";
  iconInput.style.marginBottom = "10px";
  iconInput.style.padding = "10px";
  iconInput.style.border = "1px solid #ccc";
  iconInput.style.borderRadius = "4px";

  const applyButton = document.createElement("button");
  applyButton.textContent = "Apply Changes";
  applyButton.style.padding = "10px";
  applyButton.style.backgroundColor = "#007acc";
  applyButton.style.color = "#ffffff";
  applyButton.style.border = "none";
  applyButton.style.borderRadius = "4px";
  applyButton.style.cursor = "pointer";

  applyButton.addEventListener("click", () => {
    const newTitle = titleInput.value;
    const newIcon = iconInput.value;

    function gcloak() {
      const link =
        document.querySelector("link[rel*='icon']") ||
        document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      link.href = newIcon || "default-icon.png";
      document.title = newTitle || "Default Title";
      document.getElementsByTagName("head")[0].appendChild(link);
    }

    gcloak();
    setInterval(gcloak, 1000);
  });

  cloakingView.appendChild(titleInput);
  cloakingView.appendChild(iconInput);
  cloakingView.appendChild(applyButton);

  return cloakingView;
}
