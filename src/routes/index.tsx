import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import granada from "@/assets/granada.jpg";
import salon from "@/assets/salon.jpg";
import dormitorio from "@/assets/dormitorio.jpg";
import cocina from "@/assets/cocina.jpg";
import albaicinCocinaAsset from "@/assets/albaicin-cocina.jpg.asset.json";
import fachadaAsset from "@/assets/fachada-tortola10.webp.asset.json";
const fachada = fachadaAsset.url;

const albaicinCocina = albaicinCocinaAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Tórtola 10 · Ámbar, Coral y Perla · Apartamentos turísticos en Granada con garaje",
      },
      {
        name: "description",
        content:
          "Tres apartamentos turísticos de 40 m² en Tórtola 10, Granada: Ámbar, Coral y Perla. Garaje privado incluido, a 2 min a pie de Metro y Renfe. Reserva directa.",
      },
      {
        property: "og:title",
        content:
          "Tórtola 10 · Ámbar, Coral y Perla · Apartamentos en Granada",
      },
      {
        property: "og:description",
        content:
          "Apartamentos turísticos de 40 m² con garaje incluido en Granada. Ámbar, Coral y Perla, a 2 min a pie de Metro y Renfe. Reserva directa.",
      },
    ],
  }),
  component: Index,
});

const apartamentos = [
  {
    id: "ambar",
    nombre: "Apartamento Ámbar",
    img: salon,
    desc: "Salón-comedor luminoso con sofá cama, dormitorio independiente y cocina totalmente equipada.",
    detalles: ["40 m²", "4 plazas", "1 dormitorio independiente", "salón con sofá cama", "1 baño"],
    fotos: [{ src: salon, alt: "Salón del Apartamento Ámbar" }],
  },
  {
    id: "coral",
    nombre: "Apartamento Coral",
    img: dormitorio,
    desc: "Dormitorio con cama de matrimonio, ropa de cama premium, aire acondicionado y Smart TV.",
    detalles: ["40 m²", "4 plazas", "1 dormitorio independiente", "salón con sofá cama", "1 baño"],
    fotos: [
      { src: dormitorio, alt: "Dormitorio del Apartamento Coral" },
      { src: albaicinCocina, alt: "Cocina del Apartamento Coral" },
    ],
  },
  {
    id: "perla",
    nombre: "Apartamento Perla",
    img: cocina,
    desc: "Cocina completa con vitrocerámica, microondas y nevera, y baño con ducha de obra.",
    detalles: ["40 m²", "4 plazas", "1 dormitorio independiente", "salón con sofá cama", "1 baño"],
    fotos: [{ src: cocina, alt: "Cocina del Apartamento Perla" }],
  },
];

const servicios = [
  { t: "Garaje privado (sujeto a disponibilidad)", d: "Plaza de garaje en el propio edificio, sujeta a disponibilidad. El aparcamiento público en el centro de Granada cuesta 15–17 €/noche." },
  { t: "Aerotermia", d: "Frío en verano y calor en invierno en todas las estancias, con temperatura siempre agradable." },
  { t: "Wi-Fi de fibra", d: "Conexión rápida y estable, ideal para teletrabajo o streaming sin interrupciones." },
  { t: "Cocina totalmente equipada", d: "Vitrocerámica, microondas, nevera, menaje completo y todo lo necesario para cocinar." },
  { t: "Check-in autónomo 24 h", d: "Acceso con llave digital, sin horarios ni esperas. Llegas cuando quieres." },
  { t: "Ropa de cama y toallas", d: "Juego completo incluido, renovado en cada estancia." },
  { t: "Smart TV", d: "Televisión inteligente en todas las estancias con acceso a tus plataformas favoritas." },
];

const ubicacion = [
  ["2 min", "Parada de Metro"],
  ["2 min", "Estación de Renfe"],
  ["10 min", "Centro histórico en Metro"],
  ["20 min", "Centro histórico a pie"],
  ["10 min", "Alhambra en transporte público"],
  ["35 min", "Alhambra a pie"],
  ["25 min", "Aeropuerto Federico García Lorca en taxi o bus"],
  ["10 min", "Hospitales"],
];

const faqs = [
  {
    pregunta: "¿Cuál es el horario de check-in y check-out?",
    respuesta: "[PENDIENTE]",
  },
  {
    pregunta: "¿Cómo funciona el acceso al apartamento?",
    respuesta: "[PENDIENTE]",
  },
  {
    pregunta: "¿El garaje está garantizado o sujeto a disponibilidad?",
    respuesta: "[PENDIENTE]",
  },
  {
    pregunta: "¿Se admiten mascotas?",
    respuesta: "[PENDIENTE]",
  },
  {
    pregunta: "¿Hay fianza? ¿Cómo se gestiona?",
    respuesta: "[PENDIENTE]",
  },
  {
    pregunta: "¿Cuál es la política de cancelación?",
    respuesta: "[PENDIENTE]",
  },
  {
    pregunta: "¿Qué métodos de pago se aceptan?",
    respuesta: "[PENDIENTE]",
  },
  {
    pregunta: "¿Cuántas personas caben en cada apartamento?",
    respuesta: "[PENDIENTE]",
  },
  {
    pregunta: "¿Está incluida la ropa de cama y las toallas?",
    respuesta: "[PENDIENTE]",
  },
  {
    pregunta: "¿Cómo se llega desde el aeropuerto?",
    respuesta: "[PENDIENTE]",
  },
];

const testimonios = [
  { nombre: "[PENDIENTE]", texto: "[PENDIENTE]", estrellas: 5 },
  { nombre: "[PENDIENTE]", texto: "[PENDIENTE]", estrellas: 5 },
  { nombre: "[PENDIENTE]", texto: "[PENDIENTE]", estrellas: 5 },
];

