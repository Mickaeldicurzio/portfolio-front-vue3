<template>
  <div class="HomePageProjectsSimple ColoredContainer ColoredContainer-left">

    <v-container>
      <h2 class="Title-underline whiteTitle">Projets auxquels j'ai participe </h2>
      <div class="HomePageProjectsSimple-devIcon">
        <v-img :src="devIcon"></v-img>
      </div>
      <div class="HomePageProjectsSimple-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam consequatur dolore excepturi illo
          odio quo saepe? Esse incidunt ipsum magni minima molestias neque officiis quibusdam ratione reiciendis, sint
          sunt.</p>
      </div>


      <div class="HomePageProjectsSimple-logoContainer" v-if="loading === 0">

        <div class="HomePageProjectsSimple-logo" v-for="(logo, key) in projectsLogos.data" :key="key">
          <a :href="logo.attributes.link" target="_blank">
            <v-img :src="$variables.getStrapiBaseUrl() + logo.attributes.logo.data.attributes.url"
                   :alt="logo.attributes.title"></v-img>
          </a>
        </div>
      </div>
      <div v-else>
        loading...
      </div>

      <router-link :to="{ name: 'projects'}">
        <v-btn class="HomePageDescription-link">Voir la liste des projets
          <font-awesome-icon icon="fa-solid fa-chevron-right"/>
        </v-btn>
      </router-link>

    </v-container>
  </div>
</template>

<script>

import './homePageProjectsSimple.scss'
import devIcon from "@/assets/images/cigarette-white.svg";
import {repositories} from "@/repositories";


export default {
  name: "HomePageProjectsSimple",
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

  apollo: {
    projectsLogos: {
      query: repositories.projectRepository.GET_PROJECTS_LOGOS,
      loadingKey: 'loading',
    }
  },
}
</script>
