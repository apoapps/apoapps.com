"use client";

import { useEffect, useState } from "react";
import HomePageMobileView from "../../components/HomePageMobileView";
import HomePageDesktopView from "../../components/HomePageDesktopView";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <HomePageMobileView /> : <HomePageDesktopView />;
}
