<template>
<div class="AboutMe">
  <!-- HERO -->
  <div class="AboutMe-hero">
    <global-hero
        :image-src="aboutImage"
        hero-title="About Me"
        :left-image-src="aboutIcon"
        :text-color="'#fff'"
        reverse="true"
        linkText="Contact"
        :link="'contact'"
        :link-previous="'projects'"
        link-text-previous="Projects"
    ></global-hero>
    <vue-masonry-gallery :imgs-arr="imgsArr"></vue-masonry-gallery>
  </div>

  <div class="AboutMe-description">
    <about-me-description></about-me-description>
  </div>

<!--  DESCRIPTION-->
</div>
</template>

<script>
import GlobalHero from "@/components/GlobalHero/GlobalHero";
import aboutIcon from "@/assets/images/panda-red.svg";
import aboutImage from "@/assets/images/about.jpg";
import AboutMeDescription from "@/components/AboutMe/AboutMeDescription/AboutMeDescription";


export default {
  name: "AboutMe",
  components: {
    AboutMeDescription,
    GlobalHero,

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