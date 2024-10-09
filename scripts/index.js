import "./moviesAndSeries.js";
const getData = require("./api.js");
const { renderNav, renderContent } = require("./dom.js");
const darkMode = require("./darkMode.js");
const { newMovie, clear } = require("./newMovie.js");

document.addEventListener("DOMContentLoaded", async () => {
  const navContainer = document.querySelector("#navigation");
  if (navContainer) {
    navContainer.innerHTML = "";
    try {
      renderNav();
    } catch (err) {
      console.error("Error renderizando nav:", err);
    }
  }

  try {
    darkMode();
  } catch (err) {
    console.error("Error en dark mode:", err);
  }

  try {
    const movies = await getData();
    const container = document.querySelector("#cards");
    renderContent(movies, container);
  } catch (err) {
    console.error("Error al renderizar:", err);
  }

  const enviarForm = document.querySelector("#sendForm");
  if (enviarForm) {
    enviarForm.addEventListener("click", newMovie);
  }
  const btnClear = document.querySelector("#clear");
  if (btnClear) {
    btnClear.addEventListener("click", (event) => {
      event.preventDefault();
      clear();
    });
  }
});
