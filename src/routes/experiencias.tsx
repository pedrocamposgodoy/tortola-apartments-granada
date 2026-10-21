import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Train,
  Car,
  Clock,
  Plane,
  Coffee,
  Wine,
  Luggage,
  Baby,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  BadgeCheck,
  Landmark,
  Mountain,
  Route as RouteIcon,
  Ticket,
  Languages,
} from "lucide-react";
import { LanguageSelector } from "@/components/LanguageSelector";
import { Granada48h } from "@/components/Granada48h";

export const Route = createFileRoute("/experiencias")({
  head: () => ({
    meta: [
      {
        title:
          "Qué hacer en Granada: experiencias y servicios | Apartamentos Tórtola 10",
      },
      {
        name: "description",
        content:
          "Qué hacer en Granada: itinerarios de 2 días según tu estilo de viaje, visitas con guía oficial (Alhambra, casa de García Lorca, Albaicín y Sacromonte) y servicios para tu estancia en Apartamentos Tórtola 10.",
      },
      {
        property: "og:title",
        content:
          "Qué hacer en Granada: experiencias y servicios | Apartamentos Tórtola 10",
      },
      {
        property: "og:description",
        content:
          "Itinerarios de 2 días, visitas con guía oficial y servicios para tu estancia en Granada.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Experiencias,
});

type Tarjeta = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  titulo: string;
  desc: string;
  nota?: string;
};

// ---- Edita aquí los textos ----

// Visitas con el guía colaborador (Alain). Precios y duraciones: bajo petición hasta confirmarlos con él.
const visitasGuia: Tarjeta[] = [
  {
    id: "guia-alhambra",
    icon: Landmark,
    titulo: "La Alhambra con guía oficial",
    desc: "Recorre los Palacios Nazaríes, el Generalife y la Alcazaba con un guía oficial de la Alhambra que te cuenta la historia que no aparece en las guías.",
    nota: "Visita guiada · Consulta idiomas y horarios",
  },
  {
    id: "guia-lorca",
    icon: BadgeCheck,
    titulo: "La casa de García Lorca",
    desc: "Una visita distinta: la casa donde vivió el poeta, no un museo. Su vida, su familia y la Granada que lo inspiró, contadas desde dentro.",
    nota: "Visita guiada · Plazas limitadas",
  },
  {
    id: "guia-albaicin",
    icon: Mountain,
    titulo: "Albaicín y cuevas del Sacromonte",
    desc: "Callejuelas, miradores, aljibes y las cuevas del Sacromonte, con la mirada de quien conoce cada rincón del barrio.",
    nota: "Ruta a pie · Calzado cómodo",
  },
  {
    id: "guia-medida",
    icon: RouteIcon,
    titulo: "Tu ruta a medida",
    desc: "Cuéntanos qué te interesa (historia, Lorca, fotografía, gastronomía, ir con niños…) y Alain diseña una visita privada solo para vosotros.",
    nota: "Visita privada · Precio bajo petición",
  },
];

// Servicios para la estancia
const servicios: Tarjeta[] = [
  {
    id: "parking",
    icon: Car,
    titulo: "Plaza de parking privado",
    desc: "Cochera privada en el edificio anexo (Tórtola 8), cubierta y a 30 segundos del apartamento. Con punto de carga eléctrica normal (no rápida).",
    nota: "Coste adicional · Sujeto a disponibilidad",
  },
  {
    id: "consigna",
    icon: Luggage,
    titulo: "Consigna de equipaje",
    desc: "Deja tus maletas en nuestra cochera antes del check-in o después del check-out y aprovecha el día sin cargar con ellas.",
    nota: "Coste adicional · Consúltanos al reservar",
  },
  {
    id: "flexibilidad",
    icon: Clock,
    titulo: "Early check-in y late check-out",
    desc: "Adaptamos tu entrada y salida a tus horarios de tren o vuelo, siempre que el apartamento esté libre.",
    nota: "Sujeto a disponibilidad",
  },
  {
    id: "transfer",
    icon: Plane,
    titulo: "Transfer privado",
    desc: "Te recogemos o te dejamos en el aeropuerto, la estación o donde necesites, con conductor privado.",
    nota: "Precio bajo petición",
  },
  {
    id: "cuna",
    icon: Baby,
    titulo: "Cuna para bebés",
    desc: "Si viajas con un bebé, te dejamos una cuna preparada en el apartamento.",
    nota: "Bajo petición · Sujeta a disponibilidad",
  },
  {
    id: "bienvenida",
    icon: Wine,
    titulo: "Pack de bienvenida",
    desc: "Productos de la tierra esperándote al llegar: vino D.O. Granada, queso artesano y aceite de oliva local.",
    nota: "Bajo petición",
  },
  {
    id: "desayuno",
    icon: Coffee,
    titulo: "Desayuno de bienvenida",
    desc: "Tu primera mañana en Granada empieza con una cesta de desayuno preparada: pan, repostería, zumo y café.",
    nota: "Bajo petición",
  },
];

function BotonConsulta({ id, etiqueta }: { id: string; etiqueta: string }) {
  return (
    <Link
      to="/"
      search={{ extra: id }}
      hash="contacto"
      className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
    >
      {etiqueta}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function Experiencias() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-border bg-background/90 shadow-sm backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <Link
            to="/"
            translate="no"
            className="notranslate inline-flex items-center"
          >
            <img
              src="/images/logo-tortola.png"
              alt="Apartamentos Tórtola 10 · Granada"
              width={640}
              height={640}
              className="h-20 w-auto rounded-full bg-background/90 shadow-sm sm:h-24"
            />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/"
              className="hidden rounded-full border border-border px-5 py-2 text-sm text-foreground transition-colors hover:bg-muted sm:inline-block"
            >
              Inicio
            </Link>
            <Link
              to="/"
              hash="contacto"
              className="rounded-full border border-border px-3 py-2 text-xs text-foreground transition-colors hover:bg-muted sm:px-5 sm:text-sm"
            >
              Reservar
            </Link>
            <LanguageSelector />
          </div>
        </nav>
      </header>

      <section className="relative flex min-h-[52vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div aria-hidden="true" className="absolute inset-0 bg-lattice opacity-70" />
        <div className="relative mx-auto max-w-3xl px-6 pb-10 pt-36 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Experiencias y servicios</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Vive <span translate="no" className="notranslate">Granada</span> a tu manera
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base font-medium text-foreground/80">
            Itinerarios según tu estilo de viaje, visitas con un guía oficial y los detalles que hacen más fácil tu estancia.
          </p>
        </div>
      </section>

      <Granada48h />

      <section className="relative overflow-hidden bg-pastel py-16">
        <div aria-hidden="true" className="absolute inset-0 bg-lattice" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Con nuestro guía</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Visitas con Alain, guía oficial de la Alhambra</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Colaboramos con Alain, guía oficial de la Alhambra, que prepara visitas distintas de las habituales: desde la casa donde vivió García Lorca hasta rutas privadas a tu medida.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-1.5 text-sm text-muted-foreground">
              <Languages className="h-4 w-4 text-primary" />
              Visitas en español e inglés
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {visitasGuia.map((v) => {
              const Icon = v.icon;
              return (
                <article key={v.id} className="flex flex-col rounded-2xl border border-border bg-card/90 p-6" style={{ boxShadow: "var(--shadow-soft)" }}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-2xl leading-tight">{v.titulo}</h3>
                  </div>
                  <p className="mt-4 flex-1 text-sm text-muted-foreground">{v.desc}</p>
                  {v.nota && <p className="mt-4 rounded-lg bg-muted px-4 py-2.5 text-xs text-muted-foreground">{v.nota}</p>}
                  <BotonConsulta id={v.id} etiqueta="Consultar disponibilidad" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-border bg-card p-8 sm:p-10" style={{ boxShadow: "var(--shadow-soft)" }}>
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Ticket className="h-6 w-6" />
            </span>
            <h2 className="font-display text-3xl leading-tight">Cómo reservar la Alhambra y otros monumentos</h2>
          </div>
          <p className="mt-5 text-muted-foreground">
            Las entradas a la Alhambra se compran en la web oficial del Patronato, son nominativas y se agotan con semanas de antelación: te recomendamos reservarlas en cuanto confirmes tu viaje. La Catedral y la Capilla Real tienen también su venta oficial, y el Corral del Carbón es de acceso libre.
          </p>
          <p className="mt-3 text-muted-foreground">
            ¿Prefieres ir acompañado? Con Alain visitas la Alhambra con guía oficial. Escríbenos y te orientamos sobre horarios y tipos de entrada.
          </p>
          <a
            href="https://www.alhambra-patronato.es"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/50 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
          >
            Web oficial de la Alhambra
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Para tu estancia</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Servicios para que todo sea más fácil</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((e) => {
              const Icon = e.icon;
              return (
                <article key={e.id} className="flex flex-col rounded-2xl bg-card p-6" style={{ boxShadow: "var(--shadow-soft)" }}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="font-display text-xl leading-tight">{e.titulo}</h3>
                  </div>
                  <p className="mt-4 flex-1 text-sm text-muted-foreground">{e.desc}</p>
                  {e.nota && <p className="mt-4 rounded-lg border border-border bg-background/60 px-4 py-2.5 text-xs text-muted-foreground">{e.nota}</p>}
                  <BotonConsulta id={e.id} etiqueta="Añadir a mi estancia" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2">
            <Train className="mr-2 inline h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              A 2 min de la Estación de Ferrocarril (AVE) de <span translate="no" className="notranslate">Granada</span>
            </span>
          </div>
          <h2 className="mt-6 font-display text-3xl">Reserva tu apartamento y añade lo que prefieras</h2>
          <p className="mt-4 text-muted-foreground">
            Escríbenos indicando tu apartamento y lo que te interesa. Confirmamos disponibilidad y precios en menos de 24 horas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/" hash="contacto" className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105">
              Reservar directo
            </Link>
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium transition-colors hover:bg-muted">
              <MapPin className="h-4 w-4" />
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        <img
          src="/images/logo-tortola.png"
          alt="Apartamentos Tórtola 10 · Granada"
          width={640}
          height={640}
          className="mx-auto mb-4 h-44 w-auto sm:h-52"
        />
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
