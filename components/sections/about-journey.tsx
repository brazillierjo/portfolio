"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PERSONAL_INFO } from "@/lib/constants/personal";

export function AboutJourney() {
  const t = useTranslations("about");
  const locale = useLocale() as "fr" | "en" | "it";

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-primary mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              <h2 className="text-2xl font-bold">{t("journey.title")}</h2>
            </div>
            <p className="text-muted-foreground mb-6">{t("journey.description")}</p>
            <Button variant="outline" className="gap-2" asChild>
              <a href={PERSONAL_INFO.cv[locale]} download>
                <Download className="h-4 w-4" />
                {t("journey.downloadCV")}
              </a>
            </Button>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border-primary/50 bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{t("experience.current.title")}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t("experience.current.company")}
                      </p>
                    </div>
                    <Badge variant="default">{t("experience.current.period")}</Badge>
                  </div>
                  <ul className="space-y-2">
                    {(t.raw("experience.current.tasks") as string[]).map(
                      (task, index) => (
                        <li
                          key={index}
                          className="text-muted-foreground flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                          {task}
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{t("experience.previous.title")}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t("experience.previous.company")}
                      </p>
                    </div>
                    <Badge variant="secondary">PREV</Badge>
                  </div>
                  <ul className="space-y-2">
                    {(t.raw("experience.previous.tasks") as string[]).map(
                      (task, index) => (
                        <li
                          key={index}
                          className="text-muted-foreground flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="text-secondary mt-0.5 h-4 w-4 shrink-0" />
                          {task}
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
