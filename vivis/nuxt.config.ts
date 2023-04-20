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
      S_1: { name: "Shooting One", route: "one" },
      S_2: { name: "Shooting Two", route: "two" },
      S_3: { name: "Shooting Three", route: "three" },
      S_4: { name: "Shooting ...", route: "..." },
    },
  },
});
