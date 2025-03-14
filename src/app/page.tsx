import ProjectsCard from "@/components/ProjectsCard";

export default function HomePage() {
  return (
    <section className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 mt-6 ml-2">Proyectos</h1>

      {/* Grid responsive: 1 columna en móvil, 2 en tablet, 3 en desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectsCard 
          title="Tri-Go Math"
          description="Tu kit de matemáticas"
          imageSrc="/trigomath.webp"
          iosLink="https://apps.apple.com/app/trigo-math"
          androidLink="https://play.google.com/store/apps/details?id=com.trigomath"
        />
        <ProjectsCard 
          title="WakeUp"
          description="Tu calculadora de sueño"
          imageSrc="/wakeup.webp"
          iosLink="https://apps.apple.com/app/wakeup"
          androidLink="https://play.google.com/store/apps/details?id=com.wakeup"
        />
        {/* Agrega más proyectos aquí si lo necesitas */}
      </div>
    </section>
  );
}
