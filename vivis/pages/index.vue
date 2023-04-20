<template>
  <ShootingOne v-if="query == names.S_1.route"></ShootingOne>
  <ShootingTwo v-if="query == names.S_2.route"></ShootingTwo>
</template>

<script>
export default {
  data() {
    return {
      names: {},
      query: "ShootingOne",
    };
  },
  watch: {
    $route() {
      this.query = this.$route.query.shooting;
      console.log(this.$route.query.shooting);
    },
  },
  created() {
    const runtimeConfig = useRuntimeConfig();
    this.names = runtimeConfig.public;
  },
};
</script>
