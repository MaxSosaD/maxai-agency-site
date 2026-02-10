import type { Locale } from "@/lib/i18n";
import { DottedSurface } from "@/components/DottedSurface";
import { SiteHeader } from "@/components/SiteHeader";

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
        <SiteHeader locale={locale} />

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
