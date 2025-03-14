export function detectOS(): string {
  if (typeof window === "undefined") return "Server";

  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("win")) return "Windows";
  if (userAgent.includes("mac")) return "MacOS";
  if (userAgent.includes("linux")) return "Linux";
  if (userAgent.includes("android")) return "Android";
  if (userAgent.includes("iphone") || userAgent.includes("ipad")) return "iOS";

  return "Unknown";
}
