"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/lib/constants/personal";
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

const TECH_ICONS = [
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Nuxt", icon: "nuxt" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Vue.js", icon: "vue" },
  { name: "React", icon: "react" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Jest", icon: "jest" },
  { name: "Bun", icon: "bun" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "MySQL", icon: "mysql" },
  { name: "Figma", icon: "figma" },
];

function AnimatedCounter({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const spring = useSpring(0, { stiffness: 150, damping: 25 });
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    // Small delay to ensure we start from 0
    const timeout = setTimeout(() => {
      setHasStarted(true);
      spring.set(value);
    }, 100);
    return () => clearTimeout(timeout);
  }, [spring, value]);

  useEffect(() => {
    return display.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [display]);

  return <span>{hasStarted ? displayValue : 0}</span>;
}

function calculateYearsOfExperience(): number {
  const startDate = new Date("2020-01-01");
  const now = new Date();
  const years = (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(years);
}

export function HeroSection() {
  const t = useTranslations("hero");
  const yearsOfExperience = calculateYearsOfExperience();

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <div className="border-primary/50 relative h-24 w-24 overflow-hidden rounded-full border-2">
              <Image
                src="/images/avatar.png"
                alt={PERSONAL_INFO.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Badge
              variant="outline"
              className="border-primary/50 bg-primary/10 text-primary mb-6 px-4 py-1"
            >
              <span className="bg-primary mr-2 inline-block h-2 w-2 animate-pulse rounded-full" />
              {t("greeting")}
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          >
            {PERSONAL_INFO.name.split(" ")[0]}{" "}
            <span className="text-primary">
              {PERSONAL_INFO.name.split(" ").slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mb-4 text-xl md:text-2xl"
          >
            {t("subtitle")}{" "}
            <span className="text-foreground font-semibold">{t("highlight")}</span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mx-auto mb-8 max-w-2xl"
          >
            {t("description")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="gap-2" asChild>
              <Link href="/projects">
                {t("cta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href={`mailto:${PERSONAL_INFO.email}`}>
                {t("contact")}
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center justify-center gap-2">
              <span className="text-primary text-4xl font-bold md:text-5xl">
                <AnimatedCounter value={yearsOfExperience} />+
              </span>
              <span className="text-muted-foreground text-left text-xs font-medium uppercase">
                {t("yearsExperience")}
              </span>
            </div>

            <p className="text-muted-foreground text-xs font-medium tracking-widest uppercase">
              {t("stackTitle")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {TECH_ICONS.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="group relative"
                >
                  <div className="bg-card border-border hover:border-primary flex h-14 w-14 items-center justify-center rounded-full border-2 transition-colors">
                    <TechIcon name={tech.icon} />
                  </div>
                  <span className="bg-card text-foreground pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}

function TechIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    typescript: (
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width={28} height={28} />
    ),
    javascript: (
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width={28} height={28} />
    ),
    nuxt: (
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" alt="Nuxt" width={28} height={28} />
    ),
    nextjs: (
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" width={28} height={28} />
    ),
    vue: (
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" width={28} height={28} />
    ),
    react: (
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={28} height={28} />
    ),
    tailwind: (
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" width={28} height={28} />
    ),
    jest: (
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest" width={28} height={28} />
    ),
    bun: (
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" alt="Bun" width={28} height={28} />
    ),
    nodejs: (
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width={28} height={28} />
    ),
    express: (
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" width={28} height={28} />
    ),
    mongodb: (
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width={28} height={28} />
    ),
    mysql: (
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width={28} height={28} />
    ),
    figma: (
      <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" width={28} height={28} />
    ),
  };

  return icons[name] || <div className="bg-muted h-7 w-7 rounded" />;
}
