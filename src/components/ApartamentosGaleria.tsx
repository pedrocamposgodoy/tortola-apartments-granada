import { useRef, useState } from "react";
import { Accessibility, ChevronLeft, ChevronRight, Images, Mail } from "lucide-react";

export type Foto = { src: string; alt: string };
export type Apto = {
  id: string;
  nombre: string;
  colorFondo: string;
  borde: string;
  accesible: boolean;
  desc: string;
  detalles: string[];
  fotos: Foto[];
};
export type Variante = "miniaturas" | "carrusel" | "mosaico";

type Props = {
  apartamentos: Apto[];
  variante: Variante;
  abrir: (a: Apto, index: number) => void;
};

const mailto = (nombre: string) =>
  `mailto:reservas@apartamentostortola.com?subject=${encodeURIComponent("Consulta " + nombre)}`;

function Cuerpo({ a, className = "" }: { a: Apto; className?: string }) {
  return (
    <div className={`p-6 ${className}`}>
      <h3 translate="no" className="notranslate font-display text-3xl">{a.nombre}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{a.desc}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {a.detalles.map((d) => (
          <li key={d} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{d}</li>
        ))}
      </ul>
      <a
        href={mailto(a.nombre)}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
      >
        <Mail className="h-4 w-4" />
        Consultar este apartamento
      </a>
    </div>
  );
}

function Etiquetas({ a }: { a: Apto }) {
  return (
    <>
      {a.accesible && (
        <span className="pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-foreground">
          <Accessibility className="h-3.5 w-3.5" />
          Adaptado para personas con movilidad reducida
        </span>
      )}
      {a.accesible && (
        <span className="pointer-events-none absolute bottom-3 right-3 z-10 rounded-full bg-[var(--terracota)] px-3 py-1 text-xs font-semibold text-white shadow-md">
          El más amplio
        </span>
      )}
    </>
  );
}

/* Opción 1: foto principal + miniaturas visibles */
function Miniaturas({ a, abrir }: { a: Apto; abrir: Props["abrir"] }) {
  const [i, setI] = useState(0);
  return (
    <article className={`overflow-hidden rounded-2xl border-t-4 ${a.borde} ${a.colorFondo}`} style={{ boxShadow: "var(--shadow-soft)" }}>
      <div className="relative">
        <button type="button" onClick={() => abrir(a, i)} className="block w-full" aria-label={`Ampliar foto de ${a.nombre}`}>
          <img src={a.fotos[i]!.src} alt={a.fotos[i]!.alt} loading="lazy" className="h-72 w-full object-cover" />
        </button>
        <Etiquetas a={a} />
      </div>
      <div className="grid grid-cols-4 gap-1.5 bg-background/60 p-1.5">
        {a.fotos.slice(0, 4).map((f, k) => (
          <button
            key={f.src + k}
            type="button"
            onClick={() => setI(k)}
            aria-label={`Ver foto ${k + 1}`}
            className={`relative overflow-hidden rounded-lg ${k === i ? "ring-2 ring-primary" : "opacity-80 hover:opacity-100"}`}
          >
            <img src={f.src} alt="" loading="lazy" className="h-16 w-full object-cover" />
            {k === 3 && a.fotos.length > 4 && (
              <span
                onClick={(e) => { e.stopPropagation(); abrir(a, 0); }}
                className="absolute inset-0 flex items-center justify-center bg-black/55 text-xs font-semibold text-white"
              >
                +{a.fotos.length - 4}
              </span>
            )}
          </button>
        ))}
      </div>
      <Cuerpo a={a} />
    </article>
  );
}

