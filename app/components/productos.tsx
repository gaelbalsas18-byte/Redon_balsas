"use client";

export default function Productos({ setProductoActivo }) {
  return (
    <section 
      id="productos"
      className="relative min-h-screen bg-white flex items-center py-20"
    >
      
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Nuestros Productos
          </h2>
          <h3 className="text-xs text-black font-semibold uppercase tracking-widest mb-3 text-center mt-3">
            Balsas x Redon
          </h3>
          <p className="text-black text-sm mt-4">
            Tecnología diseñada para precisión y eficiencia
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group bg-transparent rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <img
              src="/productos/r-one.png"
              alt="R-One"
              className="w-full h-[200px] object-contain mb-6 group-hover:scale-105 transition"
            />
            <h3 className="text-xl font-semibold text-red-700 text-center">
              R-ONE
            </h3>
            <button 
              onClick={() => setProductoActivo("r-one")}
              className="mt-4 mx-auto block px-6 py-2 bg-red-700 text-white rounded-full text-sm font-semibold hover:bg-red-800 hover:scale-105 transition"
            >
              Detalles
            </button>
          </div>

          {/* Card 2 */}
          <div className="group bg-transparent rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <img
              src="/productos/wood/wood1.png"
              alt="Producto 2"
              className="w-full h-[200px] object-contain mb-6 group-hover:scale-105 transition"
            />
            <h3 className="text-xl font-semibold text-red-700 text-center">
              WOOM
            </h3>
            <button 
              onClick={() => setProductoActivo("woom")}
              className="mt-4 mx-auto block px-6 py-2 bg-red-700 text-white rounded-full text-sm font-semibold hover:bg-red-800 hover:scale-105 transition"
            >
              Detalles
            </button>
          </div>

          {/* Card 3 */}
          <div className="group bg-transparent rounded-2xl p-6 hover:shadow-xl transition duration-300">
            <img
              src="/productos/GTR/gtr2.png"
              alt="Producto 3"
              className="w-full h-[200px] object-contain mb-6 group-hover:scale-105 transition"
            />
            <h3 className="text-xl font-semibold text-red-700 text-center">
              GTR
            </h3>
            <button 
              onClick={() => setProductoActivo("gtr")}
              className="mt-4 mx-auto block px-6 py-2 bg-red-700 text-white rounded-full text-sm font-semibold hover:bg-red-800 hover:scale-105 transition"
            >
              Detalles
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}