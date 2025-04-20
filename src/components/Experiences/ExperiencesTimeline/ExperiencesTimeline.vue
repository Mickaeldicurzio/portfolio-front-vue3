<template>
  <div class="ExperiencesTimeline" v-if="loading === 0">

    <v-timeline align="center" justify="center">

      <v-timeline-item
          v-for="(experienceItem, i) in getExperiences"
          class="desktopOnly"
          :key="i"
      >
        <template v-slot:icon>

          <div class="ExperiencesTimeline-icon"
               :style="{backgroundImage: 'url(' + $variables.getStrapiBaseUrl() + experienceItem.companyLogo + ')' }"></div>
        </template>

        <template v-slot:opposite >
          <span class="ExperiencesTimeline-opposite">{{ experienceItem.contractType }}</span>
        </template>

        <v-lazy
            :min-height="400"
            :options="{'threshold':0.5}"
            transition="fade-transition"
        >
          <div>
            <timeline-card :item="experienceItem"></timeline-card>
          </div>
        </v-lazy>

      </v-timeline-item>

    </v-timeline>

    <v-timeline
        density="compact"
        side="end"
        class="phoneAndTabletOnly"
    >

      <v-timeline-item
          v-for="(experienceItem, i) in getExperiences"
          width="100%"
          :key="i"
      >
        <template v-slot:icon>
          <div class="ExperiencesTimeline-icon"
               :style="{backgroundImage: 'url(' + $variables.getStrapiBaseUrl() + experienceItem.companyLogo + ')' }"></div>
        </template>

        <v-lazy
            :min-height="200"
            :options="{'threshold':0.5}"
            transition="fade-transition"
        >
          <div>
            <timeline-card-mobile :item="experienceItem"></timeline-card-mobile>
          </div>
        </v-lazy>

      </v-timeline-item>

    </v-timeline>

    <div class="ExperiencesTimeline-end" v-fade-in>
      <h3>What's next ?</h3>
    </div>
    <div class="ExperiencesTimeline-iconHand">
      <img :src="handIcon" alt="">
    </div>
  </div>
</template>

<script>

import './ExperiencesTimeline.scss'
import {repositories} from "@/repositories";
import TimelineCard from "@/includes/TimelineCard/TimelineCard";
import handIcon from "@/assets/images/Hands-Line-Art.svg";
import TimelineCardMobile from "@/includes/TimelineCardMobile/TimelineCardMobile";

export default {
  name: "ExperiencesTimeline",
  components: {
    TimelineCardMobile,
    TimelineCard
  },

  setup() {
    return {
      handIcon
    };
  },

  data: () => ({
    loading: 0,
  }),

  apollo: {
    companies: {
      query: repositories.companiesRepository.GET_COMPANIES,
      loadingKey: 'loading'
    },
  },

  computed: {
    getExperiences() {
      if (this.loading === 0) {

        let companies = this.companies
        let experiencesArray = []
        companies.forEach((el) => {
          el.experiences.forEach((experience) => {
            experiencesArray.push(
                {
                  companyLogo: el.logo.url,
                  companyName: el.name,
                  companyId: el.id,
                  startDate: experience.startDate,
                  endDate: experience.endDate,
                  contractType: experience.contractType,
                  post: experience.post,
                  description: experience.description
                }
            )
          })
        })

        return experiencesArray.sort(function (a, b) {
          var c = new Date(a.startDate);
          var d = new Date(b.startDate);
          return d - c;
        });
      }

      return []
    }
  }
}
</script>