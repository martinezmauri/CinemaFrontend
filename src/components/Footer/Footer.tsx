import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-content-page text-white flex gap-235">
      <div className="px-12 py-5">
        <Link to={"/"} className="font-bold">
          FilmFlix
        </Link>
        <div className="py-3">
          <p className="font-normal">Connect whith us on</p>
          <div className="w-8 flex gap-6 mt-3">
            <img
              src="src/assets/ig-logo.png"
              alt="Instagram"
              className="cursor-pointer"
            />
            <img
              src="src/assets/twitter-logo.png"
              alt="X"
              className="cursor-pointer"
            />
            <img
              src="src/assets/spotify-logo.png"
              alt="Spotify"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <p className="pt-20">@Mauricio Martinez 2025</p>
    </footer>
  );
};
