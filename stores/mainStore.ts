import { defineStore } from 'pinia'
import { getAllBlobsFromContainer } from '../services/blobService'

export const useMainStore = defineStore('main', {
	state: () => ({
		images: {} as any,
	}),
	actions: {
		async fetchImages() {
			this.images = await getAllBlobsFromContainer()
		},
	},
})