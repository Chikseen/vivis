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

		<GalleryWrapper :imgJson="imgJson" />
	</div>
</template>
  
<script>
import imgsJSON from "@/imgs.json";

export default {
	data() {
		return {
			imgJson: {
				path: "manuel_r_portraits",
				imgs: [],
			},
			igInfo: {
				["_70a7076.webp"]: {
					href: "https://www.instagram.com/p/CsnlxZsqcRk/",
					tagList: ["https://www.instagram.com/explore/tags/60sflair/",
						"https://www.instagram.com/explore/tags/altarimwald/",
						"https://www.instagram.com/explore/tags/beautyinnight/",
						"https://www.instagram.com/explore/tags/betendehände/",
						"https://www.instagram.com/explore/tags/betendesmodel/",
						"https://www.instagram.com/explore/tags/colorfulportraits/",
						"https://www.instagram.com/explore/tags/creativeportrait/",
						"https://www.instagram.com/explore/tags/fotografie/",
						"https://www.instagram.com/explore/tags/fotoshooting/",
						"https://www.instagram.com/explore/tags/girlinthewoods/",
						"https://www.instagram.com/explore/tags/hasenland/",
						"https://www.instagram.com/explore/tags/hasenlandunion/",
						"https://www.instagram.com/explore/tags/individualphotoshoot/",
						"https://www.instagram.com/explore/tags/individualportrait/",
						"https://www.instagram.com/explore/tags/modeling/",
						"https://www.instagram.com/explore/tags/modelinthedark/",
						"https://www.instagram.com/explore/tags/modelshooting/",
						"https://www.instagram.com/explore/tags/modelwithglasses/",
						"https://www.instagram.com/explore/tags/orangeoutfitshoot/",
						"https://www.instagram.com/explore/tags/photography/",
						"https://www.instagram.com/explore/tags/photographylover/",
						"https://www.instagram.com/explore/tags/portraitphotography/",
						"https://www.instagram.com/explore/tags/portraitsmadeingermany/",
						"https://www.instagram.com/explore/tags/pray/",
						"https://www.instagram.com/explore/tags/schwarzenbachandersaale/",
						"https://www.instagram.com/explore/tags/shooting/",
						"https://www.instagram.com/explore/tags/stuttgartportraitphotographer/",
						"https://www.instagram.com/explore/tags/viltrox85mm/",
						"https://www.instagram.com/explore/tags/viltrox85xmount/",
						"https://www.instagram.com/explore/tags/xt2/",]
				},
				["_70a6945.webp"]: {
					href: "https://www.instagram.com/p/CsocObQKu-m/",
					tagList: ["https://www.instagram.com/explore/tags/_fairies/",
						"https://www.instagram.com/explore/tags/bnw_addicted/",
						"https://www.instagram.com/explore/tags/bnw_magazine/",
						"https://www.instagram.com/explore/tags/bw_perfect/",
						"https://www.instagram.com/explore/tags/celle/",
						"https://www.instagram.com/explore/tags/createcommune/",
						"https://www.instagram.com/explore/tags/discoverportrait/",
						"https://www.instagram.com/explore/tags/expofilm/",
						"https://www.instagram.com/explore/tags/flair_bw/",
						"https://www.instagram.com/explore/tags/folkportraits/",
						"https://www.instagram.com/explore/tags/hannovershots/",
						"https://www.instagram.com/explore/tags/ig_shotz/",
						"https://www.instagram.com/explore/tags/ig_shotz_bw/",
						"https://www.instagram.com/explore/tags/instagram_faces/",
						"https://www.instagram.com/explore/tags/master_in_bnw/",
						"https://www.instagram.com/explore/tags/moodyports/",
						"https://www.instagram.com/explore/tags/portraitstyles/",
						"https://www.instagram.com/explore/tags/project_soul/",
						"https://www.instagram.com/explore/tags/rsa_portraits/",
						"https://www.instagram.com/explore/tags/tangledinfilm/",
						"https://www.instagram.com/explore/tags/top_portraits/",]
				},
				["_70a7005.webp"]: {
					href: "https://www.instagram.com/p/Csp-_Q-qCu-/",
					tagList: ["https://www.instagram.com/explore/tags/_fairies/",
						"https://www.instagram.com/explore/tags/bnw_addicted/",
						"https://www.instagram.com/explore/tags/bnw_magazine/",
						"https://www.instagram.com/explore/tags/bw_perfect/",
						"https://www.instagram.com/explore/tags/celle/",
						"https://www.instagram.com/explore/tags/createcommune/",
						"https://www.instagram.com/explore/tags/discoverportrait/",
						"https://www.instagram.com/explore/tags/expofilm/",
						"https://www.instagram.com/explore/tags/flair_bw/",
						"https://www.instagram.com/explore/tags/folkportraits/",
						"https://www.instagram.com/explore/tags/hannovershots/",
						"https://www.instagram.com/explore/tags/ig_shotz/",
						"https://www.instagram.com/explore/tags/ig_shotz_bw/",
						"https://www.instagram.com/explore/tags/instagram_faces/",
						"https://www.instagram.com/explore/tags/master_in_bnw/",
						"https://www.instagram.com/explore/tags/moodyports/",
						"https://www.instagram.com/explore/tags/portraitstyles/",
						"https://www.instagram.com/explore/tags/project_soul/",
						"https://www.instagram.com/explore/tags/rsa_portraits/",
						"https://www.instagram.com/explore/tags/tangledinfilm/",
						"https://www.instagram.com/explore/tags/top_portraits/",]
				},
				["IMG_3400.webp"]: {
					href: "https://www.instagram.com/p/CttBqKkqqiz/",
					tagList: ["https://www.instagram.com/explore/tags/art/",
						"https://www.instagram.com/explore/tags/bayerischeportraits/",
						"https://www.instagram.com/explore/tags/curlyhair/",
						"https://www.instagram.com/explore/tags/deutschefotografen/",
						"https://www.instagram.com/explore/tags/deutschemodels/",
						"https://www.instagram.com/explore/tags/dress/",
						"https://www.instagram.com/explore/tags/dynamicportraits/",
						"https://www.instagram.com/explore/tags/explore/",
						"https://www.instagram.com/explore/tags/explorepage/",
						"https://www.instagram.com/explore/tags/filigreemagazine/",
						"https://www.instagram.com/explore/tags/germanportraiture/",
						"https://www.instagram.com/explore/tags/hasenland/",
						"https://www.instagram.com/explore/tags/hasenland_union/",
						"https://www.instagram.com/explore/tags/insta_portrait/",
						"https://www.instagram.com/explore/tags/meetup/",
						"https://www.instagram.com/explore/tags/modelsinc/",
						"https://www.instagram.com/explore/tags/portrait.beauties/",
						"https://www.instagram.com/explore/tags/portrait_vision/",
						"https://www.instagram.com/explore/tags/portraits/",
						"https://www.instagram.com/explore/tags/portraitshoot/",
						"https://www.instagram.com/explore/tags/portraitstream/",
						"https://www.instagram.com/explore/tags/portratos/",
						"https://www.instagram.com/explore/tags/shootingto/",]
				},
				["IMG_3402.webp"]: {
					href: "https://www.instagram.com/p/CthajodK4ke/",
					tagList: ["https://www.instagram.com/explore/tags/art/",
						"https://www.instagram.com/explore/tags/bayerischeportraits/",
						"https://www.instagram.com/explore/tags/curlyhair/",
						"https://www.instagram.com/explore/tags/deutschefotografen/",
						"https://www.instagram.com/explore/tags/deutschemodels/",
						"https://www.instagram.com/explore/tags/dress/",
						"https://www.instagram.com/explore/tags/dynamicportraits/",
						"https://www.instagram.com/explore/tags/explore/",
						"https://www.instagram.com/explore/tags/explorepage/",
						"https://www.instagram.com/explore/tags/filigreemagazine/",
						"https://www.instagram.com/explore/tags/germanportraiture/",
						"https://www.instagram.com/explore/tags/hasenland/",
						"https://www.instagram.com/explore/tags/hasenland_union/",
						"https://www.instagram.com/explore/tags/insta_portrait/",
						"https://www.instagram.com/explore/tags/meetup/",
						"https://www.instagram.com/explore/tags/modelsinc/",
						"https://www.instagram.com/explore/tags/portrait.beauties/",
						"https://www.instagram.com/explore/tags/portrait_vision/",
						"https://www.instagram.com/explore/tags/portraits/",
						"https://www.instagram.com/explore/tags/portraitshoot/",
						"https://www.instagram.com/explore/tags/portraitstream/",
						"https://www.instagram.com/explore/tags/portratos/",
						"https://www.instagram.com/explore/tags/shootingto/",]
				},
			}
		}
	},
	mounted() {
		const names = imgsJSON[this.imgJson.path]
		names.forEach(name => {
			this.imgJson.imgs.push({ name: name, info: this.igInfo[name] });
		});
	},
}
</script>