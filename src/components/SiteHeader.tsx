"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative h-5 w-6">
      <span
        className={
          "absolute left-0 top-0 h-0.5 w-6 rounded bg-white transition-transform duration-200 " +
          (open ? "translate-y-[9px] rotate-45" : "")
        }
      />
      <span
        className={
          "absolute left-0 top-[9px] h-0.5 w-6 rounded bg-white transition-opacity duration-200 " +
          (open ? "opacity-0" : "opacity-100")
        }
      />
      <span
        className={
          "absolute left-0 top-[18px] h-0.5 w-6 rounded bg-white transition-transform duration-200 " +
          (open ? "-translate-y-[9px] -rotate-45" : "")
        }
      />
    </div>
  );
}

const NAV_LINKS = [
  { label: "Automatizaciones", href: "#automatizaciones" },
  { label: "Calculadora", href: "#calculadora" },
  { label: "Proceso", href: "#proceso" },
  { label: "Planes", href: "#precios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onHashChange() {
      setOpen(false);
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const langHref = locale === "es" ? "/en" : "/es";
  const langLabel = locale === "es" ? "EN" : "ES";

  return (
    <>
      {/* Logo */}
      <Link href={`/${locale}`} className="flex items-center gap-3 flex-shrink-0">
        <div className="relative h-10 w-10">
          <Image
            src="/maxai-logo.svg"
            alt="MaxAI"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="text-xl font-bold text-white">
          <span className="text-[#00ff88]">Max</span>AI
        </div>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden items-center gap-6 lg:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-[#94a3b8] hover:text-[#00ff88] transition-colors"
          >
            {link.label}
          </a>
        ))}
        <Link
          href={langHref}
          className="rounded-lg border border-[#2a2a3a] bg-[#1a1a24] px-3 py-1.5 text-xs font-semibold text-white hover:border-[#00ff88] transition-colors"
        >
          {langLabel}
        </Link>
        <a
          href="#contacto"
          className="rounded-xl bg-[#00ff88] px-4 py-2 text-sm font-semibold text-[#0a0a0f] hover:bg-[#00cc6a] transition-colors"
        >
          Agenda auditoría
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen(!open)}
        className="lg:hidden rounded-xl border border-[#2a2a3a] bg-[#1a1a24] p-2"
      >
        <MenuIcon open={open} />
      </button>

      {/* Mobile Nav */}
      {open && (
        <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-[#2a2a3a] bg-[#0a0a0f] p-4 lg:hidden mx-4">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#94a3b8] hover:bg-[#1a1a24] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 border-t border-[#2a2a3a] pt-3 flex flex-col gap-2">
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-[#00ff88] px-4 py-3 text-center text-sm font-semibold text-[#0a0a0f]"
              >
                Agenda auditoría gratis
              </a>
              <Link
                href={langHref}
                className="rounded-xl border border-[#2a2a3a] px-4 py-2 text-center text-xs font-semibold text-white"
              >
                {langLabel}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
