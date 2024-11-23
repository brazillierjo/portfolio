export interface IExperience {
  company: string;
  title: string;
  years: string;
  technologies: string[] | null;
  description: string;
}

export const enExperiences: IExperience[] = [
  {
    company: "Winter Energies",
    title: "Software engineer",
    years: "2024 - (ongoing)",
    description:
      "As a frontend developer at Winter Energies, I create modern, high-performance user interfaces with Next.js, TailwindCSS, and TypeScript, contributing to sustainable energy consumption by delivering scalable and reliable solutions.",
    technologies: ["TypeScript", "Next.js", "React", "TailwindCSS", "JEST", "Docker", "React Native", "AGILE"],
  },
  {
    company: "La Boîte Immo",
    title: "Software engineer",
    years: "2022 - 2024",
    description:
      "Building robust real estate management software to streamline operations and enhance efficiency for independent real estate agents.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "TailwindCSS",
      "JEST",
      "Docker",
      "api-platform",
      "Symfony",
      "AGILE",
    ],
  },
  {
    company: "Free-lance",
    title: "Freelance Developer",
    years: "2022 (ongoing)",
    description:
      "Delivering tailor-made solutions to clients, ensuring their unique needs are met with high-quality development expertise.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React",
      "NodeJS",
      "Express",
      "REST API",
      "TailwindCSS",
      "Firebase",
      "MongoDB",
      "SQL",
    ],
  },
  {
    company: "GetUp Agency",
    title: "Front-End Developer",
    years: "2022",
    description:
      "Crafting engaging and user-friendly front-end experiences for clients, helping them achieve their online presence goals.",
    technologies: ["Wordpress", "JavaScript", "TypeScript", "React", "REST API", "Bootstrap"],
  },
  {
    company: "Vitassurance",
    title: "Front-end & Back-end Developer",
    years: "2021",
    description:
      "Insurance brokerage website that allows you to quickly compare offers from different insurers. Once the visitor fills out the form, their information is sent via an API to a CRM to manage the new client's file.",
    technologies: ["HTML", "CSS", "JavaScript", "REST API", "NodeJS"],
  },
  {
    company: "poupepoupi.com",
    title: "Web Analyst (6 years)",
    years: "2014 - 2020",
    description:
      "Providing insights and optimizations to maximize website performance and drive business growth through data-driven strategies.",
    technologies: ["SEO", "Prestashop"],
  },
  {
    company: "Large Retail Chains | Garden Centers | Animation",
    title: "Various jobs in different fields",
    years: "2011 - 2014",
    description:
      "Acquired versatile skills and valuable experience by working in diverse roles across multiple industries.",
    technologies: null,
  },
];

export const frExperiences: IExperience[] = [
  {
    company: "Winter Energies",
    title: "Développeur frontend",
    years: "2024 - (ongoing)",
    description:
      "En tant que développeur frontend chez Winter Energies, je conçois des interfaces utilisateur modernes et performantes avec Next.js, TailwindCSS et TypeScript, contribuant à une consommation énergétique durable en fournissant des solutions évolutives et fiables.",
    technologies: ["TypeScript", "Next.js", "React", "TailwindCSS", "JEST", "Docker", "React Native", "AGILE"],
  },
  {
    company: "La Boîte Immo",
    title: "Développeur fullstack",
    years: "2022 (en cours)",
    description:
      "Développement de plusieurs applications web pour la gestion de biens immobiliers pour aider les agents immobiliers indépendants.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "TailwindCSS",
      "JEST",
      "Docker",
      "api-platform",
      "Symfony",
      "AGILE",
    ],
  },
  {
    company: "JoCorp",
    title: "Développeur freelance",
    years: "2022",
    description:
      "Mise en place de solutions sur mesure aux clients, en veillant à ce que leurs besoins uniques soient satisfaits avec une expertise de développement de haute qualité.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Next.js",
      "React",
      "REST API",
      "TailwindCSS",
      "Firebase",
      "MongoDB",
      "SQL",
    ],
  },
  {
    company: "GetUp Agency",
    title: "Développeur front-end",
    years: "2022",
    description:
      "Créer des interfaces utilisateur attractives et conviviales pour les clients, les aidant à atteindre leurs objectifs de présence en ligne.",
    technologies: ["Wordpress", "JavaScript", "TypeScript", "React", "REST API", "Bootstrap"],
  },
  {
    company: "Vitassurance",
    title: "Développeur front-end & back-end",
    years: "2021",
    description:
      "Un site web de courtage en assurance qui vous permet de comparer rapidement les offres de différents assureurs. Une fois que le visiteur remplit le formulaire, ses informations sont envoyées via une API à un CRM pour gérer le dossier du nouveau client.",
    technologies: ["HTML", "CSS", "JavaScript", "REST API", "NodeJS", "express"],
  },
  {
    company: "poupepoupi.com",
    title: "Web Analyste (6 ans)",
    years: "2014 - 2020",
    description:
      "Fournir des insights et des optimisations pour maximiser les performances du site web et stimuler la croissance de l'entreprise grâce à des stratégies basées sur les données.",
    technologies: ["SEO", "Prestashop"],
  },
  {
    company: "Grandes enseignes | Jardineries | Animation",
    title: "Petits jobs dans plusieurs domaines",
    years: "2011 - 2014",
    description:
      "Acquisition de compétences polyvalentes et d'une expérience précieuse en travaillant dans divers rôles à travers plusieurs industries.",
    technologies: null,
  },
];
