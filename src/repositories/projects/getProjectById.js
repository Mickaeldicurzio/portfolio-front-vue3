import gql from "graphql-tag";

export const GET_PROJECT_BY_ID = gql`query  GetProjectById ($id: ID!, $locale: String!){
  project(id : $id) {
    data {
      attributes {
        title
        projectDate
        link
        description
        languages {
          data {
            attributes {
              name
              category {
                data {
                  attributes {
                    CategoryName
                  }
                }
              }
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
        company {
          data {
            attributes {
              name
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
        galerie {
          data {
            attributes {
              url
            }
          }
        }
        localizations (filters: {locale: {eq: $locale}}) {
          data {
            id
            attributes {
              localizations {
                data {
                  id
                }
              }
              title
              description
              locale
            }
          }
        }
      
      }
    }
  }
}`