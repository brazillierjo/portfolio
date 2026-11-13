# Portfolio — brazillierjohan.fr

Site d'une seule page qui présente Johan comme **AI Full Stack Engineer** (recherche de CDI / poste fixe).
Astro 7 en sortie statique, Tailwind 4, aucun framework JavaScript côté client. Hébergé sur Vercel.

## Commandes

- `npm run dev` : serveur de dev (Astro 7 le lance en arrière-plan, `npx astro dev stop` pour l'arrêter).
- `npm run build` : `astro check` puis build statique dans `dist/`.
- `npm run activity` : régénère `src/data/activity.json` (commits 2026 par jour, part co-signée par un agent)
  à partir des dépôts locaux de `~/Documents/Development`. Comptes seulement, jamais de messages.
- `npm run media` : recopie et encode les captures et films depuis les dépôts Mio, Shelltown et FastFlix.
  La démo FastFlix (`src/assets/video/fastflix-demo.mp4`) a été enregistrée à la main dans le simulateur iOS.

## Langues

Quatre versions : `/` (fr), `/ch/` (français de Suisse romande), `/en/`, `/it/`.
- Textes : `src/i18n/{fr,en,it}.ts`, typés par `src/i18n/types.ts`. Toute nouvelle clé va dans les trois.
- `src/i18n/ch.ts` part du français et ne surcharge que les usages suisses repris du CV CH :
  « poste fixe », « mandats indépendants », dates `05.2026`, diplômes avec équivalence CEC, permis B.
- Les ancres sont traduites (`src/i18n/ids.ts`).
- CV : `public/cv/CV-Johan-Rincon-Brazillier-{FR,CH,EN,IT}.pdf`, exportés de Reactive Resume (servis en `noindex`).

## Direction artistique

Reprise de la DA de Mio (« Archipel d'aventures », voir `../mio/DESIGN.md`) :
- Page gris clair `#f5f6f8`, feuilles blanches (`.sheet`) cerclées d'un liseré et posées sur une ombre douce.
  Ombres plutôt que bordures ; captures avec un contour à 10 % (`.edge`).
- Un seul accent : le vert de l'ambiance « isles » (`#18a256`, bord `#138245`). Chaque projet garde
  ses couleurs (Mio vert, Shelltown laiton, FastFlix rouge) sur sa scène pastel et son bouton.
- Nunito variable, contraste de graisse comme dans l'app : titres 850–900 serrés, texte à 500.
- Arrondis concentriques (extérieur = intérieur + marge) : feuilles 24, tuiles 16, boutons 14, puces 10.
- Boutons en relief (`.btn`, `.btn-green`) : une face sur son bord 3D, qui s'enfonce de 4 px à l'appui.
- Projets : scène pastel avec deux pastilles de données, accroche, trois points forts sur des carrés
  de couleur, bouton « Voir le détail » qui déplie une feuille blanche (`Project.astro` + `projects()`).
- Mouvement : entrée en cascade du hero (montée de 8 px, flou 8 px, 800 ms, 100 ms d'écart),
  dépliage des projets, vidéos produit. Rien d'autre. `prefers-reduced-motion` coupe tout.
- Ton des textes : direct, première personne, phrases courtes, chaleureux sans familiarité.

## Contenu

Les faits viennent des dépôts (versions, stacks, chiffres) : ne pas inventer de métriques.
Le téléphone n'est jamais écrit en clair dans le HTML (assemblé par `src/scripts/main.ts`).
