<template>
  <div class="ProjectFull" v-if="loading === 0">
    <div class="ProjectFull-headerContainer">
      <v-container>
        <div class="ProjectFull-header">
          <h2 class="Title-underline">{{ project.data.attributes.title }} <span>{{
              project.data.attributes.projectDate
            }}</span></h2>
          <br>
          <div class="ProjectFull-description">
            <p>{{ project.data.attributes.description }}</p>
          </div>
        </div>

        <div class="ProjectFull-gallery">
          <project-gallery :gallery="project.data.attributes.galerie.data"></project-gallery>
          <div class="ProjectFull-linkContainer" v-if="project.data.attributes.link">
            <v-img class="ProjectFull-companyLogo" :src="'http://localhost:1337' + project.data.attributes.company.data.attributes.logo.data.attributes.url"></v-img>
            <a class="ProjectFull-link" :href="project.data.attributes.link" target="_blank">
              <button>Voir le site <font-awesome-icon class="ProjectFull-linkIcon" icon="fa-solid fa-chevron-right"/></button>
            </a>
          </div>
        </div>


      </v-container>
    </div>

    <div class="ProjectFull-technos">
      <project-full-techno :project-languages="project.data.attributes.languages.data"></project-full-techno>
    </div>

  </div>
</template>

<script>
import './ProjectFull.scss'
import {repositories} from "@/repositories";
import ProjectGallery from "@/components/Projects/ProjectGallery/ProjectGallery";
import ProjectFullTechno from "@/components/Projects/ProjectFullTechno/ProjectFullTechno";

export default {
  name: "ProjectFull",
  components: {
    ProjectFullTechno,
    ProjectGallery
  },

  props: {
    projectId: {
      type: Number,
    }
  },

  data() {
    return {
      loading: 0,
    }
  },

  apollo: {
    project: {
      query: repositories.projectRepository.GET_PROJECT_BY_ID,
      variables() {
        return {
          id: this.projectId,
        }
      },
      loadingKey: 'loading'
    },
  },
}
</script>