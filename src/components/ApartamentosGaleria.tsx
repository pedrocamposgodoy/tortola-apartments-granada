import { useState } from "react";
import { Accessibility, Mail } from "lucide-react";

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
type Props = {
  apartamentos: Apto[];
  abrir: (a: Apto, index: number) => void;
};

const mailto = (nombre: string) =>
  `mailto:reservas@apartamentostortola.com?subject=${encodeURIComponent("Consulta " + nombre)}`;

function Cuerpo({ a, className = "" }: { a: Apto; className?: string }) {
  return (
    <div className={`flex flex-1 flex-col p-6 ${className}`}>
      <h3 translate="no" className="notranslate font-display text-3xl">{a.nombre}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{a.desc}</p>
      <ul className="mb-6 mt-5 flex flex-wrap gap-2">
        {a.detalles.map((d) => (
          <li key={d} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{d}</li>
        ))}
      </ul>
      <a
        href={mailto(a.nombre)}
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
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
      <span className="pointer-events-none absolute bottom-3 left-3 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
        Fotografía provisional
      </span>
      {a.accesible && (
        <span className="pointer-events-none absolute bottom-3 right-3 z-10 rounded-full bg-[var(--terracota)] px-3 py-1 text-xs font-semibold text-white shadow-md">
          El más amplio
        </span>
      )}
    </>
  );
}

/* Foto principal + miniaturas visibles; la tira solo aparece si hay más de una foto */
function Miniaturas({ a, abrir }: { a: Apto; abrir: Props["abrir"] }) {
  const [i, setI] = useState(0);
  return (
    <article className={`flex flex-col overflow-hidden rounded-2xl border-t-4 ${a.borde} ${a.colorFondo}`} style={{ boxShadow: "var(--shadow-soft)" }}>
      <div className="relative">
        <button type="button" onClick={() => abrir(a, i)} className="block w-full" aria-label={`Ampliar foto de ${a.nombre}`}>
          <img src={a.fotos[i]!.src} alt={a.fotos[i]!.alt} loading="lazy" className="h-72 w-full object-cover" />
        </button>
        <Etiquetas a={a} />
      </div>
      {a.fotos.length > 1 && (
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
      )}
      <Cuerpo a={a} />
    </article>
  );
}

export function ApartamentosGaleria({ apartamentos, abrir }: Props) {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-3 lg:gap-10">
      {apartamentos.map((a) => (
        <Miniaturas key={a.id} a={a} abrir={abrir} />
      ))}
    </div>
  );
}
