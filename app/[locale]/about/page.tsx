import { setRequestLocale } from "next-intl/server";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutJourney } from "@/components/sections/about-journey";
import { AboutPhilosophy } from "@/components/sections/about-philosophy";
import { AboutWhy } from "@/components/sections/about-why";

type Params = { locale: string };

export default async function AboutPage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AboutHero />
      <AboutJourney />
      <AboutPhilosophy />
      <AboutWhy />
    </>
  );
}
