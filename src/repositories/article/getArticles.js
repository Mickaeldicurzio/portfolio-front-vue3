import gql from "graphql-tag";

export const GET_ARTICLES = gql`query GetArticles {
  articlesList: articles {
    documentId
    title
  }
}`