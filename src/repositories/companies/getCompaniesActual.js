import gql from "graphql-tag";

export const GET_ACTUAL_COMPANIES = gql`query GetCompanies ( $locale: I18NLocaleCode!, $actual: Boolean! ) {
  companies (sort: "experiences.startDate:desc", locale: $locale, filters: {
    actual: { eq: $actual }
  }) {
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
    link
  }
}
`