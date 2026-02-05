"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Msg = { role: "user" | "assistant"; content: string };

export function ChatWidget({ locale }: { locale: Locale }) {
  const placeholder = useMemo(
    () => (locale === "es" ? "Escribe tu pregunta…" : "Type your question…"),
    [locale]
  );
  const sendLabel = locale === "es" ? "Enviar" : "Send";

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        locale === "es"
          ? "Hola. Soy el bot de MaxAI. ¿Qué quieres lograr con IA?"
          : "Hi — I’m MaxAI’s bot. What are you trying to achieve with AI?",
    },
  ]);

  async function onSend() {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ locale, message: text }),
      });
      const data = (await res.json()) as { reply?: string };
      setMessages((m) => [
        ...m,
        { role: "assistant", content: data.reply ?? "(no reply)" },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            locale === "es"
              ? "Se cayó el chat. Intenta de nuevo."
              : "Chat failed. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-3">
      <div className="h-64 overflow-auto rounded-xl border border-zinc-800 bg-black/30 p-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.role === "user"
                ? "mb-2 flex justify-end"
                : "mb-2 flex justify-start"
            }
          >
            <div
              className={
                m.role === "user"
                  ? "max-w-[85%] rounded-2xl bg-white px-3 py-2 text-sm text-black"
                  : "max-w-[85%] rounded-2xl bg-zinc-900 px-3 py-2 text-sm text-zinc-100"
              }
            >
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="flex-1 rounded-xl border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-600"
          onKeyDown={(e) => {
            if (e.key === "Enter") onSend();
          }}
        />
        <button
          onClick={onSend}
          disabled={loading}
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black disabled:opacity-60"
        >
          {loading ? "…" : sendLabel}
        </button>
      </div>

      <div className="mt-2 text-[11px] text-zinc-500">
        {locale === "es"
          ? "MVP: respuestas tipo FAQ. Fase 2: conectar OpenAI + (opcional) voz con ElevenLabs."
          : "MVP: FAQ-style answers. Phase 2: connect OpenAI + (optional) voice with ElevenLabs."}
      </div>
    </div>
  );
}
