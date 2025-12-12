export const PERSONAL_INFO = {
  name: "Johan R. BRAZILLIER",
  initials: "JB",
  title: {
    fr: "Développeur Web | Expert React, Next.js, Nuxt & TypeScript",
    en: "Web Developer | Expert React, Next.js, Nuxt & TypeScript",
    it: "Sviluppatore Web | Esperto React, Next.js, Nuxt & TypeScript",
  },
  email: "j.brazillier@gmail.com",
  phone: "+33 6 38 02 76 49",
  location: "Nice, France",
  available: true,
  social: {
    linkedin: "https://www.linkedin.com/in/johan-r-brazillier",
    github: "https://github.com/brazillierjo",
    portfolio: "https://brazillierjohan.fr",
  },
  cv: {
    fr: "/cv/CV-RINCON-BRAZILLIER-Johan-FR.pdf",
    en: "/cv/CV-RINCON-BRAZILLIER-Johan-EN.pdf",
    it: "/cv/CV-RINCON-BRAZILLIER-Johan-IT.pdf",
  },
  languages: [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Professionnel" },
  ],
} as const;

export const TECH_STACK = {
  main: [
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Tailwind", icon: "tailwind" },
  ],
  frontend: [
    { name: "TypeScript", icon: "typescript", level: 95 },
    { name: "JavaScript", icon: "javascript", level: 95 },
    { name: "React", icon: "react", level: 95 },
    { name: "Next.js", icon: "nextjs", level: 95 },
    { name: "Vue.js", icon: "vue", level: 85 },
    { name: "Nuxt", icon: "nuxt", level: 85 },
    { name: "Angular", icon: "angular", level: 70 },
    { name: "TailwindCSS", icon: "tailwind", level: 95 },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs", level: 85 },
    { name: "Express", icon: "express", level: 85 },
    { name: "Prisma", icon: "prisma", level: 85 },
    { name: "Supabase", icon: "supabase", level: 80 },
    { name: "Turso", icon: "turso", level: 80 },
    { name: "MongoDB", icon: "mongodb", level: 70 },
    { name: "MySQL", icon: "mysql", level: 70 },
    { name: "Firebase", icon: "firebase", level: 70 },
  ],
  tools: [
    "Jest",
    "Vitest",
    "Playwright",
    "Docker",
    "GitHub Actions",
    "Figma",
    "Storybook",
    "Sanity",
    "REST API",
    "GROQ",
  ],
} as const;

export const SKILL_LEVELS = [
  { name: "TypeScript / JavaScript", level: 95 },
  { name: "React / Next.js", level: 95 },
  { name: "Vue.js / Nuxt", level: 85 },
  { name: "Node.js / Express", level: 85 },
  { name: "TailwindCSS", level: 95 },
  { name: "Testing (Jest, Vitest, Playwright)", level: 80 },
] as const;
