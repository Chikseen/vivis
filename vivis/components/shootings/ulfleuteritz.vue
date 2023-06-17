<template>
  <div>
    <GalleryTitleWrapper>
      <div class="galleryTitle_header">
        <h2>Fotograf:</h2>
        <a href="https://www.instagram.com/ulfleuteritz/">
          <h2>ulfleuteritz</h2>
          <img class="header_content_logos_icon" src="@/assets/logos/InstagramLogo.svg" />
        </a>
      </div>
      <p>17 Februar, 2023</p>
    </GalleryTitleWrapper>

    <GalleryWrapper :imgJson="imgJson"/>
  </div>
</template>

<script>
import imgsJSON from "@/imgs.json";

export default {
  data() {
    return {
      imgJson: {
        path: "ulfleuteritz",
        imgs: [],
      },
      igInfo: {
        ["IMG_2833.jpg"]: {
          href: "https://www.instagram.com/p/CpDBlzlqR-d/",
          tagList: ["https://www.instagram.com/explore/tags/blackandwhite/",
            "https://www.instagram.com/explore/tags/blackandwhitephotography/",
            "https://www.instagram.com/explore/tags/leipzig/",
            "https://www.instagram.com/explore/tags/model/",
            "https://www.instagram.com/explore/tags/portrait/",
            "https://www.instagram.com/explore/tags/portraitphotography/",
            "https://www.instagram.com/explore/tags/pretty/",
            "https://www.instagram.com/explore/tags/shooting/",
            "https://www.instagram.com/explore/tags/sw/"]
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