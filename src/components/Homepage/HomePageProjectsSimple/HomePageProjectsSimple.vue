<template>
  <div class="HomePageProjectsSimple ColoredContainer ColoredContainer-left">

    <v-container>
      <h2 class="Title-underline whiteTitle">{{ $t("home.projects.title") }} </h2>
      <div class="HomePageProjectsSimple-devIcon tabletAndDesktopOnly">
        <v-img :src="devIcon"></v-img>
      </div>
      <div class="HomePageProjectsSimple-devIcon mobileOnly">
        <v-img :src="devIconMobile"></v-img>
      </div>
      <div class="HomePageProjectsSimple-description">
        <p v-html="$t('home.projects.description')"></p>
      </div>


      <div class="HomePageProjectsSimple-logoContainer desktopOnly" v-if="loading === 0">
        <div class="HomePageProjectsSimple-logo" v-for="(logo, key) in projectsLogos" :key="key">
          <a :href="logo.link" target="_blank">
            <v-img :src="$variables.getStrapiBaseUrl() + logo.logo.url"
                   :alt="logo.title"></v-img>
          </a>
        </div>
      </div>
      <div class="HomePageProjectsSimple-logoContainer phoneAndTabletOnly" v-if="loading === 0">
        <Carousel :items-to-show="1" :pagination="true"  >
          <slide class="HomePageProjectsSimple-logo" v-for="(logo, key) in projectsLogos" :key="key" style="width: 100%">
            <a :href="logo.link" target="_blank">
              <v-img :src="$variables.getStrapiBaseUrl() + logo.logo.url"
                     :alt="logo.title"></v-img>
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
        <v-btn class="HomePageDescription-link"> {{ $t('home.projects.buttonList')}}
          <font-awesome-icon icon="fa-solid fa-chevron-right" class="ChevronRight"/>
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
