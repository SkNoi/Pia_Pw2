import "bootstrap/dist/css/bootstrap.css";
import "./Pantalla Principal.css";
import NavbarPantallaPrincipal from "./NavbarPantallaPrincipal";
import Footer from "./Footer";

// Componente de Galería

const Galeria = () => {
  const imagenes = ["/Recursos/Postersonic3.jpg", "/Recursos/Mario bros.jpg", "/Recursos/hxh.jpg"];
  
  return (
    <div className="PantallaPrincipal-Container">
      <h2 className="text-2xl font-bold mb-4"></h2>
      <div class="galeria" id="galeria"></div>
      <div className="flex gap-4 flex-wrap">
        {imagenes.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagen ${index + 1}`}
            className="w-[150%] h-auto rounded-lg shadow-md object-cover"
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
