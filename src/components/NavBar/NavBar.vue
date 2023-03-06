<template>

  <v-app-bar app color="transparent" dark collapse>
    <v-app-bar-nav-icon v-if="!isMenuOpen" @click="openMenu">
      <font-awesome-icon icon="fa-solid fa-bars"/>
    </v-app-bar-nav-icon>
    <v-app-bar-nav-icon v-else @click="closeMenu">
      <font-awesome-icon icon="fa-solid fa-bars"/>
    </v-app-bar-nav-icon>
    <v-app-bar-title>Collapsing Bar</v-app-bar-title>
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

  watch:{
    $route (){
      this.isMenuOpen = false
      this.emitter.emit(CLOSE_MENU);
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