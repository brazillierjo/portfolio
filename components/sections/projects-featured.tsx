"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IPhoneMockup } from "@/components/ui/iphone-mockup";
import { PROJECTS } from "@/lib/constants/projects";

export function ProjectsFeatured() {
  const t = useTranslations("projects");
  const locale = useLocale() as "fr" | "en" | "it";

  const featuredProjects = PROJECTS.filter((p) => p.featured);

  if (featuredProjects.length === 0) return null;

  return (
    <section className="pb-20">
      <div className="container mx-auto px-4">
        <Badge variant="outline" className="mb-4">
          {t("featured")}
        </Badge>

        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-primary/30 bg-card overflow-hidden">
                <div
                  className={`grid gap-6 md:grid-cols-2 ${index % 2 === 1 ? "md:[direction:rtl]" : ""}`}
                >
                  <div className="from-primary/10 via-background to-secondary/10 relative flex min-h-[400px] items-center justify-center bg-gradient-to-br p-8 md:min-h-[500px] md:[direction:ltr]">
                    {project.isApp ? (
                      <IPhoneMockup src={project.image} alt={project.title} />
                    ) : (
                      <div className="border-border bg-card relative aspect-video w-full overflow-hidden border">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="border-primary bg-card flex h-32 w-32 items-center justify-center border-2"
                          >
                            <span className="text-primary font-mono text-4xl font-bold">
                              {project.title[0]}
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </div>

                  <CardContent className="flex flex-col justify-center p-6 md:p-8 md:[direction:ltr]">
                    <Badge variant="secondary" className="mb-4 w-fit">
                      {project.category[locale]}
                    </Badge>
                    <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {project.description[locale]}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.links.demo && (
                        <Button className="gap-2" asChild>
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t("viewProject")}
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.links.github && (
                        <Button variant="outline" className="gap-2" asChild>
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                            {t("viewCode")}
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
