<template>
  <!--<NuxtPage />-->
  <MainImage />
  <ImageSlider>
    <ImageWrapper>
      <img src="@/assets/images/small/Hund_D2_2.png" alt="just a test image" loading="lazy" />
    </ImageWrapper>
    <ImageWrapper>
      <img src="@/assets/images/small/Hund_D4_5.png" alt="just a test image" loading="lazy" />
    </ImageWrapper>
    <ImageWrapper>
      <img src="@/assets/images/small/King_of_the_Hill.png" alt="just a test image" loading="lazy" />
    </ImageWrapper>
    <ImageWrapper>
      <img src="@/assets/images/small/Hund_Roof_Ball.png" alt="just a test image" loading="lazy" />
    </ImageWrapper>
  </ImageSlider>
  <Footer></Footer>
</template>

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
  width: 0.5rem;
  height: 0.5rem;
}
::-webkit-scrollbar-track {
  background: #00000000;
  border-radius: $borderRadius;
}
::-webkit-scrollbar-thumb {
  background: $mainAkzentColor_1;
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
  //background: linear-gradient(to right, $mainColor 10rem, #00000000 100%);
  //background-color: $mainColor;
  background-image: $mainColor;
}
</style>
