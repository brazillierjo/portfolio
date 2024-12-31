import { useI18n } from "vue-i18n";

export type IProject = {
  title: string;
  description: string;
  appUrl: string;
  codeUrl: string;
  technologies: string[];
};

export const useTranslatedProjects = (): IProject[] => {
  const { t } = useI18n();

  const projects: IProject[] = [
    {
      title: t("projects.items[0].title"),
      description: t("projects.items[0].description"),
      appUrl: t("projects.items[0].appUrl"),
      codeUrl: t("projects.items[0].codeUrl"),
      technologies: [
        t("projects.items[0].technologies[0]"),
        t("projects.items[0].technologies[1]"),
        t("projects.items[0].technologies[2]"),
        t("projects.items[0].technologies[3]"),
        t("projects.items[0].technologies[4]"),
        t("projects.items[0].technologies[5]"),
        t("projects.items[0].technologies[6]"),
        t("projects.items[0].technologies[7]"),
        t("projects.items[0].technologies[8]"),
      ],
    },
    {
      title: t("projects.items[1].title"),
      description: t("projects.items[1].description"),
      appUrl: t("projects.items[1].appUrl"),
      codeUrl: t("projects.items[1].codeUrl"),
      technologies: [t("projects.items[1].technologies[0]"), t("projects.items[1].technologies[1]")],
    },
    {
      title: t("projects.items[2].title"),
      description: t("projects.items[2].description"),
      appUrl: t("projects.items[2].appUrl"),
      codeUrl: t("projects.items[2].codeUrl"),
      technologies: [
        t("projects.items[2].technologies[0]"),
        t("projects.items[2].technologies[1]"),
        t("projects.items[2].technologies[2]"),
      ],
    },
    {
      title: t("projects.items[3].title"),
      description: t("projects.items[3].description"),
      appUrl: t("projects.items[3].appUrl"),
      codeUrl: t("projects.items[3].codeUrl"),
      technologies: [
        t("projects.items[3].technologies[0]"),
        t("projects.items[3].technologies[1]"),
        t("projects.items[3].technologies[2]"),
      ],
    },
    {
      title: t("projects.items[4].title"),
      description: t("projects.items[4].description"),
      appUrl: t("projects.items[4].appUrl"),
      codeUrl: t("projects.items[4].codeUrl"),
      technologies: [
        t("projects.items[4].technologies[0]"),
        t("projects.items[4].technologies[1]"),
        t("projects.items[4].technologies[2]"),
      ],
    },
  ];

  return projects;
};
