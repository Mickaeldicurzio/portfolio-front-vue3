<template>
  <div class="HomePage">

    <!-- HERO -->
    <home-page-hero v-fade-in></home-page-hero>

    <!-- DESCRIPTION -->
    <v-container v-fade-in>
      <home-page-description></home-page-description>
    </v-container>

    <!-- PROJECT -->
      <home-page-projects  v-fade-in></home-page-projects>

    <!-- TESTIMONIES -->
    <v-container v-fade-in>
      <home-page-testimonies></home-page-testimonies>
    </v-container>

    <!-- SKILLS -->
    <home-page-skills v-fade-in></home-page-skills>

  </div>
</template>

<script>

import HomePageHero from "@/components/Homepage/HomePageHero/HomePageHero";
import HomePageDescription from "@/components/Homepage/HomePageDescription/HomePageDescription";
import HomePageTestimonies from "@/components/Homepage/HomePageTestimonies/HomePageTestimonies";
import HomePageProjects from "@/components/Homepage/HomePageProjects/HomePageProjects";
import HomePageSkills from "@/components/Homepage/HomePageSkills/HomePageSkills";

export default {
  components: {
    HomePageSkills,
    HomePageProjects,
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