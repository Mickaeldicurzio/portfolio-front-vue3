import gql from "graphql-tag";

export const GET_COMPANIES = gql`query GetCompanies ( $locale: I18NLocaleCode! ) {
  companies (locale: $locale) {
    data {
      id,
      attributes {
        name,

        logo {
          data {
            attributes {
              url
            }
          }
        }
        experiences {
          startDate
          endDate
          contractType
          description
          post
        }
      }
    }
  }
}
`