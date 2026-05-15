import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MaxAI Agencia | Automatización con Inteligencia Artificial para Negocios",
  description:
    "Creamos agentes IA y automatizaciones para WhatsApp, llamadas, agenda, ventas y procesos repetitivos. Agenda una auditoría IA gratuita para tu negocio.",
  keywords:
    "automatización IA, agencia inteligencia artificial, agentes IA WhatsApp, automatización negocios, IA para empresas, chatbot WhatsApp, automatización de citas, agentes de voz IA",
  openGraph: {
    title: "MaxAI Agencia | Automatización con IA para Negocios",
    description:
      "Automatizamos WhatsApp, llamadas, agenda, ventas y procesos repetitivos con IA. Auditoría gratuita de 30 minutos.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${dmSans.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
