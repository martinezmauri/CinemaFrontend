const renderNav = () => {
  const nav = document.querySelector("#navigation");
  nav.innerHTML = ``;
  const baseUrl =
    window.location.pathname === "/PM2-martinezmauri/front/index.html"
      ? "./pages"
      : "../pages";

  const urlInicio =
    window.location.pathname === "/PM2-martinezmauri/front/index.html"
      ? "#"
      : "../index.html";
  const urlRecommended = `${baseUrl}/recommended.html`;
  const urlUpcoming = `${baseUrl}/upcoming.html`;
  const urlSeries = `${baseUrl}/series.html`;

  nav.innerHTML = "";
  nav.innerHTML = `<div class="container-fluid">
      <a class="navbar-brand mx-5 navbar-link" href="${urlInicio}"
        >Inicio</a>
      <div class="collapse navbar-collapse d-flex justify-content-center">
        <div class="navbar-nav">
          <a class="nav-link active mx-5 navbar-link" href="${urlRecommended}"
            >Peliculas Recomendadas</a
          >
          <a class="nav-link active mx-5 navbar-link" href="${urlUpcoming}"
            >Proximos Lanzamientos</a
          >
          <a class="nav-link active mx-5 navbar-link" href="${urlSeries}"
            >Series Recomendadas</a
          >
        </div>
        <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
      <label class="form-check-label" for="flexSwitchCheckDefault">Modo Oscuro</label>
  </div>
      </div>
      </div>`;
};

const renderContent = (films, container) => {
  container.innerHTML = films
    .map(
      (movie) => `
      <div class="card shadow movement">
        <div class="col">
          <h3 class="card-title text-center text-break">${movie.title}</h3>
          <img src="${movie.poster}" class="card-img-top" alt="${movie.title}" />
          <ul class="list-group list-group-flush">
            <li id="description" class="list-group-item"><span class="fw-bold">Director:</span> ${movie.director}</li>
            <li id="description" class="list-group-item"><span class="fw-bold">Duracion:</span> ${movie.duration}</li>
            <li id="description" class="list-group-item border-bottom"><span class="fw-bold">Puntaje:</span> ${movie.rate}</li>
          </ul>
        </div>
      </div>
    `
    )
    .join("");
};
module.exports = { renderNav, renderContent };
