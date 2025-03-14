export function detectOS(): string {
  if (typeof window === "undefined") return "server";

  const userAgent = navigator.userAgent.toLowerCase();

  // 1. Verifica primero iPhone / iPad / iPod
  if (
    userAgent.includes("iphone") ||
    userAgent.includes("ipad") ||
    userAgent.includes("ipod")
  ) {
    return "ios";
  }
  
  // 2. Luego chequea macOS
  if (userAgent.includes("mac")) {
    return "macos";
  }

  // 3. Continúa con el resto
  if (userAgent.includes("win")) return "windows";
  if (userAgent.includes("android")) return "android";
  if (userAgent.includes("linux")) return "linux";

  return "unknown";
}
