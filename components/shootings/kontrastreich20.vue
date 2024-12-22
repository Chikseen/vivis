<template>
	<div>
		<GalleryTitleWrapper>
			<div class="galleryTitle_header">
				<h2>Fotograf:</h2>
				<a href="https://www.instagram.com/kontrastreich20/" aria-label="Link to the Photographer">
					<h2>kontrastreich20</h2>
					<InstagramIcon />
				</a>
			</div>
			<p>12 Juni, 2023</p>
		</GalleryTitleWrapper>

		<GalleryWrapper :imgJson="imgJson" />
	</div>
</template>

<script lang="ts">
import { useMainStore } from "@/stores/mainStore";

export default {
	data() {
		return {
			store: useMainStore(),
			imgJson: {
				path: "kontrastreich20",
				imgs: [] as any,
			},
			igInfo: {
				["IMG_3521.webp"]: {
					href: "https://www.instagram.com/p/Ctb7V08qvWC/",
					isPortrait: true,
					tagList: ["divineports",
						"fairytail",
						"fairytale",
						"portrait_perfection",
						"portraitliebe",
						"portraitlove",
						"portraitpage",
						"portraitphotography",
						"portraits",
						"portraitsmadeingermany",
						"portraitsoup",
						"ports_hd",
						"portshd",
						"portsinspired"]
				},
				["IMG_0487.webp"]: {
					isPortrait: true,
				},
				["IMG_0490.webp"]: {
					isPortrait: true,
				},
				["IMG_0492.webp"]: {
					isPortrait: true,
				},
				["IMG_0493.webp"]: {
					isPortrait: true,
				},
			} as any
		}
	},
	created() {
		const names: string[] = this.store.$state.images[this.imgJson.path]
		names?.forEach(name => {
			this.imgJson.imgs.push({ name: name, info: this.igInfo[name] });
		});
	},
}
</script>