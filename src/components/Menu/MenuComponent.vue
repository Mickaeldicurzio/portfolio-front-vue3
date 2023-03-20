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
          <v-img :src="abouteMeIcon" class="Menu-ItemImages"></v-img>
        </div>
        <router-link :to="{ name: 'aboutMe' }">About me</router-link>
      </div>
    </div>

  </div>

</template>

<script>
import './MenuComponent.scss'
import {CLOSE_MENU, OPEN_MENU} from "@/constants/event-constants";
import homeIcon from "@/assets/images/fire.svg";
import abouteMeIcon from "@/assets/images/panda.svg";
import expriencesIcon from "@/assets/images/anchor.svg";

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
      homeIcon
    };
  },

  mounted() {
    this.emitter.on(OPEN_MENU, () => this.menuDisplay = true);
    this.emitter.on(CLOSE_MENU, () => this.menuDisplay = false);
  }
}
</script>

