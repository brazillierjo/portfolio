"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Globe, Instagram, Mic, Server, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";
import { Link } from "@/i18n/navigation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ARCHITECTURE_COMPONENTS = [
  { icon: Smartphone, key: "mobileApp" },
  { icon: Server, key: "backendApi" },
  { icon: Mic, key: "voiceAgent" },
  { icon: Bot, key: "aiEngine" },
  { icon: Globe, key: "website" },
  { icon: Instagram, key: "socialAutomation" },
];

const TECH_STACK = {
  mobile: [
    "React Native",
    "Expo",
    "TypeScript",
    "Zustand",
    "TanStack Query",
    "LiveKit",
    "i18next",
    "RevenueCat",
  ],
  backend: ["Hono", "Node.js", "Supabase", "PostgreSQL", "Zod", "JWT", "Sentry"],
  agent: ["Python", "LiveKit Agents", "Google Gemini Live", "Silero VAD"],
  infra: ["Docker", "Caddy", "GitHub Actions", "VPS Hostinger"],
};

export function FlagshipProjectSection() {
  const t = useTranslations("flagshipProject");

  return (
    <section className="relative overflow-hidden py-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <Badge
              variant="outline"
              className="border-primary/50 bg-primary/10 text-primary px-4 py-1"
            >
              {t("badge")}
            </Badge>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              {t("title")} <span className="text-primary">{t("highlight")}</span>
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">{t("subtitle")}</p>
          </motion.div>

          {/* Main Content */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: App Preview */}
            <motion.div variants={itemVariants} className="relative flex justify-center">
              <div className="relative">
                <IPhoneMockup src="/projects/mio-screen.png" alt="Mio App Screenshot" />
                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-card border-border absolute top-1/4 -left-4 rounded-lg border px-3 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Mic className="text-primary h-4 w-4" />
                    <span className="text-sm font-medium">{t("features.voiceAI")}</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-card border-border absolute top-1/2 -right-4 rounded-lg border px-3 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Bot className="text-primary h-4 w-4" />
                    <span className="text-sm font-medium">Gemini 2.5</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="bg-card border-border absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-lg border px-3 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="text-primary h-4 w-4" />
                    <span className="text-sm font-medium">{t("features.languages")}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold md:text-3xl">Mio</h3>
                <p className="text-primary font-medium">{t("tagline")}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">{t("description")}</p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3">
                {["talk", "practice", "roleplay", "progress"].map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <div className="bg-primary mt-2 h-2 w-2 shrink-0 rounded-full" />
                    <span className="text-sm">{t(`modes.${feature}`)}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="gap-2">
                  <a
                    href="https://miotutor.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("cta")}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild className="gap-2">
                  <a
                    href="https://miotutor.app/links"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("download")}
                    <Smartphone className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Architecture Overview */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-center text-xl font-semibold">
              {t("architecture.title")}
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {ARCHITECTURE_COMPONENTS.map(({ icon: Icon, key }) => (
                <motion.div
                  key={key}
                  whileHover={{ y: -4 }}
                  className="bg-card border-border space-y-2 rounded-xl border p-4 text-center"
                >
                  <div className="bg-primary/10 mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                    <Icon className="text-primary h-6 w-6" />
                  </div>
                  <p className="text-sm font-medium">{t(`architecture.${key}`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-center text-xl font-semibold">{t("techStack.title")}</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {Object.entries(TECH_STACK).map(([category, techs]) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-primary text-sm font-medium tracking-wider uppercase">
                    {t(`techStack.${category}`)}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Button variant="outline" asChild className="gap-2">
              <Link href="/projects">
                {t("viewAllProjects")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
