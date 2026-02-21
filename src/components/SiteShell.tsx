import type { Locale } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";

export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-[#0a0a0f] text-white">
      {/* Fondo simple como maxai-agents */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8">
        <SiteHeader locale={locale} />

        {children}

        <footer className="mt-20 border-t border-[#2a2a3a] pt-8 text-xs text-[#94a3b8]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} MaxAI. All rights reserved.</div>
            <div className="text-[#64748b]">
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
