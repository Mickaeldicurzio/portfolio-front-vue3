<template>
  <div class="HomePage">

    <!-- HERO -->
    <home-page-hero v-fade-in></home-page-hero>

    <!-- DESCRIPTION -->
    <v-container v-fade-in>
      <home-page-description></home-page-description>
    </v-container>

    <!-- PROJECT -->
    <home-page-projects-simple v-fade-in></home-page-projects-simple>

    <!-- TESTIMONIES -->
    <home-page-testimonies v-fade-in>></home-page-testimonies>

    <!-- SKILLS -->
    <home-page-skills v-fade-in></home-page-skills>

  </div>
</template>

<script>

import HomePageHero from "@/components/Homepage/HomePageHero/HomePageHero";
import HomePageDescription from "@/components/Homepage/HomePageDescription/HomePageDescription";
import HomePageTestimonies from "@/components/Homepage/HomePageTestimonies/HomePageTestimonies";
import HomePageSkills from "@/components/Homepage/HomePageSkills/HomePageSkills";
import HomePageProjectsSimple from "@/components/Homepage/HomePageProjectsSimple/HomePageProjectsSimple";

export default {
  components: {
    HomePageProjectsSimple,
    HomePageSkills,
    HomePageTestimonies,
    HomePageDescription,
    HomePageHero
  },
}
</script>

<style>
.fade-in {
  opacity: 0;
  transition: 0.5s all ease-out;
}
</style>