<template>
  <div>
    <GalleryTitleWrapper>
      <div class="galleryTitle_header">
        <h2>Fotograf:</h2>
        <a href="https://www.instagram.com/blitzeis.fotografie/">
          <h2>blitzeis.fotografie</h2>
          <img class="header_content_logos_icon" src="@/assets/logos/InstagramLogo.svg" />
        </a>
      </div>
      <div class="galleryTitle_header">
        <h2>Fotograf:</h2>
        <a href="https://www.instagram.com/betografie/">
          <h2>betografie</h2>
          <img class="header_content_logos_icon" src="@/assets/logos/InstagramLogo.svg" />
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
        ["IMG_0009.jpg"]: {
          href: "https://www.instagram.com/p/CTPRQ4sMC9p/",
          tagList: ["https://www.instagram.com/explore/tags/chemnitz/",
            "https://www.instagram.com/explore/tags/leipzig/",
            "https://www.instagram.com/explore/tags/portrait_shots/",
            "https://www.instagram.com/explore/tags/portraitphotography/",
            "https://www.instagram.com/explore/tags/porträt/",
            "https://www.instagram.com/explore/tags/porträt/",
            "https://www.instagram.com/explore/tags/saxony/",
            "https://www.instagram.com/explore/tags/tfpmodel/",
            "https://www.instagram.com/explore/tags/tfpshooting/"]
        },
        ["IMG_0011.jpg"]: {
          href: "https://www.instagram.com/p/CTjfsWtoc6K/",
          tagList: ["https://www.instagram.com/explore/tags/chemnitz/",
            "https://www.instagram.com/explore/tags/followme/",
            "https://www.instagram.com/explore/tags/fotografie/",
            "https://www.instagram.com/explore/tags/girl/",
            "https://www.instagram.com/explore/tags/insta/",
            "https://www.instagram.com/explore/tags/instadaily/",
            "https://www.instagram.com/explore/tags/instagood/",
            "https://www.instagram.com/explore/tags/instagram/",
            "https://www.instagram.com/explore/tags/instalike/",
            "https://www.instagram.com/explore/tags/leipzigblogger/",
            "https://www.instagram.com/explore/tags/leipzigblogger/",
            "https://www.instagram.com/explore/tags/like/",
            "https://www.instagram.com/explore/tags/model/",
            "https://www.instagram.com/explore/tags/neuesfoto/",
            "https://www.instagram.com/explore/tags/shooting/",
            "https://www.instagram.com/explore/tags/viral/",
            "https://www.instagram.com/explore/tags/viral/",]
        },
        ["IMG_0022.jpg"]: {
          href: "https://www.instagram.com/p/CTPb4HQo8Yc/",
          tagList: ["https://www.instagram.com/explore/tags/chemnitz/",
            "https://www.instagram.com/explore/tags/followme/",
            "https://www.instagram.com/explore/tags/fotografie/",
            "https://www.instagram.com/explore/tags/girl/",
            "https://www.instagram.com/explore/tags/insta/",
            "https://www.instagram.com/explore/tags/instadaily/",
            "https://www.instagram.com/explore/tags/instagood/",
            "https://www.instagram.com/explore/tags/instagram/",
            "https://www.instagram.com/explore/tags/instalike/",
            "https://www.instagram.com/explore/tags/leipzigblogger/",
            "https://www.instagram.com/explore/tags/leipzigblogger/",
            "https://www.instagram.com/explore/tags/like/",
            "https://www.instagram.com/explore/tags/model/",
            "https://www.instagram.com/explore/tags/neuesfoto/",
            "https://www.instagram.com/explore/tags/shooting/",
            "https://www.instagram.com/explore/tags/viral/",
            "https://www.instagram.com/explore/tags/viral/"]
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
