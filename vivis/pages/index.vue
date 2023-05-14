<template>
  <Transition name="fade" mode="out-in">
    <ShootingOne v-if="query == names.S_1.route"></ShootingOne>
    <ShootingTwo v-else-if="query == names.S_2.route"></ShootingTwo>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
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
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
