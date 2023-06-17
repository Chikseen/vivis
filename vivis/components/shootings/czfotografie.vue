<template>
  <div>
    <GalleryTitleWrapper>
      <div class="galleryTitle_header">
        <h2>Fotograf:</h2>
        <a href="https://www.instagram.com/czfotografie/">
          <h2>czfotografie</h2>
          <img class="header_content_logos_icon" src="@/assets/logos/InstagramLogo.svg" />
        </a>
      </div>
      <p>30 October, 2021</p>
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
        path: "czfotografie",
        imgs: [],
      },
      igInfo: {
        ["IMG_0580.jpg"]: {
          href: "https://www.instagram.com/p/CVpzOXevDgW/",
          tagList: ["https://www.instagram.com/explore/tags/Moodyports/",
            "https://www.instagram.com/explore/tags/_fairies_in_dark/",
            "https://www.instagram.com/explore/tags/artofvisuals/",
            "https://www.instagram.com/explore/tags/avantgarde_vibes/",
            "https://www.instagram.com/explore/tags/beautifulbizarre/",
            "https://www.instagram.com/explore/tags/bravo_portraits/",
            "https://www.instagram.com/explore/tags/dark_portraits/",
            "https://www.instagram.com/explore/tags/darkbeauty/",
            "https://www.instagram.com/explore/tags/darkbeautymag/",
            "https://www.instagram.com/explore/tags/darkportraits/",
            "https://www.instagram.com/explore/tags/doports/",
            "https://www.instagram.com/explore/tags/fotodome/",
            "https://www.instagram.com/explore/tags/haunting_humans/",
            "https://www.instagram.com/explore/tags/infinity_undercore/",
            "https://www.instagram.com/explore/tags/moody_arts/",
            "https://www.instagram.com/explore/tags/moodygrams/",
            "https://www.instagram.com/explore/tags/nakidmag/",
            "https://www.instagram.com/explore/tags/portrait_planet/",
            "https://www.instagram.com/explore/tags/portraitmood/",
            "https://www.instagram.com/explore/tags/portraits_mf/",
            "https://www.instagram.com/explore/tags/portraitstream/",
            "https://www.instagram.com/explore/tags/souls_hunters/",
            "https://www.instagram.com/explore/tags/withhumans/"]
        },
        ["IMG_0640.jpg"]: {
          href: "https://www.instagram.com/p/CNUsrJBHDU0/",
          tagList: ["https://www.instagram.com/explore/tags/followme/",
            "https://www.instagram.com/explore/tags/fotografie/",
            "https://www.instagram.com/explore/tags/girl/",
            "https://www.instagram.com/explore/tags/insta/",
            "https://www.instagram.com/explore/tags/instadaily/",
            "https://www.instagram.com/explore/tags/instagood/",
            "https://www.instagram.com/explore/tags/instagram/",
            "https://www.instagram.com/explore/tags/instalike/",
            "https://www.instagram.com/explore/tags/leipzigblogger/",
            "https://www.instagram.com/explore/tags/like/",
            "https://www.instagram.com/explore/tags/model/",
            "https://www.instagram.com/explore/tags/neuesfoto/",
            "https://www.instagram.com/explore/tags/shooting/",
            "https://www.instagram.com/explore/tags/viral/"]
        },
        ["IMG_0641.jpg"]: {
          href: "https://www.instagram.com/p/COTJH-pnsp9/",
          tagList: ["https://www.instagram.com/explore/tags/opiumred/",
            "https://www.instagram.com/explore/tags/bayern/",
            "https://www.instagram.com/explore/tags/czFotografie/",
            "https://www.instagram.com/explore/tags/followme/",
            "https://www.instagram.com/explore/tags/fotografie/",
            "https://www.instagram.com/explore/tags/girl/",
            "https://www.instagram.com/explore/tags/insta/",
            "https://www.instagram.com/explore/tags/instadaily/",
            "https://www.instagram.com/explore/tags/instagood/",
            "https://www.instagram.com/explore/tags/instagram/",
            "https://www.instagram.com/explore/tags/instalike/",
            "https://www.instagram.com/explore/tags/leipzigblogger/",
            "https://www.instagram.com/explore/tags/like/",
            "https://www.instagram.com/explore/tags/model/",
            "https://www.instagram.com/explore/tags/neuesfoto/",
            "https://www.instagram.com/explore/tags/shooting/",
            "https://www.instagram.com/explore/tags/viral/"]
        },
        ["IMG_0643.jpg"]: {
          href: "https://www.instagram.com/p/CSwQeauM3O7/",
          tagList: ["https://www.instagram.com/explore/tags/akt/",
            "https://www.instagram.com/explore/tags/art/",
            "https://www.instagram.com/explore/tags/black/",
            "https://www.instagram.com/explore/tags/blacklove/",
            "https://www.instagram.com/explore/tags/foto/",
            "https://www.instagram.com/explore/tags/fotografie/",
            "https://www.instagram.com/explore/tags/girl/",
            "https://www.instagram.com/explore/tags/mood/",
            "https://www.instagram.com/explore/tags/mood/",
            "https://www.instagram.com/explore/tags/nude/",
            "https://www.instagram.com/explore/tags/photo/",
            "https://www.instagram.com/explore/tags/photographer/",
            "https://www.instagram.com/explore/tags/photography/",
            "https://www.instagram.com/explore/tags/photooftheday/",
            "https://www.instagram.com/explore/tags/photoshoot/",
            "https://www.instagram.com/explore/tags/projekt/",
            "https://www.instagram.com/explore/tags/sensual_shots_/",
            "https://www.instagram.com/explore/tags/shooting/",
            "https://www.instagram.com/explore/tags/weather/"]
        },
      }
    }
  },
  mounted() {
    const names = imgsJSON[this.imgJson.path]
    console.log(names)
    names.forEach(name => {
      this.imgJson.imgs.push({ name: name, info: this.igInfo[name] });
    });
  },
}
</script>