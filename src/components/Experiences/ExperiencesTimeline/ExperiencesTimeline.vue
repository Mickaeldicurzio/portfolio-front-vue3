<template>
  <div class="ExperiencesTimeline" v-if="loading === 0">

    <v-timeline align="center" justify="center">

      <v-timeline-item
          v-for="(experienceItem, i) in getExperiences"
          :key="i"
      >
        <template v-slot:icon>

          <div class="ExperiencesTimeline-icon"
               :style="{backgroundImage: 'url(' + $variables.getStrapiBaseUrl() + experienceItem.companyLogo + ')' }"></div>
        </template>

        <template v-slot:opposite>
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
    <div class="ExperiencesTimeline-end">
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

export default {
  name: "ExperiencesTimeline",
  components: {
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

        let companies = this.companies.data
        let experiencesArray = []
        companies.forEach((el) => {
          el.attributes.experiences.forEach((experience) => {
            console.log(el)
            experiencesArray.push(
                {
                  companyLogo: el.attributes.logo.data.attributes.url,
                  companyName: el.attributes.name,
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

        console.log(experiencesArray)

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