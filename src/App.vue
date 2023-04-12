<template>
  <div class="App">
    <v-app>

      <!--  navbar-->
      <nav-bar></nav-bar>
      <menu-component></menu-component>

      <!--  body-->
      <router-view/>

      <!--  footer-->
      <footer-component></footer-component>

    </v-app>
  </div>
</template>

<!-- SCRIPT-->
<script>

import '@/assets/styles/index.scss';

import NavBar from "@/components/NavBar/NavBar";
import MenuComponent from "@/components/Menu/MenuComponent";
import {CLOSE_MENU, OPEN_MENU} from "@/constants/event-constants";
import FooterComponent from "@/components/Footer/FooterComponent";

export default {

  components: {
    FooterComponent,
    MenuComponent,
    NavBar
  },

  data() {
    return {
      isCurrentHome: true
    }
  },

  mounted() {
    this.getCurrentHomeState()
    this.emitter.on(OPEN_MENU, () => this.setHtmlStyle(true));
    this.emitter.on(CLOSE_MENU, () => this.setHtmlStyle(false));
  },

  updated() {
    this.getCurrentHomeState()
  },

  methods: {
    setHtmlStyle(isMenuOpen) {
      let el = document.getElementsByTagName('html')[0]
      isMenuOpen ? el.style.overflowY = "hidden" : el.style.overflowY = "unset"
    },

    getCurrentHomeState() {
      this.isCurrentHome = this.$router.currentRoute._value.path === "/";
    }
  }
}
</script>
