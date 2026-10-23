import { useState } from "react";
import { MapPin } from "lucide-react";

/** Mapa de Google: no se carga hasta que la persona pulsa "Mostrar mapa" (Google puede instalar cookies). */
export function GoogleMapEmbed() {
  const [mostrar, setMostrar] = useState(false);

  if (mostrar) {
    return (
      <iframe
        title="Ubicación de Calle Tórtola nº 10, Granada"
        src="https://maps.google.com/maps?q=37.185439,-3.609873&z=17&hl=es&output=embed"
        width="100%"
        height="400"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-[400px] w-full border-0"
      />
    );
  }

  return (
    <div className="flex h-[400px] flex-col items-center justify-center gap-4 bg-card px-6 text-center">
      <MapPin className="h-10 w-10 text-primary" />
      <p className="max-w-md text-sm text-muted-foreground">
        El mapa lo sirve Google, que puede instalar cookies y recibir tu dirección IP al cargarlo.
        Pulsa para verlo aquí o ábrelo directamente en Google Maps.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setMostrar(true)}
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Mostrar mapa
        </button>
        <a
          href="https://www.google.com/maps/search/?api=1&query=37.185439,-3.609873"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-primary/50 px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
        >
          Abrir en Google Maps
        </a>
      </div>
    </div>
  );
}
