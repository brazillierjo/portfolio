import { setRequestLocale } from "next-intl/server";
import { SkillsCTA } from "@/components/sections/skills-cta";
import { SkillsHero } from "@/components/sections/skills-hero";
import { SkillsLevels } from "@/components/sections/skills-levels";
import { SkillsStack } from "@/components/sections/skills-stack";
import { SkillsTools } from "@/components/sections/skills-tools";

type Params = { locale: string };

export default async function SkillsPage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SkillsHero />
      <SkillsStack />
      <SkillsLevels />
      <SkillsTools />
      <SkillsCTA />
    </>
  );
}
