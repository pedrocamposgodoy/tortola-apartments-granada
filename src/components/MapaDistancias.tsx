import { LAND, px, py } from "@/components/TravelMap";

/*
 * Mapa esquemático de distancias por carretera desde Granada a otras ciudades andaluzas.
 * Reutiliza la silueta y la proyección del mapa de la portada (TravelMap), así que las ciudades
 * y las sierras están en su sitio real. Los kilómetros son aproximados y por carretera (no en
 * línea recta). El relieve (Sierra Nevada, Sierra Morena, Cazorla, Ronda…) es decorativo:
 * pequeños montes sombreados, sin rellenar el mapa entero.
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
  { nombre: "Córdoba", km: 165, lat: 37.88, lon: -4.78, lado: "izq" },
  { nombre: "Málaga", km: 125, lat: 36.72, lon: -4.42, lado: "abajo-izq" },
];

/* ---------- Relieve ---------- */

type Sierra = {
  /* Puntos [lon, lat] que dibujan la cresta de la sierra */
  cresta: [number, number][];
  /* Separación aproximada entre montes (unidades del mapa) */
  paso: number;
  /* Tamaño de los montes: ancho y alto medios */
  w: number;
  h: number;
  /* Los más altos llevan nieve */
  nieve?: boolean;
  /* Más alta en el centro de la cresta y más baja en los extremos */
  campana?: boolean;
};

const SIERRAS: Sierra[] = [
  /* Sierra Nevada: la protagonista, junto a Granada. Más alta en el centro (Mulhacén) */
  { cresta: [[-3.4, 37.08], [-3.2, 37.05], [-2.9, 37.07], [-2.55, 37.08]], paso: 3.4, w: 4.4, h: 8.6, nieve: true, campana: true },
  /* Sierra Morena, al norte */
  { cresta: [[-6.1, 38.05], [-5.2, 38.2], [-4.4, 38.35], [-3.6, 38.4]], paso: 4.4, w: 2.3, h: 2.8 },
  /* Sierras de Cazorla y Segura */
  { cresta: [[-3.05, 37.95], [-2.75, 38.05], [-2.5, 38.2]], paso: 3.6, w: 2.4, h: 3.2 },
  /* Subbética cordobesa */
  { cresta: [[-4.55, 37.5], [-4.2, 37.5]], paso: 3.8, w: 2.2, h: 2.6 },
  /* Serranía de Ronda y Grazalema */
  { cresta: [[-5.45, 36.95], [-5.0, 37.0], [-4.7, 37.05]], paso: 3.5, w: 2.3, h: 3 },
  /* Filabres y Gádor, al este */
  { cresta: [[-2.65, 37.22], [-2.2, 37.24]], paso: 3.6, w: 2.3, h: 2.8 },
];

