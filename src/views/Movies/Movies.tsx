import React from "react";
import { NavbarHome } from "../../components/Navbar/NavbarHome";
import { Footer } from "../../components/Footer/Footer";
import movies from "../../helpers/movies.json";
import { BurgerIcon } from "../../components/Burger-icon/BurgerIcon";

export const Movies = () => {
  const handleErrorImage = () => {};
  return (
    <main>
      <div className="custom-bg px-10 pb-10">
        <NavbarHome />
        <div className="bg-content-page text-white  rounded-xl pb-20">
          <div className="p-10">
            <BurgerIcon />
            <h1 className="text-center text-6xl font-bold p-10">Películas</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6 px-6">
            {movies.map((movie, index) => (
              <div key={index} className="border rounded-lg flex flex-col w-50">
                <img
                  src={movie.imagen}
                  alt=""
                  className="rounded-lg object-cover w-full h-full"
                  onError={handleErrorImage}
                />
                <div className="">
                  <h2 className="text-lg font-bold text-center">
                    {movie.nombre}
                  </h2>
                  <p className="text-sm text-center">{movie.genero}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
