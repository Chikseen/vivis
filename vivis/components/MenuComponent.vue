<template>
  <div class="menu_wrapper" id="menu">
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
      styleSheet.insertRule(`.background { left: ${active?.left + window.scrollX + (scroll.scrollLeft - scroll?.getBoundingClientRect()?.left)}px; width: ${active?.width}px }`, styleSheet.cssRules.length);
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
    padding: 1.5rem;
    height: 1rem;
    max-width: $max-content-width;
    width: calc(100% - 3rem);
    margin: 0 auto;
    overflow-x: auto;
    overflow-y: hidden;
    clip-path: inset(0 0 1px 0); // Dirty fix for IOS 1px problem
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
        font-weight: 600;
        font-size: 16px;
        padding: 0.75rem;
        border-radius: 10px;
        z-index: 20;
        transition: color 0.75s;
      }
    }
  }
}

.background {
  position: absolute;
  top: 0;
  margin-top: 0%;
  height: 100%;
  background: linear-gradient(0deg, #2b2b2b 0%, $dark-background-color 100%);
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

@media only screen and (max-width: 450px) {
  .menu {
    &_wrapper {
      padding: 1.25rem;
      max-width: $max-content-width;
      width: calc(100% - 2.5rem);
    }

    &_content {
      &_item {
        a {
          color: $main-font-color;
          min-width: max-content;
          font-weight: 600;
          font-size: 12px;
          padding: 0.75rem;
          border-radius: 10px;
        }
      }
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