function GaleriaLightbox({
  fotos,
  titulo,
  inicial,
  onClose,
}: {
  fotos: { src: string; alt: string }[];
  titulo: string;
  inicial: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(inicial);
  const actual = fotos[index];

  const anterior = () => setIndex((i) => (i === 0 ? fotos.length - 1 : i - 1));
  const siguiente = () => setIndex((i) => (i === fotos.length - 1 ? 0 : i + 1));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de ${titulo}`}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
        aria-label="Cerrar galería"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      {fotos.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            anterior();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          aria-label="Foto anterior"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      )}

      {fotos.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            siguiente();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          aria-label="Foto siguiente"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      )}

      <div className="max-h-full max-w-full" onClick={(e) => e.stopPropagation()}>
        {actual && (
          <img
            src={actual.src}
            alt={actual.alt}
            className="max-h-[80vh] max-w-full rounded-lg object-contain"
          />
        )}
        <div className="mt-3 text-center text-sm text-white/80">
          {titulo} · {index + 1} / {fotos.length}
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [galeria, setGaleria] = useState<{
    id: string;
    nombre: string;
    fotos: { src: string; alt: string }[];
    index: number;
  } | null>(null);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="absolute inset-x-0 top-0 z-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="font-display text-2xl tracking-[0.2em] text-primary-foreground">
            TÓRTOLA 10
          </span>
          <a
            href="#contacto"
            className="rounded-full border border-primary-foreground/40 px-5 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Reservar
          </a>
        </nav>
      </header>

      <section className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <img
          src={granada}
          alt="Vista de la Alhambra de Granada con Sierra Nevada al fondo"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-primary-foreground/80">
            Granada · Beiro · Con garaje privado incluido
          </p>
          <h1 className="mt-6 font-display text-5xl leading-tight text-primary-foreground sm:text-7xl">
            Tres apartamentos para descubrir Granada
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/85">
            Apartamentos turísticos de 40 m² con dormitorio independiente, reformados y
            totalmente equipados. Garaje privado incluido, cerca de los hospitales y de la estación de tren.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#apartamentos"
              className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              Ver apartamentos
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-primary-foreground/50 px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Consultar disponibilidad
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">El edificio</p>
          <h2 className="mt-4 font-display text-4xl">Calle Tórtola 10, Granada</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Así es la entrada real de tu alojamiento: un edificio reformado, tranquilo,
            con garaje propio y muy bien comunicado con la ciudad.
          </p>
        </div>
        <figure className="mt-10">
          <img
            src={fachada}
            alt="Fachada real del edificio de apartamentos Tórtola 10 en Granada"
            className="w-full rounded-3xl object-cover"
            style={{ boxShadow: "var(--shadow-soft)" }}
          />
        </figure>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="font-display text-4xl">Tu base perfecta en Granada</h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          En Calle Tórtola encontrarás tres apartamentos independientes pensados para
          parejas, viajeros de negocios y estancias médicas. Garaje privado incluido en el precio,
          sin sorpresas.
        </p>
        <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            ["3", "Apartamentos"],
            ["40 m²", "Superficie"],
            ["2", "Huéspedes"],
            ["24 h", "Check-in"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-xl border border-border bg-card p-6">
              <dt className="font-display text-3xl text-primary">{n}</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {l}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="apartamentos" className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-4xl">Los apartamentos</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {apartamentos.map((a) => (
              <article
                key={a.nombre}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-card transition-transform hover:scale-[1.02]"
                style={{ boxShadow: "var(--shadow-soft)" }}
                onClick={() =>
                  setGaleria({
                    id: a.id,
                    nombre: a.nombre,
                    fotos: a.fotos,
                    index: 0,
                  })
                }
              >
                <div className="relative overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.nombre}
                    loading="lazy"
                    width={1600}
                    height={1072}
                    className="h-56 w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black opacity-0 transition-opacity group-hover:opacity-100">
                      Ver fotos
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{a.nombre}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{a.desc}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {a.detalles.map((d) => (
                      <li
                        key={d}
                        className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center font-display text-4xl">Todo incluido</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s) => (
            <div key={s.t} className="rounded-xl border border-border p-6">
              <h3 className="font-medium">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Ubicación inmejorable</h2>
            <p className="mt-4 text-muted-foreground">
              Beiro, Granada. A solo 2 min a pie de Metro y Renfe, 10 min en
              Metro hasta el centro histórico, y bien conectado con la Alhambra,
              los hospitales y el aeropuerto.
            </p>
          </div>

          <ul className="space-y-4">
            {ubicacion.map(([t, l]) => (
              <li
                key={l}
                className="flex items-baseline justify-between border-b border-border pb-3"
              >
                <span className="text-sm">{l}</span>
                <span className="font-display text-lg text-primary">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl">Reserva directa</h2>
        <p className="mt-4 text-muted-foreground">
          Escríbenos para consultar disponibilidad y precios. Respondemos en menos de 24
          horas.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:reservas@apartamentostortola.com"
            className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            reservas@apartamentostortola.com
          </a>
          <a
            href="tel:+34630991021"
            className="rounded-full border border-border px-7 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            +34 630 991 021
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tórtola 10 · Apartamentos turísticos · Granada
      </footer>

      {galeria && (
        <GaleriaLightbox
          fotos={galeria.fotos}
          titulo={galeria.nombre}
          inicial={galeria.index}
          onClose={() => setGaleria(null)}
        />
      )}
    </div>
  );
}
