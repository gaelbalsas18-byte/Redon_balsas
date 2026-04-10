"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Productos from "./components/productos";
import Detalles from "./components/Detalles";
import Venta from "./components/Venta";
import Contacto from "./components/Contacto";

export default function Home() {
  const [productoActivo, setProductoActivo] = useState(null);

  return (
    <main>
      {/* Menu */}
      <Navbar />

      {/* Seccion principal */}
      <Hero />

      {/* Seccion Productos */}
      <Productos setProductoActivo={setProductoActivo} />

      {/* Seccion Detalles */}
      <Detalles productoActivo={productoActivo} />

      {/* Seccion Venta */}
      <Venta />

      {/* Seccion de Contacto */}
      <Contacto />
    </main>
  );
}