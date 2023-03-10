<template>
  <v-parallax
      height="500px"
      width="50%"
      src="https://img.freepik.com/premium-photo/always-state-wonder-awe_73899-12.jpg?w=1380"
  ></v-parallax>
</template>

<script>
export default {
  name: "Hero",
  props: {
    imageSrc: String
  }
}
</script>