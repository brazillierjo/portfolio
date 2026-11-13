// Français de Suisse romande : la version française, avec les usages suisses
// repris du CV CH (poste fixe, mandats indépendants, dates 05.2026,
// diplômes avec leur équivalence CEC, permis B, taux d'activité).
import { ACTIVITY, AGENT_SHARE } from "@/data/profile";
import { fr } from "./fr";
import { n, type Copy } from "./types";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends (infer U)[] ? U[] : T[K] extends object ? DeepPartial<T[K]> : T[K];
};

function merge<T>(base: T, over: DeepPartial<T>): T {
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [k, v] of Object.entries(over)) {
    const b = (base as Record<string, unknown>)[k];
    out[k] =
      v &&
      typeof v === "object" &&
      !Array.isArray(v) &&
      typeof v !== "function" &&
      b &&
      typeof b === "object" &&
      !Array.isArray(b)
        ? merge(b, v as DeepPartial<typeof b>)
        : v;
  }
  return out as T;
}

export const ch: Copy = merge(fr, {
  meta: {
    description:
      "AI Full Stack Engineer. Je conçois et je mets en production des produits IA complets sur iOS, Android, web et macOS, avec Claude Code et Codex.",
    ogLocale: "fr_CH",
  },
  method: {
    chartCaption: `${n("ch", ACTIVITY.total)} commits sur ${ACTIVITY.repos} dépôts en 2026, ${ACTIVITY.activeDays} jours actifs sur ${ACTIVITY.days.length}. ${AGENT_SHARE} % sont co-signés par un agent.`,
  },
  missions: {
    title: "Mandats en 2026",
    intro: "En mandats indépendants, au sein d'équipes produit, sur des bases de code existantes.",
    items: [
      { ...fr.missions.items[0]!, period: "Depuis 05.2026" },
      { ...fr.missions.items[1]!, period: "03.2026 – 07.2026, puis depuis 10.2026" },
      { ...fr.missions.items[2]!, period: "Depuis 07.2026" },
    ],
  },
  path: {
    jobsTitle: "Expérience",
    jobs: [
      {
        ...fr.path.jobs[0]!,
        period: "11.2025 – aujourd'hui",
        text: "Mandats pour Shinobi Japanese, Big Mamma Group et Swipelink, et mes propres produits : Mio, FastFlix et Shelltown.",
      },
      { ...fr.path.jobs[1]!, period: "05.2025 – 11.2025" },
      { ...fr.path.jobs[2]!, period: "09.2024 – 05.2025", place: "Le Bourget-du-Lac (FR)" },
      { ...fr.path.jobs[3]!, period: "06.2022 – 08.2024", place: "Hyères (FR)" },
      { ...fr.path.jobs[4]!, period: "02.2021 – 02.2022", place: "Nice (FR)" },
      { ...fr.path.jobs[5]!, period: "07.2014 – 09.2020", place: "La Londe-les-Maures (FR)" },
    ],
    schoolTitle: "Formation et diplômes",
    schools: [
      {
        period: "2020 – 2021",
        role: "Développement web et mobile",
        company: "3WAcademy",
        place: "Licence Bac+3, équivalent Bachelor (niveau 6 CEC)",
        text: "",
      },
      {
        period: "2020",
        role: "Développement web",
        company: "OpenClassrooms",
        place: "Titre professionnel d'État (RNCP) Bac+2, niveau 5 CEC",
        text: "",
      },
      {
        period: "2016 – 2017",
        role: "E-commerce et marketing numérique",
        company: "Université de Toulon",
        place: "Licence Bac+3, équivalent Bachelor (niveau 6 CEC)",
        text: "",
      },
    ],
    languages: [
      ["Français", "langue maternelle"],
      ["Anglais", "C1, courant, usage professionnel"],
      ["Italien", "B1, intermédiaire"],
    ],
  },
  contact: {
    cv: [
      { lang: "ch", label: "Français (Suisse)" },
      { lang: "fr", label: "Français (France)" },
      { lang: "en", label: "English" },
      { lang: "it", label: "Italiano" },
    ],
  },
});
