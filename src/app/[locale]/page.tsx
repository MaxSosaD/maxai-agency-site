"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { CalendlyCTA } from "@/components/CalendlyCTA";
import type { Locale } from "@/lib/i18n";
import { ShaderBackground } from "@/components/ShaderBackground";

// ============================================================
// HELPERS
// ============================================================
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      className="text-xs font-bold uppercase tracking-[0.2em] text-[#00ff88]"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.p>
  );
}

// ============================================================
// VIRTUAL EMPLOYEE CARD
// ============================================================
function VirtualEmployeeCard({
  icon,
  title,
  text,
  delay = 0,
}: {
  icon: string;
  title: string;
  text: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="rounded-2xl border border-[#2a2a3a] bg-[#1a1a24] p-6 transition-colors hover:border-[#00ff88]/30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00ff88]/10 text-2xl">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">{text}</p>
    </motion.div>
  );
}

// ============================================================
// ROI CALCULATOR
// ============================================================
function ROICalculator() {
  const [employees, setEmployees] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyCost, setHourlyCost] = useState(25);
  const [includeBenefits, setIncludeBenefits] = useState(true);

  const multiplier = includeBenefits ? 1.3 : 1;
  const annualCost = Math.round(employees * hoursPerWeek * hourlyCost * 52 * multiplier);
  const automationSavings = Math.round(annualCost * 0.4);
  const hoursRecoveredMonthly = Math.round(employees * hoursPerWeek * 0.4 * 4.3);

  return (
    <motion.div
      className="mt-10 rounded-2xl border border-[#2a2a3a] bg-[#1a1a24] p-6 md:p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm text-[#94a3b8]">
            <span>Número de personas haciendo tareas repetitivas</span>
            <span className="font-semibold text-[#00ff88]">{employees}</span>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="mt-2 w-full accent-[#00ff88]"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm text-[#94a3b8]">
            <span>Horas semanales en tareas manuales por persona</span>
            <span className="font-semibold text-[#00ff88]">{hoursPerWeek} hrs</span>
          </div>
          <input
            type="range"
            min="1"
            max="40"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="mt-2 w-full accent-[#00ff88]"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm text-[#94a3b8]">
            <span>Costo promedio por hora</span>
            <span className="font-semibold text-[#00ff88]">${hourlyCost}/hr</span>
          </div>
          <input
            type="range"
            min="5"
            max="150"
            value={hourlyCost}
            onChange={(e) => setHourlyCost(Number(e.target.value))}
            className="mt-2 w-full accent-[#00ff88]"
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-[#94a3b8]">Incluir prestaciones y beneficios (+30%)</span>
          <button
            onClick={() => setIncludeBenefits(!includeBenefits)}
            className={`flex h-7 w-12 items-center rounded-full p-1 transition-colors ${
              includeBenefits ? "bg-[#00ff88]" : "bg-zinc-600"
            }`}
          >
            <motion.div
              className="h-5 w-5 rounded-full bg-white"
              animate={{ x: includeBenefits ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-[#2a2a3a] p-4 text-center">
            <div className="text-xs text-[#64748b]">Costo anual estimado</div>
            <div className="mt-1 text-2xl font-black text-white">
              ${annualCost.toLocaleString()}
            </div>
          </div>
          <div className="rounded-xl border border-[#00ff88]/30 bg-[#00ff88]/5 p-4 text-center">
            <div className="text-xs text-[#64748b]">Ahorro potencial con IA</div>
            <div className="mt-1 text-2xl font-black text-[#00ff88]">
              ${automationSavings.toLocaleString()}/año
            </div>
          </div>
          <div className="rounded-xl border border-[#7c3aed]/30 bg-[#7c3aed]/5 p-4 text-center">
            <div className="text-xs text-[#64748b]">Horas recuperadas al mes</div>
            <div className="mt-1 text-2xl font-black text-[#7c3aed]">
              {hoursRecoveredMonthly} hrs
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-[#64748b]">
        * Los resultados son estimaciones basadas en un ahorro promedio del 40% por automatización. En la auditoría gratuita revisamos tus procesos reales y calculamos un escenario más preciso.
      </p>
    </motion.div>
  );
}

// ============================================================
// SERVICE CARD
// ============================================================
function ServiceCard({
  num,
  title,
  description,
  bullets,
  delay = 0,
}: {
  num: string;
  title: string;
  description: string;
  bullets: string[];
  delay?: number;
}) {
  return (
    <motion.div
      className="group rounded-2xl border border-[#2a2a3a] bg-[#1a1a24] p-6 transition-colors hover:border-[#00ff88]/30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="mb-4 text-xs font-bold text-[#00ff88]">{num}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-[#94a3b8]">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="rounded-full border border-[#2a2a3a] bg-[#0a0a0f] px-3 py-1 text-xs text-[#94a3b8]"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ============================================================
// DEMO CARD
// ============================================================
function DemoCard({
  num,
  title,
  description,
  delay = 0,
}: {
  num: string;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="rounded-2xl border border-[#2a2a3a] bg-[#1a1a24] p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="mb-4 flex aspect-video items-center justify-center rounded-xl border border-dashed border-[#2a2a3a] bg-[#0a0a0f]">
        <div className="text-center">
          <div className="text-4xl text-[#2a2a3a]">▶</div>
          <p className="mt-2 text-xs text-[#3a3a4a]">Demo próximamente</p>
        </div>
      </div>
      <div className="mb-2 text-xs font-bold text-[#00ff88]">{num}</div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">{description}</p>
    </motion.div>
  );
}

// ============================================================
// TIMELINE STEP
// ============================================================
function TimelineStep({
  step,
  title,
  description,
  delay = 0,
}: {
  step: string;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#00ff88]">
        {step}
      </div>
      <h4 className="text-base font-bold text-white">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">{description}</p>
    </motion.div>
  );
}

// ============================================================
// PRICING CARD
// ============================================================
function PricingCard({
  name,
  target,
  features,
  cta,
  prefill,
  popular = false,
  delay = 0,
}: {
  name: string;
  target: string;
  features: string[];
  cta: string;
  prefill: string;
  popular?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      className={`relative rounded-2xl border p-6 ${
        popular
          ? "border-[#00ff88] bg-gradient-to-b from-[#00ff88]/10 to-transparent"
          : "border-[#2a2a3a] bg-[#1a1a24]"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#00ff88] px-3 py-1 text-xs font-bold text-black">
          MÁS POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">{target}</p>
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-[#94a3b8]">
            <svg
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#00ff88]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <WhatsAppCTA label={cta} prefill={prefill} />
      </div>
    </motion.div>
  );
}

// ============================================================
// USE CASE CARD (reemplaza testimonios)
// ============================================================
function UseCaseCard({
  industry,
  scenario,
  result,
  delay = 0,
}: {
  industry: string;
  scenario: string;
  result: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="rounded-2xl border border-[#2a2a3a] bg-[#1a1a24] p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="mb-3 inline-block rounded-lg bg-[#00ff88]/10 px-3 py-1 text-xs font-bold text-[#00ff88]">
        {industry}
      </div>
      <p className="text-sm leading-relaxed text-[#94a3b8]">{scenario}</p>
      <div className="mt-4 flex items-start gap-2 text-sm font-medium text-white">
        <span className="mt-0.5 flex-shrink-0 text-[#00ff88]">→</span>
        {result}
      </div>
    </motion.div>
  );
}

// ============================================================
// FAQ ITEM (acordeón)
// ============================================================
function FAQItem({
  question,
  answer,
  delay = 0,
}: {
  question: string;
  answer: string;
  delay?: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border-b border-[#2a2a3a]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
    >
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-white">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-[#00ff88]"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-[#94a3b8]">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = React.use(params);

  const virtualEmployees = [
    {
      icon: "💬",
      title: "Responder clientes 24/7",
      text: "Tu IA contesta preguntas frecuentes, filtra prospectos y responde aunque tu equipo esté desconectado.",
    },
    {
      icon: "📅",
      title: "Agendar citas automáticamente",
      text: "Conecta WhatsApp, llamadas o formularios con tu calendario y evita el ida y vuelta de mensajes.",
    },
    {
      icon: "🔁",
      title: "Dar seguimiento a prospectos",
      text: "La IA recuerda, escribe y reactiva leads que normalmente se enfrían por falta de seguimiento.",
    },
    {
      icon: "📊",
      title: "Llenar CRM y reportes",
      text: "Cada conversación puede convertirse en datos organizados, reportes y acciones automáticas.",
    },
    {
      icon: "📞",
      title: "Atender llamadas",
      text: "Un agente de voz puede recibir llamadas, entender la necesidad del cliente y canalizar o agendar.",
    },
    {
      icon: "🔗",
      title: "Conectar tus herramientas",
      text: "Integramos tus procesos con WhatsApp, Google Calendar, email, CRM, hojas de cálculo, APIs y más.",
    },
  ];

  const problems = [
    "Responder los mismos mensajes todos los días.",
    "Agendar citas manualmente.",
    "Perder prospectos por responder tarde.",
    "Copiar y pegar datos entre sistemas.",
    "Olvidar dar seguimiento.",
    "Hacer reportes a mano.",
    "Depender de una sola persona para tareas repetitivas.",
    "No atender clientes fuera de horario.",
  ];

  const services = [
    {
      num: "01",
      title: "Agentes IA para WhatsApp",
      description:
        "Atiende clientes, responde preguntas, califica prospectos y agenda citas desde WhatsApp.",
      bullets: ["Respuestas automáticas", "Calificación de prospectos", "Agenda integrada", "Escalación a humano"],
    },
    {
      num: "02",
      title: "Agentes de voz IA",
      description:
        "Recibe llamadas, entiende solicitudes y agenda o canaliza conversaciones sin saturar a tu equipo.",
      bullets: ["Atención telefónica", "Agendamiento", "Registro de llamadas", "Transferencia o resumen"],
    },
    {
      num: "03",
      title: "Automatización de ventas y seguimiento",
      description:
        "Evita que tus leads se enfríen. Automatizamos recordatorios, mensajes y secuencias de seguimiento.",
      bullets: ["Leads", "CRM", "Recordatorios", "Reactivación"],
    },
    {
      num: "04",
      title: "Automatización operativa",
      description:
        "Conecta formularios, hojas de cálculo, calendarios, emails y sistemas internos para reducir trabajo manual.",
      bullets: ["Formularios", "Google Sheets", "Calendar", "Email", "APIs"],
    },
    {
      num: "05",
      title: "Dashboards y reportes automáticos",
      description:
        "Convierte datos dispersos en reportes claros para tomar mejores decisiones sin trabajo manual.",
      bullets: ["Métricas", "Reportes", "Alertas", "Paneles"],
    },
    {
      num: "06",
      title: "Soluciones a medida",
      description:
        "Diseñamos automatizaciones específicas para los procesos únicos de tu negocio.",
      bullets: ["Integraciones", "Apps internas", "Flujos personalizados", "Consultoría IA"],
    },
  ];

  const demos = [
    {
      num: "Demo 01",
      title: "WhatsApp agenda una cita automáticamente",
      description:
        "El cliente escribe, la IA responde, detecta la intención, revisa disponibilidad y agenda en calendario.",
    },
    {
      num: "Demo 02",
      title: "Agente IA da seguimiento a un prospecto",
      description:
        "Después de una consulta, la IA envía mensajes, recuerda al cliente y actualiza el estado del lead.",
    },
    {
      num: "Demo 03",
      title: "Formulario conectado a CRM",
      description:
        "Cada nuevo registro se limpia, clasifica, guarda y notifica automáticamente al equipo correcto.",
    },
  ];

  const timeline = [
    {
      step: "Paso 1",
      title: "Auditoría IA",
      description: "Revisamos tus procesos, detectamos tareas repetitivas y calculamos oportunidades de ahorro.",
    },
    {
      step: "Paso 2",
      title: "Mapa de automatización",
      description: "Definimos qué se automatiza, qué herramientas se conectan y qué resultado debe generar.",
    },
    {
      step: "Paso 3",
      title: "Construcción",
      description: "Creamos el flujo, agente o integración usando las herramientas adecuadas para tu operación.",
    },
    {
      step: "Paso 4",
      title: "Pruebas",
      description: "Probamos escenarios reales antes de ponerlo frente a tus clientes o equipo.",
    },
    {
      step: "Paso 5",
      title: "Lanzamiento",
      description: "Activamos la automatización, capacitamos a tu equipo y monitoreamos el desempeño.",
    },
    {
      step: "Paso 6",
      title: "Optimización",
      description: "Mejoramos respuestas, flujos y resultados con base en datos reales.",
    },
  ];

  const plans = [
    {
      name: "Quick Win",
      target: "Negocios que quieren automatizar un proceso específico y ver resultados rápido.",
      features: [
        "1 flujo de automatización",
        "Hasta 3 integraciones",
        "Implementación desde 2 semanas",
        "Pruebas y ajustes iniciales",
        "Soporte básico",
      ],
      cta: "Cotizar Quick Win",
      prefill: "Hola MaxAI, me interesa el plan Quick Win. ¿Podemos hablar?",
    },
    {
      name: "Growth",
      target: "Negocios que quieren automatizar ventas, agenda o seguimiento completo.",
      features: [
        "Hasta 3 flujos de automatización",
        "WhatsApp, calendario, CRM o formularios",
        "Analítica básica",
        "Soporte prioritario",
        "Optimización mensual",
      ],
      cta: "Quiero automatizar mi operación",
      prefill: "Hola MaxAI, me interesa el plan Growth. ¿Podemos hablar?",
      popular: true,
    },
    {
      name: "Custom / Enterprise",
      target: "Empresas con procesos más complejos o múltiples áreas a automatizar.",
      features: [
        "Automatizaciones a medida",
        "Integraciones avanzadas",
        "Agentes IA personalizados",
        "Dashboards y reportes",
        "Capacitación del equipo",
        "Acompañamiento estratégico",
      ],
      cta: "Hablar con un estratega",
      prefill: "Hola MaxAI, me interesa una solución Enterprise. ¿Podemos agendar una llamada?",
    },
  ];

  const useCases = [
    {
      industry: "Clínica / Consultorio",
      scenario:
        "El equipo pasaba horas confirmando citas por WhatsApp y recordando a pacientes manualmente.",
      result:
        "Un agente IA responde, agenda y envía recordatorios automáticos. El personal atiende solo casos especiales.",
    },
    {
      industry: "Inmobiliaria",
      scenario:
        "Los asesores perdían prospectos por no responder a tiempo o por olvidar hacer seguimiento.",
      result:
        "La IA califica prospectos en WhatsApp, asigna al asesor correcto y envía seguimientos automáticos.",
    },
    {
      industry: "Escuela / Academia",
      scenario:
        "El equipo administrativo respondía las mismas preguntas de inscripción todos los días.",
      result:
        "Un chatbot resuelve dudas frecuentes, captura datos y programa llamadas con el equipo de ventas.",
    },
    {
      industry: "Agencia / Consultora",
      scenario:
        "Los reportes de desempeño se hacían manualmente cada semana consumiendo horas del equipo.",
      result:
        "Los datos se consolidan automáticamente y se envía un reporte listo cada lunes por la mañana.",
    },
    {
      industry: "Negocio con ventas por llamada",
      scenario:
        "Las llamadas entrantes se perdían fuera de horario o en horas pico sin capacidad de respuesta.",
      result:
        "Un agente de voz IA atiende, entiende la necesidad y agenda una llamada con el equipo humano.",
    },
    {
      industry: "E-commerce / Tienda",
      scenario:
        "Los clientes preguntaban por estado de pedidos y disponibilidad todo el día por varios canales.",
      result:
        "La IA responde en WhatsApp e Instagram, consulta el inventario y resuelve sin intervención humana.",
    },
  ];

  const techTools = [
    "OpenAI", "WhatsApp", "Google Calendar", "Google Sheets", "Gmail",
    "HubSpot", "Calendly", "Stripe", "Shopify", "Notion",
    "Airtable", "Supabase", "n8n", "Make", "ElevenLabs", "Meta",
  ];

  const faqs = [
    {
      question: "¿Necesito saber de tecnología para usar una automatización?",
      answer:
        "No. Diseñamos el sistema para que tu equipo lo use de forma simple. Nosotros nos encargamos de toda la parte técnica: configuración, integración y mantenimiento.",
    },
    {
      question: "¿La IA reemplaza a mi equipo?",
      answer:
        "No necesariamente. La idea es quitarle tareas repetitivas a tu equipo para que pueda enfocarse en ventas, atención personalizada y operación estratégica.",
    },
    {
      question: "¿Pueden conectar WhatsApp con mi calendario?",
      answer:
        "Sí. Podemos crear flujos donde un cliente escriba por WhatsApp, la IA responda, detecte disponibilidad y agende directamente en tu calendario.",
    },
    {
      question: "¿Cuánto tarda implementar?",
      answer:
        "Un Quick Win puede estar listo desde 2 semanas. Sistemas más completos como agentes de voz, CRM integrado o múltiples flujos suelen tomar de 4 a 6 semanas.",
    },
    {
      question: "¿Qué pasa si la IA no sabe responder algo?",
      answer:
        "Creamos reglas de escalación para que ciertos casos pasen automáticamente a una persona real, ya sea por WhatsApp, llamada o correo.",
    },
    {
      question: "¿Trabajan con negocios pequeños?",
      answer:
        "Sí. Podemos empezar con una automatización sencilla y de alto impacto, y crecer conforme el negocio lo necesite. No tienes que automatizar todo desde el día uno.",
    },
    {
      question: "¿Qué necesito para empezar?",
      answer:
        "Solo una auditoría inicial de 30 minutos. Revisamos tus procesos, detectamos qué tiene sentido automatizar primero y te explicamos cómo funcionaría.",
    },
  ];

  return (
    <SiteShell locale={locale}>

      {/* ============================================================ */}
      {/* HERO */}
      {/* ============================================================ */}
      <section className="relative min-h-screen overflow-hidden">
        <ShaderBackground />
        <div className="absolute inset-0 z-10 bg-black/60" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a0f]/70 via-transparent to-[#0a0a0f]" />

        <div className="relative z-20 flex min-h-[calc(100vh-72px)] flex-col items-center justify-center px-6 pt-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/10 px-5 py-2 text-xs font-bold tracking-[0.2em] text-[#00ff88]">
              AGENCIA DE AUTOMATIZACIÓN IA
            </span>
          </motion.div>

          {/* H1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 text-center"
          >
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
              <span className="block">Automatiza el trabajo repetitivo</span>
              <span className="mt-3 block bg-gradient-to-r from-[#00ff88] to-[#7c3aed] bg-clip-text text-transparent">
                de tu negocio con empleados virtuales de IA
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 max-w-2xl text-center text-lg text-white/80 md:text-xl"
          >
            Creamos sistemas que responden clientes, agendan citas, dan seguimiento y conectan tus herramientas para que tu equipo deje de perder horas en tareas manuales.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://calendly.com/maxai/diagnostico-ia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00ff88] px-8 py-4 text-base font-semibold text-[#0a0a0f] transition-all hover:bg-[#00cc6a] hover:shadow-[0_10px_30px_rgba(0,255,136,0.3)]"
            >
              Agenda tu auditoría IA gratis
              <ArrowRight size={18} />
            </a>
            <a
              href="#demos"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Ver ejemplos de automatización
            </a>
          </motion.div>

          {/* Risk reduction */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-6 text-center text-sm text-white/50"
          >
            En 30 minutos detectamos qué procesos puedes automatizar y cuánto podrías ahorrar.
          </motion.p>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="relative z-30 -mt-12 px-6 md:px-12">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#2a2a3a] bg-black/70 px-6 py-5 backdrop-blur-sm md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { icon: "✓", label: "Auditoría gratis" },
              { icon: "✓", label: "Implementación desde 2 semanas" },
              { icon: "✓", label: "A la medida de tu negocio" },
              { icon: "✓", label: "Soporte en español" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-[#94a3b8]">
                <span className="font-bold text-[#00ff88]">{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* VIRTUAL EMPLOYEE SECTION */}
      {/* ============================================================ */}
      <section className="px-6 py-24 md:px-12" id="automatizaciones">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Empleados virtuales de IA</SectionLabel>
          <FadeUp delay={0.1}>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              ¿Qué puede hacer un empleado virtual de IA?
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#94a3b8]">
              No son chatbots básicos. Son sistemas que trabajan de forma autónoma, se integran con tus herramientas y actúan según las reglas de tu negocio.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {virtualEmployees.map((card, i) => (
              <VirtualEmployeeCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                text={card.text}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROBLEMS SECTION */}
      {/* ============================================================ */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-red-900/30 bg-red-950/10 p-8 md:p-12">
            <SectionLabel>¿Te suena familiar?</SectionLabel>
            <FadeUp delay={0.1}>
              <h2 className="mt-4 text-2xl font-black tracking-tight text-white md:text-4xl">
                Si tu negocio sigue haciendo esto manualmente, ya estás perdiendo dinero
              </h2>
            </FadeUp>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {problems.map((problem, i) => (
                <motion.li
                  key={problem}
                  className="flex items-start gap-3 text-[#94a3b8]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <span className="mt-0.5 flex-shrink-0 font-bold text-red-400">✗</span>
                  <span className="text-sm leading-relaxed">{problem}</span>
                </motion.li>
              ))}
            </ul>

            <FadeUp delay={0.6} className="mt-8 border-t border-[#2a2a3a] pt-6">
              <p className="text-base font-medium text-white">
                MaxAI convierte esos procesos repetitivos en sistemas automáticos que trabajan todos los días.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ROI CALCULATOR */}
      {/* ============================================================ */}
      <section className="px-6 py-24 md:px-12" id="calculadora">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Calculadora de ahorro</SectionLabel>
          <FadeUp delay={0.1}>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">
              Calcula cuánto te cuesta seguir haciendo tareas manuales
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#94a3b8]">
              Muchos negocios no pierden dinero por falta de clientes, sino por procesos lentos, seguimiento tardío y horas desperdiciadas.
            </p>
          </FadeUp>

          <ROICalculator />

          <div className="mt-8 text-center">
            <a
              href="https://calendly.com/maxai/diagnostico-ia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00ff88] px-8 py-4 text-base font-semibold text-[#0a0a0f] transition-all hover:bg-[#00cc6a]"
            >
              Quiero una auditoría de mis procesos
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SERVICES */}
      {/* ============================================================ */}
      <section className="px-6 py-24 md:px-12" id="servicios">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Automatizaciones</SectionLabel>
          <FadeUp delay={0.1}>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              Automatizaciones que podemos construir para tu negocio
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#94a3b8]">
              No vendemos paquetes genéricos. Primero entendemos tu operación y después proponemos el sistema adecuado.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard
                key={service.num}
                num={service.num}
                title={service.title}
                description={service.description}
                bullets={service.bullets}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DEMOS */}
      {/* ============================================================ */}
      <section className="px-6 py-24 md:px-12" id="demos">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>En acción</SectionLabel>
          <FadeUp delay={0.1}>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              Mira cómo se ve una automatización en acción
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#94a3b8]">
              Ejemplos reales de lo que construimos. Los videos demo estarán disponibles próximamente.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {demos.map((demo, i) => (
              <DemoCard
                key={demo.num}
                num={demo.num}
                title={demo.title}
                description={demo.description}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PROCESS */}
      {/* ============================================================ */}
      <section className="px-6 py-24 md:px-12" id="proceso">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Cómo trabajamos</SectionLabel>
          <FadeUp delay={0.1}>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              De la auditoría al sistema funcionando
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#94a3b8]">
              Empezamos con un proceso concreto. Primero detectamos una oportunidad de alto impacto, después construimos una automatización funcional y medible.
            </p>
          </FadeUp>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {timeline.map((step, i) => (
              <TimelineStep
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                delay={i * 0.1}
              />
            ))}
          </div>

          <FadeUp delay={0.4} className="mt-12">
            <div className="rounded-2xl border border-[#2a2a3a] bg-[#1a1a24] p-6 md:p-8">
              <p className="text-sm leading-relaxed text-[#94a3b8]">
                <span className="font-semibold text-white">Tiempos de implementación: </span>
                Algunos Quick Wins pueden implementarse desde 2 semanas. Sistemas más complejos con múltiples flujos o integraciones pueden tomar de 4 a 6 semanas.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRICING */}
      {/* ============================================================ */}
      <section className="px-6 py-24 md:px-12" id="precios">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Planes</SectionLabel>
          <FadeUp delay={0.1}>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              Empieza según el tamaño de tu necesidad
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#94a3b8]">
              No vendemos paquetes genéricos. Primero entendemos tu operación y después proponemos el sistema adecuado.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((plan, i) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                target={plan.target}
                features={plan.features}
                cta={plan.cta}
                prefill={plan.prefill}
                popular={plan.popular}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* USE CASES (reemplaza testimonios) */}
      {/* ============================================================ */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Casos de uso</SectionLabel>
          <FadeUp delay={0.1}>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              Escenarios reales donde la IA genera impacto
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#94a3b8]">
              Ejemplos de automatizaciones que podemos implementar en distintos tipos de negocio.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc, i) => (
              <UseCaseCard
                key={uc.industry}
                industry={uc.industry}
                scenario={uc.scenario}
                result={uc.result}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TECH STACK */}
      {/* ============================================================ */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Tecnología</SectionLabel>
          <FadeUp delay={0.1}>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-white md:text-3xl">
              Podemos integrar herramientas como…
            </h2>
          </FadeUp>
          <FadeUp delay={0.2} className="mt-8 flex flex-wrap justify-center gap-3">
            {techTools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[#2a2a3a] bg-[#1a1a24] px-4 py-2 text-sm font-medium text-[#94a3b8]"
              >
                {tool}
              </span>
            ))}
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mt-6 text-xs text-[#64748b]">
              * Las marcas y nombres mencionados son de sus respectivos propietarios. No afirmamos partnerships oficiales.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ */}
      {/* ============================================================ */}
      <section className="px-6 py-24 md:px-12" id="faq">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>Preguntas frecuentes</SectionLabel>
          <FadeUp delay={0.1}>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">
              Preguntas frecuentes
            </h2>
          </FadeUp>

          <div className="mt-10">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FINAL CTA */}
      {/* ============================================================ */}
      <section className="px-6 py-24 md:px-12" id="contacto">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Siguiente paso</SectionLabel>
          <FadeUp delay={0.1}>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              Descubre qué parte de tu negocio puedes automatizar primero
            </h2>
            <p className="mt-6 text-lg text-[#94a3b8]">
              Agenda una auditoría gratuita de 30 minutos. Revisamos tus procesos, detectamos oportunidades y te decimos qué automatización tendría más impacto.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://calendly.com/maxai/diagnostico-ia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00ff88] px-8 py-4 text-base font-semibold text-[#0a0a0f] transition-all hover:bg-[#00cc6a] hover:shadow-[0_10px_30px_rgba(0,255,136,0.3)]"
            >
              Agendar auditoría gratis
              <ArrowRight size={18} />
            </a>
            <WhatsAppCTA
              label="Escríbenos por WhatsApp"
              prefill="Hola, quiero una auditoría IA para automatizar procesos de mi negocio."
            />
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="mt-6 text-sm text-[#64748b]">
              Sin compromiso. Sin lenguaje técnico. Solo una revisión clara de tus oportunidades de automatización.
            </p>
          </FadeUp>
        </div>
      </section>

    </SiteShell>
  );
}
