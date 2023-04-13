<template>

  <v-app-bar app color="transparent" dark collapse>
    <v-app-bar-nav-icon v-if="!isMenuOpen" @click="openMenu">
      <font-awesome-icon icon="fa-solid fa-bars"/>
    </v-app-bar-nav-icon>
    <v-app-bar-nav-icon v-else @click="closeMenu">
      <font-awesome-icon icon="fa-solid fa-close"/>
    </v-app-bar-nav-icon>
    <v-app-bar-nav-icon>
      <router-link class="HomeLinkIcon" :to="{name: 'home'}">
        <font-awesome-icon icon="fa-solid fa-home"/>
      </router-link>
    </v-app-bar-nav-icon>
  </v-app-bar>


</template>

<!-- script -->
<script>


import {CLOSE_MENU, OPEN_MENU} from "@/constants/event-constants";

export default {
  name: 'NavBar',
  data: () => ({
    group: null,
    isMenuOpen: false
  }),

  watch: {
    $route() {
      this.isMenuOpen = false
      this.emitter.emit(CLOSE_MENU);
      window.scrollTo(0,0);
    }
  },

  methods: {
    openMenu() {
      this.isMenuOpen = true
      this.emitter.emit(OPEN_MENU);
    },
    closeMenu() {
      this.isMenuOpen = false
      this.emitter.emit(CLOSE_MENU);
    }
  }
}
</script>

<!-- stylesheet -->

<style>

.v-toolbar__content {
  background-color: aliceblue;
}
</style>