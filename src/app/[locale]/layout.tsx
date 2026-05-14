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

// Script that registers client tools on the ElevenLabs widget after it loads
const elevenLabsClientTools = `
(function () {
  function register(widget) {
    widget.clientTools = {
      open_whatsapp: function (params) {
        var msg = (params && params.message) ? params.message : "Hola MaxAI, me gustaría más información.";
        var url = "https://wa.me/${WHATSAPP_NUMBER}?text=" + encodeURIComponent(msg);
        window.open(url, "_blank");
        return "WhatsApp abierto";
      },
      open_calendly: function () {
        window.open("${CALENDLY_URL}", "_blank");
        return "Calendly abierto";
      },
    };
  }

  function init() {
    var widget = document.querySelector("elevenlabs-convai");
    if (!widget) return;
    // Widget may not be ready yet — wait for it
    if (typeof widget.clientTools !== "undefined") {
      register(widget);
    } else {
      widget.addEventListener("elevenlabs-convai:ready", function () {
        register(widget);
      });
      // Fallback: also try after a short delay in case the event already fired
      setTimeout(function () { register(widget); }, 2000);
    }
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
