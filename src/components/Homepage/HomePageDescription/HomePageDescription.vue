<template>
  <div class="HomePageDescription" v-if="loading === 0">
    <div class="HomePageDescription-logo">
      <v-img :src="whoAmiILogo"></v-img>
    </div>
    <div class="HomePageDescription-inner">
      <div class="HomePageDescription-text" v-html="homepageDescription.data.attributes.description"></div>
      <br>

      <router-link :to="{ name: 'aboutMe'}">
        <v-btn class="HomePageDescription-link RedButton">About Me
          <font-awesome-icon icon="fa-solid fa-chevron-right"/>
        </v-btn>
      </router-link>

    </div>
  </div>
  <div v-else>
    loading...
  </div>
</template>

<script>
import {repositories} from "@/repositories";
import whoAmiILogo from "@/assets/images/panda.svg";
import "./HomePageDescription.scss"

export default {
  setup() {
    return {
      whoAmiILogo
    };
  },
  data() {
    return {
      loading: 0,
    }
  },

  apollo: {
    homepageDescription: {
      query: repositories.homepageRepository.GET_HOMEPAGE_DESCRIPTION,
      loadingKey: 'loading',
    }
  },
}
</script>