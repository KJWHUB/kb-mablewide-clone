// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vue: {
    runtimeCompiler: true,
  },
  modules: ["@nuxt/eslint", "@nuxtjs/color-mode", "nuxt-svgo", "nuxt-swiper", "@pinia/nuxt"],
  colorMode: {
    preference: "system",
    fallback: "dark",
  },
  svgo: {
    autoImportPath: "./assets/icons/",
    defaultImport: "component",
  },
  css: ["~/assets/css/main.css"],
});
