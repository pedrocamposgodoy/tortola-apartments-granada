import { useEffect, useRef, useState } from "react";

const IDIOMAS = [
  { code: "es", label: "Español", bandera: "es" },
  { code: "en", label: "English", bandera: "gb" },
  { code: "fr", label: "Français", bandera: "fr" },
  { code: "de", label: "Deutsch", bandera: "de" },
  { code: "it", label: "Italiano", bandera: "it" },
  { code: "zh-CN", label: "中文 (简体)", bandera: "cn" },
  { code: "ko", label: "한국어", bandera: "kr" },
  { code: "ja", label: "日本語", bandera: "jp" },
];

const urlBandera = (cc: string) =>
  `https://flagcdn.com/${cc}.svg`;

const INCLUDED = IDIOMAS.map((i) => i.code).join(",");

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}


const dominios = () => {
  const host = window.location.hostname;
  const partes = host.split(".");
  const lista = [host, "." + host];
  if (partes.length > 2) lista.push("." + partes.slice(-2).join("."));
  return lista;
};

function leerCookieIdioma() {
  const m = document.cookie.match(/(?:^|; )googtrans=([^;]+)/);
  if (!m) return null;
  const valor = decodeURIComponent(m[1] ?? "");
  const code = valor.split("/")[2];
  return code || null;
}

function escribirCookieIdioma(code: string) {
  const valor = "/es/" + code;
  document.cookie = `googtrans=${valor};path=/`;
  for (const d of dominios()) {
    document.cookie = `googtrans=${valor};path=/;domain=${d}`;
  }
}

function borrarCookieIdioma() {
  const exp = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.cookie = `googtrans=;path=/;${exp}`;
  for (const d of dominios()) {
    document.cookie = `googtrans=;path=/;domain=${d};${exp}`;
  }
}

export function LanguageSelector() {
  const [abierto, setAbierto] = useState(false);
  const [activo, setActivo] = useState("es");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "es",
          includedLanguages: INCLUDED,
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setAbierto(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    const actual = leerCookieIdioma();
    if (actual) setActivo(actual);
  }, []);

  const cambiarIdioma = (code: string) => {
    setActivo(code);
    setAbierto(false);

    if (code === "es") {
      borrarCookieIdioma();
      window.location.reload();
      return;
    }

    escribirCookieIdioma(code);
    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  };

  return (
    <div ref={ref} className="relative notranslate" translate="no">
      <div id="google_translate_element" className="hidden" aria-hidden="true" />
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-label="Seleccionar idioma"
        aria-haspopup="menu"
        aria-expanded={abierto}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
      >
        <img
          src={urlBandera(IDIOMAS.find((i) => i.code === activo)?.bandera ?? "es")}
          alt=""
          aria-hidden="true"
          className="h-5 w-5 rounded-full object-cover"
        />
      </button>

      {abierto && (
        <ul
          role="menu"
          className="absolute right-0 top-11 z-50 max-h-[70vh] w-44 overflow-auto rounded-xl border border-border bg-card py-1 font-sans text-sm shadow-lg"
        >
          {IDIOMAS.map((i) => (
            <li key={i.code}>
              <button
                type="button"
                role="menuitem"
                onClick={() => cambiarIdioma(i.code)}
                className={`flex w-full items-center gap-3 px-4 py-2 text-left text-foreground transition-colors hover:bg-muted ${
                  activo === i.code ? "font-medium text-primary" : ""
                }`}
              >
                <img
                  src={urlBandera(i.bandera)}
                  alt=""
                  className="h-4 w-4 flex-shrink-0 rounded-full object-cover"
                  aria-hidden="true"
                />
                <span>{i.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
