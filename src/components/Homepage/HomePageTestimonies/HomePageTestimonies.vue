<template>
  <div class="HomePageTestimonies">

    <v-container>
      <h2>{{ $t('home.testimonies.title')}}</h2>
      <div class="HomePageTestimonies-container" v-if="loading === 0">
        <div class="HomePageTestimonies-cards desktopOnly" v-for="(testimony, key) in testimonies"
             :key="key">
          <testimony-card :testimony="testimony"></testimony-card>
        </div>

        <carousel :items-to-show="1" :pagination="true">
          <slide class="HomePageTestimonies-cards phoneAndTabletOnly" v-for="(testimony, key) in testimonies"
                 :key="key"
                 style="width: 100%">
            <testimony-card :testimony="testimony"></testimony-card>
          </slide>

          <template #addons>
            <navigation class="phoneAndTabletOnly"/>
            <pagination class="phoneAndTabletOnly"/>
          </template>
        </carousel>
      </div>


      <div v-else>
        loading...
      </div>
    </v-container>
  </div>
</template>

<script>
import './HomePageTestimonies.scss'
import {repositories} from "@/repositories";
import TestimonyCard from "@/components/Testimonies/TestimonyCards/TestimonyCard";
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default {
  name: "HomePageTestimonies",

  components: {
    TestimonyCard,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

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