const fs = require("fs");
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
			S_6: { name: "kontrastreich20", route: "kontrastreich20" },
			S_7: { name: "chris_del_trip", route: "chris_del_trip" },
			S_8: { name: "manuel_r_portraits", route: "manuel_r_portraits" },
		},
	},
	components: [{ path: "~/components", pathPrefix: false }],
	modules: ["@nuxt/image"],
	image: {
		format: ["webp"],
		provider: "ipx",
		ipx: {
			maxAge: 31536000,
		},
		screens: {
			'xs': 80,
			'sm': 160,
			'md': 320,
			'lg': 640,
			'xl': 1240,
			'2xl': 1980,
		  },
	},
	app: {
		head: {
			htmlAttrs: {
				lang: "de",
			},
			title: "Vivis",
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					hid: "description_main",
					name: "description",
					content: "Official Webpage for the Model Vivi",
				},
				{
					hid: "keywords_main",
					name: "keywords",
					content: "Vivis, Secret, Gallery, Model, Shooting, Images, Photos, Leipzig, Mode, Germany, Deutschland, Saxony, Sachsen, find",
				},
				{ hid: "author_main", name: "author", content: "Tim Menzel" },
			],
			link: [
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/favicon.ico",
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Raleway&display=swap",
				},
			],
		},
	}
});
