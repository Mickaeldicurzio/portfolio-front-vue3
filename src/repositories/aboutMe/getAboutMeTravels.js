import gql from "graphql-tag";

export const GET_ABOUT_ME_TRAVELS = gql`query getAboutMeTravels ($locale: I18NLocaleCode!) {
  travels: aboutMe (locale: $locale) {
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