<template>
  <div class="ExperiencesFull">

    <!-- HERO -->
    <div class="ExperiencesFull-hero">
      <global-hero
          hero-title="Experiences"
          :left-image-src="experiencesIcon"
          :image-src="experiencesImage"
          :text-color="'#fff'"
          linkText="Projects"
          :link="'projects'"
          :link-previous="'home'"
          link-text-previous="Homepage"
          :reverse="true"
      ></global-hero>
    </div>

    <!-- CONTAINER -->
    <div class="ExperiencesFull-container GlobalContainer">
      <v-container>
        <experiences-timeline></experiences-timeline>
      </v-container>
    </div>
  </div>
</template>

<script>

import experiencesIcon from "@/assets/images/anchor-red.svg";
import experiencesImage from "@/assets/images/experiences.jpg";

import GlobalHero from "@/components/GlobalHero/GlobalHero";
import ExperiencesTimeline from "@/components/Experiences/ExperiencesTimeline/ExperiencesTimeline";

export default {
  name: "ExperiencesFull",
  components: {
    ExperiencesTimeline,
    GlobalHero,
  },
  setup() {
    return {
      experiencesIcon,
      experiencesImage
    };
  },
}
</script>