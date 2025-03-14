// app/(site)/page.tsx o pages/index.tsx (según tu estructura)
import Image from "next/image";
import ProjectsCard from "@/components/ProjectsCard";
import StackedMockup from "@/components/StackedMockup";



export default function HomePage() {
  return (
    <main className="space-y-20">
      {/* Hero / Intro Block */}
      <section className="container mx-auto px-4 py-8 flex flex-col-reverse items-center gap-8 md:flex-row">
        {/* Texto principal */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-extrabold leading-tight">
            Bringing Ideas To Life
          </h1>
          <p className="text-lg text-muted-foreground">
            At Apoapps, we build solutions that empower thousands of students 
            and improve their daily lives around the world.
          </p>
          <button className="px-4 py-2 mt-4 bg-secondary text-secondary-foreground rounded-md hover:opacity-90">
            Learn More
          </button>
        </div>

        {/* Bloque de iPhone con Screenshot en modo “Stack” */}
        <div className="md:w-1/2 flex justify-center">
          <StackedMockup />
        </div>
      </section>

      {/* Popular Projects Block */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Popular Projects</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          {/* Agrega más <ProjectsCard /> si lo necesitas */}
        </div>
      </section>

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
