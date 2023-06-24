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
  created() { },
  mounted() { },
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: cf;
  font-display: swap;
  background-color: $dark-background-color;
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
  width: 0;
  height: 0;
  position: absolute;
}

::-webkit-scrollbar-track {
  background: #ffffff00;
}

::-webkit-scrollbar-thumb {
  background: #3f3f3f;
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: #303030;
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
