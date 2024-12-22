<template>
  <div>
    <GalleryTitleWrapper>
      <div class="galleryTitle_header">
        <h2>Fotograf:</h2>
        <a href="https://www.instagram.com/blickwinkelpictures/" aria-label="Link to the Photographer">
          <h2>blickwinkelpictures</h2>
          <InstagramIcon />
        </a>
      </div>
      <p>13 August, 2022</p>
    </GalleryTitleWrapper>
    <GalleryWrapper :imgJson="imgJson" />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      store: useMainStore(),
      imgJson: {
        path: "blickwinkel",
        imgs: [] as any,
      },
      igInfo: {
        ["67CB5DEA-C4E2-43B6-993C-92D51267C303.webp"]: {
          href: "https://www.instagram.com/p/CkOIXm3oCwr/",
          isPortrait: true,
          tagList: ["autumn",
            "germany",
            "model",
            "portraitphotography",
            "shooting"]
        },
        ["B039F301-9DF2-4EE8-B076-2EBC49147609.webp"]: {
          href: "https://www.instagram.com/p/CkuxMbSIl9v/",
          isPortrait: true,
          tagList: ["autumn",
            "germany",
            "leaf",
            "orange",
            "schlosspark",
            "shooting"]
        },
        ["dsc07735.webp"]: {
          href: "https://www.instagram.com/p/CkGDls3I9dK/",
          isPortrait: true,
          tagList: ["autumn",
            "germany",
            "model",
            "portraitphotography",
            "shooting"]
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