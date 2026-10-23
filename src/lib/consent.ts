/**
 * Consentimiento de cookies. Solo Google Analytics (cookies de analítica) depende de él.
 * Guarda la elección en el navegador (localStorage) y avisa al resto de la página.
 */
const KEY = "tortola-cookie-consent";
export const GA_ID = "G-RQL1K67M37";
const EVENTO = "tortola-consent";

export type Consentimiento = "accepted" | "rejected" | null;

export function leerConsentimiento(): Consentimiento {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

export function guardarConsentimiento(v: Consentimiento) {
  try {
    if (v) window.localStorage.setItem(KEY, v);
    else window.localStorage.removeItem(KEY);
  } catch {
    /* sin almacenamiento: se preguntará de nuevo en la próxima visita */
  }
  window.dispatchEvent(new Event(EVENTO));
  if (v === "accepted") cargarAnalytics();
  if (v === "rejected") desactivarAnalytics();
}

export function suscribirConsentimiento(fn: () => void) {
  window.addEventListener(EVENTO, fn);
  return () => window.removeEventListener(EVENTO, fn);
}

export function abrirConfiguracionCookies() {
  guardarConsentimiento(null);
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    [clave: string]: unknown;
  }
}

export function cargarAnalytics() {
  if (document.getElementById("ga-script")) return;
  window[`ga-disable-${GA_ID}`] = false;
  window.dataLayer = window.dataLayer || [];
  function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", GA_ID, { anonymize_ip: true });
  const s = document.createElement("script");
  s.id = "ga-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

export function desactivarAnalytics() {
  window[`ga-disable-${GA_ID}`] = true;
  const caducada = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  const host = window.location.hostname;
  const dominios = [host, "." + host, "." + host.split(".").slice(-2).join(".")];
  for (const nombre of document.cookie.split("; ").map((c) => c.split("=")[0])) {
    if (nombre && (nombre === "_ga" || nombre.startsWith("_ga_") || nombre === "_gid")) {
      document.cookie = `${nombre}=;path=/;${caducada}`;
      for (const d of dominios) document.cookie = `${nombre}=;path=/;domain=${d};${caducada}`;
    }
  }
}
