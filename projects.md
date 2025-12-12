# Projets Personnels

---

## FastFlix

### Description
Application mobile de recommandations de films et séries TV propulsée par l'intelligence artificielle. L'utilisateur décrit ce qu'il souhaite regarder en langage naturel et l'IA lui propose des suggestions personnalisées enrichies avec les données TMDB.

### Type de projet
Projet personnel - Application mobile complète avec backend et site marketing

### Stack Technique

| Catégorie | Technologies |
|-----------|--------------|
| **Mobile** | React Native, Expo, TypeScript, React Query |
| **Backend** | Next.js 16, TypeScript, Turso (SQLite), Zod |
| **Site web** | Next.js 15, TypeScript, TailwindCSS |
| **IA** | Google Gemini 2.0 Flash |
| **Données** | TMDB API |
| **Paiements** | RevenueCat |
| **Infrastructure** | Vercel, Turso |

### Fonctionnalites cles
- Recommandations de films/series par IA en langage naturel
- Authentification Apple Sign In (Google Sign In ready)
- Authentification securisee par JWT (tokens 30 jours)
- Integration RevenueCat pour la gestion des abonnements
- Synchronisation temps reel des statuts d'abonnement via webhooks
- Gestion automatique du rafraichissement des tokens
- Protection anti-abus et rate limiting
- Recherches illimitees pour les abonnes Pro

### Architecture
```
fastflix/
├── frontend/    # Application mobile React Native (Expo)
├── backend/     # API Next.js (Vercel)
└── website/     # Site marketing (Next.js)
```

### Liens
- **Demo** : https://fastflix-website.vercel.app
- **GitHub** : https://github.com/brazillierjo/fastflix

### Statut
En production - Disponible sur App Store / Google Play Store

---

## Wallet

### Description
Application de gestion de portefeuille personnel permettant aux utilisateurs de visualiser leurs depenses pour mieux comprendre leurs habitudes financieres. Interface moderne et responsive avec un backend robuste.

### Type de projet
Projet personnel - Application web full-stack

### Stack Technique

| Catégorie | Technologies |
|-----------|--------------|
| **Frontend** | Next.js 15, React 19, TypeScript, TailwindCSS |
| **UI Components** | Radix UI, Framer Motion, Lucide Icons |
| **State Management** | React Query, React Hook Form, Zod |
| **Backend** | Bun, Elysia.js, TypeScript |
| **Base de donnees** | Prisma ORM |
| **Authentification** | JWT, bcrypt |
| **Internationalisation** | next-intl |

### Fonctionnalites cles
- Tableau de bord de visualisation des depenses
- Categorisation des transactions
- Interface responsive et moderne
- Theme clair/sombre
- Authentification securisee
- API REST documentee
- Deploiement automatise via GitHub Actions

### Architecture
```
wallet/
├── frontend/    # Application Next.js
└── backend/     # API Elysia.js avec Prisma
```

### Liens
- **GitHub** : https://github.com/brazillierjo/wallet

### Statut
En production - Deploye sur VPS

---

## Mio

### Description
Projet complet comprenant un agent IA, une API backend et un site web marketing. Architecture moderne avec internationalisation.

### Type de projet
Projet personnel - Application SaaS (Prive)

### Stack Technique

| Catégorie | Technologies |
|-----------|--------------|
| **Website** | Next.js 16, React 19, TypeScript, TailwindCSS 4 |
| **Internationalisation** | next-intl |
| **Styling** | TailwindCSS, PostCSS |

### Architecture
```
mio/
├── agent/       # Agent IA
├── api/         # Backend API
├── mio/         # Core module
└── website/     # Site marketing Next.js
```

### Liens
- **GitHub** : https://github.com/brazillierjo/mio (Prive)

### Statut
En developpement actif

---

## CV Generator

### Description
Generateur de CV personnalisables a partir de donnees JSON. Permet de creer des CV professionnels avec des schemas de couleurs personnalisables et export PDF.

### Type de projet
Projet personnel - Outil utilitaire

### Stack Technique

| Catégorie | Technologies |
|-----------|--------------|
| **Framework** | Nuxt 3, Vue.js |
| **Langage** | TypeScript |
| **Styling** | TailwindCSS |
| **PDF** | Puppeteer |

### Fonctionnalites cles
- Donnees CV au format JSON
- Schemas de couleurs personnalisables
- Export PDF haute qualite
- Interface intuitive
- Preview en temps reel

### Architecture
```
cv-generator/
├── components/   # Composants Vue
├── pages/        # Pages Nuxt
├── server/api/   # API server-side
├── data/         # Donnees CV JSON
└── utils/        # Utilitaires
```

### Liens
- **GitHub** : https://github.com/brazillierjo/cv-generator

### Statut
Termine

---

## Ma Seance

### Description
Application web mobile-first de generation de seances d'entrainement sportif. Permet de creer des programmes d'exercices personnalises.

### Type de projet
Projet personnel - Application web fitness

### Stack Technique

| Catégorie | Technologies |
|-----------|--------------|
| **Framework** | React 18, Create React App |
| **Langage** | TypeScript |
| **State Management** | Redux Toolkit, React Redux |
| **UI** | TailwindCSS, Headless UI, MUI |
| **Formulaires** | Formik |
| **Routing** | React Router DOM |

### Fonctionnalites cles
- Generation de seances personnalisees
- Interface optimisee mobile
- Gestion d'etat avec Redux
- Design moderne et intuitif

