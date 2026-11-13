// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://brazillierjohan.fr",
  trailingSlash: "ignore",
  build: { inlineStylesheets: "always" },
  i18n: {
    locales: ["fr", "en", "it", { path: "ch", codes: ["fr-CH"] }],
    defaultLocale: "fr",
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "fr", locales: { fr: "fr-FR", ch: "fr-CH", en: "en", it: "it" } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
