<template>
  <div class="menu_wrapper">
    <NuxtLink :to="redirecter[0]" class="menu_item" @click="this.$router.push({ query: { shooting: names.S_1.route } })">{{ names.S_1.name }} </NuxtLink>
    <NuxtLink :to="redirecter[1]" class="menu_item" @click="this.$router.push({ query: { shooting: names.S_2.route } })">{{ names.S_2.name }} </NuxtLink>
    <NuxtLink :to="redirecter[2]" class="menu_item" @click="this.$router.push({ query: { shooting: names.S_3.route } })">{{ names.S_3.name }} </NuxtLink>
    <NuxtLink :to="redirecter[3]" class="menu_item" @click="this.$router.push({ query: { shooting: names.S_4.route } })">{{ names.S_4.name }} </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      redirecter: [],
      names: {},
    };
  },
  created() {
    const runtimeConfig = useRuntimeConfig();
    this.names = runtimeConfig.public;
    this.redirecter = [`/${this.names.S_1.route}`, `/${this.names.S_2.route}`];
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
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: $main-background-color;
    color: $main-font-color;
    padding: 10px 5px;
  }

  &_item {
    min-width: 200px;
    padding: 5px 0;
  }
}
</style>
