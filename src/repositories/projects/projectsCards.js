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
                languages {
                  data {
                    id,
                    attributes {
                      name
                      logo {
                        data {
                          id,
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
                    id,
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