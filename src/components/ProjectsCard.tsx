"use client";

import { useEffect, useState, MouseEvent } from "react";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { detectOS } from "@/lib/detectOS";

interface ProjectsCardProps {
  title: string;
  shortDescription: string;   // Descripción breve (siempre visible)
  longDescription?: string;   // Descripción larga (solo al expandir)
  imageSrc: string;           // Logo principal (cabezal)
  iosLink?: string;
  androidLink?: string;
  images?: string[];          // Imágenes extras a mostrar al expandir
}

export default function ProjectsCard({
  title,
  shortDescription,
  longDescription,
  imageSrc,
  iosLink,
  androidLink,
  images = [],
}: ProjectsCardProps) {
  // Hooks de estado
  const [os, setOs] = useState<string>("");
  const [expanded, setExpanded] = useState<boolean>(false);

  // Traducciones
  const tAvailability = useTranslations("projects.availability");
  const tButtons = useTranslations("buttons");

  // Detecta el SO
  useEffect(() => {
    setOs(detectOS());
  }, []);

  // Plataformas disponibles
  const availablePlatforms: string[] = [];
  if (iosLink) availablePlatforms.push("iOS");
  if (androidLink) availablePlatforms.push("Android");

  // Retorna el enlace de descarga para la plataforma actual, si existe
  function getPlatformLink(): string | null {
    if (os === "ios" && iosLink) return iosLink;
    if (os === "android" && androidLink) return androidLink;
    return null;
  }

  // Maneja clic en la tarjeta completa
  function handleCardClick() {
    const link = getPlatformLink();
    if (link) {
      window.open(link, "_blank");
    } else {
      setExpanded(true);
    }
  }

  // Maneja clic en el ícono de expandir/colapsar (evita abrir links)
  function toggleExpand(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    setExpanded((prev) => !prev);
  }

  // Saber si la plataforma actual está soportada
  const isSupportedPlatform = !!getPlatformLink();

  return (
    <Card
      onClick={handleCardClick}
      className={`
        self-start relative rounded-4xl border border-border bg-card
        shadow-sm transition hover:bg-muted cursor-pointer
      `}
    >
      <CardHeader>
        {/* Encabezado: imagen + título */}
        <div className="flex items-center gap-3">
          <Image
            src={imageSrc}
            alt={title}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <CardTitle className="text-xl mb-1">{title}</CardTitle>
            <CardDescription className="mt-2">{shortDescription}</CardDescription>
          </div>
        </div>
      </CardHeader>

      {/* Plataformas disponibles */}
      <CardContent className="pb-8">
        {availablePlatforms.length > 0 ? (
          <p className="text-sm text-muted-foreground">
            {tAvailability("available_on")} {availablePlatforms.join(" & ")}
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">
            {tAvailability("no_platforms")}
          </p>
        )}
      </CardContent>

      {/* Botón de expandir/colapsar */}
      <button
        onClick={toggleExpand}
        className="absolute bottom-4 right-4 p-2 bg-background rounded-full shadow-md hover:opacity-80"
      >
        {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>

      {/* Sección expandida */}
      {expanded && (
        <div className="px-6 pb-6 text-sm text-muted-foreground space-y-4">
          {isSupportedPlatform ? (
            <p>
              {tAvailability("supported_platform")} (<strong>{os}</strong>)
            </p>
          ) : (
            <p>
              {tAvailability("unsupported_platform")} (<strong>{os}</strong>)
            </p>
          )}

          {/* Enlaces a iOS y Android */}
          <div className="flex flex-col gap-2">
            {iosLink && (
              <a
                href={iosLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-fit px-4 py-1 rounded-md bg-secondary
                  text-secondary-foreground hover:opacity-90
                "
              >
                {tButtons("download_ios")}
              </a>
            )}
            {androidLink && (
              <a
                href={androidLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-fit px-4 py-1 rounded-md bg-secondary
                  text-secondary-foreground hover:opacity-90
                "
              >
                {tButtons("download_android")}
              </a>
            )}
          </div>

          {/* Descripción larga (opcional) */}
          {longDescription && <p className="text-justify">{longDescription}</p>}

          {/* Imágenes extra (opcional) */}
          {images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {images.map((src, idx) => (
                <Image
                  key={idx}
                  src={src}
                  alt={`Screenshot-${idx}`}
                  width={500}
                  height={300}
                  className="rounded-lg w-full"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
