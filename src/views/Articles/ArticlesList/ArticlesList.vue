<template>
  <article>
    <div v-if="loading > 0">
      loading...
    </div>
    <div v-else-if="articlesList" v-for="(article, key) in articlesList.data" :key="key">
      <router-link :to="{ name: 'articleFull', params: { id: article.id }}">
        {{ article.attributes.title }}
      </router-link>
    </div>
  </article>
</template>

<script>

import {repositories} from "@/repositories";

export default {
  name: 'ArticlesList',

  data() {
    return {
      id: 1,
      loading: 0,
    }
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