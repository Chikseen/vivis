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
  
<script>
import imgsJSON from "@/imgs.json";

export default {
	data() {
		return {
			imgJson: {
				path: "chris_del_trip",
				imgs: [],
			},
			igInfo: {
				["IMG_3443.webp"]: {
					href: "https://www.instagram.com/p/Cto3ryTKIpF/",
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