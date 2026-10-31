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
  Heart,
  MapPin,
  Car,
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
  Wifi,
  BedDouble,
  Tv,
  Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SEO_DESC =
  "Alquila tu apartamento turístico en C. Tórtola 10, Granada. A 2 min del AVE y Metro con garaje privado (según disponibilidad) y check-in digital autónomo 24/7.";
import { useSearch } from "@tanstack/react-router";
import { LanguageSelector } from "@/components/LanguageSelector";
import { TravelMap } from "@/components/TravelMap";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { LegalLinks } from "@/components/LegalLinks";
import { StickyCta } from "@/components/StickyCta";
import { ConsultaFechas } from "@/components/ConsultaFechas";
import { ApartamentosGaleria } from "@/components/ApartamentosGaleria";
import jadeCocina from "@/assets/jade-cocina.jpg";
import provSalonHojas from "@/assets/provisional-salon-hojas.webp";
import provSalonNicho from "@/assets/provisional-salon-nicho.webp";
import provCocina1 from "@/assets/provisional-cocina-1.webp";
import provCocina2 from "@/assets/provisional-cocina-2.webp";
import provDormAzul from "@/assets/provisional-dormitorio-azul.webp";
import provDormCuadros from "@/assets/provisional-dormitorio-cuadros.webp";
import provBano from "@/assets/provisional-bano.webp";
const fachada = "/images/fachada.webp";

