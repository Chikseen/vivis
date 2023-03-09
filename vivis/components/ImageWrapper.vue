<template>
  <div class="imageWrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.imageWrapper {
  min-width: 150px;
  min-height: 150px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: $image-shadow;
}
</style>
