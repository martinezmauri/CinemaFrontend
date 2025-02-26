import React from "react";
import movies from "../../helpers/movies.json";

export const GenresMovies = () => {
  return (
    <main className="px-20 pt-20 pb-20">
      <h1 className="text-2xl font-bold text-center">Movie Genres</h1>
      <div className="flex gap-8 pt-10">
        {movies.map((movie) => (
          <button className="border border-transparent custom-bg-button rounded-lg p-2 ">
            {movie.genero}
          </button>
        ))}
      </div>
    </main>
  );
};
