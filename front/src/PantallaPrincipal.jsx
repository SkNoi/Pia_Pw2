import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Pantalla Principal.css";
import NavbarPantallaPrincipal from "./NavbarPantallaPrincipal";
import Footer from "./Footer";

// Componente de Galería
const Galeria = () => {
  const imagenes = [
    "/Recursos/Postersonic3.png",
    "/Recursos/Mario bros.png",
    "/Recursos/hxh.png",
  ];

  return (
    <div className="PantallaPrincipal-Container p-4">
      <div className="flex gap-2 flex-wrap">
        {imagenes.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagen ${index + 1}`}
            className="w-40 h-auto rounded-lg shadow-md object-cover"
          />
        ))}
      </div>
    </div>
  );
};

// Componente de Pantalla Principal
function PantallaPrincipal() {
  return (
    <>
      <NavbarPantallaPrincipal />
      <Galeria />
      <Footer />
    </>
  );
}

export default PantallaPrincipal;
