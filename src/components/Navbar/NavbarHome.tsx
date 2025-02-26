import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavbarHome = () => {
  const navigate = useNavigate();

  return (
    <main className="custom-bg flex text-white place-content-between p-5">
      <nav className="flex gap-15">
        <Link to={"/"} className="font-bold">
          FilmFlix
        </Link>
        <Link to={"/films"}>Discover</Link>
        <Link to={"/films"}>Genres</Link>
        <Link to={"/films"}>Trailers</Link>
      </nav>
      <div>
        <nav className="flex gap-5">
          <button
            className="border px-5 py-1 border-transparent custom-bg-button rounded-lg w-24 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log in
          </button>
          <button
            className="border px-5 py-1 border-transparent custom-bg-button rounded-lg w-24 cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Sign up
          </button>
        </nav>
      </div>
    </main>
  );
};
