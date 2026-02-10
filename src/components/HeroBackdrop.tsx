export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* moving gradient */}
      <div className="absolute -inset-[40%] bg-[radial-gradient(circle_at_20%_20%,rgba(255,206,133,0.22),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(189,120,255,0.18),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(57,255,20,0.10),transparent_60%)] opacity-90 blur-2xl [animation:maxai-sweep_10s_ease-in-out_infinite]" />

      {/* subtle grain */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
      }} />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,0,0,0)_20%,rgba(0,0,0,0.55)_85%)]" />
    </div>
  );
}
