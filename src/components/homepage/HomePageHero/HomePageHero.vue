<template>
  <div class="HomePageHero" v-if="loading > 0">
    loading...
  </div>
  <div class="HomePageHero" v-else>
    <!--    container text -->
    <div class="HomePageHero-container">
      <div class="HomePageHero-containerInner HomePageHero-containerInnerLeft">
        <home-page-socials></home-page-socials>
      </div>
      <div class="HomePageHero-containerInner HomePageHero-containerInnerRight">
        <div class="HomePageHero-title">
          <h1>{{ homepageHero.data.attributes.hero.title }}</h1>
        </div>
        <br>
        <div class="HomePageHero-description">
          <h3>{{ homepageHero.data.attributes.hero.subtitle }}</h3>
        </div>
      </div>
    </div>

    <!--  backgrounds-->
    <home-page-background :images="homepageHero.data.attributes.hero.background.data"></home-page-background>
  </div>
</template>

<script>
import {repositories} from "@/repositories";
import './HomePageHero.scss'
import HomePageBackground from "@/includes/HomePageBackground/HomePageBackground";
import HomePageSocials from "@/includes/HomePageSocials/HomePageSocials";

export default {
  components: {HomePageSocials, HomePageBackground},
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