/** Ruta visual: aeropuerto -> estación/metro/bus -> Tórtola 10 */
function RouteStrip() {
  const nodos = [
    { icon: Plane, t: "Aeropuerto", d: "Bus directo" },
    { icon: Train, t: "Estación de AVE, Metro y bus", d: "Llegas aquí" },
    { icon: Building2, t: "Tórtola 10", d: "Tu apartamento", destacado: true },
  ];
  const tramos = ["20 min en bus", "2 min a pie"];
  return (
    <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center md:flex-row md:items-start md:justify-between md:pb-16">
      {nodos.map((n, i) => (
        <div key={n.t} className="contents">
          <div className="relative z-10 flex w-48 flex-col items-center text-center md:w-16 md:overflow-visible">
            <span
              className={`inline-flex h-16 w-16 items-center justify-center rounded-full border-2 ${
                n.destacado ? "border-primary bg-primary text-primary-foreground" : "border-primary/40 bg-card text-primary"
              }`}
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <n.icon className="h-7 w-7" />
            </span>
            <span className="mt-3 font-display text-xl leading-tight md:w-48">
              <span translate="no" className="notranslate">{n.t}</span>
            </span>
            <span className="text-xs text-muted-foreground md:w-48">{n.d}</span>
          </div>
          {i < tramos.length && (
            <div className="relative flex h-16 w-full items-center justify-center md:mt-0 md:h-16 md:flex-1">
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-full border-l-2 border-dashed border-primary/40 md:left-0 md:top-1/2 md:h-0 md:w-full md:border-l-0 md:border-t-2"
              />
              <span className="relative rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-primary">
                {tramos[i]}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/** Vía de tren decorativa entre secciones */
function TrackDivider() {
  return (
    <div aria-hidden="true" className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-6">
      <div className="track-line flex-1" />
      <Train className="h-5 w-5 text-primary" />
      <div className="track-line flex-1" />
    </div>
  );
}


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apartamentos Tórtola 10 Granada | Check-in 24h y Parking Privado junto al AVE" },
      { name: "description", content: SEO_DESC },
      { property: "og:title", content: "Apartamentos Tórtola 10 Granada | Check-in 24h y Parking Privado junto al AVE" },
      { property: "og:description", content: SEO_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.apartamentostortola.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.apartamentostortola.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Apartamentos Tórtola 10",
          url: "https://www.apartamentostortola.com/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "C. Tórtola, 10",
            postalCode: "18014",
            addressLocality: "Granada",
            addressCountry: "ES",
          },
          legalName: "MAFERASUR, S.L.",
          image: "https://www.apartamentostortola.com/images/og-tortola.jpg",
          description: SEO_DESC,
          numberOfRooms: 3,
          inLanguage: "es",
          geo: { "@type": "GeoCoordinates", latitude: 37.185439, longitude: -3.609873 },
          amenityFeature: ["Check-in autónomo 24/7", "Garaje privado con punto de carga eléctrica (sujeto a disponibilidad)"].map((n) => ({
            "@type": "LocationFeatureSpecification",
            name: n,
            value: true,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [...faqsAlojamiento, ...faqsLlegada].map((f) => ({
            "@type": "Question",
            name: f.pregunta,
            acceptedAnswer: { "@type": "Answer", text: f.respuesta },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const bloquesDestacados = [
  {
    titulo: "Llega a cualquier hora sin preocupaciones",
    tarjetas: [
      { icon: Smartphone, t: "Acceso Digital Autónomo", d: "Apertura mediante código o cerradura inteligente desde tu móvil." },
      { icon: Clock, t: "Sin penalizaciones por late check-in", d: "Si tu tren se retrasa o viajas de madrugada, tu apartamento te estará esperando sin recargos." },
      { icon: ListChecks, t: "Guía paso a paso", d: "Instrucciones claras con fotos y vídeo enviadas a tu móvil antes del viaje." },
    ],
  },
];

/**
 * FOTOS PROVISIONALES: fotos REALES de los apartamentos hechas durante el final de obra (todavía
 * sin decorar ni limpiar). Se muestran con la etiqueta "Fotografía provisional" hasta tener las del
 * fotógrafo. Cada apartamento completa su tira de miniaturas con estas fotos; para quitarlas,
 * borrar `conProvisionales` y dejar solo `fotos`.
 */
const fotosProvisionales = () => [
  { src: provSalonHojas, alt: "Salón con papel pintado y zona de TV (foto provisional)" },
  { src: provCocina1, alt: "Cocina equipada con encimera y horno (foto provisional)" },
  { src: provDormAzul, alt: "Dormitorio con cabecero de madera y lámparas de lectura (foto provisional)" },
  { src: provBano, alt: "Baño con lavabo sobre encimera de madera (foto provisional)" },
  { src: provSalonNicho, alt: "Salón con hornacina iluminada y puerta de cristal (foto provisional)" },
  { src: provCocina2, alt: "Cocina y salón desde la entrada (foto provisional)" },
  { src: provDormCuadros, alt: "Dormitorio con cabecero de madera y cama de matrimonio (foto provisional)" },
  { src: jadeCocina, alt: "Cocina y entrada con cerradura digital (foto provisional)" },
];
const conProvisionales = (propias: { src: string; alt: string }[]) => [
  ...propias,
  ...fotosProvisionales().filter((f) => !propias.some((x) => x.src === f.src)),
].slice(0, 8);

const apartamentos = [
  {
    id: "perla",
    nombre: "Apartamento Perla",
    img: provSalonHojas,
    colorFondo: "bg-slate-50",
    borde: "border-t-stone-300",
    accesible: false,
    desc: "Salón-comedor luminoso con sofá cama, dormitorio independiente y cocina totalmente equipada.",
    detalles: ["37 m²", "4 plazas", "dormitorio independiente", "techos de 3 m"],
    fotos: conProvisionales([{ src: provSalonHojas, alt: "Salón del Apartamento Perla (foto provisional)" }]),
  },
  {
    id: "jade",
    nombre: "Apartamento Jade",
    img: jadeCocina,
    colorFondo: "bg-emerald-50",
    borde: "border-t-emerald-500",
    accesible: false,
    desc: "Compacto y acogedor, con salón-cocina de 21 m², dormitorio independiente y baño con ducha de obra.",
    detalles: ["35 m²", "4 plazas", "dormitorio independiente", "techos de 3 m"],
    fotos: conProvisionales([{ src: jadeCocina, alt: "Cocina del Apartamento Jade y entrada con cerradura digital (foto provisional)" }]),
  },
  {
    id: "coral",
    nombre: "Apartamento Coral",
    img: provDormAzul,
    colorFondo: "bg-rose-50",
    borde: "border-t-rose-400",
    accesible: true,
    desc: "El más amplio y luminoso: dormitorio de casi 14 m² con cama de matrimonio, baño espacioso y Smart TV. Adaptado para personas con movilidad reducida.",
    detalles: ["43 m²", "4 plazas", "dormitorio independiente", "techos de 3 m"],
    fotos: conProvisionales([
      { src: provDormAzul, alt: "Dormitorio del Apartamento Coral (foto provisional)" },
    ]),
  },
];

const servicios: { icon: LucideIcon; t: string; d: string; clase?: string }[] = [
  { icon: Snowflake, t: "Aerotermia", d: "Frío en verano y calor en invierno en todas las estancias, con temperatura siempre agradable.", clase: "lg:col-span-2" },
  { icon: Wifi, t: "Wi-Fi de fibra", d: "Conexión rápida y estable, ideal para teletrabajo o streaming sin interrupciones.", clase: "lg:col-span-2" },
  { icon: UtensilsCrossed, t: "Cocina totalmente equipada", d: "Vitrocerámica, horno, microondas, nevera, menaje completo y todo lo necesario para cocinar.", clase: "lg:col-span-2" },
  { icon: BedDouble, t: "Ropa de cama y toallas", d: "Juego completo incluido, renovado en cada estancia.", clase: "lg:col-span-3" },
  { icon: Tv, t: "Smart TV", d: "Televisión inteligente en todas las estancias con acceso a tus plataformas favoritas.", clase: "sm:col-span-2 lg:col-span-3" },
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
      { icon: Car, l: "Garaje privado con punto de carga normal (pendiente de disponibilidad)" },
      { icon: Car, tiempo: "5 min", l: "Aparcamiento público junto a la estación de Renfe" },
    ],
  },
];


const faqsAlojamiento = [
  {
    pregunta: "¿En qué se diferencian Perla, Jade y Coral?",
    respuesta:
      "Tienen la misma distribución y el mismo equipamiento. Coral es el más amplio y luminoso, y además está adaptado para personas con movilidad reducida; Perla también es muy luminoso; Jade, en el centro, es el más compacto y acogedor.",
  },
  {
    pregunta: "¿Qué espacio tienen los apartamentos?",
    respuesta:
      "Entre 35 y 43 m² útiles: Jade 35 m², Perla 37 m² y Coral 43 m². Todos con techos de 3 metros de altura, que les dan una gran sensación de amplitud: salón-comedor con cocina, dormitorio independiente y baño.",
  },
  {
    pregunta: "¿Cuántas personas caben en cada apartamento?",
    respuesta:
      "Hasta 4 personas: dormitorio independiente con cama de matrimonio y salón con sofá cama.",
  },
  {
    pregunta: "¿Cómo es la cocina y qué climatización tienen?",
    respuesta:
      "Cocina totalmente equipada: placa vitrocerámica, horno, microondas, nevera y menaje completo. La climatización es por aerotermia: frío en verano y calor en invierno, en todas las estancias.",
  },
  {
    pregunta: "¿Está incluida la ropa de cama y las toallas?",
    respuesta:
      "Sí, la ropa de cama y las toallas están incluidas y se renuevan en cada estancia.",
  },
  {
    pregunta: "¿Hay un apartamento adaptado para movilidad reducida?",
    respuesta:
      "Sí, el Apartamento Coral está adaptado. Además, el acceso a los tres apartamentos es a pie de calle, sin escaleras. Si tienes necesidades concretas, cuéntanoslas antes de reservar y lo preparamos contigo.",
  },
  {
    pregunta: "¿Tenéis cuna para bebés?",
    respuesta:
      "Disponemos de cuna bajo petición y sujeta a disponibilidad. Pídela al hacer tu reserva.",
  },
];

const faqsLlegada = [
  {
    pregunta: "¿Cómo funcionan el check-in, el acceso y el check-out?",
    respuesta:
      "El check-in es autónomo, las 24 horas, con cerradura inteligente: recibirás el código antes de tu llegada, sin recoger llaves ni esperar a nadie. El check-out es flexible, coordínalo con nosotros antes de tu llegada.",
  },
  {
    pregunta: "¿Puedo dejar las maletas antes o después de mi estancia?",
    respuesta:
      "Sí, ofrecemos consigna de equipaje en nuestra cochera, con un coste adicional: antes del check-in o después del check-out. Consúltanos al reservar.",
  },
  {
    pregunta: "¿El garaje está garantizado o sujeto a disponibilidad?",
    respuesta:
      "El garaje es privado, tiene un coste adicional y está sujeto a disponibilidad. Dispone de punto de carga normal (no rápida) para coches eléctricos. Te recomendamos reservarlo con antelación. El aparcamiento público en el centro de Granada cuesta 15–17 €/noche.",
  },
  {
    pregunta: "¿Se admiten mascotas?",
    respuesta:
      "Sí, se admiten mascotas con un suplemento adicional. Contáctanos antes de reservar para confirmar condiciones.",
  },
  {
    pregunta: "¿Se puede alquilar por estancias largas?",
    respuesta:
      "Sí. Además del turismo, atendemos estancias de media y larga duración: opositores, estudiantes de MIR y acompañantes de pacientes de los hospitales cercanos. Escríbenos y te preparamos una propuesta.",
  },
  {
    pregunta: "¿Vas a quedarte más de un mes?",
    respuesta: (
      <>
        Si vienes a Granada a trabajar, estudiar, investigar o formarte y tu estancia será de más de
        un mes, cuéntanos tu caso en la página de{" "}
        <Link
          to="/estancias-medias"
          className="font-medium text-primary underline-offset-2 hover:underline"
        >
          estancias de varias semanas o meses
        </Link>
        . Te responderemos por correo con las condiciones que se te apliquen.
      </>
    ),
  },
  {
    pregunta: "¿Hay fianza?",
    respuesta:
      "En estancias cortas, como un fin de semana o unos pocos días, no pedimos fianza. En estancias largas, por ejemplo de un mes, podrá solicitarse; te lo confirmaremos antes de reservar.",
  },
  {
    pregunta: "¿Cómo se paga y cuál es la política de cancelación?",
    respuesta:
      "En reserva directa te indicaremos la forma de pago y las condiciones de cancelación antes de confirmar. Si reservas por una plataforma (Booking, Airbnb…), se aplican sus métodos de pago y la política de cancelación que figure en tu reserva.",
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
  "guia-alhambra": "La Alhambra con guía oficial (Alain)",
  "guia-lorca": "Visita a la casa de García Lorca (Alain)",
  "guia-albaicin": "Albaicín y cuevas del Sacromonte (Alain)",
  "guia-medida": "Ruta privada a medida (Alain)",
  parking: "Plaza de parking privado (Cochera Tórtola 8)",
  consigna: "Consigna de equipaje",
  flexibilidad: "Early check-in / Late check-out",
  transfer: "Transfer privado",
  cuna: "Cuna para bebés",
  bienvenida: "Pack de bienvenida",
  desayuno: "Desayuno de bienvenida",
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
        <nav className="mx-auto flex max-w-[96rem] items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-8 sm:py-4">
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
              className="h-24 w-auto rounded-full bg-background/90 shadow-md ring-4 ring-white/60 sm:h-36"
            />
          </Link>
          <div className="absolute right-4 top-3 sm:right-8 sm:top-4">
            <LanguageSelector grande />
          </div>
        </nav>
      </header>

      <section
        className="relative flex min-h-[86vh] items-center justify-center overflow-hidden pb-72 pt-32 sm:min-h-0 sm:pb-24 sm:pt-20"
        style={{ background: "var(--gradient-hero)" }}
      >
        <TravelMap />
        <div aria-hidden="true" className="hero-halo absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--terracota)]/40 bg-card px-4 py-1.5 text-sm font-semibold text-[var(--terracota)]">
              <Sparkles className="h-4 w-4" />
              Grand Opening · Apertura Noviembre 2026
            </span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:mt-5 text-foreground [text-shadow:0_-1px_0_rgb(0_0_0/0.12),0_2px_0_rgb(255_255_255/0.9),0_8px_18px_rgb(255_255_255/0.85)] sm:text-5xl">
            Apartamentos confortables en el mejor sitio para disfrutar de <span translate="no" className="notranslate">Granada</span>
          </h1>
          <h2 className="mx-auto mt-4 max-w-xl text-base font-medium text-foreground/85 [text-shadow:0_0_14px_var(--background),0_0_6px_var(--background)] sm:text-lg">
            Tres apartamentos independientes de 35 a 43 m², reformados y listos para tu estancia.
          </h2>
          <p className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-foreground [text-shadow:0_0_10px_var(--background)] sm:text-base">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            <span translate="no" className="notranslate">Calle Tórtola 10, Granada</span>
          </p>
          <nav
            aria-label="Accesos principales"
            className="mt-7 flex items-start justify-center gap-4 sm:gap-8"
          >
            {[
              {
                img: "/images/btn-experiencias.webp",
                label: "Experiencias",
                alt: "Experiencias en Granada",
                principal: false,
              },
              {
                img: "/images/btn-reservar.webp",
                label: "Consultar disponibilidad",
                alt: "Consultar disponibilidad: móvil, calendario y llaves",
                principal: true,
              },
              {
                img: "/images/estancias-largas.webp",
                label: "Estancias largas",
                alt: "Estancias de más de un mes: calendario y maleta",
                principal: false,
              },
            ].map((b) => {
              const clase = b.principal
                ? "group flex w-36 flex-col items-center gap-3 transition-transform hover:scale-105 sm:w-60"
                : "group flex w-20 flex-col items-center gap-2 pt-6 opacity-95 transition-transform hover:scale-105 sm:w-36 sm:pt-10";
              const contenido = (
                <>
                  <img
                    src={b.img}
                    alt={b.alt}
                    width={b.principal ? 192 : 112}
                    height={b.principal ? 192 : 112}
                    className={
                      b.principal
                        ? "h-32 w-32 rounded-full bg-card shadow-2xl ring-4 ring-primary/70 sm:h-48 sm:w-48"
                        : "h-16 w-16 rounded-full bg-card shadow-md sm:h-28 sm:w-28"
                    }
                  />
                  <span
                    className={
                      b.principal
                        ? "rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg sm:px-6 sm:text-base"
                        : "rounded-full bg-card/85 px-2.5 py-1 text-[11px] font-semibold text-primary shadow-sm sm:px-3 sm:text-xs"
                    }
                  >
                    {b.label}
                  </span>
                </>
              );
              if (b.principal)
                return (
                  <a key={b.label} href="#contacto" className={clase}>
                    {contenido}
                  </a>
                );
              return (
                <Link
                  key={b.label}
                  to={b.label === "Experiencias" ? "/experiencias" : "/estancias-medias"}
                  className={clase}
                >
                  {contenido}
                </Link>
              );
            })}
          </nav>
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

      <section aria-label="Ventajas principales" className="bg-primary text-primary-foreground">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-5 px-6 py-8 text-center lg:grid-cols-4">
          {[
            { icon: Train, t: "2 min a pie", d: "de la estación AVE y el Metro" },
            { icon: Clock, t: "Check-in 24 h", d: "autónomo, sin recoger llaves" },
            { icon: BedDouble, t: "35–43 m²", d: "con dormitorio independiente" },
            { icon: Heart, t: "+20 años", d: "alquilando en Granada, en familia" },
          ].map(({ icon: Icon, t, d }) => (
            <li key={t} className="flex flex-col items-center gap-1">
              <Icon className="h-6 w-6 opacity-90" aria-hidden="true" />
              <span className="font-display text-2xl font-semibold sm:text-3xl">{t}</span>
              <span className="text-xs opacity-85 sm:text-sm">{d}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="apartamentos" className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Tres apartamentos, tres personalidades
          </p>
          <h2 className="mt-3 text-center font-display text-5xl sm:text-6xl">Los apartamentos</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
            Misma distribución y mismo equipamiento. Elige por luz, espacio o accesibilidad.
          </p>
          <ApartamentosGaleria
            apartamentos={apartamentos}
            abrir={(a, index) => setGaleria({ id: a.id, nombre: a.nombre, fotos: a.fotos, index })}
          />
        </div>
      </section>

      <TrackDivider />

      <section id="ubicacion" className="relative overflow-hidden bg-pastel py-16">
        <div aria-hidden="true" className="absolute inset-0 bg-lattice" />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-4xl">Estación, metro y bus del aeropuerto, a 2 minutos a pie</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Barrio de Beiro, <span translate="no" className="notranslate">Granada</span>.
          </p>

          <RouteStrip />

          <div className="mt-6 grid gap-6 md:grid-cols-3">
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
            <GoogleMapEmbed />
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

      {bloquesDestacados.map((b, i) => (
        <section key={b.titulo} className={i === 1 ? "bg-secondary/50 py-14" : "py-14"}>
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
            <figure className="mx-auto mt-10 max-w-4xl">
              <img
                src={jadeCocina}
                alt="Entrada de un apartamento con puerta de cerradura digital y cocina equipada"
                loading="lazy"
                width={1600}
                height={747}
                className="w-full rounded-2xl border-4 border-white object-cover"
                style={{ boxShadow: "var(--shadow-soft)" }}
              />
              <figcaption className="mt-3 text-center text-sm text-muted-foreground">
                Así es la entrada: puerta con cerradura digital, a pie de calle y sin escaleras.
              </figcaption>
            </figure>
          </div>
        </section>
      ))}

      <section className="relative overflow-hidden bg-pastel py-20">
        <div aria-hidden="true" className="absolute inset-0 bg-lattice" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <figure>
            <img
              src={fachada}
              alt="Fachada real del edificio de apartamentos Tórtola 10 en Granada"
              className="w-full rounded-2xl border-8 border-white object-cover shadow-xl lg:-rotate-2"
            />
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              La entrada real: a pie de calle, sin escaleras.
            </figcaption>
          </figure>
          <div>
            <h2 className="font-display text-4xl">
              <span translate="no" className="notranslate">Calle Tórtola 10</span>
              , <span translate="no" className="notranslate">Granada</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Un edificio reformado y tranquilo, con tres apartamentos independientes pensados para parejas, viajeros de negocios y estancias médicas.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["3", "Apartamentos"],
                ["35–43 m²", "Superficie"],
                ["4", "Huéspedes"],
                ["1", "Dormitorio independiente"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-xl border border-border bg-card/90 p-5">
                  <dt className="font-display text-3xl text-primary">{n}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <TrackDivider />


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
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {servicios.map(({ icon: Icon, t, d, clase }) => (
            <div
              key={t}
              className={`flex gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30 ${clase ?? ""}`}
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-2xl leading-tight">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TrackDivider />

      <section className="relative overflow-hidden bg-pastel py-12">
        <div aria-hidden="true" className="absolute inset-0 bg-lattice" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Estancias más largas
          </p>
          <h2 className="mt-3 font-display text-3xl">¿Vienes a Granada por más de un mes?</h2>
          <p className="mt-4 text-muted-foreground">
            Aceptamos estancias de varias semanas o meses para quien viene a trabajar, estudiar o
            investigar: profesores visitantes, alumnos de máster, profesionales en prácticas en
            hospitales o en un proyecto. Cuéntanos tu caso y te respondemos por correo.
          </p>
          <Link
            to="/estancias-medias"
            className="mx-auto mt-6 block max-w-md transition-transform hover:scale-[1.02]"
          >
            <img
              src="/images/banner-estancias.webp"
              alt="Estancias de más de un mes, para teletrabajo y estudio: cuéntanos tu caso"
              width={1400}
              height={485}
              loading="lazy"
              className="h-auto w-full"
            />
          </Link>
        </div>
      </section>

      <section className="bg-secondary/50 bg-lattice py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl">Quiénes somos</h2>
          <p className="mt-5 text-muted-foreground">
            Somos una empresa familiar especializada en el alquiler de apartamentos en <span translate="no" className="notranslate">Granada</span> desde hace más de 20 años. Con Apartamentos Tórtola, seguimos ofreciendo la misma cercanía y atención de siempre, ahora también para estancias de corta y larga duración: turismo, opositores, estudiantes de MIR y acompañantes de pacientes en los hospitales cercanos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-18">
        <h2 className="text-center font-display text-4xl">Preguntas frecuentes</h2>
        <div className="mt-12 grid items-start gap-x-14 gap-y-10 md:grid-cols-2">
          {[
            { titulo: "El alojamiento", lista: faqsAlojamiento },
            { titulo: "Llegada y reserva", lista: faqsLlegada },
          ].map((col) => (
            <div key={col.titulo}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">{col.titulo}</h3>
              <Accordion type="single" collapsible className="mt-2">
                {col.lista.map((f) => (
                  <AccordionItem key={f.pregunta} value={f.pregunta}>
                    <AccordionTrigger className="text-left">{f.pregunta}</AccordionTrigger>
                    <AccordionContent>{f.respuesta}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden bg-pastel py-20">
        <div aria-hidden="true" className="absolute inset-0 bg-lattice" />
        <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Sin intermediarios</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Reserva directa</h2>
            <p className="mt-4 text-muted-foreground">
              Habla directamente con nosotros: te decimos qué apartamento está libre en tus fechas y cuánto cuesta.
            </p>
            <ol className="mt-8 space-y-5">
              {[
                ["Escríbenos o llámanos", "Indícanos las fechas, cuántos sois y qué apartamento te interesa."],
                ["Te respondemos en menos de 24 horas", "Con disponibilidad, precio y condiciones."],
                ["Confirmas y llegas cuando quieras", "Recibes el código de acceso: check-in autónomo, las 24 horas."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium">{t}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm font-medium">¿Prefieres escribirnos?</p>
              <div className="mt-3 flex flex-col gap-2 text-sm sm:text-base">
                <a href="mailto:reservas@apartamentostortola.com" className="inline-flex min-w-0 items-center gap-3 font-semibold text-primary hover:underline">
                  <Mail className="h-5 w-5 shrink-0" />
                  <span className="min-w-0 break-all">reservas@apartamentostortola.com</span>
                </a>
                <p className="inline-flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <span translate="no" className="notranslate">Calle Tórtola 10, Granada</span>
                </p>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Garaje privado según disponibilidad y con coste adicional.</p>
            </div>
          </div>

          <div className="min-w-0 rounded-3xl border border-border bg-card/95 p-5 sm:p-8" style={{ boxShadow: "var(--shadow-soft)" }}>
            <ConsultaFechas extraNombre={extraNombre} />
          </div>
        </div>
      </section>

      <StickyCta />

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        <img
          src="/images/logo-tortola.png"
          alt="Apartamentos Tórtola 10 · Granada"
          width={640}
          height={640}
          className="mx-auto mb-4 h-44 w-auto sm:h-52"
        />
        <div className="mb-3 flex flex-wrap justify-center gap-4">
          <Link to="/" className="hover:text-primary">Inicio</Link>
          <Link to="/experiencias" className="hover:text-primary">Experiencias</Link>
          <Link to="/estancias-medias" className="hover:text-primary">
            Estancias de varias semanas o meses
          </Link>
          <a href="#contacto" className="hover:text-primary">Reservar</a>
        </div>
        <p className="mb-2 text-sm text-foreground">
          <span translate="no" className="notranslate">Calle Tórtola 10, Granada</span>
        </p>
        <LegalLinks />
        © {new Date().getFullYear()}{" "}
        <span translate="no" className="notranslate">
          MAFERASUR, S.L.
        </span>{" "}
        · <span translate="no" className="notranslate">Apartamentos Tórtola 10</span> · Granada
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
