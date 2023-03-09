import gql from "graphql-tag";

export const GET_CATEGORIES = gql`query GetCategories {
  categories: categories {
    data {
      attributes {
        CategoryName
        languages {
          data {
            id
            attributes {
              logo {
                data {
                  attributes {
                    url
                  }
                }
              }
              name
            }
          }
        }
        color {
          data {
            attributes {
              color
            }
          }
        }
      }
    }
  }
}
`