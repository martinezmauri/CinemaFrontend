const { popularSeries, popularMovies } = require("./data");

const renderCards = (movies, container, duracionText, duracionKey) => {
  container.innerHTML = "";
  movies.forEach((film) => {
    let div = document.createElement("div");
    div.classList.add("card", "shadow", "movement", "col", "mb-4");
    div.innerHTML = `<h3 class="card-title text-center text-break">
      ${film.title}
    </h3>
    <img
      src="${film.poster}"
      class="card-img-top"
      alt=""
    />
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><span class="fw-bold">Director:</span> ${film.director}</li>
      <li class="list-group-item"><span class="fw-bold">${duracionText}:</span> ${film[duracionKey]}</li>
      <li class="list-group-item border-bottom"><span class="fw-bold">Puntaje:</span> ${film.rate}</li>
    </ul>`;
    container.appendChild(div);
  });
};

const path = window.location.pathname;
let container;
let movies;
let duracionText;
let duracionKey;

if (path.endsWith("/recommended.html")) {
  container = document.querySelector("#movie-pop");
  movies = popularMovies;
  duracionText = "Duracion";
  duracionKey = "duration";
} else if (path.endsWith("/series.html")) {
  container = document.querySelector("#series-pop");
  movies = popularSeries;
  duracionText = "Temporadas";
  duracionKey = "seasons";
}

if (container) {
  renderCards(movies, container, duracionText, duracionKey);
}
