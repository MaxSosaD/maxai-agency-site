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
    </div>
  );
}
