# Guide de Creation - Portfolio 3D "Little Planet"

> Guide detaille pour Claude Code - Portfolio 3D interactif avec une petite planete

---

## Concept

Un portfolio immersif inspire du "Petit Prince" : une petite planete en 3D avec differentes zones representant les sections du portfolio. L'utilisateur peut tourner autour de la planete et cliquer sur les elements pour decouvrir les informations.

### Mapping des zones

| Zone de la planete | Section Portfolio | Elements 3D | Interaction |
|--------------------|-------------------|-------------|-------------|
| Maison cosy | A propos | Petite maison, cheminee, fumee | Clic -> Modal bio |
| Sommet montagne | Projets | Drapeaux, pics neigeux | Clic drapeau -> Detail projet |
| Plage tropicale | Contact | Palmiers, bouteille a la mer | Clic -> Formulaire contact |
| Foret dense | Competences | Arbres varies (1 arbre = 1 techno) | Hover -> Nom techno |
| Petit village | Experiences | Batiments colores | Clic batiment -> Experience |
| Ecole | Formation | Petit batiment avec cloche | Clic -> Diplomes |
| Riviere | Transition | Eau animee qui traverse | Effet visuel |
| Soleil | Ambiance | Soleil anime, cycle jour/nuit | Toggle theme |

---

## Stack Technique

```
Frontend:
- Next.js 15 (App Router)
- React 19
- TypeScript
- React Three Fiber (@react-three/fiber)
- React Three Drei (@react-three/drei)
- GSAP (animations)
- Framer Motion (transitions UI)
- TailwindCSS (UI panels)
- Zustand (state management)

3D:
- Three.js (via R3F)
- Blender (creation modeles)
- GLTF/GLB (format export)
- Draco (compression)

Backend (optionnel):
- Next.js API Routes (formulaire contact)
- Resend (envoi emails)

Deploiement:
- Vercel
```

### Notes Next.js + Three.js

```tsx
// Les composants 3D doivent etre client-side
"use client"

// Lazy loading du Canvas pour eviter les erreurs SSR
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
  loading: () => <Loader />
})
```

---

## Structure du Projet

