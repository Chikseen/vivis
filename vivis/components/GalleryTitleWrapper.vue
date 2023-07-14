<template>
  <div class="galleryTitle_wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.galleryTitle {
  &_wrapper {
    position: sticky;
    top: 3rem;
    left: 0;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 2rem;
    width: calc(100% - 4rem);
    max-width: $max-content-width;
    color: $light-font-color;
    background: linear-gradient(90deg, #424242 0%, #414141c0 20%, #41414100 40%);
    animation: 0.75s ease-out slideInFromLeft;
    z-index: 5;

    a h2 {
      color: $light-font-color;
      white-space: nowrap;
    }

    &::after {
      content: "See more ->";
      position: absolute;
      bottom: 0;
      right: 10%;
    }
  }

  &_header {
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 0.5rem;

    h2 {
      margin: auto 0;
    }

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


@media only screen and (max-width: 500px) {
  .galleryTitle {
    &_wrapper {
      h2 {
        display: none;
      }

      a h2 {
        display: inline;
      }
    }
  }
}
</style>
