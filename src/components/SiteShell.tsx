import type { Locale } from "@/lib/i18n";
import { SiteHeader } from "@/components/SiteHeader";

const WHATSAPP_URL =
  "https://wa.me/524433892078?text=" +
  encodeURIComponent(
    "Hola, quiero una auditoría IA para automatizar procesos de mi negocio."
  );

export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-[#0a0a0f] text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a3a] bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
          <SiteHeader locale={locale} />
        </div>
      </header>

      {/* Contenido principal */}
      <main className="pt-[72px]">{children}</main>

      {/* WhatsApp floating button (bottom-left) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotizar por WhatsApp"
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#1da851] transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 flex-shrink-0" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="hidden sm:inline">Cotizar por WhatsApp</span>
      </a>

      {/* Footer */}
      <footer className="border-t border-[#2a2a3a] bg-[#0a0a0f] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 text-lg font-bold text-white">
                <span className="text-[#00ff88]">Max</span>AI
                <span className="text-sm font-medium text-[#94a3b8]">Agencia</span>
              </div>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#64748b]">
                Automatización con inteligencia artificial para negocios que quieren ahorrar tiempo, responder más rápido y escalar sin contratar más personal.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#94a3b8] hover:text-[#00ff88] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Nav links */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#64748b]">
                Navegación
              </p>
              <ul className="space-y-3 text-sm text-[#94a3b8]">
                {[
                  { label: "Automatizaciones", href: "#automatizaciones" },
                  { label: "Calculadora", href: "#calculadora" },
                  { label: "Proceso", href: "#proceso" },
                  { label: "Planes", href: "#precios" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Contacto", href: "#contacto" },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-[#00ff88] transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#64748b]">
                Empieza hoy
              </p>
              <p className="mb-4 text-sm text-[#64748b]">
                Agenda una auditoría gratuita de 30 minutos y descubre qué puedes automatizar.
              </p>
              <a
                href="#contacto"
                className="inline-block rounded-xl bg-[#00ff88] px-5 py-2.5 text-sm font-semibold text-[#0a0a0f] hover:bg-[#00cc6a] transition-colors"
              >
                Agendar auditoría
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-[#2a2a3a] pt-8">
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
              <p className="text-xs text-[#64748b]">
                © {new Date().getFullYear()} MaxAI Agencia. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#64748b]">Aceptamos criptomonedas</span>
                {[
                  { src: "/crypto-logos/btc.svg", alt: "Bitcoin" },
                  { src: "/crypto-logos/eth.svg", alt: "Ethereum" },
                  { src: "/crypto-logos/xrp.svg", alt: "XRP" },
                  { src: "/crypto-logos/sol.svg", alt: "Solana" },
                ].map((coin) => (
                  <img key={coin.alt} src={coin.src} alt={coin.alt} className="h-5 w-5 opacity-60 hover:opacity-100 transition-opacity" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
