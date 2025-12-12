"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  highlight: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  highlight,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title} <span className="text-primary">{highlight}</span>
      </h2>
      {subtitle && (
        <p
          className={`text-muted-foreground mt-4 max-w-2xl text-lg ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
