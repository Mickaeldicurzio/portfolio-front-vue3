<template>

  <div class="TestimonyCard">
    <div class="TestimonyCard-quotes">
      <v-img :src="quotesLogo"></v-img>
    </div>
    <div class="TestimonyCard-profileContainer">
      <div class="TestimonyCard-pictures">
        <v-img :src="$variables.getStrapiBaseUrl() + testimony.pictures.url"></v-img>
      </div>
      <div class="TestimonyCard-profileInfo">
        <div class="TestimonyCard-name">
          <bold>
            {{ testimony.name }}
          </bold>
        </div>
        <div class="TestimonyCard-profile">
        <span>
          {{ testimony.profile }}
        </span>
        </div>
        <div class="TestimonyCard-company" v-if="testimony.company">
          <v-img
              :src="$variables.getStrapiBaseUrl() + testimony.company.logo.url"></v-img>
        </div>
      </div>
    </div>
    <div class="TestimonyCard-content">
      <div class="TestimonyCard-testimony" v-html="testimony.testimony"></div>
    </div>
  </div>
</template>

<script>
import './TestimonyCard.scss'
import quotesLogo from "@/assets/images/quotes.png";

export default {
  name: "TestimoniesCards",
  setup() {
    return {
      quotesLogo
    };
  },
  props: {
    testimony: Object
  }
}
</script>