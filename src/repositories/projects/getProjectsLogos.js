import gql from "graphql-tag";

export const GET_PROJECTS_LOGOS = gql`query GetProjectsLogos {
          projectsLogos: projects {
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