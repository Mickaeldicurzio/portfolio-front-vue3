<template>
  <div class="ExperiencesFull">
    <div class="ExperiencesHero">
        <global-hero
            image-src="https://img.freepik.com/premium-photo/always-state-wonder-awe_73899-12.jpg?w=1380"
            hero-title="Experiences"
            :left-image-src="Pandules"
        ></global-hero>
    </div>
  </div>
</template>

<script>

import Pandules from "@/assets/images/pendule.svg";

import GlobalHero from "@/components/GlobalHero/GlobalHero";

export default {
  name: "ExperiencesFull",
  components: {
    GlobalHero,
  },
  setup() {
    return {
      Pandules,
    };
  },
}
</script>