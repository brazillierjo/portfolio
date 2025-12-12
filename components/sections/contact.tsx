"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PERSONAL_INFO } from "@/lib/constants/personal";

export function ContactSection() {
  const t = useTranslations("contact");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString("en-US", {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[calc(100vh-4rem)] py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="border-primary/50 bg-primary/10 text-primary mb-6 px-4 py-1"
            >
              <span className="bg-primary mr-2 inline-block h-2 w-2 animate-pulse rounded-full" />
              {t("available")}
            </Badge>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t("title")}
              <br />
              <span className="text-primary">{t("highlight")}</span>
            </h1>

            <p className="text-muted-foreground mb-8 max-w-md text-lg">
              {t("description")}
            </p>

            <div className="mb-8 space-y-4">
              <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="border-border bg-card hover:border-primary flex items-center gap-4 border p-4 transition-colors"
              >
                <div className="border-border bg-background flex h-10 w-10 items-center justify-center border">
                  <Mail className="text-muted-foreground h-5 w-5" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">{t("email")}</p>
                  <p className="hover:text-primary font-medium transition-colors">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="border-border bg-card flex items-center gap-4 border p-4"
              >
                <div className="border-border bg-background flex h-10 w-10 items-center justify-center border">
                  <MapPin className="text-muted-foreground h-5 w-5" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">{t("location")}</p>
                  <p className="font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </motion.div>
            </div>

            <div className="mb-8 flex flex-wrap gap-3">
              <Button variant="outline" className="gap-2" asChild>
                <a
                  href={PERSONAL_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a
                  href={PERSONAL_INFO.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground flex items-center gap-2 font-mono text-sm"
            >
              <Clock className="text-primary h-4 w-4" />
              {t("localTime")} {currentTime} (CET)
            </motion.div>
          </motion.div>

          {/* Right side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <Card className="border-primary/30 from-card to-primary/5 w-full overflow-hidden bg-gradient-to-br">
              <CardContent className="flex flex-col items-center p-8 text-center md:p-12">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="border-primary bg-primary/10 mb-6 flex h-20 w-20 items-center justify-center border-2"
                >
                  <Mail className="text-primary h-10 w-10" />
                </motion.div>

                <h2 className="mb-4 text-2xl font-bold md:text-3xl">{t("cta.title")}</h2>
                <p className="text-muted-foreground mx-auto mb-8 max-w-md">
                  {t("cta.description")}
                </p>
                <Button size="lg" className="gap-2" asChild>
                  <a href={`mailto:${PERSONAL_INFO.email}`}>
                    {t("cta.button")}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
