import { defineStore } from 'pinia'
import images from "@/public/shootings.json"

export const useMainStore = defineStore('main', {
	state: () => ({
		images: {} as any,
	}),
	actions: {
		async fetchImages() {
			this.images = images
		},
	},
})