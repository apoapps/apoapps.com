import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import "@/app/[locale]/globals.css"; // CSS global
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Asegurar que el locale sea válido
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 🌎 Definir textos según el idioma actual
  const isEnglish = locale === "en";

  const pageTitle = isEnglish
    ? "Alejandro Apodaca - Software Developer"
    : "Alejandro Apodaca - Desarrollador de Software";

  const pageDescription = isEnglish
    ? "Hi! I'm Alejandro Apodaca, a software developer and app creator. I've built apps like Tri-Go Math and WakeUp, helping thousands of students worldwide. Explore my projects and connect with me!"
    : "¡Hola! Soy Alejandro Apodaca, desarrollador de software y creador de apps. He creado aplicaciones como Tri-Go Math y WakeUp, ayudando a miles de estudiantes en todo el mundo. Explora mis proyectos y conéctate conmigo.";

  const keywords = isEnglish
    ? "Alejandro Apodaca, Apoapps, software developer, Tri-Go Math, WakeUp, educational apps, mobile development, programming tips, study problems, sleep tracking, Cabildo Digital, React, Next.js, iOS, Android"
    : "Alejandro Apodaca, Apoapps, desarrollador de software, Tri-Go Math, WakeUp, apps educativas, desarrollo móvil, consejos de programación, problemas estudiando, seguimiento de sueño, Cabildo Digital, React, Next.js, iOS, Android";

  const pageUrl = `https://apoapps.net/${locale}`;
  const imageUrl = "./preview.png";

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>

        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Alejandro Apodaca Córdova" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="alternate" href="https://apoapps.net/en" hrefLang="en" />
        <link rel="alternate" href="https://apoapps.net/es" hrefLang="es" />
        <link rel="alternate" href="https://apoapps.net/" hrefLang="x-default" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:site_name" content="Apoapps" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:site" content="@apoapps" />
        <link rel="me" href="https://www.linkedin.com/in/alejandro-apodaca-cordova-502a2b200/" />
        <link rel="me" href="https://github.com/apoapps" />
        <link rel="me" href="https://www.youtube.com/channel/UC-LPXAK9zMiCOCWMZiO23tA" />
        <link rel="me" href="https://t.me/alexapo26" />
        <link rel="me" href="https://vm.tiktok.com/ZMJwQcnad/" />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale}>
            <Navbar />
            <main>{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
