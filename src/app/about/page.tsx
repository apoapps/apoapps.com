// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold mb-4">Acerca del Creador</h1>

      {/* Texto introductorio */}
      <p className="text-gray-700 mb-4">
        Soy Alejandro Apodaca Córdova, estudiante de Ingeniería en Mecatrónica...
      </p>

      {/* Texto de contacto */}
      <p className="text-gray-700 font-semibold mb-2">Contacto:</p>

      {/* Lista de enlaces de contacto */}
      <ul className="list-disc pl-6 mb-4">
        <li>LinkedIn</li>
        <li>GitHub</li>
        <li>TikTok</li>
      </ul>
    </section>
  );
}
