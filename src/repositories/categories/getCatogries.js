import gql from "graphql-tag";

export const GET_CATEGORIES = gql`query GetCategories ($locale: String!) {
  categories: categories {
    data {
      attributes {
        CategoryName
        languages (filters: {locale: {eq: $locale}}, sort: "name:asc") {
          data {
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