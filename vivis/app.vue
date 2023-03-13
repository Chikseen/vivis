<template>
  <MainImage />
  <ImageSlider>
    <ImageDropdown @click="this.$router.push({ query: { shooting: names.S_1 } })">
      <NuxtLink :to="redirecter[0]" class="imageDropdown_header">{{ names.S_1 }} </NuxtLink>
      <ImageWrapper>
        <img src="@/assets/images/small/Hund_D2_2.jpg" alt="just a test image" loading="lazy" />
      </ImageWrapper>
      <ImageWrapper>
        <img src="@/assets/images/small/Hund_D2_2.jpg" alt="just a test image" loading="lazy" />
      </ImageWrapper>
      <ImageWrapper>
        <img src="@/assets/images/small/Hund_D2_2.jpg" alt="just a test image" loading="lazy" />
      </ImageWrapper>
      <ImageWrapper>
        <img src="@/assets/images/small/Hund_D2_2.jpg" alt="just a test image" loading="lazy" />
      </ImageWrapper>
    </ImageDropdown>
    <ImageDropdown @click="this.$router.push({ query: { shooting: names.S_2 } })">
      <NuxtLink :to="redirecter[1]" class="imageDropdown_header">{{ names.S_2 }} </NuxtLink>
      <ImageWrapper>
        <img src="@/assets/images/small/Hund_D4_5.jpg" alt="just a test image" loading="lazy" />
      </ImageWrapper>
      <ImageWrapper>
        <img src="@/assets/images/small/Hund_D4_5.jpg" alt="just a test image" loading="lazy" />
      </ImageWrapper>
      <ImageWrapper>
        <img src="@/assets/images/small/Hund_D4_5.jpg" alt="just a test image" loading="lazy" />
      </ImageWrapper>
    </ImageDropdown>
    <ImageDropdown>
      <ImageWrapper>
        <img src="@/assets/images/small/King_of_the_Hill.jpg" alt="just a test image" loading="lazy" />
      </ImageWrapper>
      <ImageWrapper>
        <img src="@/assets/images/small/King_of_the_Hill.jpg" alt="just a test image" loading="lazy" />
      </ImageWrapper>
      <ImageWrapper>
        <img src="@/assets/images/small/King_of_the_Hill.jpg" alt="just a test image" loading="lazy" />
      </ImageWrapper>
      <ImageWrapper>
        <img src="@/assets/images/small/King_of_the_Hill.jpg" alt="just a test image" loading="lazy" />
      </ImageWrapper>
      <ImageWrapper>
        <img src="@/assets/images/small/King_of_the_Hill.jpg" alt="just a test image" loading="lazy" />
      </ImageWrapper>
    </ImageDropdown>
    <ImageDropdown>
      <ImageWrapper>
        <img src="@/assets/images/small/Hund_Roof_Ball.jpg" alt="just a test image" loading="lazy" />
      </ImageWrapper>
      <ImageWrapper>
        <img src="@/assets/images/small/Hund_Roof_Ball.jpg" alt="just a test image" loading="lazy" />
      </ImageWrapper>
    </ImageDropdown>
  </ImageSlider>
  <NuxtPage />
  <div style="height: 10rem"></div>
  <Footer></Footer>
</template>

<script>
export default {
  data() {
    return {
      redirecter: [],
      names: {},
    };
  },
  created() {
    const runtimeConfig = useRuntimeConfig();
    this.names = runtimeConfig.public;
    this.redirecter = [`/${this.names.S_1}`, `/${this.names.S_2}`];
  },
  mounted() {
    // It is set to redirect but if JS is enabeled it will deactivate this function
    this.redirecter = [];
  },
};
</script>

<style lang="scss">
body,
html {
  padding: 0;
  margin: 0;
}

body {
  height: 100vh;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

::-webkit-scrollbar {
  width: 0.25rem;
  height: 0.25rem;
}
::-webkit-scrollbar-track {
  background: #00000000;
  border-radius: $borderRadius;
}
::-webkit-scrollbar-thumb {
  background: $mainAkzentColor_0;
  border-radius: $borderRadius;
}
::-webkit-scrollbar-thumb:hover {
  background: $mainAkzentColor_2;
}

#__nuxt {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  //background: linear-gradient(to right, $mainColor 10rem, #00000000 100%);
  //background-color: $mainColor;
  background-image: $mainColor;
  color: $mainTextColor;
}
</style>
