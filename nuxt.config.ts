// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/color-mode", "nuxt-svgo"],
  colorMode: {
    preference: "system",
    fallback: "dark",
  },
  svgo: {
    autoImportPath: "./assets/icons/",
  },
  css: ["~/assets/css/main.css"],
});
