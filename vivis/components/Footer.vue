<template>
  <div class="footer">
    <a href="https://github.com/Chikseen/vivis">
      <img class="footer_logo" src="@/assets/logos/GithubLogo.svg" />
    </a>
    <a href="https://www.instagram.com/vivis_secrets/">
      <img class="footer_logo" src="@/assets/logos/InstagramLogo.svg" />
    </a>
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
  background-image: $footer-gradiant-black;

  &_logo {
    height: 2rem;
    width: auto;
  }
}
</style>
