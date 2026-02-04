const WHATSAPP_NUMBER = "+524433892078"; // E.164 no spaces

export function WhatsAppCTA({ label }: { label: string }) {
  const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;
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
