import gql from "graphql-tag";

export const GET_PROJECTS_SLIDES = gql`query GetProjectsSlides {
        projectsSlides: projects {
          documentId
          title
          link
          galerie {
            alternativeText
            url
          }
          company {
            logo {
              url
            }
          }
        }
      }`