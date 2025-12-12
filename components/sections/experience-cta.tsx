"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/lib/constants/personal";

export function ExperienceCTA() {
  const t = useTranslations("experience.cta");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6 text-lg">{t("title")}</p>
          <Button size="lg" className="gap-2" asChild>
            <a href={`mailto:${PERSONAL_INFO.email}`}>
              <Mail className="h-4 w-4" />
              {t("button")}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
