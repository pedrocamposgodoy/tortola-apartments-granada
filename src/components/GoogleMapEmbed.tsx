/**
 * Mapa de ubicación. Usa OpenStreetMap: carga directamente, sin cookies y sin Google,
 * por lo que no requiere consentimiento previo. Se mantiene el nombre del archivo por compatibilidad.
 */
const LAT = 37.185439;
const LON = -3.609873;
const D = 0.0035;
const SRC =
  `https://www.openstreetmap.org/export/embed.html?bbox=${LON - D * 1.6},${LAT - D},${LON + D * 1.6},${LAT + D}` +
  `&layer=mapnik&marker=${LAT},${LON}`;

export function GoogleMapEmbed() {
  return (
    <div className="relative">
      <iframe
        title="Ubicación de Calle Tórtola nº 10, Granada"
        src={SRC}
        width="100%"
        height="400"
        loading="lazy"
        referrerPolicy="no-referrer"
        className="block h-[400px] w-full border-0"
      />
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${LAT},${LON}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 left-3 rounded-full bg-background/95 px-4 py-2 text-xs font-semibold text-primary shadow-md hover:bg-secondary"
      >
        Cómo llegar (Google Maps)
      </a>
    </div>
  );
}
