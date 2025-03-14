"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface StackedMockupProps {
  screenshots?: string[]; // Hacemos que screenshots sea opcional
}

export default function StackedMockup({ screenshots = [] }: StackedMockupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Verifica si hay imágenes disponibles
  const hasScreenshots = screenshots.length > 0;

  useEffect(() => {
    if (!hasScreenshots) return; // Si no hay imágenes, no hagas nada

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [screenshots, hasScreenshots]);

  return (
    <div className="relative w-[300px] h-[600px]">
      {/* Capa 2: Screenshot con animación de cambio */}
      {hasScreenshots && (
        <div className="absolute top-[13px] left-[0px] w-[300px] h-[580px] overflow-hidden rounded-[60px]">
          {screenshots.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Screenshot ${index + 1}`}
              fill
              className={`object-contain rounded-[60px] transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
        </div>
      )}

      {/* Capa 1: iPhone */}
      <Image
        src="/15pro.png"
        alt="iPhone 15 Pro Mockup"
        fill
        className="object-contain"
      />
    </div>
  );
}
