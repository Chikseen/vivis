<template>
  <div class="staticImages">
    <slot>
    </slot>
  </div>
</template>

<style lang="scss">
.staticImages {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
  padding: 2rem;

  img {
    max-height: 200px;
    width: 100%;
    max-width: 20rem;
    border-radius: $borderRadius;
    box-shadow: $image-shadow;
  }
}
</style>
