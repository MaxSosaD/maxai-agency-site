"use client";

import { useEffect, useRef, useState } from "react";

export function ProductsMenu({ locale }: { locale: "en" | "es" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (!ref.current) return;
      if (ref.current.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 hover:text-white"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
      >
        {locale === "es" ? "Productos" : "Products"}
        <span className="text-[10px] opacity-70">▾</span>
      </button>

      <div
        className={
          open
            ? "absolute right-0 top-full z-50 mt-3 w-44 translate-y-0 rounded-xl border border-white/12 bg-black/70 p-2 opacity-100 shadow-[0_16px_50px_rgba(0,0,0,0.55)] backdrop-blur"
            : "pointer-events-none absolute right-0 top-full z-50 mt-3 w-44 translate-y-1 rounded-xl border border-white/12 bg-black/70 p-2 opacity-0 shadow-[0_16px_50px_rgba(0,0,0,0.55)] backdrop-blur"
        }
        onMouseLeave={() => setOpen(false)}
      >
        <a
          href="https://maxdash-pi.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="block rounded-lg px-3 py-2 text-sm text-zinc-100 hover:bg-white/10"
          onClick={() => setOpen(false)}
        >
          MaxDash
          <div className="text-[11px] text-zinc-400">
            {locale === "es" ? "Dashboard" : "Dashboard"}
          </div>
        </a>
      </div>
    </div>
  );
}
