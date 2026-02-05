export function SectionCard({
  title,
  body,
  bullets,
}: {
  title: string;
  body: string;
  bullets?: readonly string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-200/90">{body}</p>
      {bullets?.length ? (
        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
