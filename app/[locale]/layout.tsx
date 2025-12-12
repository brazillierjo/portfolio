import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { routing } from "@/i18n/routing";

type Params = { locale: string };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    fr: "Johan R. BRAZILLIER - Développeur Full Stack & Expert SEO",
    en: "Johan R. BRAZILLIER - Full Stack Developer & SEO Expert",
    it: "Johan R. BRAZILLIER - Sviluppatore Full Stack & Esperto SEO",
  };

  const descriptions: Record<string, string> = {
    fr: "Développeur Web Expert React, Next.js, Nuxt & TypeScript. 10 ans d'expérience.",
    en: "Web Developer Expert in React, Next.js, Nuxt & TypeScript. 10 years of experience.",
    it: "Sviluppatore Web Esperto in React, Next.js, Nuxt & TypeScript. 10 anni di esperienza.",
  };

  return {
    title: titles[locale] || titles.fr,
    description: descriptions[locale] || descriptions.fr,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "en" | "it")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <AnimatedBackground />
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
