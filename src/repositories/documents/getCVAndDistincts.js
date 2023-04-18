import gql from "graphql-tag";

export const GET_CV_AND_DISTINCTS = gql`query CVAndDistincts {
  documents: homepage {
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