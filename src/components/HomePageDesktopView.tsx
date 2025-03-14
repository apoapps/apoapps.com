"use client";

import ProjectsCard from "@/components/ProjectsCard";
import StackedMockup from "@/components/StackedMockup";
import { Separator } from "@/components/ui/separator";

export default function HomePageDesktopView() {
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
            Bringing Ideas To Life
          </h1>
          <p className="text-lg text-muted-foreground">
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
        <h2 className="text-2xl font-bold mb-4">Popular Projects</h2>
        <div className="grid grid-cols-2 gap-6">
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

      <Separator className="my-4 md:my-8" />

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