/* Opción 2: carrusel deslizable */
function Carrusel({ a, abrir }: { a: Apto; abrir: Props["abrir"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const ir = (n: number) => {
    const el = ref.current;
    if (!el) return;
    const k = (n + a.fotos.length) % a.fotos.length;
    el.scrollTo({ left: k * el.clientWidth, behavior: "smooth" });
    setI(k);
  };
  return (
    <article className={`overflow-hidden rounded-2xl border-t-4 ${a.borde} ${a.colorFondo}`} style={{ boxShadow: "var(--shadow-soft)" }}>
      <div className="relative">
        <div
          ref={ref}
          onScroll={(e) => {
            const el = e.currentTarget;
            setI(Math.round(el.scrollLeft / el.clientWidth));
          }}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {a.fotos.map((f, k) => (
            <button key={f.src + k} type="button" onClick={() => abrir(a, k)} className="w-full shrink-0 snap-center" aria-label={`Ampliar foto ${k + 1}`}>
              <img src={f.src} alt={f.alt} loading="lazy" className="h-80 w-full object-cover" />
            </button>
          ))}
        </div>
        <Etiquetas a={a} />
        <button type="button" onClick={() => ir(i - 1)} aria-label="Foto anterior" className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md hover:bg-white">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button type="button" onClick={() => ir(i + 1)} aria-label="Foto siguiente" className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md hover:bg-white">
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
          {a.fotos.map((_, k) => (
            <span key={k} className={`h-1.5 rounded-full bg-white shadow ${k === i ? "w-5" : "w-1.5 opacity-70"}`} />
          ))}
        </div>
      </div>
      <Cuerpo a={a} />
    </article>
  );
}

/* Opción 3: fila completa con mosaico de fotos (estilo Airbnb) */
function Mosaico({ a, abrir, invertido }: { a: Apto; abrir: Props["abrir"]; invertido: boolean }) {
  const f = a.fotos;
  return (
    <article className={`grid overflow-hidden rounded-3xl border-t-4 ${a.borde} ${a.colorFondo} lg:grid-cols-5`} style={{ boxShadow: "var(--shadow-soft)" }}>
      <div className={`relative grid grid-cols-4 grid-rows-2 gap-1.5 p-1.5 lg:col-span-3 ${invertido ? "lg:order-2" : ""}`}>
        <button type="button" onClick={() => abrir(a, 0)} className="col-span-4 row-span-1 overflow-hidden rounded-xl sm:col-span-2 sm:row-span-2" aria-label="Ampliar foto principal">
          <img src={f[0]!.src} alt={f[0]!.alt} loading="lazy" className="h-64 w-full object-cover sm:h-full sm:min-h-[22rem]" />
        </button>
        {f.slice(1, 5).map((x, k) => (
          <button key={x.src + k} type="button" onClick={() => abrir(a, k + 1)} className="relative col-span-2 overflow-hidden rounded-xl sm:col-span-1" aria-label={`Ampliar foto ${k + 2}`}>
            <img src={x.src} alt={x.alt} loading="lazy" className="h-28 w-full object-cover sm:h-full" />
          </button>
        ))}
        <Etiquetas a={a} />
        <button
          type="button"
          onClick={() => abrir(a, 0)}
          className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold shadow-md hover:bg-white"
        >
          <Images className="h-4 w-4" />
          Ver las {f.length} fotos
        </button>
      </div>
      <Cuerpo a={a} className="flex flex-col justify-center lg:col-span-2 lg:p-10" />
    </article>
  );
}

export function ApartamentosGaleria({ apartamentos, variante, abrir }: Props) {
  if (variante === "mosaico") {
    return (
      <div className="mt-12 flex flex-col gap-10">
        {apartamentos.map((a, i) => (
          <Mosaico key={a.id} a={a} abrir={abrir} invertido={i % 2 === 1} />
        ))}
      </div>
    );
  }
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-3 lg:gap-10">
      {apartamentos.map((a) =>
        variante === "miniaturas" ? (
          <Miniaturas key={a.id} a={a} abrir={abrir} />
        ) : (
          <Carrusel key={a.id} a={a} abrir={abrir} />
        ),
      )}
    </div>
  );
}
