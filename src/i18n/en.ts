import { ACTIVITY, AGENT_SHARE, PROFILE } from "@/data/profile";
import { n, type Copy } from "./types";

export const en: Copy = {
  meta: {
    title: `${PROFILE.name}, ${PROFILE.role}`,
    description:
      "AI Full Stack Engineer based in Nice, France. I design and ship complete AI products on iOS, Android, web and macOS, working with Claude Code and Codex.",
    ogLocale: "en_US",
  },
  nav: {
    projects: "Projects",
    method: "How I work",
    missions: "Clients",
    path: "Background",
    contact: "Contact",
    cv: "Resume",
    menu: "Menu",
    languages: "Site languages",
  },
  hero: {
    lead: "I design and ship complete AI products, from the mobile app all the way to the server. Claude Code and Codex are my team: I set the direction, split the work, review it and ship.",
    ctaContact: "Get in touch",
    ctaCv: "Download my resume",
    figures: {
      mio: "Mio on iPhone",
      shelltown: "Shelltown on macOS",
      fastflix: "FastFlix on iPhone",
    },
    chips: (commits, share) => ({
      commits: `${commits} commits in 2026`,
      commitsSub: `${share}% co-signed by an agent`,
      platforms: "iOS, Android, web, macOS",
      platformsSub: "from the app to the server",
    }),
  },
  projects: {
    title: "My products",
    intro:
      "Three apps I came up with, built and shipped. Open one to see how it works under the hood.",
    more: "See the details",
    less: "Close",
  },
  mio: {
    tagline: "The AI language tutor you actually talk to.",
    highlights: [
      "Real-time voice conversations with Gemini Live",
      "13 languages and a full course, from A1 to C2",
      "Instagram Reels produced every week by Claude Code",
    ],
    facts: [
      ["Platforms", "iOS, Android, web"],
      ["Status", "Live, version 3.10"],
    ],
    chips: [
      ["Real-time voice", "Gemini Live over WebSocket"],
      ["13 languages", "from A1 to C2"],
    ],
    intro:
      "You learn a language by speaking it. With Mio, a little dragon, you talk out loud in real time. Around those conversations sits a real course: A1 to C2 lessons, quizzes, listening, flashcards, audio folk tales, leagues and streaks. Launched in December 2025, with 3,000+ commits since.",
    featuresTitle: "What the app does",
    steps: [
      {
        id: "today",
        title: "A daily plan, made to measure",
        text: "The coach spots each learner's weak points and plans the day: targeted quizzes, listening, a lesson, a conversation. Every step says why it's there.",
        alt: "Mio home screen: today's plan and the current week",
      },
      {
        id: "talk",
        title: "Real-time conversation",
        text: "The phone connects straight to Gemini Live over a WebSocket, with no server in between. If Google blocks the connection, the app switches to a Hono relay with per-user limits.",
        alt: "Mio Talk screen: a role-play in a pizzeria in Naples",
      },
      {
        id: "quiz",
        title: "Exercises generated once, then reused",
        text: "Gemini creates exercises on demand and stores them in a shared bank that's served again with no new model call. Each learner's level is estimated Elo-style.",
        alt: "Mio quiz screen",
      },
      {
        id: "lesson",
        title: "A real curriculum, A1 to C2",
        text: "Structured lessons, spaced repetition for vocabulary and 32 folk tales translated into all 13 languages, with audio synced word by word.",
        alt: "Mio lesson screen",
      },
    ],
    systemTitle: "Under the hood",
    systemIntro:
      "A native app, an API, a database, a website, an admin console and a content factory, on infrastructure I set up and run myself.",
    system: [
      {
        title: "A locked-down Postgres database",
        text: "30+ tables on Supabase, RLS everywhere and no direct access from the app: everything goes through the API. XP, quotas and progress are handled by atomic SQL functions, and RevenueCat webhooks feed an immutable history for MRR, churn and conversions.",
      },
      {
        title: "An API that keeps costs in check",
        text: "Hono and TypeScript, zod validation, scheduled jobs, 600+ test files. Every AI call is logged with its model, tokens and cost, and prompts are evaluated before every change.",
      },
      {
        title: "Deployment with no way in",
        text: "A hardened Debian VPS with Docker and Caddy. GitHub Actions builds the image and the server pulls it itself: GitHub has no access to the machine.",
      },
      {
        title: "A console to run it all",
        text: "Feature flags, prompt editing, AI costs, revenue, scheduled jobs, push notifications and an audit log, limited to a single Google account.",
      },
    ],
    diagram: {
      title: "Mio architecture",
      desc: "The app talks directly to Gemini Live for voice and to the Hono API for everything else. The API relies on Supabase, Gemini, text-to-speech and RevenueCat. The website, the console and mio-studio sit around it.",
      app: "iOS and Android app",
      appSub: "Expo, React Native",
      live: "Gemini Live",
      liveSub: "real-time voice",
      api: "Hono API",
      apiSub: "Node, Docker, VPS",
      db: "Supabase",
      dbSub: "Postgres, RLS, 30+ tables",
      ai: "Gemini and TTS",
      aiSub: "generation, voice, cache",
      pay: "RevenueCat",
      paySub: "subscriptions, webhooks",
      web: "Website",
      webSub: "Next.js, 13 languages",
      admin: "Console",
      adminSub: "flags, prompts, costs",
      studio: "mio-studio",
      studioSub: "5 Instagram accounts",
      ws: "direct WebSocket",
      relay: "relay if blocked",
    },
    socialTitle: "Growth is automated too",
    social:
      "mio-studio runs five Instagram accounts, in French, English, Spanish, Italian and Japanese. Every Saturday, a Claude Code session reviews the week's numbers, keeps a journal, then writes and renders next week's Reels. Videos are animated in code with Remotion, voices are synthesized locally, and a service on the VPS publishes on schedule. I approve every post before it goes out.",
    socialFacts: [
      "About 400 videos rendered",
      "Remotion, Mio and ten characters",
      "Local voices with Qwen3-TTS",
      "Scheduled publishing through Supabase",
    ],
    reelLabel: "A clip from a Reel generated by mio-studio",
    links: { site: "miotutor.app", appStore: "App Store", play: "Google Play" },
  },
  shelltown: {
    tagline: "A living office for running your coding agents on a Mac.",
    highlights: [
      "Every Claude Code or Codex session becomes a character",
      "Permissions are approved from the Mac's notch",
      "Rust engine, Swift app and a pixel-art world",
    ],
    facts: [
      ["Platform", "macOS, native app"],
      ["Status", "In development"],
    ],
    chips: [
      ["100 sessions", "at about 13% CPU"],
      ["Claude Code and Codex", "in a single office"],
    ],
    intro:
      "With ten Claude Code and Codex sessions running at once, it's easy to lose track. Shelltown gathers them on a pixel-art skyscraper floor: each session is a character at a desk, each project a room, and the character's posture shows what it's really doing, working, on a break or waiting for your answer.",
    shots: {
      cli: "A real Claude Code session in Shelltown's terminal.",
      meeting:
        "A meeting between three agents (architect, reviewer, tester) and what they decided.",
    },
    features: [
      {
        title: "Permissions in the notch",
        text: "Claude Code's requests show up in the Mac's notch. Only a real click approves them: an agent can't approve itself.",
      },
      {
        title: "Agents that work together",
        text: "Handover from Claude to Codex, meetings between two to four agents, per-project goals, review of changes and pull requests.",
      },
      {
        title: "Accurate numbers, no API key",
        text: "Quotas, model, context and cost are read from the CLIs' own data. When a value is unknown, the app says so instead of guessing.",
      },
      {
        title: "Light, even with a hundred agents",
        text: "A hundred sessions on one floor at about 13% CPU, with WCAG AA contrast checked by tests.",
      },
    ],
    builtTitle: "Under the hood",
    built:
      "A Rust engine (tokio, PTYs, WebSocket, SQLite) owns the processes and the data. A Swift and AppKit app shows the interface in a locked-down WKWebView and updates through Sparkle. The interface is framework-free TypeScript: a Canvas 2D world drawn entirely in code, A* pathfinding and an xterm.js terminal on WebGL.",
    filmLabel: "Shelltown: from the office out to Manhattan, at the real time of day",
    videoLabel: "Shelltown in demo mode: the floor, agents at work and pending requests",
    link: "shelltown.app",
  },
  fastflix: {
    tagline: "Say what you're in the mood for, the AI finds the movie.",
    highlights: [
      "Natural-language search with Gemini",
      "Every suggestion checked against TMDB",
      "Where to watch, across 200+ services",
    ],
    facts: [
      ["Platforms", "iOS, Android"],
      ["Status", "Live, version 4.1"],
    ],
    chips: [
      ["200+ services", "to know where to watch"],
      ["Gemini and TMDB", "every pick checked"],
    ],
    intro:
      "FastFlix turns a vague mood into a short list that's ready to watch. The app learns your taste from your ratings, swipes and favorite actors, takes your subscriptions into account and explains every pick. Available in 6 languages.",
    steps: [
      {
        id: "ai-search",
        title: "You describe what you want",
        text: "Natural-language search that respects the actors, directors and services you ask for.",
        alt: "FastFlix AI search",
      },
      {
        id: "ai-results",
        title: "Gemini suggests, TMDB checks",
        text: "Every title is matched against a real record before it's shown, along with why it was picked.",
        alt: "FastFlix results with the assistant's explanation",
      },
      {
        id: "feed",
        title: "Ten picks a day",
        text: "A swipeable feed, episode tracking and the services where each title is available.",
        alt: "FastFlix feed of picks",
      },
    ],
    videoLabel:
      "FastFlix on iPhone: the feed of picks, a natural-language search, Gemini's results and a title page",
    videoCaption: "A real session, recorded in the iOS Simulator.",
    links: { site: "fastflix-movie.com", appStore: "App Store", play: "Google Play" },
  },
  stackLabel: "Stack",
  method: {
    title: "I work with AI agents the way I'd work with a team",
    lead: "Claude Code and Codex write most of my code. My job: frame the need, split the work, give the agents the right tools, review, and stay accountable for what goes to production.",
    chartTitle: "My commits in 2026",
    chartCaption: `${n("en", ACTIVITY.total)} commits across ${ACTIVITY.repos} repositories in 2026, ${ACTIVITY.activeDays} active days out of ${ACTIVITY.days.length}. ${AGENT_SHARE}% are co-signed by an agent.`,
    chartLegendLess: "Less",
    chartLegendMore: "More",
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayLabel: (date, count) => `${date}: ${count} commit${count > 1 ? "s" : ""}`,
    practices: [
      {
        title: "Shared context",
        text: "Every repository has its CLAUDE.md or AGENTS.md, often with a PRODUCT.md and a DESIGN.md. Claude and Codex follow the same rules and the same product vision.",
      },
      {
        title: "Custom skills and sub-agents",
        text: "issue-to-pr (from issue to pull request, tests and simulator QA included), release (EAS build, notes in 8 languages, store submission), an agent dedicated to tests. The same ones for Claude and Codex.",
      },
      {
        title: "Agents in parallel",
        text: "Work is split into independent tasks, one agent per git worktree, with a review before merging. The Menu Hub notification center at Big Mamma was built this way.",
      },
      {
        title: "Wired into production, read-only",
        text: "Through MCP servers (Supabase, Sentry, Linear, Vercel, Firebase, Google Cloud, Grafana, iOS Simulator), agents check errors, logs and schemas themselves.",
      },
      {
        title: "Everything gets checked",
        text: "Tests, automatic guardrails (route inventory, complete translations), QA in a real browser with Playwright, prompt evaluations before every change.",
      },
      {
        title: "Agents that run on their own",
        text: "Some jobs run unattended: mio-studio's weekly session, or an app's support inbox triaged by Claude Opus, with reply drafts written by Claude Code on the server.",
      },
    ],
    toolsLine: "And when the tool I need doesn't exist, I build it: that's Shelltown.",
    aiTitle: "The AI I build into products",
    ai: [
      { title: "Real-time voice", text: "Gemini Live over WebSocket, fallback relay." },
      { title: "Semantic search", text: "Embeddings, pgvector, HNSW index." },
      { title: "Document reading", text: "Mistral OCR, structured extraction with GPT." },
      { title: "Controlled generation", text: "zod schemas, reusable banks, prompt evaluations." },
      { title: "Text-to-speech", text: "Gemini TTS, Google Cloud TTS, caching, word-level sync." },
      { title: "Costs and quotas", text: "Every call tracked, limits per user and per device." },
    ],
  },
  missions: {
    title: "Client work in 2026",
    intro: "As a freelancer, inside product teams, on existing codebases.",
    items: [
      {
        client: "Shinobi Japanese, Coco Chinese, Gallus French, Leo English",
        period: "Since May 2026",
        context: "Learning languages through stories. Shinobi: 300,000+ downloads, rated 4.8",
        text: "React Native and Firebase development, RevenueCat subscriptions, iOS widgets in Swift, AI-generated illustrated stories and audio, support triaged by Claude. Lead developer of Gallus and Leo, and of the shared data warehouse (Postgres, TimescaleDB, Metabase).",
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
        period: "March to July 2026, then since October",
        context: "Restaurant group across several countries",
        text: "First an internal P&L forecasting tool for the restaurants, then Menu Hub, the menu back-office: roles and permissions by group, country and restaurant, a notification and comment center, Google sign-in, transactional emails.",
        tags: ["Next.js 16", "React 19", "Prisma 7", "Supabase", "Vitest", "next-intl"],
      },
      {
        client: "Swipelink",
        period: "Since July 2026",
        context: "Recruitment and apprenticeship platform",
        text: "Eight TypeScript microservices on Google Cloud Run (Pub/Sub, Cloud Tasks, Terraform). CV reading with Mistral OCR and GPT extraction, embedding-based matching in pgvector, self-service Stripe billing, Cegid sync.",
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
    title: "Background",
    jobsTitle: "Experience",
    jobs: [
      {
        period: "2025 – now",
        role: "Freelance developer",
        company: "Independent",
        place: "Nice and remote",
        text: "Client work for Shinobi Japanese, Big Mamma Group and Swipelink, plus my own products: Mio, FastFlix and Shelltown.",
      },
      {
        period: "2025",
        role: "Front-end developer",
        company: "Encore Mieux",
        place: "Remote",
        text: "Next.js interfaces, Sanity content, GROQ queries, Docker.",
      },
      {
        period: "2024 – 2025",
        role: "Web developer",
        company: "Winter Energies",
        place: "Le Bourget-du-Lac",
        text: "Next.js, TypeScript and Tailwind, helping households use less energy.",
      },
      {
        period: "2022 – 2024",
        role: "Full stack developer",
        company: "LA BOITE IMMO",
        place: "Hyères",
        text: "Software for real-estate agencies: React, Next.js, pixel-perfect Figma builds, Symfony API, Storybook, Docker.",
      },
      {
        period: "2021 – 2022",
        role: "Full stack web developer",
        company: "VITASSURANCE",
        place: "Nice",
        text: "Online insurance comparison: Node.js, Express, real-time third-party APIs.",
      },
      {
        period: "2014 – 2020",
        role: "Web analyst",
        company: "SARL du Soleil",
        place: "La Londe-les-Maures",
        text: "SEO for an online store, administration and audience analytics.",
      },
    ],
    schoolTitle: "Education",
    schools: [
      {
        period: "2020 – 2021",
        role: "Bachelor's in web and mobile development",
        company: "3WAcademy",
        place: "",
        text: "",
      },
      {
        period: "2020",
        role: "State-certified web developer (RNCP level 5)",
        company: "OpenClassrooms",
        place: "",
        text: "",
      },
      {
        period: "2016 – 2017",
        role: "Bachelor's in e-commerce and digital marketing",
        company: "University of Toulon",
        place: "",
        text: "",
      },
    ],
    languagesTitle: "Languages",
    languages: [
      ["French", "native"],
      ["English", "fluent (C1)"],
      ["Italian", "intermediate (B1)"],
    ],
    stackTitle: "My tools",
    stack: [
      {
        group: "AI and agents",
        items:
          "Claude Code, Codex, MCP, Anthropic, OpenAI, Gemini (Live, TTS), Mistral, embeddings, pgvector",
      },
      {
        group: "Mobile",
        items:
          "React Native, Expo, Reanimated, Zustand, TanStack Query, RevenueCat, EAS, iOS widgets in Swift",
      },
      { group: "Web", items: "TypeScript, React, Next.js, Astro, Tailwind, next-intl, Remotion" },
      {
        group: "Back end and data",
        items: "Node.js, Hono, PostgreSQL, Supabase, Prisma, Firebase, Turso, Stripe",
      },
      { group: "macOS and native", items: "Swift, AppKit, Rust, tokio, WebKit" },
      {
        group: "Infrastructure and quality",
        items:
          "Docker, Caddy, GitHub Actions, Google Cloud, Terraform, Sentry, PostHog, Vitest, Jest, Playwright",
      },
      {
        group: "Release and monitoring",
        items:
          "App Store Connect, Play Console, EAS, Vercel, Cloudflare, Hostinger, DigitalOcean, UptimeRobot, Resend, Paddle, Metabase, Aptabase",
      },
      { group: "Teamwork", items: "Linear, Notion, Slack, GitHub Projects, Figma" },
    ],
  },
  contact: {
    title: "Contact",
    email: "Email",
    copy: "Copy",
    copied: "Copied",
    phone: "Phone",
    cvTitle: "Resume (PDF)",
    cv: [
      { lang: "en", label: "English" },
      { lang: "fr", label: "Français" },
      { lang: "ch", label: "Français (Suisse)" },
      { lang: "it", label: "Italiano" },
    ],
    elsewhere: "Online",
  },
  footer: "Designed and built with Astro, with no client-side JavaScript framework.",
  playVideo: "Play video",
  pauseVideo: "Pause video",
};
