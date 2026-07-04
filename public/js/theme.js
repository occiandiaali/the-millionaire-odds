// ── Wealth Clock — Theme Toggle ──
(function () {
  const STORAGE_KEY = "wc-theme";

  function getPreferred() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("themeToggle");
    if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Apply immediately to avoid flash
  applyTheme(getPreferred());

  window.toggleTheme = function () {
    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    applyTheme(current === "dark" ? "light" : "dark");
  };

  // Re-apply once DOM is ready (updates button label)
  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(getPreferred());
  });
})();