```
portfolio/
├── public/
│   ├── models/
│   │   ├── planet.glb
│   │   ├── house.glb
│   │   ├── mountain.glb
│   │   ├── beach.glb
│   │   ├── forest.glb
│   │   ├── village.glb
│   │   ├── school.glb
│   │   ├── animals/
│   │   │   ├── bird.glb
│   │   │   ├── rabbit.glb
│   │   │   └── fox.glb
│   │   └── props/
│   │       ├── tree.glb
│   │       ├── flag.glb
│   │       ├── bottle.glb
│   │       └── sun.glb
│   ├── textures/
│   │   ├── grass.jpg
│   │   ├── sand.jpg
│   │   ├── snow.jpg
│   │   ├── water.jpg
│   │   └── sky.hdr
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts
│   ├── components/
│   │   ├── canvas/
│   │   │   ├── Scene.tsx
│   │   │   ├── Planet.tsx
│   │   │   ├── zones/
│   │   │   │   ├── House.tsx
│   │   │   │   ├── Mountain.tsx
│   │   │   │   ├── Beach.tsx
│   │   │   │   ├── Forest.tsx
│   │   │   │   ├── Village.tsx
│   │   │   │   └── School.tsx
│   │   │   ├── environment/
│   │   │   │   ├── Sun.tsx
│   │   │   │   ├── River.tsx
│   │   │   │   ├── Clouds.tsx
│   │   │   │   └── Stars.tsx
│   │   │   ├── animals/
│   │   │   │   ├── Bird.tsx
│   │   │   │   ├── Rabbit.tsx
│   │   │   │   └── Fox.tsx
│   │   │   └── controls/
│   │   │       ├── CameraController.tsx
│   │   │       └── OrbitControls.tsx
│   │   └── ui/
│   │       ├── Loader.tsx
│   │       ├── Navigation.tsx
│   │       ├── Modal.tsx
│   │       ├── panels/
│   │       │   ├── AboutPanel.tsx
│   │       │   ├── ProjectsPanel.tsx
│   │       │   ├── ContactPanel.tsx
│   │       │   ├── SkillsPanel.tsx
│   │       │   ├── ExperiencePanel.tsx
│   │       │   └── FormationPanel.tsx
│   │       └── common/
│   │           ├── Button.tsx
│   │           ├── Card.tsx
│   │           └── Badge.tsx
│   ├── data/
│   │   ├── about.ts
│   │   ├── projects.ts
│   │   ├── experiences.ts
│   │   ├── formations.ts
│   │   └── skills.ts
│   ├── hooks/
│   │   ├── useStore.ts
│   │   ├── useAudio.ts
│   │   └── useResponsive.ts
│   ├── stores/
│   │   └── appStore.ts
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       ├── animations.ts
│       └── helpers.ts
├── .env.local
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

---

## Checklist de Developpement

### Phase 1 : Setup du projet

- [ ] Initialiser le projet Next.js 15 + TypeScript
  ```bash
  npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
  ```
- [ ] Installer les dependances 3D
  ```bash
  npm install three @react-three/fiber @react-three/drei
  npm install -D @types/three
  ```
- [ ] Installer les dependances animations
  ```bash
  npm install gsap @gsap/react
  npm install framer-motion
  ```
- [ ] Installer les dependances utilitaires
  ```bash
  npm install zustand
  npm install clsx tailwind-merge
  npm install lucide-react
  ```
- [ ] (Optionnel) Installer pour le formulaire contact
  ```bash
  npm install resend zod react-hook-form @hookform/resolvers
  ```
- [ ] Configurer next.config.ts pour Three.js
  ```typescript
  // next.config.ts
  const nextConfig = {
    transpilePackages: ['three'],
    webpack: (config) => {
      config.externals.push({
        'utf-8-validate': 'commonjs utf-8-validate',
        'bufferutil': 'commonjs bufferutil',
      })
      return config
    },
  }
  ```
- [ ] Creer la structure de dossiers (components/canvas, components/ui, etc.)
- [ ] Setup Prettier
  ```bash
  npm install -D prettier prettier-plugin-tailwindcss
  ```

### Phase 2 : Scene 3D de base

- [ ] Creer le composant Scene.tsx avec Canvas R3F
- [ ] Configurer l'eclairage de base (ambient + directional)
- [ ] Ajouter OrbitControls pour la navigation
- [ ] Creer une sphere placeholder pour la planete
- [ ] Ajouter un environnement HDR (ciel etoile)
- [ ] Configurer la camera initiale
- [ ] Ajouter le composant Loader pendant le chargement
- [ ] Tester le rendu 60 FPS

### Phase 3 : Creation de la planete

- [ ] Modeler la planete dans Blender (low poly style)
- [ ] Creer les differents biomes sur la sphere :
  - [ ] Zone herbeuse (maison)
  - [ ] Zone montagneuse (neige au sommet)
  - [ ] Zone plage (sable + eau)
  - [ ] Zone foret (arbres)
  - [ ] Zone village (sol pave)
  - [ ] Zone ecole (pelouse)
- [ ] Exporter en GLB avec Draco compression
- [ ] Importer le modele dans Planet.tsx
- [ ] Ajouter une rotation lente automatique de la planete
- [ ] Optimiser les textures (max 1024x1024)

### Phase 4 : Elements des zones

#### Maison (A propos)
- [ ] Modeler une petite maison cosy dans Blender
- [ ] Ajouter une cheminee avec particules de fumee
- [ ] Ajouter une lumiere chaude a l'interieur (fenetre)
- [ ] Importer dans House.tsx
- [ ] Ajouter animation hover (legere elevation)
- [ ] Ajouter effet glow au clic

#### Montagne (Projets)
- [ ] Modeler des pics montagneux
- [ ] Ajouter de la neige au sommet
- [ ] Creer des drapeaux (1 par projet majeur)
- [ ] Animer les drapeaux (vent)
- [ ] Importer dans Mountain.tsx
- [ ] Chaque drapeau = 1 projet cliquable

#### Plage (Contact)
- [ ] Modeler une zone de plage avec sable
- [ ] Ajouter des palmiers animes (vent leger)
- [ ] Creer une bouteille a la mer flottante
- [ ] Ajouter des vagues animees (shader)
- [ ] Importer dans Beach.tsx
- [ ] Bouteille cliquable -> formulaire contact

#### Foret (Competences)
- [ ] Creer differents types d'arbres (variations)
- [ ] Chaque arbre represente une techno
- [ ] Taille arbre = niveau de maitrise
- [ ] Ajouter des feuilles animees
- [ ] Importer dans Forest.tsx
- [ ] Hover arbre -> affiche nom techno

#### Village (Experiences)
- [ ] Modeler 5-6 petits batiments colores
- [ ] Chaque batiment = 1 experience pro
- [ ] Style different par type d'entreprise
- [ ] Ajouter des details (fenetres, portes)
- [ ] Importer dans Village.tsx
- [ ] Clic batiment -> detail experience

#### Ecole (Formation)
- [ ] Modeler un petit batiment d'ecole
- [ ] Ajouter une cloche animee
- [ ] Ajouter un tableau noir devant
- [ ] Importer dans School.tsx
- [ ] Clic -> liste des formations

### Phase 5 : Environnement

#### Soleil
- [ ] Creer un soleil stylise (sphere + rayons)
- [ ] Ajouter un shader de glow
- [ ] Animation de rotation sur lui-meme
- [ ] Implementer cycle jour/nuit (optionnel)
- [ ] Lumiere directionnelle liee au soleil

#### Riviere
- [ ] Creer un chemin d'eau sur la planete
- [ ] Shader d'eau animee (reflets, mouvement)
- [ ] Particules de mousse (optionnel)

#### Nuages
- [ ] Creer des nuages low poly
- [ ] Animation de deplacement lent
- [ ] Plusieurs couches de profondeur

#### Etoiles (fond)
- [ ] Particules d'etoiles en arriere-plan
- [ ] Effet twinkle (scintillement)
- [ ] Voie lactee en texture de fond

### Phase 6 : Animaux

- [ ] Modeler un oiseau (low poly)
- [ ] Animation de vol autour de la planete
- [ ] Modeler un lapin
- [ ] Animation idle + saut occasionnel
- [ ] Modeler un renard
- [ ] Animation de marche sur la planete
- [ ] Placer les animaux dans leurs zones respectives

### Phase 7 : Camera et Navigation

- [ ] Implementer CameraController.tsx
- [ ] Smooth camera movement avec GSAP
- [ ] Camera qui suit la rotation de la planete
- [ ] Zoom sur zone au clic
- [ ] Boutons de navigation rapide (UI)
- [ ] Retour vue globale (bouton home)
- [ ] Limiter les angles de camera
- [ ] Support tactile (mobile)

### Phase 8 : Interface Utilisateur

#### Loader
- [ ] Ecran de chargement anime
- [ ] Progress bar des assets 3D
- [ ] Animation d'entree une fois charge
- [ ] Tip/instruction pour l'utilisateur

#### Navigation
- [ ] Menu minimaliste (coins de l'ecran)
- [ ] Icones pour chaque section
- [ ] Indicateur de section active
- [ ] Animation hover sur icones

#### Modals/Panels
- [ ] Composant Modal reutilisable
- [ ] Animation d'ouverture (Framer Motion)
- [ ] Fond semi-transparent blur
- [ ] Bouton fermer
- [ ] Support clavier (Escape)

#### AboutPanel
- [ ] Photo de profil
- [ ] Bio complete (depuis about.md)
- [ ] Liens sociaux
- [ ] Animation d'apparition du texte

#### ProjectsPanel
- [ ] Grille de projets
- [ ] Card par projet avec image
- [ ] Tags de technologies
- [ ] Liens GitHub + Demo
- [ ] Filtre par techno (optionnel)

#### ExperiencePanel
- [ ] Timeline verticale
- [ ] Card par experience
- [ ] Logo entreprise
- [ ] Technologies utilisees
- [ ] Animation de la timeline

#### SkillsPanel
- [ ] Grille de competences
- [ ] Icones des technos
- [ ] Barre de niveau (optionnel)
- [ ] Categorisation (Front/Back/Tools)

#### FormationPanel
- [ ] Liste des formations
- [ ] Annees
- [ ] Etablissements
- [ ] Diplomes obtenus

#### ContactPanel
- [ ] Formulaire de contact
- [ ] Champs : Nom, Email, Message
- [ ] Validation Zod
- [ ] Animation d'envoi
- [ ] Message de confirmation
- [ ] Liens directs (email, LinkedIn)

### Phase 9 : Donnees

- [ ] Creer about.ts avec les donnees du markdown
- [ ] Creer projects.ts avec tous les projets
- [ ] Creer experiences.ts avec le parcours
- [ ] Creer formations.ts avec les diplomes
- [ ] Creer skills.ts avec les competences
- [ ] Typer toutes les donnees (TypeScript)

### Phase 10 : Animations et Polish

- [ ] Animation d'intro (camera qui s'approche de la planete)
- [ ] Transitions fluides entre les vues
- [ ] Hover effects sur tous les elements cliquables
- [ ] Micro-animations (respiration des elements)
- [ ] Particules ambiantes (pollen, lucioles)
- [ ] Sound design (optionnel)
  - [ ] Musique d'ambiance douce
  - [ ] Sons de clic
  - [ ] Sons d'environnement
- [ ] Easter eggs caches sur la planete

### Phase 11 : Performance

- [ ] Lazy loading des modeles 3D
- [ ] Level of Detail (LOD) pour les modeles
- [ ] Frustum culling
- [ ] Instancing pour les elements repetes (arbres)
- [ ] Compression des textures (WebP)
- [ ] Compression Draco pour tous les GLB
- [ ] Analyser avec Chrome DevTools
- [ ] Target : 60 FPS sur mobile

### Phase 12 : Responsive

- [ ] Adapter la camera pour mobile
- [ ] Touch controls (swipe pour tourner)
- [ ] Pinch to zoom
- [ ] Panels adaptes mobile (bottom sheet)
- [ ] Tester sur iOS Safari
- [ ] Tester sur Android Chrome
- [ ] Breakpoints : mobile / tablet / desktop

### Phase 13 : Accessibilite

- [ ] Navigation clavier complete
- [ ] Focus visible sur elements
- [ ] Aria labels sur les zones cliquables
- [ ] Mode contraste eleve (optionnel)
- [ ] Skip to content
- [ ] Reduire les animations (prefers-reduced-motion)

### Phase 14 : SEO et Meta

- [ ] Balises meta (title, description)
- [ ] Open Graph tags
- [ ] Twitter Card
- [ ] Favicon et icones
- [ ] manifest.json (PWA ready)
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] Schema.org structured data

### Phase 15 : Deploiement

- [ ] Configurer Vercel
- [ ] Variables d'environnement
- [ ] Domaine personnalise (brazillierjohan.fr)
- [ ] HTTPS
- [ ] Headers de cache optimises
- [ ] Compression Brotli/Gzip
- [ ] Tester Lighthouse score (target: 90+)
- [ ] Monitoring des erreurs (Sentry optionnel)

### Phase 16 : Finitions

- [ ] Relecture du contenu
- [ ] Test cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Test sur differents appareils
- [ ] Feedback utilisateurs beta
- [ ] Corrections bugs
- [ ] Optimisations finales
- [ ] README.md du projet
- [ ] Documentation du code

---

## Ressources et References

### Inspiration
- [Bruno Simon](https://bruno-simon.com/) - Reference portfolio 3D jouable
- [Ibrahim's 3D Portfolio](https://www.awwwards.com/sites/ibrahims-3d-portfolio) - React Three Fiber
- [Awwwards Portfolios](https://www.awwwards.com/websites/portfolio/) - Inspiration generale

### Tutoriels
- [Three.js Journey](https://threejs-journey.com/) - Cours complet Three.js par Bruno Simon
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber) - Documentation officielle
- [adrianhajdin/3d-portfolio](https://github.com/adrianhajdin/3d-portfolio) - Template de reference

### Assets gratuits
- [Poly Pizza](https://poly.pizza/) - Modeles 3D low poly gratuits
- [Sketchfab](https://sketchfab.com/) - Modeles 3D (filtrer par licence)
- [Mixamo](https://www.mixamo.com/) - Animations de personnages
- [Polyhaven](https://polyhaven.com/) - HDRIs et textures gratuites
- [Kenney Assets](https://kenney.nl/assets) - Assets de jeu gratuits

### Outils
- [Blender](https://www.blender.org/) - Modelisation 3D (gratuit)
- [gltf.report](https://gltf.report/) - Analyser/optimiser les GLB
- [Squoosh](https://squoosh.app/) - Compression d'images

---

## Notes pour Claude Code

1. **Ordre d'execution** : Suivre les phases dans l'ordre, chaque phase depend de la precedente
2. **Tests reguliers** : Tester le rendu apres chaque ajout majeur
3. **Performance first** : Toujours verifier les FPS apres ajout d'elements
4. **Commits frequents** : Un commit par fonctionnalite completee
5. **Mobile first** : Tester sur mobile regulierement, pas seulement a la fin
6. **Assets placeholder** : Utiliser des formes basiques avant d'avoir les vrais modeles 3D

---

## Commandes utiles

```bash
# Developpement
npm run dev

# Build production
npm run build

# Demarrer en production
npm run start

# Linting
npm run lint

# Formater le code
npx prettier --write .

# Analyser le bundle (installer @next/bundle-analyzer)
ANALYZE=true npm run build
```

---

## Estimation de complexite

| Phase | Complexite | Priorite |
|-------|------------|----------|
| Setup | Faible | Critique |
| Scene de base | Faible | Critique |
| Planete | Moyenne | Critique |
| Elements zones | Haute | Haute |
| Environnement | Moyenne | Moyenne |
| Animaux | Moyenne | Basse |
| Camera/Nav | Haute | Critique |
| UI Panels | Moyenne | Haute |
| Donnees | Faible | Haute |
| Animations | Moyenne | Moyenne |
| Performance | Moyenne | Haute |
| Responsive | Moyenne | Haute |
| Accessibilite | Faible | Moyenne |
| SEO | Faible | Moyenne |
| Deploiement | Faible | Haute |
| Finitions | Faible | Haute |
