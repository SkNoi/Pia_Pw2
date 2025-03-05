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
      <div className="Dashboardsinlogin2-Container">
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
  
  function Dashboardsinlogin2() {
    return (
      <>
        <Navbardashsinlogin />
        <Galeriasinlogin/>
        <Footer />
      </>
    );
  }
  
  export default Dashboardsinlogin2;
  
