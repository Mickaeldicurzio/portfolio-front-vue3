<template>
  <div class="ProjectsSlider">
    <v-sheet
        class="mx-auto"
        elevation="8"
        max-width="1200"
    >
      <v-slide-group
          v-model="model"
          class="pa-4"
          center-active
          show-arrows
      >

        <template v-slot:next>
          <v-icon color="orange" large>mdi-hand-pointing-right</v-icon>
        </template>
        <template v-slot:prev>
          <v-icon color="orange" large>mdi-hand-pointing-left</v-icon>
        </template>

        <v-slide-group-item
            v-for="n in projects.data"
            :key="n"
        >
          <projects-cards :project="n"></projects-cards>

        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import ProjectsCards from "@/includes/Projects/ProjectsCards/ProjectsCards";
import './ProjectsSlider.scss'
export default {
  name: "ProjectsSlider",
  components: {ProjectsCards},
  props: {
    projects: Array
  }
}
</script>

<style scoped>

</style>