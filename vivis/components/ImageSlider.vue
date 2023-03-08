<template>
  <div class="imageSlider">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.imageSlider {
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>
