<template>
  <v-container class="AboutMeTravels" v-if="loading === 0">

    <h2 class="Title-center">{{ $t("aboutMeMessage.travels.title") }}</h2>

    <div class="AboutMeTravels-descriptionLogo">
      <v-img :src="travel"></v-img>
    </div>

      <v-card class="AboutMeTravels-descriptionContainer">
        <div class="AboutMeTravels-description">
          {{ $t("aboutMeMessage.travels.description") }}
        </div>
        <div class="AboutMeTravels-descriptionLogo desktopOnly">
          <v-img :src="travel"></v-img>
        </div>
      </v-card>

    <div v-for="(travel, key) in travels.Travel" :key="key">
      <travel-component :travel="travel" :travel-key="key"></travel-component>
    </div>

  </v-container>
</template>

<script>

import './AboutMeTravels.scss'
import {repositories} from "@/repositories";
import travel from "@/assets/images/travel-red.svg";
import TravelComponent from "@/includes/Travels/TravelComponent";

export default {
  name: "AboutMeTravels",
  components: {TravelComponent},
  setup() {
    return {
      travel,
    }
  },


  data() {
    return {
      loading: 0,
    };
  },

  apollo: {
    travels: {
      query: repositories.aboutMeRepository.GET_ABOUT_ME_TRAVELS,
      loadingKey: 'loading'
    },
  },
}
</script>

<style scoped>

</style>