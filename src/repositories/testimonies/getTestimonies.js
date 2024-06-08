import gql from "graphql-tag";

export const GET_TESTIMONIES = gql`query GetTestimonies ( $locale: I18NLocaleCode!) {
  testimonies(locale: $locale, sort: "date:desc") {
    data {
      attributes {
        testimony
        profile
        pictures {
          data {
            attributes {
              url
            }
          }
        },
        name,
        date
        profile
        company {
          data {
            attributes {
              logo {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`