<template>
  <div class="App">
    <v-app>
      <!--  navbar-->
      <nav-bar></nav-bar>
      <menu-component></menu-component>
      <!--  body-->

      <div :class="isCurrentHome ? 'homeContainer': 'container'">
        <router-view/>
      </div>
      <!--  footer-->
      <v-footer> footer</v-footer>
    </v-app>
  </div>
</template>

<!-- SCRIPT-->
<script>


import NavBar from "@/components/NavBar/NavBar";
import MenuComponent from "@/components/Menu/MenuComponent";
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
  },

  updated() {
    this.getCurrentHomeState()
  },

  methods: {
    getCurrentHomeState() {
      this.isCurrentHome = this.$router.currentRoute._value.path === "/";
    }
  }
}
</script>

<!--stylesheet-->
<style>

body {
  margin: 0 auto;
  font-size: 18px;
}

.container, .homeContainer {
  overflow: hidden;
}

.container {
  margin-top: 80px;
}

</style>
