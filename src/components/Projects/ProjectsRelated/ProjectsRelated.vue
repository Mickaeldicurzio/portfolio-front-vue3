<template>
  <v-container v-if="loading === 0">
    <div class="ProjectsRelated" v-if="nextProjects && nextProjects.length > 0">
      <h2 class="Title-underline">{{ $t("projectFull.otherProject.title") }}</h2>
      <div class="ProjectsRelated-container">
        <project-card :project="nextProject" v-for="(nextProject, key) in nextProjects"
                      :key="key"></project-card>
      </div>
    </div>
  </v-container>

</template>

<script>
import './ProjectsRelated.scss'
import ProjectCard from "@/includes/Projects/ProjectCard/ProjectCard";
import {repositories} from "@/repositories";

export default {
  name: "ProjectsRelated",

  data() {
    return {
      loading: 0
    }
  },

  props: {
    excludeId: Number
  },

  components: {
    ProjectCard
  },
  apollo: {
    nextProjects: {
      query: repositories.projectRepository.GET_NEXT_PROJECT_WITH_EXCLUDE_ID,
      variables() {
        return {
          excludeId: this.excludeId,
        }
      },

      loadingKey: 'loading'
    },
  }
}
</script>

<style scoped>

</style>