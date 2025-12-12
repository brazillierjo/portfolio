import { setRequestLocale } from "next-intl/server";
import { ExperienceCTA } from "@/components/sections/experience-cta";
import { ExperienceHero } from "@/components/sections/experience-hero";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";

type Params = { locale: string };

export default async function ExperiencePage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ExperienceHero />
      <ExperienceTimeline />
      <ExperienceCTA />
    </>
  );
}
