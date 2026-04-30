"use client";

import { useEffect, useRef, useState } from "react";

export default function Beneficios() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // DATA
  const data = [
    {
      imagen: "/Ben/r1.jpg",
      titulo: "Fiable",
      descripcion:
        "Es la creencia de que él te respalda incondicionalmente, sin dudar, sin cuestionar, y que las carencias pueden ser llenadas de la manera correcta por su presencia. Es estar seguro de que no serás dañado de ninguna manera.",
      beneficios: ["Alta precisión", "Durabilidad"],
    },
    {
      imagen: "/Ben/r2.jpg",
      titulo: "Innovador",
      descripcion: "La capacidad de pensar de manera creativa y anticipada, y de desarrollar nuevas ideas. Es la capacidad de mejorar continuamente, adaptarse al cambio y adaptarse rápida y efectivamente a diferentes dinámicas.",
      beneficios: ["Exactitud micrométrica", "Resultados repetibles"],
    },
    {
      imagen: "/Ben/img_c2.jpg",
      titulo: "Justo",
      descripcion: "Ser transparente, equitativo y justo con todas las partes interesadas y la sociedad, adhiriéndose a principios éticos con un entendimiento de la igualdad de oportunidades.",
      beneficios: ["Menor tiempo", "Mayor productividad"],
    },
    {
      imagen: "/Ben/r4.jpg",
      titulo: "Rapido",
      descripcion: "Poder actuar de manera ágil y flexible mientras se cumple el trabajo a tiempo y con calidad. Ser dinámico y proactivo y adaptarse al cambio.",
      beneficios: ["Software integrado", "Actualizaciones constantes"],
    },
    {
      imagen: "/Ben/r5.jpg",
      titulo: "Dedicado",
      descripcion: "Es la internalización de todo el ser, recursos y energía de uno con gran sacrificio y abnegación, sin importar el interés propio, para lograr un objetivo específico como equipo. Es comprometerse plenamente con un trabajo.",
      beneficios: ["Flujo completo",],
    },
  ];

  const [imgIndex, setImgIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // imagen cada 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % data.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [data.length]);

  // texto cada 9s
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % data.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [data.length]);

  const currentImage = data[imgIndex];
  const currentText = data[textIndex];

  return (
    <section id="Bene" ref={ref} className="py-3 px-6 bg-white text-gray-900">
        {/* HEADER DE SECCIÓN */}
        <div className="text-center max-w-3xl mx-auto mb-20">

        <p className={`text-xs font-semibold uppercase tracking-widest text-black mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
            Balsas x Redon
        </p>

        <h2 className={`text-4xl md:text-4xl font-semibold leading-tight transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
            Diseñado para rendir. <br className="hidden md:block" />
            Pensado para durar.
        </h2>

        <p className={`text-gray-500 mt-6 text-lg transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
            Cada detalle está enfocado en precisión, eficiencia y confiabilidad real en clínica.
        </p>

        </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* IZQUIERDA */}
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="w-full max-w-xl mx-auto aspect-[4/3] overflow-hidden rounded-3xl">
            <img
                key={imgIndex}
                src={currentImage.imagen}
                alt="Imagen"
                className="w-full h-full object-cover animate-fadeIn"
            />
            </div>
        </div>
        {/* DERECHA */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >

          <h2
            key={textIndex}
            className="text-4xl md:text-5xl font-semibold leading-tight transition-all duration-500"
          >
            {currentText.titulo}
          </h2>

          <p className="text-black mt-6 text-lg max-w-md">
            {currentText.descripcion}
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentText.beneficios.map((item, i) => (
              <div
                key={i}
                className="p-4 bg-red-600 rounded-xl border border-gray-400 
                hover:border-white/80 hover:shadow-sm transition"
              >
                <p className="font-semibold text-sm text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}