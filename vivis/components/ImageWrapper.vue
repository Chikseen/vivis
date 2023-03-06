<template>
  <div class="imageWrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.imageWrapper {
  width: 150px;
  height: 150px;
  border-radius: 10px;
}

img {
  width: 100%;
  height: 100%;
  object-fit:cover;
}
</style>
