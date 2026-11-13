// Données qui ne changent pas d'une langue à l'autre.
import activity from "./activity.json";

export const PROFILE = {
  name: "Johan Rincon-Brazillier",
  shortName: "Johan R-B",
  role: "AI Full Stack Engineer",
  email: "j.brazillier@gmail.com",
  // Le numéro est assemblé côté client pour rester hors du HTML statique (robots).
  phoneParts: ["+33", "6", "38", "02", "76", "49"],
  linkedin: "https://www.linkedin.com/in/johan-r-brazillier/",
  github: "https://github.com/brazillierjo",
  site: "https://brazillierjohan.fr",
  yearsOfExperience: 7,
  // Propriété Google Analytics « brazillierjohan.fr » (flux web « portfolio »)
  gaId: "G-FNN0Z7L0TK",
  cv: {
    fr: "/cv/CV-Johan-Rincon-Brazillier-FR.pdf",
    ch: "/cv/CV-Johan-Rincon-Brazillier-CH.pdf",
    en: "/cv/CV-Johan-Rincon-Brazillier-EN.pdf",
    it: "/cv/CV-Johan-Rincon-Brazillier-IT.pdf",
  },
} as const;

export const LINKS = {
  mio: {
    site: "https://www.miotutor.app",
    appStore: "https://apps.apple.com/app/mio-language-tutor/id6756390381",
    play: "https://play.google.com/store/apps/details?id=com.bzrjoh.miotutor",
  },
  shelltown: { site: "https://shelltown.app" },
  fastflix: {
    site: "https://fastflix-movie.com",
    appStore: "https://apps.apple.com/app/id6746981485",
    play: "https://play.google.com/store/apps/details?id=com.fastflix.app",
  },
} as const;

export const ACTIVITY = activity;
export const AGENT_SHARE = Math.round((activity.withAgent / activity.total) * 100);
