import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer";

const ButacaCritica = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-4">
      {/* Header */}
      <header className="bg-blue-500 text-white flex justify-between p-4">
        <h1 className="text-lg font-bold">Butaca Critica</h1>
        <div>
          <button className="bg-white text-black px-3 py-1 rounded mr-2">Register</button>
          <button className="px-3 py-1">Log in</button>
        </div>
      </header>

      {/* Info Sections */}
      <div className="grid grid-cols-3 gap-4 my-6">
        <div className="bg-red-600 text-white p-4 text-center rounded">
          <h2 className="font-bold">Explora contenido sin límites</h2>
          <p className="text-sm">Descubre reseñas de películas, series y videojuegos. Mantente al día con lo más reciente en entretenimiento.</p>
        </div>
        <div className="bg-green-700 text-white p-4 text-center rounded">
          <h2 className="font-bold">Únete a nuestra comunidad</h2>
          <p className="text-sm">Crea tu cuenta y comparte tus opiniones. Comenta, califica y guarda tus favoritos.</p>
        </div>
        <div className="bg-yellow-500 text-black p-4 text-center rounded">
          <h2 className="font-bold">Accede a contenido exclusivo</h2>
          <p className="text-sm">Los usuarios registrados disfrutan de recomendaciones personalizadas, foros de discusión y más. ¡Regístrate ahora!</p>
        </div>
      </div>

      {/* Últimas subidas */}
      <section>
        <h2 className="text-xl font-bold mb-4">Últimas subidas</h2>
        <div className="grid grid-cols-4 gap-4">
          {["Mario Kart 8 Deluxe", "Sonic 3", "Dracula", "Stranger Things", "Mieruko-chan", "Call of Duty", "Crepúsculo", "Interestelar"].map((title, index) => (
            <div key={index} className="bg-white p-2 rounded shadow-lg">
              <img
                src={`https://via.placeholder.com/150?text=${title}`}
                alt={title}
                className="rounded w-full h-40 object-cover"
              />
              <h3 className="text-sm font-bold mt-2">{title}</h3>
              <p className="text-xs text-gray-600">Categoría</p>
            </div>
          ))}
        </div>
      </section>

      {/* Paginación */}
      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">1</button>
        <button className="px-4 py-2">2</button>
        <button className="px-4 py-2">3</button>
        <span className="px-4 py-2">...</span>
        <button className="px-4 py-2">67</button>
        <button className="px-4 py-2">68</button>
      </div>

      {/* Footer */}
      <footer className="bg-blue-500 h-16 mt-6"></footer>
    </div>
  );
};

function dashboardsinlogin() {
    return (
      <>
        <Footer />
      </>
    );
  }

export default dashboardsinlogin;
