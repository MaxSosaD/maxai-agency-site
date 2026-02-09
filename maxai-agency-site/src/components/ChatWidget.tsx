"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";

type Msg = { role: "user" | "assistant"; content: string };

type Intake = {
  industry?: "consultorio" | "bienes_raices" | "viajes" | "otro";
  goal?: "citas" | "leads" | "seguimiento" | "soporte" | "otro";
  channel?: "whatsapp" | "instagram" | "llamadas" | "web" | "otro";
  urgency?: "esta_semana" | "este_mes" | "explorando";
};

const WHATSAPP_NUMBER = "+52 4433 892078";

function waLink(prefill: string) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  const base = `https://wa.me/${number}`;
  return `${base}?text=${encodeURIComponent(prefill)}`;
}

function label(locale: Locale, key: string) {
  const es: Record<string, string> = {
    title: "Asistente MaxAI",
    placeholder: "Escribe aquí…",
    send: "Enviar",
    hint: "Tip: si contestas 4 preguntas, te preparo un resumen para pedir tu cotización por WhatsApp.",
    start:
      "Hola. Soy el asistente de MaxAI. Te hago 4 preguntas rápidas y te mando un mensaje listo para WhatsApp para pedir tu cotización.",
    qIndustry: "1/4 — ¿Qué tipo de negocio tienes?",
    qGoal: "2/4 — ¿Qué quieres mejorar primero?",
    qChannel: "3/4 — ¿Dónde llegan hoy tus prospectos?",
    qUrgency: "4/4 — ¿Qué tan urgente es?",
    done:
      "Listo. Aquí tienes un mensaje recomendado para WhatsApp. Si quieres, edítalo y envíalo:",
    btnWhatsApp: "Abrir WhatsApp",

    consultorio: "Consultorio",
    bienes_raices: "Bienes raíces",
    viajes: "Agencia de viajes",
    otro: "Otro",

    citas: "Citas / agenda",
    leads: "Leads / prospectos",
    seguimiento: "Seguimiento",
    soporte: "Soporte / FAQs",

    whatsapp: "WhatsApp",
    instagram: "Instagram",
    llamadas: "Llamadas",
    web: "Web",

    esta_semana: "Esta semana",
    este_mes: "Este mes",
    explorando: "Solo explorando",
  };

  const en: Record<string, string> = {
    title: "MaxAI Assistant",
    placeholder: "Type here…",
    send: "Send",
    hint:
      "Tip: answer 4 quick questions and I’ll prepare a ready-to-send WhatsApp message to request a quote.",
    start:
      "Hi — I’m MaxAI’s assistant. I’ll ask 4 quick questions and then generate a ready-to-send WhatsApp message to request a quote.",
    qIndustry: "1/4 — What kind of business is it?",
    qGoal: "2/4 — What do you want to improve first?",
    qChannel: "3/4 — Where do leads come from today?",
    qUrgency: "4/4 — How urgent is it?",
    done:
      "Done. Here’s a recommended WhatsApp message. You can edit it and send it:",
    btnWhatsApp: "Open WhatsApp",

    consultorio: "Clinic",
    bienes_raices: "Real estate",
    viajes: "Travel agency",
    otro: "Other",

    citas: "Appointments",
    leads: "Leads",
    seguimiento: "Follow-up",
    soporte: "Support / FAQs",

    whatsapp: "WhatsApp",
    instagram: "Instagram",
    llamadas: "Phone calls",
    web: "Website",

    esta_semana: "This week",
    este_mes: "This month",
    explorando: "Just exploring",
  };

  return (locale === "es" ? es : en)[key] ?? key;
}

