"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PERSONAL_INFO } from "@/lib/constants/personal";
import { Link } from "@/i18n/navigation";

export function SkillsCTA() {
  const t = useTranslations("skills.cta");

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
            <CardContent className="p-8 text-center md:p-12">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">{t("title")}</h2>
              <p className="text-muted-foreground mx-auto mb-8 max-w-xl">
                {t("description")}
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/projects">
                    {t("projects")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href={`mailto:${PERSONAL_INFO.email}`}>
                    {t("contact")}
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
