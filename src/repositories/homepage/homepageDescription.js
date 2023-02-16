import gql from "graphql-tag";

export const GET_HOMEPAGE_DESCRIPTION = gql`query  {
        homepageDescription: homepage {
          data {
            id
            attributes {
              description
            }
          }
        }
      }`