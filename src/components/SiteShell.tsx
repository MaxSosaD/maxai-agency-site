import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { DottedSurface } from "@/components/DottedSurface";

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

            {/* Products dropdown */}
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 hover:text-white"
              >
                {locale === "es" ? "Productos" : "Products"}
                <span className="text-[10px] opacity-70">▾</span>
              </button>
              <div className="invisible absolute right-0 top-full z-50 mt-3 w-44 translate-y-1 rounded-xl border border-white/12 bg-black/70 p-2 opacity-0 shadow-[0_16px_50px_rgba(0,0,0,0.55)] backdrop-blur transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <a
                  href="https://maxdash-pi.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-lg px-3 py-2 text-sm text-zinc-100 hover:bg-white/10"
                >
                  MaxDash
                  <div className="text-[11px] text-zinc-400">
                    {locale === "es" ? "Dashboard" : "Dashboard"}
                  </div>
                </a>
              </div>
            </div>

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
