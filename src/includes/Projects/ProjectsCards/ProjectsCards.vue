<template>
  <div class="ProjectsCards">
    <div class="ProjectsCards-illustration" v-bind:style="{ 'background-image': 'url(http://localhost:1337' + project.attributes.galerie.data[0].attributes.url + ')' }">
      <v-scale-transition>
        <v-icon
            v-if="isSelected"
            color="white"
            size="48"
            icon="mdi-close-circle-outline"
        ></v-icon>
      </v-scale-transition>
    </div>
    <div class="ProjectsCards-description">
      <v-scale-transition>
        <p> {{ project.attributes.title }}</p>
      </v-scale-transition>
    </div>
  </div>
</template>

<script>

import './ProjectsCards.scss'

export default {
  name: "ProjectsCards",
  props: {
    project: Object
  }
}

</script>