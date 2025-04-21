import gql from "graphql-tag";

export const GET_COMPANIES = gql`query GetCompanies ( $locale: I18NLocaleCode! ) {
  companies (locale: $locale) {
    documentId,
    name,
    logo {
      url
    }
    experiences {
      startDate
      endDate
      contractType
      description
      post
    }
    actual
  }
}
`