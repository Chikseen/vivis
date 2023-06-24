<template>
  <div class="gallery_wrapper">
    <div v-for="(img, index) in imgJson?.imgs" :key="index" class="gallery_inactive"
      :style="img.info?.isPortrait ? 'grid-row: span 2' : ''">
      <a v-if="img.info?.href" :href="img.info?.href" aria-label="Link to the image">
        <nuxt-img :src="getImgUrl(img)" alt="A Picture of the model" loading="lazy" sizes="sm:100vw md:50vw lg:400px"
          densities="1x 2x" />
      </a>
      <a v-else :href="`images/${imgJson.path}/${img.name}`" aria-label="Link to the image">
        <nuxt-img :src="getImgUrl(img)" alt="A Picture of the model" loading="lazy" sizes="sm:100vw md:50vw lg:400px"
          densities="1x 2x" />
      </a>
      <ul v-if="img.info?.tagList" class="gallery_image_overlay_tags">
        <li v-for="(tag, index) in img.info.tagList" :key="index">
          <a :href="`https://www.instagram.com/explore/tags/${tag}/`" aria-label="Link to the Hashtag">
            {{ "#" + tag }}</a>
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
    getImgUrl(img) {
      if (process.env.NODE_ENV === 'production')
        return `images/${this.imgJson.path}/${img.name}`
      else
        return `${this.imgJson.path}/${img.name}`
    }
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
    position: relative;

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

  &_image {
    &_overlay {
      &_tags {
        position: absolute;
        bottom: 0;
        left: 0;
        width: calc(100% - 1rem);
        max-height: 3rem;
        display: flex;
        flex-wrap: wrap;
        background: linear-gradient(35deg, #424242 0%, #414141c0 20%, #41414100 40%);
        border-radius: 0 0 10px 10px;
        gap: 0.2rem;
        margin: 0;
        padding: 0.5rem;
        list-style-type: none;
        transition: 1s all;
        overflow: hidden;

        li {
          a {
            white-space: nowrap;
            width: auto;
            font-size: 12px;
            color: $light-background-font-color;
          }

        }

        &:hover {
          max-height: 100%;
          bottom: 0;
          background-color: #3a3a3ae8;
        }

        &::before {
          content: "";
          background: url("@/assets/logos/InstagramLogo.svg");
          background-size: 3rem 3rem;
          background-repeat: no-repeat;
          width: 100%;
          height: 3rem;
          opacity: 1;
          transition: 0.5s all;
        }        
      }
    }
  }

  &_wrapper {
    position: relative;
    display: grid;
    grid-auto-flow: column dense;
    grid-template-rows: repeat(2, 14rem);
    margin: 0 auto;
    gap: 2rem;
    padding: 2rem;

    div {
      display: flex;
      flex-direction: column;
      min-width: 20rem;
      max-width: 30rem;
      height: 100%;
      margin: 0 auto;

      a {
        height: 100%;

        img {
          min-width: 7rem;
          width: 100%;
          height: 100%;
          max-width: 30rem;
          object-fit: cover;
          border-radius: 10px;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
