<template>
  <div>
    <GalleryTitleWrapper>
      <div class="galleryTitle_header">
        <h2>Fotograf:</h2>
        <a href="https://www.instagram.com/der_kraft/"  aria-label="Link to the Photographer">
          <h2>der_kraft</h2>
          <img class="header_content_logos_icon" src="@/assets/logos/InstagramLogo.svg" alt="Instagram Logo" />
        </a>
        <h2>:</h2>
        <a href="https://derkraft-fotografie.de/"  aria-label="Link to the webpage of the Photographer">
          <h2>https://derkraft-fotografie.de/</h2>
        </a>
      </div>
      <p>5 Februar 2023</p>
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
        path: "der_kraft",
        imgs: [],
      },
      igInfo: {
        ["2023-02-05_laurichhof_vivian_silhuette_16.webp"]: {
          href: "https://www.instagram.com/p/Cr-OtqwI4nn/",
          tagList: ["https://www.instagram.com/explore/tags/beautifulwomen/",
            "https://www.instagram.com/explore/tags/beauty/",
            "https://www.instagram.com/explore/tags/brownhair/",
            "https://www.instagram.com/explore/tags/captureone/",
            "https://www.instagram.com/explore/tags/couture/",
            "https://www.instagram.com/explore/tags/creme/",
            "https://www.instagram.com/explore/tags/derkraft/",
            "https://www.instagram.com/explore/tags/dresden/",
            "https://www.instagram.com/explore/tags/dress/",
            "https://www.instagram.com/explore/tags/editwithus/",
            "https://www.instagram.com/explore/tags/fashion/",
            "https://www.instagram.com/explore/tags/fashionshooting/",
            "https://www.instagram.com/explore/tags/femalemodel/",
            "https://www.instagram.com/explore/tags/fujifilmxt3/",
            "https://www.instagram.com/explore/tags/inkedgirls/",
            "https://www.instagram.com/explore/tags/intensiveeyes/",
            "https://www.instagram.com/explore/tags/jinbeisfavoriten/",
            "https://www.instagram.com/explore/tags/photography/",
            "https://www.instagram.com/explore/tags/photooftheday/",
            "https://www.instagram.com/explore/tags/redlips/",
            "https://www.instagram.com/explore/tags/sensitive/",
            "https://www.instagram.com/explore/tags/shooting/"]
        },
        ["2023-02-05_laurichhof_vivian_silhuette_6.webp"]: {
          href: "https://www.instagram.com/p/CrEFmFoKO_f/",
          tagList: ["https://www.instagram.com/explore/tags/beautifulwomen/",
            "https://www.instagram.com/explore/tags/beauty/",
            "https://www.instagram.com/explore/tags/brownhair/",
            "https://www.instagram.com/explore/tags/captureone/",
            "https://www.instagram.com/explore/tags/couture/",
            "https://www.instagram.com/explore/tags/creme/",
            "https://www.instagram.com/explore/tags/derkraft/",
            "https://www.instagram.com/explore/tags/dresden/",
            "https://www.instagram.com/explore/tags/dress/",
            "https://www.instagram.com/explore/tags/editwithus/",
            "https://www.instagram.com/explore/tags/fashion/",
            "https://www.instagram.com/explore/tags/fashionshooting/",
            "https://www.instagram.com/explore/tags/femalemodel/",
            "https://www.instagram.com/explore/tags/fujifilmxt3/",
            "https://www.instagram.com/explore/tags/inkedgirls/",
            "https://www.instagram.com/explore/tags/intensiveeyes/",
            "https://www.instagram.com/explore/tags/jinbeisfavoriten/",
            "https://www.instagram.com/explore/tags/photography/",
            "https://www.instagram.com/explore/tags/photooftheday/",
            "https://www.instagram.com/explore/tags/redlips/",
            "https://www.instagram.com/explore/tags/sensitive/"]
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