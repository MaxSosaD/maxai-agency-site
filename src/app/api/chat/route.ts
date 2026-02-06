import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | { locale?: "en" | "es"; message?: string }
    | null;

  const locale = body?.locale === "es" ? "es" : "en";
  const message = (body?.message ?? "").toString().slice(0, 2000);

  // TODO (phase 2): connect to OpenAI / RAG on a MaxAI knowledge base.
  // Keep this deterministic for the MVP.

  const m = message.toLowerCase();

  const intents = {
    quote: ["cotiz", "precio", "costo", "cuanto", "quote", "price", "cost", "pricing"],
    timeline: ["tiempo", "cuando", "timeline", "how long"],
    services: ["servicio", "hacen", "ofrecen", "what do you do", "services"],
    contact: ["contacto", "whatsapp", "telefono", "call", "meeting"],
    industries: [
      "consultorio",
      "clinica",
      "dentista",
      "bienes raices",
      "inmobili",
      "real estate",
      "viaje",
      "travel",
    ],
  } as const;

  const has = (keys: readonly string[]) => keys.some((k) => m.includes(k));

  let replyEs =
    "Soy el asistente de MaxAI. Ayudamos a negocios a capturar leads, dar seguimiento y automatizar atención (especialmente por WhatsApp). ¿Qué tipo de negocio tienes y qué quieres mejorar primero: citas, leads o seguimiento?";
  let replyEn =
    "I’m MaxAI’s assistant. We help small businesses capture leads, follow up, and automate customer support (often on WhatsApp). What kind of business is it, and what do you want to improve first: appointments, leads, or follow-up?";

  if (has(intents.services)) {
    replyEs =
      "MaxAI implementa automatizaciones con IA (captación, calificación, seguimiento, agenda y FAQs) e integraciones con WhatsApp/Instagram/web. ¿Eres consultorio, bienes raíces o agencia de viajes?";
    replyEn =
      "MaxAI builds AI automations (intake, qualification, follow-up, scheduling, FAQs) and integrates with WhatsApp/Instagram/web. Are you a clinic, real estate, or travel agency?";
  } else if (has(intents.industries)) {
    replyEs =
      "Perfecto. Para recomendarte la mejor primera automatización: (1) ¿qué quieres mejorar: citas/leads/seguimiento? (2) ¿por dónde llegan hoy tus prospectos? (3) ¿urgencia: esta semana o este mes? Si quieres, pídeme una cotización por WhatsApp y te guiamos.";
    replyEn =
      "Great. To recommend the best first automation: (1) what do you want to improve—appointments/leads/follow-up? (2) where do leads come from today? (3) urgency—this week or this month? You can also request a quote via WhatsApp and we’ll guide you.";
  } else if (has(intents.quote) || has(intents.contact)) {
    replyEs =
      "Claro. Puedes pedir tu cotización por WhatsApp. Compárteme: giro, objetivo (citas/leads/seguimiento), ciudad y urgencia. Con eso te damos una recomendación y el siguiente paso.";
    replyEn =
      "Sure. You can request a quote on WhatsApp. Share: business type, goal (appointments/leads/follow-up), city, and urgency. Then we’ll recommend the best next step.";
  } else if (has(intents.timeline)) {
    replyEs =
      "Para negocios pequeños, una primera automatización suele estar lista en días (según alcance e integraciones). Si me dices tu giro y objetivo, te digo cuál sería el camino más corto.";
    replyEn =
      "For small businesses, a first automation is often ready in days (depending on scope and integrations). Tell me your business type and goal and I’ll suggest the shortest path.";
  }

  return NextResponse.json({ reply: locale === "es" ? replyEs : replyEn });
}
