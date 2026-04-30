"use client";

import { useEffect, useRef, useState } from "react";

export default function Venta() {
  const entregas = [
    "/Venta/7.jpg",
    "/Venta/2.jpg",
    "/Venta/8.jpg",
    "/Venta/4.jpg",
    "/Venta/5.jpg",
  ];

  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="venta"
      ref={ref}
      className="py-32 px-6 bg-white text-gray-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className={`text-4xl font-semibold transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            En uso real
          </h2>

          <h3 className="mt-3 text-xs font-semibold uppercase tracking-widest mb-3 transition-all duration-700 delay-100 text-black">
            Balsas x Redon
          </h3>

          <p className={`text-black mt-4 text-lg transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            Equipos instalados en clínicas reales
          </p>
        </div>

        {/* Grid PRO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[220px]">

          {entregas.map((img, i) => (
            <div
              key={i}
              className={`
                relative overflow-hidden rounded-2xl group
                transition-all duration-700
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}
              `}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Imagen */}
              <img
                src={img}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Gradiente elegante */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition"></div>

              {/* Glow sutil */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
              shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]"></div>

              {/* Texto overlay (solo en grande) */}
              {i === 0 && (
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-80">Instalación destacada</p>
                  <h3 className="text-xl font-semibold">
                    Productos Redon
                  </h3>
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}