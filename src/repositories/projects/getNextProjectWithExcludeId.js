import gql from "graphql-tag";

export const GET_NEXT_PROJECT_WITH_EXCLUDE_ID = gql`query getNextProjectWithExcludeId ($excludeId: ID, $startPosition: Int, $locale: I18NLocaleCode!){
  nextProjects: projects(
    locale: $locale,
    pagination: {start: $startPosition, limit:6},
    filters: {id: {notIn: [$excludeId] }}
  ) {
    data {
      id
      attributes {
        title
        link
        projectDate
        description
        languages {
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
      }
    }
  }
}
`