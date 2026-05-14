# MaxAI Agency Site — Context for Claude Code

## Proyecto
Landing page de MaxAI, una agencia de automatización con IA para negocios en LATAM. Objetivo: captar leads y convertirlos vía WhatsApp y Calendly.

**URL producción:** Desplegado en Vercel, repo en GitHub (`MaxSosaD/maxai-agency-site`)

---

## Stack
- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion, GSAP
- **3D / Gráficos:** Three.js, @react-three/fiber, @react-three/drei, Spline
- **Deploy:** Vercel (standalone output)
- **i18n:** Propio (sin librerías externas) — rutas `[locale]` con ES por defecto

---

## Estructura del proyecto
```
src/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx        ← Página principal (toda la landing)
│   │   └── layout.tsx
│   ├── api/chat/route.ts   ← Chat bot determinístico (MVP, sin IA real aún)
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ShaderBackground.tsx   ← Fondo WebGL del hero
│   ├── FloatingChat.tsx       ← Widget de chat flotante
│   ├── ChatWidget.tsx         ← UI interna del chat
│   ├── WhatsAppCTA.tsx        ← Botón CTA → WhatsApp
│   ├── CalendlyCTA.tsx        ← Botón CTA → Calendly
│   ├── SiteShell.tsx          ← Layout wrapper (header + footer)
│   ├── SiteHeader.tsx         ← Navegación principal
│   └── [otros componentes visuales]
├── lib/i18n.ts                ← Locales: "es" | "en", default "es"
├── types/elevenlabs.d.ts
└── middleware.ts              ← Redirect "/" → "/es"
```

---

## Convenciones de código
- Componentes en `PascalCase.tsx` dentro de `src/components/`
- `"use client"` explícito en componentes con estado o animaciones
- Tailwind v4: clases directas con valores arbitrarios tipo `text-[#00ff88]`, no `@apply`
- Colores de marca: verde `#00ff88`, morado `#7c3aed`, fondo `#0a0a0f`, cards `#1a1a24`, bordes `#2a2a3a`
- Animaciones con Framer Motion: `initial/whileInView` + `viewport={{ once: true }}`
- No hay archivo de configuración de Tailwind (usa Tailwind v4 con PostCSS)

---

## i18n
- Locales: `"es"` y `"en"` (Locale type en `src/lib/i18n.ts`)
- Rutas: `/{locale}/...` — el middleware redirige `/` → `/es`
- Todo el copy de la landing está en el objeto `t` dentro de `page.tsx`
- Si agregas texto nuevo, añádelo al objeto `t` con versión ES e EN

---

## CTAs y conversión
- **WhatsApp:** Usar `<WhatsAppCTA label="..." prefill="..." />` — el prefill pre-rellena el mensaje
- **Calendly:** Usar `<CalendlyCTA label="..." />` — abre el widget de Calendly
- **Chat:** Endpoint en `/api/chat` — por ahora es determinístico (regex de intents). Fase 2: conectar a Claude/OpenAI con RAG

---

## Deploy
- Vercel detecta push a `main` y despliega automáticamente
- `next.config.ts` tiene `output: "standalone"` y ESLint ignorado en builds
- No hay variables de entorno requeridas para el MVP actual

---

## Lo que NO hacer
- No instalar librerías de i18n externas (next-intl, i18next, etc.) — el sistema propio es intencional
- No cambiar `output: "standalone"` en next.config.ts
- No usar `<form>` HTML nativo — usar handlers de React
- No modificar `middleware.ts` sin revisar la lógica de locale detection

---

## Roadmap / TODOs conocidos
- [ ] Conectar `/api/chat` a Claude/OpenAI con knowledge base de MaxAI
- [ ] Implementar switch de idioma EN/ES en el header
- [ ] SEO: metadata dinámica por locale
- [ ] Analytics: agregar Vercel Analytics o Plausible
