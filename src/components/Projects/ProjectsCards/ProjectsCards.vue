<template>
  <!--  CARDS-->
  <project-card :project="project" @click="dialog = true"></project-card>

  <!--  DIALOG-->
  <v-dialog
      v-model="dialog"
      transition="dialog-top-transition"
      class="ProjectsCards-dialog"
      fullscreen
      :scrim="false"
  >

    <v-btn
        icon
        dark
        @click="dialog = false"
        class="ProjectsCards-dialogCloseButton"
    >
      <font-awesome-icon icon="fa-solid fa-xl fa-xmark" style="color: #d64045;"/>
    </v-btn>
    <project-full :project-id="project.id" :is-modal="true"></project-full>
  </v-dialog>

</template>

<script>

import './ProjectsCards.scss'
import ProjectFull from "@/views/Projects/ProjectFull/ProjectFull";
import ProjectCard from "@/includes/Projects/ProjectCard/ProjectCard";

export default {
  name: "ProjectsCards",
  components: {
    ProjectCard,
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