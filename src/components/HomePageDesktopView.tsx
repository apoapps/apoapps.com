"use client";

import ProjectsCard from "@/components/ProjectsCard";
import StackedMockup from "@/components/StackedMockup";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export default function HomePageDesktopView() {
  // Cargamos las traducciones
  const tHero = useTranslations("hero");
  const tProjects = useTranslations("projects");
  const tContact = useTranslations("contact");

  // Para el scroll a proyectos
  const scrollToProjects = () => {
    document
      .getElementById("popular-projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="space-y-10">
      {/* Hero / Intro Block */}
      <section className="container mx-auto px-4 py-8 flex items-center gap-8">
        {/* Columna Texto */}
        <div className="w-1/2 space-y-4">
          <h1 className="text-4xl font-extrabold leading-tight">
            {tHero("title")}
            {/* "Dando vida a las ideas" en español */}
          </h1>
          <p className="text-lg text-muted-foreground">
            {tHero("description")}
            {/* "En Apoapps, creamos soluciones que empoderan..." */}
          </p>
          <button
            onClick={scrollToProjects}
            className="px-4 py-2 mt-4 bg-secondary text-secondary-foreground rounded-md hover:opacity-90"
          >
            {tHero("learn_more")}
            {/* "Saber más" en español */}
          </button>
        </div>

        {/* Columna iPhone, sin parallax ni blur */}
        <div className="w-1/2 flex justify-center">
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

      <Separator className="my-4 md:my-8" />

      {/* Popular Projects Block */}
      <section id="popular-projects" className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">
          {tProjects("popular_projects")}
          {/* "Proyectos populares" en español */}
        </h2>
        <div className="grid grid-cols-2 gap-6">
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


      <Separator className="my-4 md:my-8" />

      {/* Final CTA Block */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">
            {tContact("looking_for_solution")}
            {/* "¿Buscas una solución?" en español */}
          </h3>
          <p className="text-sm text-muted-foreground">
            {tContact("contact_us")}
            {/* "Podemos desarrollar la aplicación o herramienta adecuada..." */}
          </p>
          <p className="text-sm">
            {/* Usamos la traducción para el texto previo */}
            {tContact("email")}
            {' '}
            <a href="mailto:contact@apoapps.net" className="underline">
              contact@apoapps.net
            </a>
          </p>

        </div>
      </section>
    </main>
  );
}
