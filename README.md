# MaxAI — Agency Site (Next.js + Vercel)

This is the bilingual (ES/EN) MaxAI agency website.

## Features (MVP)

- Next.js (App Router) + TypeScript + Tailwind
- **ES + EN from day 1**
- Default language:
  - **ES** if visitor country is Spanish-speaking (Vercel `req.geo.country`)
  - otherwise **EN** (fallback to `Accept-Language`)
- WhatsApp CTA: **+52 4433 892078**
- Built-in **AI bot widget (text)** (MVP uses deterministic FAQ-style replies)
  - Phase 2: connect OpenAI + optional voice (ElevenLabs)

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this repo to GitHub (private is fine).
2. In Vercel: **New Project → Import Git Repository**
3. Framework preset: Next.js (auto)
4. Deploy.

## Notes

- Language redirect is implemented in `middleware.ts`.
- Bot endpoint is `src/app/api/chat/route.ts`.
