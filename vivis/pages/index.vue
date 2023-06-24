<template>
  <div v-for="(categorie, index) in config.categories" :key="index">
    <div v-if="categorie.id == selectedCategorie">
      <component v-for="(route, index) in categorie.routes" :key="index" :is="route" class="shooting"></component>
    </div>
  </div>
  <!--
    
    <Transition name="fade" mode="out-in">
    </Transition>
-->
</template>

<script>
import betoblitz from "@/components/shootings/betoblitz.vue"
import blickwinkel from "@/components/shootings/blickwinkel.vue"
import chris_del_trip from "@/components/shootings/chris_del_trip.vue"
import czfotografie from "@/components/shootings/czfotografie.vue"
import der_kraft from "@/components/shootings/der_kraft.vue"
import kontrastreich20 from "@/components/shootings/kontrastreich20.vue"
import manuel_r_portraits from "@/components/shootings/manuel_r_portraits.vue"
import ulfleuteritz from "@/components/shootings/ulfleuteritz.vue"

export default {
  components: {
    betoblitz,
    blickwinkel,
    chris_del_trip,
    czfotografie,
    der_kraft,
    kontrastreich20,
    manuel_r_portraits,
    ulfleuteritz
  },
  data() {
    return {
      names: {},
      selectedCategorie: "TEST",
    };
  },
  watch: {
    $route() {
      this.selectedCategorie = this.$route.query.categorie;
    },
  },
  created() {
    const runtimeConfig = useRuntimeConfig();
    this.config = runtimeConfig.public;
  },
  mounted() {
    this.selectedCategorie = this.$route.query.categorie;
  },
};
</script>

<style lang="scss">
.shooting {
  overflow-x: scroll;
  overflow-y: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
