"use client";

import { MenuIcon, SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

function MobileNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  // Función para cerrar el menú cuando se hace clic en un enlace
  const handleCloseMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className="flex md:hidden items-center space-x-2">
      {/* Botón para cambiar de tema */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="mr-2"
      >
        <SunIcon className="h-5 w-5 transition-all dark:hidden" />
        <MoonIcon className="h-5 w-5 hidden dark:block" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {/* Menú desplegable */}
      <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-6">
            <Button
              variant="outline"
              className="flex items-center gap-3 justify-start mx-6 align-center"
              asChild
              onClick={handleCloseMenu}
            >
              <Link href="/">Home</Link>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-3 justify-start mx-6"
              asChild
              onClick={handleCloseMenu}
            >
              <Link href="/about">About</Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;
