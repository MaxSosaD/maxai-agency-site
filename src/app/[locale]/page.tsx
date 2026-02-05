import { Badge } from "@/components/Badge";
import { FloatingChat } from "@/components/FloatingChat";
import { SectionCard } from "@/components/SectionCard";
import { SiteShell } from "@/components/SiteShell";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    kicker: "We don’t just talk AI. We deliver it.",
    headline: "A respected AI agency for teams that need results.",
    sub: "MaxAI identifies the highest-ROI AI opportunities, builds production-grade systems, and helps your team adopt them — fast.",
    cta: "Chat on WhatsApp",
    ctaPrefill: "Hi MaxAI — I want to explore an AI project.",
    secondary: "See services",
    trust: "Secure, measurable, production-first.",
    services: [
      {
        title: "AI Agents & Automation",
        body: "From intake → execution → reporting. Agents that actually ship work, integrated with your tools.",
        bullets: ["Lead intake", "Ops automation", "Internal copilots"],
      },
      {
        title: "RAG on Your Knowledge",
        body: "Search + answers grounded in your docs, CRM, tickets, and policies — with citations.",
        bullets: ["Docs/Notion/Drive", "CRM", "Support tickets"],
      },
      {
        title: "Integrations",
        body: "We connect AI into your stack: WhatsApp, Slack, email, web, and internal systems.",
        bullets: ["Webhooks", "APIs", "Dashboards"],
      },
    ],
    processTitle: "How we work",
    process: [
      {
        title: "1) Diagnose",
        body: "We map your workflow and find the 5% of opportunities worth building.",
      },
      {
        title: "2) Build",
        body: "We implement an MVP quickly, with clear metrics and security in mind.",
      },
      {
        title: "3) Deploy & Train",
        body: "We ship to production, monitor, iterate, and train your team for adoption.",
      },
    ],
    botTitle: "Ask MaxAI",
    faqTitle: "FAQ",
    faqs: [
      {
        q: "Do you support crypto payments?",
        a: "Yes — we can add USDC/BTC rails as phase 2 (webhooks + reconciliation).",
      },
      {
        q: "How fast can you ship?",
        a: "Most MVPs take 1–2 weeks; production rollouts typically 3–6 weeks.",
      },
      {
        q: "What do you need from us?",
        a: "Access to the workflow (and optionally tools/APIs). We handle the rest end-to-end.",
      },
    ],
  },
  es: {
    kicker: "No solo hablamos de IA. La entregamos.",
    headline: "Una agencia de IA respetada, enfocada en resultados.",
    sub: "MaxAI identifica oportunidades de IA con ROI real, construye sistemas listos para producción y ayuda a tu equipo a adoptarlos — rápido.",
    cta: "Escríbenos por WhatsApp",
    ctaPrefill: "Hola MaxAI — quiero explorar un proyecto de IA.",
    secondary: "Ver servicios",
    trust: "Seguro, medible, listo para producción.",
    services: [
      {
        title: "Agentes & Automatización",
        body: "De intake → ejecución → reporte. Agentes que entregan trabajo real, integrados con tus herramientas.",
        bullets: ["Intake de leads", "Automatización ops", "Copilots internos"],
      },
      {
        title: "RAG sobre tu conocimiento",
        body: "Búsqueda + respuestas basadas en tus docs, CRM, tickets y políticas — con citas.",
        bullets: ["Docs/Notion/Drive", "CRM", "Soporte"],
      },
      {
        title: "Integraciones",
        body: "Conectamos IA a tu stack: WhatsApp, Slack, email, web y sistemas internos.",
        bullets: ["Webhooks", "APIs", "Dashboards"],
      },
    ],
    processTitle: "Cómo trabajamos",
    process: [
      {
        title: "1) Diagnóstico",
        body: "Mapeamos el flujo y encontramos el 5% de oportunidades que sí valen la pena.",
      },
      {
        title: "2) Construcción",
        body: "Implementamos un MVP rápido, con métricas claras y seguridad.",
      },
      {
        title: "3) Despliegue & entrenamiento",
        body: "Lanzamos en producción, monitoreamos, iteramos y entrenamos para adopción real.",
      },
    ],
    botTitle: "Pregúntale a MaxAI",
    faqTitle: "FAQ",
    faqs: [
      {
        q: "¿Aceptan pagos en cripto?",
        a: "Sí — podemos agregar rieles (USDC/BTC) como fase 2 (webhooks + conciliación).",
      },
      {
        q: "¿En cuánto tiempo entregan?",
        a: "La mayoría de MVPs: 1–2 semanas; producción: 3–6 semanas.",
      },
      {
        q: "¿Qué necesitan de nosotros?",
        a: "Acceso al flujo (y si aplica APIs/herramientas). Nosotros hacemos end-to-end.",
      },
    ],
  },
} as const;

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];

  return (
    <SiteShell locale={locale}>
      <section className="mt-16">
        <div className="max-w-3xl">
          <Badge>{t.trust}</Badge>
          <p className="mt-6 text-sm uppercase tracking-widest text-zinc-300/80">
            {t.kicker}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            {t.headline}
          </h1>
          <p className="mt-5 text-lg text-zinc-200/90">{t.sub}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppCTA label={t.cta} prefill={t.ctaPrefill} />
            <a
              href="#what"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              {t.secondary}
            </a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-zinc-300/80">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              {locale === "es" ? "MVP rápido" : "Fast MVP"}
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              {locale === "es" ? "Producción" : "Production"}
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              {locale === "es" ? "Entrenamiento" : "Enablement"}
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="mt-20">
        <h2 className="text-xl font-semibold">
          {locale === "es" ? "Servicios" : "Services"}
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {t.services.map((s) => (
            <SectionCard key={s.title} title={s.title} body={s.body} bullets={s.bullets} />
          ))}
        </div>
      </section>

      <section id="process" className="mt-20">
        <h2 className="text-xl font-semibold">{t.processTitle}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {t.process.map((p) => (
            <SectionCard key={p.title} title={p.title} body={p.body} />
          ))}
        </div>
      </section>

      <section id="faq" className="mt-20">
        <h2 className="text-xl font-semibold">{t.faqTitle}</h2>
        <div className="mt-6 grid gap-4">
          {t.faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="font-semibold">{f.q}</div>
              <p className="mt-2 text-sm text-zinc-200/90">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-2xl border border-white/10 bg-white/[0.04] p-8">
        <div className="text-lg font-semibold">
          {locale === "es"
            ? "¿Listo para una evaluación rápida?"
            : "Ready for a quick assessment?"}
        </div>
        <p className="mt-2 text-sm text-zinc-200/90">
          {locale === "es"
            ? "Cuéntanos tu caso y te proponemos el camino más corto a producción."
            : "Tell us your case and we’ll propose the shortest path to production."}
        </p>
        <div className="mt-5">
          <WhatsAppCTA
            label={locale === "es" ? "Abrir WhatsApp" : "Open WhatsApp"}
            prefill={t.ctaPrefill}
          />
        </div>
      </section>

      <FloatingChat locale={locale} />
    </SiteShell>
  );
}
