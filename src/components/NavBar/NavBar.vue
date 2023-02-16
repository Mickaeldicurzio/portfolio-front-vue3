<template>
  <nav class="NavBar">
    <router-link to="/">Home</router-link>
    |
  </nav>
</template>

<!-- script -->
<script>
export default {
  name: 'NavBar'
}
</script>

<!-- stylesheet -->

<style>

.NavBar {
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
}

</style>