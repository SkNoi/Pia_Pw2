import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PantallaPrincipal.css";
import NavbarPantallaPrincipal from "./NavbarPantallaPrincipal";
import Footer from "./Footer";

// Componente de Galería
const Galeria = () => {
  const imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];

  return (
    <div className="PantallaPrincipal-Container">
      <h2 className="text-2xl font-bold mb-4">Galería de Imágenes</h2>
      <div className="flex gap-4 flex-wrap">
        {imagenes.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagen ${index + 1}`}
            className="w-40 h-auto rounded-lg shadow-md"
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

export default NavbarPantallaPrincipalPantallaPrincipal;
