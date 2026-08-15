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
      fr: "APPLICATION SAAS COMPLÈTE",
      en: "FULL-STACK SAAS APP",
      it: "APP SAAS COMPLETA",
    },
    description: {
      fr: "Mon projet le plus ambitieux : une plateforme complète d'apprentissage des langues propulsée par l'IA. L'application propose des conversations vocales en temps réel avec un tuteur IA (API Gemini Live en streaming WebSocket), des exercices de grammaire générés par IA, des jeux de rôle immersifs et un suivi de progression complet (séries, XP, niveaux CECRL A1-C2). Architecture monorepo sophistiquée : app React Native/Expo avec Zustand et TanStack Query, API backend Hono/Node.js servant de passerelle vocale temps réel vers Gemini Live, base de données Supabase (PostgreSQL), authentification SSO (Google/Apple), gestion des abonnements RevenueCat, analytics PostHog, et un outil de génération automatique de contenus Instagram. Infrastructure auto-hébergée sur VPS avec Docker, Caddy et CI/CD GitHub Actions.",
      en: "My most ambitious project: a complete AI-powered language learning platform. The app features real-time voice conversations with an AI tutor (Gemini Live API over WebSocket streaming), AI-generated grammar exercises, immersive role-playing scenarios and comprehensive progress tracking (streaks, XP, CEFR levels A1-C2). Sophisticated monorepo architecture: React Native/Expo app with Zustand and TanStack Query, Hono/Node.js backend API acting as a real-time voice gateway to Gemini Live, Supabase database (PostgreSQL), SSO authentication (Google/Apple), RevenueCat subscription management, PostHog analytics, and an automated Instagram content generation tool. Self-hosted infrastructure on VPS with Docker, Caddy and GitHub Actions CI/CD.",
      it: "Il mio progetto più ambizioso: una piattaforma completa per l'apprendimento delle lingue alimentata dall'IA. L'app offre conversazioni vocali in tempo reale con un tutor IA (API Gemini Live in streaming WebSocket), esercizi di grammatica generati dall'IA, scenari di gioco di ruolo immersivi e monitoraggio completo dei progressi (serie, XP, livelli QCER A1-C2). Architettura monorepo sofisticata: app React Native/Expo con Zustand e TanStack Query, API backend Hono/Node.js che funge da gateway vocale in tempo reale verso Gemini Live, database Supabase (PostgreSQL), autenticazione SSO (Google/Apple), gestione abbonamenti RevenueCat, analytics PostHog, e uno strumento di generazione automatica di contenuti Instagram. Infrastruttura self-hosted su VPS con Docker, Caddy e CI/CD GitHub Actions.",
    },
    image: "/projects/mio-screen.png",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Hono",
      "Node.js",
      "WebSocket",
      "Google Gemini Live",
      "Supabase",
      "PostgreSQL",
      "RevenueCat",
      "Docker",
      "Next.js",
    ],
    featured: true,
    isApp: true,
    status: "production",
    links: {
      demo: "https://miotutor.app",
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

export interface SecondaryProject {
  id: string;
  title: string;
  description: Project["description"];
  technologies: string[];
  links?: Project["links"];
}

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    id: "social-studio",
    title: "Social Studio",
    description: {
      fr: "Plateforme interne d'automatisation marketing : génération de Reels et carrousels Instagram par IA, rendu vidéo programmatique et publication planifiée multi-comptes",
      en: "Internal marketing automation platform: AI-generated Instagram Reels and carousels, programmatic video rendering and scheduled multi-account publishing",
      it: "Piattaforma interna di automazione marketing: Reel e caroselli Instagram generati dall'IA, rendering video programmatico e pubblicazione pianificata multi-account",
    },
    technologies: ["Next.js", "TypeScript", "Remotion", "Google Gemini", "Supabase"],
  },
  {
    id: "kycamotors",
    title: "KYCA Motors",
    description: {
      fr: "Site vitrine automobile avec animations Framer Motion, formulaires validés par Zod et génération de QR codes",
      en: "Automotive showcase website with Framer Motion animations, Zod-validated forms and QR code generation",
      it: "Sito vetrina automobilistico con animazioni Framer Motion, moduli validati con Zod e generazione di codici QR",
    },
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    links: {
      demo: "https://kycamotors.vercel.app",
    },
  },
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
