import gql from "graphql-tag";

export const GET_HOMEPAGE_HERO = gql`query GetHomepageHero ( $locale: I18NLocaleCode!) {
        homepageHero: homepage (locale: $locale) {
          documentId
            hero {
              background {
                  name, url, alternativeText
              }
              title
              subtitle
            }
        }
      }`