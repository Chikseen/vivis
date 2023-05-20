// https://nuxt.com/docs/api/configuration/nuxt-config
import hooks from "./hooks/getImageColors.js";

export default defineNuxtConfig({
  hooks: hooks(this),
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import  "@/assets/styles/_global.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      S_1: { name: "czfotografie", route: "czfotografie" },
      S_2: { name: "blitzeis.fotografie - betografie", route: "betoblitz" },
      S_3: { name: "blickwinkelpictures", route: "blickwinkelpictures" },
      S_4: { name: "ulfleuteritz", route: "ulfleuteritz" },
      S_5: { name: "der_kraft", route: "der_kraft" },
    },
  },
});
