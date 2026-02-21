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

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onHashChange() {
      setOpen(false);
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const t = {
    services: locale === "es" ? "Servicios" : "Services",
    process: locale === "es" ? "Proceso" : "Process",
    pricing: locale === "es" ? "Precios" : "Pricing",
    contact: locale === "es" ? "Contacto" : "Contact",
    lang: locale === "es" ? "EN" : "ES",
    langHref: locale === "es" ? "/en" : "/es",
  };

  return (
    <>
      {/* Logo */}
      <Link href={`/${locale}`} className="flex items-center gap-3">
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
      <nav className="hidden items-center gap-8 md:flex">
        <a href="#servicios" className="text-sm font-medium text-[#94a3b8] hover:text-[#00ff88] transition-colors">
          {t.services}
        </a>
        <a href="#proceso" className="text-sm font-medium text-[#94a3b8] hover:text-[#00ff88] transition-colors">
          {t.process}
        </a>
        <a href="#precios" className="text-sm font-medium text-[#94a3b8] hover:text-[#00ff88] transition-colors">
          {t.pricing}
        </a>
        <a href="#contacto" className="text-sm font-medium text-[#94a3b8] hover:text-[#00ff88] transition-colors">
          {t.contact}
        </a>
        <Link
          href={t.langHref}
          className="rounded-lg border border-[#2a2a3a] bg-[#1a1a24] px-3 py-1.5 text-xs font-semibold text-white hover:border-[#00ff88]"
        >
          {t.lang}
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="md:hidden rounded-xl border border-[#2a2a3a] bg-[#1a1a24] p-2"
      >
        <MenuIcon open={open} />
      </button>

      {/* Mobile Nav */}
      {open && (
        <div className="absolute left-0 right-0 top-full mt-4 rounded-2xl border border-[#2a2a3a] bg-[#0a0a0f] p-4 md:hidden">
          <nav className="flex flex-col gap-2">
            <a href="#servicios" className="rounded-xl px-4 py-3 text-sm font-medium text-[#94a3b8] hover:bg-[#1a1a24]">
              {t.services}
            </a>
            <a href="#proceso" className="rounded-xl px-4 py-3 text-sm font-medium text-[#94a3b8] hover:bg-[#1a1a24]">
              {t.process}
            </a>
            <a href="#precios" className="rounded-xl px-4 py-3 text-sm font-medium text-[#94a3b8] hover:bg-[#1a1a24]">
              {t.pricing}
            </a>
            <a href="#contacto" className="rounded-xl px-4 py-3 text-sm font-medium text-[#94a3b8] hover:bg-[#1a1a24]">
              {t.contact}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
