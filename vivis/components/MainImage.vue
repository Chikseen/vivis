<template>
  <div class="mainImage_wrapper">
    <span class="mainImage_text">
      <h1 class="mainImage_text_header">Vivis Gallery</h1>
      <h2 class="mainImage_text_sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos earum, sit cum tempore sint placeat animi, eius quas quaerat deleniti alias minus perferendis hic quibusdam autem facilis asperiores vitae.</h2>
    </span>
    <div class="mainImage_img mainImage_img_overlay">
      <img src="@/assets/images/big/Blowflower.png" alt="just a test image" loading="lazy" />
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
    color: $mainTextColor;

    &_header {
      text-align: center;
      font-size: 3rem;
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
    max-width: 600px;
    min-width: 50%;
    height: 600px;

    &_overlay {
      img {
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0));
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .mainImage {
    &_wrapper {
      flex-direction: column;
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
