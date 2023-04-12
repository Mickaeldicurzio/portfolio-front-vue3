import gql from "graphql-tag";

export const GET_ABOUT_ME_TRAVELS = gql`query getAboutMeTravels {
  travels: aboutMe {
    data {
      attributes {
        Travel {
          Place
          dateStart
          dateEnd
          galery {
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
`