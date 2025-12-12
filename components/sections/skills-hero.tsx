"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { TerminalWindow, TypewriterText } from "@/components/ui/terminal-window";
import { TECH_STACK } from "@/lib/constants/personal";

export function SkillsHero() {
  const t = useTranslations("skills");

  const terminalContent = `> echo $CURRENT_STACK

{
  "role": "Full Stack Developer",
  "location": "Nice, France",
  "experience": "5+ ans",
  "specialties": ["TypeScript", "Next.js / Nuxt", "React Native"],
  "status": "Available for freelance"
}

> ./run_audit.sh --target-portfolio

✓ Optimisation du profil requis...
✓ Chargement des modules Core Web Vitals ... OK
✓ Analyse Performance ... 100/100

> Ready`;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t("title")}
          highlight={t("highlight")}
          subtitle={t("subtitle")}
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <TerminalWindow title="johan@portfolio ~ % ">
            <pre className="text-muted-foreground text-xs leading-relaxed whitespace-pre-wrap md:text-sm">
              <code>
                <span className="text-secondary">{">"}</span>{" "}
                <span className="text-primary">echo</span> $CURRENT_STACK
                {"\n\n"}
                <span className="text-foreground">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-accent">"role"</span>:{" "}
                <span className="text-secondary">"Full Stack Developer"</span>,
                {"\n"}
                {"  "}
                <span className="text-accent">"location"</span>:{" "}
                <span className="text-secondary">"Nice, France"</span>,{"\n"}
                {"  "}
                <span className="text-accent">"experience"</span>:{" "}
                <span className="text-secondary">"5+ ans"</span>,{"\n"}
                {"  "}
                <span className="text-accent">"specialties"</span>: [
                <span className="text-secondary">"TypeScript"</span>,{" "}
                <span className="text-secondary">"Next.js / Nuxt"</span>,{" "}
                <span className="text-secondary">"React Native"</span>],
                {"\n"}
                {"  "}
                <span className="text-accent">"status"</span>:{" "}
                <span className="text-secondary">"Available for freelance"</span>
                {"\n"}
                <span className="text-foreground">{"}"}</span>
                {"\n\n"}
                <span className="text-secondary">{">"}</span>{" "}
                <span className="text-primary">./run_audit.sh</span>{" "}
                <span className="text-muted-foreground">--target-portfolio</span>
                {"\n\n"}
                <span className="text-secondary">✓</span> Optimisation du profil requis...
                {"\n"}
                <span className="text-secondary">✓</span> Chargement des modules Core Web
                Vitals ... <span className="text-secondary">OK</span>
                {"\n"}
                <span className="text-secondary">✓</span> Analyse Performance ...{" "}
                <span className="text-primary">100/100</span>
                {"\n\n"}
                <span className="text-secondary">{">"}</span>{" "}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="bg-primary text-primary-foreground inline-block px-1"
                >
                  _
                </motion.span>
              </code>
            </pre>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
