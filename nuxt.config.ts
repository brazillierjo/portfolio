// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@vueuse/motion/nuxt',
    '@nuxtjs/google-fonts',
  ],
  i18n: {
    langDir: '../locales/',
    strategy: 'prefix_and_default',
    locales: [
      { code: 'en-US', name: 'English 🇺🇸', iso: 'en-US', file: 'en-US.json' },
      { code: 'fr-FR', name: 'Français 🇫🇷', iso: 'fr-FR', file: 'fr-FR.json' },
      {
        code: 'fr-CH',
        name: 'Français (Suisse) 🇨🇭',
        iso: 'fr-CH',
        file: 'fr-CH.json',
      },
      { code: 'it-IT', name: 'Italiano 🇮🇹', iso: 'it-IT', file: 'it-IT.json' },
      { code: 'ja-JP', name: '日本語 🇯🇵', iso: 'ja-JP', file: 'ja-JP.json' },
    ],
    defaultLocale: 'en-US',
  },
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
  },
})
