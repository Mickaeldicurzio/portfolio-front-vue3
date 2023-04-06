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

<!--  DESCRIPTION-->
</div>
</template>

<script>
import GlobalHero from "@/components/GlobalHero/GlobalHero";
import aboutIcon from "@/assets/images/panda-red.svg";
import aboutImage from "@/assets/images/about.jpg";
import {repositories} from "@/repositories";


export default {
  name: "AboutMe",
  components: {
    GlobalHero,

  },
  data() {
    return {
      imgsArr: [],
      group: 0,   // request param
      loading: 0,
    };
  },

  apollo: {
    project: {
      query: repositories.projectRepository.GET_PROJECT_BY_ID,
      variables() {
        return {
          id: this.getProjectId,
        }
      },
      loadingKey: 'loading'
    },
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