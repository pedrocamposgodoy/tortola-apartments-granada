import { createFileRoute, Link } from "@tanstack/react-router";
import { Train, Ticket, Droplets, Wine, Car, ArrowRight } from "lucide-react";
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
          "Personaliza tu estancia en Granada: entradas y visitas guiadas a la Alhambra, baños árabes (Hammam), pack de bienvenida y plaza de parking privado. Añade tus extras al reservar en Apartamentos Tórtola 10.",
      },
      {
        property: "og:title",
        content:
          "Experiencias y servicios exclusivos | Apartamentos Tórtola 10 · Granada",
      },
      {
        property: "og:description",
        content:
          "Personaliza tu estancia en Granada: entradas a la Alhambra, baños árabes, pack de bienvenida y parking privado. Añade tus extras al reservar en Apartamentos Tórtola 10.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Experiencias,
});

const experiencias = [
  {
    id: "alhambra",
    icon: Ticket,
    titulo: "Entradas y Visitas guiadas a la Alhambra",
    desc: "Garantizamos tus entradas a la Alhambra en el horario que elijas y, si lo deseas, con un guía oficial que te descubrirá cada rincón del recinto nazarí. Sin colas ni sobresaltos.",
    detalle: "Incluye entradas a Generalife y Nasrid Palace · Guía opcional en español/inglés",
    color: "bg-amber-50",
  },
  {
    id: "hammam",
    icon: Droplets,
    titulo: "Sesión de Baños Árabes (Hammam)",
    desc: "Una experiencia de relax en pleno centro histórico: circuito de baños árabes con aguas a distintas temperaturas, té y masaje. El complemento perfecto tras un día de visita.",
    detalle: "Circuito de 90 min · Té y pastas tradicionales · Masaje de 15 min incluido",
    color: "bg-rose-50",
  },
  {
    id: "bienvenida",
    icon: Wine,
    titulo: "Pack de Bienvenida",
    desc: "Recibe tu apartamento con un pack de degustación: una botella de vino local de la tierra de Granada y una selección de productos artesanos de la provincia.",
    detalle: "Botella de vino D.O. Granada · Embutidos y quesos artesanos · Fruta de temporada",
    color: "bg-slate-50",
  },
  {
    id: "parking",
    icon: Car,
    titulo: "Plaza de Parking Privado (Cochera Tórtola 8)",
    desc: "Aparca con total tranquilidad en nuestra cochera privada, ubicada en el edificio anexo (Tórtola 8). Plaza cubierta, segura y a 30 segundos de tu apartamento.",
    detalle: "Plaza cubierta y cerrada · Acceso con mando · Sujeto a disponibilidad",
    color: "bg-secondary/50",
  },
];

function Experiencias() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="absolute inset-x-0 top-0 z-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-6 sm:px-6">
          <Link
            to="/"
            translate="no"
            className="notranslate font-display text-base tracking-[0.2em] text-primary-foreground sm:text-xl"
          >
            APARTAMENTOS TÓRTOLA 10
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden rounded-full border border-primary-foreground/40 px-5 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:inline-block"
            >
              Inicio
            </Link>
            <Link
              to="/"
              hash="contacto"
              className="rounded-full border border-primary-foreground/40 px-5 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10"
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
            disposición una selección de experiencias para que aproveches
            <span translate="no" className="notranslate">
              {" "}
              Granada
            </span>{" "}
            al máximo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 sm:grid-cols-2">
          {experiencias.map((e) => {
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
                  <h2 className="font-display text-2xl leading-tight">
                    {e.titulo}
                  </h2>
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
                    <Link
                      to="/"
                      className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                    >
                      Ver apartamentos
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

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
              className="rounded-full border border-border px-7 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
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
