import React from "react";

export const NavbarHome = () => {
  return (
    <main className="custom-bg flex text-white place-content-between p-5">
      <nav className="flex gap-15">
        <a href="" className="font-bold">
          FilmFlix
        </a>
        <a href="">Discover</a>
        <a href="">Genres</a>
        <a href="">Trailers</a>
        <a href=""></a>
      </nav>
      <div>
        <nav className="flex gap-5">
          <button className="border px-5 py-1 border-transparent custom-bg-button rounded-lg w-24">
            Log in
          </button>
          <button className="border px-5 py-1 border-transparent custom-bg-button rounded-lg w-24">
            Sign up
          </button>
        </nav>
      </div>
    </main>
  );
};
