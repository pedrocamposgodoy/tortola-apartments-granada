import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { LegalLinks } from "@/components/LegalLinks";
import { EMPRESA } from "@/lib/empresa";

export function LegalLayout({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="border-b border-border bg-background/90">
        <div className="mx-auto flex max-w-3xl items-center px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> Volver a Apartamentos Tórtola
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="mb-2 font-display text-4xl font-semibold">{titulo}</h1>
        <p className="mb-10 text-sm text-muted-foreground">Última actualización: {EMPRESA.actualizado}</p>
        <div className="space-y-4 text-[15px] leading-relaxed [&_a]:text-primary [&_a]:underline [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_li]:ml-5 [&_li]:list-disc [&_table]:w-full [&_table]:text-left [&_table]:text-sm [&_td]:border [&_td]:border-border [&_td]:p-2 [&_th]:border [&_th]:border-border [&_th]:bg-secondary [&_th]:p-2">
          {children}
        </div>
      </main>
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        <LegalLinks />
        © {new Date().getFullYear()} {EMPRESA.razonSocial}
      </footer>
    </div>
  );
}
