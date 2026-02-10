export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

// Very small i18n helper (no external deps).
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const spanishCountryCodes = new Set([
  "MX",
  "ES",
  "CO",
  "AR",
  "CL",
  "PE",
  "EC",
  "GT",
  "CU",
  "BO",
  "DO",
  "HN",
  "PY",
  "SV",
  "NI",
  "CR",
  "PA",
  "UY",
  "VE",
  "PR",
]);

export function pickLocaleFromHeaders(acceptLanguage: string | null | undefined): Locale {
  const al = (acceptLanguage ?? "").toLowerCase();
  if (al.includes("es")) return "es";
  return "en";
}
