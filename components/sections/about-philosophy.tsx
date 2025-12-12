"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code2, Repeat, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

const philosophyItems = [
  {
    key: "cleanCode",
    icon: Code2,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/50",
  },
  {
    key: "agile",
    icon: Repeat,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/50",
  },
  {
    key: "performance",
    icon: Zap,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/50",
  },
];

export function AboutPhilosophy() {
  const t = useTranslations("about.philosophy");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t("title")}
          highlight=""
          subtitle={t("subtitle")}
          align="center"
        />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full border ${item.borderColor} bg-card transition-all hover:scale-105`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center ${item.bgColor}`}
                  >
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <h3 className="mb-2 font-semibold">{t(`${item.key}.title`)}</h3>
                  <p className="text-muted-foreground text-sm">
                    {t(`${item.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
