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
      S_1: "ShootingOne",
      S_2: "ShootingTwo",
    },
  },
});
