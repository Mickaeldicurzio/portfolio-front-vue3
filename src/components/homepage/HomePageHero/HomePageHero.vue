<template>
  <div class="HomePageHero" v-if="loading > 0">
    loading...
  </div>
  <div class="HomePageHero" v-else>
    <!--    container text -->
    <div class="HomePageHero-container">
      <div class="HomePageHero-containerInner">
        <div class="HomePageHero-title">
          <h1>{{ homepageHero.data.attributes.hero.title }}</h1>
        </div>
        <br>
        <div class="HomePageHero-description">
          <h3>{{ homepageHero.data.attributes.hero.subtitle }}</h3>
        </div>
      </div>
    </div>

    <!--    backgrounds-->
    <div class="HomePage-background" :key="key"
         v-for="(index, key) in homepageHero.data.attributes.hero.background.data">
      <v-app>
        <v-parallax :src="'http://localhost:1337' + index.attributes.url" :scale="0.75"></v-parallax>
      </v-app>

    </div>
    <div class="HomePage-background2" :key="key"
         v-for="(index, key) in homepageHero.data.attributes.hero.background.data">
      <v-app>
        <v-parallax :src="'http://localhost:1337' + index.attributes.url" :scale="0.5"></v-parallax>
      </v-app>

    </div>
    <div class="HomePage-background3" :key="key"
         v-for="(index, key) in homepageHero.data.attributes.hero.background.data">
      <v-app>
        <v-parallax :src="'http://localhost:1337' + index.attributes.url" :scale="0.25"></v-parallax>
      </v-app>

    </div>
  </div>
</template>

<script>
import {repositories} from "@/repositories";
import './HomePageHero.scss'

export default {
  data() {
    return {
      homepageHero: {},
      loading: 0,
    }
  },

  apollo: {
    homepageHero: {
      query: repositories.homepageRepository.GET_HOMEPAGE_HERO,
      loadingKey: 'loading'
    },
  },
}
</script>
