import { setRequestLocale } from "next-intl/server";
import { ContactSection } from "@/components/sections/contact";

type Params = { locale: string };

export default async function ContactPage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactSection />;
}
