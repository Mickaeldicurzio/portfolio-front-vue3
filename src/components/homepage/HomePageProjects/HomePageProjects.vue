<template>
  <div class="HomePageProjects">

    <v-container>
      <h2 class="Title-underline">Projets auxquels j'ai participé </h2>
      <div class="HomePageProjects-devIcon">
        <v-img :src="devIcon"></v-img>
      </div>
      <div class="HomePageProjects-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam consequatur dolore excepturi illo
          odio quo saepe? Esse incidunt ipsum magni minima molestias neque officiis quibusdam ratione reiciendis, sint
          sunt.</p>
      </div>

      <div class="HomePageProjects-projects">
        <div class="HomePageDescription" v-if="loading === 0">
        <projects-slider :projects="projectsCards"></projects-slider>
        </div>
        <div class="v-else">
          loading...
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>

import './homePageProjects.scss'
import ProjectsSlider from "@/includes/Projects/ProjectsSlider/ProjectsSlider";
import devIcon from "@/assets/images/developer.svg";
import {repositories} from "@/repositories";


export default {
  name: "HomePageProjects",
  setup() {
    return {
      devIcon,
    };
  },

  data() {
    return {
      loading: 0,
    }
  },

  components: {
    ProjectsSlider
  },

  apollo: {
    projectsCards: {
      query: repositories.projectRepository.GET_PROJECTS_CARDS,
      loadingKey: 'loading',
    }
  },
}
</script>
