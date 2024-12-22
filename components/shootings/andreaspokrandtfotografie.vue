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
				path: "andreaspokrandtfotografie",
				imgs: [] as any,
			},
			igInfo: {} as any
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