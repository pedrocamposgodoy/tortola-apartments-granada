import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Train,
  Ticket,
  Droplets,
  Wine,
  Car,
  Clock,
  Plane,
  Coffee,
  Music,
  ArrowRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";

export const Route = createFileRoute("/experiencias")({
  head: () => ({
    meta: [
      {
        title:
          "Experiencias y servicios exclusivos | Apartamentos Tórtola 10 · Granada",
      },
      {
        name: "description",
        content:
          "Personaliza tu estancia en Granada: parking privado, transfer, packs de bienvenida, visitas guiadas a la Alhambra, baños árabes (Hammam) y flamenco en el Sacromonte. Añade tus extras al reservar en Apartamentos Tórtola 10.",
      },
      {
        property: "og:title",
        content:
          "Experiencias y servicios exclusivos | Apartamentos Tórtola 10 · Granada",
      },
      {
        property: "og:description",
        content:
          "Personaliza tu estancia en Granada: parking, transfer, packs de bienvenida, Alhambra, Hammam y flamenco. Añade tus extras al reservar en Apartamentos Tórtola 10.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Experiencias,
});

type Extra = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  titulo: string;
  desc: string;
  detalle: string;
  color: string;
};

const bloques: {
  id: string;
  etiqueta: string;
  titulo: string;
  accent: string;
  extras: Extra[];
}[] = [
  {
    id: "confort",
    etiqueta: "Bloque 1",
    titulo: "Confort y Logística",
    accent: "text-sky-700",
    extras: [
      {
        id: "parking",
        icon: Car,
        titulo: "Plaza de Parking Privado (Cochera Tórtola 8)",
        desc: "Aparca con total tranquilidad en nuestra cochera privada, ubicada en el edificio anexo (Tórtola 8). Plaza cubierta, segura y a 30 segundos de tu apartamento.",
        detalle: "Plaza cubierta y cerrada · Acceso con mando · Sujeto a disponibilidad",
        color: "bg-secondary/50",
      },
      {
        id: "flexibilidad",
        icon: Clock,
        titulo: "Flexibilidad de Horario (Early Check-in / Late Check-out)",
        desc: "Llega antes o marcha más tarde sin prisas. Adaptamos tu entrada y salida a tus horarios de tren o vuelo, siempre sujeto a disponibilidad.",
        detalle: "Early check-in desde las 11:00 · Late check-out hasta las 14:00 · Sujeto a disponibilidad",
        color: "bg-sky-50",
      },
      {
        id: "transfer",
        icon: Plane,
        titulo: "Servicio de Transfer Privado (Aeropuerto / Traslados)",
        desc: "Te recogemos o dejamos en el aeropuerto, la estación de tren o cualquier punto de la ciudad con un conductor privado y vehículo cómodo.",
        detalle: "Traslados aeropuerto y estación · Conductor privado · Precio bajo petición",
        color: "bg-slate-50",
      },
    ],
  },
  {
    id: "apartamento",
    etiqueta: "Bloque 2",
    titulo: "Detalles en el Apartamento (Packs de Bienvenida)",
    accent: "text-rose-700",
    extras: [
      {
        id: "bienvenida-granada",
        icon: Wine,
        titulo: "Pack Bienvenida Granada",
        desc: "Recibe tu apartamento con una selección de productos de la tierra: vino D.O. Granada, queso artesano y aceite de oliva local de la provincia.",
        detalle: "Vino D.O. Granada · Queso artesano · Aceite de oliva virgen extra local",
        color: "bg-rose-50",
      },
      {
        id: "desayuno",
        icon: Coffee,
        titulo: "Cesta de Desayuno Gourmet (primera mañana)",
        desc: "Empieza tu primera mañana en Granada con una cesta preparada: pan artesano, repostería, zumo natural, café y selección de mermeladas locales.",
        detalle: "Pan y repostería artesana · Zumo natural · Café y mermeladas locales",
        color: "bg-amber-50",
      },
    ],
  },
  {
    id: "granada",
    etiqueta: "Bloque 3",
    titulo: "Descubre Granada",
    accent: "text-amber-700",
    extras: [
      {
        id: "alhambra",
        icon: Ticket,
        titulo: "Visita Guiada a la Alhambra y Generalife",
        desc: "Garantizamos tus entradas a la Alhambra en el horario que elijas y, si lo deseas, con un guía oficial que te descubrirá cada rincón del recinto nazarí. Sin colas ni sobresaltos.",
        detalle: "Incluye Generalife y Nasrid Palace · Guía opcional en español/inglés",
        color: "bg-amber-50",
      },
      {
        id: "hammam",
        icon: Droplets,
        titulo: "Experiencia en Baños Árabes (Hammam)",
        desc: "Relájate en pleno centro histórico con un circuito de baños árabes a distintas temperaturas, té y un masaje incluido. El complemento perfecto tras un día de visita.",
        detalle: "Circuito de 90 min · Té y pastas tradicionales · Masaje de 15 min incluido",
        color: "bg-rose-50",
      },
      {
        id: "flamenco",
        icon: Music,
        titulo: "Espectáculo de Flamenco en el Sacromonte",
        desc: "Vive el flamenco más auténtico en una cueva del Sacromonte, el barrio más legendoso de Granada. Arte, baile y cante en directo en un entorno único.",
        detalle: "Espectáculo en cueva del Sacromonte · Arte en directo · Bebida incluida",
        color: "bg-emerald-50",
      },
    ],
  },
];

function Experiencias() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-6 sm:px-6">
          <Link
            to="/"
            translate="no"
            className="notranslate font-display text-sm tracking-[0.15em] text-primary-foreground sm:text-xl"
          >
            APARTAMENTOS TÓRTOLA 10
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/"
              className="hidden rounded-full border border-primary-foreground/40 px-5 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:inline-block"
            >
              Inicio
            </Link>
            <Link
              to="/"
              hash="contacto"
              className="rounded-full border border-primary-foreground/40 px-3 py-2 text-xs text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:px-5 sm:text-sm"
            >
              Reservar
            </Link>
            <LanguageSelector />
          </div>
        </nav>
      </header>

      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-secondary">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative mx-auto max-w-3xl px-6 pt-24 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Servicios adicionales
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-primary-foreground sm:text-5xl">
            Personaliza tu estancia en{" "}
            <span translate="no" className="notranslate">
              Granada
            </span>{" "}
            con nuestros servicios exclusivos
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            Además de un apartamento moderno junto a la estación, ponemos a tu
            disposición una selección de experiencias y servicios para que
            aproveches{" "}
            <span translate="no" className="notranslate">
              Granada
            </span>{" "}
            al máximo.
          </p>
        </div>
      </section>

      {bloques.map((bloque) => (
        <section
          key={bloque.id}
          className="mx-auto max-w-6xl px-6 py-14"
        >
          <div className="mb-8 flex items-center gap-3">
            <Sparkles className={`h-6 w-6 ${bloque.accent}`} />
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {bloque.etiqueta}
              </p>
              <h2 className="font-display text-3xl leading-tight">
                {bloque.titulo}
              </h2>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {bloque.extras.map((e) => {
              const Icon = e.icon;
              return (
                <article
                  key={e.id}
                  className={`flex flex-col overflow-hidden rounded-2xl ${e.color}`}
                  style={{ boxShadow: "var(--shadow-soft)" }}
                >
                  <div className="flex items-center gap-4 p-6 pb-2">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="font-display text-xl leading-tight">
                      {e.titulo}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col p-6 pt-2">
                    <p className="text-sm text-muted-foreground">{e.desc}</p>
                    <p className="mt-4 rounded-lg border border-border bg-card/60 px-4 py-3 text-xs text-muted-foreground">
                      {e.detalle}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        to="/"
                        search={{ extra: e.id }}
                        hash="contacto"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
                      >
                        Añadir a mi estancia
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      <section className="bg-secondary/50 py-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2">
            <Train className="mr-2 inline h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              A 2 min de la Estación de Ferrocarril (AVE) de{" "}
              <span translate="no" className="notranslate">
                Granada
              </span>
            </span>
          </div>
          <h2 className="mt-6 font-display text-3xl">
            Reserva tu apartamento y añade las experiencias que prefieras
          </h2>
          <p className="mt-4 text-muted-foreground">
            Escríbenos indicando tu apartamento y las experiencias que deseas.
            Confirmamos disponibilidad y precios en menos de 24 horas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              hash="contacto"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              Reservar directo (-10%)
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              <MapPin className="h-4 w-4" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()}{" "}
        <span translate="no" className="notranslate">
          Apartamentos Tórtola 10
        </span>{" "}
        · Apartamentos turísticos ·{" "}
        <span translate="no" className="notranslate">
          Granada
        </span>
      </footer>
    </div>
  );
}
