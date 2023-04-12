<template>
  <div class="HomePage">

    <!-- HERO -->
    <home-page-hero v-fade-in></home-page-hero>

    <!-- DESCRIPTION -->
    <v-container v-fade-in>
      <home-page-description></home-page-description>
    </v-container>

    <!-- PROJECT -->
    <div v-fade-in>
      <home-page-projects></home-page-projects>
    </div>

    <!-- TESTIMONIES -->
    <v-container v-fade-in>
      <home-page-testimonies></home-page-testimonies>
    </v-container>

    <!-- SKILLS -->
    <home-page-skills v-fade-in></home-page-skills>

  </div>
</template>

<script>

import {defineAsyncComponent} from 'vue'


export default {
  components: {
    HomePageSkills: defineAsyncComponent(() => import('@/components/Homepage/HomePageSkills/HomePageSkills')),
    HomePageProjects: defineAsyncComponent(() => import('@/components/Homepage/HomePageProjects/HomePageProjects')),
    HomePageTestimonies: defineAsyncComponent(() => import('@/components/Homepage/HomePageTestimonies/HomePageTestimonies')),
    HomePageDescription: defineAsyncComponent(() => import('@/components/Homepage/HomePageDescription/HomePageDescription')),
    HomePageHero: defineAsyncComponent(() => import('@/components/Homepage/HomePageHero/HomePageHero')),
  },
}
</script>

<style>


.fade-in {
  opacity: 0;
  transition: 0.5s all ease-out;
}
</style>