<template>
  <div class="mainImage_wrapper boxShadow_bottom">
    <span class="mainImage_text">
      <h1 class="mainImage_text_header boxShadow_bottom">Vivis Gallery</h1>
      <h2 class="mainImage_text_sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos earum, sit cum tempore sint placeat animi, eius quas quaerat deleniti alias minus perferendis hic quibusdam autem facilis asperiores vitae.</h2>
    </span>
    <div class="mainImage_img mainImage_img_overlay">
      <img src="@/assets/images/big/Blowflower.jpg" alt="just a test image" loading="lazy" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mainImage {
  &_text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2rem;
    gap: 2rem;

    &_header {
      position: relative;
      text-align: center;
      font-size: 3rem;
      height: 6.5rem;
      width: auto;
      border-radius: $borderRadius;
      white-space: nowrap;
      overflow: hidden;
      z-index: 2;
      text-shadow: 0 0 15px #a3a3a367;

      &::after {
        content: "Vivis Gallery";
        position: absolute;
        top: 3rem;
        left: 0;
        width: 100%;
        color: $mainTextColorShadow;
        text-align: center;
        z-index: 1;
        opacity: 0.4;
        transform: scaleY(-1);
        filter: blur(4px);
      }
    }
    &_sub {
    }
  }

  &_wrapper {
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: auto;
  }

  &_img {
    position: relative;
    display: flex;
    overflow: hidden;
    max-width: 750px;
    min-width: 50%;
    height: 750px;

    &_overlay {
      img {
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0));
      }
    }
  }
}

@media only screen and (max-width: 750px) {
  .mainImage {
    &_wrapper {
      flex-direction: column;
    }

    &_text {
      padding: 1rem;

      &_header {
        white-space: normal;
      }
    }

    &_img {
      height: auto;

      &_overlay {
        img {
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0));
        }
      }
    }
  }
}
</style>
