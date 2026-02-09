export function WarmHeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base cinematic gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_20%,rgba(255,206,133,0.55),rgba(255,206,133,0)_55%),radial-gradient(900px_600px_at_18%_28%,rgba(255,128,111,0.45),rgba(255,128,111,0)_60%),radial-gradient(900px_700px_at_82%_30%,rgba(189,120,255,0.35),rgba(189,120,255,0)_62%),linear-gradient(180deg,rgba(14,10,18,0.25),rgba(5,5,7,1)_72%)]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(255,255,255,0.10),rgba(0,0,0,0)_70%),radial-gradient(900px_500px_at_50%_110%,rgba(0,0,0,0.85),rgba(0,0,0,0)_60%)] opacity-70" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.16] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"180\" height=\"180\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"180\" height=\"180\" filter=\"url(%23n)\" opacity=\"0.55\"/></svg>')",
        }}
      />

      {/* Soft horizon fog */}
      <div className="absolute -bottom-24 left-1/2 h-80 w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10),rgba(255,255,255,0)_65%)] blur-3xl" />
    </div>
  );
}
