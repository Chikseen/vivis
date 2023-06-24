<template>
  <div class="menu_wrapper">
    <div class="menu_content">
      <span v-for="(categorie, index) in config.categories" :key="index"
        :class="['menu_content_item', selectedCategorie == categorie.id ? 'menu_content_item_active' : '']" @click="
          selectedCategorie = categorie.id; this.$router.push({ name: 'index', query: { categorie: categorie.id } });">
        <p>{{ categorie.displayName }}</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      redirecter: [],
      selectedCategorie: "fairytale",
      config: null,
      allShootings: []
    };
  },
  watch: {
    $route() {
      this.selectedShooting = this.$route.query.shooting;
    },
  },
  created() {
    const runtimeConfig = useRuntimeConfig();
    this.config = runtimeConfig.public
  },
  mounted() {
    // It is set to redirect but if JS is enabeled it will deactivate this function
    this.redirecter = [];
    if (!this.$route.query.categorie) {
      this.$route.query.categorie = "fairytale";
    }
    this.selectedCategorie = this.$route.query.categorie;
  },
};
</script>

<style lang="scss">
.menu {
  &_wrapper {
    background-color: $main-background-color;
    padding: 10px 5px 10px 5px;
    max-width: $max-content-width;
    margin: 5px auto;
    overflow: hidden;
  }

  &_content {
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 5px 0;

    &_item {
      min-width: max-content;
      padding: 1rem;
      margin: 0 auto;
      gap: 1rem;
      transition: ease-out 0.2s all;
      border-radius: 10px;

      &_active {
        background-color: $dark-background-color;

        p {
          color: $light-font-color !important;
        }
      }

      p {
        color: $main-font-color;
        width: fit-content;
        margin: 0 auto;
        font-weight: 600;
        transition: ease-out 0.2s all;
        font-size: 1rem;
      }
    }
  }
}

a.nuxt-link-active {
  font-weight: bold;
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
