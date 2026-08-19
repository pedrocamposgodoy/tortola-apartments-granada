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
import fachadaAsset from "@/assets/fachada-tortola.jpg.asset.json";
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
    colorFondo: "bg-amber-50",
    desc: "Salón-comedor luminoso con sofá cama, dormitorio independiente y cocina totalmente equipada.",
    detalles: ["40 m²", "4 plazas", "1 dormitorio independiente", "salón con sofá cama", "1 baño"],
    fotos: [{ src: salon, alt: "Salón del Apartamento Ámbar" }],
  },
  {
    id: "coral",
    nombre: "Apartamento Coral",
    img: dormitorio,
    colorFondo: "bg-rose-50",
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
    colorFondo: "bg-slate-50",
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
    respuesta:
      "El check-in es autónomo mediante llave digital, disponible las 24 horas: llegas cuando quieras. El check-out es flexible, coordínalo con nosotros antes de tu llegada.",
  },
  {
    pregunta: "¿Cómo funciona el acceso al apartamento?",
    respuesta:
      "El acceso es totalmente autónomo mediante cerradura inteligente. Recibirás el código de acceso antes de tu llegada, sin necesidad de recoger llaves ni esperar a nadie.",
  },
  {
    pregunta: "¿El garaje está garantizado o sujeto a disponibilidad?",
    respuesta:
      "La plaza de garaje está sujeta a disponibilidad. Te recomendamos confirmarla al hacer tu reserva.",
  },
  {
    pregunta: "¿Se admiten mascotas?",
    respuesta:
      "Sí, se admiten mascotas con un suplemento adicional. Contáctanos antes de reservar para confirmar condiciones.",
  },
  {
    pregunta: "¿Hay fianza? ¿Cómo se gestiona?",
    respuesta:
      "La fianza depende del canal de reserva utilizado. Te informaremos de las condiciones exactas al confirmar tu reserva.",
  },
  {
    pregunta: "¿Cuál es la política de cancelación?",
    respuesta:
      "Las condiciones de cancelación dependen de la plataforma de reserva utilizada. Consulta las condiciones específicas en el momento de reservar.",
  },
  {
    pregunta: "¿Qué métodos de pago se aceptan?",
    respuesta:
      "Aceptamos los métodos de pago habituales de cada plataforma de reserva (tarjeta de crédito/débito). Para reservas directas, contáctanos para más detalles.",
  },
  {
    pregunta: "¿Cuántas personas caben en cada apartamento?",
    respuesta:
      "Cada apartamento tiene capacidad para 4 personas, con un dormitorio independiente y salón con sofá cama.",
  },
  {
    pregunta: "¿Está incluida la ropa de cama y las toallas?",
    respuesta:
      "Sí, la ropa de cama y las toallas están incluidas y se renuevan en cada estancia.",
  },
  {
    pregunta: "¿Cómo se llega desde el aeropuerto?",
    respuesta:
      "El aeropuerto Federico García Lorca está a unos 25 minutos en taxi o autobús. También puedes llegar cómodamente en transporte público hasta el centro y después caminar o coger el Metro hasta el apartamento.",
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

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="font-display text-4xl">Quiénes somos</h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Somos una empresa familiar especializada en el alquiler de apartamentos en Granada desde hace más de 20 años. Con Apartamentos Tórtola, seguimos ofreciendo la misma cercanía y atención de siempre, ahora también para estancias de corta y larga duración: turismo, opositores, estudiantes de MIR y acompañantes de pacientes en los hospitales cercanos.
        </p>
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
            ["4", "Huéspedes"],
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
                className={`group cursor-pointer overflow-hidden rounded-2xl ${a.colorFondo} transition-transform hover:scale-[1.02]`}
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

      <section className="hidden mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center font-display text-4xl">Lo que dicen nuestros huéspedes</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex gap-1">
                {Array.from({ length: t.estrellas }).map((_, j) => (
                  <svg
                    key={j}
                    className="h-5 w-5 fill-primary text-primary"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{t.texto}</p>
              <p className="mt-4 text-sm font-medium">{t.nombre}</p>
            </div>
          ))}
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
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-4xl">Ubicación inmejorable</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Beiro, Granada. A solo 2 min a pie de la parada de Metro y de la estación de Renfe,
            10 min en Metro hasta el centro histórico (o 20 min a pie), 10 min en transporte público
            hasta la Alhambra (35 min a pie), y 25 min en taxi o bus hasta el aeropuerto Federico García Lorca.
            Hospitales a 10 min.
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
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

            <div className="overflow-hidden rounded-3xl border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
              <iframe
                title="Ubicación de Calle Tórtola nº 10, Granada"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.0!2d-3.6067!3d37.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fca3e4b4f7a9%3A0x5e3a2b4c6d7e8f90!2sCalle%20T%C3%B3rtola%2010%2C%20Granada%2C%20Espa%C3%B1a!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[400px] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-center font-display text-4xl">Preguntas frecuentes</h2>
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((f) => (
            <AccordionItem key={f.pregunta} value={f.pregunta}>
              <AccordionTrigger>{f.pregunta}</AccordionTrigger>
              <AccordionContent>{f.respuesta}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
