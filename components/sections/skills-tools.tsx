"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { TECH_STACK } from "@/lib/constants/personal";

export function SkillsTools() {
  const t = useTranslations("skills.tools");

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
          <h3 className="text-muted-foreground mb-8 text-xs font-medium tracking-widest uppercase">
            {t("title")}
          </h3>
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {TECH_STACK.tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Badge
                  variant="outline"
                  className="border-border bg-card hover:border-primary hover:text-primary cursor-default px-4 py-2 text-sm transition-colors"
                >
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
