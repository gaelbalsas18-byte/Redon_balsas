"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-60 bg-black backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 h-18 flex items-center justify-between">
        {/*  LogoS */}
        <div className="text-xl font-bold text-gray-900">
            <img
            src="/logos/BalsasTrans.png"
            className="absolute top-1 left-10 w-[80px] opacity-150"
            />
        </div>

        <div className="text-xl font-bold text-gray-900">
            <img
            src="/logos/logo redon.png"
            className="absolute top-[-5] left-5 w-[130px] opacity-150 translate-x-30"
            />
        </div>
        
        {/* Menu */}
        <nav className="hidden md:flex gap-10 text-lg uppercase font-medium text-white">
          <a href="#hero" className="hover:text-red-700 font-semibold transition">Inicio</a>
          <a href="#productos" className="hover:text-red-700 font-semibold transition">Productos</a>
          <a href="#venta" className="hover:text-red-700 font-semibold transition">Venta</a>
          <a href="#contacto" className="hover:text-red-700 font-semibold transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

