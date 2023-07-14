<template>
  <div class="menu_wrapper">
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
      categories: img._categories
    };
  },
};
</script>

<style lang="scss">
.menu {
  &_wrapper {
    background-color: $main-background-color;
    box-shadow: $image-shadow;
    border-radius: 0 0 15px 15px;
    padding: 10px 0;
    max-width: $max-content-width;
    width: 100%;
    margin: 5px auto;
    overflow-x: auto;
    overflow-y: hidden;
  }

  &_content {
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    width: fit-content;


    &_item {
      padding: 0.75rem;
      margin: 0.25rem;

      a {
        color: $main-font-color;
        min-width: max-content;
        margin: 0.25rem;
        font-weight: 600;
        transition: ease-out 0.2s all;
        font-size: 1rem;
        padding: 0.75rem;
        margin: 0.25rem;
        border-radius: 10px;
      }
    }
  }
}

.router-link-exact-active {
  background-color: $dark-background-color;
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
</style>
