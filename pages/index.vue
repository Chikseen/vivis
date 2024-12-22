<template>
  <Fairytale />
</template>

<script lang="ts">
import Fairytale from "~/pages/categories/Fairytale.vue"

export default {
  components: {
    Fairytale
  }
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
