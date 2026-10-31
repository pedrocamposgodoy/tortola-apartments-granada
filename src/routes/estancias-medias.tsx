import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BedDouble,
  CalendarClock,
  FlaskConical,
  GraduationCap,
  HardHat,
  MapPin,
  Smartphone,
  Stethoscope,
  Tag,
  Train,
  UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LanguageSelector } from "@/components/LanguageSelector";
import { LegalLinks } from "@/components/LegalLinks";
import { ConsultaEstanciaForm } from "@/components/ConsultaEstanciaForm";

const URL_PAGINA = "https://www.apartamentostortola.com/estancias-medias";
const TITULO = "Estancia media y larga en Granada | Apartamentos Tórtola 10";
const DESCRIPCION =
  "Apartamentos equipados en Granada para estancias de más de un mes: profesores visitantes, máster, prácticas en hospitales y proyectos. Cuéntanos tu caso.";

// ---- Preguntas frecuentes (se usan en la página y en los datos estructurados para Google) ----
// Sin precios, duraciones ni tipo de contrato. No usar "temporada".
const preguntas = [
  {
    q: "¿Qué es una estancia media o de larga duración?",
    a: "Es la de quien se queda más de un mes en Granada por trabajo, estudios, investigación o formación, en lugar de unos pocos días de turismo. Estudiamos cada caso de forma individual.",
  },
  {
    q: "¿Tenéis apartamentos para estudiantes de máster o posgrado?",
    a: "Sí. Son apartamentos con dormitorio independiente y cocina equipada, con los hospitales y el campus universitario a unos 5 minutos. Escríbenos con tus fechas y te confirmamos disponibilidad y condiciones por correo.",
  },
  {
    q: "¿Sirve para profesores o investigadores visitantes y para residentes MIR?",
    a: "Sí. Atendemos a profesores e investigadores visitantes, a profesionales en rotaciones o prácticas en los hospitales cercanos y a quienes se desplazan a Granada por un proyecto u obra.",
  },
  {
    q: "¿Cuánto cuesta una estancia de más de un mes?",
    a: "Depende del apartamento, de las fechas y del motivo de la estancia. No se aplica la tarifa de una escapada turística: te indicamos por correo las condiciones que corresponden a tu caso.",
  },
  {
    q: "¿Los apartamentos están amueblados y equipados?",
    a: "Sí. Tienen cocina equipada con vitrocerámica, horno, microondas, nevera y menaje completo, dormitorio independiente, ropa de cama y toallas, y climatización por aerotermia.",
  },
];

export const Route = createFileRoute("/estancias-medias")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL_PAGINA },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL_PAGINA }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: preguntas.map((p) => ({
            "@type": "Question",
            name: p.q,
            acceptedAnswer: { "@type": "Answer", text: p.a },
          })),
        }),
      },
    ],
  }),
  component: EstanciasMedias,
});

// ---- Edita aquí los textos ----
// Reglas de vocabulario: sin duración, precio ni tipo de contrato concretos.
// No usar "temporada"; evitar "alquiler" y "contrato" en esta página.

type Tarjeta = { icon: LucideIcon; t: string; d: string };

const paraQuien: Tarjeta[] = [
  {
    icon: FlaskConical,
    t: "Profesores e investigadores visitantes",
    d: "Estancias de docencia o investigación en la universidad y otros centros de la ciudad.",
  },
  {
    icon: GraduationCap,
    t: "Alumnos de máster y posgrado",
    d: "Para quien cursa un máster, un posgrado o un doctorado y necesita un lugar donde vivir el curso.",
  },
  {
    icon: Stethoscope,
    t: "Profesionales en rotaciones y prácticas en hospitales",
    d: "Residentes (MIR) y otros profesionales sanitarios que se forman en los hospitales cercanos.",
  },
  {
    icon: HardHat,
    t: "Profesionales desplazados por un proyecto u obra",
    d: "Ingenieros, técnicos y equipos que trabajan en Granada durante un proyecto.",
  },
];

const porQueUnApartamento: Tarjeta[] = [
  {
    icon: UtensilsCrossed,
    t: "Cocina propia y equipada",
    d: "Vitrocerámica, horno, microondas, nevera y menaje completo: cocinar en casa, a tu ritmo.",
  },
  {
    icon: Train,
    t: "Junto a la estación",
    d: "A 2 minutos a pie del tren, el Metro y el bus del aeropuerto. Hospitales y campus universitario a unos 5 minutos.",
  },
  {
    icon: Tag,
    t: "Condiciones pensadas para estancias largas",
    d: "No se aplican las de una escapada turística: te indicamos por correo las que corresponden a tu caso.",
  },
  {
    icon: CalendarClock,
    t: "Sin compromisos a largo plazo",
    d: "Pensado para estancias con un principio y un final.",
  },
  {
    icon: BedDouble,
    t: "Espacio recogido y cómodo",
    d: "Dormitorio independiente y salón-comedor con cocina: ideal para una o dos personas.",
  },
  {
    icon: Smartphone,
    t: "Llegada autónoma, a cualquier hora",
    d: "Acceso digital las 24 horas, sin recoger llaves ni esperar a nadie.",
  },
];

