// src/app/page.tsx

export default function HomePage() {
  return (
    <section className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mb-6">Apoapps</h1>

      <h2 className="text-2xl font-semibold mb-4">Proyectos</h2>
      <ul className="space-y-4">
        <li className="border border-gray-200 rounded p-4 hover:bg-gray-50 transition">
          <h3 className="text-lg font-bold">Tri-Go Math</h3>
          <p className="text-sm text-gray-500">App de matemáticas para...</p>
        </li>
        <li className="border border-gray-200 rounded p-4 hover:bg-gray-50 transition">
          <h3 className="text-lg font-bold">WakeUp</h3>
          <p className="text-sm text-gray-500">App de sueños y hábitos de sueño...</p>
        </li>
        {/* Agrega más proyectos si deseas */}
      </ul>
    </section>
  );
}
