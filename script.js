const container = document.querySelector(".container");
const toggleThemeBtn = document.querySelector(".toggle-theme-btn");

function toggleTheme() {
  document.body.classList.toggle("dark");
  toggleThemeBtn.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

if (localStorage.getItem("theme") === "dark") {
  toggleTheme();
}

toggleThemeBtn.addEventListener("click", toggleTheme);
