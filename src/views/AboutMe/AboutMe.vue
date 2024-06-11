<template>
  <div class="AboutMe">
    <!-- HERO -->
    <div class="AboutMe-hero">
      <global-hero
          :image-src="aboutImage"
          :hero-title="$t('menuMessage.aboutMe.menuItem')"
          :left-image-src="aboutIcon"
          :text-color="'#fff'"
          reverse="true"
          :link-previous="'projects'"
          :link-text-previous="$t('menuMessage.projects.menuItem')"
      ></global-hero>
      <vue-masonry-gallery :imgs-arr="imgsArr"></vue-masonry-gallery>
    </div>

    <div class="AboutMe-description GlobalContainer">
      <about-me-description></about-me-description>
    </div>

    <div class="AboutMe-travels">
      <about-me-travels></about-me-travels>
    </div>

    <!--  DESCRIPTION-->
  </div>
</template>

<script>
import GlobalHero from "@/components/GlobalHero/GlobalHero";
import aboutIcon from "@/assets/images/panda-red.svg";
import aboutImage from "@/assets/images/about.jpg";
import AboutMeDescription from "@/components/AboutMe/AboutMeDescription/AboutMeDescription";
import AboutMeTravels from "@/components/AboutMe/AboutMeTravels/AboutMeTravels";

const metaKey = "aboutme"

export default {
  name: "AboutMe",
  components: {
    AboutMeDescription,
    AboutMeTravels,
    GlobalHero,

  },

  metaInfo() {
    return {
      title: metaKey,
      description: metaKey,
    }
  },

  setup() {
    return {
      aboutIcon,
      aboutImage,
    };
  },
}
</script>

<style scoped>

</style>