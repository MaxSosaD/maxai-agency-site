"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { ProductsMenu } from "@/components/ProductsMenu";

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

  // close on route hash change / back
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

  const NavLinks = ({ mobile }: { mobile?: boolean }) => (
    <>
      <a
        className={
          mobile
            ? "rounded-xl px-4 py-3 text-sm font-semibold text-zinc-100 hover:bg-white/5"
            : "hover:text-white"
        }
        href="#servicios"
        onClick={() => setOpen(false)}
      >
        {t.services}
      </a>

      <a
        className={
          mobile
            ? "rounded-xl px-4 py-3 text-sm font-semibold text-zinc-100 hover:bg-white/5"
            : "hover:text-white"
        }
        href="#proceso"
        onClick={() => setOpen(false)}
      >
        {t.process}
      </a>

      <a
        className={
          mobile
            ? "rounded-xl px-4 py-3 text-sm font-semibold text-zinc-100 hover:bg-white/5"
            : "hover:text-white"
        }
        href="#precios"
        onClick={() => setOpen(false)}
      >
        {t.pricing}
      </a>

      <a
        className={
          mobile
            ? "rounded-xl px-4 py-3 text-sm font-semibold text-zinc-100 hover:bg-white/5"
            : "hover:text-white"
        }
        href="#contacto"
        onClick={() => setOpen(false)}
      >
        {t.contact}
      </a>

      <Link
        className={
          mobile
            ? "mx-4 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
            : "rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/10"
        }
        href={t.langHref}
        onClick={() => setOpen(false)}
      >
        {t.lang}
      </Link>
    </>
  );

  return (
    <header className="relative">
      <div className="flex items-center justify-between">
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

        {/* Desktop */}
        <nav className="hidden items-center gap-5 text-sm text-zinc-300 md:flex">
          <NavLinks />
        </nav>

        {/* Mobile */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="md:hidden rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 hover:bg-white/[0.07]"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open ? (
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-2 backdrop-blur md:hidden">
          <nav className="flex flex-col gap-1 text-zinc-200">
            <NavLinks mobile />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
