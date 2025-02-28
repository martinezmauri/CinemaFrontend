import React from "react";
import { NavbarHome } from "../../components/Navbar/NavbarHome";
import { TopMovies } from "../../components/TopMovies/TopMovies";
import { GenresMovies } from "../../components/GenresMovies/GenresMovies";
import { Footer } from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="">
      <div className="custom-bg px-10 pb-10">
        <NavbarHome />
        <div className="bg-content-page text-white pt-30 rounded-xl">
          <div className="flex justify-between">
            <div className="w-180 px-20">
              <h1 className="text-5xl font-bold">
                Discover the latest films & watch trailers anywhere!
              </h1>
              <p className="py-5">Start your movie journey now.</p>
              <button
                className="border px-5 py-1 border-transparent custom-bg-button rounded-lg w-50 cursor-pointer"
                onClick={() => navigate("/films")}
              >
                Start watching
              </button>
            </div>
            <div className="px-40">
              <img
                className="mx-auto h-80 w-80"
                src="src/assets/FilmFlix.png"
                alt=""
              />
            </div>
          </div>
          <TopMovies />
          <GenresMovies />
        </div>
      </div>
      <Footer />
    </main>
  );
};
