<template>
  <div>
    <HeaderComponent />
    <MenuComponent />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script lang="ts">
import { useMainStore } from "@/stores/mainStore";

export default {
  data() {
    return {
      store: useMainStore(),
    }
  },
  async created() {
    await this.store.fetchImages();
  },
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  font-family: "Raleway";
  font-display: swap;
  background-color: $dark-background-color;
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

p {
  margin: 0;
  font-size: 1.2rem;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
ul,
li {
  color: $light-font-color;
}

img {
  box-shadow: $image-shadow;
}

::-webkit-scrollbar {
  display: none;
}

//Animations
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(-200%);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
