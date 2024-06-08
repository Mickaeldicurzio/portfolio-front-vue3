import gql from "graphql-tag";

export const GET_LOCALES_LIST = gql`query GetLocalesList {
        localesList:   i18NLocales {
            data {
              id
              attributes {
                name
                code
              }
            }
          }
      }`