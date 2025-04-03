export function getCookie(name: string): string | null {
  if (typeof window === "undefined") return null; // Prevents SSR issues

  const cookies = window.document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return JSON.parse(value);
    }
  }
  return null;
}

export function setCookie(name: string, value: string, days: number) {
  if (typeof window === "undefined") return; // Prevents SSR issues

  const expires = new Date();
  expires.setDate(expires.getDate() + days);

  window.document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax; Secure`;
}

export function deleteCookie(name: string) {
  if (typeof window === "undefined") return; // Prevents SSR issues

  window.document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}
