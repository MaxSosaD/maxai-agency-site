const CALENDLY_URL = "https://calendly.com/maxai/diagnostico-ia";

export function CalendlyCTA({
  label,
  url,
}: {
  label: string;
  url?: string;
}) {
  return (
    <a
      href={url ?? CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
    >
      {label}
    </a>
  );
}
