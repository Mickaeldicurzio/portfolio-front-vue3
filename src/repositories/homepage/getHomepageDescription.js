import gql from "graphql-tag";

export const GET_HOMEPAGE_DESCRIPTION = gql `query GetHomepageDescription ( $locale: I18NLocaleCode!) {
        homepageDescription : homepage (locale: $locale) {
          data {
            id
            attributes {
              description
            }
          }
        }
      }`