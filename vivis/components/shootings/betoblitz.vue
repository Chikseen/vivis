<template>
  <div>
    <GalleryTitleWrapper>
      <div class="galleryTitle_header">
        <h2>Fotograf:</h2>
        <a href="https://www.instagram.com/blitzeis.fotografie/" aria-label="Link to the Photographer">
          <h2>blitzeis.fotografie</h2>
          <InstagramIcon />
        </a>
      </div>
      <div class="galleryTitle_header">
        <h2>Fotograf:</h2>
        <a href="https://www.instagram.com/betografie/" aria-label="Link to the Photographer">
          <h2>betografie</h2>
          <InstagramIcon />
        </a>
      </div>
      <p>13 October, 2021</p>
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
        path: "betoblitz",
        imgs: [],
      },
      igInfo: {
        ["IMG_0009.webp"]: {
          href: "https://www.instagram.com/p/CTPRQ4sMC9p/",
          isPortrait: true,
          tagList: ["chemnitz",
            "leipzig",
            "portrait_shots",
            "portraitphotography",
            "porträt",
            "porträt",
            "saxony",
            "tfpmodel",
            "tfpshooting"]
        },
        ["IMG_0006.webp"]: {
          isPortrait: true,
        },
        ["IMG_0019.webp"]: {
          isPortrait: true,
        },
        ["IMG_0011.webp"]: {
          href: "https://www.instagram.com/p/CTjfsWtoc6K/",
          isPortrait: true,
          tagList: ["chemnitz",
            "followme",
            "fotografie",
            "girl",
            "insta",
            "instadaily",
            "instagood",
            "instagram",
            "instalike",
            "leipzigblogger",
            "leipzigblogger",
            "like",
            "model",
            "neuesfoto",
            "shooting",
            "viral",
            "viral",]
        },
        ["IMG_0022.webp"]: {
          href: "https://www.instagram.com/p/CTPb4HQo8Yc/",
          tagList: ["chemnitz",
            "followme",
            "fotografie",
            "girl",
            "insta",
            "instadaily",
            "instagood",
            "instagram",
            "instalike",
            "leipzigblogger",
            "leipzigblogger",
            "like",
            "model",
            "neuesfoto",
            "shooting",
            "viral",
            "viral"]
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
