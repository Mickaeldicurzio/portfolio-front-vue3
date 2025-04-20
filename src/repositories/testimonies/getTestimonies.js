import gql from "graphql-tag";

export const GET_TESTIMONIES = gql`query GetTestimonies ( $locale: I18NLocaleCode!) {
  testimonies(locale: $locale, sort: "date:desc") {
    testimony
    profile
    pictures {
      url
    },
    name,
    date
    profile
    company {
      logo {
        url
      }
    }
  }
}
`