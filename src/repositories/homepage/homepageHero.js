import gql from "graphql-tag";

export const GET_HOMEPAGE_HERO = gql`query  {
        homepageHero: homepage {
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