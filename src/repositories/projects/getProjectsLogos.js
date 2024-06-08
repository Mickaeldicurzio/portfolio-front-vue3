import gql from "graphql-tag";

export const GET_PROJECTS_LOGOS = gql`query GetProjectsLogos ($locale: I18NLocaleCode!){
          projectsLogos: projects (
          locale: $locale,
          sort: "updatedAt:asc"
          filters: {link: {not: null}}
          pagination: {start: 0, limit: 6},
          ) {
            data {
              id
              attributes {
                title
                link
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
      }`