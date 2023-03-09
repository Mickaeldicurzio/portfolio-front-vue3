<template>
  <div class="ProjectsCards">
    <div class="ProjectsCards-illustration"
         v-bind:style="{ 'background-image': 'url(http://localhost:1337' + project.attributes.galerie.data[0].attributes.url + ')' }">
    </div>
    <div class="ProjectsCards-description">
      <p> {{ project.attributes.title }}</p>
      <div class="ProjectsCards-companyLogo">
        <v-img
            :src="'http://localhost:1337' + project.attributes.company.data.attributes.logo.data.attributes.url"></v-img>
      </div>
    </div>
  </div>
</template>

<script>

import './ProjectsCards.scss'

export default {
  name: "ProjectsCards",
  props: {
    project: Object
  }
}

</script>