import { useState } from "react";
import { Sun, Sunset, MapPin, Compass } from "lucide-react";

type Plan = { manana: string; tarde: string };
type Perfil = {
  id: string;
  emoji: string;
  nombre: string;
  intro: string;
  dia1: Plan;
  dia2: Plan;
  mapa: string;
};

// Edita aquí los textos de cada perfil
const perfiles: Perfil[] = [
  {
    id: "senior",
    emoji: "🧘",
    nombre: "Sénior / Calmado",
    intro:
      "Un ritmo tranquilo, sin cuestas innecesarias y con tiempo para disfrutar de cada rincón.",
    dia1: {
      manana: "Visita a la Alhambra subiendo en taxi o en el autobús C30/C32 desde el centro.",
      tarde: "Paseo sereno por los jardines del Carmen de los Mártires, con vistas a la Vega.",
    },
    dia2: {
      manana: "Centro histórico llano: Catedral, Capilla Real y Alcaicería.",
      tarde: "Relax en los Baños Árabes con circuito de aguas y té.",
    },
    mapa: "https://www.google.com/maps/search/Alhambra+Carmen+de+los+Martires+Catedral+Granada",
  },
  {
    id: "parejas",
    emoji: "💑",
    nombre: "Parejas / Jóvenes",
    intro: "Monumentos, tapas y los mejores atardeceres de la ciudad.",
    dia1: {
      manana: "Alhambra y Generalife con entrada a los Palacios Nazaríes.",
      tarde:
        "Ruta de tapas por la calle Navas y el Centro, y atardecer en el Mirador de San Miguel Alto.",
    },
    dia2: {
      manana: "Paseo por las callejuelas del Albaicín hasta el Mirador de San Nicolás.",
      tarde: "Descubre las cuevas del Sacromonte y, si te animas, un espectáculo flamenco.",
    },
    mapa: "https://www.google.com/maps/search/Calle+Navas+San+Miguel+Alto+Albaicin+Sacromonte+Granada",
  },
  {
    id: "familias",
    emoji: "👨‍👩‍👧",
    nombre: "Familias con Niños",
    intro: "Planes que divierten a los pequeños y encantan a los mayores.",
    dia1: {
      manana: "Parque de las Ciencias: planetario, mariposario y experimentos interactivos.",
      tarde: "Juegos y paseo en el Parque García Lorca, con zonas verdes y sombra.",
    },
    dia2: {
      manana: "Jardines del Generalife: fuentes, flores y espacio para caminar.",
      tarde: "Recorrido en el tren turístico por los barrios más emblemáticos.",
    },
    mapa: "https://www.google.com/maps/search/Parque+de+las+Ciencias+Parque+Garcia+Lorca+Generalife+Granada",
  },
  {
    id: "mascota",
    emoji: "🐶",
    nombre: "Con Mascota (Pet-Friendly)",
    intro: "Granada al aire libre, con espacios abiertos y terrazas donde tu mascota es bienvenida.",
    dia1: {
      manana: "Paseo por la Ribera del Genil o por la Dehesa del Generalife.",
      tarde: "Terrazas pet-friendly en la Plaza Larga del Albaicín.",
    },
    dia2: {
      manana: "Ruta por los miradores exteriores de la ciudad.",
      tarde: "Escapada a la Vega de Granada: caminos llanos entre campos y acequias.",
    },
    mapa: "https://www.google.com/maps/search/Paseo+del+Genil+Dehesa+del+Generalife+Plaza+Larga+Granada",
  },
];

function DiaBloque({ titulo, plan }: { titulo: string; plan: Plan }) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-5">
      <h4 className="font-display text-xl">{titulo}</h4>
      <div className="mt-4 space-y-4">
        <div className="flex gap-3">
          <Sun className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mañana</p>
            <p className="mt-1 text-sm">{plan.manana}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Sunset className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tarde</p>
            <p className="mt-1 text-sm">{plan.tarde}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Granada48h() {
  const [activo, setActivo] = useState("senior");
  const p = perfiles.find((x) => x.id === activo)!;

  return (
    <section id="granada-48h" className="mx-auto max-w-6xl px-6 py-14">
      <div className="text-center">
        <Compass className="mx-auto h-7 w-7 text-primary" />
        <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
          <span translate="no" className="notranslate">Granada</span> en 48 Horas: La Guía de tu Anfitrión
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Selecciona tu estilo de viaje para ver nuestra recomendación personalizada
        </p>
      </div>

      <div role="tablist" className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {perfiles.map((x) => {
          const sel = x.id === activo;
          return (
            <button
              key={x.id}
              role="tab"
              aria-selected={sel}
              onClick={() => setActivo(x.id)}
              className={`flex flex-col items-center gap-1 rounded-2xl border px-3 py-4 text-center text-sm font-medium transition-all ${
                sel
                  ? "border-primary bg-primary text-primary-foreground shadow-md"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <span className="text-2xl">{x.emoji}</span>
              {x.nombre}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className="mt-6 rounded-2xl bg-card p-6 sm:p-8"
        style={{ boxShadow: "var(--shadow-soft)" }}
      >
        <p className="text-base text-muted-foreground">{p.intro}</p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <DiaBloque titulo="Día 1" plan={p.dia1} />
          <DiaBloque titulo="Día 2" plan={p.dia2} />
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href={p.mapa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            <MapPin className="h-4 w-4 shrink-0" />
            Abrir mapa de recomendaciones en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
