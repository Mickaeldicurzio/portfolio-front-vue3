<template>
  <v-container class="AboutMeDescription" v-if="loading === 0">
    <h2 class="Title-underline">{{aboutMeDescription.data.attributes.title}}</h2>
    <v-card class="AboutMeDescription-container">
      <div class="AboutMeDescription-text" v-html="aboutMeDescription.data.attributes.description">
      </div>
    </v-card>
  </v-container>
</template>

<script>


import './AboutMeDescription.scss'
import { repositories } from "@/repositories";

export default {
  name: "AboutMeDescription",

  data() {
    return {
      imgsArr: [],
      group: 0,   // request param
      loading: 0,
    };
  },

  apollo: {
    aboutMeDescription: {
      query: repositories.aboutMeRepository.GET_ABOUT_ME_DESCRIPTION,
      loadingKey: 'loading'
    },
  },
}
</script>
