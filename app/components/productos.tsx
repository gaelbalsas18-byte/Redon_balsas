"use client";

const productos = [
  {
    id: "r-one",
    nombre: "R-ONE",
    descripcion:
      "Gracias al compresor integrado, su depósito de agua y un potente sistema de filtración, podrás empezar tu trabajo inmediatamente.",
    imagen: "/productos/r-one.png",
    pdf: "/Flayer/rone.pdf",
  },
  {
    id: "woom",
    nombre: "WOOM",
    descripcion:
      "Facilidad de uso y potencia en un solo dispositivo. Realiza tu trabajo rápidamente sin necesidad de hardware adicional.",
    imagen: "/productos/wood/wood1.png",
    pdf: "/Flayer/woom.pdf",
  },
  {
    id: "gtr",
    nombre: "GTR",
    descripcion:
      "¿Quieres ir más allá de los límites? Procesa todos los materiales con el máximo rendimiento.",
    imagen: "/productos/GTR/gtr2.png",
  },
];

export default function Productos({ setProductoActivo }) {
  return (
    <section
      id="productos"
      className="relative min-h-screen bg-white flex items-center py-32"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-semibold text-gray-900">
            Nuestros productos
          </h2>

          <h3 className="mt-3 text-xs font-semibold uppercase tracking-widest mb-3 text-black">
            Redon x Balsas
          </h3>

          <p className="text-black mt-4 text-lg">
            Tecnología diseñada para precisión y eficiencia
          </p>
        </div>

        {/* Productos */}
        <div className="flex flex-col gap-24">
          {productos.map((producto, index) => (
            <div
              key={producto.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center justify-between gap-10 group`}
            >
              {/* TEXTO */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-semibold text-gray-900">
                  {producto.nombre}
                </h3>

                <p className="text-gray-500 mt-3 max-w-md">
                  {producto.descripcion}
                </p>

                {/* BOTONES */}
                <div className="mt-6 flex flex-col gap-3 items-center md:items-start">

                  {/* Ver detalles */}
                  <button
                    onClick={() => setProductoActivo(producto.id)}
                    className="text-sm font-medium text-red-600 hover:underline"
                  >
                    Ver detalles →
                  </button>

                  {/* Ficha técnica (solo si hay PDF) */}
                  {producto.pdf?.trim() && (
                    <a
                      href={producto.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      📄 Ficha técnica
                    </a>
                  )}

                </div>
              </div>

              {/* IMAGEN */}
              <div className="flex-1">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full max-w-md mx-auto transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}