import gql from "graphql-tag";

export const GET_LANGUAGES_BY_CATEGORY = (alias) => gql`query GetLanguagesByCategory($category: String!) {
  ${alias}: languages(filters: { categories: { eq: $category } }) {
      documentId
      name
      logo {
        url
      }
      categories
    }
}`