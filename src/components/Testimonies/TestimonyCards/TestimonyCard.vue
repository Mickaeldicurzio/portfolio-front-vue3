<template>

  <div class="TestimonyCard">
    <div class="TestimonyCard-quotes">
      <v-img :src="quotesLogo"></v-img>
    </div>
    <div class="TestimonyCard-profileContainer">
      <div class="TestimonyCard-pictures">
        <v-img :src="'http://localhost:1337' + testimony.attributes.pictures.data.attributes.url"></v-img>
      </div>
      <div class="TestimonyCard-name">
        <bold>
          {{ testimony.attributes.name }}
        </bold>
      </div>
      <div class="TestimonyCard-profile">
        <span>
          {{ testimony.attributes.profile }}
        </span>
      </div>
      <div class="TestimonyCard-company">
        <v-img :src="'http://localhost:1337' + testimony.attributes.company.data.attributes.logo.data.attributes.url"></v-img>
      </div>
    </div>
    <div class="TestimonyCard-content">
      <div class="TestimonyCard-testimony" v-html="testimony.attributes.testimony"></div>
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