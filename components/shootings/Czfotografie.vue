<template>
  <div>
    <GalleryTitleWrapper>
      <div class="galleryTitle_header">
        <h2>Fotograf:</h2>
        <a href="https://www.instagram.com/czfotografie/" aria-label="Link to the Photographer">
          <h2>czfotografie</h2>
          <InstagramIcon />
        </a>
      </div>
      <p>30 October, 2021</p>
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
      path: "czfotografie",
      igInfo: {
        ["IMG_0580.webp"]: {
          href: "https://www.instagram.com/p/CVpzOXevDgW/",
          isPortrait: true,
          tagList: ["Moodyports",
            "_fairies_in_dark",
            "artofvisuals",
            "avantgarde_vibes",
            "beautifulbizarre",
            "bravo_portraits",
            "dark_portraits",
            "darkbeauty",
            "darkbeautymag",
            "darkportraits",
            "doports",
            "fotodome",
            "haunting_humans",
            "infinity_undercore",
            "moody_arts",
            "moodygrams",
            "nakidmag",
            "portrait_planet",
            "portraitmood",
            "portraits_mf",
            "portraitstream",
            "souls_hunters",
            "withhumans"]
        },
        ["IMG_0640.webp"]: {
          href: "https://www.instagram.com/p/CNUsrJBHDU0/",
          tagList: ["followme",
            "fotografie",
            "girl",
            "insta",
            "instadaily",
            "instagood",
            "instagram",
            "instalike",
            "leipzigblogger",
            "like",
            "model",
            "neuesfoto",
            "shooting",
            "viral"]
        },
        ["IMG_0641.webp"]: {
          href: "https://www.instagram.com/p/COTJH-pnsp9/",
          isPortrait: true,
          tagList: ["opiumred",
            "bayern",
            "czFotografie",
            "followme",
            "fotografie",
            "girl",
            "insta",
            "instadaily",
            "instagood",
            "instagram",
            "instalike",
            "leipzigblogger",
            "like",
            "model",
            "neuesfoto",
            "shooting",
            "viral"]
        },
        ["IMG_0643.webp"]: {
          href: "https://www.instagram.com/p/CSwQeauM3O7/",
          tagList: ["akt",
            "art",
            "black",
            "blacklove",
            "foto",
            "fotografie",
            "girl",
            "mood",
            "mood",
            "nude",
            "photo",
            "photographer",
            "photography",
            "photooftheday",
            "photoshoot",
            "projekt",
            "sensual_shots_",
            "shooting",
            "weather"]
        },
      } as any
    }
  },
}
</script>