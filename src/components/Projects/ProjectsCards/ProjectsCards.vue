<template>
  <!--  CARDS-->
  <div class="ProjectsCards" @click="dialog = true">
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

  <!--  DIALOG-->
  <v-dialog
      v-model="dialog"
      transition="dialog-top-transition"
      class="ProjectsCards-dialog"
      fullscreen
      :scrim="false"
  >
    <v-card>
      <v-btn
          icon
          dark
          @click="dialog = false"
          class="ProjectsCards-dialogCloseButton"
      >
        <font-awesome-icon icon="fa-solid fa-xl fa-xmark" style="color: #d64045;"/>
      </v-btn>
      <project-full :project-id="project.id"></project-full>

    </v-card>
  </v-dialog>

</template>

<script>

import './ProjectsCards.scss'
import ProjectFull from "@/views/Projects/ProjectFull/ProjectFull";

export default {
  name: "ProjectsCards",
  components: {
    ProjectFull
  },

  props: {
    project: Object
  },
  data() {
    return {
      dialog: false
    }
  }
}

</script>