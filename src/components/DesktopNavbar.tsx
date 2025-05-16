// DesktopNavbar.tsx
"use client";

//import { useEffect, useState } from "react";
import ModeToggle from "./ModeToggle";
import LangToggle from "./LangToggle"; // Nuestro nuevo toggle
import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function DesktopNavbar() {
  const t = useTranslations('navbar');

  return (
    <div
      className="hidden md:flex items-center space-x-4"
    >
      {/* 1) Toggle de idioma */}
      <LangToggle />

      {/* 2) Toggle de tema */}
      <ModeToggle />

      {/* Enlaces de navegación */}
      <Button variant="ghost" asChild>
        <Link href="/about">{t('about')}</Link>
      </Button>
      
      <Button variant="ghost" asChild>
        <Link href="/privacy">{t('privacy')}</Link>
      </Button>
    </div>
  );
}
