import gql from "graphql-tag";

export const GET_CATEGORIES = gql`query GetCategories ($locale: String!) {
  categories: categories {
    CategoryName
    languages (filters: {locale: {eq: $locale}}, sort: "name:asc") {
      logo {
        url
      }
      name
    }
    color {
      color
    }
  }
}
`