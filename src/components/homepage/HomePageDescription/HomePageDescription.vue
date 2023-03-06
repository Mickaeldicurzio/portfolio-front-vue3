<template>
  <div class="HomePageDescription" v-if="loading === 0">
    <div class="HomePageDescription-logo">
      <v-img :src="whoAmiILogo"></v-img>
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
import whoAmiILogo from "@/assets/images/whoami.svg";
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