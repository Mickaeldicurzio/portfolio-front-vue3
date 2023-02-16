<template>
  <div class="HomePage">
    <home-page-hero></home-page-hero>
    <home-page-description></home-page-description>
  </div>
</template>

<script>

import HomePageHero from "@/components/homepage/HomePageHero";
import HomePageDescription from "@/components/homepage/HomePageDescription";

export default {
  components: {HomePageDescription, HomePageHero},

}
</script>