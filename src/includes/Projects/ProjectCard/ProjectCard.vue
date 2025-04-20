<template>

  <router-link :to="{ name: 'projectFull', params: { id: project.documentId }}"  class="ProjectCard">
      <div class="ProjectCard-illustration"
           v-bind:style="{ 'background-image': 'url(' + $variables.getStrapiBaseUrl() + project.galerie[0].url + ')' }">
      </div>
      <div class="ProjectCard-description">
        <p> {{ project.title }}</p>

        <div class="ProjectCard-companyLogo" v-if="project.company && project.company">
          <v-img v-if="project.company"
              :src="$variables.getStrapiBaseUrl() + project.company.logo.url"></v-img>
        </div>
      </div>

  </router-link>
</template>

<script>
import './ProjectCard.scss'

export default {
  name: "ProjectCard",
  props: {
    project: Object
  }
}
</script>

<style scoped>

</style>