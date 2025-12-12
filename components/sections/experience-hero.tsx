"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { PERSONAL_INFO } from "@/lib/constants/personal";

export function ExperienceHero() {
  const t = useTranslations("experience");
  const locale = useLocale() as "fr" | "en" | "it";

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            title={t("title")}
            highlight={t("highlight")}
            subtitle={t("subtitle")}
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="border-primary bg-primary/10 flex h-10 w-10 items-center justify-center border"
            >
              <Rss className="text-primary h-5 w-5" />
            </motion.div>
            <Button variant="default" className="gap-2" asChild>
              <a href={PERSONAL_INFO.cv[locale]} download>
                <Download className="h-4 w-4" />
                {t("downloadCV")}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
