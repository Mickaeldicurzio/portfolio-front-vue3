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
          <h1>{{ homepageHero.hero.title }}</h1>
        </div>
        <br>
        <div class="HomePageHero-description">
          <h3>{{ homepageHero.hero.subtitle }}</h3>
        </div>
        <div class="HomePageHero-actualCompany">
          <h5>{{ $t('home.actualCompany') }} : </h5>
          <a :href="companies[0].link" target="_blank">
            <div v-if="companies.length > 0" class="HomePageHero-actualCompanyIcon"
               :style="{backgroundImage: 'url(' + $variables.getStrapiBaseUrl() + companies[0].logo.url + ')' }"></div>
          </a>
      </div>
    </div>
    </div>

    <!--  backgrounds-->
    <home-page-background :images="homepageHero.hero.background"></home-page-background>
  </div>
</template>

<script>
import {repositories} from "@/repositories";
import './HomePageHero.scss'
import HomePageBackground from "@/includes/HomePage/HomePageBackground/HomePageBackground";
import HomePageSocials from "@/includes/HomePage/HomePageSocials/HomePageSocials";

export default {
  components: {HomePageSocials, HomePageBackground},
  data() {
    return {
      homepageHero: {},
      companies: {},
      loading: 0,
    }
  },

  apollo: {
    homepageHero: {
      query: repositories.homepageRepository.GET_HOMEPAGE_HERO,
      loadingKey: 'loading'
    },
    companies: {
      query: repositories.companiesRepository.GET_ACTUAL_COMPANIES,
      loadingKey: 'loading',
      variables() {
        return {
          actual: true,
        }
      },
    },
  },
}
</script>
