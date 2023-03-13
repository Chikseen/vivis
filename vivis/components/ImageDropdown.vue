<template>
  <div class="imageDropdown">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.imageDropdown {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(10px, max-content));
  height: auto;
  max-height: 15rem;
  min-width: 20rem;
  transition: all 0.5s;
  scroll-snap-align: start;

  &_header {
    margin: 0 auto 2rem auto;
    font-size: 2rem;
    text-decoration: none;
    color: $mainTextColor;
  }

  &:hover {
    grid-template-rows: repeat(auto-fit, minmax(10px, max-content));
    max-height: 50rem;
  }
}
</style>
