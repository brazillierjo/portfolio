"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SECONDARY_PROJECTS } from "@/lib/constants/projects";

export function ProjectsSecondary() {
  const t = useTranslations("projects");
  const locale = useLocale() as "fr" | "en" | "it";

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-muted-foreground mb-8 text-xl font-bold">{t("secondary")}</h2>

        <div className="space-y-3">
          {SECONDARY_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group border-border bg-card hover:border-primary/50 flex items-center gap-4 border p-4 transition-colors"
            >
              <div className="border-border bg-background group-hover:border-primary group-hover:bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center border transition-colors">
                <Terminal className="text-muted-foreground group-hover:text-primary h-5 w-5 transition-colors" />
              </div>

              <div className="flex-1">
                <h3 className="group-hover:text-primary font-medium transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description[locale]}
                </p>
              </div>

              <div className="hidden gap-1 md:flex">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
