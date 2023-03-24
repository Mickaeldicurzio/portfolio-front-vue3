<template>
  <div class="ProjectGallery">
    <Carousel id="gallery" class="ProjectGallery-gallery" :items-to-show="1" :wrap-around="false"
              v-model="currentSlide">
      <Slide v-for="slide in gallery" :key="slide">
        <v-img class="ProjectGallery-galleryImage" :src="'http://localhost:1337' + slide.attributes.url"></v-img>
      </Slide>
    </Carousel>

    <Carousel
        id="thumbnails"
        class="ProjectGallery-thumbnails"
        :items-to-show="4"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
    >
      <Slide v-for="(slide, key) in gallery" :key="key">
        <div class="ProjectGallery-thumbnailsContainer"
             v-bind:style="{ 'background-image': 'url(http://localhost:1337' + slide.attributes.url + ')' }"
             @click="slideTo(key)">
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>

import {Carousel, Slide} from 'vue3-carousel'
import './ProjectGallery.scss'

export default {
  name: "ProjectGallery",
  props: {
    gallery: Array
  },
  components: {
    Carousel,
    Slide
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