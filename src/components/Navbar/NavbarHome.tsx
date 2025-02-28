import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const NavbarHome = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <main className="custom-bg flex text-white place-content-between p-5">
      <nav className="flex gap-15">
        <Link to="/" className="font-bold">
          FilmFlix
        </Link>
        <Link to="/films">Discover</Link>
        <Link to="/films">Genres</Link>
        <Link to="/films">Trailers</Link>
      </nav>

      <div>
        {user ? (
          <nav className="flex items-center gap-5">
            <img
              src={user.img_profile}
              alt="User profile"
              className="w-10 h-10 rounded-full"
            />
            <button
              className="border px-5 py-1 border-transparent bg-red-500 rounded-lg w-24 cursor-pointer"
              onClick={logout} // Llamamos a logout al hacer click
            >
              Log out
            </button>
          </nav>
        ) : (
          // Si no hay usuario, mostramos los botones de login y registro
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
        )}
      </div>
    </main>
  );
};
