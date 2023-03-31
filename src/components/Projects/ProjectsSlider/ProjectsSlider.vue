<template>
  <div class="ProjectsSlider">
    <carousel :items-to-show="1.5" :pagination="false"  >
      <slide v-for="slide in projects.data" :key="slide" >
        <projects-slide :project="slide"></projects-slide>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>

  </div>

</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import './ProjectsSlider.scss'
import ProjectsSlide from "@/includes/Projects/ProjectsSlide/ProjectsSlide";

export default {
  name: "ProjectsSlider",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    ProjectsSlide,
  },
  props: {
    projects: Array
  }
}
</script>

<style scoped>

</style>