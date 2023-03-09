<template>
  <h1 style="margin: auto; color: whitesmoke; mix-blend-mode: difference">Vivis Webside</h1>
  <!--<NuxtPage />-->
  <MainImage />
  <ImageSlider>
    <ImageWrapper>
      <img src="@/assets/Images/testImgs/Hund_D2_2.jpg" alt="just a test image" />
    </ImageWrapper>
    <ImageWrapper>
      <img src="@/assets/Images/testImgs/Hund_D4_5.jpg" alt="just a test image" />
    </ImageWrapper>
    <ImageWrapper>
      <img src="@/assets/Images/testImgs/King_of_the_Hill.jpg" alt="just a test image" />
    </ImageWrapper>
    <ImageWrapper>
      <img src="@/assets/Images/testImgs/Hund_Roof_Ball.jpg" alt="just a test image" />
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

#__nuxt {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //background: linear-gradient(to right, $mainColor 10rem, #00000000 100%);
  //background-color: $mainColor;
  background-image: $mainColor;
}
</style>
