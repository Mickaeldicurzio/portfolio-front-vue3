<template>
  <div class="HomePage">
    <home-page-hero></home-page-hero>
    <v-container>
    <home-page-description></home-page-description>
    </v-container>
  </div>
</template>

<script>

import HomePageHero from "@/components/homepage/HomePageHero/HomePageHero";
import HomePageDescription from "@/components/homepage/HomePageDescription/HomePageDescription";

export default {
  components: {
    HomePageDescription,
    HomePageHero
  },
}
</script>