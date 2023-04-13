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

      <v-btn @click="scrollTop" ref="appButton" icon dark class="ScrollToTop-button">
        <font-awesome-icon icon="fa-solid fa-arrow-up" style="color: #d64045;"/>
      </v-btn>

    </v-app>
  </div>
</template>

<!-- SCRIPT-->
<script>

import '@/assets/styles/index.scss';
import 'vue3-carousel/dist/carousel.css'

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

  beforeMount() {
    window.removeEventListener("scroll", this.userScroll);
  },

  mounted() {
    this.getCurrentHomeState()
    this.emitter.on(OPEN_MENU, () => this.setHtmlStyle(true));
    this.emitter.on(CLOSE_MENU, () => this.setHtmlStyle(false));
    window.addEventListener("scroll", this.userScroll);
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
    },

    userScroll() {
      const appButton = this.$refs.appButton.$el
      if (window.scrollY > 0) {
        appButton.classList.add("showButton");
        console.log('scrolled');
      } else {
        appButton.classList.remove("showButton");
        console.log('top');
      }
    },

    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
}
</script>

<style scoped>

.ScrollToTop-button {
  position: fixed;
  bottom: 60px;
  right: 60px;
  z-index: 999999;
  opacity: 0;
}

.showButton {
  opacity: 1;
}

</style>