<template>
	<div>
		<GalleryTitleWrapper>
			<div class="galleryTitle_header">
				<h2>Fotograf:</h2>
				<a href="https://www.instagram.com/foto.und.traum/" aria-label="Link to the Photographer">
					<h2>foto.und.traum</h2>
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
			path: "fotoundtraum",
			igInfo: {
				["IMG_3430.webp"]: {
					href: "https://www.instagram.com/p/Ctg0ZjUKWRi/?img_index=1",
					isPortrait: true,
					tagList: ["geige",
						"germanmodel",
						"hair",
						"hasenland",
						"hasenlandunion",
						"ig_ports",
						"makeportraits",
						"moodyportrait",
						"naturallight",
						"noten",
						"notenständer",
						"portrait_talent_de",
						"portraitmood",
						"portraitphotography",
						"portraits",
						"portraits_ig",
						"portraitvat",
						"violine"
					]
				},
				["IMG_3422.webp"]: {
					isPortrait: true,
				},
			} as any
		}
	},
}
</script>