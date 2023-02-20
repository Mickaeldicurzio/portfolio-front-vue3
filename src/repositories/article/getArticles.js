import gql from "graphql-tag";

export const GET_ARTICLES = gql`query {
  articlesList: articles {
    data {
      id
      attributes {
        title
      }
    }
  }
}`