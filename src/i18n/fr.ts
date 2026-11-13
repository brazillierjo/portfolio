import { ACTIVITY, AGENT_SHARE, PROFILE } from "@/data/profile";
import { n, type Copy } from "./types";

export const fr: Copy = {
  meta: {
    title: `${PROFILE.name}, ${PROFILE.role}`,
    description:
      "AI Full Stack Engineer basé à Nice. Je conçois et je mets en production des produits IA complets sur iOS, Android, web et macOS, avec Claude Code et Codex.",
    ogLocale: "fr_FR",
  },
  nav: {
    projects: "Projets",
    method: "Méthode",
    missions: "Missions",
    path: "Parcours",
    contact: "Contact",
    cv: "CV",
    menu: "Menu",
    languages: "Langues du site",
  },
  hero: {
    lead: "Je conçois et je mets en production des produits IA complets, de l'app mobile jusqu'au serveur. Claude Code et Codex sont mon équipe : je fixe le cap, je découpe le travail, je relis et je livre.",
    ctaContact: "Me contacter",
    ctaCv: "Télécharger mon CV",
    figures: {
      mio: "Mio sur iPhone",
      shelltown: "Shelltown sur macOS",
      fastflix: "FastFlix sur iPhone",
    },
    chips: (commits, share) => ({
      commits: `${commits} commits en 2026`,
      commitsSub: `${share} % co-signés par un agent`,
      platforms: "iOS, Android, web, macOS",
      platformsSub: "de l'app jusqu'au serveur",
    }),
  },
  projects: {
    title: "Mes produits",
    intro:
      "Trois apps que j'ai imaginées, développées et publiées. Ouvrez un projet pour voir comment il est construit.",
    more: "Voir le détail",
    less: "Refermer",
  },
  mio: {
    tagline: "Le tuteur de langues IA avec qui on parle vraiment.",
    highlights: [
      "Conversation vocale en temps réel avec Gemini Live",
      "13 langues et un parcours complet, de A1 à C2",
      "Des Reels Instagram produits chaque semaine par Claude Code",
    ],
    facts: [
      ["Plateformes", "iOS, Android, web"],
      ["Statut", "En production, version 3.10"],
    ],
    chips: [
      ["Voix en temps réel", "Gemini Live en WebSocket"],
      ["13 langues", "de A1 à C2"],
    ],
    intro:
      "On apprend une langue en la parlant. Avec Mio, un petit dragon, on discute à voix haute et en temps réel. Autour de ces conversations, un vrai parcours : leçons de A1 à C2, quiz, écoute, cartes de révision, contes audio, ligues et séries. Lancé en décembre 2025, plus de 3 000 commits depuis.",
    featuresTitle: "Ce que fait l'app",
    steps: [
      {
        id: "today",
        title: "Un programme du jour sur mesure",
        text: "Le coach repère les points faibles de chacun et prépare la journée : quiz ciblés, écoute, leçon, conversation. Chaque étape dit pourquoi elle est là.",
        alt: "Écran d'accueil de Mio : le programme du jour et la semaine en cours",
      },
      {
        id: "talk",
        title: "La conversation en temps réel",
        text: "Le téléphone se connecte directement à Gemini Live en WebSocket, sans serveur intermédiaire. Si Google bloque la connexion, l'app passe par un relais Hono, avec des limites par utilisateur.",
        alt: "Écran Talk de Mio : un jeu de rôle dans une pizzeria à Naples",
      },
      {
        id: "quiz",
        title: "Des exercices générés puis réutilisés",
        text: "Gemini crée les exercices à la demande et les range dans une banque partagée, resservie sans nouvel appel au modèle. Le niveau de chacun est estimé façon Elo.",
        alt: "Écran de quiz de Mio",
      },
      {
        id: "lesson",
        title: "Un vrai cursus, de A1 à C2",
        text: "Des leçons structurées, la révision espacée du vocabulaire et 32 contes traduits dans les 13 langues, avec un audio synchronisé mot à mot.",
        alt: "Écran de leçon de Mio",
      },
    ],
    systemTitle: "Sous le capot",
    systemIntro:
      "Une app native, une API, une base de données, un site, une console d'administration et une usine à contenus, sur une infrastructure que j'ai montée et que je fais tourner.",
    system: [
      {
        title: "Une base Postgres verrouillée",
        text: "Plus de 30 tables sur Supabase, la RLS partout et aucun accès direct depuis l'app : tout passe par l'API. XP, quotas et progression sont gérés par des fonctions SQL atomiques, et les webhooks RevenueCat alimentent un historique immuable pour suivre MRR, churn et conversions.",
      },
      {
        title: "Une API qui maîtrise ses coûts",
        text: "Hono et TypeScript, validation zod, tâches planifiées, plus de 600 fichiers de tests. Chaque appel IA est enregistré avec son modèle, ses tokens et son coût, et les prompts sont évalués avant chaque changement.",
      },
      {
        title: "Un déploiement sans accès entrant",
        text: "Un VPS Debian durci, Docker et Caddy. GitHub Actions construit l'image et c'est le serveur qui vient la chercher : GitHub n'a aucun accès à la machine.",
      },
      {
        title: "Une console pour tout piloter",
        text: "Feature flags, édition des prompts, coûts IA, revenus, tâches planifiées, notifications push et journal d'audit, réservés à un seul compte Google.",
      },
    ],
    diagram: {
      title: "Architecture de Mio",
      desc: "L'app parle directement à Gemini Live pour la voix et à l'API Hono pour tout le reste. L'API s'appuie sur Supabase, Gemini, la synthèse vocale et RevenueCat. Le site, la console et mio-studio gravitent autour.",
      app: "App iOS et Android",
      appSub: "Expo, React Native",
      live: "Gemini Live",
      liveSub: "voix en temps réel",
      api: "API Hono",
      apiSub: "Node, Docker, VPS",
      db: "Supabase",
      dbSub: "Postgres, RLS, 30+ tables",
      ai: "Gemini et TTS",
      aiSub: "génération, voix, cache",
      pay: "RevenueCat",
      paySub: "abonnements, webhooks",
      web: "Site web",
      webSub: "Next.js, 13 langues",
      admin: "Console",
      adminSub: "flags, prompts, coûts",
      studio: "mio-studio",
      studioSub: "5 comptes Instagram",
      ws: "WebSocket direct",
      relay: "relais si bloqué",
    },
    socialTitle: "L'acquisition aussi est automatisée",
    social:
      "mio-studio gère cinq comptes Instagram, en français, anglais, espagnol, italien et japonais. Chaque samedi, une session Claude Code analyse les chiffres de la semaine, tient un journal, puis écrit et génère les Reels de la semaine suivante. Les vidéos sont animées en code avec Remotion, les voix synthétisées en local, et un service sur le VPS publie aux heures prévues. Je valide chaque post avant sa sortie.",
    socialFacts: [
      "Environ 400 vidéos générées",
      "Remotion, Mio et dix personnages",
      "Voix locales avec Qwen3-TTS",
      "Publication planifiée via Supabase",
    ],
    reelLabel: "Extrait d'un Reel généré par mio-studio",
    links: { site: "miotutor.app", appStore: "App Store", play: "Google Play" },
  },
  shelltown: {
    tagline: "Un bureau vivant pour piloter ses agents de code sur Mac.",
    highlights: [
      "Chaque session Claude Code ou Codex devient un personnage",
      "Les autorisations se valident dans l'encoche du Mac",
      "Moteur Rust, app Swift et monde en pixel art",
    ],
    facts: [
      ["Plateforme", "macOS, app native"],
      ["Statut", "En développement"],
    ],
    chips: [
      ["100 sessions", "pour environ 13 % de CPU"],
      ["Claude Code et Codex", "dans un seul bureau"],
    ],
    intro:
      "Quand dix sessions Claude Code et Codex tournent en même temps, on perd vite le fil. Shelltown les réunit dans un étage de gratte-ciel en pixel art : chaque session est un personnage à son bureau, chaque projet une pièce, et sa posture montre ce qu'il fait vraiment, au travail, en pause ou en attente d'une réponse.",
    shots: {
      cli: "Une vraie session Claude Code dans le terminal de Shelltown.",
      meeting:
        "Une réunion entre trois agents (architecte, relecteur, testeur) et leurs décisions.",
    },
    features: [
      {
        title: "Les autorisations dans l'encoche",
        text: "Les demandes de Claude Code s'affichent dans l'encoche du Mac. Seul un vrai clic les valide : un agent ne peut pas s'autoriser lui-même.",
      },
      {
        title: "Des agents qui collaborent",
        text: "Passage de relais de Claude à Codex, réunions entre deux à quatre agents, objectifs par projet, revue des changements et des pull requests.",
      },
      {
        title: "Des chiffres exacts, sans clé d'API",
        text: "Quotas, modèle, contexte et coût sont lus dans les données des CLI. Quand une valeur est inconnue, l'app le dit au lieu de l'inventer.",
      },
      {
        title: "Léger, même avec cent agents",
        text: "Cent sessions sur un étage pour environ 13 % de CPU, et des contrastes WCAG AA vérifiés par les tests.",
      },
    ],
    builtTitle: "Sous le capot",
    built:
      "Un moteur Rust (tokio, PTY, WebSocket, SQLite) gère les processus et les données. Une app Swift et AppKit affiche l'interface dans une WKWebView sécurisée et se met à jour avec Sparkle. L'interface est en TypeScript, sans framework : un monde en Canvas 2D entièrement dessiné en code, du pathfinding A* et un terminal xterm.js en WebGL.",
    filmLabel: "Shelltown : du bureau jusqu'à Manhattan, à l'heure réelle de la journée",
    videoLabel:
      "Shelltown en mode démo : l'étage, les agents au travail et les demandes en attente",
    link: "shelltown.app",
  },
  fastflix: {
    tagline: "Dites ce que vous avez envie de voir, l'IA trouve le film.",
    highlights: [
      "Recherche en langage naturel avec Gemini",
      "Chaque suggestion vérifiée sur TMDB",
      "Où regarder, parmi plus de 200 plateformes",
    ],
    facts: [
      ["Plateformes", "iOS, Android"],
      ["Statut", "En production, version 4.1"],
    ],
    chips: [
      ["Plus de 200 plateformes", "pour savoir où regarder"],
      ["Gemini et TMDB", "chaque suggestion vérifiée"],
    ],
    intro:
      "FastFlix transforme une envie floue en une courte liste prête à regarder. L'app apprend vos goûts à partir de vos notes, de vos swipes et de vos acteurs préférés, tient compte de vos abonnements et explique chaque suggestion. Disponible en 6 langues.",
    steps: [
      {
        id: "ai-search",
        title: "Vous décrivez votre envie",
        text: "Une recherche en langage naturel, qui respecte les acteurs, réalisateurs et plateformes demandés.",
        alt: "Recherche IA de FastFlix",
      },
      {
        id: "ai-results",
        title: "Gemini propose, TMDB vérifie",
        text: "Chaque titre est recoupé avec une vraie fiche avant d'être affiché, avec la raison du choix.",
        alt: "Résultats de FastFlix avec l'explication de l'assistant",
      },
      {
        id: "feed",
        title: "Dix suggestions par jour",
        text: "Un fil à swiper, le suivi des épisodes et les plateformes où chaque titre est disponible.",
        alt: "Fil de suggestions de FastFlix",
      },
    ],
    videoLabel:
      "FastFlix sur iPhone : le fil de suggestions, une recherche en langage naturel, les résultats de Gemini et une fiche",
    videoCaption: "Une vraie session, enregistrée dans le simulateur iOS.",
    links: { site: "fastflix-movie.com", appStore: "App Store", play: "Google Play" },
  },
  stackLabel: "Stack",
  method: {
    title: "Je travaille avec des agents IA comme avec une équipe",
    lead: "Claude Code et Codex écrivent l'essentiel de mon code. Mon rôle : cadrer le besoin, découper le travail, outiller les agents, relire, et rester responsable de ce qui part en production.",
    chartTitle: "Mes commits en 2026",
    chartCaption: `${n("fr", ACTIVITY.total)} commits sur ${ACTIVITY.repos} dépôts en 2026, ${ACTIVITY.activeDays} jours actifs sur ${ACTIVITY.days.length}. ${AGENT_SHARE} % sont co-signés par un agent.`,
    chartLegendLess: "Moins",
    chartLegendMore: "Plus",
    months: [
      "janv.",
      "févr.",
      "mars",
      "avr.",
      "mai",
      "juin",
      "juil.",
      "août",
      "sept.",
      "oct.",
      "nov.",
      "déc.",
    ],
    dayLabel: (date, count) => `${date} : ${count} commit${count > 1 ? "s" : ""}`,
    practices: [
      {
        title: "Un contexte partagé",
        text: "Chaque dépôt a son CLAUDE.md ou AGENTS.md, souvent avec un PRODUCT.md et un DESIGN.md. Claude et Codex suivent les mêmes règles et la même vision du produit.",
      },
      {
        title: "Des skills et sous-agents sur mesure",
        text: "issue-to-pr (de l'issue à la pull request, tests et QA sur simulateur compris), release (build EAS, notes en 8 langues, envoi aux stores), un agent dédié aux tests. Les mêmes pour Claude et Codex.",
      },
      {
        title: "Des agents en parallèle",
        text: "Le travail est découpé en tâches indépendantes, un agent par worktree git, avec une revue avant fusion. Le centre de notifications de Menu Hub, chez Big Mamma, a été construit comme ça.",
      },
      {
        title: "Connectés à la prod, en lecture seule",
        text: "Via les serveurs MCP (Supabase, Sentry, Linear, Vercel, Firebase, Google Cloud, Grafana, simulateur iOS), les agents consultent eux-mêmes les erreurs, les logs et le schéma.",
      },
      {
        title: "Tout est vérifié",
        text: "Tests, garde-fous automatiques (inventaire des routes, traductions complètes), QA dans un vrai navigateur avec Playwright, évaluation des prompts avant chaque changement.",
      },
      {
        title: "Des agents autonomes",
        text: "Certaines tâches tournent seules : la session hebdomadaire de mio-studio, ou le support d'une app trié par Claude Opus, avec des brouillons de réponse rédigés par Claude Code sur le serveur.",
      },
    ],
    toolsLine: "Et quand l'outil qu'il me faut n'existe pas, je le construis : c'est Shelltown.",
    aiTitle: "L'IA que j'intègre dans les produits",
    ai: [
      { title: "Voix en temps réel", text: "Gemini Live en WebSocket, relais de secours." },
      { title: "Recherche sémantique", text: "Embeddings, pgvector, index HNSW." },
      { title: "Lecture de documents", text: "OCR Mistral, extraction structurée avec GPT." },
      {
        title: "Génération maîtrisée",
        text: "Schémas zod, banques réutilisables, évaluation des prompts.",
      },
      { title: "Synthèse vocale", text: "Gemini TTS, Google Cloud TTS, cache, synchro mot à mot." },
      {
        title: "Coûts et quotas",
        text: "Suivi de chaque appel, limites par utilisateur et par appareil.",
      },
    ],
  },
  missions: {
    title: "Missions clients en 2026",
    intro: "En freelance, au sein d'équipes produit, sur des bases de code existantes.",
    items: [
      {
        client: "Shinobi Japanese, Coco Chinese, Gallus French, Leo English",
        period: "Depuis mai 2026",
        context:
          "Apprendre les langues par les histoires. Shinobi : plus de 300 000 téléchargements, noté 4,8",
        text: "Développement mobile React Native et Firebase, abonnements RevenueCat, widgets iOS en Swift, histoires illustrées et audio générés par IA, support trié par Claude. Développeur principal de Gallus et de Leo, et de l'entrepôt de données commun (Postgres, TimescaleDB, Metabase).",
        tags: [
          "Expo",
          "React Native",
          "Firebase",
          "RevenueCat",
          "Swift",
          "Gemini",
          "Claude",
          "Turborepo",
        ],
      },
      {
        client: "Big Mamma Group",
        period: "De mars à juillet 2026, puis depuis octobre",
        context: "Groupe de restaurants présent dans plusieurs pays",
        text: "D'abord un outil interne de prévision du P&L des restaurants, puis Menu Hub, le back-office des cartes : rôles et permissions par groupe, pays et restaurant, centre de notifications et commentaires, connexion Google, e-mails transactionnels.",
        tags: ["Next.js 16", "React 19", "Prisma 7", "Supabase", "Vitest", "next-intl"],
      },
      {
        client: "Swipelink",
        period: "Depuis juillet 2026",
        context: "Plateforme de recrutement et d'alternance",
        text: "Huit microservices TypeScript sur Google Cloud Run (Pub/Sub, Cloud Tasks, Terraform). Lecture des CV par OCR Mistral et extraction avec GPT, matching par embeddings dans pgvector, facturation Stripe en libre-service, synchronisation avec Cegid.",
        tags: [
          "Next.js",
          "Prisma",
          "Supabase",
          "OpenAI",
          "Mistral",
          "pgvector",
          "Cloud Run",
          "Terraform",
          "Stripe",
        ],
      },
    ],
  },
  path: {
    title: "Parcours",
    jobsTitle: "Expérience",
    jobs: [
      {
        period: "2025 – aujourd'hui",
        role: "Développeur freelance",
        company: "Indépendant",
        place: "Nice et télétravail",
        text: "Missions pour Shinobi Japanese, Big Mamma Group et Swipelink, et mes propres produits : Mio, FastFlix et Shelltown.",
      },
      {
        period: "2025",
        role: "Développeur front-end",
        company: "Encore Mieux",
        place: "Télétravail",
        text: "Interfaces Next.js, contenus Sanity, requêtes GROQ, Docker.",
      },
      {
        period: "2024 – 2025",
        role: "Développeur web",
        company: "Winter Energies",
        place: "Le Bourget-du-Lac",
        text: "Next.js, TypeScript et Tailwind, au service de la sobriété énergétique des foyers.",
      },
      {
        period: "2022 – 2024",
        role: "Développeur full stack",
        company: "LA BOITE IMMO",
        place: "Hyères",
        text: "Logiciel pour agences immobilières : React, Next.js, intégration Figma au pixel près, API Symfony, Storybook, Docker.",
      },
      {
        period: "2021 – 2022",
        role: "Développeur web full stack",
        company: "VITASSURANCE",
        place: "Nice",
        text: "Comparateur d'assurances en ligne : Node.js, Express, API tierces en temps réel.",
      },
      {
        period: "2014 – 2020",
        role: "Analyste web",
        company: "SARL du Soleil",
        place: "La Londe-les-Maures",
        text: "SEO d'une boutique en ligne, administration et analyse d'audience.",
      },
    ],
    schoolTitle: "Formation",
    schools: [
      {
        period: "2020 – 2021",
        role: "Licence développement web et mobile",
        company: "3WAcademy",
        place: "Bac+3",
        text: "",
      },
      {
        period: "2020",
        role: "Titre RNCP de développeur web",
        company: "OpenClassrooms",
        place: "Bac+2",
        text: "",
      },
      {
        period: "2016 – 2017",
        role: "Licence e-commerce et marketing numérique",
        company: "Université de Toulon",
        place: "Bac+3",
        text: "",
      },
    ],
    languagesTitle: "Langues",
    languages: [
      ["Français", "langue maternelle"],
      ["Anglais", "courant (C1)"],
      ["Italien", "intermédiaire (B1)"],
    ],
    stackTitle: "Mes outils",
    stack: [
      {
        group: "IA et agents",
        items:
          "Claude Code, Codex, MCP, Anthropic, OpenAI, Gemini (Live, TTS), Mistral, embeddings, pgvector",
      },
      {
        group: "Mobile",
        items:
          "React Native, Expo, Reanimated, Zustand, TanStack Query, RevenueCat, EAS, widgets iOS en Swift",
      },
      { group: "Web", items: "TypeScript, React, Next.js, Astro, Tailwind, next-intl, Remotion" },
      {
        group: "Back-end et données",
        items: "Node.js, Hono, PostgreSQL, Supabase, Prisma, Firebase, Turso, Stripe",
      },
      { group: "macOS et natif", items: "Swift, AppKit, Rust, tokio, WebKit" },
      {
        group: "Infra et qualité",
        items:
          "Docker, Caddy, GitHub Actions, Google Cloud, Terraform, Sentry, PostHog, Vitest, Jest, Playwright",
      },
      {
        group: "Mise en ligne et suivi",
        items:
          "App Store Connect, Play Console, EAS, Vercel, Cloudflare, Hostinger, DigitalOcean, UptimeRobot, Resend, Paddle, Metabase, Aptabase",
      },
      { group: "Organisation", items: "Linear, Notion, Slack, GitHub Projects, Figma" },
    ],
  },
  contact: {
    title: "Contact",
    email: "E-mail",
    copy: "Copier",
    copied: "Copié",
    phone: "Téléphone",
    cvTitle: "CV en PDF",
    cv: [
      { lang: "fr", label: "Français" },
      { lang: "ch", label: "Suisse" },
      { lang: "en", label: "English" },
      { lang: "it", label: "Italiano" },
    ],
    elsewhere: "En ligne",
  },
  footer: "Site conçu et développé avec Astro, sans framework JavaScript côté client.",
  playVideo: "Lire la vidéo",
  pauseVideo: "Mettre la vidéo en pause",
};
