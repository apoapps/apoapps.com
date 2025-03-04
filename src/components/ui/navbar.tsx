// src/components/Navbar.tsx
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white shadow p-4 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Apoapps</Link>
        <div className="space-x-4">
          <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
