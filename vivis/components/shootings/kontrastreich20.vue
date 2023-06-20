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
  
<script>
import imgsJSON from "@/imgs.json";

export default {
	data() {
		return {
			imgJson: {
				path: "kontrastreich20",
				imgs: [],
			},
			igInfo: {
				["IMG_3521.webp"]: {
					href: "https://www.instagram.com/p/Ctb7V08qvWC/",
					tagList: ["https://www.instagram.com/explore/tags/divineports/",
						"https://www.instagram.com/explore/tags/fairytail/",
						"https://www.instagram.com/explore/tags/fairytale/",
						"https://www.instagram.com/explore/tags/portrait_perfection/",
						"https://www.instagram.com/explore/tags/portraitliebe/",
						"https://www.instagram.com/explore/tags/portraitlove/",
						"https://www.instagram.com/explore/tags/portraitpage/",
						"https://www.instagram.com/explore/tags/portraitphotography/",
						"https://www.instagram.com/explore/tags/portraits/",
						"https://www.instagram.com/explore/tags/portraitsmadeingermany/",
						"https://www.instagram.com/explore/tags/portraitsoup/",
						"https://www.instagram.com/explore/tags/ports_hd/",
						"https://www.instagram.com/explore/tags/portshd/",
						"https://www.instagram.com/explore/tags/portsinspired/"]
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