// src/components/DesktopNavbar.tsx
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModeToggle from "./ModeToggle";

export default function DesktopNavbar() {
  // Maneja la animación inicial
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    // Inicia la animación después de un breve delay
    const timer = setTimeout(() => setStartAnim(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Aplica un estilo con transición suave
  const animatedStyle = {
    transition: "transform 0.8s ease-out",
    transform: startAnim ? "translateY(0)" : "translateY(-50px)",
  };

  return (
    <div
      className="hidden md:flex items-center space-x-4"
      style={animatedStyle}
    >
      <ModeToggle />
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/about">About</Link>
      </Button>
    </div>
  );
}
