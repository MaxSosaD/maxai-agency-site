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
      {/* Navbar estilo maxai-agents */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a3a] bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
          <SiteHeader locale={locale} />
        </div>
      </header>

      {/* Contenido principal */}
      <main className="pt-[72px]">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2a2a3a] bg-[#0a0a0f] py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-lg font-bold text-white">
                <span className="text-[#00ff88]">Max</span>AI
                <span className="text-sm font-medium text-[#94a3b8]">Agencia</span>
              </div>
              <p className="mt-2 text-sm text-[#64748b]">
                Automatización inteligente para tu negocio.
              </p>
            </div>
            <div className="flex gap-8 text-sm text-[#94a3b8]">
              <a href="#servicios" className="hover:text-[#00ff88]">Servicios</a>
              <a href="#proceso" className="hover:text-[#00ff88]">Proceso</a>
              <a href="#precios" className="hover:text-[#00ff88]">Precios</a>
              <a href="#contacto" className="hover:text-[#00ff88]">Contacto</a>
            </div>
          </div>
          <div className="mt-8 border-t border-[#2a2a3a] pt-8">
            {/* Cryptos aceptadas */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-xs text-[#64748b]">Cryptos aceptadas</p>
              <div className="flex items-center gap-4">
                <img src="/crypto-logos/btc.svg" alt="BTC" className="h-6 w-6" />
                <img src="/crypto-logos/eth.svg" alt="ETH" className="h-6 w-6" />
                <img src="/crypto-logos/sol.svg" alt="SOL" className="h-6 w-6" />
                <img src="/crypto-logos/usdt.svg" alt="USDT" className="h-6 w-6" />
                <img src="/crypto-logos/xrp.svg" alt="XRP" className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-8 text-center text-xs text-[#64748b]">
              © {new Date().getFullYear()} MaxAI. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
