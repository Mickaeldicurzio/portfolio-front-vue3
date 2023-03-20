<template>
  <div class="GlobalHero">
    <div class="GlobalHero-container" :class="reverse ? 'reverse': ''">
      <v-parallax
          class="GlobalHero-parallax"
          height="600px"
          :src="imageSrc"
      >
        <div class="GlobalHero-title" :style="{ color: textColor }">
          <div class="GlobalHero-titleContainer">
            <h1>{{ heroTitle }}</h1>
          </div>
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
    textColor: {
      type: String,
    },
    reverse: {
      type: Boolean,
      default: false
    },
    heroTitle: String,
    leftImageSrc: String
  }
}
</script>