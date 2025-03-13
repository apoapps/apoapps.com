// src/components/DesktopNavbar.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ModeToggle from "./ModeToggle";


async function DesktopNavbar() {

  return (
    <div className="hidden md:flex items-center space-x-4">
      <ModeToggle />
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/about">About</Link>
      </Button>

    
    </div>
  );
}

export default DesktopNavbar;
