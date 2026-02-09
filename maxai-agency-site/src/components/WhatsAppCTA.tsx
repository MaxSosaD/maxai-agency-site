const WHATSAPP_NUMBER = "+52 4433 892078";

export function WhatsAppCTA({
  label,
  prefill,
}: {
  label: string;
  prefill?: string;
}) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  const base = `https://wa.me/${number}`;
  const url = prefill ? `${base}?text=${encodeURIComponent(prefill)}` : base;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
    >
      {label}
    </a>
  );
}
