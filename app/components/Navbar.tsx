"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logos */}
        <div className="flex items-center gap-3">
          <img src="/logos/logobalsas.png" className="w-10" />
          <img src="/logos/logo redon.png" className="w-20 opacity-80" />
        </div>

        {/* Menu centrado */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 
        backdrop-blur-xl bg-white/5 border border-white/60 
        px-6 py-2 rounded-full gap-8 text-sm text-black">
          
          <a href="#hero">Inicio</a>
          <a href="#Bene">Ventajas</a>
          <a href="#productos">Productos</a>
          <a href="#venta">Venta</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

