// src/app/layout.tsx
import { Navbar } from "@/components/ui/navbar";
import "@/app/globals.css"; // tu CSS global

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        {/* pt-16 para compensar la Navbar fija */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
