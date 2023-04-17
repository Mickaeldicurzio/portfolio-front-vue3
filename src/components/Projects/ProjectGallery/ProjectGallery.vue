<template>
  <div class="ProjectGallery">
    <Carousel id="gallery" class="ProjectGallery-gallery" :items-to-show="1" :wrap-around="false"
              v-model="currentSlide">
      <Slide v-for="slide in gallery" :key="slide">
        <v-img class="ProjectGallery-galleryImage" :src="$variables.getStrapiBaseUrl() + slide.attributes.url"></v-img>
      </Slide>

      <template #addons>
        <navigation />

      </template>
    </Carousel>

    <Carousel
        id="thumbnails"
        class="ProjectGallery-thumbnails desktopOnly"
        :items-to-show="4"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
    >
      <Slide v-for="(slide, key) in gallery" :key="key">
        <div class="ProjectGallery-thumbnailsContainer"
             v-bind:style="{ 'background-image': 'url(' + $variables.getStrapiBaseUrl()  + slide.attributes.url + ')' }"
             @click="slideTo(key)">
        </div>
      </Slide>

    </Carousel>
  </div>
</template>

<script>

import { Carousel, Slide, Navigation } from 'vue3-carousel'
import './ProjectGallery.scss'

export default {
  name: "ProjectGallery",
  props: {
    gallery: Array
  },
  components: {
    Carousel,
    Slide,
    Navigation
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
  },
}
</script>

<style scoped>

</style>