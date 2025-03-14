"use client";

import { useEffect, useState } from "react";
import StackedMockup from "@/components/StackedMockup";
import ProjectsCard from "@/components/ProjectsCard";
import { Separator } from "@/components/ui/separator";

export default function HomePageMobileView() {
  const [scrollY, setScrollY] = useState(0);
  const [startAnim, setStartAnim] = useState(false);

  // Para hacer scroll a la sección "popular-projects"
  const scrollToProjects = () => {
    document
      .getElementById("popular-projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Animación inicial leve
    const timer = setTimeout(() => setStartAnim(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Manejar scroll
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax y blur
  const parallaxSpeed = 0.22;
  const blurSpeed = 0.02;

  // Posición final en Y
  const finalPhoneTranslate = `${scrollY * parallaxSpeed}px`;

  // Animación inicial: parte en -100px, luego pasa a finalPhoneTranslate
  const animatedTranslate = startAnim ? finalPhoneTranslate : "-100px";

  const blurAmount = (scrollY * blurSpeed).toFixed(1);
  const phoneBlur = `blur(${blurAmount}px)`;

  return (
    <main className="space-y-10">
      {/* Hero / Intro Block */}
      <section className="relative container mx-auto px-4 py-8">
        <div className="flex flex-col-reverse items-center gap-8">
          {/* Texto */}
          <div className="w-full space-y-4 relative z-10">
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

          {/* iPhone con parallax/blur */}
          <div
            className="w-full flex justify-center overflow-hidden relative z-0"
            style={{
              transition: "transform 0.8s ease-out",
              transform: `translateY(${animatedTranslate})`,
              filter: phoneBlur,
            }}
          >
            <StackedMockup />
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
