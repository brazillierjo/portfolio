export type Lang = "fr" | "ch" | "en" | "it";

// Une entrée par version du site. « ch » est le français de Suisse romande.
export const LOCALES = {
  fr: { html: "fr-FR", intl: "fr-FR", path: "/", short: "FR", label: "Français" },
  ch: { html: "fr-CH", intl: "fr-CH", path: "/ch/", short: "CH", label: "Français (Suisse)" },
  en: { html: "en", intl: "en-US", path: "/en/", short: "EN", label: "English" },
  it: { html: "it", intl: "it-IT", path: "/it/", short: "IT", label: "Italiano" },
} as const satisfies Record<
  string,
  { html: string; intl: string; path: string; short: string; label: string }
>;
export const LANGS = Object.keys(LOCALES) as Lang[];

export const n = (lang: Lang, value: number) =>
  new Intl.NumberFormat(LOCALES[lang].intl).format(value);

type Step = { id: string; title: string; text: string; alt: string };
type Item = { title: string; text: string };
type Mission = {
  client: string;
  period: string;
  context: string;
  text: string;
  tags: string[];
};
type Job = { period: string; role: string; company: string; place: string; text: string };

/** Ce que montre l'aperçu d'un projet, avant de le déplier */
export type Teaser = {
  tagline: string;
  highlights: string[];
  facts: [string, string][];
  /** Pastilles posées sur le visuel : [titre, précision] */
  chips: [string, string][];
};

export type Copy = {
  meta: { title: string; description: string; ogLocale: string };
  nav: {
    projects: string;
    method: string;
    missions: string;
    path: string;
    contact: string;
    cv: string;
    menu: string;
    languages: string;
  };
  hero: {
    lead: string;
    ctaContact: string;
    ctaCv: string;
    figures: { mio: string; shelltown: string; fastflix: string };
    chips: (
      commits: string,
      share: number,
    ) => { commits: string; commitsSub: string; platforms: string; platformsSub: string };
  };
  projects: { title: string; intro: string; more: string; less: string };
  mio: Teaser & {
    intro: string;
    featuresTitle: string;
    steps: Step[];
    systemTitle: string;
    systemIntro: string;
    system: Item[];
    diagram: Record<string, string>;
    socialTitle: string;
    social: string;
    socialFacts: string[];
    reelLabel: string;
    links: { site: string; appStore: string; play: string };
  };
  shelltown: Teaser & {
    intro: string;
    shots: { cli: string; meeting: string };
    features: Item[];
    builtTitle: string;
    built: string;
    filmLabel: string;
    videoLabel: string;
    link: string;
  };
  fastflix: Teaser & {
    intro: string;
    steps: Step[];
    videoLabel: string;
    videoCaption: string;
    links: { site: string; appStore: string; play: string };
  };
  stackLabel: string;
  method: {
    title: string;
    lead: string;
    chartTitle: string;
    chartCaption: string;
    chartLegendLess: string;
    chartLegendMore: string;
    months: string[];
    dayLabel: (date: string, count: number) => string;
    practices: Item[];
    toolsLine: string;
    aiTitle: string;
    ai: Item[];
  };
  missions: { title: string; intro: string; items: Mission[] };
  path: {
    title: string;
    jobsTitle: string;
    jobs: Job[];
    schoolTitle: string;
    schools: Job[];
    languagesTitle: string;
    languages: [string, string][];
    stackTitle: string;
    stack: { group: string; items: string }[];
  };
  contact: {
    title: string;
    email: string;
    copy: string;
    copied: string;
    phone: string;
    cvTitle: string;
    cv: { lang: Lang; label: string }[];
    elsewhere: string;
  };
  footer: string;
  playVideo: string;
  pauseVideo: string;
};
