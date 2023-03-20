<template>
  <div class="ProjectsSlide">
    <div class="ProjectsSlide-illustration"
         v-bind:style="{ 'background-image': 'url(http://localhost:1337' + project.attributes.galerie.data[0].attributes.url + ')' }">
    </div>
    <div class="ProjectsSlide-description">
      <p> {{ project.attributes.title }}</p>
      <div class="ProjectsSlide-companyLogo">
        <v-img
            :src="'http://localhost:1337' + project.attributes.company.data.attributes.logo.data.attributes.url"></v-img>
      </div>
    </div>
  </div>
</template>

<script>

import './ProjectsSlide.scss'

export default {
  name: "ProjectsSlide",
  props: {
    project: Object
  }
}

</script>