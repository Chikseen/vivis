<template>
  <div class="imageSlider">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.imageSlider {
  position: relative;
  display: flex;
  width: auto;
  height: auto;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  overflow-y: hidden;
  overflow-x: auto;
  scroll-snap-type: y proximity;
}
</style>
