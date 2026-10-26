import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  cargarAnalytics,
  guardarConsentimiento,
  leerConsentimiento,
  suscribirConsentimiento,
} from "@/lib/consent";

/** Aviso de cookies: aceptar y rechazar con el mismo peso. Sin consentimiento no se carga Google Analytics. */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const actualizar = () => setVisible(leerConsentimiento() === null);
    if (leerConsentimiento() === "accepted") cargarAnalytics();
    actualizar();
    return suscribirConsentimiento(actualizar);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-2xl rounded-2xl border border-border bg-card p-5 font-sans shadow-2xl sm:bottom-5"
    >
      <p className="text-sm text-foreground">
        Usamos cookies de análisis (Google Analytics) para saber cómo se usa la web y mejorarla. Solo
        se activan si las aceptas.{" "}
        <Link to="/cookies" className="font-medium text-primary underline underline-offset-2">
          Más información
        </Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => guardarConsentimiento("accepted")}
          className="flex-1 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => guardarConsentimiento("rejected")}
          className="flex-1 rounded-full border border-primary/50 bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}
