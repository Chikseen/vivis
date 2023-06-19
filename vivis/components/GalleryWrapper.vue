<template>
  <div class="gallery_wrapper">
    <div v-for="(img, index) in imgJson?.imgs" :key="index" class="gallery_inactive">
      <a v-if="img.info?.href" :href="img.info?.href" aria-label="Link to the image">
        <nuxt-img :src="`${imgJson.path}/${img.name}`" alt="A Picture of the model" loading="lazy" />
      </a>
      <a v-else :href="`images/${imgJson.path}/${img.name}`" aria-label="Link to the image">
        <nuxt-img :src="`images/${imgJson.path}/${img.name}`" alt="A Picture of the model" loading="lazy" />
      </a>
      <ul v-if="img.info?.tagList">
        <li v-for="(tag, index) in img.info.tagList" :key="index">
          <a :href="tag" aria-label="Link to the Hashtag">
            {{ "#" + tag.replaceAll("/", "").replace("https:www.instagram.comexploretags", "") }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgJson: { type: Object, default: () => { } }
  },
  methods: {
    reveal() {
      var reveals = document.querySelectorAll(".gallery_inactive");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("gallery_active");
        } else {
          reveals[i].classList.remove("gallery_active");
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", () => this.reveal());
    this.reveal();
  },
};
</script>

<style lang="scss">
.gallery {
  &_inactive {
    h5 {
      transform: translateY(-150%);
      opacity: 0;
      z-index: -10 !important;
      transition: all 1s ease-in-out;
      transition-delay: 0.1s;
    }
  }

  &_active {
    h5 {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &_wrapper {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    margin: 0 auto;
    gap: 2rem;
    padding: 2rem;
    min-height: calc(100vh - 7.5rem);

    img {
      min-width: 9rem;
      width: 100%;
      height: auto;
      max-width: 40rem;
      object-fit: cover;
      border-radius: 10px;
      margin: 0 auto;
    }

    div {
      min-width: 9rem;
      width: 100%;
      max-width: 40rem;
      margin: 0 auto;

      ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0.2rem;
        margin: 0;
        padding: 0;
        list-style-type: none;

        li {
          a {
            white-space: nowrap;
            width: auto;
            font-size: 0.7rem;
            color: $light-background-font-color;
          }
        }
      }
    }
  }
}

// Media Query
@media only screen and (max-width: 500px) {
  .gallery {
    &_wrapper {
      grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    }
  }
}
</style>
