<template>
  <div class="imageWrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.imageWrapper {
  min-width: 10rem;
  max-width: 15rem;
  min-height: 10rem;
  max-height: 15rem;
  border-radius: $borderRadius;
  overflow: hidden;
  box-shadow: $image-shadow;
  scroll-snap-align: start;
}
</style>
