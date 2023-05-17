<template>
  <div class="header_wrapper">
    <img class="header_img" src="@/assets/images/main/big/IMG_2687.jpg" alt="" />
    <div class="header_content">
      <div class="header_content_titel">
        <h1 class="header_content_titel_vivis">Vivis</h1>
        <h1 class="header_content_titel_gallery">Gallery</h1>
      </div>
      <div class="header_content_logos_wrapper">
        <p>Follow Me -></p>
        <a href="https://www.instagram.com/vivis_secrets/">
          <img class="header_content_logos_icon" src="@/assets/logos/InstagramLogo.svg" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  &_wrapper {
    position: relative;
    width: 100vw;
    height: 100vh;
  }

  &_img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &_content {
    position: relative;
    margin: 0 auto;
    width: calc(100% - 20px); /* Need a specific value to work */
    height: 100%;
    max-width: $max-content-width;

    &_titel {
      position: absolute;
      bottom: 10rem;
      left: 10px;
      width: calc(100% - 20px);
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: 2rem;
      margin: 0;
      font-size: 4rem;
      color: $light-font-color;

      &_vivis {
        animation: 1s ease-out 0s 1 slideInFromLeft;
      }
      &_gallery {
        animation: 1s ease-out 0s 1 slideInFromLeft;
      }
    }

    &_logos {
      &_wrapper {
        position: absolute;
        display: flex;
        bottom: 1rem;
        right: 1rem;
        animation: 1s ease-out 0s 1 slideInFromRight;

        p {
          color: $light-font-color;
          margin: auto 1rem;
        }
      }
      &_icon {
        width: 4rem;
      }
    }
  }
}

// Media Query
@media only screen and (max-width: 500px) {
  .header {
    &_content {
      &_titel {
        font-size: 3rem;
      }
    }
  }
}
@media only screen and (max-width: 400px) {
  .header {
    &_content {
      &_titel {
        font-size: 2rem;
      }
    }
  }
}
// For whatever reason but whi knows ?
@media only screen and (max-width: 200px) {
  .header {
    &_content {
      &_titel {
        font-size: 1rem;
      }
    }
  }
}
</style>
