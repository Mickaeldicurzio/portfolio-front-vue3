<template>
  <v-container class="AboutMeDescription" v-if="loading === 0">
    <h2 class="Title-underline">{{aboutMeDescription.title}}</h2>

    <div class="AboutMeDescription-logo phoneAndTabletOnly">
      <v-img :src="whoamiLogo"></v-img>
    </div>

    <v-card class="AboutMeDescription-container">
      <div class="AboutMeDescription-logo desktopOnly">
        <v-img :src="whoamiLogo"></v-img>
      </div>
      <div class="AboutMeDescription-text" v-html="aboutMeDescription.description">
      </div>
    </v-card>

    <div class="AboutMeDescription-profilePicture">
      <v-parallax :src="$variables.getStrapiBaseUrl() + aboutMeDescription.profilePicture.url"></v-parallax>
    </div>

  </v-container>
</template>

<script>


import './AboutMeDescription.scss'
import whoamiLogo from "@/assets/images/whoami.svg";
import { repositories } from "@/repositories";

export default {
  name: "AboutMeDescription",

  setup() {
    return {
      whoamiLogo,
    }
  },

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
