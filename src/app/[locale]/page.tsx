import { Badge } from "@/components/Badge";
import { FloatingChat } from "@/components/FloatingChat";
import { SectionCard } from "@/components/SectionCard";
import { SiteShell } from "@/components/SiteShell";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    kicker: "Automation with AI for businesses that sell on WhatsApp.",
    headline: "More appointments. More leads. Less time answering the same questions.",
    sub: "MaxAI builds practical AI automations for small businesses — intake, follow‑up, scheduling, and FAQs — so you can respond faster and close more.",
    cta: "Request a quote on WhatsApp",
    ctaPrefill:
      "Hi MaxAI — I’d like to request a quote.\n\nBusiness type: \nGoal (appointments/leads/follow-up/support): \nCity: \nUrgency: \n\nIf you can, add: your WhatsApp name + best time to reply.",
    secondary: "See what we build",
    trust: "Fast. Practical. Production‑ready.",
    services: [
      {
        title: "WhatsApp Lead Intake",
        body: "Capture and qualify leads automatically — with clean handoff to a human.",
        bullets: ["Qualification", "Routing", "FAQ answers"],
      },
      {
        title: "Scheduling & Follow‑Up",
        body: "Automate appointment booking, reminders, and reactivation sequences.",
        bullets: ["Calendar", "Reminders", "Reactivation"],
      },
      {
        title: "Integrations",
        body: "Connect WhatsApp + Instagram + web forms to Sheets/CRM and internal tools.",
        bullets: ["Webhooks", "APIs", "Sheets/CRM"],
      },
    ],
    industryTitle: "Common use cases",
    industries: [
      {
        title: "Clinics",
        body: "Scheduling, reminders, and pre‑consultation intake on WhatsApp.",
        bullets: ["Appointments", "FAQ", "Reminders"],
      },
      {
        title: "Real estate",
        body: "Qualification + follow‑up, property sheets, and faster response times.",
        bullets: ["Lead qualification", "Follow‑up", "Property info"],
      },
      {
        title: "Travel agencies",
        body: "Guided quoting and itinerary follow‑ups — without losing leads.",
        bullets: ["Guided quote", "Follow‑up", "Upsells"],
      },
    ],
    processTitle: "How we work",
    process: [
      {
        title: "1) Quick diagnosis",
        body: "We learn your flow and identify the shortest path to ROI.",
      },
      {
        title: "2) Build the first automation",
        body: "We ship an MVP fast and measure results.",
      },
      {
        title: "3) Iterate",
        body: "We improve, add integrations, and scale what works.",
      },
    ],
    botTitle: "Ask MaxAI",
    faqTitle: "FAQ",
    faqs: [
      {
        q: "Can I request a quote via WhatsApp?",
        a: "Yes — tell us your business type, goal, city, and urgency. We’ll reply with a recommendation and next steps.",
      },
      {
        q: "Do you work with small businesses?",
        a: "Yes. We focus on practical automations that save time and increase conversions.",
      },
      {
        q: "How fast can we start?",
        a: "Often within days for the first automation, depending on integrations.",
      },
    ],
  },
  es: {
    kicker: "Automatización con IA para negocios que venden por WhatsApp.",
    headline: "Más citas. Más prospectos. Menos tiempo contestando lo mismo.",
    sub: "MaxAI construye automatizaciones prácticas con IA para negocios pequeños: captación, seguimiento, agenda y FAQs — para responder más rápido y cerrar más.",
    cta: "Pide tu cotización por WhatsApp",
    ctaPrefill:
      "Hola MaxAI — me gustaría una cotización.\n\nGiro: \nObjetivo (citas/leads/seguimiento/soporte): \nCiudad: \nUrgencia: \n\nSi puedes, agrega: tu nombre en WhatsApp + mejor horario para responderte.",
    secondary: "Ver qué hacemos",
    trust: "Rápido. Práctico. Listo para producción.",
    services: [
      {
        title: "Captación por WhatsApp",
        body: "Captura y califica leads automáticamente — con handoff limpio a una persona.",
        bullets: ["Calificación", "Enrutamiento", "Respuestas a FAQs"],
      },
      {
        title: "Agenda & seguimiento",
        body: "Automatiza citas, recordatorios y reactivación de prospectos.",
        bullets: ["Calendario", "Recordatorios", "Reactivación"],
      },
      {
        title: "Integraciones",
        body: "Conecta WhatsApp + Instagram + formularios web con Sheets/CRM y herramientas internas.",
        bullets: ["Webhooks", "APIs", "Sheets/CRM"],
      },
    ],
    industryTitle: "Casos de uso comunes",
    industries: [
      {
        title: "Consultorios",
        body: "Agenda, recordatorios e intake pre‑consulta por WhatsApp.",
        bullets: ["Citas", "FAQ", "Recordatorios"],
      },
      {
        title: "Bienes raíces",
        body: "Calificación + seguimiento, fichas de propiedades y respuestas más rápidas.",
        bullets: ["Calificación", "Seguimiento", "Info de propiedades"],
      },
      {
        title: "Agencias de viajes",
        body: "Cotización guiada y seguimiento de itinerarios — sin perder leads.",
        bullets: ["Cotización guiada", "Seguimiento", "Upsells"],
      },
    ],
    processTitle: "Cómo trabajamos",
    process: [
      {
        title: "1) Diagnóstico rápido",
        body: "Entendemos tu flujo y definimos el camino más corto a ROI.",
      },
      {
        title: "2) Primera automatización",
        body: "Lanzamos un MVP rápido y medimos resultados.",
      },
      {
        title: "3) Iteración",
        body: "Mejoramos, integramos herramientas y escalamos lo que funciona.",
      },
    ],
    botTitle: "Pregúntale a MaxAI",
    faqTitle: "FAQ",
    faqs: [
      {
        q: "¿Puedo pedir cotización por WhatsApp?",
        a: "Sí — dinos tu giro, objetivo, ciudad y urgencia. Te respondemos con recomendación y siguientes pasos.",
      },
      {
        q: "¿Trabajan con negocios pequeños?",
        a: "Sí. Nos enfocamos en automatizaciones prácticas que ahorran tiempo y aumentan conversiones.",
      },
      {
        q: "¿Qué tan rápido se puede empezar?",
        a: "Muchas veces en días para la primera automatización, según integraciones.",
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

      <section id="industry" className="mt-20">
        <h2 className="text-xl font-semibold">{t.industryTitle}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {t.industries.map((s) => (
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
