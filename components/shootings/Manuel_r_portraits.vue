<template>
	<div>
		<GalleryTitleWrapper>
			<div class="galleryTitle_header">
				<h2>Fotograf:</h2>
				<a href="https://www.instagram.com/manuel_r_portraits/" aria-label="Link to the Photographer">
					<h2>Manuel_r_portraits</h2>
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
			path: "manuel_r_portraits",
			igInfo: {
				["_70a7076.webp"]: {
					href: "https://www.instagram.com/p/CsnlxZsqcRk/",
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
				["_70a6945.webp"]: {
					href: "https://www.instagram.com/p/CsocObQKu-m/",
					isPortrait: true,
					tagList: ["_fairies",
						"bnw_addicted",
						"bnw_magazine",
						"bw_perfect",
						"celle",
						"createcommune",
						"discoverportrait",
						"expofilm",
						"flair_bw",
						"folkportraits",
						"hannovershots",
						"ig_shotz",
						"ig_shotz_bw",
						"instagram_faces",
						"master_in_bnw",
						"moodyports",
						"portraitstyles",
						"project_soul",
						"rsa_portraits",
						"tangledinfilm",
						"top_portraits",]
				},
				["_70a7005.webp"]: {
					href: "https://www.instagram.com/p/Csp-_Q-qCu-/",
					isPortrait: true,
					tagList: ["_fairies",
						"bnw_addicted",
						"bnw_magazine",
						"bw_perfect",
						"celle",
						"createcommune",
						"discoverportrait",
						"expofilm",
						"flair_bw",
						"folkportraits",
						"hannovershots",
						"ig_shotz",
						"ig_shotz_bw",
						"instagram_faces",
						"master_in_bnw",
						"moodyports",
						"portraitstyles",
						"project_soul",
						"rsa_portraits",
						"tangledinfilm",
						"top_portraits",]
				},
				["IMG_3400.webp"]: {
					href: "https://www.instagram.com/p/CttBqKkqqiz/",
					isPortrait: true,
					tagList: ["art",
						"bayerischeportraits",
						"curlyhair",
						"deutschefotografen",
						"deutschemodels",
						"dress",
						"dynamicportraits",
						"explore",
						"explorepage",
						"filigreemagazine",
						"germanportraiture",
						"hasenland",
						"hasenland_union",
						"insta_portrait",
						"meetup",
						"modelsinc",
						"portraitbeauties/",
						"portrait_vision",
						"portraits",
						"portraitshoot",
						"portraitstream",
						"portratos",
						"shootingto",]
				},
				["IMG_3402.webp"]: {
					href: "https://www.instagram.com/p/CthajodK4ke/",
					isPortrait: true,
					tagList: ["art",
						"bayerischeportraits",
						"curlyhair",
						"deutschefotografen",
						"deutschemodels",
						"dress",
						"dynamicportraits",
						"explore",
						"explorepage",
						"filigreemagazine",
						"germanportraiture",
						"hasenland",
						"hasenland_union",
						"insta_portrait",
						"meetup",
						"modelsinc",
						"portraitbeauties/",
						"portrait_vision",
						"portraits",
						"portraitshoot",
						"portraitstream",
						"portratos",
						"shootingto",]
				},
				["IMG_3401.webp"]: {
					isPortrait: true,
				}
			} as any
		}
	},
}
</script>