import React from "react";
import { NavbarHome } from "../../components/Navbar/NavbarHome";
import { TopMovies } from "../../components/TopMovies/TopMovies";
import { GenresMovies } from "../../components/GenresMovies/GenresMovies";

export const Home = () => {
  return (
    <main className="custom-bg px-10">
      <NavbarHome />
      <div className="bg-content-page text-white pt-30 rounded-xl">
        <div className="flex justify-between">
          <div className="w-180 px-20">
            <h1 className="text-5xl font-bold">
              Discover the latest films & watch trailers anywhere!
            </h1>
            <p className="py-5">Start your movie journey now.</p>
            <button className="border px-5 py-1 border-transparent custom-bg-button rounded-lg w-50">
              Start watching
            </button>
          </div>
          <div className="px-40">
            <img
              className="mx-auto h-60 w-auto"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </div>
        </div>
        <TopMovies />
        <GenresMovies />
      </div>
    </main>
  );
};
