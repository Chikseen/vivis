<template>
	<div>
		<GalleryTitleWrapper>
			<div class="galleryTitle_header">
				<h2>Fotograf:</h2>
				<a href="https://www.instagram.com/sonnenlicht.photographie/" aria-label="Link to the Photographer">
					<h2>sonnenlicht.photographie</h2>
					<InstagramIcon />
				</a>
			</div>
			<div class="galleryTitle_header">
				<h2>Fotograf:</h2>
				<a href="https://www.instagram.com/sonnenlicht.hochzeiten/" aria-label="Link to the Photographer">
					<h2>sonnenlicht.hochzeiten</h2>
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
			path: "sonnenlichtphotographie",
			igInfo: {
				["IMG_4015.webp"]: {
					isPortrait: true,
				},
				["IMG_4017.webp"]: {
					isPortrait: true,
				},
				["IMG_4021.webp"]: {
					isPortrait: true,
				},
				["IMG_4116.webp"]: {
					isPortrait: true,
				},
				["IMG_4128.webp"]: {
					isPortrait: true,
				},
				["IMG_4147.webp"]: {
					isPortrait: true,
				},
				["IMG_4149.webp"]: {
					isPortrait: true,
				},
				["IMG_4152.webp"]: {
					isPortrait: true,
				},
				["IMG_4153.webp"]: {
					isPortrait: true,
				},
			} as any
		}
	},
}
</script>