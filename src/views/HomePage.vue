<template>
  <div class="HomePage">
    <home-page-hero></home-page-hero>
    <v-container>
      <home-page-description></home-page-description>
    </v-container>
    <home-page-projects></home-page-projects>
    <v-container>
      <home-page-testimonies></home-page-testimonies>
    </v-container>
    <home-page-skills></home-page-skills>
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

