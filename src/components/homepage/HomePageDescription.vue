<template>
  <div class="HomePageDescription" v-if="loading === 0">
    <h2>Homepage description</h2>
    {{ homepageDescription.data.attributes.description }}
    <br>
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
  padding: 40px;
}
</style>