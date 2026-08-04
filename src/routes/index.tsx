import { createFileRoute } from "@tanstack/react-router";
import granada from "@/assets/granada.jpg";
import salon from "@/assets/salon.jpg";
import dormitorio from "@/assets/dormitorio.jpg";
import cocina from "@/assets/cocina.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tórtola 10 · Apartamentos turísticos junto a la estación de Granada" },
      {
        name: "description",
        content:
          "3 apartamentos turísticos de 40 m² con dormitorio independiente, totalmente equipados, a pasos de la estación de ferrocarril de Granada.",
      },
      {
        property: "og:title",
        content: "Tórtola 10 · Apartamentos turísticos en Granada",
      },
      {
        property: "og:description",
        content:
          "3 apartamentos de 40 m² con dormitorio, junto a la estación de tren de Granada. Reserva directa.",
      },
    ],
  }),
  component: Index,
});

const apartamentos = [
  {
    nombre: "Apartamento Alhambra",
    img: salon,
    desc: "Salón-comedor luminoso con sofá cama, dormitorio independiente y cocina totalmente equipada.",
    detalles: ["40 m²", "2 huéspedes", "1 dormitorio", "1 baño"],
  },
  {
    nombre: "Apartamento Albaicín",
    img: dormitorio,
    desc: "Dormitorio con cama de matrimonio, ropa de cama premium, aire acondicionado y Smart TV.",
    detalles: ["40 m²", "2 huéspedes", "1 dormitorio", "1 baño"],
  },
  {
    nombre: "Apartamento Realejo",
    img: cocina,
    desc: "Cocina completa con vitrocerámica, microondas y nevera, y baño con ducha de obra.",
    detalles: ["40 m²", "2 huéspedes", "1 dormitorio", "1 baño"],
  },
];

const servicios = [
  { t: "Wi-Fi de fibra", d: "Conexión rápida para teletrabajo o streaming." },
  { t: "Aire acondicionado", d: "Frío y calor en todas las estancias." },
  { t: "Cocina equipada", d: "Vitrocerámica, microondas, nevera y menaje." },
  { t: "Lavadora", d: "Ideal para estancias largas." },
  { t: "Check-in autónomo", d: "Acceso con caja de llaves 24 h." },
  { t: "Ropa y toallas", d: "Juego completo incluido en cada estancia." },
];

const ubicacion = [
  ["2 min", "Estación de tren de Granada"],
  ["5 min", "Estación de autobuses (bus urbano)"],
  ["15 min", "Catedral y centro histórico"],
  ["20 min", "Alhambra"],
];

function Index() {
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
            Granada · Junto a la estación de ferrocarril
          </p>
          <h1 className="mt-6 font-display text-5xl leading-tight text-primary-foreground sm:text-7xl">
            Tres apartamentos para descubrir Granada
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/85">
            Apartamentos turísticos de 40 m² con dormitorio independiente, reformados y
            totalmente equipados, a dos minutos de la estación de tren.
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

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="font-display text-4xl">Tu base perfecta en Granada</h2>
        <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
          En Calle Tórtola 10 encontrarás tres apartamentos independientes pensados para
          parejas, viajeros de negocios y estancias cortas. Llegas en tren y en dos minutos
          estás en casa.
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
                className="overflow-hidden rounded-2xl bg-card"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <img
                  src={a.img}
                  alt={a.nombre}
                  loading="lazy"
                  width={1600}
                  height={1072}
                  className="h-56 w-full object-cover"
                />
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
              Calle Tórtola 10, Granada. Junto a la estación de ferrocarril y bien conectado
              con el centro histórico, la Alhambra y Sierra Nevada.
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
            href="mailto:info@tortola10.com"
            className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            info@tortola10.com
          </a>
          <a
            href="tel:+34600000000"
            className="rounded-full border border-border px-7 py-3 text-sm font-medium transition-colors hover:bg-muted"
          >
            +34 600 000 000
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tórtola 10 · Apartamentos turísticos · Granada
      </footer>
    </div>
  );
}
