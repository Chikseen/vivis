<template>
  <S1 v-if="query == names.S_1">111</S1>
  <S2 v-if="query == names.S_2">222</S2>
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
      console.log("hi", this.$route.query.shooting);
      this.query = this.$route.query.shooting;
    },
  },
  created() {
    const runtimeConfig = useRuntimeConfig();
    this.names = runtimeConfig.public;
  },
};
</script>
