<template>
  <div class="menu_wrapper">
    <div class="background"> </div>
    <div class="menu_content">
      <span v-for="(categorie, index) in categories" :key="index" class="menu_content_item">
        <NuxtLink :to="categorie">{{ categorie.replace("_", "") }}</NuxtLink>
      </span>
    </div>
  </div>
</template>

<script>
import img from "@/imgs.json"

export default {
  data() {
    return {
      categories: img._categories,
    };
  },
  methods: {
    setBackgroundPos() {
      const activeElm = document.getElementsByClassName("router-link-exact-active");
      const active = activeElm[0]?.getBoundingClientRect();

      const scrollElm = document.getElementsByClassName("menu_wrapper");
      const scroll = scrollElm[0];

      var styleSheet = document.styleSheets[0];
      styleSheet.insertRule(`.background { left: ${active.left + window.scrollX + scroll.scrollLeft}px; width: ${active.width}px }`, styleSheet.cssRules.length);
    }
  },
  watch: {
    '$route'() {
      this.$nextTick(() => {
        this.setBackgroundPos()
      })
    }
  },
  destroyed() {
    window?.removeEventListener("resize", this.setBackgroundPos);
  },
  mounted() {
    this.$nextTick(() => {
      window?.addEventListener("resize", this.setBackgroundPos);
      this.setBackgroundPos()
    })
  }
};
</script>

<style lang="scss">
.menu {
  &_wrapper {
    position: sticky;
    top: 0;
    background-color: $main-background-color;
    box-shadow: $image-shadow;
    border-radius: 0 0 15px 15px;
    padding: 1.5rem;
    max-width: $max-content-width;
    width: calc(100% - 3rem);
    margin: 5px auto;
    overflow-x: auto;
    overflow-y: hidden;
    z-index: 10;
  }

  &_content {
    position: relative;
    width: max-content;
    margin: auto;
    z-index: 10;

    &_item {

      a {
        color: $main-font-color;
        min-width: max-content;
        font-weight: 600;
        font-size: 1rem;
        padding: 0.75rem 1rem;
        border-radius: 10px;
        transition: ease-out 0.2s all;
        z-index: 20;
      }
    }
  }
}

.background {
  position: absolute;
  top: 0;
  height: 100%;
  background-color: $dark-background-color;
  z-index: 5;
  transition: all 0.75s ease-out;
}


.router-link-exact-active {
  color: $light-font-color !important;
}

.rotateY-enter-active,
.rotateY-leave-active {
  transition: all 0.25s ease-out;
}

.rotateY-enter-from {
  transform: translateY(-200%);
  opacity: 0;
}

.rotateY-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

@media only screen and (min-width: 750px) {
  .menu {
    &_content {
      flex-wrap: wrap;
    }
  }
}

@keyframes routeChange {
  from {
    width: 750px;
    left: -375px;
  }

  to {
    width: 100%;
  }
}
</style>
