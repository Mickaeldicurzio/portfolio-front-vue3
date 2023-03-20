<template>
  <div class="TimelineCard">
    <div class="TimelineCard-title">
      <h3>{{ item.companyName }}</h3>
    </div>
    <div class="TimelineCard-date">
      <h6>du {{ item.startDate }} au {{ item.endDate }}</h6>
    </div>
    <div class="TimelineCard-description">
      <p>{{ item.description }}</p>
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