### Liens
- **Demo** : https://ma-seance.fr
- **GitHub** : https://github.com/brazillierjo/ma-seance

### Statut
Termine - En production

---

## Piano

### Description
Piano virtuel interactif jouable au clavier ou a la souris. Utilise des enregistrements audio personnels pour un son authentique.

### Type de projet
Projet personnel - Application web interactive

### Stack Technique

| Catégorie | Technologies |
|-----------|--------------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Audio** | Web Audio API |
| **Hebergement** | GitHub Pages |

### Fonctionnalites cles
- Piano jouable au clavier et a la souris
- Sons de piano enregistres personnellement
- Interface visuelle realiste
- Responsive design

### Liens
- **Demo** : https://brazillierjo.github.io/piano
- **GitHub** : https://github.com/brazillierjo/piano

### Statut
Termine

---

## Calculator

### Description
Calculatrice web avec gestion de themes multiples. Projet demonstrant la manipulation du DOM et la gestion d'etats visuels.

### Type de projet
Projet personnel - Application web

### Stack Technique

| Catégorie | Technologies |
|-----------|--------------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Features** | Theme switcher, Animations |

### Fonctionnalites cles
- Operations mathematiques de base
- Themes multiples personnalisables
- Interface moderne
- Animations fluides

### Liens
- **Demo** : https://brazillierjo.github.io/calculator
- **GitHub** : https://github.com/brazillierjo/calculator

### Statut
Termine

---

## Markdown Editor

### Description
Editeur Markdown avec preview en temps reel. Permet d'ecrire du Markdown et de visualiser instantanement le rendu HTML.

### Type de projet
Projet personnel - Outil developpeur

### Stack Technique

| Catégorie | Technologies |
|-----------|--------------|
| **Framework** | React (Create React App) |
| **Langage** | JavaScript |
| **Features** | Real-time preview, Markdown parsing |

### Fonctionnalites cles
- Edition Markdown en temps reel
- Preview instantane du rendu
- Interface split-view
- Support syntaxe Markdown complete

### Liens
- **GitHub** : https://github.com/brazillierjo/markdown

### Statut
Termine

---

## Kycamotors

### Description
Site vitrine professionnel pour un concessionnaire automobile. Design moderne avec animations fluides et formulaire de contact.

### Type de projet
Projet client - Site vitrine

### Stack Technique

| Catégorie | Technologies |
|-----------|--------------|
| **Framework** | Next.js 15, React 19, TypeScript |
| **Styling** | TailwindCSS 4 |
| **UI Components** | Radix UI, Shadcn/ui |
| **Animations** | Framer Motion |
| **Formulaires** | React Hook Form, Zod |
| **Theme** | next-themes |

### Fonctionnalites cles
- Design moderne et professionnel
- Animations fluides
- Formulaire de contact valide
- Theme clair/sombre
- Optimise SEO
- Responsive design

### Liens
- **GitHub** : https://github.com/brazillierjo/kycamotors (Prive)

### Statut
Termine

---

## NOW.TS (Starter Template)

### Description
Template de demarrage Next.js complet avec authentification, paiements Stripe, emails, et tests. Base solide pour demarrer des projets SaaS.

### Type de projet
Projet personnel - Template/Boilerplate

### Stack Technique

| Catégorie | Technologies |
|-----------|--------------|
| **Framework** | Next.js 15, React 19, TypeScript |
| **Styling** | TailwindCSS 4, Sass |
| **UI Components** | Radix UI, Shadcn/ui, Recharts |
| **State Management** | Zustand, React Query, nuqs |
| **Authentification** | Better Auth |
| **Base de donnees** | Prisma |
| **Paiements** | Stripe |
| **Emails** | React Email, Resend |
| **IA** | AI SDK (OpenAI) |
| **Upload** | Uploadthing |
| **Validation** | Zod, React Hook Form |
| **Tests** | Vitest, Playwright, Testing Library |
| **Linting** | ESLint, Prettier, Knip |

### Fonctionnalites cles
- Authentification complete (Better Auth)
- Integration Stripe pour les paiements
- Systeme d'emails avec React Email
- Tests unitaires et E2E
- Server Actions avec next-safe-action
- Theme clair/sombre
- Internationalisation ready
- CI/CD configure

### Architecture
```
nowts/
├── app/           # App Router Next.js
├── src/           # Code source
├── prisma/        # Schema et migrations
├── emails/        # Templates emails
├── content/       # Contenu MDX
├── __tests__/     # Tests unitaires
└── e2e/           # Tests end-to-end
```

### Liens
- **Demo** : https://nowts.app
- **GitHub** : https://github.com/brazillierjo/nowts-v3 (Prive)

### Statut
En maintenance active

---

## Resume des competences techniques

### Frameworks & Libraries
- **Frontend** : React, Next.js, Nuxt, Vue.js, React Native, Expo
- **Backend** : Node.js, Bun, Elysia.js, Next.js API Routes

### Langages
- TypeScript, JavaScript, HTML5, CSS3

### Styling
- TailwindCSS, CSS Modules, Sass, Framer Motion

### State Management
- Redux Toolkit, Zustand, React Query, React Hook Form

### Base de donnees & ORM
- Prisma, Turso (SQLite)

### Authentification
- JWT, Better Auth, Apple Sign In, bcrypt

### Testing
- Vitest, Playwright, Testing Library, Jest

### DevOps & Tools
- Git, GitHub Actions, Vercel, ESLint, Prettier

### APIs & Services
- Stripe, RevenueCat, Resend, TMDB, OpenAI, Google Gemini
