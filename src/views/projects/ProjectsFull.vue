<template>
  <div class="ProjectsFull">
    <!-- HERO -->
    <div class="ProjectsFull-hero">
      <global-hero
          :image-src="aboutImage"
          hero-title="Projects"
          :left-image-src="projectIcon"
          :text-color="'#fff'"
      ></global-hero>
    </div>

    <div class="ProjectsFull-container">

      <div class="ProjectsFull-filtersContainer">
        <div class="ProjectsFull-containerFilters">
          <h3>Companies</h3>

          <div class="ProjectsFull-containerFiltersInner">
            <div class="ProjectsFull-filtersCompany" v-for="(index, key) in companiesLogo" :key="key">
              <v-img :src="'http://localhost:1337' + index.url"></v-img>
            </div>
          </div>

          <h3>Languages</h3>
          <div class="ProjectsFull-containerFiltersInner">
            <div class="ProjectsFull-filtersLanguages" v-for="(index, key) in languagesLogo" :key="key">
              <v-img :src="'http://localhost:1337' + index.url"></v-img>
            </div>
          </div>
        </div>
      </div>

      <div class="ProjectsFull-projectContainer" v-if="loading === 0">
        <projects-cards :project="index" v-for="(index, key) in projects" :key="key"></projects-cards>
      </div>

    </div>
  </div>
</template>

<script>
import GlobalHero from "@/components/GlobalHero/GlobalHero";
import projectIcon from "@/assets/images/cigarette-red.svg";
import aboutImage from "@/assets/images/projects.jpg";
import ProjectsCards from "@/includes/Projects/ProjectsCards/ProjectsCards";
import {repositories} from "@/repositories";
import './ProjectsFull.scss'

export default {
  name: "ProjectsFull",
  components: {
    GlobalHero,
    ProjectsCards
  },

  data() {
    return {
      loading: 0,
      projects: [],
      companiesLogo: [],
      languagesLogo: []
    }
  },
  setup() {
    return {
      projectIcon,
      aboutImage
    };
  },

  apollo: {
    projectsCards: {
      query: repositories.projectRepository.GET_PROJECTS_CARDS,
      loadingKey: 'loading',
      result(data) {
        this.projects = data.data.projectsCards.data
        this.loading = 0
        this.getCompanies(this.projects)
        this.getLanguages(this.projects)
      }
    }
  },

  methods: {
    getCompanies(projects) {
      let allCompaniesLogo = []
      projects.forEach((index) => {
        allCompaniesLogo.push(
            {
              id: index.attributes.company.data.id,
              url: index.attributes.company.data.attributes.logo.data.attributes.url
            }
        )
      })
      this.companiesLogo = [...new Map(allCompaniesLogo.map((item) => [item["id"], item])).values()];
    },

    getLanguages(projects) {
      let allLanguagesLogo = []
      projects.forEach((project) => {
        project.attributes.languages.data.forEach((index) => {
          allLanguagesLogo.push(
              {
                id: index.id,
                name: index.attributes.name,
                url: index.attributes.logo.data.attributes.url
              }
          )
        })
      })

      console.log(allLanguagesLogo)
      this.languagesLogo = [...new Map(allLanguagesLogo.map((item) => [item["id"], item])).values()];
    }
  }
}
</script>

<style scoped>

</style>