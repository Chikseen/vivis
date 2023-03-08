<template>
  <h1>Vivis Webside</h1>
  <!--<NuxtPage />-->
  <MainImage>
    <img src="@/assets/Images/TestImgs/Hund_Dig.jpg" alt="just a test image" />
  </MainImage>
  <ImageSlider>
    <ImageWrapper>
      <img src="@/assets/Images/TestImgs/Hund_D2_2.jpg" alt="just a test image" />
    </ImageWrapper>
    <ImageWrapper>
      <img src="@/assets/Images/TestImgs/Hund_D4_5.jpg" alt="just a test image" />
    </ImageWrapper>
    <ImageWrapper>
      <img src="@/assets/Images/TestImgs/King_of_the_Hill.jpg" alt="just a test image" />
    </ImageWrapper>
    <ImageWrapper>
      <img src="@/assets/Images/TestImgs/Hund_Roof_Ball.jpg" alt="just a test image" />
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
}
</style>
