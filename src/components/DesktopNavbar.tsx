// DesktopNavbar.tsx
"use client";

import { useEffect, useState } from "react";
import ModeToggle from "./ModeToggle";
import LangToggle from "./LangToggle"; // Nuestro nuevo toggle
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DesktopNavbar() {



  return (
    <div
      className="hidden md:flex items-center space-x-4"

    >
      {/* 1) Toggle de idioma */}
      <LangToggle />

      {/* 2) Toggle de tema */}
      <ModeToggle />

      {/* Resto de tus enlaces */}
      <Button variant="ghost" asChild>
        <Link href="/about">About</Link>
      </Button>
    </div>
  );
}
