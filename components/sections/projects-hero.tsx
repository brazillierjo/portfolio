"use client";

import { useTranslations } from "next-intl";
import { SectionHeader } from "@/components/ui/section-header";

export function ProjectsHero() {
  const t = useTranslations("projects");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Mes"
          highlight={t("highlight")}
          subtitle="Développement Web & Stratégie SEO à Nice. Une sélection de projets alliant performance et design."
        />
      </div>
    </section>
  );
}
