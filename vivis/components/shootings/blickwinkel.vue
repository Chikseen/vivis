<template>
  <div>
    <GalleryTitleWrapper>
      <div class="galleryTitle_header">
        <h2>Fotograf:</h2>
        <a href="https://www.instagram.com/blickwinkelpictures/" aria-label="Link to the Photographer">
          <h2>blickwinkelpictures</h2>
          <img class="header_content_logos_icon" src="@/assets/logos/InstagramLogo.svg" alt="Instagram Logo" />
        </a>
      </div>
      <p>13 August, 2022</p>
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
        path: "blickwinkel",
        imgs: [],
      },
      igInfo: {
        ["67CB5DEA-C4E2-43B6-993C-92D51267C303.webp"]: {
          href: "https://www.instagram.com/p/CkOIXm3oCwr/",
          tagList: ["https://www.instagram.com/explore/tags/@blickwinkelportraits/",
            "https://www.instagram.com/explore/tags/autumn/",
            "https://www.instagram.com/explore/tags/germany/",
            "https://www.instagram.com/explore/tags/model/",
            "https://www.instagram.com/explore/tags/portraitphotography/",
            "https://www.instagram.com/explore/tags/shooting/"]
        },
        ["B039F301-9DF2-4EE8-B076-2EBC49147609.webp"]: {
          href: "https://www.instagram.com/p/CkuxMbSIl9v/",
          tagList: ["https://www.instagram.com/explore/tags/@blickwinkelportraits/",
            "https://www.instagram.com/explore/tags/autumn/",
            "https://www.instagram.com/explore/tags/germany/",
            "https://www.instagram.com/explore/tags/leaf/",
            "https://www.instagram.com/explore/tags/orange/",
            "https://www.instagram.com/explore/tags/schlosspark/",
            "https://www.instagram.com/explore/tags/shooting/"]
        },
        ["dsc07735.webp"]: {
          href: "https://www.instagram.com/p/CkGDls3I9dK/",
          tagList: ["https://www.instagram.com/explore/tags/@blickwinkelportraits/",
            "https://www.instagram.com/explore/tags/autumn/",
            "https://www.instagram.com/explore/tags/germany/",
            "https://www.instagram.com/explore/tags/model/",
            "https://www.instagram.com/explore/tags/portraitphotography/",
            "https://www.instagram.com/explore/tags/shooting/"]
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