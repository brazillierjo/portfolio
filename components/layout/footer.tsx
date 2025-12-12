"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Github, Linkedin, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants/personal";

const socialLinks = [
  {
    name: "LinkedIn",
    href: PERSONAL_INFO.social.linkedin,
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: PERSONAL_INFO.social.github,
    icon: Github,
  },
];

export function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-border bg-card/50 border-t"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="border-primary bg-primary/10 flex h-8 w-8 items-center justify-center border">
              <Terminal className="text-primary h-4 w-4" />
            </div>
            <span className="font-mono text-sm">
              © {currentYear} {PERSONAL_INFO.name}. {t("rights")}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background hover:border-primary hover:text-primary flex h-10 w-10 items-center justify-center border transition-colors"
              >
                <link.icon className="h-4 w-4" />
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
