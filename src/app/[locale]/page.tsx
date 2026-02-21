"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import * as React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/SiteShell";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { CalendlyCTA } from "@/components/CalendlyCTA";
import type { Locale } from "@/lib/i18n";
import { ShaderBackground } from "@/components/ShaderBackground";
// ANIMATED TEXT - Letra por letra
// ============================================================
function AnimatedText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const letters = text.split("");
  return (
    <span className={className}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + i * 0.015, duration: 0.3 }}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

// ============================================================
// SECTION NUMBER - [01] style
// ============================================================
function SectionNumber({ num }: { num: string }) {
  return (
    <motion.span
      className="block text-xs font-bold tracking-widest text-#00ff88"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      [{num}]
    </motion.span>
  );
}

// ============================================================
// STATS CARD
// ============================================================
function StatCard({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="text-4xl font-black text-white md:text-5xl">{value}</div>
      <div className="mt-2 text-sm text-#94a3b8">{label}</div>
    </motion.div>
  );
}

// ============================================================
// ROI CALCULATOR
// ============================================================
function ROICalculator() {
  const [employees, setEmployees] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyCost, setHourlyCost] = useState(30);
  const [includeBenefits, setIncludeBenefits] = useState(true);

  const multiplier = includeBenefits ? 1.25 : 1;
  const annualCost = employees * hoursPerWeek * hourlyCost * 52 * multiplier;
  const automationSavings = Math.round(annualCost * 0.4);

  return (
    <motion.div
      className="mt-10 rounded-2xl border border-#2a2a3a bg-[#1a1a24] p-6 md:p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="mb-6 text-lg font-semibold text-white">
        ¿Cuánto te cuesta el trabajo manual?
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm text-#94a3b8">
            <span>Número de empleados</span>
            <span className="font-semibold text-#00ff88">{employees}</span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
            className="mt-2 w-full accent-#00ff88"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm text-#94a3b8">
            <span>Horas por empleado por semana</span>
            <span className="font-semibold text-#00ff88">{hoursPerWeek}/hrs</span>
          </div>
          <input
            type="range"
            min="1"
            max="40"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="mt-2 w-full accent-#00ff88"
          />
        </div>

        <div>
          <div className="flex justify-between text-sm text-#94a3b8">
            <span>Costo promedio por hora</span>
            <span className="font-semibold text-#00ff88">${hourlyCost}</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={hourlyCost}
            onChange={(e) => setHourlyCost(Number(e.target.value))}
            className="mt-2 w-full accent-#00ff88"
          />
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-#94a3b8">¿Incluir beneficios?</span>
          <button
            onClick={() => setIncludeBenefits(!includeBenefits)}
            className={`flex h-8 w-14 items-center rounded-full p-1 transition-colors ${
              includeBenefits ? "bg-#00ff88" : "bg-zinc-600"
            }`}
          >
            <motion.div
              className="h-6 w-6 rounded-full bg-white"
              animate={{ x: includeBenefits ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
        </div>

        <div className="mt-6 rounded-xl bg-gradient-to-r from-#00ff88/20 to-#7c3aed/20 p-4 text-center">
          <div className="text-sm text-#94a3b8">Costo anual</div>
          <div className="text-3xl font-black text-white">${annualCost.toLocaleString()}</div>
          <div className="mt-2 text-sm text-#00ff88">
            ¡Puedes ahorrar ${automationSavings.toLocaleString()}/año con automatización!
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-#64748b">
        *Esta calculadora muestra costos laborales directos.
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
      className="group relative rounded-2xl border border-#2a2a3a bg-[#1a1a24] p-6 transition-all hover:border-#00ff88/30 hover:bg-[#1a1a24]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="mb-4 text-xs font-bold text-#00ff88">{num}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm text-#94a3b8">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="rounded-full border border-#2a2a3a bg-[#1a1a24] px-3 py-1 text-xs text-#94a3b8"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ============================================================
// PRICING CARD - Sin precios fijos, todo personalizado
// ============================================================
function PricingCard({
  name,
  description,
  features,
  popular = false,
  delay = 0,
}: {
  name: string;
  description: string;
  features: string[];
  popular?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      className={`relative rounded-2xl border p-6 transition-all ${
        popular
          ? "border-#00ff88 bg-gradient-to-b from-#00ff88/10 to-transparent"
          : "border-#2a2a3a bg-[#1a1a24]"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-#00ff88 px-3 py-1 text-xs font-bold text-black">
          MÁS POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="mt-2 text-sm text-#94a3b8">{description}</p>
      <div className="mt-4">
        <span className="text-3xl font-black text-white">Contáctanos</span>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-#94a3b8">
            <svg className="h-4 w-4 flex-shrink-0 text-#00ff88" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <WhatsAppCTA
          label="Pedir cotización"
          prefill={`Hola MaxAI, me interesa el plan ${name}. ¿Podemos hablar?`}
        />
      </div>
    </motion.div>
  );
}

// ============================================================
// TESTIMONIAL CARD
// ============================================================
function TestimonialCard({
  quote,
  name,
  role,
  delay = 0,
}: {
  quote: string;
  name: string;
  role: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="rounded-2xl border border-#2a2a3a bg-[#1a1a24] p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <p className="text-lg text-#94a3b8">"{quote}"</p>
      <div className="mt-4">
        <div className="font-semibold text-white">{name}</div>
        <div className="text-sm text-#64748b">{role}</div>
      </div>
    </motion.div>
  );
}

// ============================================================
// TIMELINE STEP
// ============================================================
function TimelineStep({
  week,
  title,
  description,
  delay = 0,
}: {
  week: string;
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
      <div className="mb-2 text-xs font-bold uppercase tracking-widest text-#00ff88">
        {week}
      </div>
      <h4 className="text-lg font-bold text-white">{title}</h4>
      <p className="mt-2 text-sm text-#94a3b8">{description}</p>
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

  const t = {
    heroKicker: "AGENCIA DE AUTOMATIZACIÓN IA",
    heroHeadline: "ESCALA TUS OPERACIONES",
    heroHeadline2: "SIN CONTRATAR MÁS GENTE.",
    heroSub: "Construimos sistemas de IA personalizados que manejan tu trabajo repetitivo, para que te enfoques en crecer, no en tareas manuales.",
    heroCTA: "Agenda tu auditoría gratis",
    trustedBy: "Empresas que confían en nosotros",
    
    services: [
      { num: "01", title: "Agenda & Operaciones", description: "Automatiza citas, recordatorios, intake y flujos operativos.", bullets: ["Calendario", "Recordatorios", "Intake", "CRM"] },
      { num: "02", title: "Captación & Seguimiento", description: "Captura, califica y da seguimiento en varios canales.", bullets: ["Calificación", "Enrutamiento", "Secuencias", "WhatsApp"] },
      { num: "03", title: "Soporte & Conocimiento", description: "Responde FAQs y reduce soporte repetitivo.", bullets: ["Chatbot", "Base de conocimiento", "Escalación"] },
      { num: "04", title: "Datos & Reportes", description: "Transforma datos brutos en insights automáticamente.", bullets: ["Dashboards", "Reportes auto", "Analítica"] },
      { num: "05", title: "Contenido & Comunicación", description: "Genera y distribuye contenido a escala.", bullets: ["Email", "Redes sociales", "Plantillas"] },
      { num: "06", title: "Soluciones Custom", description: "Sistemas construidos a la medida.", bullets: ["Integraciones", "Apps custom", "API"] },
    ],
    
    timeline: [
      { week: "Semana 1", title: "Auditoría", description: "Mapeamos flujos y calculamos ROI." },
      { week: "Semanas 2-3", title: "Diseño", description: "Arquitectura personalizada." },
      { week: "Semanas 4-5", title: "Construcción", description: "Desarrollo e integración." },
      { week: "Semana 6", title: "Despliegue", description: "Lanzamiento y entrenamiento." },
    ],
    
    postLaunchItems: [
      "Monitoreo continuo",
      "Optimización trimestral",
      "Soporte prioritario",
    ],
    
    plans: [
      { name: "Quick Win", description: "Para automatizar un proceso específico de alto impacto.", features: ["1 flujo de automatización", "Hasta 3 integraciones", "Implementación en 2 semanas", "Soporte por email"] },
      { name: "Scale", description: "Para empresas listas para automatizar múltiples procesos.", features: ["Hasta 3 flujos de automatización", "Integraciones ilimitadas", "Analítica avanzada", "Soporte prioritario", "Revisiones estratégicas"], popular: true },
      { name: "Enterprise", description: "Estrategia integral para grandes organizaciones.", features: ["Automatizaciones ilimitadas", "Integraciones enterprise", "Onboarding white-glove", "Sesiones mensuales", "SLA garantizado", "Estratega dedicado"] },
    ],
    
    testimonials: [
      { quote: "Nuestro equipo de ventas pasaba medio día en admin. Ahora cierran tratos. La automatización maneja todo.", name: "Ryan Martinez", role: "VP de Ventas" },
      { quote: "Cuadruplicamos clientes sin contratar. La automatización transformó nuestro negocio.", name: "Rebecca Martinez", role: "CEO" },
      { quote: "Pasamos de odiar el cierre de mes a tener finanzas listas en menos de una semana.", name: "Marcus Thompson", role: "CFO" },
    ],
  };

  return (
    <SiteShell locale={locale}>
      {/* ============================================================ */}
      {/* HERO - Con Shader Effect */}
      {/* ============================================================ */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Shader Background */}
        <ShaderBackground />
        
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 z-10 bg-black/60" />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a0f]/70 via-transparent to-[#0a0a0f]" />

        {/* Contenido del hero */}
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

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
              <span className="block">ESCALA TUS OPERACIONES</span>
              <span className="mt-4 block bg-gradient-to-r from-[#00ff88] to-[#7c3aed] bg-clip-text text-transparent">
                SIN CONTRATAR MÁS GENTE
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 max-w-xl text-center text-lg text-[#94a3b8] md:text-xl"
          >
            Construimos sistemas de IA que manejan tu trabajo repetitivo. Enfócate en crecer, no en tareas manuales.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <CalendlyCTA label="Agenda tu auditoría gratis" />
          </motion.div>

          {/* Trust indicators */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-10 text-center text-xs text-#64748b"
          >
            {/* Trust indicators - eliminado */}
          </motion.p>
        </div>
      </section>

      {/* STATS - en recuadro */}
      <section className="px-6 py-0 md:px-12 -mt-16 relative z-30">
        <div className="mx-auto max-w-4xl rounded-2xl border border-#2a2a3a bg-black/60 backdrop-blur-sm p-6 md:p-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatCard value="50+" label="Empresas" delay={0} />
            <StatCard value="99%" label="Satisfacción" delay={0.1} />
            <StatCard value="4.9" label="Rating" delay={0.2} />
            <StatCard value="6 sem" label="Despliegue" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section className="px-6 py-24 md:px-12" id="calculadora">
        <div className="mx-auto max-w-4xl">
          <SectionNumber num="01" />
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">
            ¿CUÁNTO TE CUESTA EL TRABAJO MANUAL?
          </h2>
          <ROICalculator />
          <div className="mt-8 text-center">
            <CalendlyCTA label="Ver cómo podemos ayudar" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-24 md:px-12" id="servicios">
        <div className="mx-auto max-w-6xl">
          <SectionNumber num="02" />
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
            LOS SERVICIOS QUE ELIMINAN EL TRABAJO MANUAL.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.services.map((service, i) => (
              <ServiceCard
                key={service.num}
                num={service.num}
                title={service.title}
                description={service.description}
                bullets={service.bullets}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-24 md:px-12" id="proceso">
        <div className="mx-auto max-w-6xl">
          <SectionNumber num="03" />
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
            DESPLIEGUE RÁPIDO.
          </h2>
          <p className="mt-4 text-lg text-#94a3b8">De la primera llamada a automatización en solo 6 semanas.</p>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {t.timeline.map((step, i) => (
              <TimelineStep
                key={step.week}
                week={step.week}
                title={step.title}
                description={step.description}
                delay={i * 0.15}
              />
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-#2a2a3a bg-[#1a1a24] p-8">
            <h3 className="text-xl font-bold text-white">¿QUÉ PASA DESPUÉS DEL LANZAMIENTO?</h3>
            <p className="mt-2 text-#94a3b8">No desaparecemos. Tu automatización mejora con el tiempo.</p>
            <ul className="mt-6 grid gap-4 md:grid-cols-3">
              {t.postLaunchItems.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-#94a3b8">
                  <svg className="h-5 w-5 flex-shrink-0 text-#00ff88" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 py-24 md:px-12" id="precios">
        <div className="mx-auto max-w-6xl">
          <SectionNumber num="04" />
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
            PLANES FLEXIBLES PARA CUALQUIER ESCALA.
          </h2>
          <p className="mt-4 text-#94a3b8">Cada negocio es único. Contáctanos y te armamos un plan a tu medida.</p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.plans.map((plan, i) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                delay={i * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <SectionNumber num="05" />
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
            NO TOMES NUESTRA PALABRA.
          </h2>
          <p className="mt-4 text-lg text-#94a3b8">Empresas que implementaron automatización y no miraron atrás.</p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={testimonial.name}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                delay={i * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24 md:px-12" id="contacto">
        <div className="mx-auto max-w-3xl text-center">
          <SectionNumber num="06" />
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
            ¿LISTO PARA AUTOMATIZAR?
          </h2>
          <p className="mt-4 text-lg text-#94a3b8">
            Agenda una auditoría gratuita de 30 minutos.
          </p>
          <div className="mt-10">
            <CalendlyCTA label="AGENDAR AUDITORÍA" />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
