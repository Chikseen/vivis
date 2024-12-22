<template>
	<div>
		<GalleryTitleWrapper>
			<div class="galleryTitle_header">
				<h2>Fotograf:</h2>
				<a href="https://www.instagram.com/andreas.pokrandt.fotografie/" aria-label="Link to the Photographer">
					<h2>andreas.pokrandt.fotografie</h2>
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
			path: "andreaspokrandtfotografie",
			igInfo: {} as any
		}
	},
}
</script>