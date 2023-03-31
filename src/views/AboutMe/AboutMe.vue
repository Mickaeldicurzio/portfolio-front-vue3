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
  </div>
</div>
</template>

<script>
import GlobalHero from "@/components/GlobalHero/GlobalHero";
import aboutIcon from "@/assets/images/panda-red.svg";
import aboutImage from "@/assets/images/about.jpg";

export default {
  name: "AboutMe",
  components: {
    GlobalHero,

  },
  setup() {
    return {
      aboutIcon,
      aboutImage
    };
  },
}
</script>

<style scoped>

</style>