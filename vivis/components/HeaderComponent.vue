<template>
  <div class="header_wrapper">
    <img class="header_img" src="@/assets/images/big/Blowflower.jpg" alt="" />
    <div class="header_titel">Vivis Gallery</div>
  </div>
</template>

<style lang="scss">
.header {
  &_wrapper {
    width: 100vw;
    height: 100vh;
  }

  &_titel {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 6rem;
    color: $light-font-color;
  }

  &_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media only screen and (max-width: 400px) {
  .header {
    &_titel {
      font-size: 5rem;
    }
  }
}
@media only screen and (max-width: 300px) {
  .header {
    &_titel {
      font-size: 4rem;
    }
  }
}
// For whatever reason but whi knows ?
@media only screen and (max-width: 200px) {
  .header {
    &_titel {
      font-size: 3rem;
    }
  }
}
</style>
