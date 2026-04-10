"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const slides = [
    {
      titulo: "Redon R-ONE",
      subtitulo: "Balsas x Redon",
      descripcion:
        "Precisión, innovación y tecnología avanzada para llevar tu flujo digital al siguiente nivel.",
    },
    {
      titulo: "Tecnología de alto nivel",
      subtitulo: "Balsas x Redon",
      descripcion:
        "Diseñado para clínicas que buscan velocidad, eficiencia y resultados perfectos.",
    },
    {
      titulo: "Flujo digital completo",
      subtitulo: "Balsas x Redon",
      descripcion:
        "Fresado en un solo ecosistema optimizado.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero"
      className="relative overflow-hidden min-h-screen bg-black text-white flex items-center"
    >
      
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-black opacity-80" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

        {/*Carrusel de texto */}
        <div className="relative h-[240px] w-[520px] mt-18">

          {slides.map((item, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-1000 ${
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <h1 className="text-4xl text-center font-bold uppercase leading-tight text-red-700">
                {item.titulo}
              </h1>

              <h3 className="text-red-700 text-center text-xs font-semibold uppercase tracking-widest mt-2">
                {item.subtitulo}
              </h3>

              <p className="mt-6 text-white text-center text-lg max-w-md">
                {item.descripcion}
              </p>
            </div>
          ))}

        </div>

        {/* Producto */}
        <div className="relative flex justify-center">
          <img
            src="/productos/r-one.png"
            alt="Redon R_ONE"
            className="w-[400px] md:w-[500px] object-contain animate-[floatPro_6s_ease-in-out_infinite]"
          />
        </div>

      </div>
    </section>
  );
}