/* Generador pseudoaleatorio con semilla: el relieve sale igual en servidor y cliente */
function semilla(n: number) {
  let t = n;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

type Monte = { x: number; y: number; w: number; h: number; a: number; nieve: boolean };

function montes(): Monte[] {
  const azar = semilla(2027);
  const out: Monte[] = [];
  for (const s of SIERRAS) {
    const pts = s.cresta.map(([lon, lat]) => [px(lon), py(lat)] as const);
    const tramos = pts.slice(1).map(([x1, y1], i) => Math.hypot(x1 - pts[i]![0], y1 - pts[i]![1]));
    const total = tramos.reduce((a, b) => a + b, 0);
    const n = Math.max(1, Math.round(total / s.paso));
    for (let k = 0; k <= n; k++) {
      /* Punto a la distancia k/n a lo largo de la cresta */
      let d = (k / n) * total;
      let i = 0;
      while (i < tramos.length - 1 && d > tramos[i]!) d -= tramos[i++]!;
      const largo = tramos[i] ?? 0;
      const t = largo ? d / largo : 0;
      const [x0, y0] = pts[i]!;
      const [x1, y1] = pts[i + 1]!;
      const perfil = s.campana ? 0.55 + 0.6 * Math.sin((Math.PI * (k + 0.5)) / (n + 1)) : 1;
      const f = (0.8 + azar() * 0.4) * perfil;
      out.push({
        x: x0 + (x1 - x0) * t + (azar() - 0.5) * s.paso * 0.3,
        y: y0 + (y1 - y0) * t + (azar() - 0.5) * 1.2,
        w: s.w * f,
        h: s.h * f,
        a: (azar() - 0.5) * 0.5,
        nieve: !!s.nieve && f > 0.85,
      });
    }
  }
  /* De atrás hacia delante: los de abajo tapan a los de arriba */
  return out.sort((p, q) => p.y - q.y);
}

const MONTES = montes();

function MonteSvg({ m }: { m: Monte }) {
  const ax = m.a * m.w;
  const ay = -m.h;
  return (
    <g transform={`translate(${m.x.toFixed(1)} ${m.y.toFixed(1)})`}>
      {/* Cara iluminada (izquierda) y cara en sombra (derecha) */}
      <path d={`M${-m.w} 0 L${ax} ${ay} L${m.w * 0.12} 0 Z`} fill="var(--background)" fillOpacity="0.7" stroke="none" />
      <path d={`M${ax} ${ay} L${m.w} 0 L${m.w * 0.12} 0 Z`} fill="var(--primary)" fillOpacity="0.3" stroke="none" />
      <path
        d={`M${-m.w} 0 L${ax} ${ay} L${m.w} 0`}
        stroke="var(--primary)"
        strokeOpacity="0.45"
        strokeWidth="0.35"
      />
      {m.nieve && (
        <path
          d={`M${ax - m.w * 0.36} ${ay * 0.7} L${ax} ${ay} L${ax + m.w * 0.36} ${ay * 0.7} L${ax + m.w * 0.1} ${ay * 0.8} L${ax - m.w * 0.12} ${ay * 0.66} Z`}
          fill="#fff"
          stroke="none"
        />
      )}
    </g>
  );
}

const FUENTE = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;
const CURSIVA = {
  fontFamily: "var(--font-display)",
  fontStyle: "italic",
  fontWeight: 600,
} as const;

/* Marco del mapa: se ve completo y con las esquinas redondeadas, sin trozos recortados */
const VB = { x: 274, y: 552, w: 162, h: 92 };

export function MapaDistancias() {
  const gx = px(GRANADA.lon);
  const gy = py(GRANADA.lat);
  const resumen = DESTINOS.map((d) => `${d.nombre} ${d.km} km`).join(", ");

  return (
    <svg
      viewBox={`${VB.x} ${VB.y} ${VB.w} ${VB.h}`}
      role="img"
      aria-labelledby="mapa-distancias-titulo"
      className="block h-auto w-full text-primary"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title id="mapa-distancias-titulo">{`Distancias por carretera desde Granada: ${resumen}. Sierra Nevada queda junto a Granada.`}</title>

      <defs>
        <clipPath id="mapa-distancias-marco">
          <rect x={VB.x} y={VB.y} width={VB.w} height={VB.h} rx="7" />
        </clipPath>
        {/* Sombra suave bajo Sierra Nevada para dar sensación de volumen */}
        <radialGradient id="mapa-distancias-sombra" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
        {/* Mar con un degradado muy ligero hacia la costa */}
        <linearGradient id="mapa-distancias-mar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-sky)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--brand-sky)" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      <g clipPath="url(#mapa-distancias-marco)">
        {/* Mar */}
        <rect x={VB.x} y={VB.y} width={VB.w} height={VB.h} fill="url(#mapa-distancias-mar)" stroke="none" />

        {/* Tierra: la misma silueta del mapa de la portada */}
        <path d={LAND} fill="var(--accent)" fillOpacity="0.5" stroke="var(--primary)" strokeOpacity="0.55" strokeWidth="0.7" />

        {/* Relieve */}
        <ellipse cx={px(-3.0)} cy={py(37.06) + 0.5} rx="24" ry="8" fill="url(#mapa-distancias-sombra)" stroke="none" />
        {MONTES.map((m, i) => (
          <MonteSvg key={i} m={m} />
        ))}

        {/* Rótulos de geografía */}
        <text
          x={px(-3.0)}
          y={py(36.9) + 0.5}
          textAnchor="middle"
          className="notranslate"
          fill="currentColor"
          stroke="var(--background)"
          strokeWidth="1.6"
          strokeOpacity="0.75"
          paintOrder="stroke"
          fontSize="5.3"
          style={CURSIVA}
          opacity="0.85"
        >
          Sierra Nevada
        </text>
        <text
          x={px(-1.6)}
          y={py(36.2)}
          textAnchor="middle"
          className="notranslate"
          fill="currentColor"
          stroke="none"
          fontSize="4.4"
          letterSpacing="0.9"
          style={CURSIVA}
          opacity="0.5"
        >
          Mar Mediterráneo
        </text>

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
            opacity="0.75"
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
          x={gx}
          y={gy - 23}
          textAnchor="middle"
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
      </g>

      {/* Borde fino del marco */}
      <rect
        x={VB.x + 0.3}
        y={VB.y + 0.3}
        width={VB.w - 0.6}
        height={VB.h - 0.6}
        rx="6.8"
        stroke="var(--primary)"
        strokeOpacity="0.25"
        strokeWidth="0.6"
      />
    </svg>
  );
}
