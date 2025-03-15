"use client";

import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { GlobeIcon } from "lucide-react";

export default function LangToggle() {
  const router = useRouter();
  const currentLocale = useLocale(); // "en" o "es"
  const pathname = usePathname();    // p.ej. "/en/about" o "/"
  const searchParams = useSearchParams();

  // Próximo idioma
  const nextLocale = currentLocale === "en" ? "es" : "en";

  function handleToggle() {
    // Separamos la ruta en segmentos: ["", "en", "about"] o ["", "about"] si no tiene locale
    const segments = pathname.split("/");

    // segments[0] siempre es "" (por la barra inicial)
    // segments[1] podría ser "en", "es" o algo más

    if (segments[1] === "en" || segments[1] === "es") {
      // Si el primer segmento es un locale, lo reemplazamos
      segments[1] = nextLocale;
    } else {
      // Si no hay locale, lo insertamos en la posición 1
      segments.splice(1, 0, nextLocale);
    }

    // Reconstruimos la ruta
    let newPath = segments.join("/");
    // Aseguramos que empiece con "/"
    if (!newPath.startsWith("/")) {
      newPath = "/" + newPath;
    }

    // Conservamos query params (si los hay)
    const params = searchParams.toString();
    const urlWithParams = params ? `${newPath}?${params}` : newPath;

    // Cambiamos de idioma sin refrescar
    router.push(urlWithParams);
  }

  return (
    <Button variant="ghost" size="icon" className="w-16" onClick={handleToggle}>
      <GlobeIcon className="h-4 w-4 mr-1" />
      {currentLocale.toUpperCase()}
    </Button>
  );
}
