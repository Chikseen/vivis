<template>
  <div>
    <GalleryTitleWrapper>
      <div class="galleryTitle_header">
        <h2>Fotograf:</h2>
        <a href="https://www.instagram.com/der_kraft/" aria-label="Link to the Photographer">
          <h2>der_kraft</h2>
          <InstagramIcon />
        </a>
        <h2>:</h2>
        <a href="https://derkraft-fotografie.de/" aria-label="Link to the webpage of the Photographer">
          <h2 style="margin: auto;">derkraft-fotografie.de</h2>
        </a>
      </div>
      <p>5 Februar 2023</p>
    </GalleryTitleWrapper>

    <GalleryWrapper :images="images" :path="path" />
  </div>
</template>

<script lang="ts">
import { useMainStore } from "@/stores/mainStore";

export default {
  computed: {
    images(): any[] {
      let images: any[] = [];
      const names: string[] = this.store.$state.images[this.path]
      names?.forEach(name => {
        images.push({ name: name, info: this.igInfo[name] });
      });
      return images;
    }
  },
  data() {
    return {
      store: useMainStore(),
      path: "der_kraft",
      igInfo: {
        ["2023-02-05_laurichhof_vivian_silhuette_16.webp"]: {
          href: "https://www.instagram.com/p/Cr-OtqwI4nn/",
          isPortrait: true,
          tagList: ["beautifulwomen",
            "beauty",
            "brownhair",
            "captureone",
            "couture",
            "creme",
            "derkraft",
            "dresden",
            "dress",
            "editwithus",
            "fashion",
            "fashionshooting",
            "femalemodel",
            "fujifilmxt3",
            "inkedgirls",
            "intensiveeyes",
            "jinbeisfavoriten",
            "photography",
            "photooftheday",
            "redlips",
            "sensitive",
            "shooting"]
        },
        ["2023-02-05_laurichhof_vivian_silhuette_6.webp"]: {
          isPortrait: true,
          href: "https://www.instagram.com/p/CrEFmFoKO_f/",
          tagList: ["beautifulwomen",
            "beauty",
            "brownhair",
            "captureone",
            "couture",
            "creme",
            "derkraft",
            "dresden",
            "dress",
            "editwithus",
            "fashion",
            "fashionshooting",
            "femalemodel",
            "fujifilmxt3",
            "inkedgirls",
            "intensiveeyes",
            "jinbeisfavoriten",
            "photography",
            "photooftheday",
            "redlips",
            "sensitive"]
        },
        ["2023-02-05_laurichhof_vivian_silhuette_5.webp"]: {
          isPortrait: true,
        },
        ["2023-02-05_laurichhof_vivian_silhuette_13.webp"]: {
          isPortrait: true,
        },
        ["2023-02-05_laurichhof_vivian_silhuette_14.webp"]: {
          isPortrait: true,
        },
        ["2023-02-05_laurichhof_vivian_silhuette_23.webp"]: {
          isPortrait: true,
        },
      } as any
    }
  },
}
</script>