import React from "react";
import { NavbarHome } from "../../components/Navbar/NavbarHome";
import { Footer } from "../../components/Footer/Footer";
import movies from "../../helpers/movies.json";

export const Movies = () => {
  return (
    <main>
      <div className="custom-bg px-10 pb-10">
        <NavbarHome />
        <div className="bg-content-page text-white pt-20 rounded-xl pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
            {movies.map((movie, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 bg-gray-800 flex flex-col items-center "
              >
                <h1 className="text-xl font-semibold">{movie.nombre}</h1>
                <img
                  src={movie.imagen}
                  alt=""
                  className="w-60 h-80 rounded-lg  mb-4"
                />
                <p className="text-gray-300">Genero: {movie.genero}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
