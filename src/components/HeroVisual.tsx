"use client";

import { useEffect, useRef, useState } from "react";

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function HeroVisual() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [p, setP] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    function onMove(e: PointerEvent) {
      // In strict TS mode, the ref target can be null by the time the event fires.
      const node = ref.current;
      if (!node) return;

      const r = node.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const ny = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      const x = clamp(nx, -1, 1);
      const y = clamp(ny, -1, 1);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setP({ x, y }));
    }

    el.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
    };
  }, []);

  const t1 = `translate3d(${p.x * 10}px, ${p.y * 10}px, 0)`;
  const t2 = `translate3d(${p.x * -18}px, ${p.y * 12}px, 0)`;
  const t3 = `translate3d(${p.x * 26}px, ${p.y * -18}px, 0)`;

  return (
    <div ref={ref} className="relative h-[360px] md:h-[460px]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle_at_20%_30%,rgba(255,206,133,0.28),rgba(255,206,133,0)_55%),radial-gradient(circle_at_80%_20%,rgba(189,120,255,0.22),rgba(189,120,255,0)_55%),radial-gradient(circle_at_70%_80%,rgba(57,255,20,0.14),rgba(57,255,20,0)_60%)] blur-2xl" />

      {/* Flowing shapes */}
      <div
        className="pointer-events-none absolute left-6 top-6 h-56 w-56 rounded-[3rem] bg-[conic-gradient(from_180deg,rgba(255,206,133,0.0),rgba(255,206,133,0.55),rgba(189,120,255,0.55),rgba(57,255,20,0.25),rgba(255,206,133,0.0))] opacity-80 blur-[1px]"
        style={{ transform: t1 }}
      />
      <div
        className="pointer-events-none absolute right-2 top-16 h-64 w-64 rounded-[4rem] bg-[radial-gradient(circle_at_30%_20%,rgba(189,120,255,0.70),rgba(189,120,255,0)_60%),radial-gradient(circle_at_70%_80%,rgba(255,206,133,0.55),rgba(255,206,133,0)_60%)] opacity-90"
        style={{ transform: t2 }}
      />
      <div
        className="pointer-events-none absolute bottom-4 left-20 h-72 w-72 rounded-[5rem] bg-[radial-gradient(circle_at_35%_35%,rgba(57,255,20,0.18),rgba(57,255,20,0)_65%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.10),rgba(255,255,255,0)_55%)] opacity-80"
        style={{ transform: t3 }}
      />

      {/* Soft border ring (gives “object” without dashboard cards) */}
      <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] border border-white/10 bg-white/[0.02]" />

      {/* Sparkles */}
      <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] [mask-image:radial-gradient(circle_at_50%_50%,black,transparent_70%)]">
        <div className="absolute left-10 top-12 h-1 w-1 rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.7)]" />
        <div className="absolute right-16 top-28 h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_22px_rgba(189,120,255,0.6)]" />
        <div className="absolute bottom-24 left-32 h-1 w-1 rounded-full bg-white/70 shadow-[0_0_22px_rgba(255,206,133,0.6)]" />
      </div>

      <div className="absolute bottom-6 left-6 text-xs text-zinc-300/80">
        <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 backdrop-blur">
          AI systems • agents • automations • integrations
        </div>
      </div>
    </div>
  );
}
