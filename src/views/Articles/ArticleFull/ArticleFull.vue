<template>
  <article>
    <div v-if="loading > 0">
      loading...
    </div>
    <div v-else>
      {{ article.title }}
    </div>
  </article>
</template>

<script>

import { repositories } from "@/repositories";

export default {
  name: 'ArticleFull',
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
    project: {
      query: repositories.projectRepository.GET_PROJECTS_SLIDES,
      loadingKey: 'loading'
    },
  },
}

</script>