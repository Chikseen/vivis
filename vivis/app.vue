<template>
  <HeaderComponent />
  <MenuComponent />
  <NuxtPage />
  <Footer />
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: cf;
  background-color: $dark-background-color;
}
</style>
