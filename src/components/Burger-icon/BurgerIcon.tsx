import React, { useEffect, useState } from "react";
import axios from "axios";

interface IGernes {
  _id: string;
  name: string;
}

export const BurgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [genres, setGenres] = useState<IGernes[]>([]);
  const handleView = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const loadGenres = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/genre");
        if (response.status === 200) {
          setGenres(response.data);
        }
      } catch (error) {}
    };
    loadGenres();
  }, []);

  useEffect(() => {
    console.log("Géneros en estado:", genres); // Verifica el valor en el estado
  }, [genres]);

  return (
    <main>
      <div className="relative">
        <div
          className="burger-icon cursor-pointer w-8 h-8 flex flex-col justify-between items-center"
          onClick={handleView}
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      </div>

      {/* Menú lateral que se muestra/oculta */}
      <div
        className={`custom-bg w-70 absolute top-37 left-12 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-80"
        }`}
      >
        <ul className="p-5 text-white">
          {genres.map((genre) => (
            <li key={genre._id} className="mb-3 w-30 cursor-pointer">
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
