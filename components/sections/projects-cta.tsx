"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PERSONAL_INFO } from "@/lib/constants/personal";

export function ProjectsCTA() {
  const t = useTranslations("projects.cta");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="border-border from-card via-card to-primary/5 overflow-hidden bg-gradient-to-br">
            <CardContent className="flex flex-col items-center p-8 text-center md:p-12">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="border-primary bg-primary/10 mb-6 flex h-20 w-20 items-center justify-center border-2"
              >
                <span className="text-primary font-mono text-3xl font-bold">?</span>
              </motion.div>

              <h2 className="mb-4 text-2xl font-bold md:text-3xl">{t("title")}</h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-xl">
                {t("description")}
              </p>
              <Button size="lg" className="gap-2" asChild>
                <a href={`mailto:${PERSONAL_INFO.email}`}>
                  {t("button")}
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
