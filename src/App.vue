<template>
  <div class="App">
    <v-app>
      <!--  navbar-->
      <nav-bar></nav-bar>

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

export default {
  components: {
    NavBar
  },
  computed: {
    isCurrentHome() {
      return this.$router.currentRoute._value.name === "home";
    }
  }
}
</script>

<!--stylesheet-->
<style>

body {
  margin: 0 auto;
}

.container {
  margin-top: 60px;
}
</style>
