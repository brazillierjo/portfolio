export interface Experience {
  id: string;
  title: {
    fr: string;
    en: string;
    it: string;
  };
  company: string;
  location?: string;
  type: "freelance" | "employee";
  period: {
    start: string;
    end: string | null;
  };
  description: {
    fr: string;
    en: string;
    it: string;
  };
  technologies: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance",
    title: {
      fr: "Développeur Web Freelance",
      en: "Freelance Web Developer",
      it: "Sviluppatore Web Freelance",
    },
    company: "Freelance",
    type: "freelance",
    period: {
      start: "2022",
      end: null,
    },
    description: {
      fr: "Conception et développement de solutions web sur mesure pour divers clients. Collaboration étroite avec les équipes projet pour respecter les délais et offrir une maintenance continue ainsi qu'un support technique.",
      en: "Design and development of custom web solutions for various clients. Close collaboration with project teams to meet deadlines and provide ongoing maintenance and technical support.",
      it: "Progettazione e sviluppo di soluzioni web su misura per vari clienti. Stretta collaborazione con i team di progetto per rispettare le scadenze e fornire manutenzione continua e supporto tecnico.",
    },
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Node.js"],
  },
  {
    id: "swipelink",
    title: {
      fr: "Développeur Fullstack Freelance",
      en: "Freelance Fullstack Developer",
      it: "Sviluppatore Fullstack Freelance",
    },
    company: "Swipelink",
    type: "freelance",
    period: {
      start: "Juil 2026",
      end: null,
    },
    description: {
      fr: "Développement d'une plateforme de recrutement : application Next.js (Prisma, Supabase, Stripe) et architecture microservices IA dockerisée sur Google Cloud — OCR de CV, matching par embeddings et enrichissement d'offres via OpenAI et Mistral AI.",
      en: "Development of a recruitment platform: Next.js application (Prisma, Supabase, Stripe) and dockerized AI microservices architecture on Google Cloud — resume OCR, embeddings-based matching and job enrichment via OpenAI and Mistral AI.",
      it: "Sviluppo di una piattaforma di recruiting: applicazione Next.js (Prisma, Supabase, Stripe) e architettura a microservizi IA dockerizzata su Google Cloud — OCR di CV, matching tramite embeddings e arricchimento di offerte via OpenAI e Mistral AI.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Supabase",
      "Stripe",
      "OpenAI",
      "Mistral AI",
      "Docker",
      "Google Cloud",
    ],
  },
  {
    id: "shinobi-coco-gallus",
    title: {
      fr: "Développeur Mobile Freelance",
      en: "Freelance Mobile Developer",
      it: "Sviluppatore Mobile Freelance",
    },
    company: "Shinobi Japanese · Coco Chinese · Gallus French",
    type: "freelance",
    period: {
      start: "Mai 2026",
      end: null,
    },
    description: {
      fr: "Développement de trois applications mobiles d'apprentissage des langues (japonais, chinois, français), dont Shinobi Japanese et ses 300 000+ téléchargements. Monorepos Turborepo avec React Native/Expo, Firebase (Auth, Firestore, Crashlytics), abonnements RevenueCat, publication App Store & Play Store via EAS, sites vitrines Astro et CMS Sanity.",
      en: "Development of three language learning mobile apps (Japanese, Chinese, French), including Shinobi Japanese with 300,000+ downloads. Turborepo monorepos with React Native/Expo, Firebase (Auth, Firestore, Crashlytics), RevenueCat subscriptions, App Store & Play Store releases via EAS, Astro landing sites and Sanity CMS.",
      it: "Sviluppo di tre app mobili per l'apprendimento delle lingue (giapponese, cinese, francese), tra cui Shinobi Japanese con oltre 300.000 download. Monorepo Turborepo con React Native/Expo, Firebase (Auth, Firestore, Crashlytics), abbonamenti RevenueCat, pubblicazione su App Store & Play Store via EAS, siti vetrina Astro e CMS Sanity.",
    },
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "Turborepo",
      "RevenueCat",
      "Astro",
      "Sanity",
    ],
  },
  {
    id: "big-mamma",
    title: {
      fr: "Développeur Fullstack Freelance",
      en: "Freelance Fullstack Developer",
      it: "Sviluppatore Fullstack Freelance",
    },
    company: "Big Mamma Group",
    type: "freelance",
    period: {
      start: "Mars 2026",
      end: "Juil 2026",
    },
    description: {
      fr: "Conception d'un outil interne de gestion de restaurants pour le forecasting P&L : prévisions mensuelles de KPIs par les managers et suivi de la performance par la direction. Next.js, Prisma, Supabase (PostgreSQL), interface multilingue avec next-intl, tests Vitest.",
      en: "Design of an internal restaurant management tool for P&L forecasting: monthly KPI forecasts by managers and performance tracking by leadership. Next.js, Prisma, Supabase (PostgreSQL), multilingual interface with next-intl, Vitest tests.",
      it: "Progettazione di uno strumento interno di gestione ristoranti per il forecasting P&L: previsioni mensili di KPI da parte dei manager e monitoraggio delle performance da parte della direzione. Next.js, Prisma, Supabase (PostgreSQL), interfaccia multilingue con next-intl, test Vitest.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Supabase",
      "next-intl",
      "Vitest",
      "TailwindCSS",
    ],
  },
  {
    id: "encore-mieux",
    title: {
      fr: "Développeur Front-End",
      en: "Front-End Developer",
      it: "Sviluppatore Front-End",
    },
    company: "Encore Mieux",
    type: "employee",
    period: {
      start: "Mai 2025",
      end: "Nov 2025",
    },
    description: {
      fr: "Développement d'interfaces utilisateur avec Next.js. Intégration de contenu via Sanity. Utilisation de Docker pour la conteneurisation des applications. Consommation d'API REST et de requêtes GROQ.",
      en: "User interface development with Next.js. Content integration via Sanity. Docker containerization for applications. REST API and GROQ queries consumption.",
      it: "Sviluppo di interfacce utente con Next.js. Integrazione di contenuti tramite Sanity. Utilizzo di Docker per la containerizzazione delle applicazioni. Consumo di API REST e query GROQ.",
    },
    technologies: ["Next.js", "Sanity", "Docker", "GROQ", "API REST"],
  },
  {
    id: "winter",
    title: {
      fr: "Développeur Web",
      en: "Web Developer",
      it: "Sviluppatore Web",
    },
    company: "Winter Energies",
    location: "Le Bourget-du-Lac",
    type: "employee",
    period: {
      start: "Sept 2024",
      end: "Mai 2025",
    },
    description: {
      fr: "Création d'interfaces utilisateur modernes et performantes avec Next.js, TailwindCSS et TypeScript. Intégration API MongoDB. Contribution à la mission de Winter Energies : accompagner les foyers vers un changement durable dans leurs habitudes de consommation d'énergie.",
      en: "Creation of modern and performant user interfaces with Next.js, TailwindCSS and TypeScript. MongoDB API integration. Contributing to Winter Energies' mission: helping households towards sustainable changes in their energy consumption habits.",
      it: "Creazione di interfacce utente moderne e performanti con Next.js, TailwindCSS e TypeScript. Integrazione API MongoDB. Contributo alla missione di Winter Energies: accompagnare le famiglie verso un cambiamento sostenibile nelle loro abitudini di consumo energetico.",
    },
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "MongoDB"],
  },
  {
    id: "la-boite-immo",
    title: {
      fr: "Développeur Frontend",
      en: "Frontend Developer",
      it: "Sviluppatore Frontend",
    },
    company: "LA BOITE IMMO",
    location: "Hyères",
    type: "employee",
    period: {
      start: "Juin 2022",
      end: "Août 2024",
    },
    description: {
      fr: "Création et maintenance d'interfaces utilisateur avec React, Next.js et TypeScript. Transformation de maquettes Figma en pages pixel perfect avec TailwindCSS. Optimisation API Symfony. Méthodologies AGILE et Clean Code. Documentation Storybook et containerisation Docker.",
      en: "Creation and maintenance of user interfaces with React, Next.js and TypeScript. Figma mockups to pixel perfect pages with TailwindCSS. Symfony API optimization. AGILE methodologies and Clean Code. Storybook documentation and Docker containerization.",
      it: "Creazione e manutenzione di interfacce utente con React, Next.js e TypeScript. Trasformazione di mockup Figma in pagine pixel perfect con TailwindCSS. Ottimizzazione API Symfony. Metodologie AGILE e Clean Code. Documentazione Storybook e containerizzazione Docker.",
    },
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Figma",
      "Symfony",
      "Storybook",
      "Docker",
    ],
  },
  {
    id: "vitassurance",
    title: {
      fr: "Développeur Web Fullstack",
      en: "Fullstack Web Developer",
      it: "Sviluppatore Web Fullstack",
    },
    company: "VITASSURANCE",
    location: "Nice",
    type: "employee",
    period: {
      start: "Fév 2021",
      end: "Fév 2022",
    },
    description: {
      fr: "Conception et implémentation d'un site de comparaison d'assurances. Connexion APIs tierces pour données temps réel. Optimisation des temps de chargement pour améliorer l'expérience utilisateur.",
      en: "Design and implementation of an insurance comparison website. Third-party API connections for real-time data. Loading time optimization to improve user experience.",
      it: "Progettazione e implementazione di un sito di confronto assicurazioni. Connessione API di terze parti per dati in tempo reale. Ottimizzazione dei tempi di caricamento per migliorare l'esperienza utente.",
    },
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "Node.js", "Express"],
  },
  {
    id: "sarl-du-soleil",
    title: {
      fr: "Analyste Web & SEO",
      en: "Web Analyst & SEO",
      it: "Analista Web & SEO",
    },
    company: "SARL du Soleil",
    location: "La Londe-les-Maures",
    type: "employee",
    period: {
      start: "Juil 2014",
      end: "Sept 2020",
    },
    description: {
      fr: "Amélioration du référencement naturel du site e-commerce avec techniques SEO avancées. Administration et maintenance de la boutique en ligne. Suivi et analyse des performances via outils d'analytics.",
      en: "SEO improvement for e-commerce site with advanced techniques. Online store administration and maintenance. Performance tracking and analysis via analytics tools.",
      it: "Miglioramento SEO del sito e-commerce con tecniche avanzate. Amministrazione e manutenzione del negozio online. Monitoraggio e analisi delle prestazioni tramite strumenti di analytics.",
    },
    technologies: ["SEO", "E-commerce", "Analytics", "Administration web"],
  },
];
