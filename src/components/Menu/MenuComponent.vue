<template>

  <div class="Menu" :class="menuDisplay ? 'display': ''">

    <div class="Menu-ItemContainer">
      <div class="Menu-Item">
        <div class="Menu-ItemImagesLayer">
          <v-img :src="skullight" class="Menu-ItemImages"></v-img>
        </div>
        <router-link :to="{ name: 'home' }">HomePage</router-link>
      </div>
    </div>

    <div class="Menu-ItemContainer">
      <div class="Menu-Item">
        <div class="Menu-ItemImagesLayer">
          <v-img :src="pandules" class="Menu-ItemImages"></v-img>
        </div>
        <router-link :to="{ name: 'experiences' }">Experiences</router-link>
      </div>
    </div>

    <div class="Menu-ItemContainer">
      <div class="Menu-Item">
        <div class="Menu-ItemImagesLayer">
          <v-img :src="woodkid" class="Menu-ItemImages"></v-img>
        </div>
        <router-link to="/article">About Me</router-link>
      </div>
    </div>

  </div>

</template>

<script>
import './MenuComponent.scss'
import {CLOSE_MENU, OPEN_MENU} from "@/constants/event-constants";
import skullight from "@/assets/images/skullight-transparent.png";
import woodkid from "@/assets/images/woodkid-transparent.png";
import pandules from "@/assets/images/pendule.svg";

export default {
  name: 'MenuComponent',
  data() {
    return {
      menuDisplay: false
    }
  },

  setup() {
    return {
      woodkid,
      pandules,
      skullight
    };
  },

  mounted() {
    this.emitter.on(OPEN_MENU, () => this.menuDisplay = true);
    this.emitter.on(CLOSE_MENU, () => this.menuDisplay = false);
  }
}
</script>

