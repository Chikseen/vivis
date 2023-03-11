<template>
  <div class="imageWrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.imageWrapper {
  min-width: 80%;
  max-width: 80%;
  margin: 0 auto;
  height: 5rem;
  border-radius: $borderRadius;
  box-shadow: $image-shadow;
  overflow: hidden;
  transform: perspective(500px) rotateX(-40deg) translateZ(-100px) translateY(50px) scale(1.2);
  transition: all 0.5s;

  &:hover {
    transform: perspective(500px) rotateX(0) translateZ(0) translateY(0);
    z-index: 1;
    height: 15rem;
  }
}
</style>
