import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";
import { EMPRESA } from "@/lib/empresa";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal | Apartamentos Tórtola" },
      { name: "description", content: "Datos identificativos del titular de apartamentostortola.com y condiciones de uso de la web." },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${EMPRESA.web}/aviso-legal` }],
  }),
  component: AvisoLegal,
});

function AvisoLegal() {
  return (
    <LegalLayout titulo="Aviso legal">
      <p>
        En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web.
      </p>
      <h2>Titular</h2>
      <ul>
        <li>Denominación social: {EMPRESA.razonSocial}</li>
        <li>CIF: {EMPRESA.cif}</li>
        <li>Domicilio social: {EMPRESA.domicilio}</li>
        <li>Inscripción: {EMPRESA.registro}</li>
        <li>Correo electrónico: <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a></li>
        <li>Teléfono: {EMPRESA.telefono}</li>
        <li>Sitio web: {EMPRESA.web}</li>
      </ul>
      <h2>Establecimiento turístico</h2>
      <ul>
        <li>Apartamentos Tórtola: apartamentos turísticos en {EMPRESA.establecimiento}.</li>
        {EMPRESA.registroTurismo && <li>Número de inscripción en el Registro de Turismo de Andalucía: {EMPRESA.registroTurismo}</li>}
        {EMPRESA.registroArrendamientos && <li>Número de registro único de arrendamientos: {EMPRESA.registroArrendamientos}</li>}
      </ul>
      <p>Disponemos de hojas de reclamaciones a disposición de los clientes en el establecimiento.</p>
      <h2>Objeto y condiciones de uso</h2>
      <p>
        Esta web informa sobre los apartamentos y permite contactar para solicitar reservas y estancias. El acceso es gratuito y supone aceptar este aviso. Te comprometes a hacer un uso lícito y diligente del sitio.
      </p>
      <h2>Propiedad intelectual</h2>
      <p>
        Los textos, fotografías, logotipos y diseño son titularidad de {EMPRESA.razonSocial} o se usan con autorización. No se permite su reproducción o distribución sin permiso previo y por escrito.
      </p>
      <h2>Responsabilidad</h2>
      <p>
        Procuramos que la información sea exacta y esté actualizada, pero puede contener errores; las condiciones definitivas de cada reserva son las confirmadas por escrito. No nos hacemos responsables de los contenidos de webs de terceros enlazadas ni de las interrupciones del servicio ajenas a nuestro control. La traducción automática la ofrece Google y puede contener imprecisiones.
      </p>
      <h2>Legislación y jurisdicción</h2>
      <p>
        Este sitio se rige por la legislación española. Si eres consumidor, podrás acudir a los juzgados que te correspondan según la normativa vigente.
      </p>
    </LegalLayout>
  );
}
