<template>
	<div>
		<GalleryTitleWrapper>
			<div class="galleryTitle_header">
				<h2>Fotograf:</h2>
				<a href="https://www.instagram.com/authenticpicture/" aria-label="Link to the Photographer">
					<h2>authenticpicture</h2>
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
				path: "authenticpicture",
				imgs: [],
			},
			igInfo: {
				["IMG_4163.webp"]: {
					href: "XXXXXX",
					isPortrait: true,
				},
				["IMG_4164.webp"]: {
					href: "XXXXXX",
					isPortrait: true,
				},
				["IMG_4165.webp"]: {
					href: "XXXXXX",
					isPortrait: true,
				},
				["IMG_4167.webp"]: {
					href: "https://www.instagram.com/p/CwZtx4wKS2M/",
					isPortrait: true,
					tagList: ["availablelight",
						"beautifulmind",
						"blackandwhite",
						"bw",
						"hasenland",
						"portrait",]
				},
			}
		}
	},
	created() {
		const names = imgsJSON[this.imgJson.path]
		names.forEach(name => {
			this.imgJson.imgs.push({ name: name, info: this.igInfo[name] });
		});
	},
}
</script>
  