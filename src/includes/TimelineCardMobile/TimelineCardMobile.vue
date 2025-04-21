<template>
  <div class="TimelineCardMobile" :class="{ active: item.actual }">
    <div class="TimelineCard-actual" v-if="item.actual">
      <h5>{{ $t("timeline.actualCompany") }}</h5>
    </div>
    <div class="TimelineCardMobile-title">
      <h3>{{ item.companyName }}</h3>
    </div>
    <div class="TimelineCardMobile-date">
      <h6 v-if="item.endDate">{{ $t("timeline.from") }} {{ item.startDate }} {{ $t("timeline.to") }} {{ item.endDate }}</h6>
      <h6 v-else>{{ $t("timeline.since") }} {{ item.startDate }}</h6>
    </div>
    <div class="TimelineCardMobile-description">
      <v-expansion-panels>
        <v-expansion-panel
            :title="$t('experiences.knowMore')"
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

