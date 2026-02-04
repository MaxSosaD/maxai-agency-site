import Link from "next/link";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { ChatWidget } from "@/components/ChatWidget";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    kicker: "We don’t just talk AI. We deliver it.",
    headline: "AI solutions that actually move the needle.",
    sub: "MaxAI identifies the highest-ROI AI opportunities, builds production-grade systems, and trains your team to make them stick.",
    cta: "Chat on WhatsApp",
    secondary: "See what we do",
    sections: {
      identify: {
        title: "Identify",
        body: "We map your workflows, find the highest-leverage automation + intelligence opportunities, and define an execution plan.",
      },
      develop: {
        title: "Develop",
        body: "We build modern AI systems (agents, RAG, automations) that integrate with your stack — fast, secure, and measurable.",
      },
      deploy: {
        title: "Deploy & Train",
        body: "We ship, monitor, iterate, and train your team so the solution gets adopted and delivers ROI.",
      },
    },
    botTitle: "Ask MaxAI",
  },
  es: {
    kicker: "No solo hablamos de IA. La entregamos.",
    headline: "IA que de verdad mueve la aguja.",
    sub: "MaxAI identifica oportunidades de IA con ROI real, construye sistemas listos para producción y entrena a tu equipo para que se queden.",
    cta: "Escríbenos por WhatsApp",
    secondary: "Ver qué hacemos",
    sections: {
      identify: {
        title: "Identificar",
        body: "Mapeamos tus flujos, encontramos oportunidades de automatización + inteligencia y definimos un plan de ejecución.",
      },
      develop: {
        title: "Desarrollar",
        body: "Construimos sistemas modernos (agentes, RAG, automatizaciones) integrados a tu stack — rápido, seguro y medible.",
      },
      deploy: {
        title: "Desplegar y entrenar",
        body: "Lanzamos, monitoreamos, iteramos y entrenamos a tu equipo para adopción real y ROI.",
      },
    },
    botTitle: "Pregúntale a MaxAI",
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
    <main className="min-h-dvh bg-gradient-to-b from-black via-zinc-950 to-zinc-900 text-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="flex items-center justify-between">
          <div className="font-semibold tracking-tight">MaxAI</div>
          <nav className="text-sm text-zinc-300">
            <Link className="hover:text-white" href={locale === "es" ? "/en" : "/es"}>
              {locale === "es" ? "EN" : "ES"}
            </Link>
          </nav>
        </header>

        <section className="mt-16 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-zinc-400">{t.kicker}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              {t.headline}
            </h1>
            <p className="mt-5 text-lg text-zinc-300">{t.sub}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppCTA label={t.cta} />
              <a
                href="#what"
                className="rounded-xl border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 hover:border-zinc-500 hover:text-white"
              >
                {t.secondary}
              </a>
            </div>

            <p className="mt-6 text-xs text-zinc-500">
              Crypto payments ready (phase 2). Built for Vercel.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="text-sm text-zinc-400">{t.botTitle}</div>
            <ChatWidget locale={locale} />
          </div>
        </section>

        <section id="what" className="mt-20 grid gap-6 md:grid-cols-3">
          {(
            [
              t.sections.identify,
              t.sections.develop,
              t.sections.deploy,
            ] as const
          ).map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6"
            >
              <div className="text-lg font-semibold">{s.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{s.body}</p>
            </div>
          ))}
        </section>

        <footer className="mt-20 border-t border-zinc-900 pt-8 text-xs text-zinc-500">
          © {new Date().getFullYear()} MaxAI. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
