<template>
	<div>
		<GalleryTitleWrapper>
			<div class="galleryTitle_header">
				<h2>Fotograf:</h2>
				<a href="https://www.instagram.com/chris_del_trip/" aria-label="Link to the Photographer">
					<h2>Chris_del_trip</h2>
					<InstagramIcon />
				</a>
			</div>
			<p>13 Mai, 2023</p>
		</GalleryTitleWrapper>

		<GalleryWrapper :imgJson="imgJson" />
	</div>
</template>

<script lang="ts">
export default {
	data() {
		return {
			store: useMainStore(),
			imgJson: {
				path: "chris_del_trip",
				imgs: [] as any,
			},
			igInfo: {
				["IMG_3443.webp"]: {
					href: "https://www.instagram.com/p/Cto3ryTKIpF/",
					isPortrait: true,
					tagList: ["60sflair",
						"altarimwald",
						"beautyinnight",
						"betendehände",
						"betendesmodel",
						"colorfulportraits",
						"creativeportrait",
						"fotografie",
						"fotoshooting",
						"girlinthewoods",
						"hasenland",
						"hasenlandunion",
						"individualphotoshoot",
						"individualportrait",
						"modeling",
						"modelinthedark",
						"modelshooting",
						"modelwithglasses",
						"orangeoutfitshoot",
						"photography",
						"photographylover",
						"portraitphotography",
						"portraitsmadeingermany",
						"pray",
						"schwarzenbachandersaale",
						"shooting",
						"stuttgartportraitphotographer",
						"viltrox85mm",
						"viltrox85xmount",
						"xt2",]
				},
				["IMG_3444.webp"]: {
					isPortrait: true,
				},
				["IMG_3448.webp"]: {
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