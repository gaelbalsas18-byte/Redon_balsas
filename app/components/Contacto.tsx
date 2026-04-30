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

          <h2 className="text-3xl font-semibold mb-5">TEAM</h2>

          <p className="text-lg  mb-6">
            Te presentamos a el equipo que te guiara a darte la mejor opcion, 
            deacuerdo a tus necesidades.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            {contactos.map((c, i) => (
              <div key={i} className="text-center group">

                {/* imagen fake / placeholder */}
               <div className="w-60 h-60 mx-auto rounded-2xl overflow-hidden mb-6 
                  bg-gray-700 flex items-center justify-center 
                  group-hover:scale-105 transition">

                    <img
                      src={c.imagen}
                      alt={c.nombre}
                      className="w-[80%] h-[80%] object-contain"
                    />

                  </div>

                <h3 className="font-semibold text-lg">{c.nombre}</h3>

                <p className="text-sm text-black mt-2">
                  {c.rol}
                </p>

                <p className="text-xs text-black mt-3 max-w-xs mx-auto">
                  Especialista enfocado en brindar soluciones y acompañamiento continuo.
                </p>

                <a
                  href={c.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2 
                  bg-blue-500 text-white text-sm font-medium rounded-full
                  hover:bg-blue-400 hover:scale-120 transition"
                >
                  {/* Icono WhatsApp */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 0 5.4 
                    0 12c0 2.1.6 4.2 1.7 6L0 24l6.2-1.6c1.8 
                    1 3.8 1.5 5.8 1.5 6.6 0 12-5.4 
                    12-12 0-3.2-1.2-6.2-3.5-8.4zM12 
                    21.5c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 
                    1 1-3.6-.2-.4A9.5 9.5 0 1 1 12 
                    21.5zm5.2-7.1c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 
                    1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 
                    0-.5.1-.7.1-.1.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 
                    0-.4 0-.6 0-.1-.7-1.8-1-2.5-.3-.7-.6-.6-.7-.6h-.6c-.2 
                    0-.6.1-.9.4-.3.3-1.2 1.2-1.2 3s1.2 3.5 1.4 3.8c.2.3 
                    2.4 3.7 5.9 5.1.8.3 1.4.5 1.9.6.8.2 1.6.2 2.2.1.7-.1 
                    2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.6-.4z"/>
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


