<template>
  <div class="HomePageLanguages">
    <div class="HomePageLanguages-logos"
         v-for="(index, key) in languages"
         :key="key"
    >
      <v-img :src="$variables.getStrapiBaseUrl() + index.logo.url"></v-img>
    </div>
  </div>
</template>

<script>
import './HomePageLanguages.scss'

export default {
  name: "HomePageLanguages",
  props: ['languages']
}
</script>