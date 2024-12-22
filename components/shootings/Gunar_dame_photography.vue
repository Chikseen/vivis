<template>
	<div>
		<GalleryTitleWrapper>
			<div class="galleryTitle_header">
				<h2>Fotograf:</h2>
				<a href="https://www.instagram.com/gunar_dame_photography/" aria-label="Link to the Photographer">
					<h2>gunar_dame_photography</h2>
					<InstagramIcon />
				</a>
			</div>
			<p>13 Mai, 2023</p>
		</GalleryTitleWrapper>
		<GalleryWrapper :images="images" :path="path" />
	</div>
</template>

<script lang="ts">
import { useMainStore } from "@/stores/mainStore";

export default {
	computed: {
		images(): any[] {
			let images: any[] = [];
			const names: string[] = this.store.$state.images[this.path]
			names?.forEach(name => {
				images.push({ name: name, info: this.igInfo[name] });
			});
			return images;
		}
	},
	data() {
		return {
			store: useMainStore(),
			path: "gunar_dame_photography",
			igInfo: {
				["EDDCEDC9-2ABD-4C00-9C70-71B6AA290EBB.webp"]: {
					href: "https://www.instagram.com/p/Cs_KVh8I813/?img_index=1",
					isPortrait: true,
					tagList: ["blackandwhite",
						"bwphotography",
						"canon50mm14",
						"instagood",
						"instagram",
						"modelphotographer",
						"modelsearch",
						"modelshoot",
						"outdorphotography",
						"picoftheday",
						"pictureoftheday",
						"portaitphotography",
						"shootingstars",
						"sonya7ili"
					]
				},
				["9B38CDD8-1F0C-4CC0-BDA4-7492F9C18577.webp"]: {
					href: "https://www.instagram.com/p/Cs8rDUGo-kM/?img_index=1",
					isPortrait: true,
					tagList: ["blackandwhite",
						"bwphotography",
						"canon50mm14",
						"instagood",
						"instagram",
						"modelphotographer",
						"modelsearch",
						"modelshoot",
						"outdorphotography",
						"picoftheday",
						"pictureoftheday",
						"portait",
						"portaitphotography",
						"portrait",
						"shootingstars",
						"sonya7ili"
					]
				},
				["IMG_3686.webp"]: {
					isPortrait: true,
				},
				["IMG_3694.webp"]: {
					isPortrait: true,
				},
				["IMG_3699.webp"]: {
					isPortrait: true,
				},
			} as any
		}
	},
}
</script>