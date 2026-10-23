import { useState, type FormEvent } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

/**
 * Formulario filtro para estancias de más de un mes.
 *
 * Fase 1: no guarda nada en ningún servidor. Al enviar, prepara un correo con los
 * datos ya redactados para reservas@apartamentostortola.com (abre el programa de
 * correo de la persona) y ofrece copiar el texto por si no se abre.
 * Fase 2 (opcional, más adelante): guardar la consulta en Supabase y avisar por correo.
 */

const EMAIL = "reservas@apartamentostortola.com";
const ASUNTO = "Consulta: estancia de más de un mes";

// ---- Edita aquí las opciones de los desplegables y casillas ----
const MOTIVOS = [
  "Docencia o investigación",
  "Estudios (máster, posgrado, doctorado)",
  "Formación o prácticas sanitarias",
  "Trabajo o proyecto profesional",
  "Otro motivo",
];

const QUIEN_PAGA = ["Yo mismo/a", "Mi universidad u otra entidad", "Mi empresa", "Aún no lo sé"];

const DOCUMENTOS = [
  "Carta de invitación o de la entidad",
  "Matrícula, admisión o credencial",
  "Documento de la entidad o del proyecto (convenio, encargo…)",
  "Otra documentación",
];

const NECESIDADES = ["Apartamento accesible (movilidad reducida)", "Plaza de cochera"];

type Datos = {
  confirma: boolean;
  nombre: string;
  correo: string;
  fechas: string;
  personas: string;
  motivo: string;
  entidad: string;
  quienPaga: string;
  residencia: string;
  descripcion: string;
  documentos: string[];
  necesidades: string[];
  privacidad: boolean;
};

type Errores = Partial<Record<"confirma" | "nombre" | "correo" | "motivo" | "privacidad", string>>;

const inicial: Datos = {
  confirma: false,
  nombre: "",
  correo: "",
  fechas: "",
  personas: "1",
  motivo: "",
  entidad: "",
  quienPaga: "",
  residencia: "",
  descripcion: "",
  documentos: [],
  necesidades: [],
  privacidad: false,
};

const selectClass =
  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm";

function redactarMensaje(d: Datos): string {
  const lineas: string[] = [
    "Hola:",
    "",
    "Quiero consultar una estancia de más de un mes (no es una estancia turística de pocos días).",
    "",
  ];
  const campo = (etiqueta: string, valor: string) => {
    if (valor.trim()) lineas.push(`${etiqueta}: ${valor.trim()}`);
  };
  campo("Nombre", d.nombre);
  campo("Correo", d.correo);
  campo("Fechas aproximadas", d.fechas);
  campo("Número de personas", d.personas);
  campo("Motivo de la estancia", d.motivo);
  campo("Universidad, hospital o empresa", d.entidad);
  campo("Quién abonará la estancia", d.quienPaga);
  campo("Lugar de residencia habitual", d.residencia);
  campo("Documentación que podría aportar", d.documentos.join("; "));
  campo("Necesidades", d.necesidades.join("; "));
  if (d.descripcion.trim()) {
    lineas.push("", "Mi caso:", d.descripcion.trim());
  }
  lineas.push("", "Gracias.");
  return lineas.join("\n");
}

