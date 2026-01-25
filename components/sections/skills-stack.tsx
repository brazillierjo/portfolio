"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TECH_STACK } from "@/lib/constants/personal";

export function SkillsStack() {
  const t = useTranslations("skills");

  const categories = [
    {
      key: "frontend",
      data: TECH_STACK.frontend,
      title: t("categories.frontend.title"),
      description: t("categories.frontend.description"),
    },
    {
      key: "mobile",
      data: TECH_STACK.mobile,
      title: t("categories.mobile.title"),
      description: t("categories.mobile.description"),
    },
    {
      key: "backend",
      data: TECH_STACK.backend,
      title: t("categories.backend.title"),
      description: t("categories.backend.description"),
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t("stack.title")}
          highlight=""
          subtitle={t("stack.subtitle")}
        />

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="mb-8 w-fit">
            <TabsTrigger value="frontend">{t("stack.frontend")}</TabsTrigger>
            <TabsTrigger value="mobile">{t("stack.mobile")}</TabsTrigger>
            <TabsTrigger value="backend">{t("stack.backend")}</TabsTrigger>
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.key} value={category.key}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-border bg-card pt-6 pb-6">
                  <CardHeader>
                    <CardTitle>{category.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {category.data.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-border bg-background hover:border-primary flex items-center gap-3 border p-3 transition-colors"
                        >
                          <div className="border-primary/30 bg-primary/10 flex h-10 w-10 items-center justify-center border">
                            <span className="text-primary font-mono text-xs font-bold">
                              {skill.name.slice(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{skill.name}</p>
                            <div className="bg-muted mt-1 h-1.5 w-full">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                                className="bg-primary h-full"
                              />
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {skill.level}%
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
