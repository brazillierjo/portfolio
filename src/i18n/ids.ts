import type { Lang } from "./types";

// Ancres de la page, traduites pour que l'URL partagée reste lisible.
const fr = {
  projects: "projets",
  method: "methode",
  missions: "missions",
  path: "parcours",
  contact: "contact",
};
export const IDS: Record<Lang, typeof fr> = {
  fr,
  ch: fr,
  en: {
    projects: "projects",
    method: "method",
    missions: "clients",
    path: "background",
    contact: "contact",
  },
  it: {
    projects: "progetti",
    method: "metodo",
    missions: "clienti",
    path: "percorso",
    contact: "contatti",
  },
};