function CasillaLista({
  titulo,
  ayuda,
  opciones,
  valores,
  onChange,
  prefijo,
}: {
  titulo: string;
  ayuda?: string;
  opciones: string[];
  valores: string[];
  onChange: (v: string[]) => void;
  prefijo: string;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium">{titulo}</legend>
      {ayuda && <p className="mt-1 text-xs text-muted-foreground">{ayuda}</p>}
      <div className="mt-3 space-y-2.5">
        {opciones.map((o, i) => {
          const id = `${prefijo}-${i}`;
          const marcada = valores.includes(o);
          return (
            <div key={o} className="flex items-start gap-3">
              <Checkbox
                id={id}
                checked={marcada}
                onCheckedChange={(c) =>
                  onChange(c === true ? [...valores, o] : valores.filter((x) => x !== o))
                }
                className="mt-0.5"
              />
              <Label htmlFor={id} className="cursor-pointer text-sm font-normal leading-snug">
                {o}
              </Label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}

function Campo({
  id,
  etiqueta,
  obligatorio,
  ayuda,
  error,
  children,
}: {
  id: string;
  etiqueta: string;
  obligatorio?: boolean;
  ayuda?: string | undefined;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 block">
        {etiqueta}
        {obligatorio && <span aria-hidden="true"> *</span>}
      </Label>
      {children}
      {ayuda && !error && <p className="mt-1.5 text-xs text-muted-foreground">{ayuda}</p>}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function ConsultaEstanciaForm() {
  const [d, setD] = useState<Datos>(inicial);
  const [errores, setErrores] = useState<Errores>({});
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [copiado, setCopiado] = useState(false);

  const set = <K extends keyof Datos>(k: K, v: Datos[K]) => setD((prev) => ({ ...prev, [k]: v }));

  const enlaceCorreo = (texto: string) =>
    `mailto:${EMAIL}?subject=${encodeURIComponent(ASUNTO)}&body=${encodeURIComponent(texto)}`;

  function enviar(e: FormEvent) {
    e.preventDefault();
    const nuevos: Errores = {};
    if (!d.confirma)
      nuevos.confirma = "Marca esta casilla para confirmar que tu estancia será de más de un mes.";
    if (!d.nombre.trim()) nuevos.nombre = "Indica tu nombre.";
    if (!/^\S+@\S+\.\S+$/.test(d.correo.trim()))
      nuevos.correo = "Indica un correo electrónico válido.";
    if (!d.motivo) nuevos.motivo = "Elige el motivo principal de tu estancia.";
    if (!d.privacidad)
      nuevos.privacidad = "Necesitamos tu conformidad para usar estos datos al responderte.";
    setErrores(nuevos);
    if (Object.keys(nuevos).length > 0) {
      const primero = Object.keys(nuevos)[0];
      document.getElementById(`estancia-${primero}`)?.focus();
      return;
    }
    const texto = redactarMensaje(d);
    setMensaje(texto);
    setCopiado(false);
    window.location.href = enlaceCorreo(texto);
  }

  async function copiar() {
    if (!mensaje) return;
    try {
      await navigator.clipboard.writeText(mensaje);
      setCopiado(true);
    } catch {
      // Si el navegador bloquea el portapapeles, la persona puede seleccionar el texto a mano.
      setCopiado(false);
    }
  }

  return (
    <form
      onSubmit={enviar}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 sm:p-10"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      {/* Filtro: primera casilla, obligatoria */}
      <div
        className={`rounded-xl border p-4 ${errores.confirma ? "border-destructive" : "border-primary/30 bg-primary/5"}`}
      >
        <div className="flex items-start gap-3">
          <Checkbox
            id="estancia-confirma"
            checked={d.confirma}
            onCheckedChange={(c) => set("confirma", c === true)}
            aria-invalid={!!errores.confirma}
            aria-describedby={errores.confirma ? "estancia-confirma-error" : undefined}
            className="mt-0.5"
          />
          <Label
            htmlFor="estancia-confirma"
            className="cursor-pointer text-sm font-medium leading-snug"
          >
            Mi estancia será de más de un mes y no es una estancia turística de pocos días *
          </Label>
        </div>
        {errores.confirma && (
          <p
            id="estancia-confirma-error"
            role="alert"
            className="mt-2 text-xs font-medium text-destructive"
          >
            {errores.confirma}
          </p>
        )}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Campo
          id="estancia-nombre"
          etiqueta="Nombre y apellidos"
          obligatorio
          error={errores.nombre}
        >
          <Input
            id="estancia-nombre"
            autoComplete="name"
            value={d.nombre}
            onChange={(e) => set("nombre", e.target.value)}
            aria-invalid={!!errores.nombre}
            aria-describedby={errores.nombre ? "estancia-nombre-error" : undefined}
          />
        </Campo>
        <Campo
          id="estancia-correo"
          etiqueta="Correo electrónico"
          obligatorio
          error={errores.correo}
        >
          <Input
            id="estancia-correo"
            type="email"
            autoComplete="email"
            value={d.correo}
            onChange={(e) => set("correo", e.target.value)}
            aria-invalid={!!errores.correo}
            aria-describedby={errores.correo ? "estancia-correo-error" : undefined}
          />
        </Campo>

        <Campo
          id="estancia-fechas"
          etiqueta="Fechas aproximadas"
          ayuda="Puedes indicar «aún no lo sé» o un periodo orientativo."
        >
          <Input
            id="estancia-fechas"
            value={d.fechas}
            onChange={(e) => set("fechas", e.target.value)}
            maxLength={120}
          />
        </Campo>
        <Campo id="estancia-personas" etiqueta="Número de personas">
          <select
            id="estancia-personas"
            value={d.personas}
            onChange={(e) => set("personas", e.target.value)}
            className={selectClass}
          >
            {["1", "2", "3", "4"].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </Campo>

        <Campo
          id="estancia-motivo"
          etiqueta="Motivo de tu estancia"
          obligatorio
          error={errores.motivo}
        >
          <select
            id="estancia-motivo"
            value={d.motivo}
            onChange={(e) => set("motivo", e.target.value)}
            aria-invalid={!!errores.motivo}
            aria-describedby={errores.motivo ? "estancia-motivo-error" : undefined}
            className={selectClass}
          >
            <option value="">Elige una opción</option>
            {MOTIVOS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </Campo>
        <Campo
          id="estancia-entidad"
          etiqueta="Universidad, hospital o empresa"
          ayuda="Si vienes por una entidad, indícanos cuál."
        >
          <Input
            id="estancia-entidad"
            value={d.entidad}
            onChange={(e) => set("entidad", e.target.value)}
            maxLength={160}
          />
        </Campo>

        <Campo id="estancia-quienpaga" etiqueta="¿Quién abonará la estancia?">
          <select
            id="estancia-quienpaga"
            value={d.quienPaga}
            onChange={(e) => set("quienPaga", e.target.value)}
            className={selectClass}
          >
            <option value="">Prefiero indicarlo después</option>
            {QUIEN_PAGA.map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
        </Campo>
        <Campo
          id="estancia-residencia"
          etiqueta="Lugar de residencia habitual"
          ayuda="Ciudad y país desde donde vienes."
        >
          <Input
            id="estancia-residencia"
            autoComplete="address-level2"
            value={d.residencia}
            onChange={(e) => set("residencia", e.target.value)}
            maxLength={120}
          />
        </Campo>
      </div>

      <div className="mt-6">
        <Campo
          id="estancia-descripcion"
          etiqueta="Cuéntanos tu caso"
          ayuda="A qué vienes a Granada y qué necesitas, en pocas líneas."
        >
          <Textarea
            id="estancia-descripcion"
            rows={4}
            value={d.descripcion}
            onChange={(e) => set("descripcion", e.target.value)}
            maxLength={1200}
          />
        </Campo>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <CasillaLista
          titulo="Documentación que podrías aportar"
          ayuda="Solo indícalo: no adjuntes nada ahora. Si hace falta, te la pediremos por correo."
          opciones={DOCUMENTOS}
          valores={d.documentos}
          onChange={(v) => set("documentos", v)}
          prefijo="estancia-doc"
        />
        <CasillaLista
          titulo="Necesidades especiales"
          opciones={NECESIDADES}
          valores={d.necesidades}
          onChange={(v) => set("necesidades", v)}
          prefijo="estancia-nec"
        />
      </div>

      <div className="mt-8">
        <div className="flex items-start gap-3">
          <Checkbox
            id="estancia-privacidad"
            checked={d.privacidad}
            onCheckedChange={(c) => set("privacidad", c === true)}
            aria-invalid={!!errores.privacidad}
            aria-describedby={errores.privacidad ? "estancia-privacidad-error" : undefined}
            className="mt-0.5"
          />
          <Label
            htmlFor="estancia-privacidad"
            className="cursor-pointer text-sm font-normal leading-snug"
          >
            He leído la{" "}
            <a href="/privacidad" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-2">
              política de privacidad
            </a>{" "}
            y acepto que se usen estos datos para responder a mi consulta. Esta página no los guarda:
            se incluyen en el correo que tú envías. *
          </Label>
        </div>
        {errores.privacidad && (
          <p
            id="estancia-privacidad-error"
            role="alert"
            className="mt-2 text-xs font-medium text-destructive"
          >
            {errores.privacidad}
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          <Mail className="h-4 w-4" />
          Preparar mi consulta por correo
        </button>
        <p className="text-xs text-muted-foreground">
          Se abrirá tu programa de correo con el mensaje ya redactado; solo tendrás que enviarlo.
        </p>
      </div>

      {mensaje && (
        <div className="mt-8 rounded-xl border border-border bg-muted/60 p-5" role="status">
          <p className="text-sm font-medium">Tu mensaje está preparado</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Si tu programa de correo no se ha abierto, copia este texto y envíalo a{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              {EMAIL}
            </a>{" "}
            con el asunto «{ASUNTO}».
          </p>
          <Textarea
            readOnly
            value={mensaje}
            rows={Math.min(14, mensaje.split("\n").length + 1)}
            className="mt-4 bg-background/70 text-sm"
            aria-label="Texto de tu consulta"
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={copiar}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              {copiado ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
              {copiado ? "Copiado" : "Copiar texto"}
            </button>
            <a
              href={enlaceCorreo(mensaje)}
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" />
              Abrir de nuevo mi correo
            </a>
          </div>
        </div>
      )}
    </form>
  );
}
