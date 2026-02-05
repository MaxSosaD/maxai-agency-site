import { NextRequest, NextResponse } from "next/server";
import {
  defaultLocale,
  isLocale,
  pickLocaleFromHeaders,
  spanishCountryCodes,
} from "@/lib/i18n";

export const config = {
  matcher: [
    // Skip Next internals + static
    "/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // If path already includes a locale, continue.
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first && isLocale(first)) return NextResponse.next();

  // Decide locale: geo country -> ES for spanish-speaking, otherwise EN.
  const country = (req.headers.get("x-vercel-ip-country") ?? "").toUpperCase();
  let locale = defaultLocale;

  if (country && spanishCountryCodes.has(country)) {
    locale = "es";
  } else {
    // fallback to browser language
    locale = pickLocaleFromHeaders(req.headers.get("accept-language"));
  }

  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}
