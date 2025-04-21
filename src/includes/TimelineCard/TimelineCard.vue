<template>
  <div class="TimelineCard" :class="{ active: item.actual }">
    <div class="TimelineCard-actual" v-if="item.actual">
      <h5>{{ $t("timeline.actualCompany") }}</h5>
    </div>
    <div class="TimelineCard-title">
      <h3>{{ item.companyName }}</h3>
    </div>
    <div class="TimelineCard-date">
      <h6 v-if="item.endDate">{{ $t("timeline.from") }} {{ item.startDate }} {{ $t("timeline.to") }} {{ item.endDate }}</h6>
      <h6 v-else>{{ $t("timeline.since") }} {{ item.startDate }}</h6>
    </div>
    <div class="TimelineCard-description">
      <p v-html="item.description"></p>
    </div>
  </div>
</template>

<script>
import './TimelineCard.scss'

export default {
  name: "TimelineCard",
  props: {
    item: Object,
  }
}
</script>

<style scoped>

</style>