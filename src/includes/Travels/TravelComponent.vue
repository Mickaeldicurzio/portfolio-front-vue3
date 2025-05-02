<template>
  <div class="TravelComponent">

    <div class="TravelComponent-description" :class="reverseTitle ? '' : 'reversed'">
      <h4>{{ travel.dateStart }} | {{ travel.dateEnd }}</h4>
      <h2 class="Title-underline" :class="reverseTitle ? 'rightAlign' : ''">{{ travel.Place }}</h2>
    </div>

    <travel-map :countryCode="travel.countryCode" :polarstepTrip="polarstepTrip"></travel-map>

    <div class="TravelComponent-masonry" v-if="travel.galery">
      <masonry-wall :items="travel.galery" :ssr-columns="4" :column-width="500" :gap="30">
        <template #default="{ item }">
          <div class="TravelComponent-masonryItem" @click="setImageAndOpenDialog(item.url)">
            <img :src="$variables.getStrapiBaseUrl() + item.url"/>
            <div class="TravelComponent-masonryItemLayer">
              <font-awesome-icon class="TravelComponent-masonryItemIcon" icon="fa-solid fa-magnifying-glass-plus"/>
            </div>
          </div>
        </template>
      </masonry-wall>
    </div>

    <!--  DIALOG-->
    <v-dialog
        v-model="dialog"
        class="TravelComponent-dialog"
        fullscreen
        :scrim="false"
        @click="dialog = false"
    >

      <v-btn
          icon
          dark
          @click="dialog = false"
          class="TravelComponent-dialogCloseButton"
      >
        <font-awesome-icon icon="fa-solid fa-xl fa-xmark" style="color: #d64045;"/>
      </v-btn>

      <div class="TravelComponent-dialogContainer">
          <v-img :src="$variables.getStrapiBaseUrl() + imageDialogSrc"></v-img>
      </div>
    </v-dialog>

  </div>
</template>

<script>

import './TravelComponent.scss'
import TravelMap from "@/includes/TravelMap/TravelMap";
import polarstepTrip from '/src/assets/polarstep/trip.json'

export default {
  name: "TravelComponent",

  components: {
    TravelMap
  },

  data() {
    return {
      reverseTitle: false,
      dialog: false,
      imageDialogSrc: "",
      polarstepTrip: polarstepTrip
    }
  },
  props: {
    travel: Object,
    travelKey: Number
  },

  mounted() {
    if (this.travelKey % 2 === 0) {
      this.reverseTitle = true
    }
  },

  methods: {
    setImageAndOpenDialog(imageUrl) {
      this.dialog = true
      this.imageDialogSrc = imageUrl
    }
  }
}
</script>

<style scoped>

</style>