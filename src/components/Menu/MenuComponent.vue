<template>

  <div class="Menu" v-if="menuDisplay">

    <div class="Menu-ItemContainer">
      <div class="Menu-Images">
      </div>
      <div class="Menu-Item">
        <router-link to="/">HomePage</router-link>
      </div>
    </div>

    <div class="Menu-ItemContainer">
      <div class="Menu-Images">
      </div>
      <div class="Menu-Item">
        <router-link to="/article">Articles</router-link>
      </div>
    </div>

    <div class="Menu-ItemContainer">
      <div class="Menu-Images">
      </div>
      <div class="Menu-Item">
        <router-link to="/article">AboutMe</router-link>
      </div>
    </div>

  </div>

</template>

<script>
import {CLOSE_MENU, OPEN_MENU} from "@/constants/event-constants";

export default {
  name: 'MenuComponent',
  data() {
    return {
      menuDisplay: false
    }
  },

  mounted() {
    this.emitter.on(OPEN_MENU, () => this.menuDisplay = true);
    this.emitter.on(CLOSE_MENU, () => this.menuDisplay = false);
  }
}
</script>

<style>
.Menu {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1005;
  background-color: aliceblue;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.Menu-ItemContainer {
  display: flex;
  justify-content: center;
  align-items: center;

}

</style>
