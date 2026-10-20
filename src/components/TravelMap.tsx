/**
 * Mapa esquemático de viaje para el fondo del hero.
 * Rutas punteadas (carretera, tren y avión) que convergen en Granada.
 * Decorativo: aria-hidden, sin interacción. Usa el color de texto actual
 * (text-primary), así que se adapta solo si cambia la paleta en brand.css.
 *
 * Está anclado abajo a la derecha (xMaxYMax) para que el destino "Granada"
 * se vea también en móvil, donde se recorta el lado izquierdo del dibujo.
 */
export function TravelMap() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1200 720"
      preserveAspectRatio="xMaxYMax slice"
      className="travel-map pointer-events-none absolute inset-0 h-full w-full text-primary"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Curvas de nivel */}
      <g strokeWidth="1.2" opacity="0.12">
        <path d="M-700 330 C-400 270 -120 380 160 320 C420 265 560 350 820 300 C1060 255 1400 340 1900 290" />
        <path d="M-700 400 C-420 350 -100 450 200 395 C470 345 620 430 880 380 C1120 335 1450 410 1900 370" />
        <path d="M-700 470 C-440 430 -80 520 240 470 C520 425 680 500 940 455 C1180 415 1500 480 1900 450" />
        <path d="M-700 250 C-380 200 -140 290 120 240 C380 190 520 270 780 225 C1020 185 1380 260 1900 215" />
      </g>

      {/* Carretera (arriba): coche */}
      <g transform="translate(0 50)">
        <path
          d="M-600 150 C-380 60 -160 160 40 110 C200 70 260 140 380 100 C500 60 560 40 700 80 C840 120 1000 40 1220 110 C1400 155 1600 90 1800 60"
          strokeWidth="2"
          strokeDasharray="2 10"
          opacity="0.5"
        />
        <circle cx="380" cy="100" r="6" fill="var(--background)" strokeWidth="2" opacity="0.7" />
        <circle cx="380" cy="100" r="2" fill="currentColor" stroke="none" opacity="0.7" />
        <g transform="translate(700 80) rotate(16)" fill="var(--background)" strokeWidth="2" opacity="0.8">
          <path d="M-22 -4 v-6 q0-4 4-5 l8-1 l7-8 h13 l8 8 h8 q4 1 4 5 v7 z" />
          <path d="M-4 -23 v8 M8 -23 v8" strokeWidth="1.5" />
          <circle cx="-12" cy="-3" r="5" />
          <circle cx="14" cy="-3" r="5" />
        </g>
      </g>

      {/* Vía de tren hacia Granada (zona baja, por debajo de los botones) */}
      <path
        d="M-600 705 C-380 665 -160 705 40 672 C200 645 340 680 520 652 C700 626 840 616 1010 620"
        strokeWidth="2"
        strokeDasharray="14 8"
        opacity="0.5"
      />
      <path
        d="M-600 717 C-380 677 -160 717 40 684 C200 657 340 692 520 664 C700 638 840 628 1010 632"
        strokeWidth="1"
        strokeDasharray="2 10"
        opacity="0.3"
      />
      <circle cx="520" cy="652" r="6" fill="var(--background)" strokeWidth="2" opacity="0.7" />
      <circle cx="520" cy="652" r="2" fill="currentColor" stroke="none" opacity="0.7" />

      {/* Tren sobre la vía, a la izquierda del texto */}
      <g transform="translate(205 660) rotate(-9)" fill="var(--background)" strokeWidth="2" opacity="0.8">
        <path d="M-26 -6 v-16 q0-6 6-6 h34 q10 0 14 10 l4 12 v6 z" />
        <path d="M-18 -22 h8 v8 h-8 z M-4 -22 h8 v8 h-8 z M10 -22 l6 0 l3 8 h-9 z" strokeWidth="1.5" />
        <circle cx="-14" cy="-3" r="4" />
        <circle cx="14" cy="-3" r="4" />
      </g>

      {/* Ruta aérea punteada que llega a Granada */}
      <path
        d="M1800 300 C1500 320 1200 440 1010 620"
        strokeWidth="2"
        strokeDasharray="1 11"
        opacity="0.45"
      />
      <g transform="translate(1196 440) rotate(-132)" fill="var(--background)" strokeWidth="1.8" opacity="0.75">
        <path d="M0 -16 q3 0 3 5 v8 l14 8 v4 l-14 -4 v8 l5 4 v3 l-8 -2 l-8 2 v-3 l5 -4 v-8 l-14 4 v-4 l14 -8 v-8 q0 -5 3 -5 z" />
      </g>

      {/* Pin de destino: Granada */}
      <g transform="translate(1010 620)" opacity="0.9">
        <path
          d="M0 0 C-14 -18 -22 -26 -22 -38 A22 22 0 1 1 22 -38 C22 -26 14 -18 0 0 Z"
          fill="var(--brand-sky)"
          strokeWidth="2.2"
        />
        <circle cx="0" cy="-38" r="8" fill="var(--background)" strokeWidth="2" />
        <text
          x="0"
          y="28"
          textAnchor="middle"
          className="notranslate"
          fill="currentColor"
          stroke="none"
          fontSize="22"
          opacity="0.8"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
        >
          Granada
        </text>
      </g>
    </svg>
  );
}
