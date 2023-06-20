<template>
  <Transition name="fade" mode="out-in">
    <czfotografie v-if="query == names.S_1.route" key="1"></czfotografie>
    <betoblitz v-else-if="query == names.S_2.route" key="2"></betoblitz>
    <blickwinkel v-else-if="query == names.S_3.route" key="3"></blickwinkel>
    <ulfleuteritz v-else-if="query == names.S_4.route" key="4"></ulfleuteritz>
    <der_kraft v-else-if="query == names.S_5.route" key="5"></der_kraft>
    <kontrastreich20 v-else-if="query == names.S_6.route" key="6"></kontrastreich20>
    <chris_del_trip v-else-if="query == names.S_7.route" key="7"></chris_del_trip>
    <manuel_r_portraits v-else-if="query == names.S_8.route" key="8"></manuel_r_portraits>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      names: {},
      query: "czfotografie",
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
  mounted() {
    this.query = this.$route.query.shooting;
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
