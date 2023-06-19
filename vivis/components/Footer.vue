<template>
  <div class="footer">
    <a href="https://github.com/Chikseen/vivis" aria-label="Link to the page source code">
      <img class="footer_logo" src="@/assets/logos/GithubLogo.svg" alt="Instagram Logo"/>
    </a>
    <a href="https://www.instagram.com/vivis_secrets/" aria-label="Link to Instagramprofile of the model">
      <img class="footer_logo" src="@/assets/logos/InstagramLogo.svg" alt="Instagram Logo"/>
    </a>
    <nuxt-link to="DataPrivacy"> Datenschutz </nuxt-link>
    <nuxt-link to="Impressum"> Impressum </nuxt-link>
  </div>
</template>

<style lang="scss">
.footer {
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: $main-background-color;
  z-index: 10;

  &_logo {
    height: 2rem;
    width: auto;
  }

  a {
    color: $main-font-color;
  }
}
</style>
