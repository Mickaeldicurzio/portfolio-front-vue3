<template>
  <div class="App">
<!--  navbar-->
    <nav-bar></nav-bar>
<!--    body-->
    <div class="container">
      <router-view/>
    </div>
<!--    footer-->
    <footer>
      footer
    </footer>
  </div>

</template>

<!-- SCRIPT-->
<script>

import NavBar from "@/components/NavBar/NavBar";

export default {
  components: {NavBar}
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
