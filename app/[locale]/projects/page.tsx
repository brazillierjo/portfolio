import { setRequestLocale } from "next-intl/server";
import { ProjectsCTA } from "@/components/sections/projects-cta";
import { ProjectsFeatured } from "@/components/sections/projects-featured";
import { ProjectsHero } from "@/components/sections/projects-hero";
import { ProjectsSecondary } from "@/components/sections/projects-secondary";

type Params = { locale: string };

export default async function ProjectsPage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ProjectsHero />
      <ProjectsFeatured />
      <ProjectsSecondary />
      <ProjectsCTA />
    </>
  );
}
