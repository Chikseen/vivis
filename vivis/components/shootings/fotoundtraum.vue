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
		<GalleryWrapper :imgJson="imgJson" />
	</div>
</template>
  
<script>
import imgsJSON from "@/imgs.json";

export default {
	data() {
		return {
			imgJson: {
				path: "fotoundtraum",
				imgs: [],
			},
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
  