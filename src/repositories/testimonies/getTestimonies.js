import gql from "graphql-tag";

export const GET_TESTIMONIES = gql`query GetTestimonies {
  testimonies {
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