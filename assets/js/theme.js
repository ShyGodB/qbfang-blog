(() => {
  const storageKey = "qbfang-theme";
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  const themeColor = document.querySelector("[data-theme-color]");

  if (!toggle) return;

  const applyTheme = (theme, persist = false) => {
    const isDark = theme === "dark";
    root.dataset.theme = isDark ? "dark" : "light";
    toggle.setAttribute("aria-label", isDark ? "切换到白天模式" : "切换到夜间模式");
    toggle.setAttribute("title", isDark ? "切换到白天模式" : "切换到夜间模式");
    toggle.setAttribute("aria-pressed", String(isDark));

    if (themeColor) {
      themeColor.setAttribute("content", isDark ? "#181715" : "#ffffff");
    }

    if (persist) {
      try {
        localStorage.setItem(storageKey, isDark ? "dark" : "light");
      } catch (_) {}
    }
  };

  applyTheme(root.dataset.theme);

  toggle.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });
})();
