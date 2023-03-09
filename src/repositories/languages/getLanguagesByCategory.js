import gql from "graphql-tag";

export const GET_LANGUAGES_BY_CATEGORY = (alias) => gql`query GetLanguagesByCategory($category: String!) {
  ${alias}: languages(filters: { categories: { eq: $category } }) {
    data {
      id
      attributes {
        name
        logo {
          data {
            attributes {
              url
            }
          }
        }
        categories
      }
    }
  }
}`