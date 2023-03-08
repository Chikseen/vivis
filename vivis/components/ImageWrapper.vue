<template>
  <div class="imageWrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.imageWrapper {
  width: 150px;
  height: 150px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: $image-shadow;
}
</style>
