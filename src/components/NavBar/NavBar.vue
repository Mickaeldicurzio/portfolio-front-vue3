<template>
    <v-app-bar app color="white">
      <v-toolbar-title shrink-on-scroll>Mickaël DI CURZIO</v-toolbar-title>
      <v-tabs align-with-title>
        <v-tab>
          <router-link to="/">Home</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/articles">Articles</router-link>
        </v-tab>
      </v-tabs>
    </v-app-bar>
</template>

<!-- script -->
<script>
export default {
  name: 'NavBar'
}
</script>

<!-- stylesheet -->

<style>


</style>