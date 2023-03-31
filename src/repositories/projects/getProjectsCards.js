import gql from "graphql-tag";

export const GET_PROJECTS_CARDS = gql`query GetProjectsCards ($selectedCompanies: [ID], $selectedLanguages: [ID]){
          projectsCards: projects(filters: { 
            languages: { id: { in: $selectedLanguages } },
            company: { id: { in: $selectedCompanies } }
          }) {
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