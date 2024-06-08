import gql from "graphql-tag";

export const GET_CV_AND_DISTINCTS = gql`query CVAndDistincts ( $locale: I18NLocaleCode!) {
  documents: homepage (locale: $locale) {
    data {
      attributes {
        cv {data{attributes{url}}}
        distinctions {
          title
          description
          link
        }
      }
    }
  }
}
`