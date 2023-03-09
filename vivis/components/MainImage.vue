<template>
  <div class="mainImage_wrapper">
    <h1 class="mainImage_text">This is our Dog Mischka</h1>
    <div class="mainImage_img mainImage_img_overlay">
      <img src="@/assets/Images/testImgs/Hund_Dig.jpg" alt="just a test image" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mainImage {
  &_text {
    color: whitesmoke;
    margin: auto;
    mix-blend-mode: difference;
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
    max-width: 500px;
    max-height: 500px;
    overflow: hidden;

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
      &_overlay {
        img {
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0));
        }
      }
    }
  }
}
</style>
