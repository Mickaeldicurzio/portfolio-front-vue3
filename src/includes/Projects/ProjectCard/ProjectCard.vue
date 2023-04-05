<template>

  <router-link :to="{ name: 'projectFull', params: { id: project.id }}"  class="ProjectCard">
      <div class="ProjectCard-illustration"
           v-bind:style="{ 'background-image': 'url(http://localhost:1337' + project.attributes.galerie.data[0].attributes.url + ')' }">
      </div>
      <div class="ProjectCard-description">
        <p> {{ project.attributes.title }}</p>
        <div class="ProjectCard-companyLogo" v-if="project.attributes.company">
          <v-img
              :src="'http://localhost:1337' + project.attributes.company.data.attributes.logo.data.attributes.url"></v-img>
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