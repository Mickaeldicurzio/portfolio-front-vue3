<template>
  <div class="HomePageTestimonies">
      <h2>Ils donnent leur avis</h2>

    <div class="HomePageTestimonies-container" v-if="loading === 0">
      <div class="HomePageTestimonies-cards" v-for="(testimony, key) in testimonies.data" :key="key">
        <testimony-card :testimony="testimony"></testimony-card>
      </div>
    </div>

  </div>
</template>

<script>
import './HomePageTestimonies.scss'
import {repositories} from "@/repositories";
import TestimonyCard from "@/components/Testimonies/TestimonyCards/TestimonyCard";

export default {
  name: "HomePageTestimonies",
  components: {TestimonyCard},
  data() {
    return {
      loading: 0,
    }
  },

  apollo: {
    testimonies: {
      query: repositories.testimoniesRepository.GET_TESTIMONIES,
      loadingKey: 'loading',
    },
  },
}
</script>