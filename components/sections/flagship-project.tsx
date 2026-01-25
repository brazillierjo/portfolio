"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Server, Bot, Globe, Instagram, Mic } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";

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
  mobile: ["React Native", "Expo", "TypeScript", "Zustand", "TanStack Query", "LiveKit", "i18next", "RevenueCat"],
  backend: ["Hono", "Node.js", "Supabase", "PostgreSQL", "Zod", "JWT", "Sentry"],
  agent: ["Python", "LiveKit Agents", "Google Gemini Live", "Silero VAD"],
  infra: ["Docker", "Caddy", "GitHub Actions", "VPS Hostinger"],
};

export function FlagshipProjectSection() {
  const t = useTranslations("flagshipProject");

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <Badge
              variant="outline"
              className="border-primary/50 bg-primary/10 text-primary px-4 py-1"
            >
              {t("badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {t("title")} <span className="text-primary">{t("highlight")}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: App Preview */}
            <motion.div variants={itemVariants} className="relative flex justify-center">
              <div className="relative">
                <IPhoneMockup
                  src="/projects/mio-screen.png"
                  alt="Mio App Screenshot"
                />
                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -left-4 top-1/4 bg-card border border-border rounded-lg px-3 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Mic className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{t("features.voiceAI")}</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -right-4 top-1/2 bg-card border border-border rounded-lg px-3 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Bot className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Gemini 2.5</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg px-3 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{t("features.languages")}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold">Mio</h3>
                <p className="text-primary font-medium">{t("tagline")}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {t("description")}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3">
                {["talk", "practice", "roleplay", "progress"].map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm">{t(`modes.${feature}`)}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="gap-2">
                <a href="https://mio-tutor.vercel.app/fr" target="_blank" rel="noopener noreferrer">
                  {t("cta")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Architecture Overview */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-xl font-semibold text-center">{t("architecture.title")}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {ARCHITECTURE_COMPONENTS.map(({ icon: Icon, key }) => (
                <motion.div
                  key={key}
                  whileHover={{ y: -4 }}
                  className="bg-card border border-border rounded-xl p-4 text-center space-y-2"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{t(`architecture.${key}`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-center">{t("techStack.title")}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(TECH_STACK).map(([category, techs]) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-sm font-medium text-primary uppercase tracking-wider">
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
