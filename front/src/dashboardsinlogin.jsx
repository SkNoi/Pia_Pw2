import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbardashsinlogin from "./Navbardashsinlogin";
import Footer from "./Footer";


const Galeriasinlogin = () => {
    const imagenes = [
      "/Recursos/Postersonic3.jpg",
      "/Recursos/chip y dale al rescate.jpg",
      "/Recursos/hxh.jpg",
    ];
  
    return (
      <div className="dashboardsinlogin-Container p-4">
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
  
  function dashboardsinlogin() {
    return (
      <>
        <Navbardashsinlogin />
        <Galeriasinlogin/>
        <Footer />
      </>
    );
  }
  
  export default dashboardsinlogin;
  
