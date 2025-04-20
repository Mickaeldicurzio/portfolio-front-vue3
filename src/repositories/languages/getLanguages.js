import gql from "graphql-tag";

export const GET_LANGUAGES = gql`query GetLanguages {
  languages (sort: "name:asc") {
    documentId
      name
      logo {
        url
      }
      categories
      gists {
        documentId
        gist
      }
    }
}`