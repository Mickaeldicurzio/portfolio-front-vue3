<template>
  <div class="HomePageDescription" v-if="loading === 0">
    <div class="HomePageDescription-logo">
      <v-img src="@/assets/whoami.svg"></v-img>

    </div>
    <div class="HomePageDescription-logo">{{ homepageDescription.data.attributes.description }}</div>
    <br>
  </div>
  <div v-else>
    loading...
  </div>
</template>

<script>
import {repositories} from "@/repositories";

export default {
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

<style>

.HomePageDescription {
  margin-top: 40px;
}
</style>