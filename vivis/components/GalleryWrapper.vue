<template>
  <div class="gallery_wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.gallery {
  &_wrapper {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    margin: 0 auto;
    gap: 2rem;
    padding: 2rem;
    min-height: calc(100vh - 7.5rem);

    img {
      min-width: 9rem;
      width: 100%;
      max-width: 40rem;
      object-fit: cover;
      border-radius: 10px;
      margin: 0 auto;
    }
  }
}

// Media Query
@media only screen and (max-width: 500px) {
  .gallery {
    &_wrapper {
      grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    }
  }
}
</style>
