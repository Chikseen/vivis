<template>
  <div class="footer">
    <a href="https://github.com/Chikseen/vivis" aria-label="Link to the page source code">
      <GithubLogo class="footer_logo"/>
    </a>
    <a href="https://www.instagram.com/vivis_secrets/" aria-label="Link to Instagramprofile of the model">
      <InstagramIcon class="footer_logo"/>
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
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: $main-background-color;
  z-index: 10;

  &_logo {
    height: 3rem;
    width: auto;
  }

  a {
    color: $main-font-color;
  }
}
</style>
