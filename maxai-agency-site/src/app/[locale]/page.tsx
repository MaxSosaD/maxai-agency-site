import { Badge } from "@/components/Badge";
import { FloatingChat } from "@/components/FloatingChat";
import { SectionCard } from "@/components/SectionCard";
import { SiteShell } from "@/components/SiteShell";
import { WarmHeroBackdrop } from "@/components/WarmHeroBackdrop";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    kicker: "Automation with AI for real business processes.",
    headline: "Reduce time, improve customer experience, and scale your operation.",
    sub: "MaxAI identifies high‑ROI opportunities and builds AI automations and agents (scheduling, follow‑up, support, reporting) integrated with your tools: WhatsApp, web, email, CRMs, and more.",
    cta: "Request a quote on WhatsApp",
    ctaPrefill:
      "Hi MaxAI — I’d like to request a quote.\n\nBusiness type: \nGoal (scheduling/leads/follow-up/support): \nCity: \nUrgency: \n\nIf you can, add: your WhatsApp name + best time to reply.",
    secondary: "Request a diagnosis",
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
    kicker: "Automatización con IA para procesos reales de negocio.",
    headline: "Reduce tiempos, mejora la atención y escala tu operación.",
    sub: "MaxAI identifica oportunidades con ROI y construye automatizaciones y agentes (agenda, seguimiento, soporte, reportes) integrados con tus herramientas: WhatsApp, web, email, CRMs y más.",
    cta: "Pide tu cotización por WhatsApp",
    ctaPrefill:
      "Hola MaxAI — me gustaría una cotización.\n\nGiro: \nObjetivo (agenda/leads/seguimiento/soporte): \nCiudad: \nUrgencia: \n\nSi puedes, agrega: tu nombre en WhatsApp + mejor horario para responderte.",
    secondary: "Solicitar diagnóstico",
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
  const words = t.headline.split(" ");
  const lastWord = words.at(-1) ?? "";
  const restWords = words.slice(0, -1).join(" ");

  return (
    <SiteShell locale={locale}>
      <section className="relative mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
        <div className="relative px-6 py-14 md:px-12 md:py-20">
          {/* Warm cinematic hero backdrop (Option A) */}
          <WarmHeroBackdrop />

          <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-xl">
              <Badge>{t.trust}</Badge>
              <p className="mt-6 text-sm uppercase tracking-widest text-zinc-100/80">
                {t.kicker}
              </p>

              <h1 className="mt-4 text-4xl leading-[1.05] tracking-tight md:text-6xl">
                <span className="font-[family:var(--font-serif)] font-semibold">
                  {restWords}{" "}
                </span>
                <span className="font-[family:var(--font-serif)] font-semibold italic">
                  {lastWord}
                </span>
              </h1>

              <p className="mt-6 text-lg text-zinc-50/85">{t.sub}</p>

              <div className="mt-9 flex flex-wrap gap-3">
                <WhatsAppCTA label={t.cta} prefill={t.ctaPrefill} />
                <a
                  href="#diagnosis"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {t.secondary}
                </a>
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

            {/* Mockup block */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_20%_20%,rgba(255,206,133,0.25),rgba(255,206,133,0)_55%),radial-gradient(circle_at_80%_30%,rgba(189,120,255,0.18),rgba(189,120,255,0)_60%)] blur-2xl" />
              <div className="relative rounded-2xl border border-white/15 bg-black/35 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-300/70" />
                  </div>
                  <div className="text-xs text-zinc-200/80">
                    {locale === "es" ? "Panel de automatizaciones" : "Automation dashboard"}
                  </div>
                  <div className="text-xs text-zinc-200/60">MaxAI</div>
                </div>

                <div className="mt-4 grid gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                      <div className="text-xs text-zinc-200/70">
                        {locale === "es" ? "Leads" : "Leads"}
                      </div>
                      <div className="mt-2 text-2xl font-semibold">+38%</div>
                      <div className="mt-1 text-xs text-zinc-200/60">
                        {locale === "es" ? "mes vs mes" : "month over month"}
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                      <div className="text-xs text-zinc-200/70">
                        {locale === "es" ? "Tiempo ahorrado" : "Time saved"}
                      </div>
                      <div className="mt-2 text-2xl font-semibold">12h</div>
                      <div className="mt-1 text-xs text-zinc-200/60">
                        {locale === "es" ? "por semana" : "per week"}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-zinc-200/70">
                        {locale === "es" ? "Flujos activos" : "Active flows"}
                      </div>
                      <div className="text-xs text-emerald-200/80">● {locale === "es" ? "En vivo" : "Live"}</div>
                    </div>
                    <div className="mt-3 grid gap-2 text-xs">
                      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/20 px-3 py-2">
                        <span className="text-zinc-100/90">WhatsApp → Calificación</span>
                        <span className="text-zinc-200/60">92%</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/20 px-3 py-2">
                        <span className="text-zinc-100/90">Agenda → Recordatorios</span>
                        <span className="text-zinc-200/60">98%</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/20 px-3 py-2">
                        <span className="text-zinc-100/90">Soporte → Base de conocimiento</span>
                        <span className="text-zinc-200/60">87%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-100/70 md:justify-end">
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1">
                  {locale === "es" ? "Implementación" : "Implementation"}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1">
                  {locale === "es" ? "Integraciones" : "Integrations"}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1">
                  {locale === "es" ? "Medición" : "Measurement"}
                </span>
              </div>
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

      <section id="diagnosis" className="mt-20 rounded-2xl border border-white/10 bg-white/[0.04] p-8">
        <div className="text-lg font-semibold">{t.diagnosisTitle}</div>
        <p className="mt-2 text-sm text-zinc-200/90">{t.diagnosisBody}</p>
        <div className="mt-5">
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