export function ChatWidget({ locale }: { locale: Locale }) {
  const placeholder = useMemo(
    () => label(locale, "placeholder"),
    [locale]
  );
  const sendLabel = label(locale, "send");

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [intake, setIntake] = useState<Intake>({});
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: label(locale, "start") },
    { role: "assistant", content: label(locale, "qIndustry") },
  ]);

  const step =
    intake.industry == null
      ? "industry"
      : intake.goal == null
        ? "goal"
        : intake.channel == null
          ? "channel"
          : intake.urgency == null
            ? "urgency"
            : "done";

  const suggestions = useMemo(() => {
    if (step === "industry") {
      return [
        { key: "consultorio", value: "consultorio" as const },
        { key: "bienes_raices", value: "bienes_raices" as const },
        { key: "viajes", value: "viajes" as const },
        { key: "otro", value: "otro" as const },
      ];
    }
    if (step === "goal") {
      return [
        { key: "citas", value: "citas" as const },
        { key: "leads", value: "leads" as const },
        { key: "seguimiento", value: "seguimiento" as const },
        { key: "soporte", value: "soporte" as const },
        { key: "otro", value: "otro" as const },
      ];
    }
    if (step === "channel") {
      return [
        { key: "whatsapp", value: "whatsapp" as const },
        { key: "instagram", value: "instagram" as const },
        { key: "llamadas", value: "llamadas" as const },
        { key: "web", value: "web" as const },
        { key: "otro", value: "otro" as const },
      ];
    }
    if (step === "urgency") {
      return [
        { key: "esta_semana", value: "esta_semana" as const },
        { key: "este_mes", value: "este_mes" as const },
        { key: "explorando", value: "explorando" as const },
      ];
    }
    return [];
  }, [step]);

  function addAssistant(text: string) {
    setMessages((m) => [...m, { role: "assistant", content: text }]);
  }

  function applyChoice(choice: string) {
    // Save as user message (for transcript feel)
    setMessages((m) => [...m, { role: "user", content: choice }]);

    if (step === "industry") {
      const v =
        choice === "consultorio" ||
        choice === "bienes_raices" ||
        choice === "viajes" ||
        choice === "otro"
          ? (choice as Intake["industry"])
          : "otro";
      setIntake((s) => ({ ...s, industry: v }));
      addAssistant(label(locale, "qGoal"));
      return;
    }

    if (step === "goal") {
      const v =
        choice === "citas" ||
        choice === "leads" ||
        choice === "seguimiento" ||
        choice === "soporte" ||
        choice === "otro"
          ? (choice as Intake["goal"])
          : "otro";
      setIntake((s) => ({ ...s, goal: v }));
      addAssistant(label(locale, "qChannel"));
      return;
    }

    if (step === "channel") {
      const v =
        choice === "whatsapp" ||
        choice === "instagram" ||
        choice === "llamadas" ||
        choice === "web" ||
        choice === "otro"
          ? (choice as Intake["channel"])
          : "otro";
      setIntake((s) => ({ ...s, channel: v }));
      addAssistant(label(locale, "qUrgency"));
      return;
    }

    if (step === "urgency") {
      const v =
        choice === "esta_semana" ||
        choice === "este_mes" ||
        choice === "explorando"
          ? (choice as Intake["urgency"])
          : "explorando";
      setIntake((s) => ({ ...s, urgency: v }));
      addAssistant(label(locale, "done"));
      return;
    }
  }

  function buildPrefill() {
    const industryLabel = intake.industry ? label(locale, intake.industry) : "";
    const goalLabel = intake.goal ? label(locale, intake.goal) : "";
    const channelLabel = intake.channel ? label(locale, intake.channel) : "";
    const urgencyLabel = intake.urgency ? label(locale, intake.urgency) : "";

    if (locale === "es") {
      return [
        "Hola MaxAI — me gustaría una cotización.",
        `Giro: ${industryLabel}`,
        `Objetivo: ${goalLabel}`,
        `Leads llegan por: ${channelLabel}`,
        `Urgencia: ${urgencyLabel}`,
        "\nSi puedes, agrega tu ciudad + mejor horario para responderte.",
        "¿Me hacen un diagnóstico rápido y me recomiendan la mejor automatización para empezar?",
      ].join("\n");
    }

    return [
      "Hi MaxAI — I’d like to request a quote.",
      `Business: ${industryLabel}`,
      `Goal: ${goalLabel}`,
      `Leads come from: ${channelLabel}`,
      `Urgency: ${urgencyLabel}`,
      "\nIf you can, add: your city + best time to reply.",
      "Can you do a quick diagnosis and recommend the best first automation?",
    ].join("\n");
  }

  async function onSendFreeform() {
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

  const showGuided = step !== "done";
  const prefill = step === "done" ? buildPrefill() : "";

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

        {step === "done" ? (
          <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-zinc-100">
            <pre className="whitespace-pre-wrap text-[12px] leading-relaxed text-zinc-200">
              {prefill}
            </pre>
            <a
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-zinc-200"
              href={waLink(prefill)}
              target="_blank"
              rel="noreferrer"
            >
              {label(locale, "btnWhatsApp")}
            </a>
          </div>
        ) : null}
      </div>

      {showGuided ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={() => applyChoice(s.value)}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-zinc-200 hover:bg-white/10"
            >
              {label(locale, s.key)}
            </button>
          ))}
        </div>
      ) : null}

      <div className="mt-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="flex-1 rounded-xl border border-zinc-800 bg-black/40 px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-600"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (showGuided) {
                // If guided, treat free text as "otro" to keep flow moving.
                applyChoice("otro");
              } else {
                onSendFreeform();
              }
            }
          }}
        />
        <button
          onClick={() => {
            if (showGuided) {
              applyChoice("otro");
            } else {
              onSendFreeform();
            }
          }}
          disabled={loading}
          className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black disabled:opacity-60"
        >
          {loading ? "…" : sendLabel}
        </button>
      </div>

      <div className="mt-2 text-[11px] text-zinc-500">{label(locale, "hint")}</div>
    </div>
  );
}
