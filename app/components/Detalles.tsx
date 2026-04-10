"use client";

import { useEffect, useState } from "react";
export default function Detalles({ productoActivo }: { productoActivo: any }) {
  
  const images = [
    "/productos/r-one.png",
    "/productos/one-r2.jpg",
    "/productos/one-r3.jpg",
  ];

  const wood = [
    "/productos/wood/wood1.png",
    "/productos/wood/wood2.png",
    "/productos/wood/wood3.png",
  ];

  const GTR = [
    "/productos/GTR/gtr1.jpg",
    "/productos/GTR/gtr2.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 🚨 Si no hay producto seleccionado, no se muestra nada
  if (!productoActivo) return null;

  return (
    <section
      id="detalles"
      className="bg-white py-20 px-6 scroll-mt-20"
    >

      {/* R-ONE */}
      {productoActivo === "r-one" && (
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center">
            <div className="relative w-full max-w-[500px] h-[400px]">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`absolute w-full h-full object-contain transition-opacity duration-1000 ${
                    i === index % images.length ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl text-black font-bold mb-10">
              Especificaciones técnicas R-One
            </h2>
            <div className="grid grid-cols-2 gap-x-10 gap-y-8 text-gray-800"> 
              {[ ["Tecnología de motor de ejes", "Paso a paso (Micro Stepper)"], ["Velocidad de rotación", "100,000 RPM"], ["Poder del eje", "0.86 kW"], ["Número de ejes", "4 Ejes Simultáneos"], ["Ángulo de inclinación", "Sin límite"], ["Diámetro máx. fresa", "3mm / 4mm"], ["Capacidad de fresas", "7"], ["Voltaje / Frecuencia", "110v–230v / 50–60Hz"], ["Requiere aire", "No"], ["Software", "Open System"], ["Dimensiones", "320 x 505 x 636 mm"], ["Peso", "65 kg"], ].map(([label, value], i) => ( <div key={i} 
              className="border-b border-gray-200 pb-2"> 
              <p className="text-xs text-gray-500 uppercase"> {label} </p> <p className="font-semibold"> {value} </p> </div> ))} </div> 
          </div>
        </div>
      )}

      {/* WOOM */}
      {productoActivo === "woom" && (
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl text-black font-bold mb-10">
              Especificaciones técnicas Redon Woom
            </h2>
           <div className="grid grid-cols-2 gap-x-10 gap-y-8 text-gray-800"> {[ ["Tecnología de Motores Axis", "Motor Servo Absoluto"], ["Velocidad del Husillo", "100.000 RPM / STD"], ["Potencia del husillo", "0.86 kW / STD"], ["Número de ejes", "5 Ejes"], ["Ángulo máximo de inclinación de los ejes A y B", "-30 / +30 Grados (Eje A) -30 / +210 Grados (Eje B)"], ["Diámetro máximo del eje de la herramienta", "3mm / 4mm"], ["Capacidad de ATC", "12"], ["Operación en seco y en húmedo", "Solo seco"], ["Proceso de referencia", "No"], ["Frecuencia de tensión", "110v - 230v / 50-60Hz"], ["Requisito de aire (L/min)", "No"], ["Dimensiones del dispositivo", "540 x 665 x 625 mm"], ["Peso", "140 kg"], ].map(([label, value], i) => ( <div key={i} 
            className="border-b border-gray-200 pb-2"> 
            <p className="text-xs text-gray-500 uppercase"> {label} </p> <p className="font-semibold"> {value} </p> </div> ))} </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-[500px] h-[400px]">
              {wood.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`absolute w-full h-full object-contain transition-opacity duration-1000 ${
                    i === index % wood.length ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* GTR */}
      {productoActivo === "gtr" && (
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center">
            <div className="relative w-full max-w-[500px] h-[400px]">
              {GTR.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`absolute w-full h-full object-contain transition-opacity duration-1000 ${
                    i === index % GTR.length ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl text-black font-bold mb-10">
              Especificaciones técnicas Redon GTR
            </h2>
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 text-gray-800"> {[ ["Tecnología de Motores Axis", "Motor servo absoluto"], ["Velocidad del husillo", "60,000 RPM / STD"], ["Potencia del husillo", "3.7kW / STD"], ["Número de ejes", "5 Ejes"], ["Ángulo máximo de inclinación de los ejes A y B", "-30 / +120° (Eje A) -30 / +210° (Eje B)"], ["Diámetro máximo del eje de la herramienta", "3 / 4 / 6 mm"], ["Capacidad de ATC", "12"], ["Operación en seco y en húmedo", "Si"], ["Proceso de referencia", "No"], ["Frecuencia de tensión", "110v - 230v / 50-60 Hz"], ["Requisito de aire (L/min)", "100 L / Min."], ["Software de cámara", "Sistema Abierto"], ["Dimensiones del dispositivo", "630 x 660 x 760 mm"], ["Peso", "140 kg"], ].map(([label, value], i) => ( <div key={i} 
           className="border-b border-gray-200 pb-2"> 
          <p className="text-xs text-gray-500 uppercase"> {label} </p> <p className="font-semibold"> {value} </p> </div> ))} </div>
          </div>
        </div>
      )}
    </section>
  );
}