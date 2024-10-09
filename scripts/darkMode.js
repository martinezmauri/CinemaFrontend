const darkMode = () => {
  document.addEventListener("click", () => {
    const darkModeToggle = document.getElementById("flexSwitchCheckDefault");
    const content = document.getElementById("content");
    const nav = document.getElementById("navigation");
    darkModeToggle.addEventListener("change", () => {
      if (darkModeToggle.checked) {
        document.body.classList.add("dark-mode");
        content.classList.add("dark-mode");
        nav.classList.remove("bg-light");
        nav.classList.remove("border-bottom");
        nav.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
        content.classList.remove("dark-mode");
        nav.classList.remove("dark-mode");
        nav.classList.add("bg-light");
      }
    });
  });
};
module.exports = darkMode;
