"use client";

export default function Contacto() {
  const contactos = [
    {
      nombre: "Fernando Santamaría Ríos",
      rol: "Gerente Comercial",
      correo: "direcciongeneral@balsasdental.com",
      whatsapp: "https://wa.me/525554076025",
      imagen: "/personal/fer.png",
    },
    {
      nombre: "Humberto Corvera Santillan",
      rol: "Asesor clínico",
      correo: "humberto.corvera@balsasdental.com",
      whatsapp: "https://wa.me/525610209675",
      imagen: "/personal/beto.png",
    },
  ];

  return (
    <section id="contacto" className="bg-gray-400 text-black">

      {/* TEAM */}
      <div className="py-24 px-6 bg-neutral-100">
        <div className="max-w-6xl mx-auto">

          <div className="max-w-3xl mx-auto text-center mb-16">

            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Balsas x Redon
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              El equipo detrás de cada solución
            </h2>

            <p className="text-gray-500 text-lg mt-6 leading-relaxed">
              Profesionales especializados que te acompañan en cada paso para elegir la mejor tecnología según tus necesidades reales.
            </p>

          </div>
          <div className="grid md:grid-cols-2 gap-12">

  {contactos.map((c, i) => (
    <div
      key={i}
      className="bg-white rounded-3xl p-8 text-center 
      shadow-sm hover:shadow-xl transition duration-500 group"
    >

      {/* IMAGEN */}
      <div className="w-44 h-44 mx-auto rounded-2xl overflow-hidden mb-6 
      bg-gray-100 flex items-center justify-center 
      group-hover:scale-105 transition">

        <img
          src={c.imagen}
          alt={c.nombre}
          className="w-[75%] h-[75%] object-contain"
        />
      </div>

      {/* NOMBRE */}
      <h3 className="font-semibold text-xl text-gray-900">
        {c.nombre}
      </h3>

      {/* ROL */}
      <p className="text-sm text-gray-500 mt-1">
        {c.rol}
      </p>

      {/* DESCRIPCIÓN */}
      <p className="text-sm text-gray-600 mt-4 max-w-xs mx-auto leading-relaxed">
        Especialista enfocado en brindar soluciones y acompañamiento continuo.
      </p>

      {/* BOTÓN */}
      <a
        href={c.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 
        border border-gray-300 text-gray-800 text-sm font-medium rounded-full
        hover:bg-black hover:text-white hover:border-black 
        transition-all duration-300"
      >
        {/* icono */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 0 5.4 
          0 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6c1.8 
          1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 
          12-12 0-3.2-1.2-6.2-3.5-8.4z"/>
        </svg>

        WhatsApp
      </a>

    </div>
  ))}

</div>
          
        </div>
      </div>

      {/* CONTACTO / CTA */}
      <div className="grid md:grid-cols-3 min-h-[500px]">

        {/* TEXTO */}
        <div className="flex flex-col justify-center px-10 py-16 md:col-span-1">
          <p className="text-xs uppercase tracking-widest text-white mb-4">
            Balsas x Redon
          </p>

          <h2 className="text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
            ¿Listo para llevar tu clínica al siguiente nivel?
          </h2>

          <p className="text-white text-lg">
            Nuestro equipo te asesorará para elegir el equipo ideal según tus necesidades.
          </p>

          <p className="text-xs text-white mt-12">
            © 2026 Balsas Dental. Todos los derechos reservados.
          </p>
        </div>

        {/* IMAGEN CENTRO */}
        <div className="hidden md:block">
          <img
            src="/Ben/img_c1.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* IMAGEN DERECHA */}
        <div className="hidden md:block">
          <img
            src="/Ben/r3.jpg"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}


