import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

export default function HomePage() {
  return (
    <section className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 mt-6 ml-2">Proyectos</h1>

      {/* Grid responsive: 1 columna en móvil, 2 en tablet, 3 en desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tri-Go Math */}
        <Card className="rounded-2xl bg-card border border-border shadow-sm hover:bg-muted transition">
          <CardHeader className="flex flex-col items-center text-center">
            <Image src="/trigomath.webp" alt="Tri-Go Math" width={60} height={60} />
            <CardTitle className="mt-4 text-lg">Tri-Go Math</CardTitle>
            <CardDescription>Tu kit de matemáticas</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground">Plataformas Disponibles:</p>
            <div className="flex gap-2 mt-2">
              <button className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground">
                iOS
              </button>
              <button className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground">
                Android
              </button>
            </div>
          </CardContent>
        </Card>

        {/* WakeUp */}
        <Card className="rounded-2xl bg-card border border-border shadow-sm hover:bg-muted transition">
          <CardHeader className="flex flex-col items-center text-center">
            <Image src="/wakeup.webp" alt="WakeUp" width={60} height={60} />
            <CardTitle className="mt-4 text-lg">WakeUp</CardTitle>
            <CardDescription>Tu calculadora de sueño</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground">Plataformas Disponibles:</p>
            <div className="flex gap-2 mt-2">
              <button className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground">
                iOS
              </button>
              <button className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground">
                Android
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Puedes agregar más proyectos aquí */}
      </div>
    </section>
  );
}
