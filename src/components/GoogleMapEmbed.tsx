/** Mapa de ubicación de Google Maps, cargado directamente. */
export function GoogleMapEmbed() {
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
