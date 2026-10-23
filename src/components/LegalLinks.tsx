import { Link } from "@tanstack/react-router";
import { abrirConfiguracionCookies } from "@/lib/consent";

/** Enlaces legales del pie de página. */
export function LegalLinks() {
  return (
    <div className="mb-3 flex flex-wrap justify-center gap-x-4 gap-y-1">
      <Link to="/aviso-legal" className="hover:text-primary">Aviso legal</Link>
      <Link to="/privacidad" className="hover:text-primary">Política de privacidad</Link>
      <Link to="/cookies" className="hover:text-primary">Política de cookies</Link>
      <button type="button" onClick={abrirConfiguracionCookies} className="hover:text-primary">
        Configurar cookies
      </button>
    </div>
  );
}
