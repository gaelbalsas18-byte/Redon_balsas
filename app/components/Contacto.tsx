"use client";

export default function Contacto (){
    const contactos = [
        {
            nombre: "Fernando Santamaría Ríos", 
            rol: "Gerente Comercial",
            Correo: "direcciongeneral@balsasdental.com",
            whatsapp: "https://wa.me/525554076025",
        },
        {
            nombre: "Humberto Corvera Santillan",
            rol: "Asesor clinico",
            Correo: "humberto.corvera@balsasdental.com",
            whatsapp: "https://wa.me/525610209675",
        },
    ];

    return(
        <section
        id="contacto"
        className="min-h-screen grid md:grid-cols-2">

            {/*Derecha*/}
            
            <div className="relative flex flex-col justify-center px-10 py-20 bg-red-700 txt-white">
                 <h3 className="mt-[-90] text-xs text-white font-semibold uppercase tracking-widest text-neutral-500 mb-3 text-center mt-3">
              Balsas x Redon
                </h3>
                <h2 className="mt-5 text-5xl font-bold leading-tight mb-6">¿Listo para llevar tu clinica al siguiente nivel?</h2>
                <p className="text-lg text-white max-w-md">
                    Nuestro equipo te asesorara para elegir el equipo ideal segun tus necesidades.
                </p>

                <p className="text-white text-xs translate-x-18 translate-y-40">
                    © 2026 Balsas Dental. Todos los derechos reservados.
                </p>
                 {/* 📱 Redes sociales */}
            <div className="absolute bottom-6 right-10 flex gap-4">

            <a
            href="https://instagram.com"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-full hover:bg-white hover:text-red-700 transition"
            >
            {/* Instagram */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 
                5-5V7c0-2.8-2.2-5-5-5H7zm5 5.8A4.2 4.2 0 1 1 7.8 12 
                4.2 4.2 0 0 1 12 7.8zm0 6.9A2.7 2.7 0 1 0 9.3 12 
                2.7 2.7 0 0 0 12 14.7zm4.4-7.7a1 1 0 1 1-1-1 
                1 1 0 0 1 1 1z"/>
            </svg>
            </a>

            <a
            href="https://facebook.com"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center border border-white/40 rounded-full hover:bg-white hover:text-red-700 transition"
            >
            {/* Facebook */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M13 22v-9h3l1-4h-4V7c0-1.2.3-2 
                2-2h2V1.5C16.7 1.2 15.4 1 14 1c-3 0-5 
                1.8-5 5v3H6v4h3v9h4z"/>
            </svg>
            </a>

        </div>
      </div>
      {/* 🧱 LADO DERECHO */}
      <div className="flex items-center justify-center bg-white px-10 py-20">

        <div className="w-full max-w-md space-y-6">

          {contactos.map((c, i) => (
            <div
              key={i}
              className="group border border-gray-200 rounded-xl p-6 hover:shadow-xl transition duration-300 hover:border-red-600"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {c.nombre}
              </h3>

              <p className="text-gray-500 mb-4">
                {c.rol}
              </p>

              <a
                href={c.whatsapp}
                target="_blank"
                className="inline-block text-sm font-medium text-red-700 group-hover:translate-x-1 transition"
              >
                Contactar →
              </a>
            </div>
          ))}

        </div>

      </div>
        </section>
    )
}
