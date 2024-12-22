<template>
  <div>
    <GalleryTitleWrapper>
      <div class="galleryTitle_header">
        <h2>Fotograf:</h2>
        <a href="https://www.instagram.com/ulfleuteritz/" aria-label="Link to the Photographer">
          <h2>ulfleuteritz</h2>
          <InstagramIcon />
        </a>
      </div>
      <p>17 Februar, 2023</p>
    </GalleryTitleWrapper>

    <GalleryWrapper :imgJson="imgJson" />
  </div>
</template>

<script lang="ts">
import { useMainStore } from "@/stores/mainStore";

export default {
  data() {
    return {
      store: useMainStore(),
      imgJson: {
        path: "ulfleuteritz",
        imgs: [] as any,
      },
      igInfo: {
        ["IMG_2833.webp"]: {
          href: "https://www.instagram.com/p/CpDBlzlqR-d/",
          tagList: ["blackandwhite",
            "blackandwhitephotography",
            "leipzig",
            "model",
            "portrait",
            "portraitphotography",
            "pretty",
            "shooting",
            "sw"]
        },
        ["IMG_2804.webp"]: {
          isPortrait: true
        },
        ["IMG_2813.webp"]: {
          isPortrait: true
        },
        ["IMG_3472.webp"]: {
          isPortrait: true
        },
        ["IMG_3476.webp"]: {
          isPortrait: true
        },
        ["IMG_3564.webp"]: {
          isPortrait: true
        },
        ["IMG_3565.webp"]: {
          isPortrait: true
        },
        ["IMG_3566.webp"]: {
          isPortrait: true
        },
      } as any
    }
  },
  created() {
    const names: string[] = this.store.$state.images[this.imgJson.path]
    names?.forEach(name => {
      this.imgJson.imgs.push({ name: name, info: this.igInfo[name] });
    });
  },
}
</script>