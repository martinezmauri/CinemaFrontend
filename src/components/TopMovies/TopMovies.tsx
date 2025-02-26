import React from "react";
import movies from "../../helpers/movies.json";
type Movie = {
  nombre: string;
  imagen: string;
  genero: string;
  rate: number;
};

export const TopMovies = () => {
  const topMovies = [...movies]
    .sort((a: Movie, b: Movie) => b.rate - a.rate)
    .slice(0, 6);
  return (
    <div className="px-20 pt-10">
      <h2 className="text-2xl font-bold">Explore Top Movies</h2>
      <ul className="flex overflow-x-auto space-x-6 pt-8">
        {topMovies.map((movie) => (
          <li key={movie.nombre} className="">
            <img
              src={movie.imagen}
              alt={movie.nombre}
              className="w-full h-64 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold">{movie.nombre}</h3>
            <p className="text-gray-500">Género: {movie.genero}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
