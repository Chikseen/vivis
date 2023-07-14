<template>
  <div class="header_wrapper">
    <img class="header_img" src="@/assets/staticImages/main/IMG_2687.webp" alt="Main background of the webpage" />
    <div class="header_content">
      <div class="header_content_titel">
        <h1 class="header_content_titel_vivis">Vivis</h1>
        <h1 class="header_content_titel_gallery">Gallery</h1>
      </div>
      <div class="header_content_logos_wrapper">
        <p>Follow Me -></p>
        <a href="https://www.instagram.com/vivis_secrets/" aria-label="Link to the Photographer">
          <InstagramIcon />
        </a>
      </div>
      <div class="header_content_scrollhint">
        <p class="header_content_scrollhint_arrow">-></p>
        <p>See more</p>
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
    width: calc(100% - 20px);
    /* Need a specific value to work */
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
        right: 10%;
        height: 3rem;
        animation: 1s ease-out 0s 1 slideInFromRight;

        p {
          color: $light-font-color;
          margin: auto 1rem;
        }
      }
    }

    &_scrollhint {
      position: absolute;
      bottom: 1rem;
      left: 10%;
      display: flex;
      height: 3rem;
      gap: 1rem;

      &_arrow {
        color: $light-font-color;
        margin: auto 1rem;
        transform: rotateZ(90deg);
      }

      p {
        margin: auto;
      }
    }
  }
}

@media only screen and (min-width: 1200px) {
  .header {
    &_img {
      object-position: center -500px;
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
