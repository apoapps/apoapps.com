export function detectOS(): string {
  if (typeof window === "undefined") return "server";

  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("win")) return "windows";
  if (userAgent.includes("mac")) return "macos";
  if (userAgent.includes("linux")) return "linux";
  if (userAgent.includes("android")) return "android";
  if (userAgent.includes("iphone") || userAgent.includes("ipad")) return "ios";

  return "unknown";
}
