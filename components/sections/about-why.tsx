"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PERSONAL_INFO } from "@/lib/constants/personal";

export function AboutWhy() {
  const t = useTranslations("about.why");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="border-primary/30 from-card to-primary/5 overflow-hidden bg-gradient-to-br">
            <CardContent className="p-8 md:p-12">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                {t("title")} <span className="text-primary">{t("highlight")}</span> ?
              </h2>
              <p className="text-muted-foreground mb-4 text-lg">{t("description")}</p>
              <p className="mb-8 text-lg">
                <span className="text-primary font-semibold">{t("conclusion")}</span>
              </p>
              <Button size="lg" className="gap-2" asChild>
                <a href={`mailto:${PERSONAL_INFO.email}`}>
                  {t("cta")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
