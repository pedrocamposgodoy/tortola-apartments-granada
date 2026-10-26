import { useState } from "react";
import { es } from "react-day-picker/locale";
import type { DateRange } from "react-day-picker";
import { CalendarDays, Mail } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

const EMAIL = "reservas@apartamentostortola.com";
const fmt = (d: Date) =>
  d.toLocaleDateString("es-ES", { weekday: "short", day: "numeric", month: "short", year: "numeric" });

/**
 * Selector de fechas para consultar disponibilidad. Prepara un correo con las fechas elegidas.
 * No guarda datos en la web. Se sustituirá por el widget del PMS (Avirato) cuando se integre.
 */
export function ConsultaFechas({ extraNombre }: { extraNombre?: string | undefined }) {
  const [rango, setRango] = useState<DateRange | undefined>();
  const [huespedes, setHuespedes] = useState("2");
  const [apto, setApto] = useState("Cualquiera");

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const completo = !!(rango?.from && rango?.to);
  const noches = completo ? Math.round((rango!.to!.getTime() - rango!.from!.getTime()) / 86400000) : 0;

  const asunto = extraNombre ? `Consulta: ${extraNombre}` : "Consulta de disponibilidad";
  const cuerpo = [
    "Hola, quisiera consultar disponibilidad:",
    "",
    `Entrada: ${rango?.from ? fmt(rango.from) : "(por indicar)"}`,
    `Salida: ${rango?.to ? fmt(rango.to) : "(por indicar)"}`,
    `Huéspedes: ${huespedes}`,
    `Apartamento: ${apto}`,
    extraNombre ? `Experiencia: ${extraNombre}` : "",
    "",
    "Gracias.",
  ]
    .filter((l, i, a) => l !== "" || a[i - 1] !== "")
    .join("\n");
  const href = `mailto:${EMAIL}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

  const campo =
    "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40";

  return (
    <div className="text-left">
      <h3 className="text-center font-display text-3xl">Elige tus fechas</h3>
      <p className="mt-1 text-center text-sm text-muted-foreground">
        Selecciona entrada y salida y te respondemos con disponibilidad y precio.
      </p>
      {extraNombre && (
        <p className="mx-auto mt-4 w-fit rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
          Experiencia seleccionada: {extraNombre}
        </p>
      )}
      <div className="mt-4 flex justify-center">
        <Calendar
          mode="range"
          locale={es}
          weekStartsOn={1}
          selected={rango}
          onSelect={setRango}
          disabled={{ before: hoy }}
          numberOfMonths={1}
          className="rounded-2xl border border-border bg-background/60 [--cell-size:2.4rem] sm:[--cell-size:2.6rem]"
        />
      </div>
      <p className="mt-3 flex items-center justify-center gap-2 text-center text-sm font-medium">
        <CalendarDays className="h-4 w-4 text-primary" />
        {completo ? `${fmt(rango!.from!)} → ${fmt(rango!.to!)} · ${noches} ${noches === 1 ? "noche" : "noches"}` : "Elige primero el día de entrada y luego el de salida"}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <label className="text-xs font-medium text-muted-foreground">
          Huéspedes
          <select className={`${campo} mt-1`} value={huespedes} onChange={(e) => setHuespedes(e.target.value)}>
            {["1", "2", "3", "4"].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-medium text-muted-foreground">
          Apartamento
          <select className={`${campo} mt-1`} value={apto} onChange={(e) => setApto(e.target.value)}>
            {["Cualquiera", "Perla", "Jade", "Coral"].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
      </div>
      <a
        href={href}
        aria-disabled={!completo}
        onClick={(e) => {
          if (!completo) e.preventDefault();
        }}
        className={`mt-5 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform ${
          completo
            ? "bg-primary text-primary-foreground hover:scale-[1.02]"
            : "cursor-not-allowed bg-muted text-muted-foreground"
        }`}
      >
        <Mail className="h-4 w-4" />
        Consultar disponibilidad
      </a>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Se abrirá tu correo con las fechas ya escritas. Esta web no guarda tus datos.
      </p>
    </div>
  );
}
