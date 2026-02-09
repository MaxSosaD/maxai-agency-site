"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { ChatWidget } from "@/components/ChatWidget";

export function FloatingChat({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="w-[360px] max-w-[calc(100vw-40px)] overflow-hidden rounded-2xl border border-white/12 bg-black/70 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="text-sm font-semibold text-white">
              {locale === "es" ? "Asistente MaxAI" : "MaxAI Assistant"}
            </div>
            <button
              className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs font-semibold text-zinc-200 hover:bg-white/10"
              onClick={() => setOpen(false)}
              aria-label={locale === "es" ? "Cerrar chat" : "Close chat"}
            >
              {locale === "es" ? "Cerrar" : "Close"}
            </button>
          </div>
          <div className="p-4">
            <ChatWidget locale={locale} />
          </div>
        </div>
      ) : null}

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:bg-white/15"
        aria-label={locale === "es" ? "Abrir chat" : "Open chat"}
      >
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
        {locale === "es" ? "Pregúntale a MaxAI" : "Ask MaxAI"}
      </button>
    </div>
  );
}
