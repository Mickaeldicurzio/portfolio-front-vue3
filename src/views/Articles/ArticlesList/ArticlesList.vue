<template>
  <div class="ArticlesList">

    <!-- HERO -->
    <div class="ArticlesList-hero">
      <global-hero
          :image-src="articlesImage"
          :hero-title="$t('menuMessage.articles.menuItem')"
          :left-image-src="articlesIcon"
          :text-color="'#fff'"
          :link="'aboutMe'"
          :link-text="$t('menuMessage.aboutMe.menuItem')"
          :link-previous="'projects'"
          :link-text-previous="$t('menuMessage.projects.menuItem')"
          :reverse="true"
      ></global-hero>
    </div>

    <div class="ContentList-container">
      <div v-if="loading > 0">
        loading...
      </div>
      <div v-else-if="articlesList" v-for="(article, key) in articlesList.data" :key="key">
        <router-link :to="{ name: 'articleFull', params: { id: article.id }}">
          {{ article.attributes.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import {repositories} from "@/repositories";
import GlobalHero from "@/components/GlobalHero/GlobalHero.vue";
import articlesIcon from "@/assets/images/art-design-red.svg";
import articlesImage from "@/assets/images/lago.jpg";

export default {
  name: 'ArticlesList',
  components: {GlobalHero},

  data() {
    return {
      id: 1,
      loading: 0,
    }
  },

  setup() {
    return {
      articlesIcon,
      articlesImage
    };
  },

  apollo: {
    articlesList: {
      query: repositories.articleRepository.GET_ARTICLES,
      variables() {
        return {
          id: this.id,
        }
      },
      loadingKey: 'loading'
    },
  },
}

</script>