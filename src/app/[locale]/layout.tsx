import { isLocale, type Locale } from "@/lib/i18n";

export default async function LocaleLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (await import("next/navigation")).notFound();
  }

  return <div data-locale={locale as Locale}>{children}</div>;
}
