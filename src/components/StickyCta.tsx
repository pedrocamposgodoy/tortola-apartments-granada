import { useEffect, useState } from "react";

/** Botón fijo en móvil: aparece tras la cabecera y se oculta al llegar al bloque de contacto. */
export function StickyCta() {
  const [pasadoHero, setPasadoHero] = useState(false);
  const [enContacto, setEnContacto] = useState(false);

  useEffect(() => {
    const onScroll = () => setPasadoHero(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const el = document.getElementById("contacto");
    let io: IntersectionObserver | undefined;
    if (el) {
      io = new IntersectionObserver(([e]) => setEnContacto(!!e?.isIntersecting), { threshold: 0.15 });
      io.observe(el);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  if (!pasadoHero || enContacto) return null;
  return (
    <a
      href="#contacto"
      className="fixed inset-x-4 bottom-4 z-50 rounded-full bg-primary px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-2xl sm:hidden"
    >
      Consultar disponibilidad
    </a>
  );
}
