<template>
  <article>
    <div v-if="loading > 0">
      loading...
    </div>
    <div v-else>
      {{ article.data.attributes.title }}
    </div>
  </article>
</template>

<script>

import { repositories } from "@/repositories";

export default {
  name: 'ArticleFullPage',
  data() {
    return {
      loading: 0,
    }
  },

  apollo: {
    article: {
      query: repositories.articleRepository.GET_ARTICLE_BY_ID,
      variables () {
        return {
          id: this.$route.params.id,
        }
      },
      loadingKey: 'loading'
    },
  },
}

</script>