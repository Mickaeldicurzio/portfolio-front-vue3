<template>
  <div class="Footer" v-fade-in>
    <div class="Footer-socials">
      <home-page-socials :is-footer="true"></home-page-socials>
    </div>
    <div class="Footer-contact">
      <h3 class="Title-underline whiteTitle">Contact</h3>
      <div class="Footer-contactContainer">
        <h4>Email : <a href="mailto:mickael.dicurzio@gmail.com">mickael.dicurzio@gmail.com</a></h4>
        <h4>Telephone : <a href="tel:+33629051745">+33629051745</a></h4>
      </div>

        <v-img :src="contactIcon" class="Footer-contactImage"></v-img>
    </div>
  </div>
</template>

<script>
import HomePageSocials from "@/includes/HomePage/HomePageSocials/HomePageSocials";
import './FooterComponent.scss'
import contactIcon from "@/assets/images/contact.svg";

export default {
  name: "FooterComponent",

  components: {
    HomePageSocials
  },

  setup() {
    return {
      contactIcon
    };
  },

}
</script>

<style scoped>

</style>