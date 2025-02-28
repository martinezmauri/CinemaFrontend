import React, { useState } from "react";

export const BurgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleView = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      {/* Contenedor del icono con tamaño ajustado */}
      <div className="relative">
        {/* Icono de hamburguesa (agregamos un contenedor pequeño para que ocupe solo el icono) */}
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
        className={`custom-bg w-70 h-100 absolute top-37 left-12 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-80"
        }`}
      >
        {/* Contenido del menú */}
        <ul className="p-5 text-white">
          <li className="mb-3 cursor-pointer">Accion</li>
          <li className="mb-3 cursor-pointer">Romance</li>
          <li className="mb-3 cursor-pointer">Comedia</li>
        </ul>
      </div>
    </main>
  );
};
