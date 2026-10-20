/**
 * Mapa esquemático de viaje para el fondo del hero.
 * Silueta de Europa en puntos (Granada abajo a la izquierda, donde está de verdad),
 * con rutas en tren, coche, avión y barco, y un globo. Todo en trazo fino y baja opacidad.
 *
 * - Decorativo: aria-hidden, sin interacción.
 * - Usa el color de texto actual (text-primary): cambia solo si cambia la paleta en brand.css.
 * - Dos recuadros del mismo dibujo: uno ancho (escritorio) y otro vertical (móvil),
 *   siempre completos y anclados abajo, sin recortes.
 */

const COAST =
  "M133 634 L120 620 L100 600 L72 606 L61 558 L74 516 L72 480 L65 443 L65 435 L85 418 L129 421 L166 424 L203 426 L213 396 L214 354 L196 323 L155 303 L150 284 L177 275 L207 278 L203 253 L231 261 L240 256 L264 236 L283 214 L310 197 L323 160 L347 144 L384 138 L395 107 L386 62 L429 26 L431 65 L419 88 L414 107 L438 127 L486 121 L501 132 L578 107 L599 118 L628 96 L625 51 L680 40 L687 6 L754 -24 M133 634 L155 614 L192 611 L218 592 L231 566 L237 555 L231 536 L253 502 L264 488 L296 468 L294 438 L320 426 L347 435 L373 418 L399 398 L421 410 L431 438 L444 454 L466 474 L495 491 L519 522 L527 536 L532 578 L527 580 L543 566 L551 550 L543 527 L578 516 L562 508 L536 485 L530 468 L495 452 L488 424 L464 398 L464 373 L488 362 L495 384 L514 410 L541 432 L578 454 L595 480 L597 513 L606 533 L619 558 L628 592 L652 620 L665 594 L678 578 L680 519 L717 499 L724 474 L754 480 M475 90 L464 60 L455 18 L444 -10 L434 -33 L403 -2 L366 18 L340 -8 L329 -61 L336 -94 L384 -131 L436 -164 L477 -220 M475 90 L503 71 L540 46 L543 -2 L578 -24 L554 -58 L560 -108 L615 -145 L643 -192 M57 774 L67 732 L81 706 L107 690 L122 656 L135 636 L181 653 L201 659 L240 636 L292 611 L347 606 L394 608 L425 597 L440 606 M131 242 L181 225 L237 219 L262 208 L268 166 L240 158 L235 130 L209 88 L196 74 L203 32 L172 26 L153 1 L140 4 L129 37 L126 62 L144 90 L148 107 L177 104 L181 144 L153 149 L153 172 L140 191 L172 202 L153 214 L131 242 M126 180 L124 144 L135 116 L122 96 L89 96 L52 124 L55 172 L46 191 L89 197 L126 180 M466 578 L486 572 L525 569 L516 606 L495 606 L466 578 M388 494 L414 494 L414 544 L394 552 L388 494 M395 454 L410 438 L412 482 L397 480 L395 454 M281 533 L299 524 L296 541 L285 541 L281 533";

