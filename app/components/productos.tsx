"use client";

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

          <h3 className="mt-3 text-xs font-semibold uppercase tracking-widest mb-3 transition-all duration-700 delay-100 text-black">
            Balsas x Redon
          </h3>

          <p className="text-black mt-4 text-lg">
            Tecnología diseñada para precisión y eficiencia
          </p>
        </div>

        {/* Productos */}
        <div className="flex flex-col gap-24">

          {/* Producto 1 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 group">
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-semibold text-gray-900">
                R-ONE
              </h3>
              <p className="text-gray-500 mt-3 max-w-md">
                Precisión avanzada en fresado con un flujo optimizado para clínicas modernas.
              </p>

              <button
                onClick={() => setProductoActivo("r-one")}
                className="mt-6 text-sm font-medium text-red-600 group-hover:underline"
              >
                Ver detalles →
              </button>
            </div>

            <div className="flex-1">
              <img
                src="/productos/r-one.png"
                className="w-full max-w-md mx-auto transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Producto 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 group">
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-semibold text-gray-900">
                WOOM
              </h3>
              <p className="text-gray-500 mt-3 max-w-md">
                Diseño compacto con alto rendimiento para flujo digital continuo.
              </p>

              <button
                onClick={() => setProductoActivo("woom")}
                className="mt-6 text-sm font-medium text-red-600 group-hover:underline"
              >
                Ver detalles →
              </button>
            </div>

            <div className="flex-1">
              <img
                src="/productos/wood/wood1.png"
                className="w-full max-w-md mx-auto transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Producto 3 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 group">
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-semibold text-gray-900">
                GTR
              </h3>
              <p className="text-gray-500 mt-3 max-w-md">
                Potencia y precisión para trabajos exigentes en fresado dental.
              </p>

              <button
                onClick={() => setProductoActivo("gtr")}
                className="mt-6 text-sm font-medium text-red-600 group-hover:underline"
              >
                Ver detalles →
              </button>
            </div>

            <div className="flex-1">
              <img
                src="/productos/GTR/gtr2.png"
                className="w-full max-w-md mx-auto transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}