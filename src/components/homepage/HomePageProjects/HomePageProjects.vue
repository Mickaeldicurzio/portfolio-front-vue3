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
        <projects-slider></projects-slider>
      </div>
    </v-container>
  </div>
</template>

<script>

import './homePageProjects.scss'
import ProjectsSlider from "@/includes/Projects/ProjectsSlider/ProjectsSlider";
import devIcon from "@/assets/images/developer.svg";


export default {
  name: "HomePageProjects",
  setup() {
    return {
      devIcon,
    };
  },
  components: {
    ProjectsSlider
  }
}
</script>
