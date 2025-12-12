"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { EXPERIENCES } from "@/lib/constants/experiences";

export function ExperienceTimeline() {
  const locale = useLocale() as "fr" | "en" | "it";

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="bg-border absolute top-0 left-4 h-full w-px md:left-1/2 md:-translate-x-px" />

          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-8 md:mb-12 ${
                index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%]"
              }`}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
                className={`absolute top-6 left-4 z-10 flex h-4 w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2 ${
                  experience.period.end === null
                    ? "bg-primary"
                    : "border-border bg-card border"
                }`}
              >
                {experience.period.end === null && (
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-primary-foreground h-2 w-2"
                  />
                )}
              </motion.div>

              {/* Card */}
              <Card
                className={`border-border bg-card hover:border-primary/50 ml-10 transition-colors md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-foreground font-semibold">
                        {experience.title[locale]}
                      </h3>
                      <div className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
                        <Building2 className="h-3 w-3" />
                        {experience.company}
                        {experience.location && ` • ${experience.location}`}
                      </div>
                    </div>
                    <Badge
                      variant={experience.period.end === null ? "default" : "secondary"}
                      className="shrink-0"
                    >
                      <Calendar className="mr-1 h-3 w-3" />
                      {experience.period.start}
                      {experience.period.end ? ` - ${experience.period.end}` : " - Now"}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm">
                    {experience.description[locale]}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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
