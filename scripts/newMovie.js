const axios = require("axios");

const newMovie = async (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const genre = document.getElementById("genre").value;
  const rate = document.getElementById("rate").value;
  const poster = document.getElementById("poster").value;

  try {
    await axios.post("http://localhost:3000/movies", {
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
  } catch (error) {
    console.error("Ocurrio un error añadiendo la pelicula.", error);
  }
};
const clear = () => {
  const title = (document.getElementById("title").value = "");
  const year = (document.getElementById("year").value = "");
  const director = (document.getElementById("director").value = "");
  const duration = (document.getElementById("duration").value = "");
  const genre = (document.getElementById("genre").value = "");
  const rate = (document.getElementById("rate").value = "");
  const poster = (document.getElementById("poster").value = "");
};

module.exports = { newMovie, clear };
