<template>
  <div class="HomePageProjects ColoredContainer ColoredContainer-left">

    <v-container>
      <h2 class="Title-underline whiteTitle">Projets auxquels j'ai participe </h2>
      <div class="HomePageProjects-devIcon">
        <v-img :src="devIcon"></v-img>
      </div>
      <div class="HomePageProjects-description">
        <p>Au travers de ma carrière, j'ai eu la chance de participé à de nombreux projets au sein de plusieurs entreprises. <br><br>
          Du client final au sein d'une start-up jusqu'aux grands comptes en plateau dans une ESI, chaque structure m’a permis de remettre en question mes process et ma façon de concevoir le code.
        </p>
      </div>


        <div class="HomePageProjects-carrousel" v-if="loading === 0">
        <projects-slider :projects="projectsCards"></projects-slider>
        </div>
        <div v-else>
          loading...
        </div>

    </v-container>
  </div>
</template>

<script>

import './homePageProjects.scss'
import ProjectsSlider from "@/components/Projects/ProjectsSlider/ProjectsSlider";
import devIcon from "@/assets/images/cigarette-white.svg";
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
