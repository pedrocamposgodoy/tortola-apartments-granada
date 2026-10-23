import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";
import { abrirConfiguracionCookies } from "@/lib/consent";
import { EMPRESA } from "@/lib/empresa";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de cookies | Apartamentos Tórtola" },
      { name: "description", content: "Qué cookies usa apartamentostortola.com y cómo gestionarlas." },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${EMPRESA.web}/cookies` }],
  }),
  component: Cookies,
});

function Cookies() {
  return (
    <LegalLayout titulo="Política de cookies">
      <p>
        Una cookie es un pequeño archivo que se guarda en tu dispositivo. Solo instalamos las de análisis si las aceptas, y puedes cambiar de decisión en cualquier momento.
      </p>
      <p>
        <button type="button" onClick={abrirConfiguracionCookies} className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">
          Configurar cookies
        </button>
      </p>
      <h2>Cookies que usamos</h2>
      <table>
        <thead>
          <tr><th>Cookie</th><th>Proveedor</th><th>Finalidad</th><th>Duración</th></tr>
        </thead>
        <tbody>
          <tr><td>_ga, _ga_RQL1K67M37</td><td>Google Analytics</td><td>Estadísticas de uso (requieren consentimiento)</td><td>2 años</td></tr>
          <tr><td>googtrans</td><td>Google Translate</td><td>Recordar el idioma elegido (la activas tú al elegir un idioma)</td><td>Sesión</td></tr>
          <tr><td>tortola-cookie-consent (almacenamiento local)</td><td>Esta web</td><td>Guardar tu decisión sobre las cookies</td><td>Hasta que la borres</td></tr>
        </tbody>
      </table>
      <h2>Servicios de terceros</h2>
      <ul>
        <li>Google Maps: solo se carga cuando pulsas «Mostrar mapa» y Google puede instalar sus propias cookies.</li>
        <li>Google Translate: solo se carga si eliges un idioma distinto del español.</li>
        <li>Vercel Analytics: medición agregada sin cookies.</li>
      </ul>
      <h2>Cómo desactivarlas</h2>
      <p>
        Además del botón anterior, puedes borrar o bloquear las cookies desde la configuración de tu navegador. Más información en la <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">AEPD</a>.
      </p>
    </LegalLayout>
  );
}
