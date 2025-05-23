<template>

  <metainfo>
    <template v-slot:title="{ content }">{{
        content ? `Mickaël DI CURZIO | ${$t('metas.title.project')} - ${content}` : `Mickaël DI CURZIO`
      }}
    </template>
    <template v-slot:description="{ content }">{{ content ? content : `Mickaël DI CURZIO` }}
    </template>
  </metainfo>

  <v-card>
    <div class="ProjectFull" v-if="loading === 0">
      <div class="ProjectFull-headerContainer">

        <v-container>

          <!--          LINK-->
          <div class="ProjectFull-linkList" v-if="!isModal">
            <router-link :to="{ name: 'projects'}" :class="'WhiteLink'">
              <font-awesome-icon class="ChevronIcon ChevronLeft" icon="fa-solid fa-chevron-left"/>
              {{ $t("projectFull.linkProjectList.title") }}
            </router-link>
          </div>

          <!--          HEADER-->
          <div class="ProjectFull-header">
            <h2 class="Title-underline whiteTitle">{{ project.title }} <span>{{
                project.projectDate
              }}</span></h2>
            <br>
            <div class="ProjectFull-description">
              <p v-html="project.description"></p>
            </div>
          </div>

          <!--          GALLERY -->
          <div class="ProjectFull-gallery">
            <project-gallery :gallery="project.galerie"></project-gallery>
            <div class="ProjectFull-linkContainer" v-if="project.link">
              <v-img class="ProjectFull-companyLogo"
                     :src="$variables.getStrapiBaseUrl() + project.company.logo.url"></v-img>
              <a class="ProjectFull-link" :href="project.link" target="_blank">
                <button>
                  {{ $t('projectFull.seeWebsite.title') }}
                  <font-awesome-icon class="ProjectFull-linkIcon" icon="fa-solid fa-chevron-right"/>
                </button>
              </a>
            </div>
          </div>


        </v-container>
      </div>

      <!--      TECHNOS-->
      <div class="ProjectFull-technos">
        <project-full-techno :project-languages="project.languages" :is-modal="isModal">

          <!--          NEXT PROJECT - slot    -->
          <template v-slot:nextProject v-if="!isModal">
            <projects-related :exclude-id="getProjectId"></projects-related>
          </template>
        </project-full-techno>

      </div>

    </div>
  </v-card>
</template>

<script>
import './ProjectFull.scss'
import {repositories} from "@/repositories";
import ProjectGallery from "@/components/Projects/ProjectGallery/ProjectGallery";
import ProjectFullTechno from "@/components/Projects/ProjectFullTechno/ProjectFullTechno";
import ProjectsRelated from "@/components/Projects/ProjectsRelated/ProjectsRelated";
import router from "@/router";


export default {
  name: "ProjectFull",

  metaInfo() {
      return {
        title: this.project?.title ?? "",
        description: this.project?.description ?? "",
      }

  },

  components: {
    ProjectsRelated,
    ProjectFullTechno,
    ProjectGallery,
  },

  props: {
    projectId: {
      type: String,
    },
    isModal: {
      type: Boolean,
      default: false,
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
          id: this.getProjectId,
        }
      },
      result(results) {
        if(!results.project) {
          router;
        }
      },
      loadingKey: 'loading',
    },

  },

  computed: {
    getProjectId() {
      return this.$route.params.id ? this.$route.params.id : this.projectId
    }
  },

}
</script>