<template>
  <div class="galleryTitle_wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.galleryTitle {
  &_wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 2rem;
    width: calc(100% - 4rem);
    max-width: $max-content-width;
    color: $light-font-color;
    animation: 1s ease-out slideInFromLeft;

    a h2 {
      color: $light-font-color;
      white-space: nowrap;
    }
  }

  &_header {
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 0.5rem;

    a {
      display: flex;
      gap: 1rem;

      img {
        height: 2rem;
        width: 2rem;
      }
    }
  }
}
</style>
