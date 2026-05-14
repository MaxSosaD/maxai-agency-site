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

// Script that registers client tools and shows a toast CTA
const elevenLabsClientTools = `
(function () {
  var _conversation = null;

  function endCall() {
    try {
      if (_conversation && typeof _conversation.endSession === "function") {
        _conversation.endSession();
      }
    } catch (e) {}
    _conversation = null;
  }

  function removeToast() {
    var t = document.getElementById("maxai-toast");
    if (t) t.remove();
  }

  function showToast(label, url) {
    removeToast();
    var toast = document.createElement("div");
    toast.id = "maxai-toast";
    toast.style.cssText = [
      "position:fixed","bottom:90px","right:20px","z-index:9999",
      "background:#1a1a24","border:1px solid #2a2a3a","border-radius:16px",
      "padding:16px 20px","display:flex","flex-direction:column","gap:12px",
      "box-shadow:0 8px 32px rgba(0,0,0,0.5)","max-width:280px","width:calc(100vw - 40px)",
    ].join(";");

    var text = document.createElement("p");
    text.style.cssText = "margin:0;font-size:14px;color:#e4e4e7;font-family:system-ui,sans-serif;line-height:1.4";
    text.textContent = label === "whatsapp"
      ? "¿Quieres que te conecte por WhatsApp?"
      : "¿Quieres agendar una llamada con MaxAI?";

    var btn = document.createElement("a");
    btn.href = url;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
    btn.style.cssText = [
      "display:block","text-align:center","padding:10px 16px",
      "border-radius:10px","font-size:14px","font-weight:600",
      "text-decoration:none","cursor:pointer",
      label === "whatsapp"
        ? "background:#00ff88;color:#0a0a0f"
        : "background:#7c3aed;color:#fff",
    ].join(";");
    btn.textContent = label === "whatsapp" ? "Abrir WhatsApp →" : "Agendar llamada →";

    btn.addEventListener("click", function () {
      endCall();
      removeToast();
    });

    var close = document.createElement("button");
    close.style.cssText = [
      "position:absolute","top:10px","right:12px","background:none",
      "border:none","color:#71717a","font-size:18px","cursor:pointer","padding:0","line-height:1",
    ].join(";");
    close.textContent = "×";
    close.addEventListener("click", removeToast);

    toast.style.position = "fixed";
    toast.appendChild(text);
    toast.appendChild(btn);
    toast.appendChild(close);
    document.body.appendChild(toast);

    // Auto-dismiss after 30s
    setTimeout(removeToast, 30000);
  }

  function init() {
    var widget = document.querySelector("elevenlabs-convai");
    if (!widget) return;

    widget.addEventListener("elevenlabs-convai:call", function (event) {
      _conversation = event.detail.conversation || null;

      event.detail.config.clientTools = {
        open_whatsapp: function (params) {
          var msg = (params && params.message) ? params.message : "Hola MaxAI, me gustaría más información.";
          var url = "https://wa.me/${WHATSAPP_NUMBER}?text=" + encodeURIComponent(msg);
          showToast("whatsapp", url);
          return Promise.resolve("Toast de WhatsApp mostrado");
        },
        open_calendly: function () {
          showToast("calendly", "${CALENDLY_URL}");
          return Promise.resolve("Toast de Calendly mostrado");
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
