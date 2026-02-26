import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "MaxAI — AI Automation Agency",
  description:
    "MaxAI helps companies identify, build, deploy, and scale AI solutions that move the needle.",
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
      <body
        className={`${dmSans.variable} ${outfit.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
