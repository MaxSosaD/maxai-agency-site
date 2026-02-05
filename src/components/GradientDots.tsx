export function GradientDots() {
  // Pure CSS background (no canvas): subtle, futuristic, lightweight.
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* base gradient glow */}
      <div className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute top-[-120px] right-[-10%] h-[460px] w-[460px] rounded-full bg-fuchsia-500/25 blur-3xl" />
      <div className="absolute bottom-[-180px] left-[20%] h-[520px] w-[520px] rounded-full bg-cyan-400/20 blur-3xl" />

      {/* dot field */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(600px 420px at 30% 18%, black 40%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(600px 420px at 30% 18%, black 40%, transparent 70%)",
        }}
      />

      {/* animated gradient sweep */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(120deg, rgba(99,102,241,0.00), rgba(99,102,241,0.25), rgba(236,72,153,0.22), rgba(34,211,238,0.18), rgba(99,102,241,0.00))",
          backgroundSize: "200% 200%",
          animation: "maxai-sweep 14s ease-in-out infinite",
          maskImage:
            "radial-gradient(520px 380px at 30% 18%, black 35%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(520px 380px at 30% 18%, black 35%, transparent 75%)",
        }}
      />
    </div>
  );
}
