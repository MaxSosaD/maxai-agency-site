import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as
    | { locale?: "en" | "es"; message?: string }
    | null;

  const locale = body?.locale === "es" ? "es" : "en";
  const message = (body?.message ?? "").toString().slice(0, 2000);

  // TODO (phase 2): connect to OpenAI / RAG on a MaxAI knowledge base.
  // Keep this deterministic for the MVP.

  const replyEs =
    "Gracias. En MaxAI ayudamos a empresas a identificar oportunidades de IA con ROI, construir agentes/automatizaciones y desplegarlo en producción. Cuéntame: ¿qué proceso quieres acelerar o qué sistema quieres mejorar?";
  const replyEn =
    "Thanks. MaxAI helps teams find high-ROI AI opportunities, build agents/automations, and ship them into production. What process are you trying to speed up or improve?";

  // Lightweight intent hints
  const m = message.toLowerCase();
  const extra =
    locale === "es"
      ? m.includes("precio") || m.includes("costo")
        ? " Si quieres, te hago 3 preguntas rápidas y te doy un rango de precio."
        : ""
      : m.includes("price") || m.includes("cost")
        ? " If you want, I’ll ask 3 quick questions and give you a price range."
        : "";

  return NextResponse.json({ reply: (locale === "es" ? replyEs : replyEn) + extra });
}
