import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import {
  Sparkles,
  Train,
  MapPin,
  KeyRound,
  Car,
  DoorOpen,
  UtensilsCrossed,
  Snowflake,
  Smartphone,
  Clock,
  ListChecks,
  Landmark,
  CarTaxiFront,
  Plane,
  Building2,
  GraduationCap,
  Navigation,
  Zap,
  Ban, Accessibility,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SEO_DESC =
  "Alquila tu apartamento turístico en C. Tórtola 10, Granada. A 2 min del AVE y Metro con garaje privado (según disponibilidad) y check-in digital autónomo 24/7.";
import { useSearch } from "@tanstack/react-router";
import { LanguageSelector } from "@/components/LanguageSelector";
import salon from "@/assets/salon.jpg";
import dormitorio from "@/assets/dormitorio.jpg";
import cocina from "@/assets/cocina.jpg";
import albaicinCocinaAsset from "@/assets/albaicin-cocina.jpg.asset.json";
import granada from "@/assets/granada.jpg";
const fachada = "/images/fachada.jpg";

/** Vía de tren decorativa entre secciones */
function TrackDivider() {
  return (
    <div aria-hidden="true" className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-6">
      <div className="track-line flex-1" />
      <Train className="h-5 w-5 text-terracota" />
      <div className="track-line flex-1" />
    </div>
  );
}

const albaicinCocina = albaicinCocinaAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apartamentos Tórtola 10 Granada | Check-in 24h y Parking Privado junto al AVE" },
      { name: "description", content: SEO_DESC },
      { property: "og:title", content: "Apartamentos Tórtola 10 Granada | Check-in 24h y Parking Privado junto al AVE" },
      { property: "og:description", content: SEO_DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Apartamentos Tórtola 10",
          url: "https://www.apartamentostortola.com/",
          telephone: "+34630991021",
          address: {
            "@type": "PostalAddress",
            streetAddress: "C. Tórtola, 10",
            postalCode: "18014",
            addressLocality: "Granada",
            addressCountry: "ES",
          },
          geo: { "@type": "GeoCoordinates", latitude: 37.185439, longitude: -3.609873 },
          amenityFeature: ["Check-in autónomo 24/7", "Garaje privado con punto de carga eléctrica (sujeto a disponibilidad)"].map((n) => ({
            "@type": "LocationFeatureSpecification",
            name: n,
            value: true,
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const badges = [
  { icon: DoorOpen, t: "Acceso a cota cero: entrada directa a pie de calle, sin barreras ni escalones" },
  { icon: Snowflake, t: "Climatización por aerotermia: silenciosa, frío y calor todo el año" },
  { icon: UtensilsCrossed, t: "Cocina totalmente equipada: menaje completo y electrodomésticos" },
  { icon: Car, t: "Garaje privado en el edificio con punto de carga eléctrica (bajo petición)" },
  { icon: KeyRound, t: "Check-in digital 24/7: apertura autónoma, sin llaves ni esperas" },
];

const bloquesDestacados = [
  {
    titulo: "Llega a cualquier hora sin preocupaciones",
    tarjetas: [
      { icon: Smartphone, t: "Acceso Digital Autónomo", d: "Apertura mediante código o cerradura inteligente desde tu móvil." },
      { icon: Clock, t: "Sin penalizaciones por late check-in", d: "Si tu tren se retrasa o viajas de madrugada, tu apartamento te estará esperando sin recargos." },
      { icon: ListChecks, t: "Guía paso a paso", d: "Instrucciones claras con fotos y vídeo enviadas a tu móvil antes del viaje." },
    ],
  },
  {
    titulo: "Ahorra en parking y muévete fácil por Granada",
    tarjetas: [
      { icon: Train, t: "A 2 minutos del AVE y Metro", d: "Olvídate del coche o de arrastrar maletas por el centro." },
      { icon: Car, t: "Garaje Privado", d: "Plaza cubierta y segura, sujeta a disponibilidad previa. Con punto de carga normal (no rápida) para coches eléctricos." },
      { icon: Landmark, t: "Alhambra y centro histórico", d: "Conexión rápida con la Alhambra y el centro histórico en transporte público." },
    ],
  },
];

const apartamentos = [
  {
    id: "perla",
    nombre: "Apartamento Perla",
    img: salon,
    colorFondo: "bg-slate-50",
    borde: "border-t-stone-400",
    accesible: false,
    desc: "Salón-comedor luminoso con sofá cama, dormitorio independiente y cocina totalmente equipada.",
    detalles: ["40 m²", "4 plazas", "1 dormitorio independiente", "salón con sofá cama", "1 baño"],
    fotos: [{ src: salon, alt: "Salón del Apartamento Perla" }],
  },
  {
    id: "jade",
    nombre: "Apartamento Jade",
    img: cocina,
    colorFondo: "bg-emerald-50",
    borde: "border-t-emerald-600",
    accesible: false,
    desc: "Cocina completa con vitrocerámica, microondas y nevera, y baño con ducha de obra.",
    detalles: ["40 m²", "4 plazas", "1 dormitorio independiente", "salón con sofá cama", "1 baño"],
    fotos: [{ src: cocina, alt: "Cocina del Apartamento Jade" }],
  },
  {
    id: "coral",
    nombre: "Apartamento Coral",
    img: dormitorio,
    colorFondo: "bg-rose-50",
    borde: "border-t-rose-400",
    accesible: true,
    desc: "Dormitorio con cama de matrimonio, ropa de cama premium, aire acondicionado y Smart TV. Apartamento adaptado para personas con movilidad reducida.",
    detalles: ["40 m²", "4 plazas", "1 dormitorio independiente", "salón con sofá cama", "1 baño"],
    fotos: [
      { src: dormitorio, alt: "Dormitorio del Apartamento Coral" },
      { src: albaicinCocina, alt: "Cocina del Apartamento Coral" },
    ],
  },
];

const servicios = [
  { t: "Garaje privado (sujeto a disponibilidad)", d: "Plaza de garaje privada, sujeta a disponibilidad, con punto de carga normal (no rápida) para vehículos eléctricos. El aparcamiento público en el centro de Granada cuesta 15–17 €/noche." },
  { t: "Aerotermia", d: "Frío en verano y calor en invierno en todas las estancias, con temperatura siempre agradable." },
  { t: "Wi-Fi de fibra", d: "Conexión rápida y estable, ideal para teletrabajo o streaming sin interrupciones." },
  { t: "Cocina totalmente equipada", d: "Vitrocerámica, microondas, nevera, menaje completo y todo lo necesario para cocinar." },
  { t: "Check-in autónomo 24 h", d: "Acceso con llave digital, sin horarios ni esperas. Llegas cuando quieres." },
  { t: "Ropa de cama y toallas", d: "Juego completo incluido, renovado en cada estancia." },
  { t: "Smart TV", d: "Televisión inteligente en todas las estancias con acceso a tus plataformas favoritas." },
];

type Trayecto = { icon: LucideIcon; tiempo?: string; l: string };
type BloqueConexion = { icon: LucideIcon; t: string; d: Trayecto[] };

const hubConexiones: BloqueConexion[] = [
  {
    icon: Train,
    t: "Llegada sin estrés",
    d: [
      { icon: Train, tiempo: "2 min", l: "Estación de Renfe (AVE) a pie" },
      { icon: MapPin, tiempo: "2 min", l: "Parada de Metro a pie" },
      { icon: CarTaxiFront, tiempo: "2 min", l: "Parada de taxis 24 h" },
      { icon: Plane, tiempo: "20 min", l: "Aeropuerto en bus directo" },
    ],
  },
  {
    icon: Landmark,
    t: "Granada a tu alcance",
    d: [
      { icon: Building2, tiempo: "5 min", l: "Centro histórico en taxi" },
      { icon: Landmark, tiempo: "10 min", l: "Alhambra y Generalife en taxi" },
      { icon: GraduationCap, tiempo: "5 min", l: "Hospitales y campus universitario" },
      { icon: Train, tiempo: "10 min", l: "Centro histórico en Metro" },
    ],
  },
  {
    icon: Car,
    t: "Ventaja si vienes en coche",
    d: [
      { icon: Navigation, tiempo: "5 min", l: "Acceso directo a la circunvalación" },
      { icon: Ban, l: "Evitas las zonas de tráfico restringido" },
      { icon: Car, l: "Garaje privado en el propio edificio" },
      { icon: Zap, l: "Punto de carga normal para eléctricos" },
    ],
  },
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
      "El garaje es privado, tiene un coste adicional y está sujeto a disponibilidad. Dispone de punto de carga normal (no rápida) para coches eléctricos. Te recomendamos reservarlo con antelación.",
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
      "El aeropuerto Federico García Lorca está a unos 20 minutos. Hay bus directo con parada junto a la estación de tren, a 2 minutos a pie del apartamento, y también taxi. Si vienes en coche, la circunvalación queda a 5 minutos.",

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

const extrasMap: Record<string, string> = {
  alhambra: "Entradas y visita guiada a la Alhambra",
  hammam: "Sesión de Baños Árabes (Hammam)",
  bienvenida: "Pack de Bienvenida",
  parking: "Plaza de Parking Privado (Cochera Tórtola 8)",
};

function Index() {
  const [galeria, setGaleria] = useState<{
    id: string;
    nombre: string;
    fotos: { src: string; alt: string }[];
    index: number;
  } | null>(null);

  const search = useSearch({ strict: false }) as { extra?: string };
  const extraNombre = search?.extra ? extrasMap[search.extra] : undefined;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 bg-transparent">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-6 sm:py-4">
          <Link
            to="/"
            translate="no"
            className="notranslate inline-flex items-center rounded-2xl bg-background/85 px-2 py-1 backdrop-blur"
          >
            <img
              src="/images/logo-tortola.png"
              alt="Apartamentos Tórtola 10 · Granada"
              width={640}
              height={640}
              className="h-12 w-auto sm:h-16"
            />
          </Link>
          <div className="flex items-center gap-1.5 sm:gap-3">
            <Link
              to="/experiencias"
              className="rounded-full border border-border bg-background/85 backdrop-blur px-3 py-1.5 text-[11px] text-foreground transition-colors hover:bg-muted sm:px-5 sm:py-2 sm:text-sm"
            >
              Experiencias
            </Link>
            <a
              href="#contacto"
              className="rounded-full border border-border bg-background/85 backdrop-blur px-3 py-1.5 text-[11px] text-foreground transition-colors hover:bg-muted sm:px-5 sm:py-2 sm:text-sm"
            >
              Reservar
            </a>
            <LanguageSelector />
          </div>
        </nav>
      </header>

      <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden pb-24 pt-28 sm:pt-24">
        <img
          src={granada}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.28 0.03 200 / 0.70) 0%, oklch(0.28 0.03 200 / 0.40) 45%, oklch(0.28 0.03 200 / 0.80) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center text-white">
          <div className="rise-in flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
              <Train className="h-4 w-4 text-warm" />
              A 2 minutos a pie de la Estación de AVE · Acceso cota cero
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-warm/60 bg-warm/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
              <Sparkles className="h-4 w-4 text-warm" />
              Grand Opening · Apertura Noviembre 2026
            </span>
          </div>
          <h1 className="rise-in-2 mt-6 font-display text-4xl leading-tight text-white drop-shadow-md sm:text-6xl">
            Tu refugio moderno y confortable en <span translate="no" className="notranslate">Granada</span>
          </h1>
          <h2 className="rise-in-3 mx-auto mt-6 max-w-xl text-base text-white/90 drop-shadow sm:text-lg">
            Apartamentos turísticos a pie de calle (<span translate="no" className="notranslate">Perla</span>, <span translate="no" className="notranslate">Jade</span> y <span translate="no" className="notranslate">Coral</span>) equipados con climatización por aerotermia, entrada autónoma 24/7 y la mejor comunicación.
          </h2>
          <div className="rise-in-3 mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#contacto"
              className="rounded-full bg-warm px-7 py-3 text-sm font-semibold text-warm-foreground shadow-lg transition-transform hover:scale-105"
            >
              Ver disponibilidad y reservar directo
            </a>
            <a
              href="#apartamentos"
              className="rounded-full border border-white/60 bg-white/10 px-7 py-3 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/25"
            >
              Ver apartamentos y calidades
            </a>
          </div>
        </div>
        {/* Silueta de Sierra Nevada */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-[-1px] h-12 w-full text-background sm:h-20"
        >
          <path
            fill="currentColor"
            d="M0 80V54l90-22 70 18 110-38 80 30 90-16 100 34 120-40 90 28 110-18 130 36 100-30 120 22 90-18 100 24V80z"
          />
        </svg>
      </section>

      <section className="border-b border-border bg-card">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-6 text-sm sm:grid-cols-3 lg:grid-cols-5">
          {badges.map(({ icon: Icon, t }) => (
            <li key={t} className="flex items-center gap-3">
              <Icon className="h-6 w-6 shrink-0 text-primary" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {bloquesDestacados.map((b, i) => (
        <section key={b.titulo} className={i === 1 ? "bg-secondary/50 bg-lattice py-14" : "py-14"}>
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center font-display text-4xl">{b.titulo}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {b.tarjetas.map(({ icon: Icon, t, d }) => (
                <div key={t} className="rounded-2xl border border-border bg-card p-6" style={{ boxShadow: "var(--shadow-soft)" }}>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </span>
                  <h3 className="mt-4 font-display text-2xl">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-6xl px-6 pt-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">El edificio</p>
          <h2 className="mt-4 font-display text-4xl">
            <span translate="no" className="notranslate">
              Calle Tórtola 10
            </span>
            , <span translate="no" className="notranslate">Granada</span>
          </h2>
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

      <section className="mx-auto max-w-3xl px-6 py-14 text-center">
        <h2 className="font-display text-4xl">Quiénes somos</h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          Somos una empresa familiar especializada en el alquiler de apartamentos en <span translate="no" className="notranslate">Granada</span> desde hace más de 20 años. Con Apartamentos Tórtola, seguimos ofreciendo la misma cercanía y atención de siempre, ahora también para estancias de corta y larga duración: turismo, opositores, estudiantes de MIR y acompañantes de pacientes en los hospitales cercanos.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 text-center">
        <h2 className="font-display text-4xl">Tu base perfecta en <span translate="no" className="notranslate">Granada</span></h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          En Calle Tórtola encontrarás tres apartamentos independientes pensados para
          parejas, viajeros de negocios y estancias médicas. Garaje privado en el propio edificio
          (sujeto a disponibilidad previa).
        </p>

        <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            ["3", "Apartamentos"],
            ["40 m²", "Superficie"],
            ["4", "Huéspedes"],
            ["24 h", "Check-in"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-xl border border-border bg-card p-6">
              <dt className="font-display text-3xl text-terracota">{n}</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {l}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <TrackDivider />

      <section id="apartamentos" className="bg-secondary/50 bg-lattice py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-4xl">Los apartamentos</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {apartamentos.map((a) => (
              <article
                key={a.nombre}
                className={`group cursor-pointer overflow-hidden rounded-2xl border-t-4 ${a.borde} ${a.colorFondo} transition-transform hover:scale-[1.02]`}
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
                  {a.accesible && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-foreground">
                      <Accessibility className="h-3.5 w-3.5" />
                      Adaptado para personas con movilidad reducida
                    </span>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black opacity-0 transition-opacity group-hover:opacity-100">
                      Ver fotos
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 translate="no" className="notranslate font-display text-2xl">
                    {a.nombre}
                  </h3>
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

      <section className="hidden mx-auto max-w-6xl px-6 py-14">
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

      <section className="mx-auto max-w-6xl px-6 py-14">
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

      <TrackDivider />

      <section id="ubicacion" className="bg-secondary/50 bg-lattice py-14">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-4xl">Ubicación inmejorable</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Beiro, <span translate="no" className="notranslate">Granada</span>. Bajas del tren, del metro o del bus del aeropuerto y en 2 minutos estás dentro del apartamento con las maletas.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {hubConexiones.map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="rounded-2xl border border-border bg-card p-6"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </span>
                <h3 className="mt-4 font-display text-2xl">{t}</h3>
                <ul className="mt-4 space-y-3">
                  {d.map(({ icon: TrayIcon, tiempo, l }) => (
                    <li key={l} className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                        <TrayIcon className="h-4 w-4 text-primary" />
                      </span>
                      {tiempo && (
                        <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 font-display text-sm whitespace-nowrap text-primary">
                          {tiempo}
                        </span>
                      )}
                      <span className="text-sm text-muted-foreground">{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="mt-10 overflow-hidden rounded-3xl border border-border"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <iframe
              title="Ubicación de Calle Tórtola nº 10, Granada"
              src="https://maps.google.com/maps?q=37.185439,-3.609873&z=17&hl=es&output=embed"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[400px] w-full border-0"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=37.185439,-3.609873"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              <MapPin className="h-4 w-4 shrink-0" /> Abrir en Google Maps / Cómo llegar
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-18">
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

      <section id="contacto" className="mx-auto max-w-3xl px-6 py-18 text-center">
        <h2 className="font-display text-4xl">Reserva directa</h2>
        <p className="mt-4 text-muted-foreground">
          Escríbenos para consultar disponibilidad y precios. Respondemos en menos de 24
          horas.
        </p>
        {extraNombre && (
          <p className="mt-5 inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
            Experiencia seleccionada: {extraNombre}
          </p>
        )}
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

      <section className="bg-primary bg-lattice-light py-14 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-display text-3xl leading-snug sm:text-4xl">
            ¿Viajas tarde o vienes en tren? Garantiza tu plaza de parking y tu llegada autónoma sin horarios al reservar directo.
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-block rounded-full bg-warm px-8 py-3 text-sm font-semibold text-warm-foreground transition-transform hover:scale-105"
          >
            Comprobar Disponibilidad
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        <img
          src="/images/logo-tortola.png"
          alt="Apartamentos Tórtola 10 · Granada"
          width={640}
          height={640}
          className="mx-auto mb-4 h-16 w-auto opacity-90"
        />
        <div className="mb-3 flex flex-wrap justify-center gap-4">
          <Link to="/" className="hover:text-primary">Inicio</Link>
          <Link to="/experiencias" className="hover:text-primary">Experiencias</Link>
          <a href="#contacto" className="hover:text-primary">Reservar</a>
        </div>
        © {new Date().getFullYear()}{" "}
        <span translate="no" className="notranslate">
          Apartamentos Tórtola 10
        </span>{" "}
        · Apartamentos turísticos · <span translate="no" className="notranslate">Granada</span>
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
