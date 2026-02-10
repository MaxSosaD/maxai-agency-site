import { NextRequest, NextResponse } from "next/server";
import { isLocale } from "@/lib/i18n";

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

  // Default locale: ES (initial audience).
  // Users can switch to EN with the language toggle.
  const locale = "es";

  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}
