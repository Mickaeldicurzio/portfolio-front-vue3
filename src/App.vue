<template>
  <div class="App">
    <v-app>
      <!--  navbar-->
      <nav-bar></nav-bar>
      <menu-component></menu-component>
      <!--  body-->


        <router-view/>

      <!--  footer-->
      <v-footer> footer</v-footer>
    </v-app>
  </div>
</template>

<!-- SCRIPT-->
<script>


import NavBar from "@/components/NavBar/NavBar";
import MenuComponent from "@/components/Menu/MenuComponent";
import '@/assets/styles/index.scss';
import {CLOSE_MENU, OPEN_MENU} from "@/constants/event-constants";

export default {

  components: {
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

<!--stylesheet-->
<style lang="scss">

html {
  scroll-behavior: smooth;
}

body {
  font-family: "LatoRegular";
  margin: 0 auto;
  font-size: 20px;
  color: #012A36 !important;
  background-color: aliceblue;
}

.v-application {
  color: inherit !important;
}


.container {
  margin-top: 80px;
}

</style>
