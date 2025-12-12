"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { PROJECTS } from "@/lib/constants/projects";
import { Link } from "@/i18n/navigation";

export function RecentProjectsSection() {
  const t = useTranslations("projects");
  const locale = useLocale() as "fr" | "en" | "it";
  const recentProjects = PROJECTS.slice(0, 2);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between">
          <SectionHeader
            title={t("title")}
            highlight={t("highlight")}
            subtitle={t("subtitle")}
          />
          <Button variant="link" className="hidden gap-2 md:flex" asChild>
            <Link href="/projects">
              {t("viewAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group border-border bg-card hover:border-primary/50 h-full overflow-hidden transition-colors">
                <div className="bg-muted relative aspect-video overflow-hidden">
                  <div className="from-primary/20 to-secondary/20 absolute inset-0 flex items-center justify-center bg-gradient-to-br">
                    <span className="text-primary/30 font-mono text-4xl font-bold">
                      {project.title[0]}
                    </span>
                  </div>
                  <div className="from-card absolute inset-0 bg-gradient-to-t to-transparent" />
                  <div className="absolute bottom-2 left-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category[locale]}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="group-hover:text-primary mb-2 text-lg font-semibold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                    {project.description[locale]}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.links.demo && (
                      <Button size="sm" variant="ghost" className="gap-1" asChild>
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {t("viewProject")}
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="ghost" className="gap-1" asChild>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-3 w-3" />
                          {t("viewCode")}
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="gap-2" asChild>
            <Link href="/projects">
              {t("viewAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
