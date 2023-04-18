<template>
  <div class="HomePageProjectsSimple ColoredContainer ColoredContainer-left">

    <v-container>
      <h2 class="Title-underline whiteTitle">Projets auxquels j'ai participe </h2>
      <div class="HomePageProjectsSimple-devIcon tabletAndDesktopOnly">
        <v-img :src="devIcon"></v-img>
      </div>
      <div class="HomePageProjectsSimple-devIcon mobileOnly">
        <v-img :src="devIconMobile"></v-img>
      </div>
      <div class="HomePageProjectsSimple-description">
        <p>Au travers de ma carrière, j'ai eu la chance de participé à de nombreux projets au sein de plusieurs entreprises.<br><br>
          Du client final au sein d'une start-up jusqu'aux grands comptes en plateau dans une ESI, chaque structure m’a permis de remettre en question mes process et ma façon de concevoir le code.<br><br>
          ( Je ne peux malheureusement pas afficher ici tous les projets auxquels j'ai participé ici pour des raisons de confidentialité )
        </p>
      </div>


      <div class="HomePageProjectsSimple-logoContainer desktopOnly" v-if="loading === 0">
        <div class="HomePageProjectsSimple-logo" v-for="(logo, key) in projectsLogos.data" :key="key">
          <a :href="logo.attributes.link" target="_blank">
            <v-img :src="$variables.getStrapiBaseUrl() + logo.attributes.logo.data.attributes.url"
                   :alt="logo.attributes.title"></v-img>
          </a>
        </div>
      </div>
      <div class="HomePageProjectsSimple-logoContainer phoneAndTabletOnly" v-if="loading === 0">
        <Carousel :items-to-show="1" :pagination="true"  >
          <slide class="HomePageProjectsSimple-logo" v-for="(logo, key) in projectsLogos.data" :key="key" style="width: 100%">
            <a :href="logo.attributes.link" target="_blank">
              <v-img :src="$variables.getStrapiBaseUrl() + logo.attributes.logo.data.attributes.url"
                     :alt="logo.attributes.title"></v-img>
            </a>
          </slide>

          <template #addons>
            <navigation />
            <pagination class="WhitePagination" />
          </template>
        </Carousel>
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
import devIconMobile from "@/assets/images/cigarette.svg";
import {repositories} from "@/repositories";
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


export default {
  name: "HomePageProjectsSimple",
  setup() {
    return {
      devIcon,
      devIconMobile,
    };
  },

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
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
