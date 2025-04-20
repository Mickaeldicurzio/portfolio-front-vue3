<template>
  <div class="ProjectsSlide">
    <div class="ProjectsSlide-description">
      <p> {{ project.title }}</p>
      <div class="ProjectsSlide-companyLogo">
        <v-img
            :src="$variables.getStrapiBaseUrl() + project.company.logo.url"></v-img>
      </div>
    </div>
    <div class="ProjectsSlide-illustration"
         v-bind:style="{ 'background-image': 'url('  + $variables.getStrapiBaseUrl() + project.galerie[0].url + ')' }">
    </div>

    <div class="ProjectsSlide-description">
      <router-link :class="'WhiteLink Underlined'" :to="{ name: 'projectFull', params: { id: project.id } }">En savoirs
        plus
        <font-awesome-icon icon="fa-solid fa-plus"/>
      </router-link>
      <a :href="project.link" target="_blank">
        <v-btn class="ProjectsSlide-button WhiteButton" v-if="project.link">Voir le site
          <font-awesome-icon icon="fa-solid fa-chevron-right"/>
        </v-btn>
      </a>
    </div>

  </div>
</template>

<script>

import './ProjectsSlide.scss'

export default {
  name: "ProjectsSlide",
  props: {
    project: Object
  },

  mounted() {

  }
}

</script>