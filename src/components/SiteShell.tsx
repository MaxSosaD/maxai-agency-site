import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { DottedSurface } from "@/components/DottedSurface";
import { ProductsMenu } from "@/components/ProductsMenu";

export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-[#050507] text-zinc-50">
      <DottedSurface />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8">
        <header className="flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <Image
                src="/maxai-logo.svg"
                alt="MaxAI"
                fill
                className="drop-shadow-[0_0_24px_rgba(57,255,20,0.32)]"
                priority
              />
            </div>
            <div className="text-lg font-semibold tracking-tight">MaxAI</div>
          </Link>

          <nav className="flex items-center gap-5 text-sm text-zinc-300">
            <a className="hover:text-white" href="#what">
              {locale === "es" ? "Servicios" : "Services"}
            </a>

            <ProductsMenu locale={locale} />

            <a className="hover:text-white" href="#process">
              {locale === "es" ? "Proceso" : "Process"}
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
            <Link
              className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/10"
              href={locale === "es" ? "/en" : "/es"}
            >
              {locale === "es" ? "EN" : "ES"}
            </Link>
          </nav>
        </header>

        {children}

        <footer className="mt-20 border-t border-white/10 pt-8 text-xs text-zinc-400">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} MaxAI. All rights reserved.</div>
            <div className="text-zinc-500">
              {locale === "es"
                ? "Pagos crypto: listo para fase 2."
                : "Crypto payments: ready for phase 2."}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
