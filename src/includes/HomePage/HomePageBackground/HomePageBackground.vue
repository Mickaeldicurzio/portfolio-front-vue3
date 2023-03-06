<template>
  <div class="HomePageBackground" :key="key"
       v-for="(index, key) in images">
    <v-app>
      <v-parallax :src="'http://localhost:1337' + index.attributes.url" :scale="0.75"></v-parallax>
    </v-app>

  </div>
  <div class="HomePageBackground2" :key="key"
       v-for="(index, key) in images">
    <v-app>
      <v-parallax :src="'http://localhost:1337' + index.attributes.url" :scale="0.5"></v-parallax>
    </v-app>

  </div>
  <div class="HomePageBackground3" :key="key"
       v-for="(index, key) in images">
    <v-app>
      <v-parallax :src="'http://localhost:1337' + index.attributes.url" :scale="0.25"></v-parallax>
    </v-app>

  </div>
</template>

<script>

export default {
  props: {
    images: Array
  }
}

</script>


<style lang="scss">
.HomePageBackground2 {
  z-index: 3;
  transform: skew(30deg, 0deg);
  width: 100%;
  left: -60%;
  --v-theme-background: transparent;
}

.HomePageBackground2 .v-img {
  width: 100%;
  left: 55%;
  transform: skew(-30deg, 0deg);
}

.HomePageBackground3 {
  z-index: 2;
  transform: skew(-40deg, 0deg);
  width: 100%;
  right: -45%;
  --v-theme-background: transparent;

  @media (max-width: 720px) {
    right: -65%;
  }
}

.HomePageBackground3 .v-img {
  width: 100%;
  right: 40%;
  transform: skew(40deg, 0deg);
}

.HomePageBackground {
  z-index: 0;
  width: 100%;
}

.HomePageBackground, .HomePageBackground2, .HomePageBackground3 {
  position: absolute;
  height: 100%;
  top: 0;


}

.v-theme--light {
  --v-theme-background: transparent !important;
}

</style>