import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-content-page text-white flex gap-230">
      <div className="px-12 py-5">
        <h1 className="font-bold">FilmFlix</h1>
        <div className="py-10">
          <p className="font-normal">Connect whith us on</p>
          <div className="w-8 flex gap-6 mt-3">
            <img src="src/assets/ig-logo.png" alt="Instagram" />
            <img src="src/assets/twitter-logo.png" alt="X" />
            <img src="src/assets/spotify-logo.png" alt="Spotify" />
          </div>
        </div>
      </div>
      <p className="pt-10">@Mauricio Martinez 2025</p>
    </footer>
  );
};
