import gql from "graphql-tag";

export const GET_PROJECTS_SLIDES = gql`query GetProjectsSlides {
        projectsSlides: projects {
            data {
              id
              attributes {
                  title
                  link
                  galerie {
                  data  {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                company {
                  data {
                    attributes {
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
              }
            }
          }
      }`