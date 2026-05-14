import { isLocale, type Locale } from "@/lib/i18n";

// ElevenLabs custom element type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "agent-id"?: string },
        HTMLElement
      >;
    }
  }
}

const WHATSAPP_NUMBER = "524433892078";
const CALENDLY_URL = "https://calendly.com/maxai/diagnostico-ia";

// Script that registers client tools on the ElevenLabs widget
const elevenLabsClientTools = `
(function () {
  function init() {
    var widget = document.querySelector("elevenlabs-convai");
    if (!widget) return;

    widget.addEventListener("elevenlabs-convai:call", function (event) {
      event.detail.config.clientTools = {
        open_whatsapp: function (params) {
          var msg = (params && params.message) ? params.message : "Hola MaxAI, me gustaría más información.";
          window.location.href = "https://wa.me/${WHATSAPP_NUMBER}?text=" + encodeURIComponent(msg);
          return Promise.resolve("WhatsApp abierto");
        },
        open_calendly: function () {
          window.location.href = "${CALENDLY_URL}";
          return Promise.resolve("Calendly abierto");
        },
      };
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
`;

export default async function LocaleLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (await import("next/navigation")).notFound();
  }

  return (
    <div data-locale={locale as Locale}>
      {children}
      {/* ElevenLabs Voice Agent */}
      {/* @ts-expect-error - Custom element from ElevenLabs */}
      <elevenlabs-convai agent-id="agent_5001kj46azcbf9cbkgjbabqh3k4e"></elevenlabs-convai>
      <script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        async
        type="text/javascript"
      ></script>
      {/* Client tools: open_whatsapp y open_calendly */}
      <script dangerouslySetInnerHTML={{ __html: elevenLabsClientTools }} />
    </div>
  );
}
