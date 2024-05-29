<template>
  <div class="HomePageCv" v-if="loading === 0" id="cv">
    <div class="HomePageCv-title">
      <h2>Mon CV</h2>
    </div>

    <div class="HomePageCv-fileContainer">
      <a :href="$variables.getStrapiBaseUrl() + documents.data.attributes.cv.data.attributes.url" target="_blank">
        <div class="HomePageCv-files">
          <font-awesome-icon icon="fa-solid fa-file-pdf"></font-awesome-icon>
        </div>
      </a>
    </div>

    <div class="HomePageDistinctions-title">
      <h2>Prix et distinctions</h2>
    </div>

    <div class="HomePageDistinctions-container">
      <div class="HomePageDistinctions-containerInner"
           v-for="(distinction, key) in documents.data.attributes.distinctions" :key="key">
        <div class="HomePageDistinctions-link">
          <a :href="distinction.link" target="_blank">{{ distinction.title }}</a>
        </div>
        <div class="HomePageDistinctions-separator">:</div>
        <div class="HomePageDistinctions-description">
          <p>{{ distinction.description }}</p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import './HomePageCv.scss'
import {repositories} from "@/repositories";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "HomePageCv",
  components: {FontAwesomeIcon},
  data() {
    return {
      loading: 0
    }
  },
  apollo: {
    documents: {
      query: repositories.documentsRepository.GET_CV_AND_DISTINCTS,
      loadingKey: 'loading',
    },
  },

  updated() {
    this.$nextTick(function () {
      this.checkScroll()
    })
  },

  methods: {
    checkScroll() {
      if (this.$route.fullPath === "/#cv") {
        document.getElementById('cv').scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style scoped>

</style>