export default defineNuxtConfig({
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
					additionalData: '@use "@/assets/styles/_global.scss" as *;',
				},
			},
		},
	},

	runtimeConfig: {
		public: {
			categories: [
				"Akt",
				"Fairytale",
				"Fashion",
				"Hasenland_2023",
				"Portrait"
			]
		},
	},

	components: [
		{
			path: "~/components", pathPrefix: false
		}, {
			path: "~/pages", pathPrefix: false
		}],
	modules: ["@nuxt/image", "@pinia/nuxt"],

	image: {
		format: ["webp"],
		provider: "cloudflare",
		cloudflare: {
			baseURL: 'https://cdn.vivis.gallery'
		}
	},

	app: {
		head: {
			htmlAttrs: {
				lang: "de",
			},
			title: "Vivis",
			meta: [
				{ charset: "utf-8" },

				///
				{ name: "robots", content: "noindex" },
				///

				{ name: "viewport", content: "initial-scale=1, width=device-width, user-scalable=no" },
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
	},

	compatibilityDate: "2024-12-21",
});