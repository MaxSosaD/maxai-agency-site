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
    pricing: ["precio", "costo", "cuanto", "cotiz", "price", "cost", "pricing"],
    timeline: ["tiempo", "cuando", "timeline", "how long"],
    services: ["servicio", "hacen", "ofrecen", "what do you do", "services"],
    contact: ["contacto", "whatsapp", "telefono", "call", "meeting"],
    crypto: ["crypto", "cripto", "bitcoin", "usdc", "pago"],
  } as const;

  const has = (keys: readonly string[]) => keys.some((k) => m.includes(k));

  let replyEs =
    "Soy el bot de MaxAI. Ayudamos a empresas a identificar oportunidades de IA con ROI, construir agentes/automatizaciones y desplegarlas en producción. ¿Qué proceso quieres acelerar o qué sistema quieres mejorar?";
  let replyEn =
    "I’m MaxAI’s bot. We help teams find high-ROI AI opportunities, build agents/automations, and deploy them into production. What process are you trying to speed up or improve?";

  if (has(intents.services)) {
    replyEs =
      "MaxAI puede ayudarte con: (1) automatización con agentes, (2) RAG sobre tus documentos/CRM, (3) copilots internos, (4) integraciones (Slack/WhatsApp/Email), (5) analítica + dashboards. ¿Qué industria y qué objetivo tienes?";
    replyEn =
      "MaxAI can help with: (1) agent automations, (2) RAG over your docs/CRM, (3) internal copilots, (4) integrations (Slack/WhatsApp/Email), (5) analytics + dashboards. What industry and goal do you have?";
  } else if (has(intents.pricing)) {
    replyEs =
      "Te puedo dar un rango. 3 preguntas rápidas: (1) ¿qué proceso? (2) ¿con qué herramientas se integra? (3) ¿cuántos usuarios/eventos al día?";
    replyEn =
      "I can give you a range. 3 quick questions: (1) what process? (2) what tools does it integrate with? (3) how many users/events per day?";
  } else if (has(intents.timeline)) {
    replyEs =
      "Depende del alcance: un MVP suele ser 1–2 semanas; producción 3–6 semanas. ¿Buscas MVP rápido o producción completa?";
    replyEn =
      "It depends on scope: an MVP is often 1–2 weeks; production 3–6 weeks. Are you aiming for a fast MVP or a full production rollout?";
  } else if (has(intents.crypto)) {
    replyEs =
      "Sí: podemos dejar pagos crypto como fase 2 (ej. USDC) con webhooks y conciliación. Primero lancemos el sitio y definamos tu oferta. ¿Qué pagos te interesan?";
    replyEn =
      "Yes: we can add crypto payments as phase 2 (e.g., USDC) with webhooks and reconciliation. First let’s launch the site and define the offer. Which rails do you want?";
  } else if (has(intents.contact)) {
    replyEs =
      "¿Te contacto por WhatsApp? Pídeme que te mande el link y dime si prefieres un diagnóstico rápido o una llamada.";
    replyEn =
      "Want to connect on WhatsApp? Ask me for the link and tell me if you prefer a quick diagnosis or a call.";
  }

  return NextResponse.json({ reply: locale === "es" ? replyEs : replyEn });
}
