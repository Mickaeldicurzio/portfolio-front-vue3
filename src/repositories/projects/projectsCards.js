import gql from "graphql-tag";

export const GET_PROJECTS_CARDS = gql`query GetProjectsCards {
        projectsCards: projects {
            data {
              id
              attributes {
                title
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