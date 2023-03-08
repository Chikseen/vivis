<template>
  <div class="mainImage_wrapper">
    <h1 class="mainImage_text">This is our Dog Mischka</h1>
    <div class="mainImage_img">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mainImage {
  &_text {
    color: whitesmoke;
    margin: auto;
  }

  &_wrapper {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: auto;
    background-color: $mainColor;
  }

  &_img {
    position: relative;
    width: 500px;
    height: 500px;
    overflow: hidden;

    &:after {
      content: "";
      position: absolute;
      top: -2rem;
      left: -2rem;
      width: calc(100% + 4rem);
      height: calc(100% + 4rem);
      background: linear-gradient(to right, $mainColor 2rem, #00000000 50%);
    }
  }
}
</style>
