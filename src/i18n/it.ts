import { ACTIVITY, AGENT_SHARE, PROFILE } from "@/data/profile";
import { n, type Copy } from "./types";

export const it: Copy = {
  meta: {
    title: `${PROFILE.name}, ${PROFILE.role}`,
    description:
      "AI Full Stack Engineer a Nizza. Progetto e porto in produzione prodotti di IA completi su iOS, Android, web e macOS, lavorando con Claude Code e Codex.",
    ogLocale: "it_IT",
  },
  nav: {
    projects: "Progetti",
    method: "Metodo",
    missions: "Clienti",
    path: "Percorso",
    contact: "Contatti",
    cv: "CV",
    menu: "Menu",
    languages: "Lingue del sito",
  },
  hero: {
    lead: "Progetto e porto in produzione prodotti di IA completi, dall'app mobile fino al server. Claude Code e Codex sono la mia squadra: io do la direzione, divido il lavoro, rileggo e rilascio.",
    ctaContact: "Contattami",
    ctaCv: "Scarica il CV",
    figures: {
      mio: "Mio su iPhone",
      shelltown: "Shelltown su macOS",
      fastflix: "FastFlix su iPhone",
    },
    chips: (commits, share) => ({
      commits: `${commits} commit nel 2026`,
      commitsSub: `il ${share}% co-firmato da un agente`,
      platforms: "iOS, Android, web, macOS",
      platformsSub: "dall'app fino al server",
    }),
  },
  projects: {
    title: "I miei prodotti",
    intro:
      "Tre app che ho ideato, sviluppato e pubblicato. Aprine una per vedere come è costruita.",
    more: "Vedi i dettagli",
    less: "Chiudi",
  },
  mio: {
    tagline: "Il tutor di lingue con IA con cui si parla davvero.",
    highlights: [
      "Conversazioni vocali in tempo reale con Gemini Live",
      "13 lingue e un percorso completo, dall'A1 al C2",
      "Reel Instagram prodotti ogni settimana da Claude Code",
    ],
    facts: [
      ["Piattaforme", "iOS, Android, web"],
      ["Stato", "In produzione, versione 3.10"],
    ],
    chips: [
      ["Voce in tempo reale", "Gemini Live via WebSocket"],
      ["13 lingue", "dall'A1 al C2"],
    ],
    intro:
      "Una lingua si impara parlandola. Con Mio, un piccolo drago, si conversa ad alta voce e in tempo reale. Intorno a queste conversazioni c'è un vero percorso: lezioni dall'A1 al C2, quiz, ascolto, flashcard, fiabe audio, leghe e serie. Lanciato a dicembre 2025, con oltre 3.000 commit da allora.",
    featuresTitle: "Cosa fa l'app",
    steps: [
      {
        id: "today",
        title: "Un programma del giorno su misura",
        text: "Il coach individua i punti deboli di ognuno e prepara la giornata: quiz mirati, ascolto, lezione, conversazione. Ogni tappa spiega perché c'è.",
        alt: "Schermata iniziale di Mio: il programma del giorno e la settimana in corso",
      },
      {
        id: "talk",
        title: "La conversazione in tempo reale",
        text: "Il telefono si collega direttamente a Gemini Live via WebSocket, senza server intermedio. Se Google blocca la connessione, l'app passa a un relay Hono, con limiti per utente.",
        alt: "Schermata Talk di Mio: un gioco di ruolo in una pizzeria di Napoli",
      },
      {
        id: "quiz",
        title: "Esercizi generati e poi riutilizzati",
        text: "Gemini crea gli esercizi su richiesta e li salva in una banca condivisa, riproposta senza nuove chiamate al modello. Il livello di ognuno è stimato in stile Elo.",
        alt: "Schermata di quiz di Mio",
      },
      {
        id: "lesson",
        title: "Un vero percorso, dall'A1 al C2",
        text: "Lezioni strutturate, ripetizione dilazionata del lessico e 32 fiabe tradotte nelle 13 lingue, con audio sincronizzato parola per parola.",
        alt: "Schermata di lezione di Mio",
      },
    ],
    systemTitle: "Sotto il cofano",
    systemIntro:
      "Un'app nativa, un'API, un database, un sito, una console di amministrazione e una fabbrica di contenuti, su un'infrastruttura che ho messo in piedi e che gestisco.",
    system: [
      {
        title: "Un database Postgres blindato",
        text: "Oltre 30 tabelle su Supabase, RLS ovunque e nessun accesso diretto dall'app: tutto passa dall'API. XP, quote e progressi sono gestiti da funzioni SQL atomiche, e i webhook di RevenueCat alimentano uno storico immutabile per MRR, churn e conversioni.",
      },
      {
        title: "Un'API che tiene i costi sotto controllo",
        text: "Hono e TypeScript, validazione zod, attività programmate, oltre 600 file di test. Ogni chiamata all'IA è registrata con modello, token e costo, e i prompt vengono valutati prima di ogni modifica.",
      },
      {
        title: "Un deploy senza accessi in entrata",
        text: "Un VPS Debian irrobustito con Docker e Caddy. GitHub Actions costruisce l'immagine ed è il server ad andarla a prendere: GitHub non ha alcun accesso alla macchina.",
      },
      {
        title: "Una console per gestire tutto",
        text: "Feature flag, modifica dei prompt, costi dell'IA, ricavi, attività programmate, notifiche push e registro di audit, riservati a un solo account Google.",
      },
    ],
    diagram: {
      title: "Architettura di Mio",
      desc: "L'app parla direttamente con Gemini Live per la voce e con l'API Hono per tutto il resto. L'API si appoggia a Supabase, Gemini, alla sintesi vocale e a RevenueCat. Il sito, la console e mio-studio ruotano attorno.",
      app: "App iOS e Android",
      appSub: "Expo, React Native",
      live: "Gemini Live",
      liveSub: "voce in tempo reale",
      api: "API Hono",
      apiSub: "Node, Docker, VPS",
      db: "Supabase",
      dbSub: "Postgres, RLS, 30+ tabelle",
      ai: "Gemini e TTS",
      aiSub: "generazione, voce, cache",
      pay: "RevenueCat",
      paySub: "abbonamenti, webhook",
      web: "Sito web",
      webSub: "Next.js, 13 lingue",
      admin: "Console",
      adminSub: "flag, prompt, costi",
      studio: "mio-studio",
      studioSub: "5 account Instagram",
      ws: "WebSocket diretto",
      relay: "relay se bloccato",
    },
    socialTitle: "Anche l'acquisizione è automatizzata",
    social:
      "mio-studio gestisce cinque account Instagram, in francese, inglese, spagnolo, italiano e giapponese. Ogni sabato una sessione di Claude Code analizza i numeri della settimana, tiene un diario, poi scrive e genera i Reel della settimana successiva. I video sono animati in codice con Remotion, le voci sintetizzate in locale, e un servizio sul VPS pubblica agli orari previsti. Approvo ogni post prima che esca.",
    socialFacts: [
      "Circa 400 video generati",
      "Remotion, Mio e dieci personaggi",
      "Voci locali con Qwen3-TTS",
      "Pubblicazione programmata con Supabase",
    ],
    reelLabel: "Estratto di un Reel generato da mio-studio",
    links: { site: "miotutor.app", appStore: "App Store", play: "Google Play" },
  },
  shelltown: {
    tagline: "Un ufficio vivo per guidare i propri agenti di programmazione su Mac.",
    highlights: [
      "Ogni sessione di Claude Code o Codex diventa un personaggio",
      "Le autorizzazioni si approvano dal notch del Mac",
      "Motore Rust, app Swift e un mondo in pixel art",
    ],
    facts: [
      ["Piattaforma", "macOS, app nativa"],
      ["Stato", "In sviluppo"],
    ],
    chips: [
      ["100 sessioni", "con circa il 13% di CPU"],
      ["Claude Code e Codex", "in un solo ufficio"],
    ],
    intro:
      "Con dieci sessioni di Claude Code e Codex attive insieme, si perde presto il filo. Shelltown le riunisce su un piano di grattacielo in pixel art: ogni sessione è un personaggio alla sua scrivania, ogni progetto una stanza, e la sua postura mostra cosa sta facendo davvero, al lavoro, in pausa o in attesa di una tua risposta.",
    shots: {
      cli: "Una vera sessione di Claude Code nel terminale di Shelltown.",
      meeting: "Una riunione tra tre agenti (architetto, revisore, tester) e le loro decisioni.",
    },
    features: [
      {
        title: "Le autorizzazioni nel notch",
        text: "Le richieste di Claude Code compaiono nel notch del Mac. Solo un vero clic le approva: un agente non può autorizzarsi da solo.",
      },
      {
        title: "Agenti che collaborano",
        text: "Passaggio di consegne da Claude a Codex, riunioni tra due e quattro agenti, obiettivi per progetto, revisione delle modifiche e delle pull request.",
      },
      {
        title: "Numeri esatti, senza chiave API",
        text: "Quote, modello, contesto e costo vengono letti dai dati delle CLI. Quando un valore è sconosciuto, l'app lo dice invece di inventarlo.",
      },
      {
        title: "Leggero, anche con cento agenti",
        text: "Cento sessioni su un piano con circa il 13% di CPU, e contrasti WCAG AA verificati dai test.",
      },
    ],
    builtTitle: "Sotto il cofano",
    built:
      "Un motore Rust (tokio, PTY, WebSocket, SQLite) gestisce i processi e i dati. Un'app Swift e AppKit mostra l'interfaccia in una WKWebView protetta e si aggiorna con Sparkle. L'interfaccia è in TypeScript senza framework: un mondo in Canvas 2D disegnato interamente in codice, pathfinding A* e un terminale xterm.js su WebGL.",
    filmLabel: "Shelltown: dall'ufficio fino a Manhattan, all'ora reale del giorno",
    videoLabel:
      "Shelltown in modalità demo: il piano, gli agenti al lavoro e le richieste in attesa",
    link: "shelltown.app",
  },
  fastflix: {
    tagline: "Di' cosa ti va di guardare, l'IA trova il film.",
    highlights: [
      "Ricerca in linguaggio naturale con Gemini",
      "Ogni suggerimento verificato su TMDB",
      "Dove guardarlo, tra oltre 200 piattaforme",
    ],
    facts: [
      ["Piattaforme", "iOS, Android"],
      ["Stato", "In produzione, versione 4.1"],
    ],
    chips: [
      ["Oltre 200 piattaforme", "per sapere dove guardare"],
      ["Gemini e TMDB", "ogni suggerimento verificato"],
    ],
    intro:
      "FastFlix trasforma una voglia vaga in una breve lista pronta da guardare. L'app impara i tuoi gusti da voti, swipe e attori preferiti, tiene conto dei tuoi abbonamenti e spiega ogni suggerimento. Disponibile in 6 lingue.",
    steps: [
      {
        id: "ai-search",
        title: "Descrivi cosa ti va",
        text: "Una ricerca in linguaggio naturale che rispetta attori, registi e piattaforme richiesti.",
        alt: "Ricerca IA di FastFlix",
      },
      {
        id: "ai-results",
        title: "Gemini propone, TMDB verifica",
        text: "Ogni titolo viene confrontato con una scheda reale prima di essere mostrato, con il motivo della scelta.",
        alt: "Risultati di FastFlix con la spiegazione dell'assistente",
      },
      {
        id: "feed",
        title: "Dieci suggerimenti al giorno",
        text: "Un feed da scorrere, il monitoraggio degli episodi e le piattaforme dove ogni titolo è disponibile.",
        alt: "Feed di suggerimenti di FastFlix",
      },
    ],
    videoLabel:
      "FastFlix su iPhone: il feed di suggerimenti, una ricerca in linguaggio naturale, i risultati di Gemini e una scheda",
    videoCaption: "Una vera sessione, registrata nel simulatore iOS.",
    links: { site: "fastflix-movie.com", appStore: "App Store", play: "Google Play" },
  },
  stackLabel: "Stack",
  method: {
    title: "Lavoro con gli agenti IA come con una squadra",
    lead: "Claude Code e Codex scrivono gran parte del mio codice. Il mio ruolo: definire il bisogno, dividere il lavoro, dare agli agenti gli strumenti giusti, rileggere, e restare responsabile di ciò che va in produzione.",
    chartTitle: "I miei commit nel 2026",
    chartCaption: `${n("it", ACTIVITY.total)} commit su ${ACTIVITY.repos} repository nel 2026, ${ACTIVITY.activeDays} giorni attivi su ${ACTIVITY.days.length}. L'${AGENT_SHARE}% è co-firmato da un agente.`,
    chartLegendLess: "Meno",
    chartLegendMore: "Più",
    months: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
    dayLabel: (date, count) => `${date}: ${count} commit`,
    practices: [
      {
        title: "Un contesto condiviso",
        text: "Ogni repository ha il suo CLAUDE.md o AGENTS.md, spesso con un PRODUCT.md e un DESIGN.md. Claude e Codex seguono le stesse regole e la stessa visione del prodotto.",
      },
      {
        title: "Skill e sotto-agenti su misura",
        text: "issue-to-pr (dalla issue alla pull request, test e QA sul simulatore inclusi), release (build EAS, note in 8 lingue, invio agli store), un agente dedicato ai test. Gli stessi per Claude e Codex.",
      },
      {
        title: "Agenti in parallelo",
        text: "Il lavoro è diviso in compiti indipendenti, un agente per worktree git, con una revisione prima del merge. Il centro notifiche di Menu Hub, da Big Mamma, è nato così.",
      },
      {
        title: "Collegati alla produzione, in sola lettura",
        text: "Tramite i server MCP (Supabase, Sentry, Linear, Vercel, Firebase, Google Cloud, Grafana, simulatore iOS), gli agenti consultano da soli errori, log e schema.",
      },
      {
        title: "Tutto viene verificato",
        text: "Test, controlli automatici (inventario delle rotte, traduzioni complete), QA in un vero browser con Playwright, valutazione dei prompt prima di ogni modifica.",
      },
      {
        title: "Agenti autonomi",
        text: "Alcuni compiti girano da soli: la sessione settimanale di mio-studio, o l'assistenza di un'app smistata da Claude Opus, con bozze di risposta scritte da Claude Code sul server.",
      },
    ],
    toolsLine: "E quando lo strumento che mi serve non esiste, lo costruisco: è Shelltown.",
    aiTitle: "L'IA che integro nei prodotti",
    ai: [
      { title: "Voce in tempo reale", text: "Gemini Live via WebSocket, relay di riserva." },
      { title: "Ricerca semantica", text: "Embedding, pgvector, indice HNSW." },
      { title: "Lettura di documenti", text: "OCR Mistral, estrazione strutturata con GPT." },
      {
        title: "Generazione controllata",
        text: "Schemi zod, banche riutilizzabili, valutazione dei prompt.",
      },
      {
        title: "Sintesi vocale",
        text: "Gemini TTS, Google Cloud TTS, cache, sincronizzazione parola per parola.",
      },
      {
        title: "Costi e quote",
        text: "Ogni chiamata tracciata, limiti per utente e per dispositivo.",
      },
    ],
  },
  missions: {
    title: "Progetti per clienti nel 2026",
    intro: "Da freelance, dentro team di prodotto, su codice già esistente.",
    items: [
      {
        client: "Shinobi Japanese, Coco Chinese, Gallus French, Leo English",
        period: "Da maggio 2026",
        context: "Imparare le lingue con le storie. Shinobi: oltre 300.000 download, voto 4,8",
        text: "Sviluppo mobile React Native e Firebase, abbonamenti RevenueCat, widget iOS in Swift, storie illustrate e audio generati dall'IA, assistenza smistata da Claude. Sviluppatore principale di Gallus e Leo, e del data warehouse comune (Postgres, TimescaleDB, Metabase).",
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
        period: "Da marzo a luglio 2026, poi da ottobre",
        context: "Gruppo di ristoranti presente in più paesi",
        text: "Prima uno strumento interno di previsione del conto economico dei ristoranti, poi Menu Hub, il back-office dei menu: ruoli e permessi per gruppo, paese e ristorante, centro notifiche e commenti, accesso con Google, e-mail transazionali.",
        tags: ["Next.js 16", "React 19", "Prisma 7", "Supabase", "Vitest", "next-intl"],
      },
      {
        client: "Swipelink",
        period: "Da luglio 2026",
        context: "Piattaforma di recruiting e apprendistato",
        text: "Otto microservizi TypeScript su Google Cloud Run (Pub/Sub, Cloud Tasks, Terraform). Lettura dei CV con OCR Mistral ed estrazione con GPT, matching tramite embedding in pgvector, fatturazione Stripe self-service, sincronizzazione con Cegid.",
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
    title: "Percorso",
    jobsTitle: "Esperienza",
    jobs: [
      {
        period: "2025 – oggi",
        role: "Sviluppatore freelance",
        company: "Indipendente",
        place: "Nizza e da remoto",
        text: "Progetti per Shinobi Japanese, Big Mamma Group e Swipelink, e i miei prodotti: Mio, FastFlix e Shelltown.",
      },
      {
        period: "2025",
        role: "Sviluppatore front-end",
        company: "Encore Mieux",
        place: "Da remoto",
        text: "Interfacce Next.js, contenuti Sanity, query GROQ, Docker.",
      },
      {
        period: "2024 – 2025",
        role: "Sviluppatore web",
        company: "Winter Energies",
        place: "Le Bourget-du-Lac",
        text: "Next.js, TypeScript e Tailwind, per aiutare le famiglie a consumare meno energia.",
      },
      {
        period: "2022 – 2024",
        role: "Sviluppatore full stack",
        company: "LA BOITE IMMO",
        place: "Hyères",
        text: "Software per agenzie immobiliari: React, Next.js, integrazione Figma al pixel, API Symfony, Storybook, Docker.",
      },
      {
        period: "2021 – 2022",
        role: "Sviluppatore web full stack",
        company: "VITASSURANCE",
        place: "Nizza",
        text: "Comparatore di assicurazioni online: Node.js, Express, API di terze parti in tempo reale.",
      },
      {
        period: "2014 – 2020",
        role: "Analista web",
        company: "SARL du Soleil",
        place: "La Londe-les-Maures",
        text: "SEO di un negozio online, amministrazione e analisi del pubblico.",
      },
    ],
    schoolTitle: "Formazione",
    schools: [
      {
        period: "2020 – 2021",
        role: "Laurea triennale in sviluppo web e mobile",
        company: "3WAcademy",
        place: "",
        text: "",
      },
      {
        period: "2020",
        role: "Titolo di Stato di sviluppatore web (RNCP livello 5)",
        company: "OpenClassrooms",
        place: "",
        text: "",
      },
      {
        period: "2016 – 2017",
        role: "Laurea triennale in e-commerce e marketing digitale",
        company: "Università di Tolone",
        place: "",
        text: "",
      },
    ],
    languagesTitle: "Lingue",
    languages: [
      ["Francese", "madrelingua"],
      ["Inglese", "fluente (C1)"],
      ["Italiano", "intermedio (B1)"],
    ],
    stackTitle: "I miei strumenti",
    stack: [
      {
        group: "IA e agenti",
        items:
          "Claude Code, Codex, MCP, Anthropic, OpenAI, Gemini (Live, TTS), Mistral, embedding, pgvector",
      },
      {
        group: "Mobile",
        items:
          "React Native, Expo, Reanimated, Zustand, TanStack Query, RevenueCat, EAS, widget iOS in Swift",
      },
      { group: "Web", items: "TypeScript, React, Next.js, Astro, Tailwind, next-intl, Remotion" },
      {
        group: "Back end e dati",
        items: "Node.js, Hono, PostgreSQL, Supabase, Prisma, Firebase, Turso, Stripe",
      },
      { group: "macOS e nativo", items: "Swift, AppKit, Rust, tokio, WebKit" },
      {
        group: "Infrastruttura e qualità",
        items:
          "Docker, Caddy, GitHub Actions, Google Cloud, Terraform, Sentry, PostHog, Vitest, Jest, Playwright",
      },
      {
        group: "Rilascio e monitoraggio",
        items:
          "App Store Connect, Play Console, EAS, Vercel, Cloudflare, Hostinger, DigitalOcean, UptimeRobot, Resend, Paddle, Metabase, Aptabase",
      },
      { group: "Organizzazione", items: "Linear, Notion, Slack, GitHub Projects, Figma" },
    ],
  },
  contact: {
    title: "Contatti",
    email: "E-mail",
    copy: "Copia",
    copied: "Copiato",
    phone: "Telefono",
    cvTitle: "CV in PDF",
    cv: [
      { lang: "it", label: "Italiano" },
      { lang: "en", label: "English" },
      { lang: "fr", label: "Français" },
      { lang: "ch", label: "Français (Suisse)" },
    ],
    elsewhere: "Online",
  },
  footer: "Progettato e sviluppato con Astro, senza framework JavaScript lato client.",
  playVideo: "Riproduci il video",
  pauseVideo: "Metti in pausa il video",
};
