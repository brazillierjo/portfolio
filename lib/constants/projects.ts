export interface Project {
  id: string;
  slug: string;
  title: string;
  category: {
    fr: string;
    en: string;
    it: string;
  };
  description: {
    fr: string;
    en: string;
    it: string;
  };
  image: string;
  technologies: string[];
  featured: boolean;
  isApp?: boolean;
  status: "production" | "development" | "completed";
  links: {
    demo?: string;
    github?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: "mio",
    slug: "mio",
    title: "Mio",
    category: {
      fr: "APPLICATION SAAS",
      en: "SAAS APP",
      it: "APP SAAS",
    },
    description: {
      fr: "Application mobile d'apprentissage des langues propulsée par l'IA. Conversations avec un tuteur IA, quiz de grammaire, jeux de rôle immersifs et suivi de progression (série, XP, niveau). Architecture complète : app React Native, API backend et site marketing. Code source privé, échangeons si vous souhaitez en savoir plus.",
      en: "AI-powered language learning mobile app. Conversations with an AI tutor, grammar quizzes, immersive role-playing and progress tracking (streaks, XP, level). Complete architecture: React Native app, backend API and marketing website. Private source code, let's discuss if you'd like to know more.",
      it: "App mobile per l'apprendimento delle lingue alimentata dall'IA. Conversazioni con un tutor IA, quiz di grammatica, giochi di ruolo immersivi e monitoraggio dei progressi (serie, XP, livello). Architettura completa: app React Native, API backend e sito marketing. Codice sorgente privato, parliamone se vuoi saperne di più.",
    },
    image: "/projects/mio-screen.png",
    technologies: ["React Native", "Expo", "TypeScript", "Next.js", "Google Gemini", "Supabase"],
    featured: true,
    isApp: true,
    status: "production",
    links: {
      demo: "https://mio-tutor.vercel.app/fr",
    },
  },
  {
    id: "fastflix",
    slug: "fastflix",
    title: "FastFlix",
    category: {
      fr: "APPLICATION MOBILE",
      en: "MOBILE APP",
      it: "APP MOBILE",
    },
    description: {
      fr: "Application mobile de recommandations de films et séries TV propulsée par l'intelligence artificielle. L'utilisateur décrit ce qu'il souhaite regarder en langage naturel et l'IA propose des suggestions personnalisées.",
      en: "AI-powered mobile app for movie and TV series recommendations. Users describe what they want to watch in natural language and the AI suggests personalized content.",
      it: "App mobile di raccomandazioni di film e serie TV alimentata dall'intelligenza artificiale. L'utente descrive cosa vuole guardare in linguaggio naturale e l'IA suggerisce contenuti personalizzati.",
    },
    image: "/projects/fastflix-screen.png",
    technologies: [
      "React Native",
      "Expo",
      "Next.js",
      "TypeScript",
      "Turso",
      "Google Gemini",
      "RevenueCat",
    ],
    featured: true,
    isApp: true,
    status: "production",
    links: {
      demo: "https://fastflix-website.vercel.app",
      github: "https://github.com/brazillierjo/fastflix",
    },
  },
];

export const SECONDARY_PROJECTS = [
  {
    id: "wallet",
    title: "Wallet",
    description: {
      fr: "Application de gestion de portefeuille personnel pour visualiser ses dépenses",
      en: "Personal portfolio management app to visualize expenses",
      it: "App di gestione del portafoglio personale per visualizzare le spese",
    },
    technologies: ["Next.js", "TypeScript", "Elysia.js", "Prisma"],
    links: {
      github: "https://github.com/brazillierjo/wallet",
    },
  },
  {
    id: "cv-generator",
    title: "CV Generator",
    description: {
      fr: "Générateur de CV personnalisables à partir de données JSON avec export PDF",
      en: "Customizable CV generator from JSON data with PDF export",
      it: "Generatore di CV personalizzabili da dati JSON con esportazione PDF",
    },
    technologies: ["Nuxt 3", "Vue.js", "TypeScript", "Puppeteer"],
    links: {
      github: "https://github.com/brazillierjo/cv-generator",
    },
  },
  {
    id: "ma-seance",
    title: "Ma Séance",
    description: {
      fr: "Application web mobile-first de génération de séances d'entraînement sportif",
      en: "Mobile-first web app for generating workout sessions",
      it: "App web mobile-first per la generazione di sessioni di allenamento",
    },
    technologies: ["React", "TypeScript", "Redux Toolkit"],
    links: {
      github: "https://github.com/brazillierjo/ma-seance",
    },
  },
  {
    id: "piano",
    title: "Piano",
    description: {
      fr: "Piano virtuel interactif jouable au clavier ou à la souris",
      en: "Interactive virtual piano playable with keyboard or mouse",
      it: "Piano virtuale interattivo suonabile con tastiera o mouse",
    },
    technologies: ["HTML5", "CSS3", "JavaScript"],
    links: {
      demo: "https://brazillierjo.github.io/piano",
      github: "https://github.com/brazillierjo/piano",
    },
  },
  {
    id: "calculator",
    title: "Calculator",
    description: {
      fr: "Calculatrice web avec gestion de thèmes multiples",
      en: "Web calculator with multiple theme management",
      it: "Calcolatrice web con gestione di temi multipli",
    },
    technologies: ["HTML5", "CSS3", "JavaScript"],
    links: {
      demo: "https://brazillierjo.github.io/calculator",
      github: "https://github.com/brazillierjo/calculator",
    },
  },
  {
    id: "markdown-editor",
    title: "Markdown Editor",
    description: {
      fr: "Éditeur Markdown avec preview en temps réel",
      en: "Markdown editor with real-time preview",
      it: "Editor Markdown con anteprima in tempo reale",
    },
    technologies: ["React", "JavaScript"],
    links: {
      github: "https://github.com/brazillierjo/markdown",
    },
  },
];
