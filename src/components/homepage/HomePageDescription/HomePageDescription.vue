<template>
  <div class="HomePageDescription" v-if="loading === 0">
    <div class="HomePageDescription-logo">
      <v-img :src="myLogoSrc"></v-img>
    </div>
    <div class="HomePageDescription-text">{{ homepageDescription.data.attributes.description }}</div>
    <br>
  </div>
  <div v-else>
    loading...
  </div>
</template>

<script>
import {repositories} from "@/repositories";
import myLogoSrc from "@/assets/whoami.svg";
import "./HomePageDescription.scss"

export default {
  setup() {
    return {
      myLogoSrc
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