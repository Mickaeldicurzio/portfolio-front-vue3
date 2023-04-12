<template>
  <div class="TravelComponent">
    <h2 class="Title-underline rightAlign">{{travel.Place}}</h2>
  </div>
</template>

<script>
export default {
  name: "TravelComponent",
  props: {
    travel: Object
  }
}
</script>

<style scoped>

</style>