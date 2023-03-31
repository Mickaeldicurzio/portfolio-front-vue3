<template>
  <div class="ProjectsSlide">
    <div class="ProjectsSlide-description">
      <p> {{ project.attributes.title }}</p>
      <div class="ProjectsSlide-companyLogo">
        <v-img
            :src="'http://localhost:1337' + project.attributes.company.data.attributes.logo.data.attributes.url"></v-img>
      </div>
    </div>
    <div class="ProjectsSlide-illustration"
         v-bind:style="{ 'background-image': 'url(http://localhost:1337' + project.attributes.galerie.data[0].attributes.url + ')' }">
    </div>

    <div class="ProjectsSlide-description">
      <router-link :class="'WhiteLink Underlined'" :to="{ name: 'projectFull', params: { id: project.id } }">En savoirs
        plus
        <font-awesome-icon icon="fa-solid fa-plus"/>
      </router-link>
      <a :href="project.attributes.link" target="_blank">
        <v-btn class="ProjectsSlide-button WhiteButton" v-if="project.attributes.link">Voir le site
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
  }
}

</script>