function Drawing() {
  return (
    <>
      {/* Europa en puntos */}
      <path d={COAST} strokeWidth="2.4" strokeDasharray="0.1 7" opacity="0.38" />

      {/* Curvas de nivel */}
      <g strokeWidth="1.2" opacity="0.10">
        <path d="M-300 300 C100 250 400 360 800 300 C1150 250 1450 330 1900 280" />
        <path d="M-300 380 C120 330 450 440 850 380 C1200 330 1500 410 1900 360" />
      </g>

      {/* Carretera arriba a la derecha, con coche */}
      <path d="M1190 124 C1280 84 1390 130 1490 98 C1550 80 1600 90 1670 72" strokeWidth="2" strokeDasharray="2 10" opacity="0.5" />
      <g transform="translate(1335 112) rotate(-8)" fill="var(--background)" strokeWidth="2" opacity="0.85">
        <path d="M-22 -4 v-6 q0-4 4-5 l8-1 l7-8 h13 l8 8 h8 q4 1 4 5 v7 z" />
        <path d="M-4 -23 v8 M8 -23 v8" strokeWidth="1.5" />
        <circle cx="-12" cy="-3" r="5" />
        <circle cx="14" cy="-3" r="5" />
      </g>

      {/* Globo aerostático a la derecha */}
      <g transform="translate(1340 250) scale(1.15)" fill="var(--background)" strokeWidth="2" opacity="0.85">
        <path d="M0 -48 C-26 -48 -34 -22 -20 -2 L-8 14 H8 L20 -2 C34 -22 26 -48 0 -48 Z" />
        <path d="M0 -48 C-11 -30 -11 -10 -8 14 M0 -48 C11 -30 11 -10 8 14" strokeWidth="1.4" />
        <path d="M-8 14 L-6 22 M8 14 L6 22" strokeWidth="1.4" />
        <path d="M-6 22 H6 V32 H-6 Z" />
      </g>

      {/* Ruta en tren desde el este hasta Granada, por la franja inferior */}
      <path d="M190 604 C420 632 720 628 1010 606 C1260 588 1450 572 1640 560" strokeWidth="2" strokeDasharray="14 8" opacity="0.5" />
      <path d="M190 616 C420 644 720 640 1010 618 C1260 600 1450 584 1640 572" strokeWidth="1" strokeDasharray="2 10" opacity="0.3" />
      <circle cx="700" cy="622" r="6" fill="var(--background)" strokeWidth="2" opacity="0.7" />
      <circle cx="700" cy="622" r="2" fill="currentColor" stroke="none" opacity="0.7" />
      <g transform="translate(1230 588) rotate(-6)" fill="var(--background)" strokeWidth="2" opacity="0.85">
        <path d="M-26 -6 v-16 q0-6 6-6 h34 q10 0 14 10 l4 12 v6 z" />
        <path d="M-18 -22 h8 v8 h-8 z M-4 -22 h8 v8 h-8 z M10 -22 l6 0 l3 8 h-9 z" strokeWidth="1.5" />
        <circle cx="-14" cy="-3" r="4" />
        <circle cx="14" cy="-3" r="4" />
      </g>

      {/* Barco en el Mediterráneo */}
      <g transform="translate(360 578)" fill="var(--background)" strokeWidth="2" opacity="0.85">
        <path d="M-30 0 H30 L20 16 H-20 Z" />
        <path d="M-14 0 V-12 H12 V0 M-4 -12 V-22 H6 V-12" strokeWidth="1.6" />
        <path d="M-38 24 q6 -5 12 0 t12 0 t12 0 t12 0 t12 0 t12 0" fill="none" strokeWidth="1.5" opacity="0.7" />
      </g>

      {/* Ruta aérea Londres -> Granada con avión */}
      <path d="M236 205 C95 300 80 480 170 546" strokeWidth="2" strokeDasharray="1 11" opacity="0.5" />
      <g transform="translate(116 387) rotate(189) scale(1.3)" fill="var(--background)" strokeWidth="1.6" opacity="0.85">
        <path d="M0 -16 q3 0 3 5 v8 l14 8 v4 l-14 -4 v8 l5 4 v3 l-8 -2 l-8 2 v-3 l5 -4 v-8 l-14 4 v-4 l14 -8 v-8 q0 -5 3 -5 z" />
      </g>

      {/* Pin de destino: Granada */}
      <g transform="translate(170 600)" opacity="0.95">
        <path d="M0 0 C-14 -18 -22 -26 -22 -38 A22 22 0 1 1 22 -38 C22 -26 14 -18 0 0 Z" fill="var(--brand-sky)" strokeWidth="2.2" />
        <circle cx="0" cy="-38" r="8" fill="var(--background)" strokeWidth="2" />
        <text
          x="0"
          y="28"
          textAnchor="middle"
          className="notranslate"
          fill="currentColor"
          stroke="none"
          fontSize="22"
          opacity="0.85"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
        >
          Granada
        </text>
      </g>
    </>
  );
}

const baseProps = {
  "aria-hidden": true,
  focusable: "false" as const,
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function TravelMap() {
  return (
    <>
      {/* Escritorio: dibujo ancho completo, anclado abajo */}
      <svg
        {...baseProps}
        viewBox="0 0 1600 720"
        preserveAspectRatio="xMidYMax meet"
        className="travel-map pointer-events-none absolute inset-0 hidden h-full w-full text-primary md:block"
      >
        <Drawing />
      </svg>
      {/* Móvil: solo la parte izquierda (Granada, Europa occidental, avión y barco) */}
      <svg
        {...baseProps}
        viewBox="0 360 560 360"
        preserveAspectRatio="xMinYMax meet"
        className="travel-map pointer-events-none absolute inset-0 h-full w-full text-primary md:hidden"
      >
        <Drawing />
      </svg>
    </>
  );
}
