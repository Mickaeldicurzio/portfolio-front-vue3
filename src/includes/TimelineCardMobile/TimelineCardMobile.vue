<template>
  <div class="TimelineCardMobile">
    <div class="TimelineCardMobile-title">
      <h3>{{ item.companyName }}</h3>
    </div>
    <div class="TimelineCardMobile-date">
      <h6>du {{ item.startDate }} au {{ item.endDate }}</h6>
    </div>
    <div class="TimelineCardMobile-description">
      <v-expansion-panels>
        <v-expansion-panel
            title="En savoirs plus"
            bg-color="transparent"
            ripple
        >
          <v-expansion-panel-text>
            <p v-html="item.description"></p>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import './TimelineCardMobile.scss'

export default {
  name: "TimelineCardMobile",
  props: {
    item: Object,
  }
}
</script>

