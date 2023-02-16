<template>
  <div class="HomePageHero" v-if="loading > 0">
    loading...
  </div>
  <div class="HomePageHero" v-else>
    <h1>Homepage Hero</h1>

    <div class="HomePageHero-title">
      {{ homepageHero.data.attributes.hero.title }}
    </div>

    <div class="HomePageHero-description">
      {{ homepageHero.data.attributes.hero.subtitle }}
    </div>

    <div class="HomePage-background" :key="key" v-for="(index, key) in homepageHero.data.attributes.hero.background.data">
      <img :src="'http://localhost:1337' + index.attributes.url">
    </div>
  </div>
</template>

<script>
import {repositories} from "@/repositories";

export default {
  data() {
    return {
      homepageHero: {},
      loading: 0,
      heroTitle: ""
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

<!--style-->

<style>

.HomePageHero {
  width: 100%;
  height: 100%;

}

.HomePage-background {
  width: 100%;
  height: 100%;
}
</style>