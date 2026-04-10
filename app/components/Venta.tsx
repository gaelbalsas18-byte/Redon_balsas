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
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="venta"
      ref={ref}
      className="py-28 px-6 bg-white text-gray-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className={`text-4xl font-bold mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            Entregas realizadas
          </h2>

          <h3 className={`text-xs font-semibold uppercase tracking-widest mb-3 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            Balsas x Redon
          </h3>

          <p className={`text-sm transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            Equipos instalados en clínicas reales
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">

          {entregas.map((img, i) => (
            <div
              key={i}
              className={`
                relative overflow-hidden rounded-xl group
                transition-all duration-700
                hover:-translate-y-2 hover:shadow-xl
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}
              `}
              style={{
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <img
                src={img}
                alt="Entrega"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}