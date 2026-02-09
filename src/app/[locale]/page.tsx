import { Badge } from "@/components/Badge";
import { FloatingChat } from "@/components/FloatingChat";
import { SectionCard } from "@/components/SectionCard";
import { SiteShell } from "@/components/SiteShell";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { CalendlyCTA } from "@/components/CalendlyCTA";
import { HeroVisual } from "@/components/HeroVisual";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    kicker: "AI agency",
    headline: "We don’t just use AI — we design the future of your business.",
    sub: "Agents, automations, and intelligence that makes your work more human — and your operation more scalable.",
    cta: "Request a quote on WhatsApp",
    ctaPrefill:
      "Hi MaxAI — I’d like to request a quote.\n\nBusiness type: \nGoal (scheduling/leads/follow-up/support): \nCity: \nUrgency: \n\nIf you can, add: your WhatsApp name + best time to reply.",
    secondary: "Book a 20‑min diagnosis",
    trust: "Practical. Measurable. Production‑ready.",
    services: [
      {
        title: "Scheduling & Operations",
        body: "Automate appointment booking, reminders, intake, and internal ops workflows.",
        bullets: ["Calendar", "Reminders", "Intake"],
      },
      {
        title: "Lead intake & follow‑up",
        body: "Capture, qualify, and follow up across channels — with human handoff.",
        bullets: ["Qualification", "Routing", "Sequences"],
      },
      {
        title: "Support & Knowledge",
        body: "Answer FAQs and reduce repetitive support using your docs and policies.",
        bullets: ["FAQs", "Knowledge base", "Consistency"],
      },
    ],
    industryTitle: "Common use cases",
    industries: [
      {
        title: "Clinics",
        body: "Scheduling, reminders, and pre‑consultation intake (WhatsApp optional).",
        bullets: ["Appointments", "Intake", "Reminders"],
      },
      {
        title: "Real estate",
        body: "Qualification + follow‑up, property info, and faster response times.",
        bullets: ["Qualification", "Follow‑up", "Property info"],
      },
      {
        title: "Travel agencies",
        body: "Guided quoting and itinerary follow‑ups — without losing leads.",
        bullets: ["Guided quote", "Follow‑up", "Upsells"],
      },
    ],
    diagnosisTitle: "Not sure where AI fits?",
    diagnosisBody:
      "Request a quick diagnosis: we review your workflow, identify the best first automation, and outline scope and next steps.",
    diagnosisCta: "Request diagnosis on WhatsApp",
    processTitle: "How we work",
    process: [
      {
        title: "1) Diagnose",
        body: "We map your workflow and pick the highest‑ROI first step.",
      },
      {
        title: "2) Build",
        body: "We ship an MVP fast with clear success metrics.",
      },
      {
        title: "3) Deploy & iterate",
        body: "We integrate, monitor, and expand what works.",
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
        q: "Do you only work on WhatsApp automations?",
        a: "No. We can build and integrate across WhatsApp, web, email, CRMs, and internal tools.",
      },
      {
        q: "What if I’m not sure I need AI?",
        a: "Request a diagnosis. We’ll identify opportunities and recommend the shortest path to ROI.",
      },
    ],
  },
  es: {
    kicker: "Agencia de IA",
    headline: "No solo usamos IA — diseñamos el futuro de tu negocio.",
    sub: "Agentes, automatizaciones e inteligencia que hace tu trabajo más humano — y tu operación más escalable.",
    cta: "Pide tu cotización por WhatsApp",
    ctaPrefill:
      "Hola MaxAI — me gustaría una cotización.\n\nGiro: \nObjetivo (agenda/leads/seguimiento/soporte): \nCiudad: \nUrgencia: \n\nSi puedes, agrega: tu nombre en WhatsApp + mejor horario para responderte.",
    secondary: "Agenda diagnóstico (20 min)",
    trust: "Práctico. Medible. Listo para producción.",
    services: [
      {
        title: "Agenda & operaciones",
        body: "Automatiza citas, recordatorios, intake y flujos operativos internos.",
        bullets: ["Calendario", "Recordatorios", "Intake"],
      },
      {
        title: "Captación & seguimiento",
        body: "Captura, califica y da seguimiento en varios canales — con handoff humano.",
        bullets: ["Calificación", "Enrutamiento", "Secuencias"],
      },
      {
        title: "Soporte & conocimiento",
        body: "Responde FAQs y reduce soporte repetitivo usando tus docs y políticas.",
        bullets: ["FAQs", "Base de conocimiento", "Consistencia"],
      },
    ],
    industryTitle: "Casos de uso comunes",
    industries: [
      {
        title: "Consultorios",
        body: "Agenda, recordatorios e intake pre‑consulta (WhatsApp opcional).",
        bullets: ["Citas", "Intake", "Recordatorios"],
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
    diagnosisTitle: "¿No sabes si tu negocio necesita IA?",
    diagnosisBody:
      "Pide un diagnóstico rápido: revisamos tu flujo, identificamos la mejor primera automatización y te damos alcance y siguientes pasos.",
    diagnosisCta: "Pedir diagnóstico por WhatsApp",
    processTitle: "Cómo trabajamos",
    process: [
      {
        title: "1) Diagnóstico",
        body: "Mapeamos tu flujo y definimos el primer paso con mayor ROI.",
      },
      {
        title: "2) Construcción",
        body: "Lanzamos un MVP rápido con métricas claras.",
      },
      {
        title: "3) Despliegue e iteración",
        body: "Integramos, monitoreamos y escalamos lo que funciona.",
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
        q: "¿Solo hacen automatizaciones en WhatsApp?",
        a: "No. Podemos integrar WhatsApp, web, email, CRMs y herramientas internas.",
      },
      {
        q: "¿Y si no sé por dónde empezar?",
        a: "Pide un diagnóstico. Identificamos oportunidades y te proponemos el camino más corto a ROI.",
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
  // Headline rendering: keep it clean + spacious (agency vibe)

  return (
    <SiteShell locale={locale}>
      <section className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
        <div className="relative px-6 py-14 md:px-12 md:py-20">
          <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-xl">
              <Badge>{t.trust}</Badge>
              <p className="mt-6 text-sm uppercase tracking-widest text-zinc-100/80">
                {t.kicker}
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl md:tracking-[-0.02em]">
                <span className="block text-white">{t.headline}</span>
              </h1>

              <p className="mt-6 text-lg text-zinc-50/85 md:text-xl">
                {t.sub}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <WhatsAppCTA label={t.cta} prefill={t.ctaPrefill} />
                <CalendlyCTA label={t.secondary} />
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 text-xs text-zinc-100/80">
                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
                  {locale === "es" ? "MVP rápido" : "Fast MVP"}
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
                  {locale === "es" ? "Producción" : "Production"}
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
                  {locale === "es" ? "Entrenamiento" : "Enablement"}
                </div>
              </div>
            </div>

            <HeroVisual />
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

      <section id="diagnosis" className="mt-20 rounded-2xl border border-white/10 bg-white/[0.04] p-8">
        <div className="text-lg font-semibold">{t.diagnosisTitle}</div>
        <p className="mt-2 text-sm text-zinc-200/90">{t.diagnosisBody}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <CalendlyCTA
            label={locale === "es" ? "Agendar en Calendly" : "Book on Calendly"}
          />
          <WhatsAppCTA label={t.diagnosisCta} prefill={t.ctaPrefill} />
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
          {locale === "es" ? "¿Listo para cotizar?" : "Ready to request a quote?"}
        </div>
        <p className="mt-2 text-sm text-zinc-200/90">
          {locale === "es"
            ? "Cuéntanos tu caso y te damos recomendación y siguientes pasos."
            : "Tell us your case and we’ll reply with a recommendation and next steps."}
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
