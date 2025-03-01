export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center">
          ¡Bienvenido a apoapps.net (sexo) !
        </h1>
        <p className="text-lg text-center">
          Esta página aún está en construcción. ¡Estén atentos para las novedades!
        </p>
        <p className="text-sm text-center">
          Mientras tanto, puedes acceder a la versión legacy en:{" "}
          <a
            href="https://apodapps.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://apodapps.com 
          </a>
        </p>
      </main>
    </div>
  ); 
}