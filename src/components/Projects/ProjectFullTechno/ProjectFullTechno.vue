<template>
  <div class="ProjectFullTechno" @scroll="scrollRotate">
    <div class="ProjectFullTechno-title">
      <h2>Sous le capot</h2>

    </div>
    <v-img ref="gears" class="ProjectFullTechno-gearsImage" :src="gears"></v-img>
    <v-img ref="gearsAround" class="ProjectFullTechno-gearsImageAround" :src="gearsAround"></v-img>
    <v-container class="ProjectFullTechno-container">

      <div class="ProjectFullTechno-containerRow" v-for="(index, key) in formatedProjectLanguages" :key="key">
        <h3>{{ key === 'undefined' ? 'Autres' : key }}</h3>
        <div class="ProjectFullTechno-languageRow">
          <div class="ProjectFullTechno-languages" v-for="(language) in index" :key="language">
            <v-img class="ProjectFullTechno-languageImage"
                   :src="'http://localhost:1337' + language.languageObject.logoUrl"></v-img>
          </div>
        </div>
      </div>
    </v-container>


    <slot name="nextProject"></slot>
  </div>
</template>

<script>

import './ProjectFullTechno.scss'
import gears from '@/assets/images/gears.svg'
import gearsAround from '@/assets/images/gears-arround.svg'
import {groupArrayByKey} from "@/services/groupeArrayByKey";
import {listenStickyIsPinned} from "@/services/listenStickyIsPinned";

export default {
  name: "ProjectFullTechno",
  props: {
    projectLanguages: Object,
    isModal: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {
      gears,
      gearsAround
    }
  },

  mounted() {
    listenStickyIsPinned(".ProjectFullTechno-gearsImage")
    listenStickyIsPinned(".ProjectFullTechno-gearsImageAround")
    this.isModal ? this.listenScrollOnModal() : this.listenScroll()
  },

  computed: {
    formatedProjectLanguages() {
      let categoriesObject = []
      this.projectLanguages.forEach((language) => {
        let categoryName = language.attributes.category.data?.attributes.CategoryName
        let languageObject = {
          name: language.attributes.name,
          logoUrl: language.attributes.logo.data.attributes.url
        }
        categoriesObject.push({categoryName: categoryName, languageObject: languageObject})
      })

      return groupArrayByKey(categoriesObject, 'categoryName', {omitKey: true})
    }
  },

  methods: {

    listenScroll() {
      window.addEventListener('scroll',
          () => {
            if (document.querySelector('.sticky-element') < 1) {
              return
            }
            let sticky = document.querySelectorAll('.sticky-element')
            if (sticky.length < 1) {
              return
            }

            this.scrollRotate(window.scrollY, 20)
          })
    },

    listenScrollOnModal() {
      document.querySelector('.v-card').addEventListener('scroll', (e) => {
        let sticky = document.querySelectorAll('.sticky-element')
        if(sticky.length < 1) {return}
        this.scrollRotate(e.target.scrollTop, 20)
      })
    },
    scrollRotate(amount, devider) {
      console.log(amount, devider)
      this.$refs['gears'].$el.style.transform = "rotate(" + amount / devider + "deg)";
      this.$refs['gears'].$el.style.top = 200 + amount / (devider * 2) + "px";
      this.$refs['gearsAround'].$el.style.transform = "rotate(" + amount / (devider * 3) + "deg)";
      this.$refs['gearsAround'].$el.style.width = 400 + amount / (devider) + "px";
      this.$refs['gearsAround'].$el.style.height = 400 + amount / (devider) + "px";
    }
  }
}
</script>