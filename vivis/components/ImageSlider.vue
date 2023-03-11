<template>
  <div class="imageSlider">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.imageSlider {
  position: relative;
  display: inline-flex;
  width: auto;
  height: auto;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
</style>
