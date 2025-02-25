// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  runtimeConfig: {
    tmdbAccessToken: process.env.TMDB_ACCESS_TOKEN,
    public: {
      tmdbBaseUrl: 'https://api.themoviedb.org/3',
    },
  },
});
