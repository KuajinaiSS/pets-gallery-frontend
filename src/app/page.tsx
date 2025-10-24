import Image from "next/image";

export default function Page() {
  return (
    <div className="relative flex flex-col w-full min-h-screen overflow-x-hidden bg-[#0f1155]">

      {/* === Foto superior del equipo === */}
      <div className="@container">
        <div className="@[500px]:px-4 @[500px]:py-3">
          <div className="w-full flex flex-col justify-end overflow-hidden bg-primary @[500px]:rounded-lg min-h-[218px] relative">
            <Image
              src="/images/Team.png"
              alt="Foto del equipo"
              fill
              priority
              className="object-cover rounded-lg opacity-90"
            />
          </div>
        </div>
      </div>

      {/* === Título === */}
      <h1 className="text-white text-[32px] font-bold text-center pb-3 pt-6">
        Equipo 2
      </h1>

      {/* === Cards del equipo === */}
      <div className="p-4 space-y-4">
        {/* === Card 1 === */}
        <div className="flex flex-col gap-4 rounded-lg bg-[#042b73] p-4 shadow-md">
          <div className="flex items-start gap-4">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src="/images/Benjamin.jpg"
                alt="Benjamin Muga Contreras"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <p className="text-white text-base font-bold">
                Benjamin Muga Contreras
              </p>
              <p className="text-gray-300 text-sm">Ingeniero Civil de Minas</p>
            </div>
            <a
              className="text-[#ed5a24] hover:text-orange-400"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/benjaminmugacontreras"
            >
<svg
  aria-hidden="true"
  className="w-12 h-12"
  fill="currentColor"
  viewBox="0 0 24 24"
>

                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-300 text-sm pt-2">
            Ingeniero Civil de Minas de la Universidad Católica del Norte, con sólida capacidad de razonamiento lógico, análisis y resolución de problemas en equipo. Posee valores de respeto, tolerancia, honestidad, responsabilidad y empatía. Busca integrarse a equipos multidisciplinarios de alto desempeño, aportando conocimientos y habilidades para cumplir metas y compromisos, con el propósito de crecer personal y profesionalmente en la industria minera y adquirir experiencia a través del trabajo colaborativo.
          </p>
        </div>

        {/* === Card 2 === */}
        <div className="flex flex-col gap-4 rounded-lg bg-[#042b73] p-4 shadow-md">
          <div className="flex items-start gap-4">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src="/images/Ignacio.jpg"
                alt="Ignacio Umaña Morel"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <p className="text-white text-base font-bold">
                Ignacio Umaña Morel
              </p>
              <p className="text-gray-300 text-sm">Ingeniero Civil en Computación e Informática</p>
            </div>
            <a
              className="text-[#ed5a24] hover:text-orange-400"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ignacio-felipe-umana-morel/"
            >
<svg
  aria-hidden="true"
  className="w-12 h-12"
  fill="currentColor"
  viewBox="0 0 24 24"
>

                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-300 text-sm pt-2">
Ingeniero Civil en Computación e Informática de la UCN, con fuerte en el desarrollo de sistemas web Fullstack, con fuerte capacidad analítica y de resolución de problemas, comprometido, empático y orientado al trabajo en equipos multidisciplinarios. Busco aportar mis conocimientos en la industria minera y seguir creciendo profesionalmente en entornos desafiantes y colaborativos.</p>
        </div>

        {/* === Card 3 === */}
        <div className="flex flex-col gap-4 rounded-lg bg-[#042b73] p-4 shadow-md">
          <div className="flex items-start gap-4">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src="/images/Ivan.jpg"
                alt="Iván Martínez Godoy"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <p className="text-white text-base font-bold">Iván Martínez Godoy</p>
              <p className="text-gray-300 text-sm">Ingeniero Civil Industrial</p>
            </div>
            <a
              className="text-[#ed5a24] hover:text-orange-400"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/iván-martínez-g"
            >
<svg
  aria-hidden="true"
  className="w-12 h-12"
  fill="currentColor"
  viewBox="0 0 24 24"
>

                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-300 text-sm pt-2">
Estudiante de quinto año de Ingeniería Civil Industrial, con experiencia como ayudante académico, colaborador en investigación y practicante en mejora de procesos. Soy una persona autoexigente, disciplinada y proactiva, con habilidades para trabajar en equipo, resolver problemas y comunicarme con claridad. Busco seguir desarrollándome en entornos donde pueda aplicar mis conocimientos en procesos, datos y optimización para generar soluciones reales y de impacto.</p>
        </div>

        {/* === Card 4 === */}
        <div className="flex flex-col gap-4 rounded-lg bg-[#042b73] p-4 shadow-md">
          <div className="flex items-start gap-4">
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src="/images/Valentina.jpg"
                alt="Valentina Rojas Guerra"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <p className="text-white text-base font-bold">
                Valentina Rojas Guerra
              </p>
              <p className="text-gray-300 text-sm">Ingeniería Civil Industrial</p>
            </div>
            <a
              className="text-[#ed5a24] hover:text-orange-400"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/valentina-rojas-2784a8323"
            >
<svg
  aria-hidden="true"
  className="w-12 h-12"
  fill="currentColor"
  viewBox="0 0 24 24"
>

                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-300 text-sm pt-2">
            Soy estudiante de último semestre de Ingeniería Civil Industrial en la UCN, con minor en Desarrollo Organizacional, Comunicación y Liderazgo. Me caracteriza el compromiso con mi comunidad, habiendo participado como ayudante, en agrupaciones estudiantiles y en el consejo de carrera. Soy una persona proactiva, sociable y responsable, con interés en seguir desafiándome en entornos dinámicos orientados a la mejora continua, donde pueda potenciar mis habilidades y seguir creciendo profesionalmente.
          </p>
        </div>
      </div>

      {/* === Footer === */}
      <footer className="bg-[#0f1155] text-gray-300 mt-10">
        <div className="max-w-7xl mx-auto py-4 px-6 text-center">
          &copy; 2024 Equipo 2. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
