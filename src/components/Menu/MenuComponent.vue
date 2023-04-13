<template>

  <div class="Menu" :class="menuDisplay ? 'display': ''">

    <div class="Menu-ItemContainer">
      <div class="Menu-Item">
        <div class="Menu-ItemImagesLayer">
          <v-img :src="homeIcon" class="Menu-ItemImages"></v-img>
        </div>
        <router-link :to="{ name: 'home' }">HomePage</router-link>
      </div>
    </div>

    <div class="Menu-ItemContainer">
      <div class="Menu-Item">
        <div class="Menu-ItemImagesLayer">
          <v-img :src="expriencesIcon" class="Menu-ItemImages"></v-img>
        </div>
        <router-link :to="{ name: 'experiences' }">Experiences</router-link>
      </div>
    </div>


    <div class="Menu-ItemContainer">
      <div class="Menu-Item">
        <div class="Menu-ItemImagesLayer">
          <v-img :src="projectsIcon" class="Menu-ItemImages"></v-img>
        </div>
        <router-link :to="{ name: 'projects' }">Projects</router-link>
      </div>
    </div>

    <div class="Menu-ItemContainer">
      <div class="Menu-Item">
        <div class="Menu-ItemImagesLayer">
          <v-img :src="abouteMeIcon" class="Menu-ItemImages"></v-img>
        </div>
        <router-link :to="{ name: 'aboutMe' }">About me</router-link>
      </div>
    </div>


<!--    <div class="Menu-ItemContainer">-->
<!--      <div class="Menu-Item">-->
<!--        <div class="Menu-ItemImagesLayer">-->
<!--          <v-img :src="contactIcon" class="Menu-ItemImages"></v-img>-->
<!--        </div>-->
<!--        <router-link :to="{ name: 'contact' }">Contact</router-link>-->
<!--      </div>-->
<!--    </div>-->

  </div>

</template>

<script>
import './MenuComponent.scss'
import {CLOSE_MENU, OPEN_MENU} from "@/constants/event-constants";
import homeIcon from "@/assets/images/fire-red.svg";
import abouteMeIcon from "@/assets/images/panda-red.svg";
import expriencesIcon from "@/assets/images/anchor-red.svg";
import projectsIcon from "@/assets/images/cigarette-red.svg";
import contactIcon from "@/assets/images/contact-red.svg";

export default {
  name: 'MenuComponent',
  data() {
    return {
      menuDisplay: false
    }
  },

  setup() {
    return {
      abouteMeIcon,
      expriencesIcon,
      projectsIcon,
      homeIcon,
      contactIcon
    };
  },

  mounted() {
    this.emitter.on(OPEN_MENU, () => this.menuDisplay = true);
    this.emitter.on(CLOSE_MENU, () => this.menuDisplay = false);
  }
}
</script>

