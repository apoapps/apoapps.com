"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import StackedMockup from "@/components/StackedMockup";
import ProjectsCard from "@/components/ProjectsCard";
import { Separator } from "@/components/ui/separator";

export default function HomePageMobileView() {
  const [startAnim, setStartAnim] = useState(false);

  // Hooks de traducción
  const tHero = useTranslations("hero");
  const tProjects = useTranslations("projects");
  const tContact = useTranslations("contact");

  // Altura del navbar (ajústalo según el tamaño real del navbar)
  const NAVBAR_HEIGHT = 60;

  // Activamos la animación inicial al montar
  useEffect(() => {
    const timer = setTimeout(() => setStartAnim(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Botón "Learn More" → scroll hasta "popular-projects"
  const scrollToProjects = () => {
    document
      .getElementById("popular-projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Animación celular y texto
  const phoneTransform = startAnim ? "translateY(25vh)" : "translateY(23vh)";
  const maxBlur = 3;
  const phoneBlur = `blur(${maxBlur}px)`;
  const textTransform = startAnim ? "translateY(-30vh)" : "translateY(-28vh)";

  return (
    <main className="h-screen">
      {/* Sección 1: Hero / Intro Block */}
      <section
        className="relative w-full px-4 flex flex-col-reverse items-center gap-8 bg-[#0a0e1a] dark:bg-black snap-start"
        style={{ height: `calc(100vh - ${NAVBAR_HEIGHT}px)` }}
      >
        {/* Texto animado */}
        <div
          className="w-full space-y-4 z-10 text-left px-4"
          style={{
            transition: "transform 1s ease-out",
            transform: textTransform,
          }}
        >
          <h1 className="text-4xl font-extrabold leading-tight text-white text-left">
            {tHero("title")}
            {/* Ej: "Dando vida a las ideas" */}
          </h1>
          <p className="text-lg text-muted-foreground text-white">
            {tHero("description")}
            {/* Ej: "En Apoapps, creamos soluciones que empoderan..." */}
          </p>
          <button
            onClick={scrollToProjects}
            className="px-4 py-2 mt-4 bg-secondary text-secondary-foreground rounded-md hover:opacity-90"
          >
            {tHero("learn_more")}
            {/* Ej: "Saber más" */}
          </button>
        </div>

        {/* Celular animado + blur */}
        <div
          className="w-full flex justify-center z-0"
          style={{
            transition: "transform 1s ease-out",
            transform: phoneTransform,
            filter: phoneBlur,
          }}
        >
          <StackedMockup
            screenshots={[
              "/trigo-ss1.jpeg",
              "/ss1.PNG",
              "/ss2.PNG",
              "/ss3.PNG",
              "/ss4.PNG",
            ]}
          />
        </div>
      </section>

      <Separator className="mb-8" />

      {/* Sección 2: Popular Projects */}
      <section
        id="popular-projects"
        className="container mx-auto px-4 snap-start"
      >
        <h2 className="text-2xl font-bold mb-4 mt-8">
          {tProjects("popular_projects")}
          {/* Ej: "Proyectos populares" */}
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <ProjectsCard
            title={tProjects("tri_go_math.title")}
            shortDescription={tProjects("tri_go_math.short_description")}
            longDescription={tProjects("tri_go_math.long_description")}
            imageSrc="/trigomath.webp"
            iosLink="https://apps.apple.com/es/app/tri-go-math/id1525513476"
            androidLink="https://play.google.com/store/apps/details?id=com.apodaca.math_helper&hl=en_US&gl=US"
          />
          <ProjectsCard
            title={tProjects("wakeup.title")}
            shortDescription={tProjects("wakeup.short_description")}
            longDescription={tProjects("wakeup.long_description")}
            imageSrc="/wakeup.webp"
            iosLink="https://apps.apple.com/us/app/wakeup-the-sleep-calculator/id1593359716"
            androidLink="https://play.google.com/store/apps/details?id=com.apodapps.wakeup&hl=es&gl=US"
          />
        </div>
      </section>

      <Separator className="my-8" />

      {/* Sección 3: Final CTA Block */}
      <section
        className="container mx-auto px-4 py-8 snap-start"
        style={{ height: `calc(40vh - ${NAVBAR_HEIGHT}px)` }}
      >
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold mb-4 mt-8 text-left">
            {tContact("looking_for_solution")}
            {/* Ej: "¿Buscas una solución?" */}
          </h2>
          <p className="text-sm text-muted-foreground text-left">
            {tContact("contact_us")}
            {/* Ej: "Podemos desarrollar la aplicación o herramienta adecuada..." */}
          </p>
          <p className="text-sm text-left">
            {tContact("email")}{" "}
            <a href="mailto:alex@apoapps.net" className="underline text-left">
              contact@apoapps.net
            </a>
            {/* Renderiza: "Contáctanos en contact@apoapps.net" */}
          </p>
        </div>
      </section>
    </main>
  );
}
