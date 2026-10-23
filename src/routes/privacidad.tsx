import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";
import { EMPRESA } from "@/lib/empresa";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad | Apartamentos Tórtola" },
      { name: "description", content: "Cómo tratamos tus datos personales en Apartamentos Tórtola." },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${EMPRESA.web}/privacidad` }],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <LegalLayout titulo="Política de privacidad">
      <h2>Responsable</h2>
      <p>
        {EMPRESA.razonSocial} (CIF {EMPRESA.cif}), {EMPRESA.domicilio}. Contacto: <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>.
      </p>
      <h2>Qué datos tratamos y para qué</h2>
      <table>
        <thead>
          <tr><th>Finalidad</th><th>Datos</th><th>Base jurídica</th><th>Conservación</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Responder consultas (correo, teléfono, formulario de estancias de varias semanas o meses)</td>
            <td>Nombre, contacto y lo que nos cuentes</td>
            <td>Tu consentimiento / medidas precontractuales</td>
            <td>Hasta 12 meses desde la última comunicación si no hay reserva</td>
          </tr>
          <tr>
            <td>Gestionar la reserva y la estancia, incluido el registro de viajeros obligatorio</td>
            <td>Datos identificativos, documento de identidad, contacto, pago</td>
            <td>Ejecución del contrato y obligación legal</td>
            <td>Los plazos exigidos por la normativa (registro de viajeros, fiscal y contable)</td>
          </tr>
          <tr>
            <td>Estadísticas de uso de la web (Google Analytics)</td>
            <td>Datos de navegación seudonimizados</td>
            <td>Tu consentimiento (cookies)</td>
            <td>14 meses como máximo</td>
          </tr>
        </tbody>
      </table>
      <p>
        El formulario de estancias no guarda datos en esta web: prepara un correo que envías tú desde tu aplicación de correo y que recibimos en {EMPRESA.email}.
      </p>
      <h2>Destinatarios</h2>
      <p>
        No cedemos tus datos salvo obligación legal (por ejemplo, a las Fuerzas y Cuerpos de Seguridad para el registro de viajeros y a las administraciones tributarias). Trabajan para nosotros, como encargados del tratamiento, proveedores de correo, alojamiento web y gestión de reservas y pagos. Google (Analytics, Maps y Translate) puede implicar transferencias internacionales amparadas en el Marco de Privacidad de Datos UE-EEUU u otras garantías adecuadas.
      </p>
      <h2>Tus derechos</h2>
      <p>
        Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad, y retirar tu consentimiento cuando quieras, escribiendo a <a href={`mailto:${EMPRESA.email}`}>{EMPRESA.email}</a>. Si crees que no hemos tratado bien tus datos, puedes reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
      </p>
      <h2>Menores</h2>
      <p>Esta web no está dirigida a menores de 14 años; no recogemos sus datos de forma consciente.</p>
    </LegalLayout>
  );
}
