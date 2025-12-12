"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";
import { PROJECTS } from "@/lib/constants/projects";

export function ProjectsGrid() {
  const t = useTranslations("projects");
  const locale = useLocale() as "fr" | "en" | "it";

  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold">{t("recent")}</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group border-border bg-card hover:border-primary/50 h-full overflow-hidden transition-all">
                <div className="from-muted to-muted/50 relative overflow-hidden bg-gradient-to-br">
                  {project.isApp ? (
                    <div className="flex aspect-[4/3] items-center justify-center p-4">
                      <div className="relative w-[120px]">
                        <div className="relative rounded-[1.5rem] border-[6px] border-zinc-800 bg-zinc-900 p-0.5 dark:border-zinc-700">
                          <div className="absolute top-1 left-1/2 z-20 h-3 w-12 -translate-x-1/2 rounded-full bg-zinc-900" />
                          <div className="from-primary/20 to-secondary/20 relative aspect-[9/19.5] overflow-hidden rounded-[1.2rem] bg-gradient-to-br">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-primary/50 font-mono text-2xl font-bold">
                                {project.title[0]}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-video">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          initial={{ opacity: 0.3 }}
                          whileHover={{ opacity: 0.5, scale: 1.1 }}
                          className="text-primary/20 font-mono text-6xl font-bold"
                        >
                          {project.title[0]}
                        </motion.span>
                      </div>
                      <div className="from-card absolute inset-0 bg-gradient-to-t to-transparent" />
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <Badge variant="secondary">{project.category[locale]}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="group-hover:text-primary mb-2 text-xl font-semibold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                    {project.description[locale]}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
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
                          Demo
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
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
