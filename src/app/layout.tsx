// src/app/layout.tsx
import { Navbar } from "@/components/Navbar";
import "@/app/globals.css"; // Tu CSS global
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className="bg-background text-foreground">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >

          <Navbar />
          <main>{children}</main>
          </ThemeProvider>
        </body>

      </html>
  );
}
