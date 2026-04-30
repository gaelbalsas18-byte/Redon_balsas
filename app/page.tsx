"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Productos from "./components/productos";
import Detalles from "./components/Detalles";
import Venta from "./components/Venta";
import Contacto from "./components/Contacto";
import Beneficios from "./components/Beneficios";

export default function Home() {
  const [productoActivo, setProductoActivo] = useState(null);

  return (
    <main>
      {/* Menu */}
      <Navbar />

      {/* Seccion principal */}
      <Hero />

      {/*Seccion beneficios */}
      <Beneficios/>

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