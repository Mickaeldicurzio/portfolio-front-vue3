import gql from "graphql-tag";

export const GET_HOMEPAGE_HERO = gql`query GetHomepageHero ( $locale: I18NLocaleCode!) {
        homepageHero: homepage (locale: $locale) {
          data {
            id
            attributes {
              hero {
                background {
                  data {
                    attributes {
                      name, url, alternativeText
                    }
                  }
                }
                title
                subtitle
              }
            }
          }
        }
      }`