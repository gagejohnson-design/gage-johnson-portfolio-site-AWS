const updateAwsLogo = (theme) => {
  const logo = document.getElementById("aws-logo");
  if (!logo) return;

  logo.src =
    theme === "dark"
      ? "https://d0.awsstatic.com/logos/powered-by-aws-white.png"
      : "https://d0.awsstatic.com/logos/powered-by-aws.png";
};

const updateThemeIcon = (theme) => {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;

  icon.textContent = theme === "dark" ? "🌙" : "☀️";
};

const applyTheme = (theme) => {
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
  updateAwsLogo(theme);
  updateThemeIcon(theme);
};

const getPreferredTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const toggleTheme = () => {
  const current = document.body.classList.contains("dark") ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
};

window.addEventListener("DOMContentLoaded", () => {
  applyTheme(getPreferredTheme());
});
