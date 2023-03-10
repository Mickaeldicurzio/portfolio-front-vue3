<template>
  <div class="GlobalHero">
    <div class="GlobalHero-container">
      <v-parallax
          class="GlobalHero-parallax"
          height="600px"
          src="https://img.freepik.com/premium-photo/always-state-wonder-awe_73899-12.jpg?w=1380"
      >
        <div class="GlobalHero-title">
          <h1>{{ heroTitle }}</h1>
        </div>
      </v-parallax>
      <div class="GlobalHero-left"
           :class="backgroundColor !== '#fff' ? 'blankFill' : ''"
           :style="{backgroundColor: backgroundColor}">
        <v-img :src="leftImageSrc" class="GlobalHero-leftImage"></v-img>
        <div class="GlobalHero-leftBefore" :style="{backgroundColor: backgroundColor}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './GlobalHero.scss'

export default {
  name: "GlobalHero",
  props: {
    imageSrc: String,
    backgroundColor: {
      type: String,
      default: "#fff"
    },
    heroTitle: String,
    leftImageSrc: String
  }
}
</script>