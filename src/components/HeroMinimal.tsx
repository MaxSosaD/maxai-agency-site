export function HeroMinimal() {
  return (
    <div className="relative h-[260px] md:h-[420px]">
      {/* subtle glow */}
      <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(circle_at_70%_40%,rgba(189,120,255,0.14),transparent_60%),radial-gradient(circle_at_40%_80%,rgba(57,255,20,0.10),transparent_60%)] blur-2xl" />

      {/* editorial frame */}
      <div className="relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-black/20">
        {/* animated hairlines */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -left-20 top-10 h-px w-[140%] bg-white/10 [transform:rotate(-12deg)]" />
          <div className="absolute -left-28 top-28 h-px w-[160%] bg-white/8 [transform:rotate(-12deg)]" />
          <div className="absolute -left-20 top-48 h-px w-[140%] bg-white/10 [transform:rotate(-12deg)]" />
        </div>

        {/* moving sheen */}
        <div className="absolute -inset-x-32 -inset-y-10 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)] opacity-30 [animation:maxai-sweep_8s_ease-in-out_infinite]" />

        {/* copy block */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-200/70">
            AI • agents • automations
          </div>
          <div className="mt-3 text-sm text-zinc-100/70">
            Systems that ship.
          </div>
        </div>
      </div>
    </div>
  );
}
