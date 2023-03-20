<template>
  <div class="ExperiencesFull">

    <!-- HERO -->
    <div class="ExperiencesFull-hero">
      <global-hero
          hero-title="Experiences"
          :left-image-src="experiencesIcon"
          :image-src="experiencesImage"
          :text-color="'#fff'"
      ></global-hero>
    </div>

    <!-- CONTAINER -->
    <div class="ExperiencesFull-container">
      <v-container>
        <experiences-timeline></experiences-timeline>
      </v-container>
    </div>
  </div>
</template>

<script>

import experiencesIcon from "@/assets/images/anchor.svg";
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