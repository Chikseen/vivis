<template>
  <div class="menu_wrapper">
    <div class="menu_content">
      <NuxtLink :to="redirecter[0]" :class="['menu_content_item', query == names.S_1.route ? 'menu_content_item_active' : '']" @click="this.$router.push({ query: { shooting: names.S_1.route } })">
        <p>{{ names.S_1.name }}</p>
      </NuxtLink>
      <NuxtLink :to="redirecter[1]" :class="['menu_content_item', query == names.S_2.route ? 'menu_content_item_active' : 'F']" @click="this.$router.push({ query: { shooting: names.S_2.route } })">
        <p>{{ names.S_2.name }}</p>
      </NuxtLink>
      <NuxtLink :to="redirecter[2]" :class="['menu_content_item', query == names.S_3.route ? 'menu_content_item_active' : 'F']" @click="this.$router.push({ query: { shooting: names.S_3.route } })">
        <p>{{ names.S_3.name }}</p>
      </NuxtLink>
      <NuxtLink :to="redirecter[3]" :class="['menu_content_item', query == names.S_4.route ? 'menu_content_item_active' : 'F']" @click="this.$router.push({ query: { shooting: names.S_4.route } })">
        <p>{{ names.S_4.name }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      redirecter: [],
      names: {},
      query: "one",
    };
  },
  watch: {
    $route() {
      this.query = this.$route.query.shooting;
    },
  },
  created() {
    const runtimeConfig = useRuntimeConfig();
    this.names = runtimeConfig.public;
    this.redirecter = [`/${this.names.S_1.route}`, `/${this.names.S_2.route}`];
    console.log(this.names)
  },
  mounted() {
    // It is set to redirect but if JS is enabeled it will deactivate this function
    this.redirecter = [];
  },
};
</script>

<style lang="scss">
.menu {
  &_wrapper {
    background-color: $main-background-color;
    padding: 10px 5px;
  }

  &_content {
    display: flex;
    max-width: $max-content-width;
    margin: 0 auto;
    justify-content: space-between;
    flex-wrap: wrap;

    &_item {
      min-width: 200px;
      padding: 1rem 0;
      margin: 0 auto;
      gap: 1rem;
      transition: ease-out 0.2s all;

      &_active {
        background-color: $dark-background-color;
        border-radius: 10px;

        p {
          color: $light-font-color !important;
        }
      }

      p {
        color: $main-font-color;
        width: fit-content;
        text-align: middle;
        margin: 0 auto;
        font-weight: 600;
        transition: ease-out 0.2s all;
      }
    }
  }
}

a.nuxt-link-active {
  font-weight: bold;
}
</style>
