"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { PERSONAL_INFO } from "@/lib/constants/personal";

export function AboutHero() {
  const t = useTranslations("about");

  const skills = [
    { key: "react", label: t("skills.react") },
    { key: "node", label: t("skills.node") },
    { key: "seo", label: t("skills.seo") },
    { key: "performance", label: t("skills.performance") },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto mb-8 h-32 w-32"
          >
            <div className="border-primary/50 absolute inset-0 animate-pulse rounded-full border-2" />
            <div className="border-border from-primary/20 to-secondary/20 absolute inset-2 rounded-full border bg-gradient-to-br" />
            <div className="bg-card absolute inset-4 flex items-center justify-center rounded-full">
              <span className="text-primary font-mono text-2xl font-bold">
                {PERSONAL_INFO.initials}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            {t("title")} <span className="text-primary">{t("highlight")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <Badge variant="outline" className="border-border bg-card px-4 py-2">
                  {skill.label}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