const pasos = [
  {
    t: "Cuéntanos tu caso",
    d: "Rellena el breve formulario: a qué vienes, para cuándo y en qué podemos ayudarte.",
  },
  {
    t: "Te respondemos por correo",
    d: "Te indicamos las condiciones que se aplican a tu estancia y resolvemos tus dudas.",
  },
  {
    t: "Si encaja, lo formalizamos",
    d: "Con la documentación que corresponda, conforme a la normativa vigente y, si procede, documentando el motivo de la estancia. Siempre sujeto a disponibilidad.",
  },
];

function EstanciasMedias() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-border bg-background/90 shadow-sm backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <Link to="/" translate="no" className="notranslate inline-flex items-center">
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

      <section className="relative flex min-h-[56vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div aria-hidden="true" className="absolute inset-0 bg-lattice opacity-70" />
        <div className="relative mx-auto max-w-3xl px-6 pb-12 pt-36 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            Estancia media y larga en Granada
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Estancias de varias semanas o meses en{" "}
            <span translate="no" className="notranslate">
              Granada
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base font-medium text-foreground/80">
            Sí, aceptamos estancias de varias semanas o meses. Apartamentos con cocina propia para
            quien viene a Granada a trabajar, estudiar o investigar y necesita quedarse más que unos
            días.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#formulario"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Cuéntanos tu caso
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/"
              hash="contacto"
              className="rounded-full border border-primary/50 bg-background/90 px-7 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-secondary"
            >
              Mi estancia es más corta: reservar
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">¿Para quién?</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Alojamiento en Granada para máster, investigación, prácticas en hospitales y proyectos
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {paraQuien.map(({ icon: Icon, t, d }) => (
            <article
              key={t}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-2xl leading-tight">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
          ¿Tu caso es distinto? Cuéntanoslo igualmente: lo estudiamos contigo.
        </p>
      </section>

      <section className="relative overflow-hidden bg-pastel py-16">
        <div aria-hidden="true" className="absolute inset-0 bg-lattice" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Por qué un apartamento
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Apartamentos equipados para estancias de más de un mes
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {porQueUnApartamento.map(({ icon: Icon, t, d }) => (
              <article
                key={t}
                className="rounded-2xl border border-border bg-card/90 p-6"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl leading-tight">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Cómo funciona</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Tres pasos, empezando por un correo
          </h2>
        </div>
        <ol className="mt-10 space-y-5">
          {pasos.map((p, i) => (
            <li
              key={p.t}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-2xl text-primary-foreground"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-2xl leading-tight">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Para estancias de menos de un mes, no hace falta el formulario:{" "}
          <Link
            to="/"
            hash="contacto"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            reserva directamente
          </Link>
          .
        </p>
      </section>

      <section id="formulario" className="scroll-mt-24 bg-secondary/40 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Primer paso</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">Cuéntanos tu caso</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Este formulario es solo para estancias de más de un mes. Nos ayuda a entender tu
              situación y a responderte con las condiciones que te corresponden.
            </p>
          </div>
          <div className="mt-10">
            <ConsultaEstanciaForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            Dudas sobre las estancias de más de un mes
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-8">
          {preguntas.map((p) => (
            <AccordionItem key={p.q} value={p.q}>
              <AccordionTrigger className="text-left">{p.q}</AccordionTrigger>
              <AccordionContent>{p.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2">
            <MapPin className="mr-2 inline h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              <span translate="no" className="notranslate">
                Calle Tórtola 10, Granada
              </span>
            </span>
          </div>
          <h2 className="mt-6 font-display text-3xl">¿Prefieres escribirnos?</h2>
          <p className="mt-4 text-muted-foreground">
            Cuéntanos tu caso con tus palabras y te respondemos por correo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:reservas@apartamentostortola.com?subject=Consulta%3A%20estancia%20de%20m%C3%A1s%20de%20un%20mes"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              reservas@apartamentostortola.com
            </a>
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
        <div className="mb-3 flex flex-wrap justify-center gap-4">
          <Link to="/" className="hover:text-primary">
            Inicio
          </Link>
          <Link to="/experiencias" className="hover:text-primary">
            Experiencias
          </Link>
          <Link to="/estancias-medias" className="hover:text-primary">
            Estancias de varias semanas o meses
          </Link>
          <Link to="/" hash="contacto" className="hover:text-primary">
            Reservar
          </Link>
        </div>
        <LegalLinks />
        © {new Date().getFullYear()}{" "}
        <span translate="no" className="notranslate">
          MAFERASUR, S.L.
        </span>{" "}
        · <span translate="no" className="notranslate">Apartamentos Tórtola 10</span> · Granada
      </footer>
    </div>
  );
}
