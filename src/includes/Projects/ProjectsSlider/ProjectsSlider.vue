<template>
  <div class="ProjectsSlider">
    <carousel :items-to-show="1.5" :pagination="false">
      <slide v-for="slide in projects.data" :key="slide">
        <projects-cards :project="slide"></projects-cards>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import ProjectsCards from "@/includes/Projects/ProjectsCards/ProjectsCards";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import './ProjectsSlider.scss'

export default {
  name: "ProjectsSlider",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    ProjectsCards
  },
  props: {
    projects: Array
  }
}
</script>

<style scoped>

</style>