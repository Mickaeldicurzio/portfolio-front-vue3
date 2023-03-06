<template>
  <div class="HomePage">
    <home-page-hero></home-page-hero>
    <v-container>
      <home-page-description></home-page-description>
    </v-container>
    <home-page-projects></home-page-projects>
    <home-page-skills></home-page-skills>
  </div>
</template>

<script>

import HomePageHero from "@/components/homepage/HomePageHero/HomePageHero";
import HomePageDescription from "@/components/homepage/HomePageDescription/HomePageDescription";
import HomePageProjects from "@/components/homepage/HomePageProjects/HomePageProjects";
import HomePageSkills from "@/components/homepage/HomePageSkills/HomePageSkills";

export default {
  components: {
    HomePageSkills,
    HomePageProjects,
    HomePageDescription,
    HomePageHero
  },
}
</script>

