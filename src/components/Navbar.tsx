// src/components/Navbar.tsx
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import Image from "next/image";

export async function Navbar() {


  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur 
      supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src="/apo-logo.svg"
              alt="Apoapps Logo"
              width={32}
              height={32}
              className="mr-2"
              priority
            />
            <Link href="/" className="text-xl font-bold text-primary font-mono tracking-wider">
              Apoapps
            </Link>
          </div>
          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
