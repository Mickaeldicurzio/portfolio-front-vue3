<template>
  <div class="HomePageSkills" v-if="loading === 0">
    <v-container>
      <h2 class="HomePageSkills-title">Mes technos</h2>
      <div class="HomePageSkills-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos est facere harum natus. Accusantium aut,
        commodi inventore qui repellendus sunt voluptatem? Animi dignissimos ducimus error, natus pariatur vel vitae!
        Debitis!
      </div>
    </v-container>
    <div class="HomePageSkills-categories ColoredContainer"
         v-for="(index, key) in categories.data" :key="key"
         :class="key % 2 ?  'ColoredContainer-left' :  'ColoredContainer-right'"
         :style="{ backgroundColor: index.attributes.color.data.attributes.color }"
    >
      <v-container>
        <div class="Title-underline whiteTitle">
          <h3>{{ index.attributes.CategoryName }}</h3>
        </div>

        <div class="HomePageSkills-categoriesContainer">
            <home-page-languages :languages="index.attributes.languages.data"></home-page-languages>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>

import './HomePageSkills.scss'
import {repositories} from "@/repositories";
import  HomePageLanguages from "@/includes/HomePage/HomePageLanguages/HomePageLanguages"

export default {
  name: "HomePageSkills",
  components: {
    HomePageLanguages
  },


  data() {
    return {
      loading: 0,
    }
  },

  apollo: {
    categories: {
      query: repositories.categoriesRepository.GET_CATEGORIES,
      loadingKey: 'loading',
    },
  },
}
</script>

<style scoped>

</style>