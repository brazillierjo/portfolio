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

export interface Formation {
  id: string;
  title: {
    fr: string;
    en: string;
    it: string;
  };
  school: string;
  period: string;
  description: {
    fr: string;
    en: string;
    it: string;
  };
}

export const FORMATIONS: Formation[] = [
  {
    id: "3w-academy",
    title: {
      fr: "Développeur/Intégrateur Web et Mobile",
      en: "Web and Mobile Developer/Integrator",
      it: "Sviluppatore/Integratore Web e Mobile",
    },
    school: "3W Academy",
    period: "2020 - 2021",
    description: {
      fr: "Formation intensive au développement web et mobile couvrant les technologies front-end et back-end modernes.",
      en: "Intensive web and mobile development training covering modern front-end and back-end technologies.",
      it: "Formazione intensiva sullo sviluppo web e mobile che copre le moderne tecnologie front-end e back-end.",
    },
  },
  {
    id: "openclassrooms",
    title: {
      fr: "Développeur Web",
      en: "Web Developer",
      it: "Sviluppatore Web",
    },
    school: "OpenClassrooms",
    period: "2020",
    description: {
      fr: "Formation en ligne certifiante axée sur le développement web et la programmation informatique.",
      en: "Certified online training focused on web development and computer programming.",
      it: "Formazione online certificata incentrata sullo sviluppo web e la programmazione informatica.",
    },
  },
  {
    id: "licence-ecommerce",
    title: {
      fr: "Licence E-commerce et Marketing Numérique",
      en: "E-commerce and Digital Marketing Degree",
      it: "Laurea in E-commerce e Marketing Digitale",
    },
    school: "Université de Toulon",
    period: "2016 - 2017",
    description: {
      fr: "Formation universitaire combinant compétences techniques et marketing digital pour le commerce en ligne.",
      en: "University degree combining technical skills and digital marketing for e-commerce.",
      it: "Laurea universitaria che combina competenze tecniche e marketing digitale per l'e-commerce.",
    },
  },
  {
    id: "bts-muc",
    title: {
      fr: "BTS Management des Unités Commerciales",
      en: "Business Management Diploma",
      it: "Diploma in Gestione Aziendale",
    },
    school: "Université de Toulon",
    period: "2014 - 2016",
    description: {
      fr: "Formation en management et gestion commerciale avec une approche pratique du commerce.",
      en: "Management and business training with a practical approach to commerce.",
      it: "Formazione in management e gestione commerciale con un approccio pratico al commercio.",
    },
  },
];
