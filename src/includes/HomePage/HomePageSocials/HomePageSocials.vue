<template>
  <div class="HomePageSocials">
    <a class="HomePageSocials-link" href="https://www.linkedin.com/in/micka%C3%ABl-di-curzio-92997a131/" target="_blank">
      <font-awesome-icon icon="fa-brands fa-linkedin" />
    </a>
    <a class="HomePageSocials-link" href="https://www.facebook.com/mickael.dicurzio" target="_blank">
      <font-awesome-icon icon="fa-brands fa-facebook" />
    </a>
    <a class="HomePageSocials-link" href="https://www.instagram.com/mickael.dicurzio/?hl=fr" target="_blank">
      <font-awesome-icon icon="fa-brands fa-instagram" />
    </a>

    <a class="HomePageSocials-link" href="https://github.com/Mickaeldicurzio" target="_blank">
      <font-awesome-icon icon="fa-brands fa-github" />
    </a>
    <a class="HomePageSocials-link" href="https://gitlab.com/mickaeldicurzio" target="_blank">
      <font-awesome-icon icon="fa-brands fa-gitlab" />
    </a>
    <a class="HomePageSocials-link" href="https://www.malt.fr/profile/mickaeldicurzio" target="_blank">
      <img :src="maltIconWhite" alt="" v-if="isFooter" class="OverrideMalt">
      <img :src="maltIcon" alt="" v-else>
    </a>
  </div>

</template>

<script>

import maltIcon from "@/assets/images/malt-svgrepo-com.svg";
import maltIconWhite from "@/assets/images/malt-icon-white.svg";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "HomePageSocials",

  components: {
    FontAwesomeIcon,
  },

  props: {
    isFooter: {
      type: Boolean,
      default: false
    }
  },

  setup() {
    return {
      maltIcon,
      maltIconWhite
    };
  },
}
</script>

<style lang="scss">
.HomePageSocials {
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.HomePageSocials-link {
  width: 100px;
  height: 100px;
  padding: 40px;
  opacity: 0.7;
  transition: opacity 0.25s ease-in-out;
  &:hover {
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
  }
}

.HomePageSocials-link img, .HomePageSocials-link svg  {
  width: 50px;
  height: 50px;
  color: #ffffff;
}

.HomePageSocials-link .OverrideMalt {
  width: 35px;
  height: 35px;
  left: 17px;
  top: 7px;
  position: relative;
}
</style>