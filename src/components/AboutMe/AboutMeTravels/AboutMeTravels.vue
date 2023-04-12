<template>
  <v-container class="AboutMeTravels" v-if="loading === 0">

    <h2 class="Title-center">Mes Voyages</h2>


      <v-card class="AboutMeTravels-descriptionContainer">
        <div class="AboutMeTravels-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ea nihil odit quasi sint ullam, unde? Aliquam,
          aperiam deleniti dignissimos ea est explicabo fuga laboriosam nemo quidem quo vero voluptatum.
          <br>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ea nihil odit quasi sint ullam, unde? Aliquam,
          aperiam deleniti dignissimos ea est explicabo fuga laboriosam nemo quidem quo vero voluptatum.
        </div>
        <div class="AboutMeTravels-descriptionLogo">
          <v-img :src="travel"></v-img>
        </div>
      </v-card>

    <div v-for="(travel, key) in travels.data.attributes.Travel" :key="key">
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