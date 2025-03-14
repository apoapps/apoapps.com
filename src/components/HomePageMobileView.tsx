"use client";

import { useEffect, useState } from "react";
import StackedMockup from "@/components/StackedMockup";
import ProjectsCard from "@/components/ProjectsCard";
import { Separator } from "@/components/ui/separator";

export default function HomePageMobileView() {
  // Estado para animación inicial (teléfono y texto)
  const [startAnim, setStartAnim] = useState(false);
  // Estado para manejar el scroll (para el blur)
  const [scrollY, setScrollY] = useState(0);

  // Activamos la animación inicial al montar
  useEffect(() => {
    const timer = setTimeout(() => setStartAnim(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Escuchamos el scroll para calcular blur
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Botón "Learn More" → scroll hasta "popular-projects"
  const scrollToProjects = () => {
    document
      .getElementById("popular-projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // --- Animación Celular ---
  // Empieza en -100px → a 0px cuando startAnim es true
  const phoneTransform = startAnim ? "translateY(0px)" : "translateY(-10px)";

  // Blur inicial pronto (scroll * 0.15), máx 30
  const maxBlur = 5;
  const blurVal = Math.min((scrollY + 0.5) * 3, maxBlur).toFixed(0);
  const phoneBlur = `blur(${blurVal}px)`;

  // --- Animación Texto ---
  // Empieza en +100px → a 0px
  // Ajusta a tu gusto (aún más si quieres un efecto mayor)
  const textTransform = startAnim ? "translateY(-300px)" : "translateY(-200px)";

  return (
    <main className="space-y-10">
      {/* Hero / Intro Block */}
      <section className="container h-170 bg-[#0a0e1a]  mx-auto px-4 py-8 bg-black dark:bg-black">
        {/* Contenedor principal con flex-col-reverse
            para que el texto quede sobre (arriba en el DOM) */}
        <div className="flex flex-col-reverse items-center gap-8">
          {/* Texto animado */}
          <div
            className="w-full space-y-4 z-10 text-left px-4"
            style={{
              transition: "transform 1s ease-out",
              transform: textTransform,
            }}
          >
            <h1 className="text-4xl font-extrabold leading-tight text-white text-left">
              Bringing Ideas To Life
            </h1>
            <p className="text-lg text-muted-foreground text-white">
              At Apoapps, we build solutions that empower thousands of students
              and improve their daily lives around the world.
            </p>
            <button
              onClick={scrollToProjects}
              className="px-4 py-2 mt-4 bg-secondary text-secondary-foreground rounded-md hover:opacity-90"
            >
              Learn More
            </button>
          </div>

          {/* Celular animado + blur */}
          <div
            className="w-full flex justify-center overflow-hidden z-0"
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
        </div>
      </section>

      <Separator className="my-4" />

      {/* Popular Projects Block */}
      <section id="popular-projects" className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Popular Projects</h2>
        <div className="grid grid-cols-1 gap-6">
          <ProjectsCard
            title="Tri-Go Math"
            shortDescription="Your all-in-one math toolkit"
            imageSrc="/trigomath.webp"
            iosLink="https://apps.apple.com/es/app/tri-go-math/id1525513476"
            androidLink="https://play.google.com/store/apps/details?id=com.apodaca.math_helper&hl=en_US&gl=US"
          />
          <ProjectsCard
            title="WakeUp"
            shortDescription="Your personal sleep calculator"
            imageSrc="/wakeup.webp"
            iosLink="https://apps.apple.com/us/app/wakeup-the-sleep-calculator/id1593359716"
            androidLink="https://play.google.com/store/apps/details?id=com.apodapps.wakeup&hl=es&gl=US"
          />
        </div>
      </section>

      <Separator className="my-4" />

      {/* Final CTA Block */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold">Looking for a solution?</h3>
          <p className="text-sm text-muted-foreground">
            We can develop the right app or tool for you.
          </p>
          <p className="text-sm">
            Contact us at{" "}
            <a href="mailto:alex@apoapps.net" className="underline">
              alex@apoapps.net
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
