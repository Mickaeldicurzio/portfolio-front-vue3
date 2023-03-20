import gql from "graphql-tag";

export const GET_COMPANIES = gql`query GetCompanies {
  companies {
    data {
      id,
      attributes {
        name,

        logo {
          data {
            attributes {
              url
            }
          }
        }
        experiences {
          startDate
          endDate
          contractType
          description
          post
        }
      }
    }
  }
}
`