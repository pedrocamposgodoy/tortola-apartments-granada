import { LAND, px, py } from "@/components/TravelMap";

/*
 * Mapa esquemático de distancias por carretera desde Granada a otras ciudades andaluzas.
 * Reutiliza la silueta y la proyección del mapa de la portada (TravelMap), así que las ciudades
 * están en su sitio real. Los kilómetros son aproximados y por carretera (no en línea recta).
 */

const GRANADA = { lat: 37.18, lon: -3.6 };

type Destino = {
  nombre: string;
  km: number;
  lat: number;
  lon: number;
  /* Dónde va el rótulo respecto al punto de la ciudad */
  lado: "izq" | "arriba" | "abajo-izq";
};

const DESTINOS: Destino[] = [
  { nombre: "Sevilla", km: 250, lat: 37.39, lon: -5.98, lado: "izq" },
  { nombre: "Córdoba", km: 165, lat: 37.88, lon: -4.78, lado: "arriba" },
  { nombre: "Málaga", km: 125, lat: 36.72, lon: -4.42, lado: "abajo-izq" },
];

const FUENTE = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

export function MapaDistancias() {
  const gx = px(GRANADA.lon);
  const gy = py(GRANADA.lat);
  const resumen = DESTINOS.map((d) => `${d.nombre} ${d.km} km`).join(", ");

  return (
    <svg
      viewBox="262 552 170 83"
      role="img"
      aria-labelledby="mapa-distancias-titulo"
      className="block h-auto w-full text-primary"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title id="mapa-distancias-titulo">{`Distancias por carretera desde Granada: ${resumen}`}</title>

      {/* Silueta de la península (la misma del mapa de la portada) */}
      <path d={LAND} fill="var(--accent)" fillOpacity="0.5" stroke="var(--primary)" strokeOpacity="0.6" strokeWidth="0.7" />

      {/* Rutas desde Granada */}
      {DESTINOS.map((d) => (
        <line
          key={d.nombre}
          x1={gx}
          y1={gy}
          x2={px(d.lon)}
          y2={py(d.lat)}
          strokeWidth="1"
          strokeDasharray="2.5 3"
          opacity="0.7"
        />
      ))}

      {/* Ciudades */}
      {DESTINOS.map((d) => {
        const x = px(d.lon);
        const y = py(d.lat);
        const izq = d.lado === "izq" || d.lado === "abajo-izq";
        const arriba = d.lado === "arriba";
        const tx = arriba ? 0 : izq ? -5 : 5;
        const ty = arriba ? -12.5 : d.lado === "abajo-izq" ? 3.5 : -1;
        return (
          <g key={d.nombre} transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`}>
            <circle r="2.4" fill="var(--background)" strokeWidth="1" />
            <circle r="0.9" fill="currentColor" stroke="none" />
            <text
              x={tx}
              y={ty}
              textAnchor={arriba ? "middle" : izq ? "end" : "start"}
              className="notranslate"
              fill="currentColor"
              stroke="var(--background)"
              strokeWidth="2.2"
              strokeOpacity="0.8"
              paintOrder="stroke"
              fontSize="6.9"
              style={FUENTE}
            >
              {d.nombre}
              <tspan x={tx} dy="6.4" fontSize="5.9" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
                {d.km} km
              </tspan>
            </text>
          </g>
        );
      })}

      {/* Granada (destino) */}
      <g transform={`translate(${gx.toFixed(1)} ${gy.toFixed(1)}) scale(0.32)`}>
        <path d="M0 0 C-14 -18 -22 -26 -22 -38 A22 22 0 1 1 22 -38 C22 -26 14 -18 0 0 Z" fill="var(--brand-sky)" strokeWidth="3" />
        <circle cx="0" cy="-38" r="8" fill="var(--background)" strokeWidth="3" />
      </g>
      <text
        x={gx + 6}
        y={gy - 2}
        className="notranslate"
        fill="currentColor"
        stroke="var(--background)"
        strokeWidth="2.2"
        strokeOpacity="0.8"
        paintOrder="stroke"
        fontSize="7.8"
        style={FUENTE}
      >
        Granada
      </text>
    </svg>
  );
}
