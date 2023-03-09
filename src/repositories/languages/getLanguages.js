import gql from "graphql-tag";

export const GET_LANGUAGES = gql`query GetLanguages {
  languages {
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
        gists {
          data {
            id
            attributes {
              gist
            }
          }
        }
      }
    }
  }
}`