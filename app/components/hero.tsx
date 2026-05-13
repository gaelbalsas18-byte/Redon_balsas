"use client";

import { useEffect, useState } from "react";

export default function Hero() {

  const slides = [
    {
      titulo: "El siguiente nivel de fresado",
      subtitulo: "Redon x Balsas",
      descripcion:
        "Precisión, innovación y tecnología avanzada para llevar tu flujo digital al siguiente nivel.",
    },
    {
      titulo: "Tecnología de alto nivel",
      subtitulo: "Redon x Balsas",
      descripcion:
        "Diseñado para clínicas que buscan velocidad, eficiencia y resultados perfectos.",
    },
    {
      titulo: "Flujo digital completo",
      subtitulo: "Redon x Balsas",
      descripcion:
        "Fresado en un solo ecosistema optimizado.",
    },
  ];

  const productImages = [
    "/Ben/r2.jpg",
    "/Ben/r3.jpg",
    "/Ben/r4.jpg",
  ];

  const particles = [
    { top: "10%", left: "20%", duration: "3s" },
    { top: "30%", left: "70%", duration: "5s" },
    { top: "80%", left: "40%", duration: "4s" },
    { top: "60%", left: "10%", duration: "6s" },
    { top: "20%", left: "90%", duration: "3.5s" },
    { top: "50%", left: "50%", duration: "5.5s" },
    { top: "75%", left: "80%", duration: "4.5s" },
    { top: "15%", left: "60%", duration: "6s" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-black text-white flex items-center"
    >

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050816] to-[#0d1325]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Glow */}
      <div className="absolute w-[700px] h-[700px] bg-cyan-500/20 blur-[140px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full opacity-30 animate-floatParticle"
            style={{
              top: particle.top,
              left: particle.left,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center w-full">

        {/* LEFT TEXT */}
        <div className="relative h-[350px] flex items-center">

          {slides.map((item, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-1000 ${
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >

              <div className="mb-4">
                <span className="px-4 py-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs tracking-[3px] uppercase">
                  {item.subtitulo}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
                {item.titulo}
              </h1>

              <p className="mt-6 text-gray-300 text-lg max-w-xl leading-relaxed">
                {item.descripcion}
              </p>

            </div>
          ))}
        </div>

        {/* RIGHT PRODUCT CAROUSEL */}
        <div className="relative flex justify-center items-center h-[650px]">

          {/* Rings */}
          <div className="absolute w-[500px] h-[500px] border border-cyan-500/20 rounded-full animate-spinSlow" />

          <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full animate-reverseSpin" />

          {/* Glow */}
          <div className="absolute w-[350px] h-[350px] bg-cyan-400/20 blur-[120px] rounded-full" />

          {/* Images */}
          <div className="relative w-full h-full flex items-center justify-center">

            {productImages.map((img, i) => {

              const active = i === index;

              return (
                <img
                  key={i}
                  src={img}
                  alt="Redon Product"
                  className={`
                    absolute
                    object-contain
                    transition-all duration-[1400ms] ease-out
                    drop-shadow-[0_0_70px_rgba(34,211,238,0.35)]

                    ${
                      active
                        ? `
                          opacity-100
                          scale-100
                          translate-x-0
                          z-20
                          blur-0
                          w-[320px] md:w-[560px]
                        `
                        : `
                          opacity-20
                          scale-75
                          ${
                            i < index
                              ? "-translate-x-40"
                              : "translate-x-40"
                          }
                          z-10
                          blur-[2px]
                          w-[250px] md:w-[420px]
                        `
                    }
                  `}
                />
              );
            })}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-10 flex gap-3 z-30">

            {productImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-10 bg-cyan-400"
                    : "w-2 bg-white/30"
                }`}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}