<template>
  <div class="ProjectsList">
    <!-- HERO -->
    <div class="ProjectsList-hero">
      <global-hero
          :image-src="aboutImage"
          :hero-title="$t('menuMessage.projects.menuItem')"
          :left-image-src="projectIcon"
          :text-color="'#fff'"
          :link="'aboutMe'"
          :link-text="$t('menuMessage.aboutMe.menuItem')"
          :link-previous="'experiences'"
          :link-text-previous="$t('menuMessage.experiences.menuItem')"
      ></global-hero>
    </div>

    <div class="ProjectsList-container GlobalContainer">

      <!-- FILTERS-->
      <div class="ProjectsList-filtersContainer">

        <!-- FILTERS RESET -->
        <div class="ProjectsList-resetFilters" v-if="hasFilters" @click="resetFilters">
          Reset all
          <font-awesome-icon icon="fa-solid fa-circle-xmark" style="color: #d64045;"/>
        </div>


        <!-- FILTERS COMPANIES -->
        <div class="ProjectsList-containerFilters">
          <h3>{{ $t('projectList.companies.title') }}</h3>

          <div class="ProjectsList-containerFiltersInner">
            <div
                :class="this.selectedCompanies.includes(index.id) ? 'ProjectsList-filtersCompany filtered' : 'ProjectsList-filtersCompany' "
                @click="setSelectedCompanies(index.id)"
                v-for="(index, key) in companiesLogo" :key="key">
              <v-img :src="$variables.getStrapiBaseUrl() + index.url"></v-img>
              <div class="ProjectsList-filtersIcon" v-if="this.selectedCompanies.includes(index.id)">
                <font-awesome-icon icon="fa-solid fa-circle-xmark" style="color: #d64045;"/>
              </div>
            </div>
          </div>

          <!-- FILTERS LANGUAGES -->
          <h3>{{ $t('projectList.languages.title') }}</h3>
          <div class="ProjectsList-containerFiltersInner">
            <div
                :class="this.selectedLanguages.includes(index.id) ? 'ProjectsList-filtersLanguages filtered' : 'ProjectsList-filtersLanguages' "
                @click="setSelectedLanguages(index.id)"
                v-for="(index, key) in languagesLogo" :key="key">
              <v-img :src="$variables.getStrapiBaseUrl() + index.url"></v-img>
              <div class="ProjectsList-filtersIcon" v-if="this.selectedLanguages.includes(index.id)">
                <font-awesome-icon icon="fa-solid fa-circle-xmark" style="color: #d64045;"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PROJECTS-->
      <div class="ProjectsList-projectContainer" v-if="loading === 0">
        <project-card :project="index" v-for="(index, key) in projects" :key="key"></project-card>
      </div>

    </div>
  </div>
</template>

<script>
import GlobalHero from "@/components/GlobalHero/GlobalHero";
import projectIcon from "@/assets/images/cigarette-red.svg";
import aboutImage from "@/assets/images/projects.jpg";
import {repositories} from "@/repositories";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import './ProjectsList.scss'
import ProjectCard from "@/includes/Projects/ProjectCard/ProjectCard";

const metaKey = "projects"

export default {
  name: "ProjectsList",
  components: {
    ProjectCard,
    GlobalHero,
    FontAwesomeIcon
  },

  data() {
    return {
      loading: 0,
      projects: [],
      companiesLogo: [],
      languagesLogo: [],
      selectedCompanies: [],
      selectedLanguages: []
    }
  },

  metaInfo() {
    return {
      title: metaKey,
      description: metaKey,
    }
  },

  setup() {
    return {
      projectIcon,
      aboutImage
    };
  },

  computed: {
    hasFilters() {
      return this.selectedLanguages.length > 0 || this.selectedCompanies.length > 0
    }
  },

  apollo: {
    projectsCards: {
      query: repositories.projectRepository.GET_PROJECTS_CARDS,
      loadingKey: 'loading',
      variables() {
        return {
          selectedCompanies: this.selectedCompanies.length > 0 ? this.selectedCompanies : undefined,
          selectedLanguages: this.selectedLanguages.length > 0 ? this.selectedLanguages : undefined,
        }
      },
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
        if (index.attributes.company.data) {
          allCompaniesLogo.push(
              {
                id: index.attributes.company.data.id,
                url: index.attributes.company.data.attributes.logo.data.attributes.url
              }
          )
        }
      })
      this.companiesLogo = [...new Map(allCompaniesLogo.map((item) => [item["id"], item])).values()];
    },

    resetFilters() {
      this.selectedLanguages = []
      this.selectedCompanies = []
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

      this.languagesLogo = [...new Map(allLanguagesLogo.map((item) => [item["id"], item])).values()];
    },

    setSelectedCompanies(id) {
      if (!this.selectedCompanies.includes(id)) {
        this.selectedCompanies.push(id)
      } else {
        this.selectedCompanies.splice(this.selectedCompanies.indexOf(id), 1);
      }
    },
    setSelectedLanguages(id) {
      if (!this.selectedLanguages.includes(id)) {
        this.selectedLanguages.push(id)
      } else {
        this.selectedLanguages.splice(this.selectedLanguages.indexOf(id), 1);
      }
    }
  }
}
</script>