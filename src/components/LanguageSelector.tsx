import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";

const IDIOMAS = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "zh-CN", label: "中文 (简体)" },
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
];

const INCLUDED = IDIOMAS.map((i) => i.code).join(",");

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
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

  const cambiarIdioma = (code: string) => {
    setActivo(code);
    setAbierto(false);
    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (combo) {
      combo.value = code === "es" ? "" : code;
      combo.dispatchEvent(new Event("change"));
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
        <Globe className="h-4 w-4" aria-hidden="true" />
      </button>

      {abierto && (
        <ul
          role="menu"
          className="absolute right-0 top-11 z-50 max-h-[70vh] w-40 overflow-auto rounded-xl border border-border bg-card py-1 font-sans text-sm shadow-lg"
        >
          {IDIOMAS.map((i) => (
            <li key={i.code}>
              <button
                type="button"
                role="menuitem"
                onClick={() => cambiarIdioma(i.code)}
                className={`block w-full px-4 py-2 text-left text-foreground transition-colors hover:bg-muted ${
                  activo === i.code ? "font-medium text-primary" : ""
                }`}
              >
                {i.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
